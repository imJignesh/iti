import MovingBanner from '@/components/home/MovingBanner';
import Testimonial from '@/components/home/Testimonial';
import Accordion from '@/components/ibdp/accordian';
import Blog from "@/components/ibdp/Blog";
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
import SEO from "@/components/SEO";

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
    <>
      <SEO
        title="IBDP Tutors In Dubai, UAE | IB Diploma Coaching Support"
        description="Ace your training & exam preparation with IBDP tutors in Dubai. Our specialized IB Diploma trainers help you achieve top scores with the right guidance"
      />
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
    </>
  );
};

export default IBDP;