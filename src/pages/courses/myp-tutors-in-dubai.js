import Head from "next/head";
import JsonLd from "@/components/JsonLd";
import { mypCourseSchema } from "@/data/courseSchemas";
import SEO from "@/components/SEO";
import LazySection from "@/components/LazySection";
// import MovingBanner from '@/components/home/MovingBanner';
// import Testimonial from '@/components/home/Testimonial';
import dynamic from 'next/dynamic';

const Blog = dynamic(() => import('@/components/myp/Blog'));
const SubjectSupport = dynamic(() => import('@/components/myp/SubjectSupport'));
const FAQSection = dynamic(() => import('@/components/shared/FaqSection'));
import { faqSections } from '@/data/faqSections';
const IgniteAchievements = dynamic(() => import('@/components/myp/IgniteAchievements'));
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
const OurApproach = dynamic(() => import('@/components/myp/OurApproach'));
const WhatWeOfferSection = dynamic(() => import('@/components/myp/WhatWeOfferSection'));
const Trainers = dynamic(() => import('@/components/myp/Trainers'));
const MarqueeBanner = dynamic(() => import('@/components/shared/MarqueeBanner'));
const ReviewsSection = dynamic(() => import('@/components/myp/ReviewsSection'));
const SubjectsCard = dynamic(() => import('@/components/myp/SubjectCard'));
import OurPromise from '@/components/shared/OurPromise';
import { getOurPromiseData } from '@/data/ourPromiseConfig';
import { getMarqueeData } from "@/data/marqueeConfig";
import {
  getCourseGalleryData,
  getStartStepsData,
  getYearPlannerData,
} from "@/data/coursePageSectionsConfig";

const YearPlanner = dynamic(() => import('@/components/shared/YearPlanner'));
const CourseGallery = dynamic(() => import('@/components/shared/CourseGallery'));
const StartSteps = dynamic(() => import('@/components/shared/StartSteps'));


const pageUrl = "https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai";

const MYP = () => {

  // Removed redundant local Locomotive Scroll initialization to prevent conflict with _app.js global provider

  return (
    <>
      <SEO
        loadInnerStyles={true}
        title="MYP Tutors in Dubai | IB MYP Tutoring, Grades 6-10"
        description="Expert MYP tutors in Dubai for Grades 6 to 10. IB MYP tutoring one-to-one or in small groups, online or in person, with eAssessment prep. Book a free demo."
        url="https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai"
        preloadImages={[
          {
            src: "/assets/myp_bg_mobile.webp",
            type: "image/webp",
            media: "(max-width: 768px)"
          },
          {
            src: "/assets/myp_bg_main.webp",
            type: "image/webp",
            media: "(min-width: 769px)"
          }
        ]}
      />
      <Head>
        <link rel="stylesheet" href="/styles/Ibdp.css" />
      </Head>
      <JsonLd schema={mypCourseSchema} />


      <div className='overflow-hidden innerpage page-content-padding'>
        <section className="hero-section">
          <div className="hero-container">
            {/* LCP Image moved here for immediate painting (SSR) */}
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/myp_bg_mobile.webp" />
              <img
                src="/assets/myp_bg_main.webp"
                alt="MYP Tutors Background"
                fetchPriority="high"
                width="1200"
                height="800"
                className="hero-img"
                style={{ opacity: 1, visibility: 'visible' }}
              />
            </picture>

            <div className="row g-0 h-100">
              <InfoCardLeft {...subjectPages.myp} />
              <InfoCardForm formConfig={subjectFormConfigs.myp} />
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
            <YearPlanner config={getYearPlannerData('myp')} />
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
          <section data-scroll-section>
            <CourseGallery config={getCourseGalleryData('myp')} />
          </section>
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
            <OurPromise config={getOurPromiseData('myp')} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <StartSteps config={getStartStepsData('myp')} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <FAQSection {...faqSections.myp} />
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

export default MYP;
