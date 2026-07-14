import LazySection from "@/components/LazySection";
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
import dynamic from 'next/dynamic';

const Advantages = dynamic(() => import('@/components/homeSchooling/Advantages'));
const Curriculum = dynamic(() => import('@/components/homeSchooling/Curriculum'));
const CourseCard = dynamic(() => import('@/components/homeSchooling/CourseCard'));
const FAQSection = dynamic(() => import('@/components/shared/FaqSection'));
import { faqSections } from '@/data/faqSections';
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
const MarqueeBanner = dynamic(() => import('@/components/shared/MarqueeBanner'));
const HomeschoolingMindset = dynamic(() => import('@/components/homeSchooling/mindset'));
const WhatWeOfferSection = dynamic(() => import('@/components/homeSchooling/WhatWeOfferSection'));
const Accordion = dynamic(() => import('@/components/shared/Accordion'));
import { accordionSections } from '@/data/accordionSections';
import { getMarqueeData } from "@/data/marqueeConfig";
const Blog = dynamic(() => import('@/components/homeSchooling/Blog'));
const ReviewsSection = dynamic(() => import('@/components/homeSchooling/ReviewsSection'));


// 1. ACCEPT the headerHeight prop
const homeschoolingSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which Levels And Curricula Does Ignite Support For Homeschooling In Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ignite supports homeschooling and private candidate students across IGCSE (Years 10-11), A-Levels (Years 12-13), and AP (typically Years 11-12 or 12-13 in the US system). Subject coverage spans Maths, Sciences, English, Economics, Business Studies, Accounting, Computer Science, Languages, and Psychology across all three curricula."
        }
      },
      {
        "@type": "Question",
        "name": "Is Ignite's Homeschooling Programme Fully Flexible With Individual Schedules?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Sessions are scheduled around the student's pace, academic goals, and daily calendar, with full flexibility on subject combinations and timing. Customised One-on-One programmes run weekday daytime sessions in a school-like format. Full Syllabus Group programmes follow a fixed 10-month September-to-June calendar with weekly cohort sessions for structure."
        }
      },
      {
        "@type": "Question",
        "name": "Do Homeschooled Students Get Exam And Assessment Support At Ignite?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Students receive targeted exam preparation, past paper practice, board-specific mark-scheme work, and mock exams under timed conditions. Registration guidance for IGCSE, A-Level, and AP exam centre bookings is included, alongside support with deadlines, candidate registration codes, and any subject-specific practical components that affect board choice."
        }
      },
      {
        "@type": "Question",
        "name": "Can Ignite Help With Selecting And Planning A Complete Homeschool Curriculum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Academic advisors assist with curriculum planning across IGCSE, A-Levels, and AP, subject selection aligned to university targets, exam registration guidance for the relevant boards (CAIE, Pearson Edexcel, College Board), and personalised learning roadmaps that map subject pacing to the student's exam calendar."
        }
      },
      {
        "@type": "Question",
        "name": "Can Students Try A Free Demo Class Before Enrolling In Homeschooling Tutoring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every new student is offered a free demo class with the matched homeschooling tutor before enrolment. The demo lets the student assess teaching style, ask exam-board-specific questions, and see how a real session runs. Parents typically use it to confirm fit before discussing a regular schedule."
        }
      },
      {
        "@type": "Question",
        "name": "Is Private Candidacy Accepted By Universities In The UAE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Private universities in the UAE generally accept private candidate qualifications, provided students hold recognised IGCSE, A-Level, or AP results that meet course entry requirements. UK and US universities also routinely accept private candidates, with applications going through UCAS for UK and the Common App for US universities."
        }
      },
      {
        "@type": "Question",
        "name": "Can Homeschooled Students Sit IGCSE, A-Level, And AP Exams As Private Candidates In Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Homeschooled students register directly through approved exam centres in Dubai. The British Council and select international schools host CAIE and Edexcel exams. Specific test centres host AP. The exam paper, mark scheme, and grade are identical to what a school-registered student receives, and registration deadlines run several months before the sitting."
        }
      },
      {
        "@type": "Question",
        "name": "Which Curriculum Is Best For Homeschooling In Dubai (IGCSE, A-Levels, Or AP)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IGCSE works as the Year 10-11 foundation for most homeschooled students. A-Levels suit students targeting UK universities and want depth in 3-4 subjects. AP suits students targeting US universities and benefits from external College Board grading. Many homeschooled students combine routes, taking IGCSE first and then A-Levels or AP depending on university targets."
        }
      },
      {
        "@type": "Question",
        "name": "Does Ignite Offer One-On-One And Small Group Homeschooling Sessions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The Customised One-on-One Programme suits students who need fully individualised pacing, mid-year curriculum switches, or focused weak-subject support. The Full Syllabus Group Programme runs 3-6 students in small cohorts across a 10-month structured calendar. Both programmes are available online and in-person at the DIFC and JLT centres."
        }
      },
      {
        "@type": "Question",
        "name": "How Much Does Homeschooling Cost In Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Homeschooling costs vary widely based on tutor hours, exam registrations, and any online curriculum providers used. Total costs are typically lower than private school fees (AED 25,000 to 100,000 per year for Years 10-13 at most British schools). Ignite provides upfront pricing per programme during the demo class so families can plan budgets accurately."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "item": "https://ignitetraininginstitute.com/courses/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Homeschooling Tutors In Dubai",
        "item": "https://ignitetraininginstitute.com/courses/homeschooling-tutors-in-dubai"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://ignitetraininginstitute.com/",
    "name": "Ignite Training Institute",
    "url": "https://ignitetraininginstitute.com/",
    "logo": "https://ignitetraininginstitute.com/images/logo.webp",
    "description": "Ignite Training Institute is a leading tutoring centre in Dubai, UAE offering expert IB, IGCSE, A-Level, AP, ACT, and Homeschooling support for students.",
    "foundingDate": "2015",
    "telephone": "+971568357374",
    "email": "hello@ignitetraininginstitute.com",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "1503, Al Moosa Tower 1, Sheikh Zayed Road, Near Emirates Towers Metro (Sea Side)",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Tiffany Tower, Level 11, Cluster W, Jumeirah Lake Towers",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
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
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+971568357374",
        "contactType": "customer service",
        "email": "hello@ignitetraininginstitute.com",
        "areaServed": "AE",
        "availableLanguage": ["English", "Arabic"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+971568357374",
        "contactType": "sales",
        "url": "https://wa.me/+971568357374",
        "contactOption": "TollFree",
        "availableLanguage": "English"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/ignitetraininginstitute",
      "https://www.instagram.com/ignitetraininginstitute/",
      "https://www.linkedin.com/company/ignite-training-institute"
    ],
    "knowsAbout": [
      "IGCSE",
      "GCSE",
      "British curriculum",
      "A-Level",
      "IB Diploma Programme",
      "IB Middle Years Programme",
      "Advanced Placement",
      "ACT",
      "UCAT",
      "Homeschooling"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": "https://ignitetraininginstitute.com/courses/homeschooling-tutors-in-dubai",
    "name": "Homeschooling and Private Candidacy Support in Dubai",
    "description": "Expert homeschooling and private candidacy tutoring in Dubai across IGCSE, A-Levels, and AP. Flexible, personalised academic support with structured exam prep, registration guidance, and one-on-one or small group programs for private candidates.",
    "url": "https://ignitetraininginstitute.com/courses/homeschooling-tutors-in-dubai",
    "image": "https://ignitetraininginstitute.com/assets/homeschooling_bg_main.webp",
    "educationalLevel": "Secondary and Pre-University Education",
    "educationalCredentialAwarded": "IGCSE, A-Level, and AP Qualifications",
    "inLanguage": "en",
    "teaches": [
      "IGCSE Curriculum",
      "A-Level Curriculum",
      "Advanced Placement (AP) Curriculum",
      "Exam Registration Guidance",
      "Past Paper Practice",
      "Mock Exam Preparation",
      "Subject Selection and Curriculum Planning"
    ],
    "provider": {
      "@type": "EducationalOrganization",
      "@id": "https://ignitetraininginstitute.com/",
      "name": "Ignite Training Institute",
      "url": "https://ignitetraininginstitute.com/"
    },
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": "Private candidates and homeschooled students preparing for IGCSE, A-Levels, and AP"
    },
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "name": "Customized One-On-One Training Program",
        "description": "A personalized course for private candidates with flexible weekday daytime classes, structured exam prep, unit tests, term-wise PTMs, and complete registration guidance for IGCSE, A-Levels, and AP.",
        "courseMode": ["Blended", "Onsite", "Online"]
      },
      {
        "@type": "CourseInstance",
        "name": "Full Syllabus Group Training For Private Candidates",
        "description": "A structured 10-month program from September to June with 70+ hours of guided instruction per subject in small peer groups, covering the entire syllabus for IGCSE, A-Levels, and AP private candidates.",
        "courseMode": ["Blended", "Onsite", "Online"]
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "81",
      "reviewCount": "6"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Melia"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "Ignite made my online schooling experience much more enjoyable. Everyone there are so lovely and fun, I truly felt comfortable in that space. The amount of support from everyone was wonderful and helped me thrive academically. There was no unnecessary pressure, they pushed me to do the best I could in a supportive way. I definitely recommend Ignite for homeschoolers / online students!",
        "publisher": {
          "@type": "Organization",
          "name": "Google"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Nicole Morgan"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "Sumit from Ignite went out of his way to arrange a tutor for my daughter on very short notice. The tutor was kind and competent and managed to quickly solve my daughter's doubt. Thank you! Highly recommend!",
        "publisher": {
          "@type": "Organization",
          "name": "Google"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Abdullah Al Noubani"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "Ignite provides high quality tutoring with knowledgeable tutors and provide beneficial resources.",
        "publisher": {
          "@type": "Organization",
          "name": "Google"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Elham Abu Omar"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "Passionate teachers, supportive and flexible management.",
        "publisher": {
          "@type": "Organization",
          "name": "Google"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rayan"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "Homeschooling with Ignite gave me the structure and guidance I needed to stay focused. The tutors constantly checked on my progress and encouraged me to push my limits while still being very understanding. The sense of community they build makes you feel you're never alone in your studies. I can proudly say my academic journey has improved so much because of Ignite.",
        "publisher": {
          "@type": "Organization",
          "name": "Google"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Lina"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "I took the private candidate route with Ignite, and it worked out perfectly. The flexible classes and constant support kept me motivated. It never felt like I was studying alone, and I felt fully prepared for my exams.",
        "publisher": {
          "@type": "Organization",
          "name": "Google"
        }
      }
    ]
  }
];

const HomeSchooling = ({ headerHeight }) => {



  return (
    <>
      <JsonLd schema={homeschoolingSchema} />
      <SEO
                loadInnerStyles={true}
        title="Best Homeschooling In UAE For Full Academic Support"
        description="Choose the top homeschooling center in UAE for your child's academic success. Get one-on-one sessions, comprehensive resources & flexible study plans"
        url="https://ignitetraininginstitute.com/courses/homeschooling-tutors-in-dubai"
        preloadImages={[
          {
            src: "/assets/homeschooling-bg.webp",
            type: "image/webp",
            media: "(max-width: 768px)"
          },
          {
            src: "/assets/homeschooling_bg_main.webp",
            type: "image/webp",
            media: "(min-width: 769px)"
          }
        ]}
      />

      {/* 3. APPLY the style for paddingTop to the scroll container */}
      <div className='overflow-hidden innerpage page-content-padding'>
        <section className="hero-section">
          <div className="hero-container">
            {/* LCP Image moved here for immediate painting (SSR) */}
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/homeschooling-bg.webp" type="image/webp" />
              <img
                src="/assets/homeschooling_bg_main.webp"
                alt="Homeschooling Tutors Background"
                fetchPriority="high"
                width="1200"
                height="800"
                className="hero-img"
                loading="eager"
                decoding="async"
                style={{ opacity: 1, visibility: 'visible' }}
              />
            </picture>

            <div className="row g-0 h-100">
              <InfoCardLeft {...subjectPages.homeschooling} />
              <InfoCardForm formConfig={subjectFormConfigs.homeschooling} />
            </div>
          </div>

        </section>


        <LazySection>
          <section data-scroll-section>
            <Curriculum />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <CourseCard />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Advantages />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <MarqueeBanner config={getMarqueeData('standard')} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <HomeschoolingMindset />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <ReviewsSection />
          </section>
        </LazySection>

        <LazySection>
          <WhatWeOfferSection />
        </LazySection>


        <LazySection>
          <section data-scroll-section>
            <FAQSection {...faqSections.homeschooling} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Blog />
          </section>
        </LazySection>
        <LazySection>
          <section>
            <Accordion {...accordionSections.homeschooling} />
          </section>
        </LazySection>
      </div>
    </>
  );
};

export default HomeSchooling;