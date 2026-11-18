import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
import LazySection from "@/components/LazySection";
import dynamic from 'next/dynamic';

const Blog = dynamic(() => import('@/components/igcse/Blog'));
const SubjectSupport = dynamic(() => import('@/components/igcse/SubjectSupport'));
const FAQSection = dynamic(() => import('@/components/shared/FaqSection'));
import { faqSections } from '@/data/faqSections';
const IgniteAchievements = dynamic(() => import('@/components/igcse/IgniteAchievements'));
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
const OurApproach = dynamic(() => import('@/components/igcse/OurApproach'));
const Trainers = dynamic(() => import('@/components/igcse/Trainers'));
const WhatWeOfferSection = dynamic(() => import('@/components/igcse/WhatWeOfferSection'));
const MarqueeBanner = dynamic(() => import('@/components/shared/MarqueeBanner'));
const ReviewsSection = dynamic(() => import('@/components/igcse/ReviewsSection'));
const SubjectsCard = dynamic(() => import('@/components/igcse/SubjectCard'));
import OurPromise from '@/components/shared/OurPromise';
import { getOurPromiseData } from '@/data/ourPromiseConfig';
import { getMarqueeData } from "@/data/marqueeConfig";
const UniImagesCard = dynamic(() => import('@/components/igcse/universityCrad'));
const YearPlanner = dynamic(() => import('@/components/shared/YearPlanner'));
const StartSteps = dynamic(() => import('@/components/shared/StartSteps'));
const CourseGallery = dynamic(() => import('@/components/shared/CourseGallery'));
import {
  getCourseGalleryData,
  getStartStepsData,
  getYearPlannerData,
} from "@/data/coursePageSectionsConfig";


// 1. ACCEPT the headerHeight prop

const igcseFaqSchema = faqSections.igcse.faqData.map(({ question, answer }) => ({
  "@type": "Question",
  name: question,
  acceptedAnswer: {
    "@type": "Answer",
    text: answer,
  },
}));

const igcseSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai#webpage",
      url: "https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai",
      name: "IGCSE Tutors in Dubai | Grades 9-11 Tuition Centre",
      description: "Ignite Training Institute offers IGCSE tutors in Dubai for students in Grades 9 to 11 studying Cambridge IGCSE, Pearson Edexcel International GCSE or OxfordAQA. Our IGCSE tuition centre in Dubai covers Maths, Further Maths, Statistics, Physics, Chemistry, Biology, Economics, Business Studies, Accounting, English, Computer Science, Psychology, French and Spanish. IGCSE tutoring is available one-to-one or in small groups of 3 to 6 students, online or in person at our Sheikh Zayed Road and JLT centres. Students can choose a Year 11 finals prep group, a Year 10 group, one-to-one tutoring or October and November resit preparation, and families can book a free demo class first.",
      isPartOf: { "@id": "https://ignitetraininginstitute.com/#website" },
      about: { "@id": "https://ignitetraininginstitute.com/#organization" },
      breadcrumb: { "@id": "https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai#breadcrumb" },
      inLanguage: "en",
      mainEntity: { "@id": "https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai#course" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ignitetraininginstitute.com/" },
        { "@type": "ListItem", position: 2, name: "Courses", item: "https://ignitetraininginstitute.com/courses" },
        { "@type": "ListItem", position: 3, name: "IGCSE Tutors in Dubai", item: "https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai" },
      ],
    },
    {
      "@type": "Course",
      "@id": "https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai#course",
      name: "IGCSE tutoring in Dubai",
      description: "Our IGCSE tutors in Dubai teach students in Grades 9 to 11 across the main subjects, including Maths, English, Sciences, Business and Economics. Lessons follow the Cambridge, Edexcel or AQA syllabus your school uses, with one-to-one or small-group classes, online or in person at our IGCSE tuition centre in Dubai. Every student starts with a short diagnostic test, then follows a clear study plan with topic notes, past paper practice, mock exams and regular feedback. IGCSE online tuition is available for students anywhere in the UAE. Book a free demo class to meet an IGCSE tutor and see how the lessons work before you join.",
      url: "https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai",
      provider: { "@id": "https://ignitetraininginstitute.com/#organization" },
      educationalLevel: "Grades 9-11 (IGCSE)",
      teaches: "IGCSE",
      inLanguage: "en",
      hasCourseInstance: [
        {
          "@type": "CourseInstance",
          courseMode: "Onsite",
          location: [
            { "@id": "https://ignitetraininginstitute.com/#localbusiness-szr" },
            { "@id": "https://ignitetraininginstitute.com/#localbusiness-jlt" },
          ],
        },
        { "@type": "CourseInstance", courseMode: "Online" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai#faq",
      mainEntity: igcseFaqSchema,
    },
  ],
};

const IGCSE = ({ headerHeight }) => {




  return (
    <>
      <SEO
        loadInnerStyles={true}
        title="IGCSE Tutors in Dubai | Grades 9-11 Tuition Centre"
        description="Expert IGCSE tutors in Dubai for Grades 9 to 11. Cambridge, Edexcel and OxfordAQA tuition, one-to-one or in small groups, online or in person. Book a free demo."
        url="https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai"
        preloadImages={[
          {
            src: "/assets/igcse.webp",
            type: "image/webp",
            media: "(max-width: 768px)"
          },
          {
            src: "/assets/igcse.webp",
            type: "image/webp",
            media: "(min-width: 769px)"
          }
        ]}
      />




      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={igcseSchema} />

      {/* 3. APPLY the style for paddingTop */}
      <div className='overflow-hidden innerpage page-content-padding'>
        <section className="hero-section">
          <div className="hero-container">
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/igcse.webp" />
              <img
                src="/assets/igcse.webp"
                alt="IGCSE Tutors Background"
                fetchPriority="high"
                width="1200"
                height="800"
                className="hero-img"
                style={{ opacity: 1, visibility: 'visible' }}
                decoding="sync"
              />
            </picture>

            <div className="row g-0 h-100">
              <InfoCardLeft
                title={subjectPages.igcse?.title || "IGCSE Tutors In Dubai, UAE For<br /> Assured Results"}
                subtitle={subjectPages.igcse?.subtitle || "Pre-Prep For Higher Education"}
                description={subjectPages.igcse?.description || "We offer expert IGCSE tutoring support through personalised mentorship across core & extended curriculum subjects. Our seasoned educators are dedicated to helping students achieve academic excellence consistently."}
                infoRow={subjectPages.igcse?.infoRow || []}
                buttons={subjectPages.igcse?.buttons || []}
              />
              <InfoCardForm formConfig={subjectFormConfigs.igcse} />
            </div>
          </div>

          <style jsx>{`
            .hero-atf-optimized {
              /* Ensure the content starts below the header immediately in SSR */
              padding-top: max(100px, 8vw); 
            }
            @media (max-width: 768px) {
              .hero-atf-optimized {
                padding-top: 80px;
              }
            }
          `}</style>
        </section>

        <LazySection>
          <section data-scroll-section>
            <OurApproach />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <YearPlanner config={getYearPlannerData('igcse')} />
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
          <CourseGallery config={getCourseGalleryData('igcse')} />
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
            <OurPromise config={getOurPromiseData('igcse')} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <StartSteps config={getStartStepsData('igcse')} />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <FAQSection {...faqSections.igcse} />
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

export default IGCSE;
