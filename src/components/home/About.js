import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="aboutSection">
      <div className="container">
        <div className="aboutHeading">
          <span className="SubHeading">ABOUT US</span>
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
                {[...Array(3)].map((_, i) => (
                  <img
                    key={i}
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className="fade-in-section rectangleBG"
                    src="/images/rectangle-bg2.png"
                    alt="Teacher"
                  />
                ))}
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
                className="statCard statCardYears"
              >
                <div className="statBig">11 YEARS +</div>
                <div className="statSmall">OF RICH TUTORING EXPERIENCE</div>
              </div>
              <div
                data-scroll
                data-scroll-class="is-clipped"
                data-scroll-repeat="true"
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
                <span>4.9</span> GOOGLE REVIEWS
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
                <span className="SubHeading">ABOUT US</span>
              </div>
            </div>
            <h2
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section aboutTitle"
              style={{ animationDelay: "0.2s" }}
            >
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR{" "}
              <span className="aboutHighlight">ADIPISCING</span>
            </h2>
            <p
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section aboutDesc"
              style={{ animationDelay: "0.3s" }}
            >
              Choosing us means partnering with experienced coaches who are
              dedicated to unlocking your potential. We offer personalized
              strategies, proven methods, and unwavering support to help you
              navigate challenges.
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
            <button
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="aboutBtn fade-in-section buttonSkyBlue"
              style={{ animationDelay: "0.5s" }}
              type="button"
            >
              GET A FREE DEMO{" "}
              <Image
                src="/images/right-arrow-blue.png"
                width={40}
                height={40}
                alt="Arrow"
                quality={100}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
