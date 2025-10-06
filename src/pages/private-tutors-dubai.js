import StudentAchievements from '@/components/private-tutors-dubai/StudentAchivement';
import { useEffect, useRef } from 'react';
import CurriculumTestsComponent from '@/components/private-tutors-dubai/curriculum';
import InfoCard from '@/components/private-tutors-dubai/infoCard';
import OurTrainers from '@/components/private-tutors-dubai/ourTrainers';
import SubjectsCard1 from '@/components/private-tutors-dubai/SubjectCard1';
import IgniteAchievements from '@/components/private-tutors-dubai/igniteAchivement';
import Blog from "@/components/homeCopy/Blog";
import UpsSection from '@/components/private-tutors-dubai/UspsSection';
import Accordion from '@/components/private-tutors-dubai/accordian';
import FAQSection from '@/components/private-tutors-dubai/FaqSection';
import MarqueeBanner from '@/components/private-tutors-dubai/MarqueeBanner';
import LifeAtIgniteCarousel from '@/components/private-tutors-dubai/LifeAtIgniteCarousel';
import ReviewsSection from '@/components/private-tutors-dubai/ReviewsSection';

// 1. ACCEPT the headerHeight prop
const PrivateTutorsDubai = ({ headerHeight }) => {
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

export default PrivateTutorsDubai;