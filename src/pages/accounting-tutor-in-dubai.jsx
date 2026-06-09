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
import Accordion from '@/components/accounting-tutoring/accordian';
import AccountingTutorsInfoCard from '@/components/accounting-tutoring/infoCard';
import AccountingTutorsChooseApp from '@/components/accounting-tutoring/choose-app';
import AccountingTutorsACT from '@/components/accounting-tutoring/ACT';
import AccountingTutorsUsps from "@/components/accounting-tutoring/Usps";
import Trainers from "@/components/accounting-tutoring/Trainers";
import AccountingTutorsIgniteAchievements from '@/components/accounting-tutoring/IgniteAchievements';
import AccountingTutorsLifeAtIgniteCarousel from '@/components/accounting-tutoring/LifeAtIgniteCarousel';
import AccountingTutorsFAQSection from '@/components/accounting-tutoring/FaqSection';
import AccountingTutorsStudentAchievements from '@/components/accounting-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> AccountingTutorsInDubai
const AccountingTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const accountingTutorsSchema = [
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
                "name": "Accounting Tutors In Dubai",
                "item": "https://ignitetraininginstitute.com/accounting-tutor-in-dubai/"
            }]
        },
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Accounting Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/accounting-tutor-in-dubai/",
            "logo": "https://ignitetraininginstitute.com/wp-content/uploads/2023/02/ignitefinallogos_1.svg",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "63",
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
                    "name": "Which Accounting Courses And Boards Do Ignite's Tutors Cover?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite's accounting tutors in Dubai cover Cambridge IGCSE Accounting (0452, and the 9-1 graded 0985), Edexcel International GCSE Accounting, Cambridge International AS and A-Level Accounting (9706), and Edexcel International A Level Accounting (WAC11 and WAC12). We also support IB Diploma students with the Finance and Accounts unit of Business Management, and accounting fundamentals within the new AP Business with Personal Finance course launching in 2026."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does The IB Diploma Offer A Standalone Accounting Course?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No, it does not. IB Group 3 (Individuals and Societies) has ten subjects, and Accounting is not one of them. Accounting content sits inside IB Business Management as Unit 3 (Finance and Accounts), covering final accounts, ratio analysis, cash flow, sources of finance, and investment appraisal. Many IB students still need tutoring on this material, which we provide as Business Management support rather than a separate IB Accounting course."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is There An AP Accounting Course?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "There is no standalone AP Accounting course either. The closest fit is the new AP Business with Personal Finance, launching nationally for the 2026 to 2027 school year as part of AP Career Kickstart, which covers accounting as one of five core disciplines alongside entrepreneurship, marketing, finance, and management. Our AP tutors support students on the accounting content within that course, including financial statements and basic analysis."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do You Offer Online Accounting Tutoring As Well As In-Person?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both. We run in-person sessions at our two Dubai centres (DIFC and JLT) and one-to-one online accounting tutoring for students across the wider UAE or with packed schedules. Online sessions use the same tutors and structure as in-centre ones, with screen-sharing for working through ledger entries, trial balances, and full statements line by line. Many students searching for an accounting tutor near me end up using both formats across the year."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Do Tutors Help With The Calculation-Heavy Parts Of Accounting?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Accounting marks are won on accuracy and presentation, not just final answers. Our tutors drill the double-entry logic first, since most calculation errors trace back to a misapplied debit or credit. We then build the format discipline that mark schemes reward: correct headings, dates, narrations, and balance carrying-forward. Past paper questions are marked against the actual board mark scheme so students see exactly where method marks are being lost."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Soon Before Exams Should A Student Start Accounting Tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For IGCSE and A-Level Accounting, three to six months of weekly sessions before the May/June series is the sensible window. Accounting is cumulative, so foundation gaps from earlier in the course quietly break later topics, which is why earlier starts work better. Students taking the IB Business Management Finance and Accounts unit benefit from starting at the beginning of DP1, since the material carries through to the Internal Assessment."
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
                title="Accounting Tutors In Dubai - IGCSE & A-Level Support"
                description="Learn with accounting tutors in Dubai, specializing in IGCSE & A-Level. Benefit from personalized support, structured learning plans, & study resources"
                url="https://ignitetraininginstitute.com/accounting-tutor-in-dubai"
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
            <JsonLd schema={accountingTutorsSchema} />

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
                                alt="Accounting Tutors Background"
                                fetchPriority="high"
                                decoding="sync"
                                width="1200"
                                height="800"
                                className="hero-img"
                                style={{ opacity: 1, visibility: 'visible' }}
                            />
                        </picture>

                        {/* Interactive Content */}
                        <AccountingTutorsInfoCard />
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
                    <AccountingTutorsStudentAchievements />
                </section> */}

                <LazySection>
                    <section data-scroll-section>
                        <MarqueeBanner />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <AccountingTutorsChooseApp />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <AccountingTutorsACT />
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
                        <AccountingTutorsIgniteAchievements />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <AccountingTutorsUsps />
                    </section>
                </LazySection>

                {/* <section data-scroll-section>
                    <AccountingTutorsLifeAtIgniteCarousel />
                </section> */}

                <LazySection>
                    <section data-scroll-section>
                        <AccountingTutorsFAQSection />
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

export default AccountingTutorsInDubai;