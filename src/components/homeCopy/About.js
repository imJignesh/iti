import React, { useState, useEffect } from "react";
// import Image from "next/image";
import Image from '@/components/CustomImageWrapper';

const About = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [acceptanceRate, setAcceptanceRate] = useState(0);
  const targetStudents = 2300;
  const targetRate = 89;
  const duration = 2000; // Animation duration in milliseconds
  const steps = 50; // Number of steps in the animation

  useEffect(() => {
    const increment = targetStudents / steps;
    const interval = duration / steps;

    const studentTimer = setInterval(() => {
      setStudentCount(prev => {
        const newValue = prev + increment;
        if (newValue >= targetStudents) {
          clearInterval(studentTimer);
          return targetStudents;
        }
        return newValue;
      });
    }, interval);

    return () => clearInterval(studentTimer);
  }, []);

  useEffect(() => {
    const increment = targetRate / steps;
    const interval = duration / steps;

    const rateTimer = setInterval(() => {
      setAcceptanceRate(prev => {
        const newValue = prev + increment;
        if (newValue >= targetRate) {
          clearInterval(rateTimer);
          return targetRate;
        }
        return newValue;
      });
    }, interval);

    return () => clearInterval(rateTimer);
  }, []);

  return (
    <section className="aboutSection">
      <div className="container">
        <div className="aboutHeading">
          <h2 className="SubHeading">ABOUT IGNITE</h2>
        </div>
        <div className="row aboutSectionInner">
          <div className="col-12 col-lg-6 aboutLeft">
            <div className="aboutImageWrap">
              <div>
                <img
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className="fade-in-section rectangleBG"
                  src="/images/rectangle-bg1.png"
                  alt="Teacher"
                />
                <img
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className="fade-in-section rectangleBG"
                  src="/images/rectangle-bg2.png"
                  alt="Teacher"
                />
                <img
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className="fade-in-section rectangleBG"
                  src="/images/rectangle-bg2.png"
                  alt="Teacher"
                />
                <img
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className="fade-in-section rectangleBG"
                  src="/images/rectangle-bg2.png"
                  alt="Teacher"
                />
              </div>
              <Image
                src="/images/about-us-img.png"
                alt="Teacher"
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section aboutImage"
                width={500}
                height={400}
              />
              <div
                data-scroll
                data-scroll-class="is-clipped"
                data-scroll-repeat="true"
                data-scroll-offset="-10%"
                className="statCard statCardYears"
              >
                <div className="statBig">10 YEARS</div>
                <div className="statSmall">
                  OF RICH TUTORING EXPERIENCE
                </div>
              </div>
              <div
                data-scroll
                data-scroll-class="is-clipped"
                data-scroll-repeat="true"
                data-scroll-offset="-10%"
                className="statCard statCardResources"
              >
                <div className="statBig">1000+</div>
                <div className="statSmall">
                  RESOURCES THAT HELP YOU JOIN THE TOP 1%
                </div>
              </div>
              <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="verticalLabel fade-in-section"
                style={{ animationDelay: "0.8s" }}
              >
                <span>4.9</span> RATED ON GOOGLE
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 aboutRight">
            <div
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="aboutHeadingRow">
                <span className="SubHeading" >ABOUT IGNITE</span>
              </div>
            </div>

            <h3
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section aboutTitle"
              style={{ animationDelay: "0.2s" }}
            >
              EXAM-READY SUPPORT WITH TRUSTED CURRICULA{" "}
              <span className="aboutHighlight">EXPERTS</span>
            </h3>

            <p
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section aboutDesc"
              style={{ animationDelay: "0.3s" }}
            >
              At Ignite Training Institute, every student can thrive with the right guidance & support. Our experienced trainers & tailored learning methods help unlock true potential, inside & outside the classroom.
            </p>

            <div
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section w-100"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="aboutStatsRow">
                <div className="aboutStatBlock">
                  <div className="aboutStatBig">2300+</div>
                  <div className="aboutStatLabel">
                    TRULY HAPPY STUDENTS FROM UAE
                  </div>
                </div>
                <span className="aboutStatBorder"></span>
                <div className="aboutStatBlock">
                  <div className="aboutStatBig">89%</div>
                  <div className="aboutStatLabel">
                    OF STUDENTS ACCEPTED TO TOP UNIVERSITIES
                  </div>
                </div>
              </div>
            </div>


            <a href="/join-free-demo-class/" className="nodecoration mobile-mt-2">
              <button className="buttonSkyBlue mainCardBtn">
                GET A FREE DEMO{" "}
                <Image
                  src="/images/right-arrow-blue.png"
                  width={40}
                  height={40}
                  quality={100}
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;