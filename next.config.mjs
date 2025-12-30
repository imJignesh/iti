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
// NEXT.JS CONFIG - OPTIMIZED FOR PERFORMANCE
// ========================================
const nextConfig = {
  reactStrictMode: true,

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression
  compress: true,

  // Generate ETags for better caching
  generateEtags: true,

  // Production-only optimizations
  ...(process.env.NODE_ENV === 'production' && {
    // Remove console logs in production
    compiler: {
      removeConsole: {
        exclude: ['error', 'warn'],
      },
    },
  }),

  // Performance headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  async redirects() {
    const redirects = [];

    // ========================================
    // RULE 1: Redirect specific categories from root to /category/slug
    // ========================================
    CATEGORY_SLUGS.forEach((slug) => {
      if (!STATIC_ROOT_PAGES.includes(slug) && !STATIC_COURSES_PAGES.includes(slug)) {
        redirects.push({
          source: `/${slug}`,
          destination: `/category/${slug}`,
          permanent: true,
        });
      }
    });

    // ========================================
    // RULE 2: Catch-all for root slugs (redirect to /blog/slug)
    // ========================================
    const excludedSlugs = [
      ...STATIC_ROOT_PAGES,
      ...STATIC_COURSES_PAGES,
      ...CATEGORY_SLUGS,
      '_next',
      'api',
      'category',
      'images',
      'videos',
      'fonts',
      'styles',
      'public',
      'favicon.ico',
      'robots.txt',
      'sitemap.xml',
    ];

    const excludePattern = excludedSlugs.join('|');

    redirects.push({
      source: `/:slug((?!${excludePattern})[^.]+)`,
      destination: '/blog/:slug',
      permanent: true,
    });

    // ========================================
    // RULE 3: Redirect /blog/category-slug to /category/category-slug
    // ========================================
    CATEGORY_SLUGS.forEach((slug) => {
      redirects.push({
        source: `/blog/${slug}`,
        destination: `/category/${slug}`,
        permanent: true,
      });
    });

    return redirects;
  },
};

export default nextConfig;