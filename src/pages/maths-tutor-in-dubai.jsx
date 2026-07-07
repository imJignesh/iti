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
import Accordion from '@/components/shared/Accordion';
import { accordionSections } from '@/data/accordionSections';
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
import MathsTutorsChooseApp from '@/components/maths-tutoring/choose-app';
import MathsTutorsACT from '@/components/maths-tutoring/ACT';
import MathsTutorsUsps from "@/components/maths-tutoring/Usps";
import Trainers from "@/components/maths-tutoring/Trainers";
import MathsTutorsIgniteAchievements from '@/components/maths-tutoring/IgniteAchievements';
import MathsTutorsFAQSection from '@/components/shared/FaqSection';
import { faqSections } from '@/data/faqSections';
//comment
// Renamed main component: SubjectTutoring -> MathsTutorsInDubai
const MathsTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const mathsTutorsSchema = [
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Maths Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/maths-tutor-in-dubai/",
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
                "name": "Maths Tutor In Dubai",
                "item": "https://ignitetraininginstitute.com/maths-tutor-in-dubai/"
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Which Maths Courses And Boards Do Ignite's Tutors Cover?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite's maths tutors in Dubai cover Cambridge IGCSE Maths (0580) and Edexcel International (4MA1) at Core and Extended, plus Additional Maths (0606), Cambridge International AS and A-Level Maths (9709), Edexcel IAL, AQA and OCR A-Level, IB Maths (both Analysis and Approaches and Applications and Interpretation, at SL and HL), and the AP maths courses. Tutoring is matched to the exact board and level your school follows."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What Is The Difference Between IB Maths AA And AI, And Which Should I Choose?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "IB Maths splits into two routes. Analysis and Approaches (AA) is the traditional, pure-maths-heavy course built around algebra, calculus, and proof, and it suits engineering, physics, and mathematics degrees. Applications and Interpretation (AI) is the applied, statistics-and-modelling course for fields like business, design, and social sciences. Both run at SL and HL. The right choice depends on the degree a student is aiming for, which is exactly what we help families work out."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do You Offer Online Maths Tutoring As Well As In-Person In Dubai?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both. We run in-person sessions at our two Dubai centres (DIFC and JLT) and one-to-one online maths tutoring for students across the wider UAE or with packed schedules. Online sessions use the same tutors and structure as in-centre ones, with a shared whiteboard for working through problems, graphs, and past paper questions step by step. Most students searching for a maths tutor near me end up using both formats across the year."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can One Tutor Cover Both Maths And Physics?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, and many families ask for exactly this. The algebra, trigonometry, and calculus behind A-Level and IB Physics are the same skills students build in their maths course, so a tutor who teaches both can fix the root cause when physics marks are actually being lost on the maths. Several of our tutors specialise in Maths and Physics together, which suits students on STEM university pathways."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Are Private Maths Tutoring Sessions Structured?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Every new student starts with a diagnostic where the tutor works through recent class material and past paper attempts to find exactly where marks are being lost. Sessions are usually 60 minutes weekly during term, extending to 90-minute blocks during exam preparation. Each session combines targeted teaching, worked practice on the relevant topics, and past paper questions marked against the actual board mark scheme."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Soon Before Exams Should A Student Start Maths Tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For IGCSE and A-Level Maths, three to six months of weekly sessions before the May/June series is the sensible window. IB Diploma students benefit from starting early in DP1, since the Internal Assessment runs across the course. AP students need at least four months before the May exams. Earlier starts let us spread topic coverage, problem-solving practice, and past papers across the full preparation arc rather than cramming."
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
                title="Maths Tutors In Dubai - IB, IGCSE, A-Levels, & AP Support"
                description="Excel in Mathematics with expert Maths tutors in Dubai, specializing in IB, IGCSE, A-Levels & AP. Build strong concepts & achieve top exam results"
                url="https://ignitetraininginstitute.com/maths-tutor-in-dubai" />
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
            <JsonLd schema={mathsTutorsSchema} />

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
                                alt="Maths Tutors Background"
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
                            <InfoCardLeft {...subjectPages.maths} />
                        <InfoCardForm formConfig={subjectFormConfigs.maths} />
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
                        <MathsTutorsChooseApp />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <MathsTutorsACT />
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
                        <MathsTutorsIgniteAchievements />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <MathsTutorsUsps />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <MathsTutorsFAQSection {...faqSections.maths} />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <Accordion {...accordionSections.maths} />
                    </section>
                </LazySection>
            </div>
        </>
    );
};

export default MathsTutorsInDubai;