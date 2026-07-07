import React from 'react';
import Head from "next/head";
import LazySection from "@/components/LazySection";
// 1. Import the reusable schema component
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/tutors-jlt-dubai/MarqueeBanner';
import ReviewsSection from '@/components/tutors-jlt-dubai/ReviewsSection';
import StudentAchievements from '@/components/tutors-jlt-dubai/StudentAchivement';
import CurriculumTestsComponent from '@/components/tutors-jlt-dubai/curriculum';
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
import OurTrainers from '@/components/tutors-jlt-dubai/ourTrainers';
import SubjectsCard1 from '@/components/tutors-jlt-dubai/SubjectCard1';
import IgniteAchievements from '@/components/tutors-jlt-dubai/igniteAchivement';
import Blog from "@/components/tutors-jlt-dubai/Blog";
import UpsSection from '@/components/tutors-jlt-dubai/UspsSection';
import Accordion from '@/components/tutors-jlt-dubai/accordian';
import FAQSection from '@/components/shared/FaqSection';
import { faqSections } from '@/data/faqSections';
import LifeAtIgniteCarousel from '@/components/tutors-jlt-dubai/LifeAtIgniteCarousel';


// 1. ACCEPT the headerHeight prop
const Tutors = ({ headerHeight }) => {
  // ----------------------------------------------------
  // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  const jltTutorsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where Can I Find The Best Tutors In JLT Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best tutors in JLT Dubai are those with direct experience of the exam board the student is sitting, not just the subject in general. At Ignite Training Institute's JLT centre, tutors specialise by board (Cambridge CAIE, Pearson Edexcel, AQA, IBO, College Board AP) and by curriculum level (IGCSE, A-Level, IB MYP, IBDP, AP). Parents should look for transparent academic outcomes, structured lesson planning, and a clear diagnostic before tutoring begins. A <a href=\"https://ignitetraininginstitute.com/join-free-demo-class\">free demo class</a> at the Ignite JLT centre is also a useful way to assess the fit before enrolling."
          }
        },
        {
          "@type": "Question",
          "name": "Do Tuition Centres In JLT Offer One-On-One And Small Group Classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Most tuition centres in JLT, including Ignite, offer both formats. One-on-one tutoring works best for students with specific weak areas, exam-board switches, or accelerated targets, because the entire session is built around their syllabus position. Small group classes work well for students who learn from peer discussion and need consistent weekly structure across a full subject. Many families combine the two: one-on-one for the weakest subject and small group for the others."
          }
        },
        {
          "@type": "Question",
          "name": "How Much Do Private Tutors In JLT Dubai Charge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Private tutor fees in JLT depend on the curriculum level, the subject, and the format (one-on-one vs small group, in-centre vs online). IGCSE and IB MYP sessions are typically priced lower than IB Higher Level, A-Level, or AP, where subject specialism is rarer and demand is higher. Most reputable tuition centres in JLT charge per hour or as a package across a set number of sessions. Asking for the per-hour cost alongside the expected number of sessions to reach the student's target grade gives the most accurate comparison."
          }
        },
        {
          "@type": "Question",
          "name": "Do Tutors In JLT Provide Support For Homeschooling And Private Candidates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Tutors at the Ignite JLT centre support both school-going students and homeschooling families preparing privately for IGCSE, A-Level, IB, or AP exams. The <a href=\"https://ignitetraininginstitute.com/courses/homeschooling-tutors-in-dubai\">homeschooling support in Dubai</a> at Ignite is structured to cover the full syllabus across a full academic year, with progress checkpoints aligned to exam-series dates. Private candidates can also use these sessions to prepare for a specific paper or retake without enrolling full-time. This is especially useful for families relocating mid-academic year."
          }
        },
        {
          "@type": "Question",
          "name": "Can Tutors In JLT Dubai Help Improve Exam Scores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, when the tutoring is genuinely structured around examiner expectations. At the Ignite JLT centre, score improvement comes from a sequence: closing the conceptual gaps first, then practising past papers under timed conditions, then reviewing performance against the official mark scheme to identify exactly where marks were lost. Students who consistently underperform on application questions often need different practice from students who lose marks on recall. The mark scheme reveals which pattern applies, and the plan is built accordingly."
          }
        },
        {
          "@type": "Question",
          "name": "Do Tutors In JLT Dubai Offer Online Classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Online classes are available alongside in-centre tutoring at the Ignite JLT branch. Online sessions are particularly useful for students with packed school and activity schedules, during exam season when commute time is tight, or for families based further from JLT who want access to the same tutors. The teaching approach stays identical: diagnostic-led planning, past paper practice, and written progress tracking. Most students use a blend of in-centre and online sessions across the academic year."
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
          "name": "Tutors In JLT Dubai",
          "item": "https://ignitetraininginstitute.com/tutors-in-jlt-dubai"
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
      "@id": "https://ignitetraininginstitute.com/tutors-in-jlt-dubai",
      "name": "Expert Tutoring in JLT Dubai for IB, IGCSE, A-Levels, AP, and Standardised Tests",
      "description": "Ignite's tutors in JLT Dubai deliver personalised academic support across IB (MYP and IBDP), IGCSE, A-Levels, AP, ACT, UCAT, and homeschooling. Programs are tailored to each student's pace and goals, with online and in-person options in Jumeirah Lake Towers and across Dubai.",
      "url": "https://ignitetraininginstitute.com/tutors-in-jlt-dubai",
      "image": "https://ignitetraininginstitute.com/assets/tutors.webp",
      "educationalLevel": "Secondary and Pre-University Education",
      "educationalCredentialAwarded": "Improved grades across IB, IGCSE, A-Levels, AP, ACT, and UCAT",
      "inLanguage": "en",
      "teaches": [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer Science",
        "Economics",
        "English",
        "French",
        "Spanish",
        "Accounting",
        "Business Studies",
        "Psychology"
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
        "audienceType": "Students in Jumeirah Lake Towers (JLT), Dubai preparing for IB, IGCSE, A-Levels, AP, ACT, and UCAT"
      },
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "name": "One-On-One Personalised Tutoring",
          "description": "Bespoke one-on-one tutoring with flexible scheduling, personalised lesson plans, and ongoing progress tracking through tests and feedback. Available across all curriculums and standardised tests.",
          "courseMode": ["Blended", "Onsite", "Online"]
        },
        {
          "@type": "CourseInstance",
          "name": "Small Group Training (SGT) Programs",
          "description": "Small group tutoring (3 to 6 students) offering collaborative learning with individualised attention, regular unit tests, and mock exams under exam-like conditions.",
          "courseMode": ["Blended", "Onsite", "Online"]
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
          "author": {
            "@type": "Person",
            "name": "Genesis Tech"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "I wanted to share my incredible experience with Ignite Training Institute! They have been absolutely amazing in coaching my son. The team there took a personal interest in his progress, helping him overcome challenges and building his confidence along the way. I highly recommend Ignite Training Institute to anyone looking for exceptional coaching. The teachers are outstanding and go the extra mile to provide individualized attention. Their dedication and support have made a remarkable difference in my son's educational journey.Keep up the great stuff, Ignite Training Institute! Your commitment to students' growth is truly commendable.",
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
            "name": "Kabir Kochhar"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "Ms. Nidhi Arora is one of the best Business and Economics teachers for the IB. My grades have gone right up and I am on track for a great DP score all thanks to her.",
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
          "reviewBody": "Really good tutoring sessions conducted. I'm a student going there myself and I really enjoy my Economics sessions with my tutor (Nidhi) who really gives good resources and explains/condenses concepts really well. Lots of past paper practice and she's very good at essay planning as well. Overall, I really enjoy the sessions I've been receiving here.",
          "publisher": {
            "@type": "Organization",
            "name": "Google"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Shivam Bakhda"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "The institute has always been extremely helpful and thanks all to the help of Ms Sadaf I am able to take A level Economics outside of school and still excel by already achieving 2 A’s in the first two AS papers and now am aiming for A*'s in P3 and P4. Additionally, I am also able to improve my Business Studies skills.",
          "publisher": {
            "@type": "Organization",
            "name": "Google"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Priya Nair"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "I highly recommend the services offered by Ignite. Sadaf was friendly and extremely helpful for A-Level Economics and Business. Thanks to her, I achieved a newfound sense of confidence for my exams and was able to study in a structured and effective way. The rest of the staff was great too, from Ahzeb to Saif.",
          "publisher": {
            "@type": "Organization",
            "name": "Google"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Tamanna Iyyani"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "As a student that has completed my A-levels with Ignite, I can say that my experience with the teachers and faculty has been amazing. Ignite provided me with a supportive environment where I really benefitted learning from kind and passionate teachers. Overall, it was a place I could fully explore and excel in my academic pursuits and I believe has set me up well for university and my life ahead.",
          "publisher": {
            "@type": "Organization",
            "name": "Google"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Saraswathy Ramachandran"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "We had a wonderful experience with Ignite training institute. My daughter got very good support from her teacher Mr Abdul for her A level Further Math course. He taught all concepts clearly and cleared her doubts",
          "publisher": {
            "@type": "Organization",
            "name": "Google"
          }
        },
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
            "name": "Mahad Waheed"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "Ignite institute has been a great experience. Especially with the mentors level of experience being very knowledgeable across IB.",
          "publisher": {
            "@type": "Organization",
            "name": "Google"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Nimit Dedhia"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "Highly recommend Ignite! My academic success is certainty a testament to their aim for excellence. The teaching provided was exceptional. The expertise and dedication made learning enjoyable and effective. The personalised approach tailored to my learning style was invaluable.",
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
        title="Best Tutors In JLT, Dubai - IB, IGCSE, A-Levels, AP Support"
        description="Enhance your learning with expert tutors in JLT Dubai for IB, IGCSE, A-Levels, & AP. Get dedicated support tailored to help students achieve their goals"
        url="https://ignitetraininginstitute.com/tutors-in-jlt-dubai"
      />
      <Head>
<link
          rel="preload"
          href="/assets/motutors.webp"
          as="image"
          type="image/webp"
          media="(max-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/assets/tutors.webp"
          as="image"
          type="image/webp"
          media="(min-width: 769px)"
          fetchPriority="high"
        />
      </Head>
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={jltTutorsSchema} />

      {/* 2. APPLY the style for paddingTop to the scroll container */}
      <div
        className='overflow-hidden innerpage page-content-padding'
      >
        <section data-scroll-section className="hero-section">
          <div className="hero-container">
            {/* LCP Image moved here for immediate painting (SSR) */}
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/motutors.webp" />
              <img
                src="/assets/tutors.webp"
                alt="Tutors in JLT Dubai"
                fetchPriority="high"
                width="1200"
                height="800"
                className="hero-img"
                style={{ opacity: 1, visibility: 'visible' }}
              />
            </picture>

            <div className="row g-0 h-100">
              <InfoCardLeft {...subjectPages.tutorsJlt} />
              <InfoCardForm formConfig={subjectFormConfigs.tutorsJlt} />
            </div>
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
              object-position: center 35%; 
            }
            @media (max-width: 1100px) {
              .hero-container {
                max-width: 95vw;
              }
            }
          `}</style>
        </section>

        {/* <section data-scroll-section>
          <StudentAchievements />
        </section> */}

        <LazySection>
          <section data-scroll-section>
            <CurriculumTestsComponent />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <SubjectsCard1 />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <ReviewsSection />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <MarqueeBanner />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <OurTrainers />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <IgniteAchievements />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <UpsSection />
          </section>
        </LazySection>

        {/* <section data-scroll-section>
          <LifeAtIgniteCarousel />
        </section> */}

        <LazySection>
          <section data-scroll-section>
            <FAQSection {...faqSections.tutorsJlt} />
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

export default Tutors;