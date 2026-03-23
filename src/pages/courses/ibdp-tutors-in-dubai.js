// import MovingBanner from '@/components/home/MovingBanner';
import LazySection from "@/components/LazySection";
import Head from "next/head";
// import Testimonial from '@/components/home/Testimonial';
import dynamic from 'next/dynamic';

const Accordion = dynamic(() => import('@/components/ibdp/accordian'));
const Blog = dynamic(() => import('@/components/ibdp/Blog'));
const CourseCard = dynamic(() => import('@/components/ibdp/CourseCard'));
const FAQSection = dynamic(() => import('@/components/ibdp/FaqSection'));
const IgniteAchievements = dynamic(() => import('@/components/ibdp/IgniteAchievements'));
import InfoCard from '@/components/ibdp/InfoCard'; // ATF - keep static
const IgniteAboutCard = dynamic(() => import('@/components/ibdp/IgniteAboutCard'));
const WhatWeOfferSection = dynamic(() => import('@/components/ibdp/WhatWeOfferSection'));
const Trainers = dynamic(() => import('@/components/ibdp/Trainers'));
const MarqueeBanner = dynamic(() => import('@/components/ibdp/MarqueeBanner'));
const ReviewsSection = dynamic(() => import('@/components/ibdp/ReviewsSection'));
const SubjectsCard = dynamic(() => import('@/components/ibdp/SubjectCard'));
const UspsSection = dynamic(() => import('@/components/ibdp/UspsSection'));
// Removed: { useEffect, useRef }
import SEO from "@/components/SEO";

// The local Locomotive Scroll initialization logic has been entirely removed.
const IBDP = ({ headerHeight }) => {

  return (
    <>
    <Head>
        <link rel="preload" as="image" href="/assets/ib-bg.webp" media="(max-width: 768px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/assets/ibdp_bg_main.webp" media="(min-width: 769px)" fetchPriority="high" />
    </Head>
    <SEO
        title="IBDP Tutors In Dubai, UAE | IB Diploma Coaching Support"
        description="Ace your training & exam preparation with IBDP tutors in Dubai. Our specialized IB Diploma trainers help you achieve top scores with the right guidance"
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
            <InfoCard />
          </div>

        </section>

        <LazySection>
          <section data-scroll-section>
            <IgniteAboutCard />
          </section>
        </LazySection>

        {/* <section data-scroll-section>
        <StudentAchievements />
      </section> */}

        <LazySection>
          <section data-scroll-section>
            <CourseCard />
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
            <MarqueeBanner />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <UspsSection />
          </section>
        </LazySection>

        {/* <section data-scroll-section>
        <LifeAtIgniteCarousel />
      </section> */}

        <LazySection>
          <section data-scroll-section>
            <FAQSection />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Blog />
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

export default IBDP;