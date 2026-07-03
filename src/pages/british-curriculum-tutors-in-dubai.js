import { ourApproachConfigs } from "@/data/ourApproachConfig";
import OurApproach from "@/components/shared/OurApproach";
import React from 'react';
import Head from "next/head";
import dynamic from 'next/dynamic';
import LazySection from "@/components/LazySection";
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
import InfoCard from "@/components/bc/InfoCard";

const Accordion = dynamic(() => import('@/components/bc/accordian'));
const Blog = dynamic(() => import("@/components/bc/Blog"));
const IBCurriculumStages = dynamic(() => import('@/components/bc/Curriculum.jsx'));
const FAQSection = dynamic(() => import('@/components/bc/FaqSection'));
const IgniteAchievements = dynamic(() => import('@/components/bc/IgniteAchievements'));
const Trainers = dynamic(() => import("@/components/bc/Trainers"));
const WhatWeOfferSection = dynamic(() => import('@/components/bc/WhatWeOfferSection'));
const MarqueeBanner = dynamic(() => import('@/components/bc/MarqueeBanner'));
const ReviewsSection = dynamic(() => import('@/components/bc/ReviewsSection'));
const SubjectsCard = dynamic(() => import('@/components/bc/SubjectCard'));
const UniImagesCard = dynamic(() => import('@/components/bc/universityCrad'));
const UspsSection = dynamic(() => import('@/components/bc/UspsSection'));



// 1. ACCEPT the headerHeight prop
const BC = ({ headerHeight }) => {


  // ----------------------------------------------------
  // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  const bcSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which Levels And Year Groups Does Ignite's British Curriculum Tutoring Cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignite covers Year 8 to Year 13 across the British Curriculum, including Key Stage 3 (Year 8 and Year 9), IGCSE and GCSE (Year 10 and Year 11), and AS and A-Level (Year 12 and Year 13). Subject support spans core academic subjects and the wider option-subject range across all three exam boards."
          }
        },
        {
          "@type": "Question",
          "name": "Does Ignite Tutor For All Three British Exam Boards (CAIE, Edexcel, Oxford AQA)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Ignite's British Curriculum tutoring covers Cambridge Assessment International Education (CAIE), Pearson Edexcel, and Oxford International AQA. Tutors are matched to the student's specific board for each subject, with past paper practice and mark-scheme work tailored to that board's exact specification and grading."
          }
        },
        {
          "@type": "Question",
          "name": "Is Ignite's British Curriculum Tutoring Available Online And In Person?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Both formats are available across Year 8 to Year 13. In-person sessions run from our DIFC and JLT centres in Dubai. Online sessions run live with interactive whiteboards, real-time mark-scheme annotation, and recordings for review. Many students switch between formats depending on the subject and the week."
          }
        },
        {
          "@type": "Question",
          "name": "Can Students Try A Free Demo Class Before Enrolling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every new student is offered a free demo class with a matched British Curriculum tutor before any enrolment commitment. The demo lets the student assess teaching style, ask exam-board-specific questions, and see how a real session runs. Parents typically use it to confirm fit before discussing a regular schedule."
          }
        },
        {
          "@type": "Question",
          "name": "How Are Ignite's British Curriculum Sessions Personalised, And How Is Progress Tracked?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every new student starts with a diagnostic in their weak subject. The tutor maps current performance against the specific exam board's mark scheme, identifies the topic strands holding the grade back, and builds a lesson plan around closing those gaps. Progress is reviewed every few weeks through unit tests, mock papers, and termly reports."
          }
        },
        {
          "@type": "Question",
          "name": "Do Ignite's Tutors Cover Both IGCSE/GCSE And A-Level Within The Same Programme?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The same British Curriculum framework runs from Year 10 IGCSE through to Year 13 A-Level, and Ignite's tutors are matched to the level the student is sitting. Tutors often work with the same subject tutor through both stages, which keeps continuity across IGCSE, AS, and A2."
          }
        },
        {
          "@type": "Question",
          "name": "When Should Students Start British Curriculum Tutoring In Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most students benefit from starting in Year 9 to build foundations before IGCSE begins, or in early Year 10 once the IGCSE syllabus is set. Year 12 students benefit from starting at the beginning of AS to build technique before predicted grades land. Year 8 students can start earlier if foundation gaps are present."
          }
        },
        {
          "@type": "Question",
          "name": "Is Ignite Suitable For Students From British International Schools In Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Ignite's tutors regularly work with students from British international schools across Dubai, including those following CAIE, Edexcel, and Oxford AQA. Lessons align with the school's pacing and specification rather than running a parallel curriculum, and tutors track the unit the student is currently studying at school."
          }
        },
        {
          "@type": "Question",
          "name": "Does Ignite Offer Year 9, Year 10, Year 11, Year 12, And Year 13 Tutoring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Ignite offers tutoring across all five secondary year groups. Year 9 tutoring focuses on KS3 consolidation and IGCSE option-subject preparation. Year 10 and Year 11 cover the IGCSE/GCSE syllabus and exam prep. Year 12 and Year 13 cover AS and A-Level, with predicted-grade work in the autumn of Year 13 for UCAS applications."
          }
        },
        {
          "@type": "Question",
          "name": "What Should Parents Look For When Hiring A British Curriculum Tutor In Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for exam-board-specific knowledge (CAIE Maths is structured differently from Edexcel), genuine subject and year-level match, transparent progress tracking against mark schemes, and a teaching style your child responds to. Ask whether the tutor has taught your child's exact board and year before. A free demo class confirms fit."
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
          "name": "British Curriculum Tutors in Dubai",
          "item": "https://ignitetraininginstitute.com/british-curriculum-tutors-in-dubai"
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
      "@id": "https://ignitetraininginstitute.com/british-curriculum-tutors-in-dubai",
      "name": "British Curriculum Tutoring in Dubai",
      "description": "Expert British curriculum tutoring in Dubai for IGCSE, GCSE, AS, and A-Level students from Year 8 to Year 13. Subject-specialist support aligned to Edexcel, Cambridge (CAIE), and Oxford International AQA, delivered online and in-person in DIFC and JLT.",
      "url": "https://ignitetraininginstitute.com/british-curriculum-tutors-in-dubai",
      "image": "https://ignitetraininginstitute.com/assets/bc_bg_main.webp",
      "educationalLevel": "Year 8 to Year 13",
      "educationalCredentialAwarded": "IGCSE / GCSE and AS / A-Level Qualification",
      "inLanguage": "en",
      "teaches": [
        "Mathematics (Core and Extended)",
        "Further Mathematics",
        "Statistics",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer Science and ICT",
        "IGCSE/GCSE Double Award Science",
        "Combined Science",
        "Environmental Management (EVM)",
        "Business Studies",
        "Economics",
        "Accounting",
        "English Language",
        "English Literature",
        "French",
        "Spanish"
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
        "audienceType": "Year 8 to Year 13 British curriculum students (IGCSE, GCSE, AS, A-Level)"
      },
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "name": "British Curriculum Tutoring For IGCSE",
          "description": "Tailored support, curated resources, and exam-focused strategies to help IGCSE students excel across subjects and boards including CAIE, Edexcel, and Oxford AQA.",
          "courseMode": ["Onsite", "Online"]
        },
        {
          "@type": "CourseInstance",
          "name": "British Curriculum Tutoring For A Levels",
          "description": "Subject-specialist A-Level tutoring with expert guidance, personalised strategies, and rigorous academic support to help students boost grades, build confidence, and secure top university placements.",
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
          "reviewBody": "I have taken lessons for IGCSE science and math which has helped me achieve top grades. With the help of my trainers, I was able to get offers from top universities in the UK such as UCL and University of Edinburgh.",
          "publisher": { "@type": "Organization", "name": "Google" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Hassan Ali" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          "reviewBody": "This is the best tuition center in Dubai. Went from getting 5-6s in the start of my GCSEs to getting 8-9s in my actual GCSE exams. This place helped me a lot and has very good tutors as well.",
          "publisher": { "@type": "Organization", "name": "Google" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Sushma Menon" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          "reviewBody": "My daughter was initially struggling with economics, but under the guidance of Miss Harsha, the subject became much more approachable and understandable. Their dedication and quality of tutoring truly stand out.",
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
          "reviewBody": "The trainers were flexible and were able to help in difficult subjects like Physics. My son scored a 100/100 on one of his maths papers after working with the tutors. Great work.",
          "publisher": { "@type": "Organization", "name": "Google" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Riyad Bouarissa" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
          "reviewBody": "The business teacher deserves special recognition for outstanding instruction and genuine concern for my success. The sessions imparted comprehensive knowledge and equipped me with essential skills for my exams.",
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
  // 👆 END OF SCHEMA DEFINITION
  // ----------------------------------------------------

  return (
    <>
      <SEO
                loadInnerStyles={true}
        title="British Curriculum Tutors For IGCSE/GCSE & AS & A-Levels"
        description="Seek full guidance for the British Curriculum in the UAE. Learn from expert A-Level & IGCSE tutors to strengthen academics & boost performance"
        url="https://ignitetraininginstitute.com/british-curriculum-tutors-in-dubai"
        preloadImages={[
          {
            src: "/assets/alevel.webp",
            type: "image/webp",
            media: "(max-width: 768px)"
          },
          {
            src: "/assets/bc_bg_main.webp",
            type: "image/webp",
            media: "(min-width: 769px)"
          }
        ]}
      />

      {/* Inject SEO Schema */}
      <JsonLd schema={bcSchema} />

      {/* LCP Optimization: Lifted Image and removed data-scroll-container */}
      <div className='overflow-hidden innerpage page-content-padding'>
        <section className="hero-section">
          <div className="hero-container">
            {/* LCP Image moved here for immediate painting (SSR) - No hydration check here */}
            <div className="hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
              <picture>
                {/* Mobile Source - using optimized 15K image */}
                <source media="(max-width: 768px)" srcSet="/assets/alevel.webp" />
                {/* Desktop Source / Fallback */}
                <img
                  src="/assets/bc_bg_main.webp"
                  alt="British Curriculum Tutors Background"
                  fetchPriority="high"
                  style={{
                    width: '100%',
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: 'block',
                    opacity: 1, 
                    visibility: 'visible'
                  }}
                />
              </picture>
            </div>

            <InfoCard />
          </div>

          <style jsx>{`
  .hero-container {
  position: relative;
  max-width: 90vw;
  margin-inline: auto;
  margin-block: 0;
  min-height: 750px;
  border-radius: 1.5rem;
  overflow: hidden;
  isolation: isolate;
}
            .hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
            .hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
@media(max-width: 1100px) {
              .hero-container {
    max-width: 95vw;
  }
}
`}</style>
        </section>

        <LazySection>
          <section data-scroll-section>
            <OurApproach config={ourApproachConfigs.bc} />
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
            <UspsSection />
          </section>
        </LazySection>

        {/* <section data-scroll-section>
            <LifeAtIgniteCarousel />
          </section> */}

        <LazySection>
          <section data-scroll-section>
            <FAQSection />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Blog />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <Accordion />
          </section>
        </LazySection>
      </div>
    </>
  );
};

export default BC;