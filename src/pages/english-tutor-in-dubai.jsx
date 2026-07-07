import React, { useEffect, useRef } from 'react';
import LazySection from "@/components/LazySection";
import Head from "next/head";
// 1. Import the reusable schema component
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
// import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/shared/Accordion';
import { accordionSections } from '@/data/accordionSections';
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
import EnglishTutorsChooseApp from '@/components/english-tutoring/choose-app';
import EnglishTutorsACT from '@/components/english-tutoring/ACT';
import EnglishTutorsUsps from "@/components/english-tutoring/Usps";
import Trainers from "@/components/english-tutoring/Trainers";
import EnglishTutorsIgniteAchievements from '@/components/english-tutoring/IgniteAchievements';
import EnglishTutorsFAQSection from '@/components/shared/FaqSection';
import { faqSections } from '@/data/faqSections';
//comment
// Renamed main component: SubjectTutoring -> EnglishTutorsInDubai
const EnglishTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const englishTutorsSchema = [
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What English Courses and Boards are Covered by Ignite's Tutors?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite's English tutors in Dubai cover Cambridge IGCSE First Language English (0500 / 0990), Literature in English (0475 / 0992), and English as a Second Language (0510 / 0993), Cambridge AS and A-Level English Language (9093) and Literature in English (9695), UK A-Level boards, IB English A (Language and Literature, Literature) and English B, plus AP English Language and AP English Literature."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What Is The Difference Between IB English A Language And Literature, And IB English A Literature?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "IB English A has two routes. Language and Literature mixes literary works with non-literary text types (news articles, advertising, political speeches, image-based texts), which is now the more commonly taken course. Literature focuses purely on literary texts: novels, plays, poetry, and short stories. Both run at SL and HL. The right choice depends on whether a student prefers analysing a wider range of text types or going deeper into literary works."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What Is The Difference Between AP English Language And AP English Literature?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The College Board runs two distinct AP English courses. AP English Language and Composition focuses on rhetorical analysis of non-fiction prose, argumentation, and synthesis essays using multiple sources. AP English Literature and Composition focuses on prose, poetry, and drama analysis, with a literary-criticism approach. Many US-curriculum students take both, usually AP Language in Grade 11 and AP Literature in Grade 12. We tutor for both exams."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do You Offer Online English Tutoring As Well As In-Person In Dubai?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both. We run in-person sessions at our two Dubai centres (DIFC and JLT) and one-to-one online English tutoring for students across the wider UAE or with packed schedules. Online sessions use the same tutors and structure as in-centre ones, with screen-sharing for working through texts, essay planning, and past paper questions step by step. Most students searching for an English tutor near me end up using both formats across the year."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Do Tutors Help With English Essays And Unseen Text Analysis?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "English marks at every level are won on textual evidence and structured argument. We teach students to read a text closely, identify the technique and purpose, then build a paragraph around the AQA / Cambridge / IB / College Board criteria with a clear point, embedded quotation, analysis, and link back to the argument. Unseen text and unseen poetry work uses past paper material under timed conditions, marked against the actual mark scheme."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Soon Before Exams Should A Student Start English Tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For IGCSE and GCSE English (First Language, Literature, or ESL), three to six months of weekly sessions before the May/June series is sensible. IB Diploma students benefit from starting early in DP1, since the Individual Oral and Higher Level Essay run across the course. AP English students need at least four months before the May exams. Earlier starts let us spread set-text reading, essay practice, and past papers across the preparation arc."
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
                    "name": "English Tutors in Dubai",
                    "item": "https://ignitetraininginstitute.com/english-tutor-in-dubai"
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Course",
            "@id": "https://ignitetraininginstitute.com/english-tutor-in-dubai",
            "name": "English Tutoring in Dubai (IB, IGCSE, A-Level, AP)",
            "description": "English tutoring in Dubai for IB (MYP and IBDP), IGCSE/GCSE, and A-Level students, with English preparation for ACT, AP, and UCAT. Lessons focus on writing, reading, and analysis, delivered online and in person at the DIFC and JLT centres.",
            "url": "https://ignitetraininginstitute.com/english-tutor-in-dubai",
            "image": "https://ignitetraininginstitute.com/assets/subject-tutoring.webp",
            "educationalLevel": "Secondary and senior secondary (MYP, IGCSE/GCSE, A-Level, IBDP)",
            "educationalCredentialAwarded": "English support for IB, IGCSE/GCSE, A-Level, AP, ACT, and UCAT",
            "inLanguage": "en",
            "teaches": [
                "IB English (MYP)",
                "IB English (IBDP)",
                "IGCSE/GCSE English",
                "A-Level English",
                "ACT English",
                "AP English",
                "UCAT English"
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
                "audienceType": "Secondary and senior secondary students preparing for IB, IGCSE/GCSE, A-Level, AP, ACT, and UCAT English"
            },
            "hasCourseInstance": [
                {
                    "@type": "CourseInstance",
                    "name": "IB English Tutoring (MYP)",
                    "description": "English tutoring for IB Middle Years Programme students in Dubai, online and in person.",
                    "courseMode": ["Onsite", "Online"]
                },
                {
                    "@type": "CourseInstance",
                    "name": "IB English Tutoring (IBDP)",
                    "description": "English tutoring for IB Diploma Programme students in Dubai, online and in person.",
                    "courseMode": ["Onsite", "Online"]
                },
                {
                    "@type": "CourseInstance",
                    "name": "IGCSE/GCSE English Tutoring",
                    "description": "English tutoring for IGCSE and GCSE students in Dubai, online and in person.",
                    "courseMode": ["Onsite", "Online"]
                },
                {
                    "@type": "CourseInstance",
                    "name": "A-Level English Tutoring",
                    "description": "English tutoring for A-Level students in Dubai, online and in person.",
                    "courseMode": ["Onsite", "Online"]
                },
                {
                    "@type": "CourseInstance",
                    "name": "ACT English Tutoring",
                    "description": "ACT English section preparation in Dubai, online and in person.",
                    "courseMode": ["Onsite", "Online"]
                },
                {
                    "@type": "CourseInstance",
                    "name": "AP English Tutoring",
                    "description": "Advanced Placement English preparation in Dubai, online and in person.",
                    "courseMode": ["Onsite", "Online"]
                },
                {
                    "@type": "CourseInstance",
                    "name": "UCAT English Tutoring",
                    "description": "UCAT verbal and English preparation in Dubai, online and in person.",
                    "courseMode": ["Onsite", "Online"]
                }
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "worstRating": "1",
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
        }
    ];
    // ----------------------------------------------------
    // 👆 END OF SCHEMA DEFINITION
    // ----------------------------------------------------

    // Relying on global LocomotiveScrollProvider from _app.js

    return (
        <>
            <SEO
                loadInnerStyles={true} title="Best English Tutors In Dubai - IB, IGCSE, A-Level, & AP" description="Acquire language efficiency with top-rated English tutors in Dubai for IB, IGCSE, A-Level, & AP exam prep. Learn with 1K+ advanced resources" url="https://ignitetraininginstitute.com/english-tutor-in-dubai" />
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
            <JsonLd schema={englishTutorsSchema} />

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
                                alt="English Tutors Background"
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
                            <InfoCardLeft {...subjectPages.english} />
                        <InfoCardForm formConfig={subjectFormConfigs.english} />
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
                        <MarqueeBanner />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <EnglishTutorsChooseApp />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <EnglishTutorsACT />
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
                        <EnglishTutorsIgniteAchievements />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <EnglishTutorsUsps />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <EnglishTutorsFAQSection {...faqSections.english} />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <Accordion {...accordionSections.english} />
                    </section>
                </LazySection>
            </div>
        </>
    );
};

export default EnglishTutorsInDubai;