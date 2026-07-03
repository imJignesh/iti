import { ourApproachConfigs } from "@/data/ourApproachConfig";
import OurApproach from "@/components/shared/OurApproach";
import React from 'react';
import Head from 'next/head';
import LazySection from '@/components/LazySection';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
import Accordion from '@/components/ap/accrodian';
import Blog from "@/components/ap/Blog";
import APBenefits from '@/components/ap/chooseApp';
import CourseCard from '@/components/ap/CourseCard';
import FAQSection from '@/components/ap/FaqSection';
import IgniteAchievements from '@/components/ap/IgniteAchievements';
import InfoCard from '@/components/ap/InfoCard';
import Trainers from "@/components/ap/Trainers";
import WhatWeOfferSection from '@/components/ap/WhatWeOfferSection';
import LifeAtIgniteCarousel from '@/components/ap/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/ap/MarqueeBanner';
import ReviewsSection from '@/components/ap/ReviewsSection';
import StudentAchievements from '@/components/ap/StudentAchivement';
import SubjectsCard1 from '@/components/ap/SubjectCard1';
import UspsSection from '@/components/ap/UspsSection';

// 1. ACCEPT the headerHeight prop
const ap = ({ headerHeight }) => {

  // ----------------------------------------------------
  // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  const apSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What Are The Major Changes In The 2026 AP Exams For Students In Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most 2026 AP exams are now delivered through the Bluebook testing app, with 16 subjects fully digital and 12 in hybrid format (digital multiple-choice, paper free-response). Calculator-permitted exams use a built-in Desmos calculator inside Bluebook. AP English Language and Literature multiple-choice questions have moved from 5 answer choices to 4, matching other AP subjects. AP Biology and AP Computer Science A have updated frameworks for 2025-26. Exam content and the 1 to 5 scoring scale remain unchanged."
          }
        },
        {
          "@type": "Question",
          "name": "How Many AP Subjects Should A Student Take In Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most US universities expect 4 to 8 AP exams over a high school career, with highly selective universities looking for 8 plus across diverse subject areas. For Dubai students, the practical sweet spot is 3 to 5 APs concentrated in subjects aligned with the intended university major, taken alongside IB or A-Level coursework. Quality matters more than quantity: scoring 4 or 5 in 4 well-chosen APs is more useful than scattered 3s across 8. Our how many AP classes to take guide walks through the decision."
          }
        },
        {
          "@type": "Question",
          "name": "What Is A Realistic AP Score Improvement With Tutoring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A realistic range with structured AP tutoring is 1 to 2 score points on the 1 to 5 scale, depending on starting point and subject. Students starting at a 2 or 3 typically see the largest gains because foundational gaps close quickly. Students starting at 4 and aiming for 5 see slower gains because each mark requires near-perfect FRQ technique. Ignite does not guarantee specific scores since outcomes depend on student effort and consistency, but every student gets a structured plan designed for their personal target."
          }
        },
        {
          "@type": "Question",
          "name": "When Do AP Exams Take Place And When Should AP Prep Start In Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AP exams run over two weeks in May each year. The 2026 window is May 4 to May 15, with a late-testing period of May 18 to May 22 for approved scheduling conflicts. AP preparation is most effective when it begins in August or September of the same academic year, giving 8 to 9 months of structured coaching. Students who join later can still benefit from an intensive 3 to 4 month programme between January and April, particularly if their school has already covered most of the syllabus."
          }
        },
        {
          "@type": "Question",
          "name": "What’s The Difference Between Fully Digital And Hybrid AP Exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fully digital AP exams complete both multiple-choice and free-response sections inside the Bluebook app on a school-managed device, with responses submitted automatically. Hybrid digital exams use Bluebook for multiple-choice but require handwritten free-response answers in a paper booklet collected at the end. Hybrid is used for subjects needing equations, graphs, or chemical structures, including AP Calculus AB and BC, AP Chemistry, AP Physics 1, 2, and C, AP Biology, and AP Statistics. Fully digital covers AP English Language and Literature, AP Psychology, AP Macroeconomics and Microeconomics, and AP Computer Science Principles."
          }
        },
        {
          "@type": "Question",
          "name": "Can AP Tutoring Run Alongside IB Or A-Level Coursework In Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, and a significant share of Ignite’s AP students are doing exactly that. AP exam dates in early May overlap with both IBDP exams and A-Level papers, so prep load needs careful sequencing. Students typically commit 2 to 3 hours per week to AP coaching during the main year, rising in the final 6 to 8 weeks. Skill overlap helps: A-Level Maths supports AP Calculus, IB HL Sciences map onto AP Physics, Chemistry, and Biology, and IB English needs minimal extra prep for AP English. Our IB vs AP comparison covers how the pathways interact."
          }
        },
        {
          "@type": "Question",
          "name": "How Much Does AP Tutoring Cost In Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AP tutoring costs in Dubai vary based on session format, hours per week, and number of subjects. Group AP programmes spread tutor cost across a small cohort and tend to be more affordable per hour. One-on-one tutoring is priced higher because the tutor is dedicated to a single student. Most reputable AP institutes work on package pricing aligned with the August to May academic year rather than open-ended hourly billing, which makes the total cost easier to plan for. Specific pricing is shared during the free demo call."
          }
        },
        {
          "@type": "Question",
          "name": "Are AP Scores Useful For UK And UAE Universities Or Only US Colleges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AP scores are useful well beyond US universities. Cambridge and Oxford both accept APs from international applicants, typically requesting 5 plus scores at 5 alongside other qualifications, per Cambridge’s international entry requirements. Many Russell Group universities accept APs as a primary qualification for non-A-Level applicants. In the UAE, the standard pathway remains high school grades plus IELTS or TOEFL, with APs supporting select branch campuses. APs strengthen US applications most directly and can earn college credit."
          }
        },
        {
          "@type": "Question",
          "name": "Where In Dubai Does Ignite Run AP Classes, DIFC, JLT, Or Online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignite Training Institute runs AP classes at two centres in Dubai. The DIFC location at Al Moosa Tower 1 on Sheikh Zayed Road is convenient for students near Emirates Towers Metro and Downtown. The JLT location at Tiffany Tower in Cluster W serves students from Dubai Marina, JBR, and the Greens. Both centres run the same programmes with the same tutor team. Live online AP classes are also available for students across the UAE, using shared digital whiteboards and the same diagnostic and mock exam workflow as in-person sessions."
          }
        },
        {
          "@type": "Question",
          "name": "Are AP Exams Accepted In The UAE And By Top Dubai Schools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AP exams are administered at several authorised schools across Dubai. American-curriculum institutions including Dubai American Academy, GEMS Wellington Academy, American School of Dubai, Universal American School, and Dubai International Academy offer AP courses and exam administration. Some IB and British-curriculum schools also support students taking APs independently. Students at schools that do not offer APs can register as external candidates through participating schools. The UAE Ministry of Education does not require APs for local university entry, but they strengthen applications to US and selective UK universities, including Cambridge and Oxford."
          }
        },
        {
          "@type": "Question",
          "name": "Which AP Subjects Are The Most Popular Among Dubai Students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most commonly taken AP subjects among Dubai students are AP Calculus AB and BC, AP Chemistry, AP Physics 1 and 2, AP Biology, AP Statistics, AP Computer Science A and Principles, AP Macroeconomics and Microeconomics, AP Psychology, and AP English Language and Literature. STEM-heavy combinations dominate because most Dubai AP students target US universities for engineering, computer science, business, or pre-med. Language APs (French, Spanish) are popular among heritage speakers."
          }
        },
        {
          "@type": "Question",
          "name": "How Do I Start AP Tutoring At Ignite Training Institute?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The starting point is a free AP demo class. The demo runs through a short diagnostic, a conversation about target AP subjects and score goals, and a walkthrough of how a personalised plan would look across the August to May programme. Parents are welcome to join, and there is no obligation afterwards. To book, request a demo through the website or speak to an academic advisor directly."
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
          "name": "Advanced Placements Tutors In Dubai",
          "item": "https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai"
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
      "@id": "https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai",
      "name": "Advanced Placement (AP) Tutoring in Dubai",
      "description": "Expert AP tutoring in Dubai for Grade 11 and Grade 12 students preparing for College Board Advanced Placement exams. Programs cover Calculus, Physics, Chemistry, Biology, English, Economics, and more, with diagnostic testing, mock exams, and personalised feedback to support college credit success.",
      "url": "https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai",
      "image": "https://ignitetraininginstitute.com/assets/ap_bg_main.webp",
      "educationalLevel": "Pre-University (Grade 11 and Grade 12)",
      "educationalCredentialAwarded": "Advanced Placement (AP) Exam Scores and College Credit",
      "inLanguage": "en",
      "teaches": [
        "AP Environmental Science",
        "AP Macroeconomics",
        "AP Microeconomics",
        "AP Psychology",
        "AP English Language and Composition",
        "AP French Language and Culture",
        "AP Spanish Language and Culture",
        "AP Calculus AB",
        "AP Calculus BC",
        "AP Statistics",
        "AP Computer Science A",
        "AP Computer Science Principles",
        "AP Physics 1 and 2: Algebra-Based",
        "AP Physics C: Electricity and Magnetism",
        "AP Physics C: Mechanics",
        "AP Chemistry",
        "AP Biology"
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
        "audienceType": "Grade 11 and Grade 12 students preparing for AP exams"
      },
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "name": "AP Full Syllabus Preparation In Groups",
          "description": "A 9-month program from August to May with 70+ hours of in-depth training per chosen subject. Weekly structured classes aligned with the academic calendar, in-house resources, mock exam series, and personalised feedback. Ideal for students pursuing AP courses in school.",
          "courseMode": ["Blended", "Onsite", "Online"]
        },
        {
          "@type": "CourseInstance",
          "name": "One-On-One Tutoring For Advanced Placements",
          "description": "Year-round AP-focused course built around each student's academic goals. Starts with a diagnostic test to assess strengths and gaps, followed by a fully customised learning plan with flexible scheduling, unit tests, and mock exams.",
          "courseMode": ["Blended", "Onsite", "Online"]
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "81",
        "reviewCount": "8"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Nidhi Choudhury"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "We had a great experience with the instructor at Ignite. My child progressed amazingly under their guidance and achieved a good grade in Chemistry. Thank you so much to the Ignite team for supporting us in this!",
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
            "name": "Sara Kerr"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "Really good tutoring sessions conducted. I'm a student going there myself and I really enjoy my Economics sessions with my tutor who gives good resources and explains/condenses concepts really well. Lots of past paper practice and very good at essay planning as well. Overall, I really enjoy the sessions I've been receiving here.",
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
          "reviewBody": "I was referred to Ignite by a family member who had previously used their services and was highly satisfied. From the start, the coordinator demonstrated exceptional professionalism in interactions with both parents and students. My daughter was initially struggling with economics, but under the guidance of the tutor, the subject became much more approachable and understandable. Their teaching style made a significant difference in my daughter’s confidence and performance. I would highly recommend this institute to anyone seeking additional academic support. Their dedication and quality of tutoring truly stand out, and I’m confident others will have a similarly positive experience. I would like to wish the team the very best of luck and I hope they will offer their services to many more countries within the Middle East in the future.",
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
            "name": "Shweta Monga"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "They were happy to help regardless of my location. They also promptly responded to my request and set up a meeting on a short notice. It speaks a lot about their work ethics and I found them to be a credible institute.",
          "publisher": {
            "@type": "Organization",
            "name": "Google"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Alizah"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "Been here for 3 years it was an amazing journey to be on academically and socially. Amazing vibe with the teachers.",
          "publisher": {
            "@type": "Organization",
            "name": "Google"
          }
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
        title="AP Tutors In Dubai | Best AP Prep Classes In UAE"
        description="Experience result-driven AP tutoring with programs tailored to match each student’s learning needs. Get practice tests, tailored strategies, & resources"
        url="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai"
      />
      <Head>
<link
          rel="preload"
          href="/assets/homeschooling-bg.webp"
          as="image"
          type="image/webp"
          media="(max-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/assets/ap_bg_main.webp"
          as="image"
          type="image/webp"
          media="(min-width: 769px)"
          fetchPriority="high"
        />
      </Head>
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={apSchema} />

      {/* 3. APPLY the style for paddingTop to the scroll container */}
      <div
        className='overflow-hidden innerpage page-content-padding'
      >
        <section data-scroll-section className="hero-section">
          <div className="hero-container">
            {/* LCP Image moved here for immediate painting (SSR) */}
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/homeschooling-bg.webp" />
              <img
                src="/assets/ap_bg_main.webp"
                alt="Advanced Placements Background"
                fetchPriority="high"
                width="1200"
                height="800"
                className="hero-img"
                style={{ opacity: 1, visibility: 'visible' }}
              />
            </picture>

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
            @media (max-width: 1100px) {
              .hero-container {
                max-width: 95vw;
              }
            }
          `}</style>
        </section>

        <LazySection>
          <section data-scroll-section>
            <OurApproach config={ourApproachConfigs.ap} />
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

        {/* <section data-scroll-section>
            <SubjectsCard />
          </section> */}
        <LazySection>
          <section data-scroll-section>
            <SubjectsCard1 />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <APBenefits />
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

export default ap;