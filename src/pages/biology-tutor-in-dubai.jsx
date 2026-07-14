import LazySection from "@/components/LazySection";
import Head from "next/head";
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/shared/MarqueeBanner';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
// import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/shared/Accordion';
import { accordionSections } from '@/data/accordionSections';
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
import BiologyTutorsChooseApp from '@/components/biology-tutoring/choose-app';
import BiologyTutorsSubjectSyllabus from '@/components/biology-tutoring/SubjectSyllabus';
import BiologyTutorsUsps from "@/components/biology-tutoring/Usps";
import Trainers from "@/components/biology-tutoring/Trainers";
import BiologyTutorsFAQSection from '@/components/shared/FaqSection';
import { faqSections } from '@/data/faqSections';
//comment
// Renamed main component: SubjectTutoring -> BiologyTutorsInDubai
const BiologyTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const biologyTutorsSchema = [
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Biology Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/biology-tutor-in-dubai/",
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
                "name": "Biology",
                "item": "https://ignitetraininginstitute.com/biology-tutor-in-dubai/"
            }]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Which Biology Courses Do Ignite's Biology Tutors In Dubai Cover?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite's Biology tutors in Dubai cover Cambridge IGCSE Biology (0610), GCSE Biology (AQA, OCR, Edexcel), Cambridge International AS and A-Level Biology (9700), UK A-Level Biology boards, IB Biology (SL and HL, plus MYP Sciences), and AP Biology from the College Board. Most students join us between Year 7 and Year 13, or Grades 11 to 12. Tutoring is matched to the exact board and level your school follows."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What Modifications Were Made to the Updated IB Biology Syllabus (First Examinations 2025)?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The IB Biology course was significantly redesigned, with first exams in May 2025. Content is now organised around four themes (Unity and Diversity, Form and Function, Interaction and Interdependence, Continuity and Change) rather than numbered topics. Paper 3 has been removed, so students now sit only Paper 1 and Paper 2. The optional topics were folded into the core, and the Internal Assessment remains worth 20%."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Do Ignite's Tutors Support The IB Biology Internal Assessment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The IB Biology Internal Assessment is an individual investigation worth 20% of the final grade, completed in around 10 hours of class time. Our tutors support students through choosing a focused research question, designing a valid method, processing data, and writing the analysis and evaluation against the IB criteria. The most common mark loss is a research question that's too broad, so we narrow it early before any data is collected."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are Private Biology Tutoring Sessions In Dubai Available Online Or In Person?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both. We run in-centre sessions at our two Dubai locations (DIFC and JLT), plus one-to-one online sessions for students across the wider UAE or with packed schedules. Online sessions use the same tutors and lesson structure as in-centre ones, with screen-sharing for diagrams, data questions, and past paper review. Most students searching for a biology tutor near me use both formats across the year, switching to online during heavy exam weeks."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Which Biology Topics Do Students Most Often Need Help With?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The topics students struggle with most are genetics and inheritance, cell biology and biochemistry, human physiology, and ecology. Genetics tends to cause problems because it combines abstract concepts with problem-solving, while physiology has a heavy volume of interlinked detail. There are also numerous requests for assistance with questions related to data analysis and graph interpretation, which now hold considerable importance in IB, IGCSE, A-Level, and AP examinations."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Soon Should A Student Start Biology Tutoring Before Their Board Exams?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For IGCSE and A-Level Biology, three to six months of weekly sessions before the May/June series is the sensible window. IB Diploma students benefit most from starting early in DP1, since the Internal Assessment investigation runs across the course. AP Biology students need at least four months before the May AP exam window. Earlier starts let us spread practical work, past papers, and data-question practice across the full preparation arc."
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
                title="Biology Tutors In Dubai For IB, IGCSE, A-Level, & AP"
                description="Get expert Biology tutoring in Dubai from highly qualified tutors specializing in IB, IGCSE, A-Levels, & AP. Achieve confidence & academic excellence"
                url="https://ignitetraininginstitute.com/biology-tutor-in-dubai"
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
            <JsonLd schema={biologyTutorsSchema} />

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
                                alt="Biology Tutors Background"
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
                            <InfoCardLeft {...subjectPages.biology} />
                        <InfoCardForm formConfig={subjectFormConfigs.biology} />
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
                        <BiologyTutorsChooseApp />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <BiologyTutorsSubjectSyllabus />
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
                        <BiologyTutorsUsps />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <BiologyTutorsFAQSection {...faqSections.biology} />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <Accordion {...accordionSections.biology} />
                    </section>
                </LazySection>
            </div>
        </>
    );
};

export default BiologyTutorsInDubai;