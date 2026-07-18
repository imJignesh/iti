import LazySection from "@/components/LazySection";
import dynamic from "next/dynamic";
import Head from "next/head";
// 1. Import the reusable schema component
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
// Assuming shared components are kept in their original path
const MarqueeBanner = dynamic(() => import('@/components/shared/MarqueeBanner'));
import { getMarqueeData } from '@/data/marqueeConfig';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
// import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/shared/Accordion';
import { accordionSections } from '@/data/accordionSections';
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
import ChemistryTutorsChooseApp from '@/components/chemistry-tutoring/choose-app';
import ChemistryTutorsSubjectSyllabus from '@/components/chemistry-tutoring/SubjectSyllabus';
import ChemistryTutorsUsps from "@/components/chemistry-tutoring/Usps";
const Trainers = dynamic(() => import("@/components/chemistry-tutoring/Trainers"));
import ChemistryTutorsIgniteAchievements from '@/components/chemistry-tutoring/IgniteAchievements';
import ChemistryTutorsFAQSection from '@/components/shared/FaqSection';
import { faqSections } from '@/data/faqSections';
//comment
// Renamed main component: SubjectTutoring -> ChemistryTutorsInDubai
const ChemistryTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const chemistryTutorsSchema = [
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Chemistry Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/chemistry-tutor-in-dubai/",
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
                "name": "Chemistry Tutor In Dubai",
                "item": "https://ignitetraininginstitute.com/chemistry-tutor-in-dubai/"
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Which Chemistry Courses And Boards Do Ignite's Tutors Cover?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite's Chemistry tutors in Dubai cover Cambridge IGCSE Chemistry (0620, and the 9-1 graded 0971), GCSE Chemistry (AQA, OCR, Edexcel), Cambridge International AS and A-Level Chemistry (9701), IB Chemistry (SL and HL, plus MYP Sciences), and AP Chemistry from the College Board. Tutoring is matched to the exact board and level your school follows, since paper structures and mark schemes differ across them."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What Changed In The New IB Chemistry Syllabus (First Exams 2025)?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The IB Chemistry curriculum has been restructured based on two central themes, Structure and Reactivity, superseding the previous eleven-topic framework. The four option topics (Materials, Biochemistry, Energy, Medicinal Chemistry) were removed, with some content folded into the core. The standalone Paper 3 was removed and its data-analysis element absorbed into Paper 1B. Calculators are now allowed on all papers, and the Internal Assessment remains worth 20%."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Do Ignite's Tutors Support The IB Chemistry Internal Assessment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The IB Chemistry Internal Assessment is a scientific investigation worth 20% of the final grade, with a 3,000-word limit. Our tutors help students choose a focused research question, design a safe and valid method, process and graph data correctly, and write the analysis and evaluation against the IB criteria. The most common mark loss is a research question that's too broad or a method that can't produce meaningful data, so we settle both early."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do Sessions Cover Organic, Inorganic, And Physical Chemistry Separately?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Chemistry splits into three branches, and most students are stronger in some than others. Physical chemistry (moles, energetics, equilibrium, kinetics) is where calculation-heavy marks are won or lost. Organic chemistry rewards pattern recognition across reaction mechanisms. Inorganic chemistry covers periodicity, bonding, and the behaviour of elements and compounds. We diagnose which branch is costing marks and weight sessions accordingly rather than teaching all three at one pace."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are Private Chemistry Tutoring Sessions In Dubai Available Online Or In Person?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both. We run in-centre sessions at our two Dubai locations (DIFC and JLT), plus one-to-one online sessions for students across the wider UAE or with packed schedules. Online sessions use the same tutors and lesson structure as in-centre ones, with screen-sharing for working through calculations, mechanisms, and past paper questions. Most students searching for a chemistry tutor near me use both formats across the year."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Soon Should A Student Start Chemistry Tutoring Before Their Board Exams?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For IGCSE and A-Level Chemistry, three to six months of weekly sessions before the May/June series is the sensible window. IB Diploma students benefit most from starting early in DP1, since the Internal Assessment runs across the course. AP Chemistry students need at least four months before the May exam. Earlier starts let us spread calculation practice, mechanism work, and past papers across the full preparation arc."
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
                title="Chemistry Tutors In Dubai - IB, IGCSE, A-Level, & AP"
                description="Learn with Chemistry tutors in Dubai, offering expertise in IB, IGCSE, A-Level, & AP. Elevate your exam performance with 1K+ curated study resources"
                url="https://ignitetraininginstitute.com/chemistry-tutor-in-dubai" />
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
            <JsonLd schema={chemistryTutorsSchema} />

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
                                alt="Chemistry Tutors Background"
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
                            <InfoCardLeft {...subjectPages.chemistry} />
                        <InfoCardForm formConfig={subjectFormConfigs.chemistry} />
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
                        <ChemistryTutorsChooseApp />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <ChemistryTutorsSubjectSyllabus />
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
                        <ChemistryTutorsIgniteAchievements />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <ChemistryTutorsUsps />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <ChemistryTutorsFAQSection {...faqSections.chemistry} />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <Accordion {...accordionSections.chemistry} />
                    </section>
                </LazySection>
            </div>
        </>
    );
};

export default ChemistryTutorsInDubai;