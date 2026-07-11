import Head from "next/head";
import LazySection from "@/components/LazySection";
// 1. Import the reusable schema component
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/tutors/MarqueeBanner';
import ReviewsSection from '@/components/tutors/ReviewsSection';
import CurriculumTestsComponent from '@/components/tutors/curriculum';
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
import OurTrainers from '@/components/tutors/ourTrainers';
import SubjectsCard1 from '@/components/tutors/SubjectCard1';
import IgniteAchievements from '@/components/tutors/igniteAchivement';
import Blog from "@/components/tutors/Blog";
import UpsSection from '@/components/tutors/UspsSection';
import Accordion from '@/components/shared/Accordion';
import { accordionSections } from '@/data/accordionSections';
import FAQSection from '@/components/shared/FaqSection';
import { faqSections } from '@/data/faqSections';

// 1. ACCEPT the headerHeight prop
const Tutors = ({ headerHeight }) => {

  // ----------------------------------------------------
  // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  const tutorsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which Is The Best Tutoring Centre In Dubai For IB, IGCSE, And A-Levels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best tutoring centre is the one whose tutors specialise in your child’s exact exam board, track progress regularly, and use past papers with mark scheme analysis as the core of their teaching. In Dubai, Ignite Training Institute is recognised for board-specific tuition across IB (MYP and IBDP), Cambridge and Edexcel IGCSE, all major A-Level boards, and AP. Before enrolling anywhere, book a demo class, ask about tutor qualifications, and confirm they teach the specific syllabus your child sits, not a generic version of the subject."
          }
        },
        {
          "@type": "Question",
          "name": "What Is The Difference Between A Tuition Centre And A Private Home Tutor In Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A tuition centre in Dubai operates from a fixed location with a team of subject specialists, structured progress tracking, and admin support. A private home tutor visits the student’s house and usually works alone. Centres are stronger when you want subject variety, structured progress reports, and centre-led mock exams. Home tutors are convenient when only one subject is needed, and parents are happy to coordinate everything themselves. Many families at Ignite use both: a centre-led plan with the option of online sessions when travel or school commitments make in-person classes difficult."
          }
        },
        {
          "@type": "Question",
          "name": "How Much Does Private Tutoring Cost In Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Private tutoring in Dubai typically ranges from AED 150 to AED 500 per hour, depending on the level, subject, and tutor experience. IB Diploma and A-Level specialists, especially for Maths, Sciences, and Economics, sit at the higher end. IGCSE and MYP rates are usually lower. Group classes work out cheaper per student. Beyond the hourly rate, ask what is included: do session notes, mock papers, and parent progress updates come at no extra cost? These extras often matter more than a small difference in the headline price."
          }
        },
        {
          "@type": "Question",
          "name": "When Should Students Start Tutoring In Dubai Before Their Exams?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For final board exams, six to twelve months is the realistic window. This gives time to complete the syllabus, identify weak areas, and work through full sets of past papers under timed conditions. Students starting just two or three months before exams can still see useful gains, but the focus shifts almost entirely to exam technique and high-yield topics. The best approach is to start tutoring at the beginning of the exam year (Year 11 for IGCSE, Year 13 for A-Levels, Grade 12 for IBDP) and build steadily rather than rush at the end."
          }
        },
        {
          "@type": "Question",
          "name": "Are Online Tutors In Dubai As Effective As In-Person Tutoring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For most secondary students, online tutoring is just as effective as in-person, particularly for one-to-one sessions in Maths, Sciences, and Economics, where a shared digital whiteboard can be more productive than a paper one. In-person tutoring still has an edge for younger students who need more direct supervision and for practical-heavy subjects. At Ignite, around half of our students study online, including many based outside Dubai. The format matters less than the quality of the tutor and the structure of the sessions."
          }
        },
        {
          "@type": "Question",
          "name": "Do Tutors In Dubai Support University Admissions And UCAS Preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Strong tutoring centres in Dubai support university admissions alongside academic tuition. This includes UCAS personal statement guidance, predicted grade strategies for UK universities, SAT and ACT preparation for US applications, AP exam preparation for early college credit, and entrance tests such as UCAT for medical school applicants. At Ignite, university admissions support is offered to students already enrolled for tuition, and we have placed students into UCL, Edinburgh, Warwick, and other leading universities over the past several years. Families newer to the process often find our guide on how to apply for university in the USA, UK, and UAE a useful starting point."
          }
        },
        {
          "@type": "Question",
          "name": "What Qualifications Should I Look For In A Tutor In Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for three things: a strong academic background in the subject they teach (a relevant degree, not just general teaching credentials), direct experience with the specific exam board your child sits, and a track record of student results you can verify through reviews or references. Years of experience matter less than recent and current exposure to the syllabus, since exam boards update specifications regularly. A tutor who taught CAIE Maths a decade ago but has not kept up with current question styles is not as useful as one teaching the current syllabus today."
          }
        },
        {
          "@type": "Question",
          "name": "How Do I Book A Tutor At Ignite Training Institute?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Booking is straightforward. Fill out the enquiry form on our contact page with your child’s curriculum, year group, and subjects needed. Our team will call within one working day to understand your goals, recommend a tutor, and schedule a free demo class either online or at our DIFC or JLT centre. If the demo session works for your child, we will move forward with a study plan and session schedule. There is no pressure to commit on the call, and the demo itself is genuinely free."
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
          "name": "Tutors In Dubai",
          "item": "https://ignitetraininginstitute.com/tutors-in-dubai"
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
      "@id": "https://ignitetraininginstitute.com/tutors-in-dubai",
      "name": "Expert Tutoring in Dubai for IB, IGCSE, A-Levels, AP, and Standardised Tests",
      "description": "Ignite's tutors in Dubai deliver personalised academic support across IB (MYP and IBDP), IGCSE, A-Levels, AP, ACT, UCAT, and homeschooling. Programs are tailored to each student's pace and goals, with online and in-person options across Dubai.",
      "url": "https://ignitetraininginstitute.com/tutors-in-dubai",
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
        "audienceType": "Secondary and pre-university students preparing for IB, IGCSE, A-Levels, AP, ACT, and UCAT"
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
          "reviewBody": "I wanted to share my incredible experience with Ignite Training Institute! They have been absolutely amazing in coaching my son. The team there took a personal interest in his progress, helping him overcome challenges and building his confidence along the way. I highly recommend Ignite Training Institute to anyone looking for exceptional coaching. The teachers are outstanding and go the extra mile to provide individualized attention. Their dedication and support have made a remarkable difference in my son's educational journey. Keep up the great stuff, Ignite Training Institute! Your commitment to students' growth is truly commendable.",
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
          "reviewBody": "Ms. Nidhi Arora is one of the best Business and Economics teachers for the IB. She knows exactly what is coming on the syllabus and does an amazing job at helping her students. I have been working with her for the best part of my DP course so far, and I can say that whatever was hard to understand in school, Ms. Nidhi explained it to me within seconds. My grades have gone right up and I am on track for a great DP score all thanks to her.",
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
          "reviewBody": "The institute has always been extremely helpful and thanks all to the help of Ms Sadaf I am able to take A level Economics outside of school and still excel by already achieving 2 A's in the first two AS papers and now am aiming for A*'s in P3 and P4. Additionally, I am also able to improve my Business Studies skills.",
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
          "reviewBody": "We had a wonderful experience with Ignite Training Institute. My daughter got very good support from her teacher Mr Abdul for her A level Further Math course. He taught all concepts clearly and cleared her doubts.",
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
          "reviewBody": "Ignite Institute has been a great experience. Especially with the mentors level of experience being very knowledgeable across IB.",
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
          "reviewBody": "Highly recommend Ignite! My academic success is certainly a testament to their aim for excellence. The teaching provided was exceptional. The expertise and dedication made learning enjoyable and effective. The personalised approach tailored to my learning style was invaluable.",
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
        title="Tutors In Dubai - IB, IGCSE, A-Levels, AP, & More"
        description="Gain academic efficiency with the tutors in Dubai - IB, IGCSE, A-Levels, AP, & more, Our expert tutors offer tailored support for curriculums"
        url="https://ignitetraininginstitute.com/tutors-in-dubai"
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
      <JsonLd schema={tutorsSchema} />

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
                alt="Tutors in Dubai"
                fetchPriority="high"
                width="1200"
                height="800"
                className="hero-img"
                style={{ opacity: 1, visibility: 'visible' }}
              />
            </picture>

            <div className="row g-0 h-100">
              <InfoCardLeft {...subjectPages.tutorsDubai} />
              <InfoCardForm formConfig={subjectFormConfigs.tutorsDubai} />
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

        <LazySection>
          <section data-scroll-section>
            <FAQSection {...faqSections.tutorsDubai} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Blog />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Accordion {...accordionSections.tutorsDubai} />
          </section>
        </LazySection>
      </div>
    </>
  );
};

export default Tutors;