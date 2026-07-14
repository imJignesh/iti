import Head from "next/head";
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
import LazySection from "@/components/LazySection";
// import MovingBanner from '@/components/home/MovingBanner';
// import Testimonial from '@/components/home/Testimonial';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Accordion = dynamic(() => import('@/components/shared/Accordion'));
import { accordionSections } from '@/data/accordionSections';
const Blog = dynamic(() => import('@/components/myp/Blog'));
const SubjectSupport = dynamic(() => import('@/components/myp/SubjectSupport'));
const FAQSection = dynamic(() => import('@/components/shared/FaqSection'));
import { faqSections } from '@/data/faqSections';
const IgniteAchievements = dynamic(() => import('@/components/myp/IgniteAchievements'));
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
const OurApproach = dynamic(() => import('@/components/myp/OurApproach'));
const WhatWeOfferSection = dynamic(() => import('@/components/ibdp/WhatWeOfferSection'));
const Trainers = dynamic(() => import('@/components/myp/Trainers'));
const MarqueeBanner = dynamic(() => import('@/components/shared/MarqueeBanner'));
const ReviewsSection = dynamic(() => import('@/components/myp/ReviewsSection'));
const SubjectsCard = dynamic(() => import('@/components/myp/SubjectCard'));
import OurPromise from '@/components/shared/OurPromise';
import { getOurPromiseData } from '@/data/ourPromiseConfig';
import { getMarqueeData } from "@/data/marqueeConfig";


// 1. ACCEPT the headerHeight prop
// NOTE: Component is named IBDP, but the logic and schema provided are for MYP.
const mypSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What Subjects Are Covered In IB MYP Tutoring At Ignite?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ignite's IB MYP tutoring covers Maths Standard and Extended, Physics, Chemistry, Biology, Computer Science, Economics, Business Management, English Language and Literature, and French. Subjects are taught across all four MYP criteria for each year level, with Year 5 support extended to eAssessment preparation and Personal Project supervision."
        }
      },
      {
        "@type": "Question",
        "name": "Is Ignite's MYP Tutoring Aligned With IB Criterion-Based Assessment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Sessions are structured around the four MYP criteria (A, B, C, D, each scored out of 8) used by IB World Schools in Dubai. Tutors map student work against criterion descriptors, identify weak strands, and align ATL skill-building with what the IB rubric actually rewards."
        }
      },
      {
        "@type": "Question",
        "name": "How Are Ignite's MYP Tutoring Sessions Personalised For Each Student?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every new MYP student starts with a diagnostic in their weak subject. Tutors map current performance against each of the four MYP criteria for that subject, identify the specific criterion strands dragging the grade down, and build a personalised lesson plan around closing those gaps rather than re-teaching what the student already knows."
        }
      },
      {
        "@type": "Question",
        "name": "Does Ignite Help With MYP Personal Projects And eAssessments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Year 5 students get full Personal Project support across topic selection, supervisor meeting preparation, process journal review, and final report drafting against the four criteria. eAssessment support covers on-screen exam practice, ePortfolio structuring for Arts, Design, and PHE, and timed mock papers ahead of May and November sessions."
        }
      },
      {
        "@type": "Question",
        "name": "Can Students Try A Free Demo Class Before Enrolling In MYP Tuition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every new student is offered a free demo class with the matched MYP tutor before any enrolment commitment. The demo lets the student assess teaching style, ask subject-specific questions, and see how a real session runs. Parents typically use it to confirm fit before discussing a regular schedule."
        }
      },
      {
        "@type": "Question",
        "name": "How Does Ignite's MYP Tutoring Support The Transition To IBDP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Year 5 MYP support is built to feed directly into IBDP readiness. We focus on the ATL skills the IBDP demands (academic writing, source evaluation, time management across multi-week tasks), help students choose between Maths Standard and Extended at MYP 4, and align Year 5 subject work with the HL or SL choices students will lock in at the start of Year 11."
        }
      },
      {
        "@type": "Question",
        "name": "When Should Students Start MYP Tutoring In Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Grade 8-10 students benefit from starting MYP tutoring in Year 3 or Year 4 to build criterion-based understanding before Year 5. Year 5 students often start in the summer before Grade 10 to prepare for eAssessment and the Personal Project. Students switching curricula into the MYP usually benefit from starting in the first term."
        }
      },
      {
        "@type": "Question",
        "name": "How Many MYP Coaching Sessions Should A Student Attend Each Week?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most MYP students benefit from 1 to 2 sessions per week per weak subject during the regular term. Year 5 students often increase to 2 to 3 sessions per week closer to mocks or May or November eAssessments, with added Personal Project supervision blocks. Frequency is reviewed every few weeks based on the student's pace."
        }
      },
      {
        "@type": "Question",
        "name": "Are Online IB MYP Classes In Dubai Available For Grade 8-10 Students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Online IB MYP classes are available across Year 3, Year 4, and Year 5, with live interactive sessions, real-time rubric annotation, and session recordings for review. Online suits MYP students with packed school and activity schedules. In-person at the DIFC and JLT centres remains available for students who prefer face-to-face sessions."
        }
      },
      {
        "@type": "Question",
        "name": "What Should Parents Look For When Hiring An MYP Tutor In Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for genuine MYP curriculum knowledge (the four criteria, ATL skills, Personal Project, eAssessment format), subject specialisation at the right year level, transparent progress reporting against the rubric, and a teaching style your child responds to. A free demo class confirms fit before committing to a regular schedule."
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
        "name": "MYP Tutors in Dubai",
        "item": "https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai"
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
    "@id": "https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai",
    "name": "IB MYP Tutoring in Dubai",
    "description": "Expert IB MYP tutoring in Dubai for Grade 8 to 10 students across the MYP subject groups. Concept-driven, criterion-based support covering the four MYP criteria, the Personal Project, and eAssessment preparation, delivered online and in-person in DIFC and JLT.",
    "url": "https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai",
    "image": "https://ignitetraininginstitute.com/assets/myp_bg_main.webp",
    "educationalLevel": "Grade 8 to Grade 10",
    "educationalCredentialAwarded": "IB Middle Years Programme (MYP)",
    "inLanguage": "en",
    "teaches": [
      "IB MYP Mathematics (Standard and Extended)",
      "IB MYP Physics",
      "IB MYP Chemistry",
      "IB MYP Biology",
      "IB MYP Computer Science",
      "IB MYP Economics",
      "IB MYP Business Management",
      "IB MYP English Language and Literature",
      "IB MYP French"
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
      "audienceType": "Grade 8 to Grade 10 IB MYP students"
    },
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "name": "Bespoke One-On-One Tutoring For IB MYP",
        "description": "An all-year-round MYP program aligned to each student's learning objectives, with customized lesson plans, a diagnostic approach to assess learning needs, student-centric pacing, and end-to-end guidance for the MYP Personal Project.",
        "courseMode": ["Onsite", "Online"]
      },
      {
        "@type": "CourseInstance",
        "name": "IB MYP eAssessments Prep Program In Groups",
        "description": "A comprehensive 9-month program from August to April for students entering the final year of the Middle Years Programme, with 80+ hours of in-depth training per subject across expert tutoring, regular assessments, and targeted review in small groups of 3 to 6.",
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
        "author": { "@type": "Person", "name": "Omar Bilal" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "A great tutor for economics as the IB course is covered in great detail with units taught thoroughly. My economics grade has progressed superbly.",
        "publisher": { "@type": "Organization", "name": "Google" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Arjun Thawrani" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "Amazing classes with highly qualified teachers. I have learnt a lot in only 2 classes.",
        "publisher": { "@type": "Organization", "name": "Google" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Mahad Waheed" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "Ignite institute has been a great experience. Especially with the mentors level of experience being very knowledgeable across IB.",
        "publisher": { "@type": "Organization", "name": "Google" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Shakira Jahan" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "I am doing IB Physics. The instructor is truly an angel and a role model to me. Their in-depth knowledge of physics is incredible, and their passion for the subject shines through in everything they do in class. As a slow student, I really appreciate the effort they put into making sure that I understand the concepts we are studying. They have a remarkable talent for explaining complex ideas in a way that is easy to understand, and they always take the time to answer my questions and provide examples that clarify the material. I also value the way they challenge me to think critically and to develop my own understanding of the subject. Their question-and-answer skills are second to none, and I always feel supported and encouraged when I ask for help. I feel incredibly fortunate to have the opportunity to learn from them.I am doing IB English. The instructor’s passion for the subject shines through in every lesson, and their dedication to my learning is truly inspiring. I appreciate that they always challenge me to go beyond surface-level analysis of literature and encourage me to dive deeper into the text. Their feedback on my work is invaluable and has helped me improve my writing and critical thinking skills tremendously. I also love the variety of materials and resources provided in class, and the way different English language techniques are introduced. I am doing IB Economics. As a first-time economics student, I was initially intimidated by the subject, but the instructor has made it so much easier to understand. Their method of starting the first class by asking questions about the economy was such a brilliant way to engage me in the subject. I know I ended up asking a silly question, but it was handled so gracefully, and I appreciate their patience with me in class. I have to say, I look forward to every class because of how interesting they make the discussions. Their ability to make the subject matter relatable and engaging is commendable. The notes are also amazing!",
        "publisher": { "@type": "Organization", "name": "Google" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Insiya Hamid" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "Ignite training institute is an adequate facility, the work ethic of which is worthy of its name. With hardworking qualified individuals, who are able to explain and teach complex topics in very simple and logical ways making it easy to understand. The managing and coordinating team is also very understanding and flexible according to the student's needs.",
        "publisher": { "@type": "Organization", "name": "Google" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sara Kerr" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
        "reviewBody": "really good tutoring sessions conducted. I'm a student going there myself and I really enjoy my Economics sessions with my tutor who really gives good resources and explains/condenses concepts really well. Lots of past paper practice and she's very good at essay planning as well. Overall, I really enjoy the sessions I've been receiving here.",
        "publisher": { "@type": "Organization", "name": "Google" }
      }
    ]
  }
];

const MYP = ({ headerHeight }) => {

  // Removed redundant local Locomotive Scroll initialization to prevent conflict with _app.js global provider

  return (
    <>
      <SEO
        loadInnerStyles={true}
        title="One-On-One Interactive Tutoring Classes For IB MYP In UAE"
        description="Improve grades with top IB MYP tutors in the UAE. Get subject-specific support, interactive lessons & tailored study plans from certified MYP trainers"
        url="https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai"
        preloadImages={[
          {
            src: "/assets/myp_bg_mobile.webp",
            type: "image/webp",
            media: "(max-width: 768px)"
          },
          {
            src: "/assets/myp_bg_main.webp",
            type: "image/webp",
            media: "(min-width: 769px)"
          }
        ]}
      />
      <Head>
        <link rel="stylesheet" href="/styles/Ibdp.css" />
      </Head>
      <JsonLd schema={mypSchema} />


      {/* 3. APPLY the style for paddingTop */}
      <div className='overflow-hidden innerpage page-content-padding'>
        <section className="hero-section">
          <div className="hero-container">
            {/* LCP Image moved here for immediate painting (SSR) */}
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/myp_bg_mobile.webp" />
              <img
                src="/assets/myp_bg_main.webp"
                alt="MYP Tutors Background"
                fetchPriority="high"
                width="1200"
                height="800"
                className="hero-img"
                style={{ opacity: 1, visibility: 'visible' }}
              />
            </picture>

            <div className="row g-0 h-100">
              <InfoCardLeft {...subjectPages.myp} />
              <InfoCardForm formConfig={subjectFormConfigs.myp} />
            </div>
          </div>

        </section>
        <LazySection>
          <section data-scroll-section>
            <OurApproach />
          </section>
        </LazySection>

        {/* <section data-scroll-section>
            <StudentAchievements />
          </section> */}

        <LazySection>
          <section data-scroll-section>
            <SubjectSupport />
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
            <OurPromise config={getOurPromiseData('myp')} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <FAQSection {...faqSections.myp} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Blog />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <Accordion {...accordionSections.myp} />
          </section>
        </LazySection>
      </div>
    </>
  );
};

export default MYP;