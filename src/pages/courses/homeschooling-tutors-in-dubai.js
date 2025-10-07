import Advantages from '@/components/homeSchooling/Advantages';
import Curriculum from '@/components/homeSchooling/Curriculum';
import FAQSection from '@/components/homeSchooling/FaqSection';
import InfoCard from '@/components/homeSchooling/InfoCard';
import LifeAtIgniteCarousel from '@/components/homeSchooling/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/homeSchooling/MarqueeBanner';
import HomeschoolingMindset from '@/components/homeSchooling/mindset';
import Accordion from '@/components/ibdp/accordian';
import Blog from "@/components/homeCopy/Blog";
import ReviewsSection from '@/components/ibdp/ReviewsSection';
import StudentAchievements from '@/components/ibdp/StudentAchivement';
import { useEffect, useRef } from 'react';

// 1. ACCEPT the headerHeight prop
const HomeSchooling = ({ headerHeight }) => {
  const scrollRef = useRef(null);
  const scrollInstanceRef = useRef(null);

  useEffect(() => {
    let scroll;

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      if (!scrollRef.current) return;

      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1,
        // optional:
        getDirection: true,
        getSpeed: true,
        multiplier: 1,
      });

      scrollInstanceRef.current = scroll;
    };

    if (typeof window !== "undefined") {
      initScroll();
    }

    return () => {
      scrollInstanceRef.current?.destroy();
      scrollInstanceRef.current = null;
    };
  }, []);

  return (
    // 2. APPLY the style for paddingTop to the scroll container
    <div
      ref={scrollRef}
      className='overflow-hidden innerpage'
      data-scroll-container
      style={{ paddingTop: `${headerHeight}px` }} // <--- THE STICKY HEADER FIX
    >
      <section data-scroll-section>
        <InfoCard />
      </section>

      <section data-scroll-section>
        <StudentAchievements />
      </section>

      <section data-scroll-section>
        <Curriculum />
      </section>
      <section data-scroll-section>
        <Advantages />
      </section>
      <section data-scroll-section>
        <MarqueeBanner />
      </section>

      <section data-scroll-section>
        <HomeschoolingMindset />
      </section>
      <section data-scroll-section>
        <ReviewsSection />
      </section>
      <section data-scroll-section>
        <LifeAtIgniteCarousel />
      </section>

      <section data-scroll-section>
        <FAQSection />
      </section>

      <section data-scroll-section>
        <Blog />
      </section>
      <section data-scroll-section>
        <Accordion />
      </section>
    </div>
  );
};

export default HomeSchooling;