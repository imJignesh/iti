import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
import LazySection from "@/components/LazySection"
// import MovingBanner from '@/components/home/MovingBanner';
// import Testimonial from '@/components/home/Testimonial';
import dynamic from 'next/dynamic';

const Accordion = dynamic(() => import('@/components/shared/Accordion'));
import { accordionSections } from '@/data/accordionSections';
const Blog = dynamic(() => import('@/components/a-level/Blog'));
const CourseCard = dynamic(() => import('@/components/a-level/CourseCard'));
const FAQSection = dynamic(() => import('@/components/shared/FaqSection'));
const IgniteAchievements = dynamic(() => import('@/components/a-level/IgniteAchievements'));
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
import { faqSections } from '@/data/faqSections';
const IgniteAboutCard = dynamic(() => import('@/components/a-level/IgniteAboutCard'));
const Trainers = dynamic(() => import('@/components/a-level/Trainers'));
const WhatWeOfferSection = dynamic(() => import('@/components/a-level/WhatWeOfferSection'));
const MarqueeBanner = dynamic(() => import('@/components/a-level/MarqueeBanner'));
const ReviewsSection = dynamic(() => import('@/components/a-level/ReviewsSection'));
const SubjectsCard = dynamic(() => import('@/components/a-level/SubjectCard'));
import OurPromise from '@/components/shared/OurPromise';
import { getOurPromiseData } from '@/data/ourPromiseConfig';
const UniImagesCard = dynamic(() => import('@/components/a-level/universityCrad'));

const aLevelSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which A-Level And AS-Level Subjects Does Ignite Tutor For In Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ignite covers Pure Math, Statistics, Further Math, Physics, Chemistry, Biology, Computer Science, Economics, Business Studies, Accounting, English Language and Literature, French, Spanish, Psychology, and AS Level EVM. Subjects are tutored at both AS and A2, matched to the student's specific exam board across CAIE, Pearson Edexcel, and Oxford AQA."
        }
      },
      {
        "@type": "Question",
        "name": "Which Exam Boards Does Ignite Cover (Edexcel, CAIE, Oxford AQA)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ignite tutors across all three British A-Level exam boards: Cambridge International (CAIE), Pearson Edexcel (both IAL and GCE), and Oxford International AQA. Tutors are matched to the student's specific board for each subject, with past paper practice and mark scheme work tailored to that board's exact specification."
        }
      },
      {
        "@type": "Question",
        "name": "Does Ignite Offer Both One-On-One And Small Group A-Level Tutoring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. One-on-One tutoring runs year-round for students who need fully individualised pacing or are pushing a weak subject up. Small Group sessions (3 to 6 students at the same year and exam board) run as 10-month structured programmes for AS Year 12 and A-Level Year 13 cohorts, including over 70 hours of expert tutoring."
        }
      },
      {
        "@type": "Question",
        "name": "How Does Ignite Prepare Students For A-Level Exams And Past Papers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sessions work through past papers across Edexcel, CAIE, and Oxford AQA, with each question mapped to the mark scheme and command terms decoded. Students sit timed mock papers under exam conditions, receive detailed paper review feedback, and work through unit-wise worksheets calibrated to their specific board's specification."
        }
      },
      {
        "@type": "Question",
        "name": "Can Students Try A Free Demo Class Before Enrolling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every new student is offered a free demo class with the matched A-Level tutor before any enrolment commitment. The demo lets the student assess teaching style, ask exam-board-specific questions, and see how a real session runs. Parents typically use it to confirm fit before discussing a regular schedule."
        }
      },
      {
        "@type": "Question",
        "name": "When Should Students Start A-Level Tutoring In Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Year 11 students benefit from summer bridging support before Year 12 starts. Year 12 students ideally start in September or October at the beginning of AS. Year 13 students benefit from starting after autumn mocks when predicted grades land. The most common pattern is Year 12 students who join in October and stay through Year 13 finals."
        }
      },
      {
        "@type": "Question",
        "name": "Is Ignite's AS-Level Tuition Available For Year 12 Students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. AS-Level tuition runs as a 10-month group programme from September to June for Year 12 students, with over 70 hours of expert tutoring, full AS syllabus coverage, unit-wise worksheets tailored to Edexcel, CAIE, or Oxford AQA, and a mock exam series under timed conditions before May finals."
        }
      },
      {
        "@type": "Question",
        "name": "Are Ignite's A-Level Classes Available Online For UAE Students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Online A-Level classes are available across Year 12 and Year 13 for students in Dubai, Abu Dhabi, Sharjah, Ajman, and the wider UAE. Sessions run live with interactive whiteboards, real-time mark-scheme annotation, and recordings for review. Online suits Year 13 students particularly well given the heavier workload year."
        }
      },
      {
        "@type": "Question",
        "name": "Can A-Level Tutors At Ignite Help Students Aiming For Top Universities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. A-Level tutors work with students applying to Russell Group universities, Oxbridge, US Ivy League, and top UAE universities. Predicted grade improvement happens through structured AS work and Year 13 paper technique. UCAS predictions submit by 14 January (15 October for Oxbridge and medicine), so the work needs to land before those windows."
        }
      },
      {
        "@type": "Question",
        "name": "What Should Parents Look For When Hiring An A-Level Tutor In Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for exam-board-specific knowledge (CAIE Maths and Edexcel IAL Maths use different syllabus codes), genuine subject and year-level match (AS-only tutoring is different from A2), transparent progress tracking against mark schemes, and a teaching style your child responds to. A free demo class confirms fit before committing."
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
        "name": "A-Level Tutors in Dubai",
        "item": "https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai"
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
    "@id": "https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai",
    "name": "AS and A-Level Tutoring in Dubai",
    "description": "Expert AS and A-Level tutoring in Dubai for Year 12 and Year 13 students across all major exam boards, including Edexcel (IAL and GCE), Cambridge (CAIE), and Oxford International AQA. Focused exam preparation delivered online and in-person in DIFC and JLT.",
    "url": "https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai",
    "image": "https://ignitetraininginstitute.com/assets/alevel_bg_main.webp",
    "educationalLevel": "Year 12 and Year 13",
    "educationalCredentialAwarded": "AS and A-Level Qualification",
    "inLanguage": "en",
    "teaches": [
      "A-Level Pure Mathematics",
      "A-Level Statistics",
      "A-Level Further Mathematics",
      "A-Level Physics",
      "A-Level Chemistry",
      "A-Level Biology",
      "A-Level Computer Science",
      "A-Level Economics",
      "A-Level Business Studies",
      "A-Level Accounting",
      "A-Level English Language and Literature",
      "A-Level French",
      "A-Level Spanish",
      "A-Level Psychology",
      "AS Level Environmental Management (EVM)"
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
      "audienceType": "Year 12 and Year 13 AS and A-Level students"
    },
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "name": "One-On-One Tutoring For AS & A-Level",
        "description": "An all-year-round A-Level course structured around specific learning standards, starting with a diagnostic test and letting students learn at their own pace. Supports Edexcel (IAL/GCE), Cambridge, and AQA, with customized lessons, schedules, and resources.",
        "courseMode": ["Onsite", "Online"]
      },
      {
        "@type": "CourseInstance",
        "name": "AS Levels Year 12 Groups",
        "description": "A comprehensive 10-month program from September to June with over 70 hours of expert tutoring across all A-Level subjects, ensuring full AS-Level syllabus coverage in small groups of 3 to 6 for students appearing in May finals.",
        "courseMode": ["Onsite", "Online"]
      },
      {
        "@type": "CourseInstance",
        "name": "A Levels Year 13 Groups",
        "description": "A structured 10-month program from September to June with over 70 hours of focused tutoring across all A-Level subjects, helping Year 13 students achieve complete syllabus mastery and exam readiness in small groups of 3 to 6 writing finals in May.",
        "courseMode": ["Onsite", "Online"]
      },
      {
        "@type": "CourseInstance",
        "name": "AS Level Summer Head Start",
        "description": "AS Level moves quickly, & the first term rarely waits for students to find their feet. This six-week course, running through July & August, gives students a real head start before Year 12 begins. Over 24 hours of subject-wise training, they build a firm grip on the core AS Level concepts, so the step up from IGCSE or another curriculum feels far less steep in September.",
        "courseMode": ["Onsite", "Online"]
      },
      {
        "@type": "CourseInstance",
        "name": "A-Levels Oct/Nov Resit Success Program",
        "description": "A Level grades decide university places, which means a borderline result or a missed offer carries real weight. This intensive course helps students improve their Oct/Nov A Level results through sharp revision, exam-style practice, & detailed feedback that pinpoints where they lost marks. The aim is straightforward: a stronger grade achieved with targeted exam strategies.",
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
        "author": { "@type": "Person", "name": "Shivam Bakhda" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "The institute has always been extremely helpful and has enabled me to take A level Economics outside of school and still excel by already achieving 2 A’s in the first two AS papers and now aiming for A*’s in P3 and P4. Additionally, I am also able to improve my Business Studies skills.",
        "publisher": { "@type": "Organization", "name": "Google" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Priya Nair" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "I highly recommend the services offered by Ignite. The support was extremely helpful for A-Level Economics and Business. Thanks to this, I achieved a newfound sense of confidence for my exams and was able to study in a structured and effective way. The rest of the staff was great too, from Ahzeb to Saif.",
        "publisher": { "@type": "Organization", "name": "Google" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Nishchaya Dheer" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "It’s a very good support institute where special attention is given to each student. My son has been going here for the last 2 years (O & AS Levels) to take support in Maths & Physics and has been very happy and comfortable. All tutors have been a big support as well to my son.",
        "publisher": { "@type": "Organization", "name": "Google" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Palanivel Guruswamy" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "I am happy to share my experience with Ignite Training Institute. My daughter recently achieved A* grades in Math, Physics, Chemistry & Biology. This wouldn't have happened without the effort & support from the institute. The teachers dedication, personalized attention, and their availability for any clarification have all contributed to her academic excellence. I extend my heartfelt thanks & appreciation to the institute & teachers.",
        "publisher": { "@type": "Organization", "name": "Google" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Tamanna Iyyani" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "As a student that has completed my A-levels with Ignite, I can say that my experience with the teachers and faculty has been amazing. Ignite provided me with a supportive environment where I really benefited learning from kind and passionate teachers. Overall, it was a place I could fully explore and excel in my academic pursuits and I believe has set me up well for university and my life ahead.",
        "publisher": { "@type": "Organization", "name": "Google" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Saraswathy Ramachandran" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "We had a wonderful experience with Ignite training institute. My daughter got very good support from her teacher Mr Abdul for her A level Further Math course. He taught all concepts clearly and cleared her doubts",
        "publisher": { "@type": "Organization", "name": "Google" }
      }
    ]
  }
];

// 1. ACCEPT the headerHeight prop
const ALEVEL = ({ headerHeight }) => {


  return (
    <>
      <SEO
                loadInnerStyles={true}
        title="Best A-Level Tutors In Dubai | Leading Coaching Institute"
        description="Empower your academic journey with expert A-level tutors in Dubai. Personalized tutoring for Mathematics, Sciences, Business, & more to excel in your exams"
        url="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai"
        preloadImages={[
          {
            src: "/assets/alevel.webp",
            type: "image/webp",
            media: "(max-width: 768px)"
          },
          {
            src: "/assets/alevel_bg_main.webp",
            type: "image/webp",
            media: "(min-width: 769px)"
          }
        ]}
      />


      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={aLevelSchema} />

      {/* 3. APPLY the style for paddingTop */}
      <div
        className='overflow-hidden innerpage page-content-padding'
      >
        <section className="hero-section">
          <div className="hero-container">
            {/* LCP Image moved here for immediate painting (SSR) */}
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/alevel.webp" />
              <img
                src="/assets/alevel_bg_main.webp"
                alt="A Level Tutors Background"
                fetchPriority="high"
                width="1200"
                height="800"
                className="hero-img"
                style={{ opacity: 1, visibility: 'visible' }}
              />
            </picture>

            <div className="row g-0 h-100">
              <InfoCardLeft {...subjectPages.aLevel} />
              <InfoCardForm formConfig={subjectFormConfigs.aLevel} />
            </div>
          </div>
        </section>

        <LazySection>
          <section data-scroll-section>
            <IgniteAboutCard />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <UniImagesCard />
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
            <OurPromise config={getOurPromiseData('aLevel')} />
          </section>
        </LazySection>

        {/* <section data-scroll-section>
            <LifeAtIgniteCarousel />
          </section> */}

        <LazySection>
          <section data-scroll-section>
            <FAQSection {...faqSections.aLevel} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Blog />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <Accordion {...accordionSections.aLevel} />
          </section>
        </LazySection>
      </div>
    </>
  );
};

export default ALEVEL;