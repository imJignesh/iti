import MovingBanner from '@/components/home/MovingBanner';
import Testimonial from '@/components/home/Testimonial';
import Accordion from '@/components/ibdp/accordian';
import Blog from "@/components/homeCopy/Blog";
import CourseCard from '@/components/ibdp/CourseCard';
import OurTrainers from '@/components/tutors-jlt-dubai/ourTrainers';
import FAQSection from '@/components/ibdp/FaqSection';
import IgniteAchievements from '@/components/ibdp/IgniteAchievements';
import InfoCard from '@/components/ibdp/InfoCard';
import IgniteAboutCard from "@/components/ibdp/IgniteAboutCard";
import Trainers from "@/components/ibdp/Trainers";
import LifeAtIgniteCarousel from '@/components/ibdp/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/ibdp/ReviewsSection';
import StudentAchievements from '@/components/ibdp/StudentAchivement';
import SubjectsCard from '@/components/ibdp/SubjectCard';
import UspsSection from '@/components/ibdp/UspsSection';
import { useEffect, useRef } from 'react';

// 1. ACCEPT the headerHeight prop
const IBDP = ({ headerHeight }) => {
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
        <IgniteAboutCard />
      </section>

      {/* <section data-scroll-section>
        <StudentAchievements />
      </section> */}

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
        <Trainers />
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

      {/* <section data-scroll-section>
        <LifeAtIgniteCarousel />
      </section> */}

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

export default IBDP;