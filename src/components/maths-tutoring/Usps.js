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
    title: "Profound Expertise",
    desc: "Learn from experienced Maths tutors with in-depth subject mastery.",
  },
  {
    number: "02",
    icon: "/images/usp-icon2.png",
    title: "Practical Approach",
    desc: "Apply concepts through real-world examples and logical reasoning.",
  },
  {
    number: "03",
    icon: "/images/usp-icon3.png",
    title: "Proven Outcomes",
    desc: "Consistent student success across international Maths exams.",
  },
  {
    number: "04",
    icon: "/images/usp-icon4.png",
    title: "Interactive Sessions",
    desc: "Engaging lessons that promote active problem-solving and thinking.",
  },
  {
    number: "05",
    icon: "/images/usp-icon5.png",
    title: "Adaptable Schedules",
    desc: "Flexible timings that suit your learning pace and routine.",
  },
  {
    number: "06",
    icon: "/images/usp-icon6.png",
    title: "Tailored Education",
    desc: "Curriculum-based learning paths aligned to your goals.",
  },
  {
    number: "07",
    icon: "/images/usp-icon1.png",
    title: "Confidence Boost",
    desc: "Gain clarity and confidence through guided Maths practice.",
  },
  {
    number: "08",
    icon: "/images/usp-icon2.png",
    title: "Exam Strategies",
    desc: "Focused techniques to tackle complex problems with accuracy.",
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
                <span
                  className="fade-in-sections SubHeading"
                  style={{ animationDelay: "0.1s" }}
                >
                  OUR PROMISE
                </span>

                <h2
                  className="fade-in-sections uspTitle"
                  style={{ animationDelay: "0.2s" }}
                >
                  What Do Students Get From Ignite's Maths Support?
                </h2>

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
                  KNOW MORE{" "}
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
                          <div className="uspItemTitle">{usp.title}</div>
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
    </>
  );
}