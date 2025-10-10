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

      {/* what we offer Start */}
      <section className="achievementsSection">
          <div className="container">
              <div className="achievementsHeadings">
                  <div
                      data-scroll
                      data-scroll-class="is-inview"
                      data-scroll-repeat="true"
                      className="fade-in-section"
                      style={{ animationDelay: "0.1s" }}
                  >
                      <h4 className="SubHeading">WHAT MORE DO WE OFFER?</h4>
                  </div>
                  <div
                      data-scroll
                      data-scroll-class="is-inview"
                      data-scroll-repeat="true"
                      className="fade-in-section"
                      style={{ animationDelay: "0.25s" }}
                  >
                      <h1 className="achievementsTitle">

                          Comprehensive Guidance For Every <span className="highlight">Academic</span>{" "}
                          Milestone
                      </h1>
                  </div>

              </div>
          </div>
          {/* OPTIMIZATION: Corrected 'class' to 'className' in the following div */}
          <div className="container what-we-offer">
              <div className="step">
                  <div className="icon-wrap" data-step="01">
                      <img src="images/school.png" alt="School Options" />
                  </div>
                  <div className="step-title">SCHOOL OPTIONS</div>
                  <div className="step-desc">Discover schools that align with your core strengths & goals.</div>
              </div>

              <div className="step">
                  <div className="icon-wrap" data-step="02">
                      <img src="images/idealcur.png" alt="Ideal Curriculum" />
                  </div>
                  <div className="step-title">IDEAL CURRICULUM</div>
                  <div className="step-desc">Choose the right-fit curriculum for lasting academic success.</div>
              </div>

              <div className="step">
                  <div className="icon-wrap" data-step="03">
                      <img src="images/subject.png" alt="Subject Choices" />
                  </div>
                  <div className="step-title">SUBJECT CHOICES</div>
                  <div className="step-desc">Choose subjects that match your career & higher education goals.</div>
              </div>

              <div className="step">
                  <div className="icon-wrap" data-step="04">
                      <img src="images/universitypath.png" alt="University Pathways" />
                  </div>
                  <div className="step-title">UNIVERSITY PATHWAYS</div>
                  <div className="step-desc">Map a clear, strategic path to top international universities.</div>
              </div>
          </div>


      </section>

      {/* What We Offer End */}   
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