import LazySection from "@/components/LazySection";
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
import PsychologyTutorsChooseApp from '@/components/psychology-tutoring/choose-app';
import PsychologyTutorsSubjectSyllabus from '@/components/psychology-tutoring/SubjectSyllabus';
import PsychologyTutorsUsps from "@/components/psychology-tutoring/Usps";
import PsychologyTutorsIgniteAchievements from '@/components/psychology-tutoring/IgniteAchievements';
import PsychologyTutorsFAQSection from '@/components/shared/FaqSection';
import { faqSections } from '@/data/faqSections';
//comment
// Renamed main component: SubjectTutoring -> PsychologyTutorsInDubai
const PsychologyTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const psychologyTutorsSchema = [
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
                "name": "Psychology Tutors In Dubai",
                "item": "https://ignitetraininginstitute.com/psychology-tutor-in-dubai/"
            }]
        },
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Psychology Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/psychology-tutor-in-dubai/",
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
                    "name": "Which Psychology Courses And Boards Do Ignite's Tutors Cover?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite's psychology tutors in Dubai cover IB Psychology (SL and HL, both the current and the new syllabus), Cambridge IGCSE Psychology (0266, first exams 2027), UK GCSE Psychology (AQA, OCR, Pearson Edexcel), Cambridge International AS and A-Level Psychology (9990), UK A-Level Psychology boards including AQA, and AP Psychology under its 2025 redesigned framework. Tutoring is matched to the exact board and exam session your student is preparing for."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What Is Changing In IB Psychology, And Which Syllabus Is My Student On?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "May 2026 is the last exam session of the current IB Psychology syllabus. Students who started the Diploma in August 2025 are on the redesigned course, with first assessment in May 2027. The new course has substantial changes to how research methods and the Internal Assessment are assessed. We tutor both cohorts, since the right approach is very different depending on which syllabus a student is sitting."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What Changed In AP Psychology With The 2025 Redesign?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The College Board redesigned AP Psychology from May 2025. The course moved from nine units to five (the APA five pillars: biological, cognitive, developmental, social, and mental and physical health), the exam went fully digital via Bluebook, and the multiple-choice section was reduced to 75 questions with four answer choices each. Two new free-response question types replaced the previous format: the Article Analysis Question and the Evidence-Based Question."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is There An IGCSE Psychology Course?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, and it is new. Cambridge launched Cambridge IGCSE Psychology (0266) with first examinations from 2027, so students are studying it now ahead of those sittings. For UK GCSE Psychology, AQA, OCR, and Pearson Edexcel all offer a specification, taken by students in British curriculum schools. We tutor across all of these. If your school doesn't offer Psychology before A-Level, we also support students who want to learn the subject ahead of selecting it."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do You Offer Online Psychology Tutoring As Well As In-Person?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both. We run in-person sessions at our two Dubai centres (DIFC and JLT) and one-to-one online psychology tutoring for students across the wider UAE or with packed schedules. Online sessions use the same tutors and structure as in-centre ones, with screen-sharing for working through case studies, essay plans, and past paper questions. Many students searching for a psychology tutor near me end up using both formats across the year."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Soon Before Exams Should A Student Start Psychology Tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For IGCSE, GCSE, and A-Level Psychology, three to six months of weekly sessions before the May/June series is the sensible window. IB Diploma students benefit from starting early in DP1, since the Internal Assessment runs across the course. AP students need at least four months before the May digital exam. Earlier starts let us spread study learning, essay practice, and past papers across the full preparation arc."
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
                title="Psychology Tutors In Dubai - IGCSE, A-Level, & AP Support"
                description="Find expert Psychology tutors in Dubai for IGCSE, A-Level, & AP. We offer personalized tutoring, exam preparation support to help students excel"
                url="https://ignitetraininginstitute.com/psychology-tutor-in-dubai"
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
            <JsonLd schema={psychologyTutorsSchema} />

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
                                alt="Psychology Tutors Background"
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
                            <InfoCardLeft {...subjectPages.psychology} />
                        <InfoCardForm formConfig={subjectFormConfigs.psychology} />
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
                        <PsychologyTutorsChooseApp />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <PsychologyTutorsSubjectSyllabus />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <ReviewsSection />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <PsychologyTutorsIgniteAchievements />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <PsychologyTutorsUsps />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <PsychologyTutorsFAQSection {...faqSections.psychology} />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <Accordion {...accordionSections.psychology} />
                    </section>
                </LazySection>
            </div>
        </>
    );
};

export default PsychologyTutorsInDubai;