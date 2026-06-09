import React, { useEffect, useRef } from 'react';
import LazySection from "@/components/LazySection";
import Head from "next/head";
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
// import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/spanish-tutoring/accordian';
import SpanishTutorsInfoCard from '@/components/spanish-tutoring/infoCard';
import SpanishTutorsChooseApp from '@/components/spanish-tutoring/choose-app';
import SpanishTutorsACT from '@/components/spanish-tutoring/ACT';
import SpanishTutorsUsps from "@/components/spanish-tutoring/Usps";
import Trainers from "@/components/spanish-tutoring/Trainers";
import SpanishTutorsIgniteAchievements from '@/components/spanish-tutoring/IgniteAchievements';
import SpanishTutorsLifeAtIgniteCarousel from '@/components/spanish-tutoring/LifeAtIgniteCarousel';
import SpanishTutorsFAQSection from '@/components/spanish-tutoring/FaqSection';
import SpanishTutorsStudentAchievements from '@/components/spanish-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> SpanishTutorsInDubai
const SpanishTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const spanishTutorsSchema = [
        {
            "@context": "https://schema.org",
            "@type": "Course",
            "@id": "https://ignitetraininginstitute.com/spanish-tutor-in-dubai",
            "name": "Spanish Tutoring in Dubai",
            "description": "Curriculum-aligned Spanish tutoring at Ignite Training Institute in Dubai, covering IB (MYP and IBDP, SL and HL), IGCSE/GCSE, A-Levels, and AP Spanish. Sessions build reading, writing, listening, and speaking skills with grammar, vocabulary, and exam preparation. Delivered online and in-person across Dubai.",
            "url": "https://ignitetraininginstitute.com/spanish-tutor-in-dubai",
            "image": "https://ignitetraininginstitute.com/assets/subject-tutoring.webp",
            "educationalLevel": "IB (MYP / IBDP), IGCSE / GCSE, A-Level, and AP",
            "educationalCredentialAwarded": "IB (MYP / IBDP) Spanish, IGCSE / GCSE Spanish, A-Level Spanish, and AP Spanish",
            "inLanguage": "en",
            "teaches": [
                "IB MYP Spanish",
                "IB Diploma Programme Spanish (SL / HL)",
                "IGCSE / GCSE Spanish",
                "A-Level Spanish",
                "AP Spanish"
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
                    "name": "IB Spanish Tutors (MYP)",
                    "courseMode": ["Onsite", "Online"]
                },
                {
                    "@type": "CourseInstance",
                    "name": "IB Spanish Tutors (IBDP)",
                    "courseMode": ["Onsite", "Online"]
                },
                {
                    "@type": "CourseInstance",
                    "name": "IGCSE/GCSE Spanish Tutors",
                    "courseMode": ["Onsite", "Online"]
                },
                {
                    "@type": "CourseInstance",
                    "name": "A-Levels Spanish Tutors",
                    "courseMode": ["Onsite", "Online"]
                },
                {
                    "@type": "CourseInstance",
                    "name": "AP Spanish Tutors",
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
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Which Spanish Courses Do Ignite's Spanish Tutors In Dubai Cover?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite's Spanish tutors in Dubai cover Cambridge IGCSE Spanish (0530), Pearson Edexcel International GCSE Spanish (4SP1), Cambridge International AS and A-Level Spanish, IB Spanish (Ab Initio, Language B HL and SL, plus MYP), and AP Spanish Language and Culture from the College Board. Most students join us between Year 7 and Year 13, or Grades 11 to 12."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What's The Difference Between IB Spanish Ab Initio, Language B, And Literature?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "IB Spanish Ab Initio (SL only) is for beginners with little or no prior Spanish. IB Spanish B (HL or SL) is for students with 3+ years of Spanish study, focused on intermediate texts and conversations. IB Spanish A: Literature is for fluent students studying Spanish as a literary subject, usually mother-tongue speakers. Most UAE international school students sit Ab Initio or Language B. The IB coordinator at your school verifies placement following a diagnostic assessment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are Ignite's Spanish Tutors Native Speakers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We have both native Spanish speakers and highly proficient non-native tutors on the team. Native speakers typically excel in speaking assessments, oral presentations, and pronunciation exercises. Non-native instructors who have successfully completed IB, A-Level, or AP programs frequently provide a more systematic explanation of grammar and possess a deeper understanding of test-taking strategies. We match the tutor to the exam, the student's level, and parent preference."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are Private Spanish Tutoring Sessions In Dubai Available Online Or In Person?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We conduct in-centre sessions at DIFC and JLT for in-person instruction, in addition to offering one-on-one online sessions for students throughout the broader UAE or those with busy schedules. Online sessions use the same tutors and lesson structure as in-centre ones. Most students searching for a private Spanish tutor in Dubai or a Spanish tutor near me use both formats across the year, switching to online during heavy exam weeks."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Are Speaking And Listening Skills Prepared For Spanish Exams?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Speaking and listening are the highest-anxiety components for most UAE students. Speaking sessions include structured conversation practice on the exam topic list, full mock orals timed to the real format (IB Individual Oral, IGCSE speaking test, A-Level oral, AP speaking tasks), and pronunciation work. Listening uses past paper audio from each exam board so students get used to the accent, speed, and question types they'll face."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Soon Should A Student Start Spanish Tutoring Before Their Board Exams?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For IGCSE and GCSE Spanish, start three to six months before the May/June exam series. IB Diploma students benefit most from beginning in DP1, since the Individual Oral is assessed before the final exam year. A-Level students are encouraged to enroll prior to the AS examinations in May or before the mock assessments in November or January. AP Spanish students need at least four months before the May AP exam window."
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
                    "name": "Spanish Tutors In Dubai",
                    "item": "https://ignitetraininginstitute.com/spanish-tutor-in-dubai"
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
                title="Best Spanish Tutors In Dubai - IB, IGCSE, A-Level Support"
                description="We provide expert Spanish coaching in Dubai for IB, IGCSE, & A-Levels, helping students master the language & achieve top exam results"
                url="https://ignitetraininginstitute.com/spanish-tutor-in-dubai"
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
            <JsonLd schema={spanishTutorsSchema} />

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
                                alt="Spanish Tutors Background"
                                fetchPriority="high"
                                decoding="sync"
                                width="1200"
                                height="800"
                                className="hero-img"
                                style={{ opacity: 1, visibility: 'visible' }}
                            />
                        </picture>

                        {/* Interactive Content */}
                        <SpanishTutorsInfoCard />
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

                {/* <section data-scroll-section>
                    <SpanishTutorsStudentAchievements />
                </section> */}

                <LazySection>
                    <section data-scroll-section>
                        <MarqueeBanner />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <SpanishTutorsChooseApp />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <SpanishTutorsACT />
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
                        <SpanishTutorsIgniteAchievements />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <SpanishTutorsUsps />
                    </section>
                </LazySection>

                {/* <section data-scroll-section>
                    <SpanishTutorsLifeAtIgniteCarousel />
                </section> */}

                <LazySection>
                    <section data-scroll-section>
                        <SpanishTutorsFAQSection />
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

export default SpanishTutorsInDubai;