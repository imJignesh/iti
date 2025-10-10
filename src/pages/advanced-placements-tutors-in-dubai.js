import Accordion from '@/components/ap/accrodian';
import Blog from "@/components/homeCopy/Blog";
import APBenefits from '@/components/ap/chooseApp';
import CourseCard from '@/components/ap/CourseCard';
import FAQSection from '@/components/ap/FaqSection';
import IgniteAchievements from '@/components/ap/IgniteAchievements';
import InfoCard from '@/components/ap/InfoCard';
import IgniteAboutCard from "@/components/ap/IgniteAboutCard";
import Trainers from "@/components/ap/Trainers";
import LifeAtIgniteCarousel from '@/components/ap/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/ap/MarqueeBanner';
import ReviewsSection from '@/components/ap/ReviewsSection';
import StudentAchievements from '@/components/ap/StudentAchivement';
import SubjectsCard1 from '@/components/ap/SubjectCard1';
import UspsSection from '@/components/ap/UspsSection';
import { useEffect, useRef } from 'react';

// 1. ACCEPT the headerHeight prop
const ap = ({ headerHeight }) => {
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
        <CourseCard />
      </section>

      {/* <section data-scroll-section>
        <SubjectsCard />
      </section> */}
      <section data-scroll-section>
        <SubjectsCard1 />
      </section>
      <section data-scroll-section>
        <APBenefits />
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
                      <img src="/images/school.png" alt="School Options" />
                  </div>
                  <div className="step-title">SCHOOL OPTIONS</div>
                  <div className="step-desc">Discover schools that align with your core strengths & goals.</div>
              </div>

              <div className="step">
                  <div className="icon-wrap" data-step="02">
                      <img src="/images/idealcur.png" alt="Ideal Curriculum" />
                  </div>
                  <div className="step-title">IDEAL CURRICULUM</div>
                  <div className="step-desc">Choose the right-fit curriculum for lasting academic success.</div>
              </div>

              <div className="step">
                  <div className="icon-wrap" data-step="03">
                      <img src="/images/subject.png" alt="Subject Choices" />
                  </div>
                  <div className="step-title">SUBJECT CHOICES</div>
                  <div className="step-desc">Choose subjects that match your career & higher education goals.</div>
              </div>

              <div className="step">
                  <div className="icon-wrap" data-step="04">
                      <img src="/images/universitypath.png" alt="University Pathways" />
                  </div>
                  <div className="step-title">UNIVERSITY PATHWAYS</div>
                  <div className="step-desc">Map a clear, strategic path to top international universities.</div>
              </div>
          </div>


      </section>

      {/* What We Offer End */}

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

export default ap;