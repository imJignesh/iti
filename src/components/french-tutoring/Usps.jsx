import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Scrollbar,
  Mousewheel,
} from "swiper/modules";
import Image from "next/image";

const uspData = [
  {
    number: "01",
    icon: "/images/usp-icon1.png",
    title: "Language Mastery",
    desc: "Develop strong fluency and confidence in French communication.",
  },
  {
    number: "02",
    icon: "/images/usp-icon2.png",
    title: "Personalized Approach",
    desc: "Lessons tailored to your goals, pace, and strengths.",
  },
  {
    number: "03",
    icon: "/images/usp-icon3.png",
    title: "Cultural Insights",
    desc: "Learn French with real-world cultural relevance and depth.",
  },
  {
    number: "04",
    icon: "/images/usp-icon4.png",
    title: "Proven Results",
    desc: "Consistent track record of high grades in French exams.",
  },
  {
    number: "05",
    icon: "/images/usp-icon5.png",
    title: "Interactive Learning",
    desc: "Lively & interactive sessions that enhance language retention.",
  },
  {
    number: "06",
    icon: "/images/usp-icon6.png",
    title: "Flexible Sessions",
    desc: "Online or in-person classes that suit your schedule.",
  },
  {
    number: "07",
    icon: "/images/usp-icon1.png",
    title: "Tailored Guidance",
    desc: "Curriculum-specific support to meet academic requirements.",
  },
  {
    number: "08",
    icon: "/images/usp-icon2.png",
    title: "Exam Excellence",
    desc: "Thorough preparation for top performance in French assessments.",
  },
];

const uspDataRows = [];
for (let i = 0; i < uspData.length; i += 2) {
  uspDataRows.push(uspData.slice(i, i + 2));
}

export default function Usps({ }) {
  return (
    <>
      {/* CRITICAL FIX: Removed the outer <section data-scroll-section> wrapper.
        The host page (e.g., HomeCopy.js, subject-tutoring.js) must now provide the <section data-scroll-section>.
      */}
      <div
        className="usp-section sp-container" // Main container for styling
      >
        <div
          className="fade-in-sections uspSection" // This is the data-scroll-target container
          style={{ animationDelay: "0.2s" }}
        >
          <div className="row justify-content-between gx-5">
            <div className="col-lg-4">
              <div
                className="uspLeft"
                // FIX: These attributes enable Locomotive Scroll's custom sticky behavior
                data-scroll
                data-scroll-sticky
                data-scroll-target=".uspSection"
              >
                <h2
                  className="fade-in-sections SubHeading mb-0"
                  style={{ animationDelay: "0.1s" }}
                >
                  OUR PROMISE
                </h2>

                <h3
                  className="fade-in-sections uspTitle mb-0"
                  style={{ animationDelay: "0.2s" }}
                >
                  What Do Students Get From Ignite's French Support?
                </h3>

                {/* <div
                  className="fade-in-sections uspSubtitle"
                  style={{ animationDelay: "0.3s" }}
                >
                  Real Support, Real Progress
                </div>

                <p
                  className="fade-in-section uspDesc"
                  style={{ animationDelay: "0.4s" }}
                >
                  We go beyond just tutoring with personalised learning, proven methods, & expert support that deliver real results.
                </p> */}

                <a
                  href="/why-ignite/"
                  className="uspBtn fade-in-sections buttonSkyBlue"
                  style={{ animationDelay: "0.5s" }}
                >
                  KNOW MORE ABOUT IGNITE{" "}
                  <Image
                    src="/images/right-arrow-blue.png"
                    width={40}
                    height={40}
                    quality={100}
                    alt="right arrow"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="uspRight">
                {uspDataRows.map((row, index) => (
                  <div key={index} className="uspSlide">
                    {row.map((usp, i) => (
                      <div key={i} className="uspItem">
                        <div className="uspNumber">{usp.number}</div>
                        <div className="uspIconCircle">
                          <img
                            src={usp.icon}
                            alt={usp.title}
                            className="uspIcon"
                          />
                        </div>
                        <div className="uspContent">
                          <h3 className="uspItemTitle">{usp.title}</h3>
                          <div className="uspItemDesc">{usp.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
      
      @media (max-width: 520px) {
        .uspSection .uspTitle{
          font-size:20.4px !important;
          line-height:20px !important;
        }
        .uspSection .uspItemTitle{
          font-size:16px !important;
          line-height:18px !important;
        }
        .uspwrapper{
          padding:0;
        }
        .uspSection .uspRight {
          padding-top: 10px;
        } 
      }
      
      
      `}</style>
    </>
  );
}