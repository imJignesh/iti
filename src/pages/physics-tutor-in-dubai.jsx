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
import Accordion from '@/components/physics-tutoring/accordian';
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
import PhysicsTutorsChooseApp from '@/components/physics-tutoring/choose-app';
import PhysicsTutorsACT from '@/components/physics-tutoring/ACT';
import PhysicsTutorsUsps from "@/components/physics-tutoring/Usps";
import Trainers from "@/components/physics-tutoring/Trainers";
import PhysicsTutorsIgniteAchievements from '@/components/physics-tutoring/IgniteAchievements';
import PhysicsTutorsLifeAtIgniteCarousel from '@/components/physics-tutoring/LifeAtIgniteCarousel';
import PhysicsTutorsFAQSection from '@/components/shared/FaqSection';
import { faqSections } from '@/data/faqSections';
import PhysicsTutorsStudentAchievements from '@/components/physics-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> PhysicsTutorsInDubai
const PhysicsTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const physicsTutorsSchema = [
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Physics Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/physics-tutor-in-dubai/",
            "logo": "https://ignitetraininginstitute.com/wp-content/uploads/2023/02/ignitefinallogos_1.svg",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "79",
                "bestRating": "5",
                "author": {
                    "@type": "Organization",
                    "name": "Google",
                    "sameAs": "https://www.google.com/"
                },
                "url": "https://www.google.com/maps/place/Ignite+Training+Institute/@25.2166721,55.2777655,15z/data=!4m6!3m5!1s0x3e5f43b8f8e29eb3:0x44b31b9a92cc00dc!8m2!3d25.2166721!4d55.2777655!16s%2Fg%2F11gng101r0"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Which Physics Courses And Boards Do Ignite's Tutors Cover?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite's Physics tutors in Dubai cover Cambridge IGCSE Physics (0625, and the 9-1 graded 0972), GCSE Physics (AQA, OCR, Edexcel), Cambridge International AS and A-Level Physics (9702), UK A-Level Physics boards, IB Physics (SL and HL, plus MYP Sciences), and the AP Physics courses from the College Board. Tutoring is matched to the exact board and level your school follows, since paper structures differ across them."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What Changed In The New IB Physics Syllabus (First Exams 2025)?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "IB Physics was redesigned around five themes: Space, Time and Motion; The Particulate Nature of Matter; Wave Behaviour; Fields; and Nuclear and Quantum Physics. The optional topics were removed and astrophysics was dropped, so every SL and HL student now studies the same core. The standalone Paper 3 was removed and its experimental and data-analysis questions absorbed into Paper 1B. The Internal Assessment remains worth 20%."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Do Ignite's Tutors Support The IB Physics Internal Assessment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The IB Physics Internal Assessment is a scientific investigation worth 20% of the final grade, with a 3,000-word limit. Our tutors help students choose a focused research question, design a method that produces measurable data, handle uncertainties and error analysis correctly, and write the evaluation against the IB criteria. The most common mark loss is a vague research question or weak treatment of uncertainties, so we settle both early."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can A Tutor Help With Both Physics And Maths Together?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, and it is one of the most common requests we get. Physics marks are often lost on the maths, not the physics, so rearranging equations, handling units, and working with vectors and graphs hold students back even when they understand the concept. Many students book a physics and maths tutor in Dubai to fix both at once, since the algebra and trigonometry behind A-Level and IB Physics overlap directly with their maths course."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are Private Physics Tutoring Sessions In Dubai Available Online Or In Person?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both. We run in-centre sessions at our two Dubai locations (DIFC and JLT), plus one-to-one online sessions for students across the wider UAE or with packed schedules. Online sessions use the same tutors and lesson structure as in-centre ones, with screen-sharing for working through problems, diagrams, and past paper questions. Most students searching for a physics tutor near me use both formats across the year."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Soon Should A Student Start Physics Tutoring Before Their Board Exams?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For IGCSE and A-Level Physics, three to six months of weekly sessions before the May/June series is the sensible window. IB Diploma students benefit most from starting early in DP1, since the Internal Assessment runs across the course. AP Physics students need at least four months before the May exams. Earlier starts let us spread problem-solving practice, practical work, and past papers across the full preparation arc."
                    }
                }
            ]
        },
        {
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://ignitetraininginstitute.com/"
            }, {
                "@type": "ListItem",
                "position": 2,
                "name": "Courses",
                "item": "https://ignitetraininginstitute.com/courses/"
            }, {
                "@type": "ListItem",
                "position": 3,
                "name": "Physics Tutor In Dubai",
                "item": "https://ignitetraininginstitute.com/physics-tutor-in-dubai/"
            }]
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
                title="Physics Tutors In Dubai For IB, IGCSE, A-Level, & AP"
                description="Excel with the best Physics tutors in Dubai, specializing in IB, IGCSE, A-Level, & AP. Build strong concepts & achieve top exam results"
                url="https://ignitetraininginstitute.com/physics-tutor-in-dubai" />
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
            <JsonLd schema={physicsTutorsSchema} />

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
                                alt="Physics Tutors Background"
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
                            <InfoCardLeft {...subjectPages.physics} />
                        <InfoCardForm formConfig={subjectFormConfigs.physics} />
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

                {/* <section data-scroll-section>
                    <PhysicsTutorsStudentAchievements />
                </section> */}

                <LazySection>
                    <section data-scroll-section>
                        <MarqueeBanner />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <PhysicsTutorsChooseApp />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <PhysicsTutorsACT />
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
                        <PhysicsTutorsIgniteAchievements />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <PhysicsTutorsUsps />
                    </section>
                </LazySection>

                {/* <section data-scroll-section>
                    <PhysicsTutorsLifeAtIgniteCarousel />
                </section> */}

                <LazySection>
                    <section data-scroll-section>
                        <PhysicsTutorsFAQSection {...faqSections.physics} />
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

export default PhysicsTutorsInDubai;