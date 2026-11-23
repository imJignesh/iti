// Organization, founder, WebSite and the two LocalBusiness branches (SZR, JLT) for the home page @graph.
// Source: Ignite institute/schema/01_head_global_organization_localbusiness.html (opening hours added: 9:30 am to 9 pm, 7 days).
// No aggregateRating on purpose (see audit/44 issue 8).
export const homepageOrganizationNodes = [
  {
    "@type": "EducationalOrganization",
    "@id": "https://ignitetraininginstitute.com/#organization",
    "name": "Ignite Training Institute",
    "alternateName": "Ignite Training Institute Dubai",
    "url": "https://ignitetraininginstitute.com/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ignitetraininginstitute.com/images/logo.webp"
    },
    "image": "https://ignitetraininginstitute.com/images/hero-banner-video-c1-poster.webp",
    "description": "Ignite Training Institute is a Dubai tutoring centre offering IB (IBDP, MYP), IGCSE, A-Level, AP, ACT and homeschooling support, one-to-one and in small groups, online and in person.",
    "foundingDate": "2015",
    "email": "hello@ignitetraininginstitute.com",
    "telephone": "+971588589958",
    "founder": {
      "@id": "https://ignitetraininginstitute.com/#founder"
    },
    "sameAs": [
      "https://www.facebook.com/ignitetraininginstitute",
      "https://www.linkedin.com/company/ignite-training-institute",
      "https://www.instagram.com/ignitetraininginstitute/",
      "https://www.youtube.com/@ignitetraininginstitute",
      "https://merithub.com/ignitetraininginstitute",
      "https://about.me/ignitetraininginstitute"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Dubai"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    ],
    "availableLanguage": [
      "English",
      "Arabic"
    ],
    "knowsAbout": [
      "IB Diploma Programme",
      "IB MYP",
      "IGCSE",
      "A-Level",
      "AP exams",
      "ACT",
      "Homeschooling and private candidacy",
      "Maths",
      "Physics",
      "Chemistry",
      "Biology"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "+971588589958",
        "email": "hello@ignitetraininginstitute.com",
        "areaServed": "AE",
        "availableLanguage": [
          "English",
          "Arabic"
        ]
      }
    ],
    "location": [
      {
        "@id": "https://ignitetraininginstitute.com/#localbusiness-szr"
      },
      {
        "@id": "https://ignitetraininginstitute.com/#localbusiness-jlt"
      }
    ]
  },
  {
    "@type": "Person",
    "@id": "https://ignitetraininginstitute.com/#founder",
    "name": "Sumit Advani",
    "jobTitle": "Co-Founder",
    "worksFor": {
      "@id": "https://ignitetraininginstitute.com/#organization"
    }
  },
  {
    "@type": "WebSite",
    "@id": "https://ignitetraininginstitute.com/#website",
    "url": "https://ignitetraininginstitute.com/",
    "name": "Ignite Training Institute",
    "publisher": {
      "@id": "https://ignitetraininginstitute.com/#organization"
    },
    "inLanguage": "en"
  },
  {
    "@type": [
      "EducationalOrganization",
      "LocalBusiness"
    ],
    "@id": "https://ignitetraininginstitute.com/#localbusiness-szr",
    "name": "Ignite Training Institute - Sheikh Zayed Road",
    "url": "https://ignitetraininginstitute.com/",
    "parentOrganization": {
      "@id": "https://ignitetraininginstitute.com/#organization"
    },
    "image": "https://ignitetraininginstitute.com/images/hero-banner-video-c1-poster.webp",
    "logo": "https://ignitetraininginstitute.com/images/logo.webp",
    "telephone": "+971588589958",
    "email": "hello@ignitetraininginstitute.com",
    "description": "Ignite Training Institute tutoring centre on Sheikh Zayed Road, Dubai, near Emirates Towers Metro. IB, IGCSE, A-Level, AP, ACT and homeschooling tutors.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1503, Al Moosa Tower 1, Sheikh Zayed Road, near Emirates Towers Metro (Sea Side)",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
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
    ],
    "availableLanguage": [
      "English",
      "Arabic"
    ],
    "sameAs": [
      "https://www.facebook.com/ignitetraininginstitute",
      "https://www.linkedin.com/company/ignite-training-institute",
      "https://www.instagram.com/ignitetraininginstitute/",
      "https://www.youtube.com/@ignitetraininginstitute",
      "https://merithub.com/ignitetraininginstitute",
      "https://about.me/ignitetraininginstitute"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2166721,
      "longitude": 55.2777655
    },
    "hasMap": "https://www.google.com/maps?cid=4950330766112063708",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:30",
        "closes": "21:00"
      }
    ]
  },
  {
    "@type": [
      "EducationalOrganization",
      "LocalBusiness"
    ],
    "@id": "https://ignitetraininginstitute.com/#localbusiness-jlt",
    "name": "Ignite Training Institute - Jumeirah Lakes Towers",
    "url": "https://ignitetraininginstitute.com/tutors-in-jlt-dubai",
    "parentOrganization": {
      "@id": "https://ignitetraininginstitute.com/#organization"
    },
    "image": "https://ignitetraininginstitute.com/images/hero-banner-video-c1-poster.webp",
    "logo": "https://ignitetraininginstitute.com/images/logo.webp",
    "telephone": "+971588589958",
    "email": "hello@ignitetraininginstitute.com",
    "description": "Ignite Training Institute tutoring centre in Jumeirah Lakes Towers (JLT), Dubai, serving Dubai Marina, JBR and The Greens. IB, IGCSE, A-Level and AP tutors.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tiffany Tower, Level 11, Cluster W, Jumeirah Lakes Towers",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
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
    ],
    "availableLanguage": [
      "English",
      "Arabic"
    ],
    "sameAs": [
      "https://www.facebook.com/ignitetraininginstitute",
      "https://www.linkedin.com/company/ignite-training-institute",
      "https://www.instagram.com/ignitetraininginstitute/",
      "https://www.youtube.com/@ignitetraininginstitute",
      "https://merithub.com/ignitetraininginstitute",
      "https://about.me/ignitetraininginstitute"
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.0771357,
      "longitude": 55.1498108
    },
    "hasMap": "https://www.google.com/maps?cid=5302559779513017463",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:30",
        "closes": "21:00"
      }
    ]
  }
];
