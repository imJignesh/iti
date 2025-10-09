import MovingBanner from '@/components/home/MovingBanner';
import Testimonial from '@/components/home/Testimonial';
import Accordion from '@/components/ibc/accordian';
import Blog from "@/components/homeCopy/Blog";
import CourseCard from '@/components/ibc/CourseCard';
import IBCurriculumStages from '@/components/ibc/Curriculum.jsx';
import FAQSection from '@/components/ibc/FaqSection';
import IgniteAchievements from '@/components/ibc/IgniteAchievements';
import InfoCard from '@/components/ibc/InfoCard';
import IgniteAboutCard from "@/components/ibc/IgniteAboutCard";
import Trainers from "@/components/ibc/Trainers";
import LifeAtIgniteCarousel from '@/components/ibc/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/ibc/MarqueeBanner';
import ReviewsSection from '@/components/ibc/ReviewsSection';
import StudentAchievements from '@/components/ibc/StudentAchivement';
import SubjectsCard from '@/components/ibc/SubjectCard';
import UniImagesCard from '@/components/ibc/universityCrad';
import UspsSection from '@/components/ibc/UspsSection';
import { University } from 'lucide-react';
import { useEffect, useRef } from 'react';


// 1. ACCEPT the headerHeight prop
const IBC = ({ headerHeight }) => {
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
        <IgniteAboutCard />
      </section>

      {/* <section data-scroll-section>
        <StudentAchievements />
      </section> */}

      <section data-scroll-section>
        <IBCurriculumStages />
      </section>

      <section data-scroll-section>
        <SubjectsCard />
      </section>
      <section data-scroll-section>
        <MarqueeBanner />
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

export default IBC;