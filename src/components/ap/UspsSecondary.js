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

export default function UspsSecondary({ }) {
  return (
    <>
      {" "}
      <section
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat="true"
        className="fade-in-section uspSection-ib uspSection-ib-sec"
        style={{ animationDelay: "0.2s" ,marginBottom:"60px"}}
      >
        <div className="row">
        
          <div className="col-md-12">

            <div className="row">
              {uspData.map((usp, i) => (

                <div key={i} className="col-md-3 col-6">
                <div className="uspItem uspItem-sec">
                  <div className="uspNumber usp-number-sec">{usp.number}</div>
                  <div className="uspIconCircle usp-icon-sec">
                    <img
                      src={usp.icon}
                      alt={usp.title}
                      className="uspIcon"
                    />
                  </div>
                  <div className="uspContent">
                    <div className="uspItemTitle usp-title-sec">{usp.title}</div>
                    <div className="uspItemDesc">{usp.desc}</div>
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}