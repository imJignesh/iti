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
    desc: "Learn from expert Physics tutors with in-depth subject mastery.",
  },
  {
    number: "02",
    icon: "/images/usp-icon2.png",
    title: "Applicable Insights",
    desc: "Relate Physics concepts to real-world situations and problems.",
  },
  {
    number: "03",
    icon: "/images/usp-icon3.png",
    title: "Proven Success",
    desc: "Consistent track record of top scores in the Physics examinations.",
  },
  {
    number: "04",
    icon: "/images/usp-icon4.png",
    title: "Clear Concepts",
    desc: "Understand challenging theories through simplified step-by-step teaching.",
  },
  {
    number: "05",
    icon: "/images/usp-icon5.png",
    title: "Personalized Learning",
    desc: "Custom lessons designed around your goals and curriculum.",
  },
  {
    number: "06",
    icon: "/images/usp-icon6.png",
    title: "Exam Excellence",
    desc: "Strategic preparation focused on scoring high in assessments.",
  },
  {
    number: "07",
    icon: "/images/usp-icon1.png",
    title: "Flexible Tutoring",
    desc: "Sessions planned to match your availability and learning pace.",
  },
  {
    number: "08",
    icon: "/images/usp-icon2.png",
    title: "Boosted Confidence",
    desc: "Strengthen understanding to approach Physics with clarity and ease.",
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
                  What Do Students Get From Ignite's Physics Support?
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