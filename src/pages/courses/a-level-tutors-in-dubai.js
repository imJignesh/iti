import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
import LazySection from "@/components/LazySection"
// import MovingBanner from '@/components/home/MovingBanner';
// import Testimonial from '@/components/home/Testimonial';
import dynamic from 'next/dynamic';

const Blog = dynamic(() => import('@/components/a-level/Blog'));
const SubjectSupport = dynamic(() => import('@/components/a-level/SubjectSupport'));
const FAQSection = dynamic(() => import('@/components/shared/FaqSection'));
const IgniteAchievements = dynamic(() => import('@/components/a-level/IgniteAchievements'));
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
import { faqSections } from '@/data/faqSections';
import YearPlanner from '@/components/shared/YearPlanner';
import SubjectsCard from '@/components/a-level/SubjectCard';
import StartSteps from '@/components/shared/StartSteps';
const OurApproach = dynamic(() => import('@/components/a-level/OurApproach'));
const Trainers = dynamic(() => import('@/components/a-level/Trainers'));
const CourseGallery = dynamic(() => import('@/components/shared/CourseGallery'));
const WhatWeOfferSection = dynamic(() => import('@/components/a-level/WhatWeOfferSection'));
const MarqueeBanner = dynamic(() => import('@/components/shared/MarqueeBanner'));
const ReviewsSection = dynamic(() => import('@/components/a-level/ReviewsSection'));
import OurPromise from '@/components/shared/OurPromise';
import { getOurPromiseData } from '@/data/ourPromiseConfig';
import { getMarqueeData } from "@/data/marqueeConfig";
import {
  getCourseGalleryData,
  getStartStepsData,
  getYearPlannerData,
} from "@/data/coursePageSectionsConfig";
const UniImagesCard = dynamic(() => import('@/components/a-level/universityCrad'));

// Page schema: WebPage + BreadcrumbList + Course + FAQPage.
// Title and description match the page's own meta tags; the FAQ comes from the same data the page shows (faqSections.aLevel),
// so the schema always matches the visible FAQs. Organization and branches come from the sitewide block (_app.js).
const aLevelSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai#webpage",
      "url": "https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai",
      "name": "Best A-Level Tutors In Dubai | Leading Coaching Institute",
      "description": "Empower your academic journey with expert A-level tutors in Dubai. Personalized tutoring for Mathematics, Sciences, Business, & more to excel in your exams",
      "isPartOf": { "@id": "https://ignitetraininginstitute.com/#website" },
      "about": { "@id": "https://ignitetraininginstitute.com/#organization" },
      "breadcrumb": { "@id": "https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai#breadcrumb" },
      "inLanguage": "en",
      "mainEntity": { "@id": "https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai#course" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ignitetraininginstitute.com/" },
        { "@type": "ListItem", "position": 2, "name": "Courses", "item": "https://ignitetraininginstitute.com/courses" },
        { "@type": "ListItem", "position": 3, "name": "A Level Tutors in Dubai", "item": "https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai" }
      ]
    },
    {
      "@type": "Course",
      "@id": "https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai#course",
      "name": "AS and A-Level Tutoring in Dubai",
      "description": "Expert AS and A-Level tutoring in Dubai for Year 12 and Year 13 students across the main exam boards: Edexcel (IAL and GCE), Cambridge (CAIE) and Oxford International AQA. Focused exam preparation in one-to-one or small-group classes, online or in person at our Sheikh Zayed Road and JLT centres.",
      "url": "https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai",
      "image": "https://ignitetraininginstitute.com/assets/alevel_bg_main.webp",
      "provider": { "@id": "https://ignitetraininginstitute.com/#organization" },
      "educationalLevel": "Year 12 and Year 13 (AS and A-Level)",
      "educationalCredentialAwarded": "AS and A-Level Qualification",
      "inLanguage": "en",
      "teaches": [
        "A-Level Pure Mathematics",
        "A-Level Statistics",
        "A-Level Further Mathematics",
        "A-Level Physics",
        "A-Level Chemistry",
        "A-Level Biology",
        "A-Level Computer Science",
        "A-Level Economics",
        "A-Level Business Studies",
        "A-Level Accounting",
        "A-Level English Language and Literature",
        "A-Level French",
        "A-Level Spanish",
        "A-Level Psychology",
        "AS Level Environmental Management (EVM)"
      ],
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
      "@id": "https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai#faq",
      "mainEntity": faqSections.aLevel.faqData.map(({ question, answer, schemaAnswer }) => ({
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

// 1. ACCEPT the headerHeight prop
const ALEVEL = ({ headerHeight }) => {


  return (
    <>
      <SEO
                loadInnerStyles={true}
        title="Best A-Level Tutors In Dubai | Leading Coaching Institute"
        description="Empower your academic journey with expert A-level tutors in Dubai. Personalized tutoring for Mathematics, Sciences, Business, & more to excel in your exams"
        url="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai"
        preloadImages={[
          {
            src: "/assets/alevel.webp",
            type: "image/webp",
            media: "(max-width: 768px)"
          },
          {
            src: "/assets/alevel_bg_main.webp",
            type: "image/webp",
            media: "(min-width: 769px)"
          }
        ]}
      />


      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={aLevelSchema} />

      {/* 3. APPLY the style for paddingTop */}
      <div
        className='overflow-hidden innerpage page-content-padding'
      >
        <section className="hero-section">
          <div className="hero-container">
            {/* LCP Image moved here for immediate painting (SSR) */}
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/alevel.webp" />
              <img
                src="/assets/alevel_bg_main.webp"
                alt="A Level Tutors Background"
                fetchPriority="high"
                width="1200"
                height="800"
                className="hero-img"
                style={{ opacity: 1, visibility: 'visible' }}
              />
            </picture>

            <div className="row g-0 h-100">
              <InfoCardLeft {...subjectPages.aLevel} />
              <InfoCardForm formConfig={subjectFormConfigs.aLevel} />
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
            <UniImagesCard />
          </section>
        </LazySection>

        {/* <section data-scroll-section>
            <StudentAchievements />
          </section> */}

        <LazySection>
          <section data-scroll-section>
            <YearPlanner config={getYearPlannerData('aLevel')} />
          </section>
        </LazySection>

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
          <CourseGallery config={getCourseGalleryData('aLevel')} />
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
            <OurPromise config={getOurPromiseData('aLevel')} />
          </section>
        </LazySection>

        {/* <section data-scroll-section>
            <LifeAtIgniteCarousel />
          </section> */}

        <LazySection>
          <section data-scroll-section>
            <StartSteps config={getStartStepsData('aLevel')} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <FAQSection {...faqSections.aLevel} />
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

export default ALEVEL;
