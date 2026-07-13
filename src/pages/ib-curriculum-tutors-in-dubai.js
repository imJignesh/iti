import Head from 'next/head';
import dynamic from 'next/dynamic';
import LazySection from "@/components/LazySection";
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
import { faqSections } from '@/data/faqSections';
import { accordionSections } from '@/data/accordionSections';

const Accordion = dynamic(() => import('@/components/shared/Accordion'));
const Blog = dynamic(() => import("@/components/ibc/Blog"));
const IBCurriculumStages = dynamic(() => import('@/components/ibc/Curriculum.jsx'));
const FAQSection = dynamic(() => import('@/components/shared/FaqSection'));
const IgniteAchievements = dynamic(() => import('@/components/ibc/IgniteAchievements'));
const IgniteAboutCard = dynamic(() => import("@/components/ibc/IgniteAboutCard"));
const Trainers = dynamic(() => import("@/components/ibc/Trainers"));
const WhatWeOfferSection = dynamic(() => import('@/components/ibc/WhatWeOfferSection'));
const MarqueeBanner = dynamic(() => import('@/components/ibc/MarqueeBanner'));
const ReviewsSection = dynamic(() => import('@/components/ibc/ReviewsSection'));
const SubjectsCard = dynamic(() => import('@/components/ibc/SubjectCard'));
const UspsSection = dynamic(() => import('@/components/ibc/UspsSection'));


// 1. ACCEPT the headerHeight prop
const IBC = ({ headerHeight }) => {

  // ----------------------------------------------------
  // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  // Combine all three schema blocks into a single array object
  const ibcSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which IB Subjects Do Ignite's IB Tutors In Dubai Cover At SL And HL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignite's IB tutors in Dubai cover Maths AA, Maths AI, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, English Language and Literature, French Ab Initio and B, Spanish, and Psychology. All subjects are supported at both Standard Level and Higher Level, including HL extension topics and Paper 3 components where applicable."
          }
        },
        {
          "@type": "Question",
          "name": "Is Ignite's IB Tutoring Aligned With The Latest IB Curriculum And Assessment Criteria?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Ignite's IB tutoring follows the current IB syllabus documents and assessment criteria for each subject, including the latest IA rubrics, Extended Essay supervision guidelines, and TOK essay prescribed titles. Tutors update their teaching materials with each IB curriculum revision so students are prepared for the exact paper they will sit."
          }
        },
        {
          "@type": "Question",
          "name": "How Does Ignite's IB Tutoring Support Internal Assessments, The Extended Essay, And TOK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tutors guide students through IA topic selection, criteria-based drafting (Criteria A to E depending on subject), and final polish before submission. Extended Essay support covers research question framing, supervisor meeting preparation, and 4,000-word structuring. For TOK, students work through essay prompts and exhibition object selection with markscheme-aligned feedback."
          }
        },
        {
          "@type": "Question",
          "name": "Can Students Try A Free Demo Class Before Enrolling In IB Tuition At Ignite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every new student is offered a free demo class with the matched IB tutor before any enrolment commitment. The demo lets students assess teaching style, ask subject-specific questions, and see how a real session runs. Parents typically use it to confirm fit before discussing a regular schedule."
          }
        },
        {
          "@type": "Question",
          "name": "Does Ignite Offer One-On-One IB Tutoring Or Small Group Tutoring (SGT) In Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both formats are available. One-on-one IB tutoring suits students who need fully individualised pacing or are working on weak HL subjects close to exams. Small Group Tutoring (SGT) runs with 2 to 4 students at similar levels and works well for Economics, Business Management, and English Literature where group discussion adds value."
          }
        },
        {
          "@type": "Question",
          "name": "Is Online IB Tutoring Available For Students Outside Dubai Or In Other Emirates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Online IB tutoring is available for students in Abu Dhabi, Sharjah, Ajman, and across the wider UAE, as well as international IB students in different time zones. Sessions run live with interactive whiteboards, real-time mark scheme annotation, and session recordings so students can review the lesson later."
          }
        },
        {
          "@type": "Question",
          "name": "How Early Should Students Start IB Tuition In Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most students benefit from starting IB tuition in Dubai at MYP Year 4 (Grade 9) or the start of DP Year 1 (Grade 11). MYP Year 4 assists in the process of subject selection and facilitates learning based on rubrics. DP Year 1 prevents the second-term IA workload pile-up. Students switching curricula often start earlier."
          }
        },
        {
          "@type": "Question",
          "name": "How Many IB Coaching Sessions Per Week Does A Student Usually Need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most IB students benefit from 1 to 2 sessions per week per weak subject during the regular term. Closer to mock exams or the May or November sittings, students often increase to 3 sessions per week or add intensive revision blocks. Frequency is reviewed every few weeks based on the student's pace."
          }
        },
        {
          "@type": "Question",
          "name": "Are Ignite's IB Classes Suitable For Students Transferring Mid-Year Or Switching From CBSE, IGCSE, Or A-Levels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Mid-year transfers and curriculum-switch students are common at Ignite, especially from CBSE, ICSE, IGCSE, and A-Level backgrounds. We run a diagnostic in the first session to map gaps against the IB syllabus, then build an accelerated catch-up plan that prioritises the highest-weight topics and IB-specific skills like criterion-based assessment."
          }
        },
        {
          "@type": "Question",
          "name": "What Should Parents Look For When Hiring An IB Tutor In Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for subject and level match (Maths AA HL is different from AI SL), genuine IB curriculum knowledge, transparent progress reporting, and a teaching style your child responds to. Ask whether the tutor has taught your child's exact subject and level before. A free demo class helps confirm fit before committing."
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
          "name": "IB Tutors In Dubai",
          "item": "https://ignitetraininginstitute.com/ib-curriculum-tutors-in-dubai"
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
      "@id": "https://ignitetraininginstitute.com/ib-curriculum-tutors-in-dubai",
      "name": "IB Tutoring in Dubai",
      "description": "Expert IB tutoring in Dubai across all IB subjects at HL and SL. Personalised support for Grade 8 to 12 students preparing for IBDP and MYP, delivered online and in-person in DIFC and JLT.",
      "url": "https://ignitetraininginstitute.com/ib-curriculum-tutors-in-dubai",
      "image": "https://ignitetraininginstitute.com/assets/ibc_bg_main.webp",
      "educationalLevel": "Grade 8 to Grade 12",
      "educationalCredentialAwarded": "International Baccalaureate (IBDP / MYP)",
      "inLanguage": "en",
      "teaches": [
        "IB Physics (HL and SL)",
        "IB Chemistry (HL and SL)",
        "IB Biology (HL and SL)",
        "IB Computer Science (HL and SL)",
        "IB Economics (HL and SL)",
        "IB Mathematics Analysis and Approaches (AA)",
        "IB Mathematics Applications and Interpretations (AI)",
        "IB English Language and Literature",
        "IB French Ab Initio and B",
        "IB Business Management",
        "IB Spanish",
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
        "audienceType": "Grade 8 to Grade 12 IB students"
      },
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "name": "IBDP Tutoring",
          "description": "Tailored guidance, curated resources, and exam-focused strategies that help students master all 6 IBDP subject groups, including support for IAs, EEs, and TOK.",
          "courseMode": ["Onsite", "Online"]
        },
        {
          "@type": "CourseInstance",
          "name": "MYP Tutoring",
          "description": "Focused support that helps MYP students build a strong subject foundation, apply concepts to real-world contexts, and prepare for e-assessments.",
          "courseMode": ["Onsite", "Online"]
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "81",
        "reviewCount": "12"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Zeynep Inan" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          "reviewBody": "I have been taking lessons at Ignite Training Institute for around three years. I have taken lessons for IGCSE science and math which has helped me achieve top grades. I have also taken lessons for IB math, biology, and Spanish. With the help of my trainers, I was able to achieve a good predicted and final exam grade which allowed me get offers from top universities in the UK such as UCL and University of Edinburgh.",
          "publisher": { "@type": "Organization", "name": "Google" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Hassan Ali" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          "reviewBody": "This is the best tuition center in Dubai. Went from getting 5-6s in the start of my Gcses to getting 8-9s in my actual gcse exams. This place helped me a lot and has very good tutors as well.",
          "publisher": { "@type": "Organization", "name": "Google" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Sushma Menon" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          "reviewBody": "I was referred to Ignite by a family member who had previously used their services and was highly satisfied. From the start, the coordinator, Mr. Ahzeb, demonstrated exceptional professionalism in his interactions with both parents and students.My daughter was initially struggling with economics, but under the guidance of Miss Harsha, the subject became much more approachable and understandable. Her teaching style made a significant difference in my daughter’s confidence and performance.I would highly recommend this institute to anyone seeking additional academic support. Their dedication and quality of tutoring truly stand out, and I’m confident others will have a similarly positive experience.I would like to wish the team the very best of luck and I hope they will offer their services to many more countries within the Middle East in the future .",
          "publisher": { "@type": "Organization", "name": "Google" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Ben Dunatov" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          "reviewBody": "Great tutoring service! Perfect for struggling GCSE students.",
          "publisher": { "@type": "Organization", "name": "Google" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Rosie Seldon" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          "reviewBody": "The trainers were flexible and were able to help in difficult subjects like Physics. My son scored a 100/100 on one of his maths papers after working with the tutors. Great work",
          "publisher": { "@type": "Organization", "name": "Google" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Riyad Bouarissa" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          "reviewBody": "The business teacher deserves special recognition for outstanding instruction and genuine concern for my success. The sessions imparted comprehensive knowledge and equipped me with essential skills for my exams. Without such exceptional teaching, the overall value of the institute would have been compromised. While the management and other aspects of the institute are satisfactory, it is the teaching that truly made a significant impact on my learning experience.",
          "publisher": { "@type": "Organization", "name": "Google" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Shivam Bakhda" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          "reviewBody": "The institute has always been extremely helpful and has enabled me to take A level Economics outside of school and still excel by already achieving 2 A's in the first two AS papers and now aiming for A*'s in P3 and P4. Additionally, I am also able to improve my Business Studies skills.",
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
          "reviewBody": "It's a very good support institute where special attention is given to each student. My son has been going here for the last 2 years (O & AS Levels) to take support in Maths & Physics and has been very happy and comfortable. All tutors have been a big support as well to my son.",
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

  // ----------------------------------------------------
  // 👇 EXISTING COMPONENT LOGIC (Locomotive Scroll)
  // ----------------------------------------------------


  return (
    <>
      <SEO
                loadInnerStyles={true}
        title="IB Tutors In Dubai For Exam Success I IB Coaching In UAE"
        description="Get dedicated learning support for IB coaching in Dubai. Our expert IB tutors in the UAE are equipped with the right approach, strategies & resources"
        url="https://ignitetraininginstitute.com/ib-curriculum-tutors-in-dubai"
        preloadImages={[
          {
            src: "/assets/ib-bg.webp",
            type: "image/webp",
            media: "(max-width: 768px)"
          },
          {
            src: "/assets/ibc_bg_main.webp",
            type: "image/webp",
            media: "(min-width: 769px)"
          }
        ]}
      />
      <Head>
<link rel="stylesheet" href="/styles/Ibdp.css" />
      </Head>
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      {/* The JsonLd component will correctly stringify and inject this valid JSON-LD array */}
      <JsonLd schema={ibcSchema} />

      {/* 3. APPLY the style for paddingTop to the scroll container */}
      <div

        className='overflow-hidden innerpage page-content-padding'

      >
        <section className="hero-section">
          <div className="hero-container">
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/ib-bg.webp" />
              <img
                src="/assets/ibc_bg_main.webp"
                alt="IB Curriculum Tutors"
                className="hero-img"
                fetchPriority="high"
                width="1200"
                height="800"
                style={{ opacity: 1, visibility: 'visible' }}
              />
            </picture>
            <div className="row g-0 h-100">
              <InfoCardLeft {...subjectPages.ibc} />
              <InfoCardForm formConfig={subjectFormConfigs.ibc} />
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
            <IBCurriculumStages />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <SubjectsCard />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <MarqueeBanner />
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

        <LazySection>
          <WhatWeOfferSection />
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <IgniteAchievements />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <UspsSection />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <FAQSection {...faqSections.ibc} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Blog />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <Accordion {...accordionSections.ibc} />
          </section>
        </LazySection>
      </div>
    </>
  );
};

export default IBC;