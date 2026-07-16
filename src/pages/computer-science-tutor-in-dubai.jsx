import LazySection from "@/components/LazySection";
import dynamic from "next/dynamic";
import Head from "next/head";
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/shared/MarqueeBanner';
import { getMarqueeData } from '@/data/marqueeConfig';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
// import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/shared/Accordion';
import { accordionSections } from '@/data/accordionSections';
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
import ComputerTutorsChooseApp from '@/components/computer-tutoring/choose-app';
import ComputerTutorsSubjectSyllabus from '@/components/computer-tutoring/SubjectSyllabus';
import ComputerTutorsUsps from "@/components/computer-tutoring/Usps";
const Trainers = dynamic(() => import("@/components/computer-tutoring/Trainers"));
import ComputerTutorsIgniteAchievements from '@/components/computer-tutoring/IgniteAchievements';
import ComputerTutorsFAQSection from '@/components/shared/FaqSection';
import { faqSections } from '@/data/faqSections';
//comment
// Renamed main component: SubjectTutoring -> ComputerTutorsInDubai
const ComputerTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const computerTutorsSchema = [
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
          { "@type": "City", "name": "Dubai" },
          { "@type": "Country", "name": "United Arab Emirates" }
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
            "name": "Computer Science Tutors In Dubai",
            "item": "https://ignitetraininginstitute.com/computer-science-tutor-in-dubai"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Course",
        "@id": "https://ignitetraininginstitute.com/computer-science-tutor-in-dubai",
        "name": "Computer Science Tutoring in Dubai",
        "description": "Curriculum-aligned Computer Science tutoring at Ignite Training Institute in Dubai, covering IB (MYP and IBDP), IGCSE/GCSE, A-Levels, and AP. Sessions cover programming, algorithms, data structures, databases, system architecture, and curriculum theory, with coding support in languages such as Python and Java. Delivered online and in-person across Dubai.",
        "url": "https://ignitetraininginstitute.com/computer-science-tutor-in-dubai",
        "image": "https://ignitetraininginstitute.com/assets/subject-tutoring.webp",
        "educationalLevel": "IB (MYP / IBDP), IGCSE / GCSE, A-Level, and AP",
        "educationalCredentialAwarded": "IB (MYP / IBDP) Computer Science, IGCSE / GCSE Computer Science, A-Level Computer Science, and AP Computer Science",
        "inLanguage": "en",
        "teaches": [
          "IB MYP Computer Science",
          "IB Diploma Programme Computer Science",
          "IGCSE / GCSE Computer Science",
          "A-Level Computer Science",
          "AP Computer Science"
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
          "audienceType": "IB, IGCSE, A-Level, and AP students"
        },
        "hasCourseInstance": [
          {
            "@type": "CourseInstance",
            "name": "IB Computer Science Tutors (MYP)",
            "courseMode": ["Onsite", "Online"]
          },
          {
            "@type": "CourseInstance",
            "name": "IB Computer Science Tutors (IBDP)",
            "courseMode": ["Onsite", "Online"]
          },
          {
            "@type": "CourseInstance",
            "name": "IGCSE/GCSE Computer Science Tutors",
            "courseMode": ["Onsite", "Online"]
          },
          {
            "@type": "CourseInstance",
            "name": "A-Levels Computer Science Tutors",
            "courseMode": ["Onsite", "Online"]
          },
          {
            "@type": "CourseInstance",
            "name": "AP Computer Science Tutors",
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
            "author": { "@type": "Person", "name": "Genesis Tech" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "I wanted to share my incredible experience with Ignite Training Institute! They have been absolutely amazing in coaching my son. The team there took a personal interest in his progress, helping him overcome challenges and building his confidence along the way. I highly recommend Ignite Training Institute to anyone looking for exceptional coaching. The teachers are outstanding and go the extra mile to provide individualized attention. Their dedication and support have made a remarkable difference in my son's educational journey.Keep up the great stuff, Ignite Training Institute! Your commitment to students' growth is truly commendable.",
            "publisher": { "@type": "Organization", "name": "Google" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Kabir Kochhar" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "One of the best Business and Economics teachers for the IB. They know exactly what is coming on the syllabus and do an amazing job at helping students. I have been working with them for the best part of my DP course so far, and I can say that whatever was hard to understand in school was explained to me within seconds. My grades have gone right up and I am on track for a great DP score all thanks to this guidance.",
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
            "author": { "@type": "Person", "name": "Sara Kerr" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "really good tutoring sessions conducted. I'm a student going there myself and I really enjoy my Economics sessions with my tutor who really gives good resources and explains/condenses concepts really well. Lots of past paper practice and she's very good at essay planning as well. Overall, I really enjoy the sessions I've been receiving here.",
            "publisher": { "@type": "Organization", "name": "Google" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Shivam Bakhda" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "The institute has always been extremely helpful. I am able to take A Level Economics outside of school and still excel, already achieving 2 A’s in the first two AS papers and now aiming for A’s in P3 and P4. Additionally, I am also able to improve my Business Studies skills",
            "publisher": { "@type": "Organization", "name": "Google" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya Nair" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "I highly recommend the services offered by Ignite. The support for A-Level Economics and Business was friendly and extremely helpful. Thanks to this guidance, I achieved a newfound sense of confidence for my exams and was able to study in a structured and effective way. The rest of the staff was great too, from Ahzeb to Saif.",
            "publisher": { "@type": "Organization", "name": "Google" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Tamanna Iyyani" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "As a student that has completed my A-levels with Ignite, I can say that my experience with the teachers and faculty has been amazing. Ignite provided me with a supportive environment where I really benefitted learning from kind and passionate teachers. Overall, it was a place I could fully explore and excel in my academic pursuits and I believe has set me up well for university and my life ahead",
            "publisher": { "@type": "Organization", "name": "Google" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Saraswathy Ramachandran" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "We had a wonderful experience with Ignite training institute. My daughter got very good support from her teacher Mr Abdul for her A level Further Math course. He taught all concepts clearly and cleared her doubts",
            "publisher": { "@type": "Organization", "name": "Google" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Zeynep Inan" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "I have been taking lessons at Ignite Training Institute for around three years. I have taken lessons for IGCSE science and math which has helped me achieve top grades. I have also taken lessons for IB math, biology, and Spanish. With the help of my trainers, I was able to achieve a good predicted and final exam grade which allowed me get offers from top universities in the UK such as UCL and University of Edinburgh.",
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
            "author": { "@type": "Person", "name": "Nimit Dedhia" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "Highly recommend Ignite! My academic success is certainty a testament to their aim for excellence. The teaching provided was exceptional. The expertise and dedication made learning enjoyable and effective. The personalised approach tailored to my learning style was invaluable.",
            "publisher": { "@type": "Organization", "name": "Google" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ben Dunatov" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" },
            "reviewBody": "Great tutoring service! Perfect for struggling GCSE students.",
            "publisher": { "@type": "Organization", "name": "Google" }
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which Computer Science Courses Do Ignite's CS Tutors In Dubai Cover?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ignite's Computer Science tutors in Dubai cover Cambridge IGCSE Computer Science (0478 international, 0984 UK 9-1 variant), GCSE Computer Science (AQA, OCR, Pearson Edexcel UK boards), Cambridge International AS and A-Level Computer Science (9618), IB Computer Science (SL and HL, plus MYP Design and Digital Design), and both College Board AP courses: AP Computer Science A and AP Computer Science Principles."
            }
          },
          {
            "@type": "Question",
            "name": "Which Programming Languages Does Ignite Cover (Python, Java, C++, Pseudocode)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ignite teaches whichever language your child's curriculum requires. Python is the dominant language across Dubai schools and is used in IGCSE, IB, and AP CS Principles. Java is required for AP Computer Science A and used in some IB DP schools. Pseudocode is essential for Cambridge IGCSE and A-Level exams. C++ comes up occasionally. Beyond syntax, we focus on computational thinking and algorithmic logic that transfers across languages."
            }
          },
          {
            "@type": "Question",
            "name": "What's The Difference Between AP Computer Science A And AP Computer Science Principles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AP Computer Science A is a Java-based course focused on object-oriented programming, data structures, and algorithms. It suits students planning to study CS at university. The exam has 42 MC questions plus 4 free-response questions. AP Computer Science Principles is broader and language-agnostic, covering computational thinking and the impact of computing. It includes a Create Performance Task (worth 30%) plus a 70-question MC exam."
            }
          },
          {
            "@type": "Question",
            "name": "Are Private Computer Science Tutoring Sessions In Dubai Available Online Or In Person?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Both. We run in-centre sessions at our two Dubai locations (DIFC and JLT), plus one-to-one online sessions for students across the wider UAE or with packed schedules. Online sessions use the same tutors and lesson structure as in-centre ones, which matters for CS specifically because the tutor can share screens to walk through live code, debug together, and review the student's actual projects."
            }
          },
          {
            "@type": "Question",
            "name": "How Are IB Internal Assessments And IGCSE Pre-Release Material Handled?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The IB Computer Science Internal Assessment is the \"Computational Solution\" project, where students design and build a working program for a real client. We support students through problem identification, design documentation, code development, and the criteria-based written report. For IGCSE Computer Science Paper 2, Cambridge releases pre-release material before the exam. We work through that pre-release systematically with the student so they can write and trace code confidently under exam conditions."
            }
          },
          {
            "@type": "Question",
            "name": "How Soon Should A Student Start Computer Science Tutoring Before Their Board Exams?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For IGCSE Computer Science, three to six months before the May/June series is the sensible window, especially since Paper 2 pre-release material is published well in advance. IB Diploma students benefit most from starting in DP1, since the Computational Solution IA takes months of structured project work. A-Level students should join ahead of AS papers in May. AP CS students need at least four months before the May exam window."
            }
          }
        ]
      }
    ];
    // ----------------------------------------------------
    // 👆 END OF SCHEMA DEFINITION
    // ----------------------------------------------------

    // Relying on global LocomotiveScrollProvider from _app.js

    return (
        <>
            <SEO
                loadInnerStyles={true}
                title="Computer Science Tutors In Dubai - IB, IGCSE, A-Level, & AP"
                description="Upgrade your grades with the best Computer Science tutors in Dubai. We specialize in IB, IGCSE, A-Levels, & AP, offering thorough preparation"
                url="https://ignitetraininginstitute.com/computer-science-tutor-in-dubai"
            />
            <Head>
<link
                    rel="preload"
                    href="/assets/subject-tutoring-m.webp"
                    as="image"
                    type="image/webp"
                    media="(max-width: 768px)"
                    fetchPriority="high"
                />
                <link
                    rel="preload"
                    href="/assets/subject-tutoring.webp"
                    as="image"
                    type="image/webp"
                    media="(min-width: 769px)"
                    fetchPriority="high"
                />
            </Head>
            {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
            <JsonLd schema={computerTutorsSchema} />

            <div
                className="innerpage page-content-padding"
                style={{ paddingTop: `${headerHeight}px` }}
            >
                <section className="hero-section" data-scroll-section>
                    <div className="hero-container">
                        {/* LCP Image moved here for immediate painting (SSR) */}
                        <picture className="hero-bg">
                            <source media="(max-width: 768px)" srcSet="/assets/subject-tutoring-m.webp" />
                            <img
                                src="/assets/subject-tutoring.webp"
                                alt="Computer Science Tutors Background"
                                fetchPriority="high"
                                decoding="sync"
                                width="1200"
                                height="800"
                                className="hero-img"
                                style={{ opacity: 1, visibility: 'visible' }}
                            />
                        </picture>

                        {/* Interactive Content */}
                        <div className="row g-0 h-100">
                            <InfoCardLeft {...subjectPages.computer} />
                        <InfoCardForm formConfig={subjectFormConfigs.computer} />
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
              isolation: isolate; /* Creates stacking context */
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
                        <MarqueeBanner config={getMarqueeData('standard')} />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <ComputerTutorsChooseApp />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <ComputerTutorsSubjectSyllabus />
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
                    <section data-scroll-section>
                        <ComputerTutorsIgniteAchievements />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <ComputerTutorsUsps />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <ComputerTutorsFAQSection {...faqSections.computer} />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <Accordion {...accordionSections.computer} />
                    </section>
                </LazySection>
            </div>
        </>
    );
};

export default ComputerTutorsInDubai;