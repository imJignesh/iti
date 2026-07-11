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
import BusinessTutorsChooseApp from '@/components/business-tutoring/choose-app';
import BusinessTutorsACT from '@/components/business-tutoring/ACT';
import BusinessTutorsUsps from "@/components/business-tutoring/Usps";
import Trainers from "@/components/business-tutoring/Trainers";
import BusinessTutorsIgniteAchievements from '@/components/business-tutoring/IgniteAchievements';
import BusinessTutorsFAQSection from '@/components/shared/FaqSection';
import { faqSections } from '@/data/faqSections';
//comment
// Renamed main component: SubjectTutoring -> BusinessTutorsInDubai
const BusinessTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const businessTutorsSchema = [
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Ignite Training Institute - Business Studies Tutors In Dubai",
            "url": "https://ignitetraininginstitute.com/business-studies-tutor-in-dubai//",
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
                    "name": "Which Business Courses And Boards Do Ignite's Tutors Cover?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite's business tutors in Dubai cover Cambridge IGCSE Business Studies (0450, and the 9-1 graded 0986), Edexcel International GCSE Business, Cambridge International AS and A-Level Business (9609), UK A-Level Business boards, IB Business Management (SL and HL, and MYP), and the new AP Business with Personal Finance course. Tutoring is matched to the exact board and level your school follows, since the assessment style differs across them."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is IB Business Management The Same As Business Studies?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "They are closely related but not identically named. At IGCSE and A-Level, the subject is called Business Studies. In the IB Diploma, the same broad subject is officially called Business Management, and it sits in Group 3 (Individuals and Societies). The content overlaps heavily across marketing, finance, human resources, and operations, but the IB assessment structure and the case-study approach are distinct, which is why tutoring should be matched to the specific course."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is There An AP Business Course?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, and it is new. The College Board is launching AP Business with Personal Finance for the 2026 to 2027 school year as part of its AP Career Kickstart programme. The course covers entrepreneurship, marketing, finance, accounting, and management alongside personal finance, and it is built around real-world application and a business project rather than pure theory. Our AP tutors prepare students for this course and its project-based assessment."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do You Offer Online Business Studies Tutoring As Well As In-Person?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both. We run in-person sessions at our two Dubai centres (DIFC and JLT) and one-to-one online business studies tutoring for students across the wider UAE or with packed schedules. Online sessions use the same tutors and structure as in-centre ones, with screen-sharing for working through case studies, calculations, and past paper questions. Many students use a mix of both formats across the year."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Do Tutors Help With Business Case Studies And Exam Essays?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Business marks are won on application and evaluation, not memorised definitions. Our tutors teach students to read a case study quickly, apply theory to that specific business rather than in the abstract, and build the analysis-to-evaluation chains that higher-mark questions reward. We work through command words, essay structure, and the longer questions (such as the IGCSE high-mark evaluation question) where most marks are gained or lost."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Soon Before Exams Should A Student Start Business Tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For IGCSE and A-Level Business, three to six months of weekly sessions before the May/June series is the sensible window. IB Diploma students benefit from starting early, since the Internal Assessment research project runs across the course. Earlier starts let us spread case-study practice, quantitative finance work, and past papers across the full preparation arc rather than cramming theory at the end."
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
                "name": "Business Studies Tutors In Dubai",
                "item": "https://ignitetraininginstitute.com/business-studies-tutor-in-dubai/"
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
                title="Business Studies Tutors In Dubai - IB, IGCSE, & A-Level"
                description="Unlock exam success with Business Studies tutors in Dubai, catering to IB, IGCSE, & A-Level. Get personalized guidance to strengthen your concepts"
                url="https://ignitetraininginstitute.com/business-studies-tutor-in-dubai"
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
            <JsonLd schema={businessTutorsSchema} />

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
                                alt="Business Tutors Background"
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
                            <InfoCardLeft {...subjectPages.business} />
                        <InfoCardForm formConfig={subjectFormConfigs.business} />
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
                        <BusinessTutorsChooseApp />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <BusinessTutorsACT />
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
                        <BusinessTutorsIgniteAchievements />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <BusinessTutorsUsps />
                    </section>
                </LazySection>
                <LazySection>
                    <section data-scroll-section>
                        <BusinessTutorsFAQSection {...faqSections.business} />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <Accordion {...accordionSections.business} />
                    </section>
                </LazySection>
            </div>
        </>
    );
};

export default BusinessTutorsInDubai;