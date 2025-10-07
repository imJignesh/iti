import MovingBanner from '@/components/home/MovingBanner';
import Testimonial from '@/components/home/Testimonial';
import Accordion from '@/components/igcse/accordian';
import Blog from "@/components/homeCopy/Blog";
import CourseCard from '@/components/igcse/CourseCard';
import FAQSection from '@/components/igcse/FaqSection';
import IgniteAchievements from '@/components/igcse/IgniteAchievements';
import InfoCard from '@/components/igcse/InfoCard';
import LifeAtIgniteCarousel from '@/components/igcse/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/igcse/MarqueeBanner';
import ReviewsSection from '@/components/igcse/ReviewsSection';
import StudentAchievements from '@/components/igcse/StudentAchivement';
import SubjectsCard from '@/components/igcse/SubjectCard';
import UspsSection from '@/components/igcse/UspsSection';
import { useEffect, useRef } from 'react';

// 1. ACCEPT the headerHeight prop
const IGCSE = ({ headerHeight }) => {
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
    // 2. APPLY the style for paddingTop
    <div
      ref={scrollRef}
      className='overflow-hidden innerpage'
      data-scroll-container
      style={{ paddingTop: `${headerHeight}px` }} // <--- THE FIX
    >
      <section data-scroll-section>
        <InfoCard />
      </section>

      <section data-scroll-section>
        <StudentAchievements />
      </section>

      <section data-scroll-section>
        <CourseCard />
      </section>

      <section data-scroll-section>
        <SubjectsCard />
      </section>

      <section data-scroll-section>
        <ReviewsSection />
      </section>

      <section data-scroll-section>
        <IgniteAchievements />
      </section>

      <section data-scroll-section>
        <MarqueeBanner />
      </section>

      <section data-scroll-section>
        <UspsSection />
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

export default IGCSE;