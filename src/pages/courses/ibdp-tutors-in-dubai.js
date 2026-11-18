// import MovingBanner from '@/components/home/MovingBanner';
import LazySection from "@/components/LazySection";
import Head from "next/head";
// import Testimonial from '@/components/home/Testimonial';
import dynamic from 'next/dynamic';

const Blog = dynamic(() => import('@/components/ibdp/Blog'));
const SubjectSupport = dynamic(() => import('@/components/ibdp/SubjectSupport'));
const FAQSection = dynamic(() => import('@/components/shared/FaqSection'));
const IgniteAchievements = dynamic(() => import('@/components/ibdp/IgniteAchievements'));
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
import { faqSections } from '@/data/faqSections';
const OurApproach = dynamic(() => import('@/components/ibdp/OurApproach'));
const WhatWeOfferSection = dynamic(() => import('@/components/ibdp/WhatWeOfferSection'));
const Trainers = dynamic(() => import('@/components/ibdp/Trainers'));
const MarqueeBanner = dynamic(() => import('@/components/shared/MarqueeBanner'));
const ReviewsSection = dynamic(() => import('@/components/ibdp/ReviewsSection'));
const SubjectsCard = dynamic(() => import('@/components/ibdp/SubjectCard'));
const YearPlanner = dynamic(() => import('@/components/shared/YearPlanner'));
const StartSteps = dynamic(() => import('@/components/shared/StartSteps'));
const CourseGallery = dynamic(() => import('@/components/shared/CourseGallery'));
import OurPromise from '@/components/shared/OurPromise';
import { getOurPromiseData } from '@/data/ourPromiseConfig';
// Removed: { useEffect, useRef }
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { getMarqueeData } from "@/data/marqueeConfig";
import {
  getCourseGalleryData,
  getStartStepsData,
  getYearPlannerData,
} from "@/data/coursePageSectionsConfig";

const ibdpSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai#webpage",
      "url": "https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai",
      "name": "IBDP Tutors in Dubai | IB Diploma HL & SL Tutoring",
      "description": "Ignite Training Institute offers IBDP tutors in Dubai for students taking the IB Diploma Programme at HL and SL. Our IB tutors in Dubai cover Maths AA and AI, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, English, French and Spanish, and they guide students through the Internal Assessment, the Extended Essay and Theory of Knowledge. IB Diploma tutoring in Dubai is available one-to-one or in small groups of 3 to 6 students, online or in person at our Sheikh Zayed Road and JLT centres. Students can choose year-long support, a finals prep programme, a summer bridge course, spring revision or November resit preparation, and they can book a free demo class first.",
      "isPartOf": { "@id": "https://ignitetraininginstitute.com/#website" },
      "about": { "@id": "https://ignitetraininginstitute.com/#organization" },
      "breadcrumb": {
        "@id": "https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai#breadcrumb"
      },
      "inLanguage": "en",
      "mainEntity": {
        "@id": "https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai#course"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai#breadcrumb",
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
          "name": "Courses",
          "item": "https://ignitetraininginstitute.com/courses"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "IBDP Tutors in Dubai",
          "item": "https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai"
        }
      ]
    },
    {
      "@type": "Course",
      "@id": "https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai#course",
      "name": "IB Diploma Programme (IBDP) tutoring in Dubai",
      "description": "Our IBDP tutors in Dubai give IB Diploma students expert help at both HL and SL, including Maths AA and AI, Physics, Chemistry, Biology, Economics, Business and languages. IB tutors in Dubai also guide students through the Internal Assessment, the Extended Essay and Theory of Knowledge, without ever writing the work for them. IB Diploma tutoring in Dubai is available one-to-one or in small groups of 3 to 6 students, online or in person at our Sheikh Zayed Road and JLT centres. Programmes include year-long support, a summer bridge course, spring revision and November resit preparation. Book a free demo class to meet your IB tutor first.",
      "url": "https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai",
      "provider": { "@id": "https://ignitetraininginstitute.com/#organization" },
      "educationalLevel": "Years 12-13 (IB Diploma)",
      "teaches": "IB Diploma Programme",
      "inLanguage": "en",
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "courseMode": "Onsite",
          "location": [
            { "@id": "https://ignitetraininginstitute.com/#localbusiness-szr" },
            { "@id": "https://ignitetraininginstitute.com/#localbusiness-jlt" }
          ]
        },
        {
          "@type": "CourseInstance",
          "courseMode": "Online"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai#faq",
      "mainEntity": faqSections.ibdp.faqData.map(({ question, answer, schemaAnswer }) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": schemaAnswer || answer
        }
      }))
    }
  ]
};

// The local Locomotive Scroll initialization logic has been entirely removed.
const IBDP = ({ headerHeight }) => {

  return (
    <>
      <JsonLd schema={ibdpSchema} />
      <SEO
                loadInnerStyles={true}
        title="IBDP Tutors in Dubai | IB Diploma HL & SL Tutoring"
        description="Expert IBDP tutors in Dubai for HL and SL. IB Diploma tutoring one-to-one or in small groups, online or in person, with IA, EE and TOK help. Book a free demo."
        url="https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai"
        preloadImages={[
          {
            src: "/assets/ib-bg.webp",
            type: "image/webp",
            media: "(max-width: 768px)"
          },
          {
            src: "/assets/ibdp_bg_main.webp",
            type: "image/webp",
            media: "(min-width: 769px)"
          }
        ]}
      />
      <Head>
<link rel="stylesheet" href="/styles/Ibdp.css" />
      </Head>
      <div
        // Removed: ref={scrollRef}
        className='overflow-hidden innerpage page-content-padding'
      // Removed: data-scroll-container
      >
        <section className="hero-section">
          <div className="hero-container">
            {/* LCP Image moved here for immediate painting (SSR) */}
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/ib-bg.webp" />
              <img
                src="/assets/ibdp_bg_main.webp"
                alt="IBDP Tutors Background"
                fetchPriority="high"
                width="1200"
                height="800"
                className="hero-img"
                style={{ opacity: 1, visibility: 'visible' }}
              />
            </picture>

            {/* Interactive Content */}
            <div className="row g-0 h-100">
              <InfoCardLeft {...subjectPages.ibdp} />
              <InfoCardForm formConfig={subjectFormConfigs.ibdp} />
            </div>
          </div>

        </section>

        <LazySection>
          <section data-scroll-section>
            <OurApproach />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <YearPlanner config={getYearPlannerData('ibdp')} />
          </section>
        </LazySection>

        {/* <section data-scroll-section>
        <StudentAchievements />
      </section> */}

        <LazySection>
          <section data-scroll-section>
            <SubjectSupport />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <SubjectsCard />
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
          <CourseGallery config={getCourseGalleryData('ibdp')} />
        </LazySection>

        {/* what we offer Start */}
        <LazySection>
          <WhatWeOfferSection />
        </LazySection>


        {/* What We Offer End */}

        <LazySection>
          <section data-scroll-section>
            <IgniteAchievements />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <MarqueeBanner config={getMarqueeData('standard')} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <OurPromise config={getOurPromiseData('ibdp')} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <StartSteps config={getStartStepsData('ibdp')} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <FAQSection {...faqSections.ibdp} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Blog />
          </section>
        </LazySection>
      </div>
    </>
  );
};

export default IBDP;
