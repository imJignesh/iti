// Organization, founder, WebSite and the two LocalBusiness branches (SZR, JLT) for the home page @graph.
// Source: Google Doc "Ignite Training Institute: Home page", tab "Organization and Local Business Schema" (approved text, hours 9:30 am to 9 pm, 7 days).
// No aggregateRating on purpose (see audit/44 issue 8). SZR branch url stays the home page until the SZR page is live.
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
    "description": "Ignite Training Institute is a tuition centre in Dubai that has helped students with exam preparation since 2015. We teach IGCSE, A-Level, IBDP, IB MYP and AP, and we also support ACT preparation and homeschooling (private candidacy) for students in Grades 6 to 13. Families choose our tutoring centre in Dubai for experienced tutors, clear study plans, past paper practice and mock exams, in one-to-one or small-group classes, online or in person. We have two centres, one on Sheikh Zayed Road near Emirates Towers Metro and one in Jumeirah Lakes Towers (JLT), and our tutors cover Cambridge, Edexcel and AQA. Book a free demo class to meet a tutor first.",
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
    "description": "Ignite Training Institute is a tuition centre on Sheikh Zayed Road, Dubai, in Al Moosa Tower 1, near Emirates Towers Metro. Students from DIFC, Trade Centre, Business Bay and nearby areas can join one-to-one or small-group classes with experienced tutors in IGCSE, A-Level, IBDP, IB MYP and AP. This tutoring centre in Dubai also supports ACT preparation and homeschooling for private candidates. Each student gets a clear study plan, past paper practice, mock exams and regular progress checks, with Cambridge, Edexcel and AQA covered. Classes run in person at the centre or online, and parents can book a free demo class before they decide to join.",
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
    "openingHoursSpecification": {
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
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+971588589958",
      "areaServed": "AE",
      "availableLanguage": [
        "English",
        "Arabic"
      ]
    }
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
    "description": "Ignite Training Institute is a tuition centre in Jumeirah Lakes Towers (JLT), Dubai, at Tiffany Tower, Level 11, Cluster W. Our JLT tutors serve families in Dubai Marina, JBR, The Greens and nearby communities with one-to-one and small-group tutoring for IGCSE, A-Level, IBDP, IB MYP and AP. As a tutoring centre in Dubai, we also support ACT preparation and homeschooling for private candidates. Every student follows a clear study plan with past paper practice, mock exams and regular progress checks, covering Cambridge, Edexcel and AQA. Students can join in person at the JLT centre or online, and a free demo class is available before enrolment.",
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
    "openingHoursSpecification": {
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
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+971588589958",
      "areaServed": "AE",
      "availableLanguage": [
        "English",
        "Arabic"
      ]
    }
  }
];
