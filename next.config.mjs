/** @type {import('next').NextConfig} */

// ========================================
// STATIC PAGES LIST (Root Level - 34 pages)
// ========================================
const STATIC_ROOT_PAGES = [
  'about-us',
  'accounting-tutor-in-dubai',
  'act-tutors-in-dubai',
  'advanced-placements-tutors-in-dubai',
  'biology-tutor-in-dubai',
  'blog',
  'british-curriculum-tutors-in-dubai',
  'business-studies-tutor-in-dubai',
  'career',
  'chemistry-tutor-in-dubai',
  'computer-science-tutor-in-dubai',
  'contact-us',
  'courses',
  'economics-tutor-in-dubai',
  'english-tutor-in-dubai',
  'french-tutor-in-dubai',
  'ib-curriculum-tutors-in-dubai',
  'index',
  'join-free-demo-class',
  'maths-tutor-in-dubai',
  'our-team',
  'physics-tutor-in-dubai',
  'private-tutors-in-dubai',
  'psychology-tutor-in-dubai',
  'spanish-tutor-in-dubai',
  'thank-you-blog',
  'thank-you-career',
  'thank-you-contact',
  'thank-you-curriculum',
  'thank-you-freedemo',
  'thank-you-homeschooling',
  'thank-you-popup',
  'thank-you-subject',
  'thank-you-tutor',
  'tutors-in-dubai',
  'tutors-in-jlt-dubai',
];

// ========================================
// STATIC PAGES LIST (Courses Folder - 5 pages)
// ========================================
const STATIC_COURSES_PAGES = [
  'a-level-tutors-in-dubai',
  'homeschooling-tutors-in-dubai',
  'ibdp-tutors-in-dubai',
  'igcse-tutors-in-dubai',
  'myp-tutors-in-dubai',
];

// ========================================
// CATEGORY SLUGS (17 categories)
// Update this list every hour via your cron job/script
// ========================================
const CATEGORY_SLUGS = [
  'a-levels',
  'advanced-placements',
  'american-curriculum',
  'british-curriculum',
  'gcse',
  'homeschooling',
  'ibdp',
  'igcse',
  'international-baccalaureate',
  'myp',
  'news-mentions',
  'schools',
  'standardized-tests',
  'study-tips',
  'subject-choices',
  'tutoring',
  'universities',
];

// ========================================
// NEXT.JS CONFIG
// ========================================
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    const redirects = [];

    // ========================================
    // RULE 1: Redirect specific categories from root to /category/slug
    // ========================================
    CATEGORY_SLUGS.forEach((slug) => {
      // Skip if it's also a static page (static pages take priority)
      if (!STATIC_ROOT_PAGES.includes(slug) && !STATIC_COURSES_PAGES.includes(slug)) {
        redirects.push({
          source: `/${slug}`,
          destination: `/category/${slug}`,
          permanent: true, // 301 redirect
        });
      }
    });

    // ========================================
    // RULE 2: Catch-all for root slugs (redirect to /blog/slug)
    // Exclude: static pages, categories, Next.js internals, and static assets
    // ========================================

    // Build comprehensive exclude list
    const excludedSlugs = [
      ...STATIC_ROOT_PAGES,
      ...STATIC_COURSES_PAGES,
      ...CATEGORY_SLUGS,
      '_next',        // Next.js internal routes
      'api',          // API routes
      'category',     // Category routes
      'images',       // Static images folder
      'videos',       // Static videos folder
      'fonts',        // Static fonts folder
      'styles',       // Static styles folder
      'public',       // Public folder
      'favicon.ico',  // Favicon
      'robots.txt',   // Robots file
      'sitemap.xml',  // Sitemap
    ];

    // Create regex pattern to exclude all these
    const excludePattern = excludedSlugs.join('|');

    // Catch-all redirect: any slug not matching excluded patterns → /blog/:slug
    redirects.push({
      source: `/:slug((?!${excludePattern})[^.]+)`, // [^.]+ ensures no file extensions
      destination: '/blog/:slug',
      permanent: true, // 301 redirect
    });

    // ========================================
    // RULE 3: Redirect /blog/category-slug to /category/category-slug
    // ========================================
    CATEGORY_SLUGS.forEach((slug) => {
      redirects.push({
        source: `/blog/${slug}`,
        destination: `/category/${slug}`,
        permanent: true, // 301 redirect
      });
    });

    return redirects;
  },
};

export default nextConfig;