import StudentAchievements from '@/components/tutors-jlt-dubai/StudentAchivement';
import { useEffect, useRef } from 'react';
import CurriculumTestsComponent from '@/components/tutors-jlt-dubai/curriculum';
import InfoCard from '@/components/tutors-jlt-dubai/infoCard';
import OurTrainers from '@/components/tutors-jlt-dubai/ourTrainers';
import SubjectsCard1 from '@/components/tutors-jlt-dubai/SubjectCard1';
import IgniteAchievements from '@/components/tutors-jlt-dubai/igniteAchivement';
import Blog from "@/components/homeCopy/Blog";
import UpsSection from '@/components/tutors-jlt-dubai/UspsSection';
import Accordion from '@/components/tutors-jlt-dubai/accordian';
import FAQSection from '@/components/tutors-jlt-dubai/FaqSection';
import MarqueeBanner from '@/components/tutors-jlt-dubai/MarqueeBanner';
import LifeAtIgniteCarousel from '@/components/tutors-jlt-dubai/LifeAtIgniteCarousel';
import ReviewsSection from '@/components/tutors-jlt-dubai/ReviewsSection';

// 1. ACCEPT the headerHeight prop
const Tutors = ({ headerHeight }) => {
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

      {/* <section data-scroll-section>
        <StudentAchievements />
      </section> */}

      <section data-scroll-section>
        <CurriculumTestsComponent />
      </section>

      <section data-scroll-section>
        <SubjectsCard1 />
      </section>

      <section data-scroll-section>
        <ReviewsSection />
      </section>

      <section data-scroll-section>
        <MarqueeBanner />
      </section>

      <section data-scroll-section>
        <OurTrainers />
      </section>
      <section data-scroll-section>
        <IgniteAchievements />
      </section>

      <section data-scroll-section>
        <UpsSection />
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

export default Tutors;