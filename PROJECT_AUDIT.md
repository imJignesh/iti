# Ignite Training Institute — Project Audit
_Generated: 2026-06-25 | Updated with deep integration analysis_

---

## HOW KEY INTEGRATIONS WORK

### BOOTSTRAP — How It's Integrated

Bootstrap is split into two layers:

**Layer 1 — Critical utilities (inlined, instant)**
`_document.js` ships ~11KB of minified Bootstrap utilities directly in the HTML `<style>` tag. Zero network request. Available before any JS runs.

Classes inlined in `critical.css`:
- Layout: `container`, `row`, `col-*`, `col-lg-*`, `col-xl-*`, `col-md-*`
- Flex: `d-flex`, `d-none`, `d-block`, `d-lg-flex`, `d-lg-none`, `flex-column`, `flex-lg-row`, `align-items-center`, `justify-content-*`
- Spacing: `m-*`, `p-*`, `mb-*`, `mt-*`, `px-*`, `py-*`, `gap-*`, `g-*`, `gx-*`, `gy-*`
- Form: `form-control`, `invalid-feedback`, `alert`, `alert-success`, `alert-danger`
- Buttons: `btn`, `btn-link` (FAQ accordion buttons depend on these)
- Custom extras added for this project: `bg-lg-none`, `shadow-lg-none`, `p-lg-0`, `z-lg-auto` (used in Header nav)

**Layer 2 — Full Bootstrap (deferred, non-blocking)**
Loaded in `_app.js` via Next.js `<Script strategy="afterInteractive">` which JS-injects a `<link>` tag after the page becomes interactive:
```js
(function(){
  var l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css';
  l.crossOrigin = 'anonymous';
  document.head.appendChild(l);
})();
```
This loads Bootstrap 5.3.7 (232KB) from jsDelivr CDN **after** the page is interactive — so it never blocks FCP or LCP.

**Bootstrap dependency map — what breaks if Bootstrap never loads:**
| Component | Classes Used | Status |
|-----------|-------------|--------|
| Header nav (mobile toggle) | `d-none`, `d-flex`, `d-lg-flex`, `flex-column`, `flex-lg-row`, `position-absolute`, `top-100`, `start-0`, `w-100`, `bg-white`, `p-4`, `px-5`, `z-3`, `col-auto`, `d-sm-block` | ✅ All in critical.css |
| FaqSection buttons | `btn`, `btn-link`, `w-100`, `d-flex`, `justify-content-between`, `align-items-center`, `text-start`, `text-decoration-none`, `p-0` | ✅ All in critical.css |
| InfoCard forms | `form-control`, `g-2`, `mb-3`, `col-12`, `alert-success`, `alert-danger` | ✅ All in critical.css |
| Below-fold course components | Various Bootstrap grid + utilities | ✅ Bootstrap loads before user scrolls to them |
| Tables, badges, dropdowns, modals | Not used in this project | N/A |

**Conclusion:** The page looks and works correctly even before Bootstrap CDN loads. Bootstrap layer 2 is insurance for any utility not caught in critical.css.

---

### LOCOMOTIVE SCROLL — How It's Integrated

Locomotive Scroll is a smooth-scrolling library. Here's the full chain:

**Step 1 — Provider (`LocomotiveScrollProvider.js`)**
Dynamically imported in `_app.js` with `{ ssr: false }` — never runs on the server.

```
_app.js
  └── shouldLoadLocomotiveScroll (state, checked in useEffect)
        ├── false → render MainContent directly (mobile/bots)
        └── true  → wrap MainContent in <LocomotiveScrollProvider>
```

The check in `_app.js` (runs once on mount):
- `isMobileDevice()` — true if UA matches mobile regex OR `window.innerWidth <= 768`
- `isPageSpeedInsights()` — true if UA contains Lighthouse/PSI strings
- If either is true → `shouldLoadLocomotiveScroll = false`

**Step 2 — Inside LocomotiveScrollProvider**

Has its own internal check (redundant safety):
- Checks `window.innerWidth > 991` on mount and on resize
- If width ≤ 991 → sets `isScrollEnabled = false`, destroys instance if running

When enabled:
1. Dynamically imports `locomotive-scroll` (code-split, only loads on desktop)
2. Creates instance on the `scrollRef` div that wraps all children
3. Config: `smooth: true`, `lerp: 0.1`, `rootMargin: '0px'`
4. Exposes instance via `ScrollContext`

The rendered DOM becomes:
```html
<div data-scroll-container>   ← Locomotive takes over scrolling on this div
  <Header />
  <Page />
  <Footer />
  <DelayedPopup />
</div>
```

**Step 3 — `useScroll()` hook**
Any component can call `useScroll()` to get the Locomotive instance. Used in:
- `LazySection.js` — calls `scroll.update()` via ResizeObserver when content resizes (so Locomotive recalculates scroll height after dynamic components load)

**Step 4 — `data-scroll` attributes on DOM elements**
8,161 lines across the codebase have Locomotive data attributes. When Locomotive is active, it watches these elements:

| Attribute | Purpose |
|-----------|---------|
| `data-scroll` | Mark element for Locomotive observation |
| `data-scroll-class="is-inview"` | Add CSS class when element enters viewport (triggers CSS animations) |
| `data-scroll-class="is-clipped"` | Alternate animation class |
| `data-scroll-repeat="true"` | Re-trigger animation every time element enters viewport |
| `data-scroll-offset="-10%"` | Trigger earlier/later than default |
| `data-scroll-section` | Mark a scroll section boundary |

These attributes are on elements in: `Footer`, `SharedBlog`, `About`, `MovingBanner`, `TestSeriesBanner`, and virtually every course component section.

**When Locomotive is disabled (mobile/bots):**
- The `data-scroll-*` attributes are just ignored HTML attributes — harmless
- No smooth scroll, no JS-controlled scroll at all
- Normal browser scroll applies
- Animations that depend on `is-inview` class won't trigger (elements stay in their default state)

**Full activation map:**
```
Desktop (>991px, non-bot):
  _app.js useEffect → shouldLoadLocomotiveScroll = true
  → <LocomotiveScrollProvider> wraps MainContent
  → LocomotiveScrollProvider useEffect → width > 991 → isScrollEnabled = true
  → dynamic import('locomotive-scroll') → new LocomotiveScroll({ el: scrollRef })
  → data-scroll-* attributes on elements become active
  → LazySection ResizeObserver calls scroll.update() when lazy components load

Mobile (≤768px) or bot:
  _app.js useEffect → shouldLoadLocomotiveScroll = false
  → MainContent rendered directly, no wrapper
  → locomotive-scroll JS never downloaded
  → data-scroll-* attributes ignored
  → Normal browser scroll
```

**NOTE — Two-layer disable (redundant):**
`_app.js` checks `<= 768px` to skip the wrapper. `LocomotiveScrollProvider` internally checks `> 991px` to enable. So on a 900px window, the provider IS loaded but Locomotive stays disabled internally. On a 768px window, provider is never loaded at all.

---

### GLOBAL COMPONENTS — How They Connect

```
_app.js (MyApp)
├── PopupProvider (Context: isManualOpen, openManualPopup, closeManualPopup)
│   ├── Scripts (Bootstrap, GTM, gtag, Meta Pixel) — all afterInteractive
│   └── [LocomotiveScrollProvider?]
│       └── MainContent
│           └── <div className={montserrat.className + montserrat.variable}>
│               ├── Header  ← receives setHeaderHeight prop
│               ├── <Component {...pageProps} headerHeight={headerHeight} />  ← current page
│               ├── Footer
│               └── DelayedPopup
│           + sticky "Get a Free Demo" button (shown after scroll >100px)
```

**`headerHeight` flow:**
1. `_app.js` initializes `headerHeight = 102` (prevents CLS on load)
2. `Header.js` receives `setHeaderHeight` as prop
3. `ResizeObserver` on `<header>` element fires → calls `setHeaderHeight(height)`
4. `_app.js` state updates → re-renders `MainContent`
5. Every page receives `headerHeight` prop → uses it for `paddingTop` to prevent content going under fixed header
6. This is skipped entirely for `isPageSpeedInsights()` bots

**`PopupContext` flow:**
1. `PopupProvider` wraps everything
2. `DelayedPopup` consumes context to know open/close state
3. Any component can `useContext(PopupContext)` and call `openManualPopup()` to trigger it

**`Montserrat` font:**
- Configured once via `next/font/google` in `_app.js`
- `montserrat.className` → applies the font-family rule
- `montserrat.variable` → sets `--font-montserrat` CSS variable
- Applied to the wrapping `<div>` in `MainContent` → all children inherit it
- `critical.css` references `var(--font-montserrat)` in `body` rule — font variable is available immediately

**Phone routing:**
Both `Header` and `Footer` check `router.pathname` against a hardcoded list of "copy" pages:
```js
const copyPages = ['/courses/ibdp-tutors-in-dubai-copy', '/british-curriculum-tutors-in-dubai-copy', ...]
const phoneNumber = isCopyPage ? '+971588589958' : '+971568357374';
```
This affects: Call button href, WhatsApp link, and the gtag conversion events.

---

## 1. GLOBAL SETUP (every page)

### `_document.js`
Runs on server — zero JS bundle cost.

- **DNS:** preconnect `googletagmanager.com`, dns-prefetch `cdn.jsdelivr.net`, `google-analytics.com`
- **LCP Preloads:**
  - Mobile (max-width: 767px): `/images/video-cover-mobile.webp` — `fetchPriority="high"`, `imagesrcset`
  - Desktop (min-width: 768px): `/images/video-cover.webp` — `fetchPriority="high"`
  - Logo: `/images/logo.svg` — `fetchPriority="low"`
- **Inlined CSS:** `critical.css` (~11KB) shipped as `<style dangerouslySetInnerHTML>` — zero network request
  - Bootstrap utilities (container, row, col-*, flex, grid, spacing, typography)
  - CSS variables (`--font-montserrat`)
  - Reset (`* { box-sizing, margin, padding }`)
  - Hero container styles (`.hero-container`, `.hero-bg`, `.hero-img`)
  - Page content padding (`.page-content-padding`) with responsive breakpoints
- **Meta:** viewport, theme-color `#000000`, x-dns-prefetch-control

### `_app.js`

**Always-loaded components:**
| Component | Import | CSS |
|-----------|--------|-----|
| `Header` | static | `Header.module.css` (756 lines) |
| `Footer` | static | `Footer.module.css` (371 lines) |
| `DelayedPopup` | dynamic, no SSR | `DelayedPopup.css` (188 lines) |
| `LocomotiveScrollProvider` | dynamic, no SSR | — (disabled on mobile <768px & bots) |

**Global CSS imports:**
- `@/styles/globals.css` — locomotive-scroll inline, color vars, resets, utilities
- `@/styles/DelayedPopup.css` — modal overlay
- `Montserrat` via `next/font/google` (weights 400/700, display: swap, variable: `--font-montserrat`)

**Third-party scripts (all `afterInteractive` — never block render):**
| Service | ID / URL | Purpose |
|---------|----------|---------|
| Bootstrap 5.3.7 | `cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css` | CSS framework (JS-injected) |
| Google Tag Manager | `GTM-PMG2GSQ` | Event container |
| Google Ads / GA4 | `AW-844959495` | Conversion tracking |
| Meta Pixel | `1590586591378731` | Facebook ad tracking |

**Conversion events (gtag):**
- Demo CTA: `AW-844959495/i6DpCNnjiP4bEIee9JID`
- Call button: `AW-844959495/LGsACP7qiP4bEIee9JID`
- WhatsApp: `AW-844959495/qUVOCIHriP4bEIee9JID`

**Global state:**
- `PopupContext` — manages `DelayedPopup` open/close
- `headerHeight` — set via `ResizeObserver` in Header, passed to all pages for top-padding
- Sticky "Get a Free Demo" button — visible after 100px scroll on mobile, always on desktop
- Phone routing — main pages: `+971568357374`, copy/variant pages: `+971588589958`

---

## 2. PAGES (56 total)

### Homepage — `/` (`index.js`)
- **ATF (static):** `Hero` component — video-cover poster + deferred video load (6s mobile, 2s desktop)
- **Below-fold (dynamic, lazy via LazySection):** `Course`, `MarqueeBanner`, `About`, `Test`, `Subjects`, `Usps`, `Trainers`, `Testimonial`, `Blog`
- **Data:** `getStaticProps` → `revalidate: 3600` (ISR) → blog posts from `/src/data/blog/list.json`
- **SEO:** `SEO`, `SEOHead`, `JsonLd` components
- **CSS:** `Hero.module.css`, `Course.module.css`, `About.module.css`, `Subjects.module.css`, `Trainers.module.css`, `Usps.module.css`, `MarqueeBanner.module.css`, `Test.module.css`, `Testimonial.css` (all in `src/styles/home-copy/`)
- **Current perf:** LCP 3.8s mobile, FCP 1.2s, TBT 570ms, CLS 0

### Course Pages (6 routes + "copy" variants)
Routes: `/courses/a-level-tutors-in-dubai`, `/courses/ibdp-tutors-in-dubai`, `/courses/ib-curriculum-tutors-in-dubai` (and `-copy` variants), `/courses/igcse-tutors-in-dubai`, `/courses/myp-tutors-in-dubai`, `/advanced-placements-tutors-in-dubai`

- **ATF:** `InfoCard` (form: name, email, phone, grade, school, subject)
- **Below-fold (dynamic):** `Accordion`, `Blog`, `CourseCard`, `FAQSection`, `IgniteAchievements`, `IgniteAboutCard`, `Trainers`, `WhatWeOfferSection`, `MarqueeBanner`, `ReviewsSection`, `SubjectsCard`, `UniImagesCard`
- **CSS:** Course-specific directories (`styles/a-level/`, `styles/ib/`, `styles/igcse/`, `styles/ap/`, `styles/act/`, `styles/myp/`)
- **JSON-LD:** `FAQPage` schema
- **Form:** → `/api/submit-form`
- **Data:** `getStaticProps` (SSG)

### Subject Pages (12 routes)
`/maths-tutor-in-dubai`, `/english-tutor-in-dubai`, `/physics-tutor-in-dubai`, `/chemistry-tutor-in-dubai`, `/biology-tutor-in-dubai`, `/economics-tutor-in-dubai`, `/computer-science-tutor-in-dubai`, `/french-tutor-in-dubai`, `/spanish-tutor-in-dubai`, `/psychology-tutor-in-dubai`, `/business-studies-tutor-in-dubai`, `/accounting-tutor-in-dubai`

- **Pattern:** Banner → InfoCard → FAQ → Reviews → Trainers → Blog
- **CSS:** Subject-specific directories
- **JSON-LD:** `FAQPage` + `EducationalOrganization`

### `/join-free-demo-class` (+ `-copy` variant)
- **Components:** `InfoCard`, `SubjectsCard`, `MarqueeBanner`, `Testimonial` (Swiper carousel), `CallToAction`
- **CSS:** `styles/freedemo/freedemo.module.css`, `styles/freedemo/Acheivements.module.css`
- **Extras:** `swiper/css`, `swiper/css/navigation`

### Blog Pages
- `/blog` — list page, SWR fetch, pagination (`X-WP-TotalPages` header)
- `/blog/[slug]` — single post, SSG
- `/category/[category-slug]` — category listing
- **CSS:** `bloginnerpage.css`, `bloginnerpage.module.css`, `Blogpg.css`
- **Data:** WordPress REST API → `/api/sync-blogs` → `list.json`
- **JSON-LD:** Article/BlogPosting schema

### `/about-us`
- **Components:** `AboutBanner` (ATF), `IgniteAboutCard`, `WhyChooseUs`, `Timeline`, `MeetOurFounders`, `MarqueeBanner`, `LifeAtIgniteCarousel`, `TutoringHeroSection`
- **JSON-LD:** `EducationalOrganization` (with contact point, address, social links)

### `/contact-us`
- **Components:** `ContactBanner`, form fields (name, email, phone, grade, school, message, courses, heard-about)
- **CSS:** `contact.css` loaded via `<Head><link>` (render-blocking ⚠)
- **Form:** → `/api/submit-form`, formType: `CONTACT_US`

### `/career`
- **Components:** `CareerForm`
- **Form:** → `/api/career-upload` (resume upload)

### `/our-team`
- **CSS:** `team.module.css`
- **Deps:** Lucide React icons

### `/courses` — Course listing/overview

### `/test-series` — Test prep series

### Thank-You Pages (9)
`/thank-you-contact`, `/thank-you-tutor`, `/thank-you-organic`, `/thank-you-newsletter`, `/thank-you-blog`, `/thank-you-career`, `/thank-you-popup`, `/thank-you-subject`, `/thank-you-homeschooling`
- Simple confirmation + CTA, no forms

### Utility
- `/robots.txt` → `robots.txt.js`
- `/sitemap.xml` → `sitemap.xml.js`
- `/404` → `404.js` + `404.module.css`

### Dynamic Catch-all
- `[slug].js` — course/content pages, CSS: `styles/slug/slug.module.css`

---

## 3. COMPONENT INVENTORY

### Core Layout (always loaded via `_app.js`)

**`Header.js`**
- CSS: `Header.module.css` (756 lines)
- Responsive breakpoint: 992px
- Phone routing: main (`+971568357374`) vs copy (`+971588589958`) pages
- gtag conversions on Call and WhatsApp buttons
- `ResizeObserver` → sets `headerHeight` state → passed to all pages

**`Footer.js`**
- CSS: `Footer.module.css` (371 lines)
- Newsletter form → `/api/submit-form`, formType: `NEWSLETTER`
- Phone routing same as Header

**`DelayedPopup.js`**
- CSS: `DelayedPopup.css` (188 lines)
- No SSR, uses `PopupContext`

**`LocomotiveScrollProvider.js`**
- No SSR, disabled on mobile (<768px) and PageSpeed Insights bots

### SEO / Meta
- **`SEO.js`** — title, description, keywords, canonical, OG, Twitter Card
- **`SEOHead.js`** / **`SEOHead.optimized.js`** — preload images/video, title, description
- **`JsonLd.js`** — injects JSON-LD structured data (EducationalOrganization, FAQPage, Article, etc.)

### Shared Utilities
- **`LazySection.js`** — Intersection Observer wrapper for below-fold lazy loading
- **`GlobalPhoneInput.jsx`** — Phone input with UAE 🇦🇪 default flag
- **`SharedBlog.js`** — Reusable blog card display
- **`MarqueeBanner.js`** — Scrolling banner (used on homepage + course pages)
- **`CustomImageWrapper.js`** — Used by Footer and other components

### Course-Specific Component Directories
Each course has its own component folder mirroring this pattern:

```
src/components/
├── homeCopy/        Hero, Course, About, Test, Subjects, Usps, Trainers, Testimonial, Blog, MarqueeBanner
├── a-level/         InfoCard, InfoCardForm, InfoCardLeft, CourseCard, IgniteAboutCard, IgniteAchievements,
│                    Blog, FaqSection, MarqueeBanner, Reviews, SubjectCard, UspsSection, Trainers, WhatWeOffer
├── ib/ ibdp/        Same pattern as a-level
├── act/             Accordion, Blog, CourseCard, FAQSection, IgniteAchievements, IgniteAboutCard,
│                    StudentAchivement, SubjectCard, MarqueeBanner, UspsSection
├── ap/              Same pattern as act
├── igcse/ myp/      Course-specific components
├── bc/              InfoCard
├── freedemo/        InfoCard, SubjectCard, MarqueeBanner, Testimonial, CallToAction
├── maincourse/      Banner, MainBanner, Test, CallToAction, videoTrainer, Learning, LifeAtIgniteCarousel
├── aboutus/         Banner, IgniteAboutCard, WhyChooseUs, Timeline, MeetOurFounders,
│                    MarqueeBanner, LifeAtIgniteCarousel, TutoringHeroSection
├── career/          Banner, CareerForm, IgniteCareerCard
├── contact/         Banner
├── team/            Banner
├── blog/            Blog-specific components
└── subject-*/       Subject-specific tutoring components
```

### `InfoCard` (ATF Lead Form — used on all course + subject pages)
- Fields: name, email, phone (GlobalPhoneInput), grade, school, subject
- Submits to `/api/submit-form`
- CSS: per-course InfoCard CSS modules

### `FaqSection` (26 variants — one per course/subject page)
- CSS grid accordion: `grid-template-rows: 0fr → 1fr` with `transition`
- No JS height measurement
- Depends on Bootstrap `btn btn-link` classes
- Parent page provides JSON-LD `FAQPage` schema

---

## 4. CSS INVENTORY (~120 files, ~15,000 lines)

### Global Files
| File | Lines | Loaded via | Notes |
|------|-------|-----------|-------|
| `critical.css` | ~465 | `_document.js` `<style>` inline | Bootstrap utilities, reset, hero styles |
| `globals.css` | 492 | `_app.js` import | Locomotive CSS inlined, color vars, resets |
| `DelayedPopup.css` | 188 | `_app.js` import | Modal overlay |
| `--globals.css` | 328 | (unused/deprecated) | Backup/archived version |

### Component Modules
| File | Lines | Component |
|------|-------|-----------|
| `Header.module.css` | 756 | Header navigation |
| `Footer.module.css` | 371 | Footer layout |
| `Home.module.css` | 1624 | Homepage (legacy) |
| `home-copy/Hero.module.css` | ~700 | Hero section |
| `home-copy/Course.module.css` | — | Course cards |
| `home-copy/About.module.css` | — | About section |
| `home-copy/Subjects.module.css` | — | Subjects grid |
| `home-copy/Usps.module.css` | — | USPs section |
| `home-copy/Trainers.module.css` | — | Trainers grid |
| `home-copy/Test.module.css` | — | Test series |
| `home-copy/MarqueeBanner.module.css` | — | Marquee |
| `ib.module.css` | 399 | IB pages |
| `ibdp.module.css` | 211 | IBDP pages |
| `404.module.css` | — | 404 page |

### Course-Specific CSS Directories
Each directory has: `Hero.css`, `Faq.css`, `Subjects.css`, `Acheivements.css`, `Article.css`, `Curriculum.css`, `GallerySlider.css`, `Usps.css`

```
styles/
├── home/            About, Alumni, Blog, BlogSection, Course, Hero, MovingBanner, Subjects, Test, Testimonial, Trainers, Usps
├── home-copy/       (module variants of above — actively used)
├── a-level/         InfoCard, InfoCardForm, InfoCardLeft + course components
├── act/             Acheivements, Article, Curriculum, Faq, GallerySlider, Hero, Subjects, Usps
├── ap/              Same as act + Whystud
├── ib/              Acheivements, Article, Curriculum, Faq, GallerySlider, Subjects, Usps
├── igcse/ myp/      Course-specific
├── blog/            Blogpg.css
├── bloginnerpage.*  bloginnerpage.css, bloginnerpage.module.css (287-299 lines each)
├── contact/         ContactHeadline.css, ContactHeadline.module.css, contact.css
├── freedemo/        freedemo.css, freedemo.module.css, Acheivements.module.css, Subjects.css
├── maincourse/      Test.module.css, callToAction.css
├── team/            team.css, team.module.css
├── slug/            slug.css, slug.module.css
└── ibc/             Trainers.css
```

### CSS Loading Methods
| Method | Files | Impact |
|--------|-------|--------|
| `<style>` inline (`_document.js`) | critical.css | ✅ Zero latency |
| Next.js bundle (SSR) | globals.css | ✅ Arrives with HTML |
| JS-injected deferred | Bootstrap 5.3.7 (232KB) | ✅ Non-blocking |
| **Render-blocking `<link>`** | **9 CSS module chunks, 52.5 KiB** | **⚠ 790ms block** |
| `<Head><link>` per-page | contact.css | ⚠ Blocking on contact page |

---

## 5. API ROUTES

| Route | Purpose | Input | Output |
|-------|---------|-------|--------|
| `/api/submit-form` | All lead forms | `formType` + fields | `{ success, redirectUrl }` |
| `/api/sync-blogs` | WP → JSON cache | — | Updates `src/data/blog/list.json` |
| `/api/career-upload` | Resume upload | File + fields | Success/error |
| `/api/vote` | Poll/vote | — | — |
| `/api/hello` | Health check | — | — |

**Form types:** `CONTACT_US`, `NEWSLETTER`, and per-page subject/course types

---

## 6. ZOHO + BREVO FORM INTEGRATION

### Architecture — two destinations per submission

Every form submission hits a Next.js API route which then fans out to **both** Zoho CRM Forms and Brevo (email marketing) in sequence:

```
User fills form
  → POST /api/submit-form  (or /api/career-upload for CV uploads)
      ├── 1. Match form config by formType or URL path
      ├── 2. Submit to Brevo (email contact list)   ← fires first
      └── 3. Submit to Zoho Forms                   ← fires second
            → return { success, redirectUrl } to browser
              → browser navigates to /thank-you-*
```

### Zoho account

All forms submit to the same Zoho account: **`sumitignitetrain1`**
Base URL pattern: `https://forms.zohopublic.com/sumitignitetrain1/form/{FormName}/formperma/{token}/htmlRecords/submit`

### How config matching works (`/api/submit-form.js`)

The API has an array of `FORM_CONFIGS`. Each config has:
- `type` — matches the `formType` field sent by the frontend
- `slugs` — fallback: if `formType` doesn't match, match by `req.body.pageinfo` URL path
- `zohoUrl` — which Zoho form receives the data
- `fieldMap` — maps frontend field names → Zoho field names (e.g. `name → SingleLine`, `phone → PhoneNumber_countrycode`)
- `redirectUrl` — where to send user after success
- `brevoListId` — which Brevo contact list to add to (defaults to list `12` if not set)

**Special case — popup forms:** If `formType === 'POPUP_FORM'`, the API first checks if the current URL path matches a `POPUP_FORM_COPY` config (for "copy" pages). If not, falls back to the generic `POPUP_FORM` config.

### Complete Zoho form map

| formType | Pages | Zoho Form Name | Redirect |
|----------|-------|----------------|----------|
| `TestSeries` | `/test-series` | TestSeries | `/thank-you-organic` |
| `NEWSLETTER` | Footer (all pages) | Newsletter | `/thank-you-newsletter` |
| `POPUP_FORM` | All pages (popup) | popupform | `/thank-you-popup` |
| `POPUP_FORM_COPY` | Copy pages (popup) | Copypagespopupform | `/thank-you-organic-copy` |
| `BLOG_SIDEBAR` | Blog pages | BlogDetailPage | `/thank-you-blog` |
| `Organic_Curriculum` | Course pages (main) | IgniteCourses | `/thank-you-organic` |
| `Tutor` | `/tutors-in-dubai`, `/private-tutors-in-dubai`, `/tutors-in-jlt-dubai` | Tests | `/thank-you-tutor` |
| `Freedemo` | `/join-free-demo-class` | Freedemo | `/thank-you-organic` |
| `Freedemo-copy` | `/join-free-demo-class-copy` | FreedemoCopy | `/thank-you-organic-copy` |
| `A-level-copy` | `/courses/a-level-tutors-in-dubai-copy` | ALevelCopy | `/thank-you-organic-copy` |
| `IGCSE-Copy` | `/courses/igcse-tutors-in-dubai-copy` | IGCSECopy | `/thank-you-organic-copy` |
| `MYP-Copy` | `/courses/myp-tutors-in-dubai-copy` | MYPCopy | `/thank-you-organic-copy` |
| `British_Curriculum-Copy` | `/british-curriculum-tutors-in-dubai-copy` | BritishCurriculumCopy | `/thank-you-organic-copy` |
| `IBDP-Copy` | `/courses/ibdp-tutors-in-dubai-copy` | IBDPDuplicate | `/thank-you-organic-copy` |
| `IB_Curriculum-Copy` | `/ib-curriculum-tutors-in-dubai-copy` | IBCurriculumCopy | `/thank-you-organic-copy` |
| `Homeschooling` | `/courses/homeschooling-tutors-in-dubai` | Homeschooling | `/thank-you-homeschooling` |
| `Organic_Subject` | All 12 subject pages | OrganicSubjectForm | `/thank-you-subject` |
| `CAREER_FORM` | `/career` | Career | `/thank-you-career` |
| `CONTACT_US` | `/contact-us` | Contact | `/thank-you-contact` |

### Zoho field name mapping (common pattern)

| Frontend field | Zoho field name |
|---------------|-----------------|
| `name` | `SingleLine` |
| `email` | `Email` |
| `phone` | `PhoneNumber_countrycode` |
| `school` | `SingleLine1` |
| `grade` | `SingleLine3` |
| `course` | `SingleLine3` |
| `message` | `MultiLine` |
| `pageinfo` | `SingleLine2` |
| `curriculum` | `SingleLine1` (popup) |

Phone is sent in **formatted international format** (e.g. `+971 50 123 4567`) — the `GlobalPhoneInput` component captures the full formatted value (including country code, brackets, spaces) specifically to match what Zoho's `PhoneNumber_countrycode` field expects.

### `pageinfo` field — how it's captured

Every form that supports it captures a `pageinfo` string client-side in a `useEffect`:
```js
setPageInfo(`URL: ${window.location.href} | ${document.title}`);
```
This is sent as a hidden field to Zoho (maps to `SingleLine2`), allowing the sales team to see exactly which page and URL the lead came from inside Zoho CRM.

### Career form — special handling (`/api/career-upload.js`)

The career form is different from all others because it includes a **file upload (CV/resume)**:
- Frontend: `multipart/form-data` POST directly to `/api/career-upload`
- API: uses `formidable` to parse the multipart request; `bodyParser: false` is set on the route
- File saved temporarily to `./tmp`, streamed to Zoho as `FileUpload` field, then deleted
- **Does NOT submit to Brevo** (career applicants are not added to marketing lists)
- Zoho hidden fields required: `zf_referrer_name`, `zf_redirect_url`, `zc_gad` (must be sent first in FormData)
- Max file size: 5MB

There is also a `CareerForm.jsx` component that has a **direct HTML form action** pointing straight to Zoho (`action='https://forms.zohopublic.com/...'`) — this is an older/alternate approach that bypasses the API route entirely. The API route (`/api/career-upload.js`) is the actively used path.

### Brevo (email marketing) integration

- **API:** `https://api.brevo.com/v3/contacts` (POST)
- **Auth:** `BREVO_API_KEY` environment variable
- **What's sent:** `email`, `FIRSTNAME` attribute, `listIds`
- **List IDs:** default `12`; `TestSeries` uses list `16`
- **`updateEnabled: true`** — if contact exists, updates their record rather than erroring
- **Not used for:** Career form submissions
- Brevo errors are caught and logged but **do not block** the Zoho submission — if Brevo fails, the form still submits to Zoho and redirects normally

### Submission flow code path

```
Browser → POST /api/submit-form
  req.body: { name, email, phone, grade, school, course, message,
              pageinfo, formType, curriculum, ... }

  1. Parse pageinfo URL → extract path
  2. Find FORM_CONFIGS entry by formType → then by path fallback
  3. Brevo: POST contact (email + name + listId) → non-blocking, errors ignored
  4. Zoho: POST URLSearchParams using fieldMap translation
  5. Zoho 200 or 302 → return { success: true, redirectUrl }
  6. Browser navigates to redirectUrl (/thank-you-*)
```

---

## 7. PERFORMANCE SNAPSHOT (as of 2026-06-25)

| Metric | Mobile | Notes |
|--------|--------|-------|
| LCP | 3.8s ⚠ | Target: <2s |
| FCP | 1.2s ✅ | Good |
| TBT | 570ms ⚠ | High — GTM loads 3x (427KB total) |
| CLS | 0 ✅ | Perfect |
| Performance Score | 74 | Target: 90+ |

**Known issues:**
1. **Render-blocking CSS** — 9 Next.js CSS module chunks, 52.5 KiB, 790ms longest
2. **GTM triple-loading** — `gtag.js` loads 3 times (144KB + 141KB + 141KB = 426KB). Fix: move Google Ads tag into GTM dashboard, remove explicit `gtag/js?id=AW-844959495` script
3. **Legacy JS polyfills** — `chunks/86c0b31e37059bab.js` (61KB gzipped) — `Array.prototype.at`, `Object.fromEntries`, etc. — 14.3KB saveable with modern browserslist (Turbopack may not honor `.browserslistrc`)
4. **Forced reflow** — `chunks/785fe87b29846bbc.js` (Swiper or animation lib) — 29ms

**What's been optimized:**
- Bootstrap 232KB deferred (JS-injected, `afterInteractive`)
- Critical CSS inlined in `_document.js`
- LCP image preloads in `_document.js` with correct `imagesrcset` (lowercase)
- `decoding="async"` on LCP image
- Locomotive Scroll disabled on mobile + bots
- All GTM/GA/Meta Pixel scripts deferred
- `LazySection` Intersection Observer for below-fold components
- Locomotive scroll CSS inlined in `globals.css` (removed `@import`)
- ResizeObserver in Header (replaced forced reflow pattern)
- CSS grid accordion in FaqSection (replaced JS height measurement)

---

## 7. SEO ARCHITECTURE

### Rendering Strategy (Critical for SEO)
| Page Type | Method | Notes |
|-----------|--------|-------|
| Homepage (`/`) | `getStaticProps` + ISR (revalidate: 3600s) | Fully static, rehydrates every hour |
| All static pages (tutors, courses, etc.) | Static (no data fetching) | Pre-built at deploy time |
| Blog listing (`/blog`) | `getServerSideProps` | SSR on every request |
| Blog post (`/blog/[slug]`) | `getServerSideProps` | Reads local JSON; falls back to WP API |
| Category pages | `getServerSideProps` | SSR |
| Thank-you pages | Static | No SSR needed — conversion pages |

**All pages are fully server-rendered — Google sees complete HTML with all meta tags.**

---

### SEO Components
Two components handle meta tags:

**`src/components/SEO.js`** — Full suite, used on most pages:
- `<title>`, `meta description`, `meta keywords`
- `<link rel="canonical">` — only renders if `url` prop is passed
- `og:title`, `og:description`, `og:type`, `og:url`, `og:image`
- `twitter:card` (summary_large_image)

**`src/components/SEOHead.js`** — Lightweight, used on a few older pages:
- Only `<title>` + `meta description` + image/video preloads
- **No canonical, no OG tags** — pages using this are partially missing social/SEO tags

**`src/components/JsonLd.js`** — Schema.org structured data renderer:
- Injects `<script type="application/ld+json">` in `<Head>`
- Used with `FAQPage` schema on several tutor pages

---

### Blog SEO — Yoast Integration
Blog posts pull SEO data from Yoast SEO fields stored in the WP post JSON (`_embedded` data):
- `yoastData.title` → page `<title>` (fallback: post title)
- `yoastData.description` → meta description (fallback: post excerpt, 160 chars)
- `yoastData.og_image[0].url` → `og:image` (fallback: featured image)
- `yoastData.focuskw` → prepended to keywords list
- `seoUrl` hardcoded as `https://ignitetraininginstitute.com/blog/{slug}`
- `og:type` explicitly set to `article` for blog posts

---

### Sitemap (`/sitemap.xml`)
Dynamic — generated via `getServerSideProps` in `src/pages/sitemap.xml.js`, cached 1 hour.

**What's included:**
- 28 static root pages (homepage, tutor pages, about, contact, blog, career, etc.)
- 5 `/courses/` pages
- All WP blog posts (fetched live from WP API, with `<lastmod>`)
- All WP blog categories (fetched live)

**What's correctly excluded:**
- All `-copy` ad landing pages
- All `thank-you-*` pages
- `/test-series` ← actually IS in sitemap

**Priority tags:** Tutor and curriculum pages get `<priority>0.9</priority>`. Others use default (0.5).

---

### Robots.txt (`/robots.txt`)
Dynamic via `src/pages/robots.txt.js`, cached 1 hour.
- `Allow: /` for all bots
- `Disallow: /wp-admin/`, `/wp-includes/`, `/xmlrpc.php`, feeds
- Explicitly allows all major AI bots: GPTBot, ClaudeBot, Perplexity, Google-Extended, Meta, Bytespider, CCBot, DuckDuckBot, Applebot, Amazonbot
- `Sitemap:` directive points to `https://ignitetraininginstitute.com/sitemap.xml`

---

### noindex Usage
| Pages | noindex set? |
|-------|-------------|
| `-copy` ad landing pages (british-curriculum-copy, ib-curriculum-copy, join-free-demo-copy, all courses copies) | ✅ Yes — `<meta name="robots" content="noindex">` |
| `thank-you-*` pages (10 pages) | ❌ **NO — PENDING FIX** |

---

### Canonical URLs
- Set via `SEO.js` only when `url` prop is passed — `<link rel="canonical" href={url} />`
- Blog posts: canonical = `https://ignitetraininginstitute.com/blog/{slug}` (hardcoded, correct)
- Homepage: canonical = `https://ignitetraininginstitute.com` ✅
- Pages using `SEOHead.js` instead of `SEO.js`: **no canonical set** (minor gap)

---

### Structured Data (Schema.org)
`FAQPage` schema implemented via `JsonLd.js` on:
- `advanced-placements-tutors-in-dubai.js`
- `act-tutors-in-dubai.js`
- Other tutor pages (grep: `import JsonLd`)

---

### Orphan Pages Cleaned Up (2026-06-25)
Deleted 4 unused page files that created live routes with no SEO value:
- `0000contact.js` → `/0000contact`
- `0index.js` → `/0index`
- `SubjectTutoring.js` → `/SubjectTutoring`
- `Home.js` → `/Home`

None were linked from anywhere in the codebase.

---

### Pending SEO Fixes
| # | Issue | Risk |
|---|-------|------|
| 1 | **10 thank-you pages missing `noindex`** — pages are publicly accessible and indexable | Medium — wastes crawl budget, conversion pages may appear in search |
| 2 | Pages using `SEOHead` instead of `SEO` have no canonical or OG tags | Low |

---

## 8. NOTES & GOTCHAS

- **"Copy" pages** (`-copy` suffix) use different phone numbers for tracking separate campaigns
- **`imagesrcset`** must be lowercase in JSX — React 19 passes unknown lowercase attributes as-is, but camelCase `imageSrcSet` gets rendered as camelCase (Chrome preload scanner ignores it)
- **Bootstrap dependency** — `FaqSection` uses `btn btn-link` Bootstrap classes. Critical CSS has these inlined to prevent FOUC before Bootstrap CDN loads
- **`headerHeight` prop** — passed from `_app.js` to every page component for padding-top. Set via `ResizeObserver` in `Header.js`
- **Locomotive Scroll** — disabled for mobile (<768px) and PageSpeed Insights user-agent (`isPageSpeedInsights()` util)
- **ISR** — homepage revalidates every 3600s. Blog list is pre-cached in `src/data/blog/list.json`
- **`--globals.css`** — appears to be a deprecated backup; not imported anywhere active

---

## 8. UTILITIES

### `src/utils/botDetection.js`
Two exports:
- `isPageSpeedInsights()` — checks `window.__lighthouse`, UA for `lighthouse`, `chrome-lighthouse`, `gtmetrix`, `pagespeed`, `speed insights`, `headlesschrome`
- `isBot()` — checks common crawlers (googlebot, bingbot, yandexbot, etc.) + calls `isPageSpeedInsights()`

**Used in:**
- `_app.js`: skips Locomotive Scroll render for bots + PSI
- `Header.js`: skips `ResizeObserver` for PSI (avoids forced-reflow metrics)

### `src/utils/cdn.js`
CDN helper for switching between local `/public/` assets and AWS S3:
- `CDN_URL`: `process.env.NEXT_PUBLIC_CDN_URL` || `https://iticdn.s3.ap-south-1.amazonaws.com`
- `USE_CDN`: `process.env.NEXT_PUBLIC_USE_CDN === 'true'`
- Exports: `getCDNUrl(path)`, `getImageUrl(path)`, `getVideoUrl(path)`, `getBackgroundImage(path)`
- **Currently OFF** — `NEXT_PUBLIC_USE_CDN` not set to `'true'` in production. All assets served from local `/public/`.

---

## 9. STATIC ASSETS (`/public/`)

### Images (`/public/images/`)
- 356 `.webp`, 141 `.avif`, 66 `.jpg`, 5 `.png`, 2 `.jpeg`, 1 `.svg` — 571 total files
- Cache-Control: `public, max-age=31536000, immutable` (set in `next.config.mjs`)
- LCP images: `video-cover.webp` (desktop), `video-cover-mobile.webp` (mobile)

### Assets (`/public/assets/`)
- ~160 `.webp` files — banners, backgrounds, UI elements, page-specific imagery
- Named organically (e.g., `Rectangle120.webp`, `navlogo.webp`, `founder1.webp`)

### Videos (`/public/videos/`)
- `hero-banner-video2.mp4` — hero section background video (loaded after 2s desktop / 6s mobile)
- Blog banner WebPs: `blog-bnr-1/2/3-desktop.webp`, `blog-bnr-1/2/3-mobile.webp`
- Blog GIFs as MP4: `blog-gif-2.mp4`, `blog-gif1.mp4`
- Legacy GIF files: `bnr-d.gif`, `bnr1-m.gif`

### Styles (`/public/styles/`)
7 page-specific CSS files loaded via `<link>` or `@import` (not CSS modules):
`Blog.css`, `Blogpg.css`, `bloginnerpage.css`, `contact.css`, `Ibdp.css`, `slug.css`, `team.css`

### Bootstrap (`/public/bootstrap.min.css`)
Local copy exists but is NOT used — Bootstrap loads from jsDelivr CDN via `_app.js`.

---

## 10. DATA LAYER (`/src/data/`)

### Blog Data
- `src/data/blog/list.json` — lightweight list of all posts (id, date, slug, title, excerpt, categories, tags, _embedded)
- `src/data/blog/posts/` — 173 individual JSON files, one per blog post slug (full WP post object)
- `src/data/blogs-list.json` — alternate list at root of `/data/`
- `src/data/blog/categories.json`, `tags.json` — taxonomy caches from WP
- `public/images/blogs/` — blog featured images downloaded locally during sync
- **Source of truth:** WordPress REST API at `api.ignitetraininginstitute.com`
- **Used for:** SSG (`getStaticProps`) on blog listing + individual post pages — avoids runtime WordPress API calls

### Blog Sync System (`src/lib/blog-sync-util.js` + `src/pages/api/sync-blogs.js`)

**Two sync modes:**

| Mode | Trigger | What it does |
|------|---------|-------------|
| Full Mirror | POST/GET `/api/sync-blogs` (no slug) | Fetches ALL posts from WP, rebuilds list.json, cleans up deleted posts |
| Single Post | POST/GET `/api/sync-blogs?slug=<slug>` | Updates one post JSON + updates its entry in list.json |

**Auth:** `Bearer IGNITE_SYNC_SECRET_2026` header OR `?token=IGNITE_SYNC_SECRET_2026` query param (hardcoded token — not in env)

**Full sync flow:**
1. Fetch all WP categories + tags → write `categories.json`, `tags.json`
2. Paginate all posts (50/page, `?_embed`) → for each post:
   - Download featured image to `public/images/blogs/{slug}.{ext}` (force re-download)
   - Write full post JSON to `src/data/blog/posts/{slug}.json`
   - Add lightweight entry to `allLightweightPosts[]`
3. Write `list.json` with all lightweight posts + total count + syncDate
4. Delete any local post JSON files not in current WP post set (cleanup)
5. **Auto git push:** `git add src/data/blog/ public/images/blogs/` → commit → `git push`

**Single post sync flow:**
1. Fetch post by slug from WP (`?_embed`)
2. Download/re-download featured image locally
3. Write/overwrite `posts/{slug}.json`
4. Update entry in `list.json` (insert at top if new, replace if existing)
5. **Auto git push** with commit message `Blog Sync: Updated "{post title}"`

**Key behavior:** After every sync (full or single), the server automatically commits and pushes to GitHub. Since CloudPanel deploys on push, this triggers a new deployment automatically — syncing blog content = re-deploying the site.

**WordPress integration:** WP Webhooks plugin calls `/api/sync-blogs` with `slug` in the body when a post is published/updated in WordPress admin.

---

## 11. ENVIRONMENT VARIABLES

| Variable | Used In | Purpose |
|----------|---------|---------|
| `BREVO_API_KEY` | `src/pages/api/submit-form.js` | Auth for Brevo email API |
| `NEXT_PUBLIC_CDN_URL` | `src/utils/cdn.js` | S3 CDN base URL (optional) |
| `NEXT_PUBLIC_USE_CDN` | `src/utils/cdn.js` | Enable CDN (`'true'` to activate) |
| `ANALYZE` | `next.config.mjs` | Enable `@next/bundle-analyzer` |
| `NODE_ENV` | `next.config.mjs` | Enables `removeConsole` in production |

---

## 12. ROUTING & DEPLOYMENT

### URL Structure
- `/` → `src/pages/index.js` (homepage with ISR `revalidate: 3600`)
- `/[slug]` → dynamic root-level pages (41 pages listed in `STATIC_ROOT_PAGES`)
- `/courses/[slug]` → 5 course sub-pages
- `/blog/[slug]` → individual blog posts (173 cached posts)
- `/category/[slug]` → 17 category pages
- `/api/*` → API routes (submit-form, career-upload, sync-blogs, sitemap, robots, etc.)

### Redirects
- **Hardcoded**: 26 redirects in `next.config.mjs`
- **Dynamic**: loaded from `redirects_parsed.json` at build time (file optional)
- **Auto-generated**: all 17 category slugs get `/{slug}` → `/category/{slug}` redirects

### Rewrites (Proxies)
- `/robots.txt` → `/robots.txt.js` (dynamic robots)
- `/sitemap.xml` → `/sitemap.xml.js` (dynamic sitemap)
- `/api/mpl/*` → `https://api.ignitetraininginstitute.com/wp-json/mpl/v1/*`
- `/api/wp/*` → `https://api.ignitetraininginstitute.com/wp-json/wp/v2/*`

### Deployment
- **Host:** AWS EC2 with **CloudPanel** as the server management panel
- **Deploy trigger:** GitHub → CloudPanel auto-deploys on push (Git-connected)
- `images: { unoptimized: true }` — bypasses Next.js image optimization pipeline; images served directly from AWS (no Vercel-style CDN transform)
- Security headers set in `next.config.mjs` `headers()` — may overlap with Cloudflare headers (CSP comment in code warns about this)
- Build: `next build` (Turbopack enabled via `turbopack: {}`)
- **CDN layer:** Cloudflare sits in front of AWS (referenced in next.config.mjs headers comment: "Simplified to avoid Cloudflare conflicts")
