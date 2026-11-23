// Page-level schema (WebPage/AboutPage/ContactPage/CollectionPage + BreadcrumbList, plus Service/ItemList where it applies).
// Source: Ignite institute/schema/pages/*.html (checked against the live titles and descriptions on 23 Nov 2026).
// These blocks link to the sitewide Organization/WebSite by @id (see organizationSchema.js, loaded in _app.js).
export const pageSchemas = {
  "about-us": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://ignitetraininginstitute.com/about-us#webpage",
        "url": "https://ignitetraininginstitute.com/about-us",
        "name": "About Us - Best Training Institute In The UAE",
        "description": "Ignite Training Institute is the leading training center in the UAE, providing guidance in IB, IGCSE, A-Level, & AP to help students excel academically",
        "isPartOf": {
          "@id": "https://ignitetraininginstitute.com/#website"
        },
        "about": {
          "@id": "https://ignitetraininginstitute.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://ignitetraininginstitute.com/assets/about-us-desktop.webp"
        },
        "breadcrumb": {
          "@id": "https://ignitetraininginstitute.com/about-us#breadcrumb"
        },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ignitetraininginstitute.com/about-us#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ignitetraininginstitute.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://ignitetraininginstitute.com/about-us"
          }
        ]
      }
    ]
  },
  "contact-us": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://ignitetraininginstitute.com/contact-us#webpage",
        "url": "https://ignitetraininginstitute.com/contact-us",
        "name": "Contact Us for Experienced Tutors In Dubai",
        "description": "Get in touch with our academic experts to clearly understand the tutoring process & successfully kickstart your academic journey today!",
        "isPartOf": {
          "@id": "https://ignitetraininginstitute.com/#website"
        },
        "about": {
          "@id": "https://ignitetraininginstitute.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://ignitetraininginstitute.com/images/logo.webp"
        },
        "breadcrumb": {
          "@id": "https://ignitetraininginstitute.com/contact-us#breadcrumb"
        },
        "inLanguage": "en",
        "mainEntity": [
          {
            "@id": "https://ignitetraininginstitute.com/#localbusiness-szr"
          },
          {
            "@id": "https://ignitetraininginstitute.com/#localbusiness-jlt"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ignitetraininginstitute.com/contact-us#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ignitetraininginstitute.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact Us",
            "item": "https://ignitetraininginstitute.com/contact-us"
          }
        ]
      }
    ]
  },
  "our-team": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://ignitetraininginstitute.com/our-team#webpage",
        "url": "https://ignitetraininginstitute.com/our-team",
        "name": "Meet Our Expert Trainers | Know Our Team Better",
        "description": "Get to know Ignite Training Institute’s expert mentors in the UAE, shaping bright futures with 2000+ trained students & remarkable academic results",
        "isPartOf": {
          "@id": "https://ignitetraininginstitute.com/#website"
        },
        "about": {
          "@id": "https://ignitetraininginstitute.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://ignitetraininginstitute.com/images/ourteam-desktop.webp"
        },
        "breadcrumb": {
          "@id": "https://ignitetraininginstitute.com/our-team#breadcrumb"
        },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ignitetraininginstitute.com/our-team#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ignitetraininginstitute.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Our Team",
            "item": "https://ignitetraininginstitute.com/our-team"
          }
        ]
      }
    ]
  },
  "career": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ignitetraininginstitute.com/career#webpage",
        "url": "https://ignitetraininginstitute.com/career",
        "name": "Career - Ignite Training Institute l Tutor Jobs In Dubai",
        "description": "Join Ignite’s team of expert tutors in Dubai. Explore tutoring jobs, growth opportunities & benefits while helping students achieve academic success",
        "isPartOf": {
          "@id": "https://ignitetraininginstitute.com/#website"
        },
        "about": {
          "@id": "https://ignitetraininginstitute.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://ignitetraininginstitute.com/assets/career-banner-desktop.webp"
        },
        "breadcrumb": {
          "@id": "https://ignitetraininginstitute.com/career#breadcrumb"
        },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ignitetraininginstitute.com/career#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ignitetraininginstitute.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Careers",
            "item": "https://ignitetraininginstitute.com/career"
          }
        ]
      }
    ]
  },
  "join-free-demo-class": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ignitetraininginstitute.com/join-free-demo-class#webpage",
        "url": "https://ignitetraininginstitute.com/join-free-demo-class",
        "name": "Free Demo Class At Ignite Training Institute | Join Today",
        "description": "Experience Ignite’s expert tutoring with a free demo class. Explore IB, IGCSE, A-Levels, AP & more with certified trainers in Dubai, UAE",
        "isPartOf": {
          "@id": "https://ignitetraininginstitute.com/#website"
        },
        "about": {
          "@id": "https://ignitetraininginstitute.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://ignitetraininginstitute.com/assets/act_bg_main.webp"
        },
        "breadcrumb": {
          "@id": "https://ignitetraininginstitute.com/join-free-demo-class#breadcrumb"
        },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ignitetraininginstitute.com/join-free-demo-class#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ignitetraininginstitute.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Free Demo Class",
            "item": "https://ignitetraininginstitute.com/join-free-demo-class"
          }
        ]
      }
    ]
  },
  "courses": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://ignitetraininginstitute.com/courses#webpage",
        "url": "https://ignitetraininginstitute.com/courses",
        "name": "Top Courses In UAE For IB, IGCSE, A Levels, & AP Tutoring",
        "description": "Learn with certified tutors for IB, IGCSE, A-Levels, AP, ACT & UCAT. Get expert coaching with personalized support & proven strategies. Enroll today",
        "isPartOf": {
          "@id": "https://ignitetraininginstitute.com/#website"
        },
        "about": {
          "@id": "https://ignitetraininginstitute.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://ignitetraininginstitute.com/assets/mainb.webp"
        },
        "breadcrumb": {
          "@id": "https://ignitetraininginstitute.com/courses#breadcrumb"
        },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ignitetraininginstitute.com/courses#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ignitetraininginstitute.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Courses",
            "item": "https://ignitetraininginstitute.com/courses"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://ignitetraininginstitute.com/courses#courses",
        "name": "Ignite tutoring courses",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "url": "https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai",
            "name": "IB Diploma Programme (IBDP) tutoring"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "url": "https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai",
            "name": "IB Middle Years Programme (MYP) tutoring"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "url": "https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai",
            "name": "IGCSE tutoring"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "url": "https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai",
            "name": "AS and A-Level tutoring"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "url": "https://ignitetraininginstitute.com/courses/homeschooling-tutors-in-dubai",
            "name": "Homeschooling and private candidate tutoring"
          }
        ]
      }
    ]
  },
  "test-series": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://ignitetraininginstitute.com/test-series#webpage",
        "url": "https://ignitetraininginstitute.com/test-series",
        "name": "Test Series | Ignite Training Institute",
        "description": "Prepare smarter with Ignite's IGCSE, IB, and A-Level test series in Dubai. Practice real exam questions, identify gaps, and improve your scores",
        "isPartOf": {
          "@id": "https://ignitetraininginstitute.com/#website"
        },
        "about": {
          "@id": "https://ignitetraininginstitute.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://ignitetraininginstitute.com/assets/act_bg_main.webp"
        },
        "breadcrumb": {
          "@id": "https://ignitetraininginstitute.com/test-series#breadcrumb"
        },
        "inLanguage": "en"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://ignitetraininginstitute.com/test-series#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ignitetraininginstitute.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Test Series",
            "item": "https://ignitetraininginstitute.com/test-series"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://ignitetraininginstitute.com/test-series#service",
        "name": "Exam test series",
        "serviceType": "Exam test series",
        "description": "Prepare smarter with Ignite's IGCSE, IB, and A-Level test series in Dubai. Practice real exam questions, identify gaps, and improve your scores",
        "url": "https://ignitetraininginstitute.com/test-series",
        "provider": {
          "@id": "https://ignitetraininginstitute.com/#organization"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Dubai"
          },
          {
            "@type": "Country",
            "name": "United Arab Emirates"
          }
        ]
      }
    ]
  }
};
