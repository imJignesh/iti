// src/components/SEO.js
import Head from 'next/head';

const SITE_URL = 'https://ignitetraininginstitute.com';
const DEFAULT_DESCRIPTION = 'Discover the best courses and expert trainers for your career growth.';
const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/images/logo.webp`;

const PAGE_HERO_IMAGES = {
    '/': '/images/hero-banner-video-c1-poster.webp',
    '/join-free-demo-class': '/assets/act_bg_main.webp',
    '/courses': '/assets/mainb.webp',
    '/courses/igcse-tutors-in-dubai': '/assets/igcse.webp',
    '/courses/a-level-tutors-in-dubai': '/assets/alevel_bg_main.webp',
    '/courses/ibdp-tutors-in-dubai': '/assets/ibdp_bg_main.webp',
    '/courses/myp-tutors-in-dubai': '/assets/myp_bg_main.webp',
    '/courses/homeschooling-tutors-in-dubai': '/assets/homeschooling_bg_main.webp',
    '/ib-curriculum-tutors-in-dubai': '/assets/ibc_bg_main.webp',
    '/british-curriculum-tutors-in-dubai': '/assets/bc_bg_main.webp',
    '/advanced-placements-tutors-in-dubai': '/assets/ap_bg_main.webp',
    '/act-tutors-in-dubai': '/assets/act_bg_main.webp',
    '/tutors-in-dubai': '/assets/tutors.webp',
    '/tutors-in-jlt-dubai': '/assets/tutors.webp',
    '/private-tutors-in-dubai': '/assets/tutors.webp',
    '/about-us': '/assets/about-us-desktop.webp',
    '/career': '/assets/career-banner-desktop.webp',
    '/our-team': '/images/ourteam-desktop.webp',
    '/test-series': '/assets/act_bg_main.webp',
    '/blog': '/images/blog-banner-desktop.webp',
};

const SUBJECT_PAGE_PATHS = new Set([
    '/accounting-tutor-in-dubai',
    '/biology-tutor-in-dubai',
    '/business-studies-tutor-in-dubai',
    '/chemistry-tutor-in-dubai',
    '/computer-science-tutor-in-dubai',
    '/economics-tutor-in-dubai',
    '/english-tutor-in-dubai',
    '/french-tutor-in-dubai',
    '/maths-tutor-in-dubai',
    '/physics-tutor-in-dubai',
    '/psychology-tutor-in-dubai',
    '/spanish-tutor-in-dubai',
]);

const toAbsoluteUrl = (value, fallback) => {
    if (!value) return fallback;
    if (/^https?:\/\//i.test(value)) return value;
    return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`;
};

const getImageType = (value) => {
    const pathname = value.split('?')[0].toLowerCase();
    if (pathname.endsWith('.png')) return 'image/png';
    if (pathname.endsWith('.jpg') || pathname.endsWith('.jpeg')) return 'image/jpeg';
    if (pathname.endsWith('.avif')) return 'image/avif';
    return 'image/webp';
};

const getPageHeroImage = (pageUrl) => {
    try {
        const pathname = new URL(pageUrl).pathname.replace(/\/$/, '') || '/';
        if (pathname.startsWith('/category/')) return '/assets/career-banner-desktop.webp';
        if (SUBJECT_PAGE_PATHS.has(pathname)) return '/assets/subject-tutoring.webp';
        return PAGE_HERO_IMAGES[pathname];
    } catch {
        return undefined;
    }
};

const SEO = ({ title, description, url, image, imageAlt, keywords, preloadImages, loadInnerStyles }) => {
    // 1. We use the provided title directly (no global site name appended).
    const pageTitle = title || 'Ignite Training Institute';
    const pageDescription = description || DEFAULT_DESCRIPTION;
    const canonicalUrl = toAbsoluteUrl(url, SITE_URL);
    const pageHeroImage = getPageHeroImage(canonicalUrl);
    const socialImage = toAbsoluteUrl(image || pageHeroImage, DEFAULT_SOCIAL_IMAGE);
    const socialImageType = getImageType(socialImage);
    const socialImageAlt = imageAlt || `${pageTitle} - Ignite Training Institute`;

    return (
        <Head>
            {/* Primary SEO Tags */}
            <title>{pageTitle}</title>

            {/* Critical LCP Preloading - Only first image gets high priority */}
            {preloadImages && preloadImages.map((img, index) => (
                <link
                    key={index}
                    rel="preload"
                    as="image"
                    href={img.src}
                    type={img.type || "image/webp"}
                    media={img.media}
                    fetchPriority={index === 0 ? "high" : "low"}
                />
            ))}

            {/* Load Inner Page Styles (On-demand) */}
            {loadInnerStyles && (
                <link rel="stylesheet" href="/styles/Ibdp.css" />
            )}

            {/*  CRITICAL: The 'key' prop forces replacement of any default meta tag */}
            <meta
                name="description"
                content={pageDescription}
                key="desc"
            />
            {keywords && <meta name="keywords" content={keywords} key="keywords" />}

            {/* Canonical URL (Highly Recommended) */}
            {url && <link rel="canonical" href={url} />}

            {/* Open Graph / Social Media Tags (use consistent keys to override) */}
            <meta property="og:title" content={pageTitle} key="og-title" />
            <meta
                property="og:description"
                content={pageDescription}
                key="og-desc"
            />
            <meta property="og:type" content="website" key="og-type" />
            <meta property="og:url" content={canonicalUrl} key="og-url" />
            <meta property="og:site_name" content="Ignite Training Institute" key="og-site-name" />
            <meta property="og:image" content={socialImage} key="og-image" />
            <meta property="og:image:secure_url" content={socialImage} key="og-image-secure-url" />
            <meta property="og:image:type" content={socialImageType} key="og-image-type" />
            {!image && !pageHeroImage && <meta property="og:image:width" content="620" key="og-image-width" />}
            {!image && !pageHeroImage && <meta property="og:image:height" content="240" key="og-image-height" />}
            <meta property="og:image:alt" content={socialImageAlt} key="og-image-alt" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" key="twitter-card" />
            <meta name="twitter:title" content={pageTitle} key="twitter-title" />
            <meta name="twitter:description" content={pageDescription} key="twitter-description" />
            <meta name="twitter:image" content={socialImage} key="twitter-image" />
            <meta name="twitter:image:alt" content={socialImageAlt} key="twitter-image-alt" />
        </Head>
    );
};

export default SEO;
