/** @type {import('next').NextConfig} */

// Import bundle analyzer
import withBundleAnalyzer from '@next/bundle-analyzer';
import fs from 'fs';
import path from 'path';

// STATIC PAGES LIST (Root Level - 34 pages)
const STATIC_ROOT_PAGES = [
  'about-us',
  'accounting-tutor-in-dubai',
  'act-tutors-in-dubai',
  'advanced-placements-tutors-in-dubai',
  'biology-tutor-in-dubai',
  'blog',
  'british-curriculum-tutors-in-dubai',
  'british-curriculum-tutors-in-dubai-copy',
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
  'ib-curriculum-tutors-in-dubai-copy',
  'index',
  'join-free-demo-class',
  'join-free-demo-class-copy',
  'maths-tutor-in-dubai',
  'our-team',
  'physics-tutor-in-dubai',
  'private-tutors-in-dubai',
  'psychology-tutor-in-dubai',
  'spanish-tutor-in-dubai',
  'thank-you-blog',
  'thank-you-career',
  'thank-you-contact',
  'thank-you-homeschooling',
  'thank-you-newsletter',
  'thank-you-organic',
  'thank-you-organic-copy',
  'thank-you-popup',
  'thank-you-subject',
  'thank-you-tutor',
  'tutors-in-dubai',
  'tutors-in-jlt-dubai',
  'test-series',
];

// STATIC PAGES LIST (Courses Folder - 5 pages)
const STATIC_COURSES_PAGES = [
  'a-level-tutors-in-dubai',
  'homeschooling-tutors-in-dubai',
  'ibdp-tutors-in-dubai',
  'igcse-tutors-in-dubai',
  'myp-tutors-in-dubai',
];

// CATEGORY SLUGS (17 categories)
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

const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true, // Bypass Next.js image cache/processing for faster TTFB on AWS
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.ignitetraininginstitute.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  compress: true,
  generateEtags: true,

  ...(process.env.NODE_ENV === 'production' && {
    compiler: {
      removeConsole: {
        exclude: ['error', 'warn'],
      },
      reactRemoveProperties: true,
    },
  }),

  experimental: {
    optimizePackageImports: ['lucide-react', 'react-phone-input-2', 'swiper'],
  },

  turbopack: {},

  webpack: (config, { dev, isServer }) => {
    return config;
  },

  async headers() {
    return [
      {
        // Global headers - Simplified to avoid Cloudflare conflicts
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://tagassistant.google.com https://*.googletagmanager.com https://*.google.com https://*.google.ae https://*.google.co.in https://*.google-analytics.com https://*.googleadservices.com https://cdn.jsdelivr.net https://*.clarity.ms https://connect.facebook.net https://googleads.g.doubleclick.net https://static.cloudflareinsights.com; script-src-elem 'self' 'unsafe-inline' https://tagassistant.google.com https://*.googletagmanager.com https://*.google.com https://*.google.ae https://*.google.co.in https://*.google-analytics.com https://*.googleadservices.com https://cdn.jsdelivr.net https://*.clarity.ms https://connect.facebook.net https://googleads.g.doubleclick.net https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https://tagassistant.google.com https://*.googletagmanager.com https://*.google.com https://*.google.ae https://*.google.co.in https://*.google-analytics.com https://*.googleadservices.com https://ignitetraininginstitute.com https://api.ignitetraininginstitute.com https://flagcdn.com https://www.facebook.com https://googleads.g.doubleclick.net https://stats.g.doubleclick.net https://bat.bing.com; connect-src 'self' https://tagassistant.google.com wss://tagassistant.google.com https://*.google-analytics.com https://*.googletagmanager.com https://*.google.com https://*.google.ae https://*.google.co.in https://*.googleadservices.com https://vitals.vercel-insights.com https://api.ignitetraininginstitute.com https://cdn.jsdelivr.net https://*.clarity.ms https://www.facebook.com https://googleads.g.doubleclick.net https://analytics.google.com https://cloudflareinsights.com https://static.cloudflareinsights.com; frame-src 'self' https://tagassistant.google.com https://*.googletagmanager.com https://www.youtube.com https://*.google.com https://*.google.ae https://maps.google.com https://td.doubleclick.net https://bid.g.doubleclick.net;"
          },
        ],
      },
      {
        // Explicitly ensure robots.txt has the correct type and no framing restrictions
        source: '/robots.txt',
        headers: [
          { key: 'Content-Type', value: 'text/plain' },
          { key: 'Cache-Control', value: 'public, s-maxage=3600, stale-while-revalidate=59' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/videos/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: '<https://fonts.googleapis.com>; rel=preconnect; crossorigin, <https://fonts.gstatic.com>; rel=preconnect; crossorigin, <https://www.googletagmanager.com>; rel=dns-prefetch'
          },
        ],
      },
    ];
  },

  // ADD REWRITES FOR DYNAMIC ROBOTS AND SITEMAP
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/robots.txt.js',
      },
      {
        source: '/sitemap.xml',
        destination: '/sitemap.xml.js',
      },
      {
        source: '/api/mpl/:path*',
        destination: 'https://api.ignitetraininginstitute.com/wp-json/mpl/v1/:path*',
      },
      {
        source: '/api/wp/:path*',
        destination: 'https://api.ignitetraininginstitute.com/wp-json/wp/v2/:path*',
      },
    ];
  },

  async redirects() {
    const redirects = [
      {
        source: '/blog/benefits-of-ib-curriculum',
        destination: '/blog/ib-program-pros-and-cons',
        permanent: true,
      },
      {
        source: '/blog/emsat-tutors-in-dubai',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/a-levels-qualifications',
        destination: '/blog/a-level-qualifications',
        permanent: true,
      },
      {
        source: '/blog/a-levels-subjects',
        destination: '/blog/a-level-subjects',
        permanent: true,
      },
      {
        source: '/blog/advanced-placements-ap',
        destination: '/category/advanced-placements',
        permanent: true,
      },
      {
        source: '/blog/advanced-placements-tutors',
        destination: '/advanced-placements-tutors-in-dubai',
        permanent: true,
      },
      {
        source: '/blog/british-curriculum-a-levels',
        destination: '/blog/a-level-qualifications',
        permanent: true,
      },
      {
        source: '/blog/british-curriculum-tutors',
        destination: '/british-curriculum-tutors-in-dubai',
        permanent: true,
      },
      {
        source: '/blog/contact-us-3',
        destination: '/contact-us',
        permanent: true,
      },
      {
        source: '/blog/free-consultation',
        destination: '/join-free-demo-class',
        permanent: true,
      },
      {
        source: '/blog/high-school-british-curriculum',
        destination: '/blog/british-curriculum-guide',
        permanent: true,
      },
      {
        source: '/blog/ib-curriculum-1',
        destination: '/blog/ib-curriculum-blog',
        permanent: true,
      },
      {
        source: '/blog/ib-curriculum-schools-in-dubai',
        destination: '/blog/ib-schools-in-dubai',
        permanent: true,
      },
      {
        source: '/blog/ib-curriculum-tutors',
        destination: '/ib-curriculum-tutors-in-dubai',
        permanent: true,
      },
      {
        source: '/blog/ib-tutors',
        destination: '/ib-curriculum-tutors-in-dubai',
        permanent: true,
      },
      {
        source: '/blog/ibdp-curriculum-components-requirements',
        destination: '/blog/ibdp-curriculum',
        permanent: true,
      },
      {
        source: '/blog/ibdp-subjects',
        destination: '/blog/ibdp-subjects-2',
        permanent: true,
      },
      {
        source: '/blog/maths-tutors-in-dubai',
        destination: '/maths-tutor-in-dubai',
        permanent: true,
      },
      {
        source: '/blog/myp-programme-guide',
        destination: '/blog/ib-myp-programme',
        permanent: true,
      },
      {
        source: '/blog/private-tutor-in-dubai',
        destination: '/private-tutors-in-dubai',
        permanent: true,
      },
      {
        source: '/courses/a-level-tutors',
        destination: '/courses/a-level-tutors-in-dubai',
        permanent: true,
      },
      {
        source: '/courses/homeschooling-tutors',
        destination: '/courses/homeschooling-tutors-in-dubai',
        permanent: true,
      },
      {
        source: '/courses/ibdp-tutors',
        destination: '/courses/ibdp-tutors-in-dubai',
        permanent: true,
      },
      {
        source: '/courses/igcse-tutors',
        destination: '/courses/igcse-tutors-in-dubai',
        permanent: true,
      },
      {
        source: '/courses/myp-tutors',
        destination: '/courses/myp-tutors-in-dubai',
        permanent: true,
      },
      {
        source: '/igcse-tutors-in-dubai',
        destination: '/courses/igcse-tutors-in-dubai',
        permanent: true,
      },
    ];

    CATEGORY_SLUGS.forEach((slug) => {
      if (!STATIC_ROOT_PAGES.includes(slug) && !STATIC_COURSES_PAGES.includes(slug)) {
        redirects.push({
          source: `/${slug}`,
          destination: `/category/${slug}`,
          permanent: true,
        });
      }
    });

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

    CATEGORY_SLUGS.forEach((slug) => {
      redirects.push({
        source: `/blog/${slug}`,
        destination: `/category/${slug}`,
        permanent: true,
      });
    });

    // Dynamically load additional redirects from redirects_parsed.json
    try {
      const redirectsPath = path.join(process.cwd(), 'redirects_parsed.json');
      if (fs.existsSync(redirectsPath)) {
        const parsedRedirects = JSON.parse(fs.readFileSync(redirectsPath, 'utf8'));
        if (Array.isArray(parsedRedirects)) {
          const formattedRedirects = [];

          for (const r of parsedRedirects) {
            let cleanSource = r.source;
            let hasArray = undefined;

            // Handle URLs with query strings (?)
            if (cleanSource.includes('?')) {
              const [base, queryStr] = cleanSource.split('?');
              cleanSource = base;
              if (queryStr) {
                hasArray = [];
                const searchParams = new URLSearchParams(queryStr);
                for (const [key, value] of searchParams.entries()) {
                  hasArray.push({
                    type: 'query',
                    key: key,
                    value: value || undefined
                  });
                }
              }
            }

            // Handle URLs with colons (::) by escaping them
            if (cleanSource.includes(':')) {
              cleanSource = cleanSource.replace(/:/g, '\\:');
            }

            // Fix double slashes inside paths (e.g. /some//path) FIRST
            cleanSource = cleanSource.replace(/\/{2,}/g, '/');

            // Then remove trailing slashes to match Next.js defaults
            if (cleanSource.endsWith('/') && cleanSource.length > 1) {
              cleanSource = cleanSource.slice(0, -1);
            }

            // Prevent circular redirects
            let cleanDest = r.destination;
            if (cleanDest.endsWith('/') && cleanDest.length > 1) {
              cleanDest = cleanDest.slice(0, -1);
            }

            if (cleanSource !== cleanDest) {
              formattedRedirects.push({
                source: cleanSource || '/',
                has: hasArray,
                destination: r.destination,
                permanent: r.permanent,
              });
            }
          }

          redirects.push(...formattedRedirects);
        }
      }
    } catch (error) {
      console.error('Error loading redirects_parsed.json:', error);
    }

    return redirects;
  },
};

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

export default bundleAnalyzer(nextConfig);