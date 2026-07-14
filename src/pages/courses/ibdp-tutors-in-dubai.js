// import MovingBanner from '@/components/home/MovingBanner';
import LazySection from "@/components/LazySection";
import Head from "next/head";
// import Testimonial from '@/components/home/Testimonial';
import dynamic from 'next/dynamic';

const Accordion = dynamic(() => import('@/components/shared/Accordion'));
import { accordionSections } from '@/data/accordionSections';
const Blog = dynamic(() => import('@/components/ibdp/Blog'));
const CourseCard = dynamic(() => import('@/components/ibdp/CourseCard'));
const FAQSection = dynamic(() => import('@/components/shared/FaqSection'));
const IgniteAchievements = dynamic(() => import('@/components/ibdp/IgniteAchievements'));
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
import { faqSections } from '@/data/faqSections';
const IgniteAboutCard = dynamic(() => import('@/components/ibdp/IgniteAboutCard'));
const WhatWeOfferSection = dynamic(() => import('@/components/ibdp/WhatWeOfferSection'));
const Trainers = dynamic(() => import('@/components/ibdp/Trainers'));
const MarqueeBanner = dynamic(() => import('@/components/shared/MarqueeBanner'));
const ReviewsSection = dynamic(() => import('@/components/ibdp/ReviewsSection'));
const SubjectsCard = dynamic(() => import('@/components/ibdp/SubjectCard'));
import OurPromise from '@/components/shared/OurPromise';
import { getOurPromiseData } from '@/data/ourPromiseConfig';
// Removed: { useEffect, useRef }
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { getMarqueeData } from "@/data/marqueeConfig";

const ibdpSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What Is The Focus Of IBDP Tutoring At Ignite Training Institute?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ignite's IBDP tutoring focuses on subject mastery across HL and SL, Internal Assessment guidance, Extended Essay supervision, TOK essay support, and Paper 1, Paper 2, and Paper 3 exam technique. Programmes are calibrated for both Year 1 and Year 2 students and aligned with May and November exam sessions."
        }
      },
      {
        "@type": "Question",
        "name": "Do Ignite's IBDP Tutors Cover All Subjects Across HL And SL?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Ignite's IBDP tutors cover Maths AA, Maths AI, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, English Language and Literature, French Ab Initio and B, Spanish, and Psychology, at both HL and SL. HL coverage includes extension topics, option topics, and Paper 3 components."
        }
      },
      {
        "@type": "Question",
        "name": "How Are Ignite's IBDP Tutoring Sessions Customised For Each Student?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every new IBDP student starts with a diagnostic to map subject gaps and learning style. The tutor then builds a personalised plan around HL or SL choices, school pacing, target IB score, and university goals. The plan is reviewed every few weeks and adjusted as the student's predicted grade moves."
        }
      },
      {
        "@type": "Question",
        "name": "Can Students Try A Free Demo Class Before Enrolling In IBDP Tuition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every new IBDP student is offered a free demo class with the matched tutor before any enrolment commitment. The demo lets the student assess teaching style, ask subject-specific questions, and see how a real IBDP session runs. Parents typically use it to confirm fit before discussing a regular schedule."
        }
      },
      {
        "@type": "Question",
        "name": "How Does Ignite's IBDP Tutoring Support The Extended Essay, IA, And TOK?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ignite tutors guide students through EE research question framing, supervisor meeting preparation, and final-draft polish. IA support covers topic selection and criterion-based drafting (typically Criteria A to E). For TOK, we work through prescribed essay titles, real-life-situation framing, and exhibition object selection with markscheme-aligned feedback."
        }
      },
      {
        "@type": "Question",
        "name": "Can IBDP Tutoring Help Improve Predicted Grades And Final Diploma Scores?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Predicted grades are built from school mocks and IA scores submitted to UCAS by 14 January and US applications from November 1. Ignite's IBDP coaching focuses Year 2 work on the highest-leverage push to lift those grades before submission, then shifts to paper technique and timed practice for final exams."
        }
      },
      {
        "@type": "Question",
        "name": "How Early Should Students Start IBDP Tutoring In Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most students benefit from starting at the beginning of Year 1 (Grade 11) to build subject foundations, plan IA topics, and register the Extended Essay early. Year 2 students still gain from focused tutoring on predicted-grade improvement and paper technique, though the timeline is tighter once university applications open."
        }
      },
      {
        "@type": "Question",
        "name": "Are Online IBDP Classes In Dubai Available For Year 1 And Year 2 Students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Online IBDP classes are available across both Year 1 and Year 2, with live interactive sessions, real-time mark scheme annotation, and session recordings for review. Online suits Year 12 students particularly well because it returns 3 to 5 hours per week of commute time straight into revision during the heaviest workload year."
        }
      },
      {
        "@type": "Question",
        "name": "How Many IBDP Coaching Sessions Per Week Does A Student Need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most IBDP students benefit from 1 to 2 sessions per week per weak subject during the regular term. Closer to school mocks or May or November final exams, students often increase to 3 sessions per week or add intensive revision blocks. Ignite reviews session frequency every few weeks based on the student's pace."
        }
      },
      {
        "@type": "Question",
        "name": "What Should Parents Look For When Hiring An IBDP Tutor In Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for subject and level match (Maths AA HL is different from AI SL), genuine IBDP curriculum knowledge (IA criteria, EE supervision, TOK rubric), transparent progress reporting, and a teaching style your child responds to. Ask whether the tutor has taught your child's exact subject and level. A free demo class confirms fit."
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
        "name": "IBDP Tutors in Dubai",
        "item": "https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai"
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
    "@id": "https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai",
    "name": "IBDP Tutoring in Dubai",
    "description": "Expert IBDP tutoring in Dubai for Year 1 and Year 2 IB Diploma students across all six subject groups at HL and SL. Personalised support covering Internal Assessments, the Extended Essay, and Theory of Knowledge, with preparation for May and November exam sessions, delivered online and in-person in DIFC and JLT.",
    "url": "https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai",
    "image": "https://ignitetraininginstitute.com/assets/ibdp_bg_main.webp",
    "educationalLevel": "Grade 11 and Grade 12",
    "educationalCredentialAwarded": "International Baccalaureate Diploma Programme (IBDP)",
    "inLanguage": "en",
    "teaches": [
      "IB Mathematics Analysis and Approaches (AA)",
      "IB Mathematics Applications and Interpretations (AI)",
      "IB Physics (HL and SL)",
      "IB Chemistry (HL and SL)",
      "IB Biology (HL and SL)",
      "IB Computer Science (HL and SL)",
      "IB Economics (HL and SL)",
      "IB Business Management (HL and SL)",
      "IB English Language and Literature",
      "IB French Ab Initio and B",
      "IB Spanish Ab Initio and B",
      "IB Psychology"
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
      "audienceType": "Year 1 and Year 2 IB Diploma students (Grade 11 and Grade 12)"
    },
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "name": "Bespoke One-On-One Tutoring For IBDP",
        "description": "A year-long IBDP course tailored to individual learning goals, starting with a diagnostic assessment and supporting students at their own pace with focused guidance throughout the academic year, including IA and Extended Essay support.",
        "courseMode": ["Onsite", "Online"]
      },
      {
        "@type": "CourseInstance",
        "name": "IBDP Finals Prep Program In Groups",
        "description": "A comprehensive 9-month program from August to April for second-year Diploma students, with 80+ hours of focused training per subject across expert tutoring, regular testing, and targeted review sessions in small groups of 3 to 6.",
        "courseMode": ["Onsite", "Online"]
      },
      {
        "@type": "CourseInstance",
        "name": "Pre IBDP Summer Bridge Course",
        "description": "A 6-week head-start program in July and August designed to build a strong foundation in key IBDP concepts. With 24 hours of subject-wise training, this course is ideal for students transitioning into the IBDP, especially those coming from other curricula, and prepares them for this demanding phase.",
        "courseMode": ["Onsite", "Online"]
      },
      {
        "@type": "CourseInstance",
        "name": "IBDP Spring Revision Course",
        "description": "A focused 2-week intensive revision program in March and April with 16 hours of expert-led training per subject, recapping key concepts and sharpening exam readiness through practice with IBDP-style questions and mock exams.",
        "courseMode": ["Onsite", "Online"]
      },
      {
        "@type": "CourseInstance",
        "name": "IBDP Oct/Nov Resit Success Program",
        "description": "In the IB, one or two points can decide a diploma or a conditional university offer, which is what makes the November session worth preparing for properly. This intensive course helps IBDP students raise their subject grades through concentrated revision, past-paper practice, and precise feedback tied to the IB mark bands in the written papers.",
        "courseMode": ["Onsite", "Online"]
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
        "author": { "@type": "Person", "name": "Nidhi Choudhury" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "We had a great experience with the instructor at Ignite. My child progressed amazingly under their guidance and achieved good grade in Chemistry. Thank you so much to Ahzeb and the Ignite team for supporting us in this!",
        "publisher": { "@type": "Organization", "name": "Google" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Genesis Tech" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "I wanted to share my incredible experience with Ignite Training Institute! They have been absolutely amazing in coaching my son. The team there took a personal interest in his progress, helping him overcome challenges and building his confidence along the way. I highly recommend Ignite Training Institute to anyone looking for exceptional coaching. The teachers are outstanding and go the extra mile to provide individualized attention. Their dedication and support have made a remarkable difference in my son's educational journey. Keep up the great stuff, Ignite Training Institute! Your commitment to students' growth is truly commendable.",
        "publisher": { "@type": "Organization", "name": "Google" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Kabir Kochhar" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "One of the best Business and Economics teachers for the IB. The syllabus is covered thoroughly, and difficult concepts are explained within seconds, making them easy to understand. I have been working with this tutor for the best part of my DP course so far, and my grades have gone right up. I am now on track for a great DP score all thanks to this support.",
        "publisher": { "@type": "Organization", "name": "Google" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Maya Alrawi" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "I'm an IB student and had a great experience with my Math tutoring at Ignite. The sessions explained and covered topics really well online. I used to think that face-to-face was more effective than online tutoring, but I was able to learn just as effectively online. I highly recommend Ignite Institute for Math tutoring.",
        "publisher": { "@type": "Organization", "name": "Google" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Nicole Morgan" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "Sumit from Ignite went out of his way to arrange a tutor for my daughter on very short notice. The tutor was kind and competent and managed to quickly solve my daughter's doubt. Thank you! Highly recommend!",
        "publisher": { "@type": "Organization", "name": "Google" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Kovidh Verma" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "My teacher at Ignite is a fantastic economic teacher, making sure the syllabus was covered and has gone through all the 15 past exam papers I did.",
        "publisher": { "@type": "Organization", "name": "Google" }
      }
    ]
  }
];

// The local Locomotive Scroll initialization logic has been entirely removed.
const IBDP = ({ headerHeight }) => {

  return (
    <>
      <JsonLd schema={ibdpSchema} />
      <SEO
                loadInnerStyles={true}
        title="IBDP Tutors In Dubai | Leading IB Diploma Tutors"
        description="Expert IBDP tutors in Dubai. Get personalized tutoring for all IB Diploma subjects. Boost your IB scores with certified IBDP trainers"
        url="https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai"
        preloadImages={[
          {
            src: "/assets/ib-bg.webp",
            type: "image/webp",
            media: "(max-width: 768px)"
          },
          {
            src: "/assets/ibdp_bg_main.webp",
            type: "image/webp",
            media: "(min-width: 769px)"
          }
        ]}
      />
      <Head>
<link rel="stylesheet" href="/styles/Ibdp.css" />
      </Head>
      <div
        // Removed: ref={scrollRef}
        className='overflow-hidden innerpage page-content-padding'
      // Removed: data-scroll-container
      >
        <section className="hero-section">
          <div className="hero-container">
            {/* LCP Image moved here for immediate painting (SSR) */}
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/ib-bg.webp" />
              <img
                src="/assets/ibdp_bg_main.webp"
                alt="IBDP Tutors Background"
                fetchPriority="high"
                width="1200"
                height="800"
                className="hero-img"
                style={{ opacity: 1, visibility: 'visible' }}
              />
            </picture>

            {/* Interactive Content */}
            <div className="row g-0 h-100">
              <InfoCardLeft {...subjectPages.ibdp} />
              <InfoCardForm formConfig={subjectFormConfigs.ibdp} />
            </div>
          </div>

        </section>

        <LazySection>
          <section data-scroll-section>
            <IgniteAboutCard />
          </section>
        </LazySection>

        {/* <section data-scroll-section>
        <StudentAchievements />
      </section> */}

        <LazySection>
          <section data-scroll-section>
            <CourseCard />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <SubjectsCard />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <ReviewsSection />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Trainers />
          </section>
        </LazySection>

        {/* what we offer Start */}
        <LazySection>
          <WhatWeOfferSection />
        </LazySection>


        {/* What We Offer End */}

        <LazySection>
          <section data-scroll-section>
            <IgniteAchievements />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <MarqueeBanner config={getMarqueeData('standard')} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <OurPromise config={getOurPromiseData('ibdp')} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <FAQSection {...faqSections.ibdp} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Blog />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <Accordion {...accordionSections.ibdp} />
          </section>
        </LazySection>
      </div>
    </>
  );
};

export default IBDP;