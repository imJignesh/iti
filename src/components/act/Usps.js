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
    title: "EXPERIENCED TUTORS",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "02",
    icon: "/images/usp-icon2.png",
    title: "STRUCTURED LEARNING",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "03",
    icon: "/images/usp-icon3.png",
    title: "TAILORED COURSES",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "04",
    icon: "/images/usp-icon4.png",
    title: "FLEXIBLE SCHEDULING",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "05",
    icon: "/images/usp-icon5.png",
    title: "INTERACTIVE SESSIONS",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "06",
    icon: "/images/usp-icon6.png",
    title: "INDIVIDUAL SUPPORT",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "07",
    icon: "/images/usp-icon1.png",
    title: "EXPERIENCED TUTORS",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
  {
    number: "08",
    icon: "/images/usp-icon2.png",
    title: "STRUCTURED LEARNING",
    desc: "One-on-one sessions to achieve personal goals and enhance self-awareness.",
  },
];

const uspDataRows = [];
for (let i = 0; i < uspData.length; i += 2) {
  uspDataRows.push(uspData.slice(i, i + 2));
}

export default function Usps({ }) {
  return (
    <>
      {" "}
      <section
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat="true"
        className="fade-in-section uspSection-ib"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="row">
          <div className="col-md-6">

            <div className="uspLeft">
              {/* <span
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section SubHeading"
            style={{ animationDelay: "0.1s" }}
          >
            IGNITE ACHIEVEMENTS
          </span> */}
              <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section"
                style={{ animationDelay: "0.1s" }}
              >
                <h4 className="SubHeading">IGNITE ACHIEVEMENTS</h4>
              </div>
              <h2
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section uspTitle"
                style={{ animationDelay: "0.2s" }}
              >
                LOREM IPSUM DOLOR SIT AMET, <br></br> <span className="highlight">CONSECTETUR</span> ADIPISCING
              </h2>

              <p
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section uspDesc"
                style={{ animationDelay: "0.4s" }}
              >
                Choosing us means partnering with experienced coaches who are
                dedicated to unlocking your potential. We offer personalized
                strategies, proven methods, and unwavering support to help you
                navigate challenges.
              </p>

              <button
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="uspBtn fade-in-section"
                style={{ animationDelay: "0.5s" }}
                type="button"
              >
                KNOW MORE{" "}
                <Image
                  src="/images/right-arrow-blue.png"
                  width={40}
                  height={40}
                  quality={100}
                />
              </button>
            </div>
          </div>
          <div className="col-md-6">

            <div className="row ups-right-col">
              <div className="col-6">
                <div className="uspItem">
                  <div className="uspNumber">60%</div>
                  <div className="uspContent">
                    <div className="uspItemTitle">Lorem Ipsum</div>
                    <div className="uspItemDesc">Lorem ipsum dolor sit amet, consectetur elit.</div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="uspItem">
                  <div className="uspNumber usp-blue">30+</div>
                  <div className="uspContent">
                    <div className="uspItemTitle usp-blue">Lorem Ipsum</div>
                    <div className="uspItemDesc usp-blue">Lorem ipsum dolor sit amet, consectetur elit.</div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="uspItem">
                  <div className="uspNumber usp-blue">60%</div>
                  <div className="uspContent">
                    <div className="uspItemTitle usp-blue">Lorem Ipsum</div>
                    <div className="uspItemDesc usp-blue">Lorem ipsum dolor sit amet, consectetur elit.</div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="uspItem">
                  <div className="uspNumber">60%</div>
                  <div className="uspContent">
                    <div className="uspItemTitle">Lorem Ipsum</div>
                    <div className="uspItemDesc">Lorem ipsum dolor sit amet, consectetur elit.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}