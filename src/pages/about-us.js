import LazySection from "@/components/LazySection";
import dynamic from "next/dynamic";
// 1. Import the reusable JsonLd component
import SEO from "@/components/SEO";
import { pageSchemas } from "@/data/pageSchemas";
import JsonLd from "@/components/JsonLd";
import AboutBanner from "@/components/aboutus/Banner";
import OurApproach from "@/components/aboutus/OurApproach";
import WhyChooseUs from "@/components/aboutus/WhyChooseUs";
import Timeline from "@/components/aboutus/Timeline";
import MeetOurFounders from "@/components/aboutus/MeetOurFounders";
import TutoringHeroSection from "@/components/aboutus/BottomSub";
const MarqueeBanner = dynamic(() => import("@/components/shared/MarqueeBanner"));
import { getMarqueeData } from "@/data/marqueeConfig";

// 1. ACCEPT the headerHeight prop
const About = ({ headerHeight }) => {


  return (
    <>
      <SEO title="About Us - Best Training Institute In The UAE"
        description="Ignite Training Institute is the leading training center in the UAE, providing guidance in IB, IGCSE, A-Level, & AP to help students excel academically"
        url="https://ignitetraininginstitute.com/about-us" />
      {/* 2. RENDER the JsonLd component and pass the schema data */}
      <JsonLd schema={pageSchemas["about-us"]} />

      <div className="innerpage page-content-padding">
        <section data-scroll-section>
          <AboutBanner />
        </section>

        <LazySection>
          <section data-scroll-section>
            <OurApproach />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <WhyChooseUs />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Timeline />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <MeetOurFounders />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <MarqueeBanner config={getMarqueeData('standard')} />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <TutoringHeroSection />
          </section>
        </LazySection>
      </div>
    </>
  );
};

export default About;