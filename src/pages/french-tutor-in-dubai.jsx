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
import FrenchTutorsChooseApp from '@/components/french-tutoring/choose-app';
import FrenchTutorsSubjectSyllabus from '@/components/french-tutoring/SubjectSyllabus';
import FrenchTutorsUsps from "@/components/french-tutoring/Usps";
import Trainers from "@/components/french-tutoring/Trainers";
import FrenchTutorsIgniteAchievements from '@/components/french-tutoring/IgniteAchievements';
import FrenchTutorsFAQSection from '@/components/shared/FaqSection';
import { faqSections } from '@/data/faqSections';
//comment
// Renamed main component: SubjectTutoring -> FrenchTutorsInDubai
const FrenchTutorsInDubai = ({ headerHeight }) => {

    // ----------------------------------------------------
    // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const frenchTutorsSchema = [
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Which French Courses Do Ignite's French Tutors In Dubai Cover?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ignite's French tutors in Dubai cover Cambridge IGCSE French (0520) and Pearson Edexcel International GCSE French (4FR1), Cambridge International AS and A-Level French, UK A-Level boards including AQA (7652) and Edexcel, the IB Diploma Programme (French Ab Initio, French B SL and HL, plus MYP French Phases 1 to 6), and the College Board's AP French Language and Culture. Tutoring is matched to the exact board your school follows."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What Is The Difference Between IB French Ab Initio And French B?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "These two courses exist because IB students arrive with very different levels of French. French Ab Initio (SL only) is for genuine beginners with little or no prior French exposure. French B (SL and HL) is for students who have studied French for several years and can already handle intermediate texts and conversations. The school's IB coordinator confirms which one is right based on prior study, since the assessments are completely different."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Are Ignite's French Tutors Native Speakers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We have both native French speakers and highly proficient non-native tutors on the team, and the right match depends on what a student is preparing for. Native speakers are usually the strongest fit for speaking exams and pronunciation work. Non-native tutors who have themselves passed through the IB, A-Level, or AP system often explain grammar more methodically and understand exam technique. We match the tutor to the exam and the student's current level."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do You Offer Online French Tutoring As Well As In-Person In Dubai?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Both. We run in-person sessions at our two Dubai centres (DIFC and JLT) and one-to-one online French tutoring for students across the wider UAE or with packed schedules. Virtual sessions employ the same instructors and framework as in-person sessions, utilizing screen-sharing to facilitate text analysis, spoken practice, and review of previous examination questions. Most students searching for a French tutor near me end up using both formats across the year."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Are Speaking And Listening Skills Prepared For French Exams?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Speaking and listening are usually the highest-anxiety components for UAE students. For speaking, sessions include structured practice on the exam topic list and timed mock orals matched to the real format (IB Individual Oral, IGCSE speaking test, A-Level oral, AP interpersonal and presentational speaking). For listening, we use past paper audio from each board so students get used to the accent variations, speed, and question types they will actually face."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How Soon Before Exams Should A Student Start French Tutoring?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "For IGCSE and GCSE French, three to six months of weekly sessions before the May/June series is the sensible window. IB Diploma students benefit from starting early in DP1, since the Individual Oral is assessed before the final exam year. AP French students need at least four months before the May exam window. Earlier starts let us spread oral practice, listening exercises, and past papers across the full preparation arc."
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
                    "name": "French Tutors In Dubai",
                    "item": "https://ignitetraininginstitute.com/french-tutor-in-dubai"
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "Course",
            "@id": "https://ignitetraininginstitute.com/french-tutor-in-dubai",
            "name": "French Tutoring in Dubai",
            "description": "French tutoring in Dubai for IB, IGCSE, A-Level, and AP students. Sessions build reading, writing, listening, and speaking skills, with support for grammar, vocabulary, comprehension, and exam preparation. Delivered online and in-person across Dubai, including DIFC and JLT.",
            "url": "https://ignitetraininginstitute.com/french-tutor-in-dubai",
            "image": "https://ignitetraininginstitute.com/assets/subject-tutoring.webp",
            "educationalCredentialAwarded": "IB, IGCSE/GCSE, A-Level, and AP French Qualification",
            "inLanguage": "en",
            "teaches": [
                "IB French (MYP)",
                "IB French (IBDP, SL/HL)",
                "IGCSE / GCSE French",
                "A-Level French",
                "AP French"
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
                "audienceType": "High School Students"
            },
            "hasCourseInstance": [
                {
                    "@type": "CourseInstance",
                    "name": "IB French (MYP)",
                    "description": "French tutoring aligned to the IB Middle Years Programme, covering reading, writing, listening, and speaking.",
                    "courseMode": ["Onsite", "Online"]
                },
                {
                    "@type": "CourseInstance",
                    "name": "IB French (IBDP)",
                    "description": "French support for the IB Diploma Programme at SL and HL, including internal assessments, oral exams, and writing tasks.",
                    "courseMode": ["Onsite", "Online"]
                },
                {
                    "@type": "CourseInstance",
                    "name": "IGCSE / GCSE French",
                    "description": "French tutoring for IGCSE and GCSE students, with past paper practice and exam strategy support.",
                    "courseMode": ["Onsite", "Online"]
                },
                {
                    "@type": "CourseInstance",
                    "name": "A-Level French",
                    "description": "French tutoring for A-Level students, covering grammar, vocabulary, comprehension, and timed exam responses.",
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
                loadInnerStyles={true}
                title="Best French Tutors In Dubai - IB, IGCSE, & A-Level Support"
                description="Unlock efficiency in the French language with Ignite's French tutors in Dubai. We specialize - IB, IGCSE, & A-Levels & offer advanced support"
                url="https://ignitetraininginstitute.com/french-tutor-in-dubai"
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
            <JsonLd schema={frenchTutorsSchema} />

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
                                alt="French Tutors Background"
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
                            <InfoCardLeft {...subjectPages.french} />
                        <InfoCardForm formConfig={subjectFormConfigs.french} />
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
                        <FrenchTutorsChooseApp />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <FrenchTutorsSubjectSyllabus />
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
                        <FrenchTutorsIgniteAchievements />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <FrenchTutorsUsps />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <FrenchTutorsFAQSection {...faqSections.french} />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <Accordion {...accordionSections.french} />
                    </section>
                </LazySection>
            </div>
        </>
    );
};

export default FrenchTutorsInDubai;