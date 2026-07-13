import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
import LazySection from "@/components/LazySection";
import dynamic from 'next/dynamic';

const Accordion = dynamic(() => import('@/components/shared/Accordion'));
import { accordionSections } from '@/data/accordionSections';
const Blog = dynamic(() => import('@/components/igcse/Blog'));
const CourseCard = dynamic(() => import('@/components/igcse/CourseCard'));
const FAQSection = dynamic(() => import('@/components/shared/FaqSection'));
import { faqSections } from '@/data/faqSections';
const IgniteAchievements = dynamic(() => import('@/components/igcse/IgniteAchievements'));
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
const IgniteAboutCard = dynamic(() => import('@/components/igcse/IgniteAboutCard'));
const Trainers = dynamic(() => import('@/components/igcse/Trainers'));
const WhatWeOfferSection = dynamic(() => import('@/components/igcse/WhatWeOfferSection'));
const MarqueeBanner = dynamic(() => import('@/components/igcse/MarqueeBanner'));
const ReviewsSection = dynamic(() => import('@/components/igcse/ReviewsSection'));
const SubjectsCard = dynamic(() => import('@/components/igcse/SubjectCard'));
const UspsSection = dynamic(() => import('@/components/igcse/UspsSection'));
const UniImagesCard = dynamic(() => import('@/components/igcse/universityCrad'));


// 1. ACCEPT the headerHeight prop
const igcseSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which IGCSE Subjects Does Ignite Tutor For In Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ignite covers IGCSE Maths (Core and Extended), Further Maths, Statistics, Physics, Chemistry, Biology, Computer Science and ICT, Double Award Science, Economics, Business Studies, Accounting, English Language, English Literature, French, Spanish, and Psychology. GCSE equivalents are also supported. Each subject is matched to the student's specific board across CAIE, Pearson Edexcel, or Oxford AQA."
        }
      },
      {
        "@type": "Question",
        "name": "Which Exam Boards Does Ignite Cover (Edexcel, CAIE, Oxford AQA)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ignite tutors across all three IGCSE exam boards: Cambridge International (CAIE), Pearson Edexcel International, and Oxford International AQA. Tutors are matched to the student's specific board for each subject, with past paper practice, mark-scheme work, and unit-wise worksheets tailored to that board's exact syllabus code and specification."
        }
      },
      {
        "@type": "Question",
        "name": "Does Ignite Offer Both One-On-One And Small Group IGCSE Tutoring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Bespoke One-to-One Tutoring runs year-round for students who need individualised pacing across Years 8 to 10. Small Group programmes (3 to 6 students) include the IGCSE Year 10 Group and the IGCSE Finals Prep Group for Year 11 students writing May/June finals, with a structured 10-month syllabus coverage."
        }
      },
      {
        "@type": "Question",
        "name": "How Does Ignite Prepare Students For IGCSE Exams And Past Papers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sessions work through past papers across Edexcel, CAIE, and Oxford AQA based on the student's specific board. Each question is mapped to the official mark scheme, command terms are decoded, and students sit timed mock papers under exam conditions. Detailed paper review sessions follow each mock so students see exactly where marks were lost."
        }
      },
      {
        "@type": "Question",
        "name": "Can Students Try A Free Demo Class Before Enrolling In IGCSE Tuition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every new student is offered a free demo class with the matched IGCSE tutor before any enrolment commitment. The demo lets the student assess teaching style, ask exam-board-specific questions, and see how a real session runs. Parents typically use it to confirm fit before discussing a regular schedule."
        }
      },
      {
        "@type": "Question",
        "name": "When Should Students Start IGCSE Tutoring In Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Year 9 students benefit from starting at the IGCSE option-choice point. Year 10 students ideally start in September at the beginning of the two-year syllabus, the most common entry point at Ignite. Year 11 students benefit from starting after autumn mocks. Year 8 students with curriculum-switch gaps should start earlier."
        }
      },
      {
        "@type": "Question",
        "name": "Are Online IGCSE Classes Available In Dubai And Abu Dhabi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Online IGCSE classes are available across Years 8 to 11 for students in Dubai, Abu Dhabi, Sharjah, Ajman, and the wider UAE. Sessions run live with interactive whiteboards, real-time mark-scheme annotation, and recordings for review. Year 11 students particularly benefit from online learning to save commute time during the heaviest workload year."
        }
      },
      {
        "@type": "Question",
        "name": "Do Ignite's IGCSE Tutors Help With Coursework And Practical Assessments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Tutors guide students through IGCSE Sciences practical assessments (Paper 6 for CAIE), coursework components in subjects like English and Languages, and project-based assessments. Work is structured against the official mark scheme to align with exam board criteria while building genuine subject understanding rather than surface compliance."
        }
      },
      {
        "@type": "Question",
        "name": "How Many IGCSE Coaching Sessions Per Week Does A Student Usually Need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most IGCSE students benefit from 1 to 2 sessions per week per weak subject during the regular term. Year 11 students often increase to 2 to 3 sessions per week closer to mocks or May/June finals, with added past paper blocks. Frequency is reviewed every few weeks based on the student's pace."
        }
      },
      {
        "@type": "Question",
        "name": "What Should Parents Look For When Hiring An IGCSE Tutor In Dubai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for exam-board-specific knowledge (CAIE 0580 Maths is structured differently from Edexcel 4MA1), genuine subject and year-level match, transparent progress tracking against mark schemes, and a teaching style your child responds to. Ask whether the tutor has taught your child's exact board before. A free demo class confirms fit."
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
        "name": "IGCSE Tutors In Dubai",
        "item": "https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai"
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
    "@id": "https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai",
    "name": "IGCSE Tutoring in Dubai",
    "description": "Expert IGCSE tutoring in Dubai across core and extended curriculum subjects. Personalised mentorship for Year 10 and Year 11 students preparing for Edexcel, Cambridge (CAIE), and Oxford AQA examinations.",
    "url": "https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai",
    "image": "https://ignitetraininginstitute.com/assets/igcse.webp",
    "educationalLevel": "Secondary Education (Year 10 and Year 11)",
    "educationalCredentialAwarded": "IGCSE / GCSE Qualification",
    "inLanguage": "en",
    "teaches": [
      "IGCSE Mathematics (Core and Extended)",
      "IGCSE Further Mathematics",
      "IGCSE Statistics",
      "IGCSE Physics",
      "IGCSE Chemistry",
      "IGCSE Biology",
      "IGCSE Double Award Science",
      "IGCSE Computer Science and ICT",
      "IGCSE Economics",
      "IGCSE Business Studies",
      "IGCSE Accounting",
      "IGCSE English Language",
      "IGCSE English Literature",
      "IGCSE French",
      "IGCSE Spanish",
      "IGCSE Psychology"
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
      "audienceType": "Year 10 and Year 11 IGCSE students"
    },
    "hasCourseInstance": [
      {
        "@type": "CourseInstance",
        "name": "IGCSE / GCSE Finals Prep In Groups",
        "description": "A 10-month program from September to June with 80+ hours of expert-led tutoring for Year 11 students writing finals in May.",
        "courseMode": ["Blended", "Onsite", "Online"]
      },
      {
        "@type": "CourseInstance",
        "name": "Bespoke One-To-One IGCSE Tutoring",
        "description": "Year-round IGCSE tutoring built around individual learning objectives with diagnostic assessment and flexible scheduling.",
        "courseMode": ["Blended", "Onsite", "Online"]
      },
      {
        "@type": "CourseInstance",
        "name": "IGCSE / GCSE Year 10 Groups",
        "description": "A structured 10-month program for Year 10 students with 70+ hours of focused tutoring across all IGCSE subjects.",
        "courseMode": ["Blended", "Onsite", "Online"]
      },
      {
        "@type": "CourseInstance",
        "name": "IGCSE Oct/Nov Resit Success Program",
        "description": "A couple of marks can sit between one IGCSE grade and the next, and those grades shape which sixth form and A Level paths stay open. This intensive course prepares students for the October & November IGCSE series with focused revision, heavy past-paper practice, & honest feedback on exactly where marks are slipping away, so the next result is a clear step up.",
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
          "name": "Zeynep Inan"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "I have been taking lessons at Ignite Training Institute for around three years. I have taken lessons for IGCSE science and math which has helped me achieve top grades. I have also taken lessons for IB math, biology, and Spanish. With the help of my trainers, I was able to achieve a good predicted and final exam grade which allowed me get offers from top universities in the UK such as UCL and University of Edinburgh.",
        "publisher": {
          "@type": "Organization",
          "name": "Google"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Hassan Ali"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "This is the best tuition center in Dubai. Went from getting 5-6s in the start of my GCSEs to getting 8-9s in my actual GCSE exams. This place helped me a lot and has very good tutors as well.",
        "publisher": {
          "@type": "Organization",
          "name": "Google"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sushma Menon"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "I was referred to Ignite by a family member who had previously used their services and was highly satisfied. From the start, the coordinator, Mr. Ahzeb, demonstrated exceptional professionalism in his interactions with both parents and students.My daughter was initially struggling with economics, but under the guidance of Miss Harsha, the subject became much more approachable and understandable. Her teaching style made a significant difference in my daughter’s confidence and performance.I would highly recommend this institute to anyone seeking additional academic support. Their dedication and quality of tutoring truly stand out, and I’m confident others will have a similarly positive experience.I would like to wish the team the very best of luck and I hope they will offer their services to many more countries within the Middle East in the future .",
        "publisher": {
          "@type": "Organization",
          "name": "Google"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ben Dunatov"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "Great tutoring service! Perfect for struggling GCSE students.",
        "publisher": {
          "@type": "Organization",
          "name": "Google"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rosie Seldon"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "The trainers were flexible and were able to help in difficult subjects like Physics. My son scored a 100/100 on one of his maths papers after working with the tutors. Great work.",
        "publisher": {
          "@type": "Organization",
          "name": "Google"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Riyad Bouarissa"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "The business teacher deserves special recognition for outstanding instruction and genuine concern for my success. The sessions imparted comprehensive knowledge and equipped me with essential skills for my exams. Without such exceptional teaching, the overall value of the institute would have been compromised. While the management and other aspects of the institute are satisfactory, it is the teaching that truly made a significant impact on my learning experience.",
        "publisher": {
          "@type": "Organization",
          "name": "Google"
        }
      }
    ]
  }
];

const IGCSE = ({ headerHeight }) => {




  return (
    <>
      <SEO
        loadInnerStyles={true}
        title="IGCSE Tutors In Dubai, UAE | Expert Coaching & Guidance"
        description="Achieve success with top IGCSE tutors in UAE. Get full prep support for IGCSE with syllabus coverage, past paper practice & exam strategies"
        url="https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai"
        preloadImages={[
          {
            src: "/assets/igcse.webp",
            type: "image/webp",
            media: "(max-width: 768px)"
          },
          {
            src: "/assets/igcse.webp",
            type: "image/webp",
            media: "(min-width: 769px)"
          }
        ]}
      />




      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={igcseSchema} />

      {/* 3. APPLY the style for paddingTop */}
      <div className='overflow-hidden innerpage page-content-padding'>
        <section className="hero-section">
          <div className="hero-container">
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/igcse.webp" />
              <img
                src="/assets/igcse.webp"
                alt="IGCSE Tutors Background"
                fetchPriority="high"
                width="1200"
                height="800"
                className="hero-img"
                style={{ opacity: 1, visibility: 'visible' }}
                decoding="sync"
              />
            </picture>

            <div className="row g-0 h-100">
              <InfoCardLeft
                title={subjectPages.igcse?.title || "IGCSE Tutors In Dubai, UAE For<br /> Assured Results"}
                subtitle={subjectPages.igcse?.subtitle || "Pre-Prep For Higher Education"}
                description={subjectPages.igcse?.description || "We offer expert IGCSE tutoring support through personalised mentorship across core & extended curriculum subjects. Our seasoned educators are dedicated to helping students achieve academic excellence consistently."}
                infoRow={subjectPages.igcse?.infoRow || []}
                buttons={subjectPages.igcse?.buttons || []}
              />
              <InfoCardForm formConfig={subjectFormConfigs.igcse} />
            </div>
          </div>

          <style jsx>{`
            .hero-atf-optimized {
              /* Ensure the content starts below the header immediately in SSR */
              padding-top: max(100px, 8vw); 
            }
            @media (max-width: 768px) {
              .hero-atf-optimized {
                padding-top: 80px;
              }
            }
          `}</style>
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
            <MarqueeBanner />
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
            <FAQSection {...faqSections.igcse} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Blog />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <Accordion {...accordionSections.igcse} />
          </section>
        </LazySection>
      </div>
    </>
  );
};

export default IGCSE;