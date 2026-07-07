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
import EconomicsTutorsChooseApp from '@/components/economics-tutoring/choose-app';
import EconomicsTutorsACT from '@/components/economics-tutoring/ACT';
import EconomicsTutorsUsps from "@/components/economics-tutoring/Usps";
import Trainers from "@/components/economics-tutoring/Trainers";
import EconomicsTutorsIgniteAchievements from '@/components/economics-tutoring/IgniteAchievements';
import EconomicsTutorsFAQSection from '@/components/shared/FaqSection';
import { faqSections } from '@/data/faqSections';
//comment
// Renamed main component: SubjectTutoring -> EconomicsTutorsInDubai
const EconomicsTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const economicsTutorsSchema = [
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
                "name": "Economics Tutors In Dubai",
                "item": "https://ignitetraininginstitute.com/economics-tutor-in-dubai/"
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Which Economics Courses Do Ignite's Economics Tutors In Dubai Cover?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite's Economics tutors in Dubai cover Cambridge IGCSE Economics (0455), UK GCSE Economics (AQA, OCR, Edexcel), Cambridge International AS and A-Level Economics (9708), Pearson Edexcel A-Level Economics (9EC0), AQA A-Level Economics (7136), IB Economics (SL and HL), and both College Board AP courses: AP Microeconomics and AP Macroeconomics. Tutoring is matched to the exact board and level your school follows."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What's The Difference Between IB Economics SL And HL?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "IB Economics SL and HL share the same four units and both sit Paper 1 (extended-response essays) and Paper 2 (data-response). The key difference is Paper 3, which only HL students take. Paper 3 is a quantitative paper requiring calculations like price elasticity of demand (PED), cross elasticity (XED), price elasticity of supply (PES), and the multiplier. HL also covers topics in greater analytical depth. Both levels complete the Internal Assessment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What Is The DEED Framework And How Does It Help In IB Economics Essays?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DEED stands for Define, Explain, Example, Diagram. This is a framework for addressing extended-response questions in IB Economics Paper 1, which includes defining each key term, elucidating the economic reasoning, providing a real-world example, and an accurate diagram supports the analysis. Following DEED helps students hit the IB assessment criteria consistently and avoid the most common mark loss: writing strong explanations but forgetting diagrams or real-world application."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are Private Economics Tutoring Sessions In Dubai Available Online Or In Person?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both. We run in-centre sessions at our two Dubai locations (DIFC and JLT), plus one-to-one online sessions for students across the wider UAE or with packed schedules. Online sessions use the same tutors and lesson structure as in-centre ones. Most students searching for an economics tutor near me use both formats across the year, switching to online during heavy exam weeks."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Are Diagrams, Evaluation, And Data-Response Questions Practiced?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "These three skills separate top-band Economics students from the rest, so they're built into every session. Diagram work covers accurate drawing and labelling of supply and demand, cost curves, and market structure diagrams. Evaluation practice focuses on building balanced arguments that weigh multiple perspectives, assumptions, and real-world context. Data-response practice uses past paper extracts so students learn to interpret tables, calculate figures, and structure answers to the command word being asked."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Soon Should A Student Start Economics Tutoring Before Their Board Exams?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For IGCSE and A-Level Economics, three to six months of weekly sessions before the May/June series is the sensible window. IB Diploma students benefit most from starting early in DP1, since the Internal Assessment portfolio of three commentaries is built across both years. AP Microeconomics and AP Macroeconomics students need at least four months before the May AP exam window."
                    }
                }
            ]
        },
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Economics Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/economics-tutor-in-dubai/",
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
                title="Economics Tutors In Dubai For IB, IGCSE, A-Level, & AP"
                description="Boost your exam grades with the best Economics tutors in Dubai, specializing in IB, IGCSE, A-Levels, & AP. Get expert guidance now"
                url="https://ignitetraininginstitute.com/economics-tutor-in-dubai"
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
            <JsonLd schema={economicsTutorsSchema} />

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
                                alt="Economics Tutors Background"
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
                            <InfoCardLeft {...subjectPages.economics} />
                        <InfoCardForm formConfig={subjectFormConfigs.economics} />
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
                        <EconomicsTutorsChooseApp />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <EconomicsTutorsACT />
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
                        <EconomicsTutorsIgniteAchievements />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <EconomicsTutorsUsps />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <EconomicsTutorsFAQSection {...faqSections.economics} />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <Accordion {...accordionSections.economics} />
                    </section>
                </LazySection>
            </div>
        </>
    );
};

export default EconomicsTutorsInDubai;