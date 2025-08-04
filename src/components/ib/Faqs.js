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

const faqData = [
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

const faqDataRows = [];
for (let i = 0; i < faqData.length; i += 2) {
  faqDataRows.push(faqData.slice(i, i + 2));
}

export default function Faq({ }) {
  return (
    <>
      <div className="container faq-container" style={{ borderRadius: "30px"}}>
        <div className="row align-items-center">
          <div className="col-md-6 " >
            <div className="faq-left">

              <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section"
                style={{ animationDelay: "0.1s" }}
              >
                <h4 className="SubHeading">FAQs</h4>
              </div>
              <div
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section"
                style={{ animationDelay: "0.25s" }}
              >
                <h1 className="faqTitle ">
                  Lorem ipsum dolor sit amet, <span className="highlight">consectetur</span>{" "}
                  adipiscing
                </h1>
                <p className="faq-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>

          </div>
          <div className="col-md-6">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Lorem ipsum dolor sit amet?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.

                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Lorem ipsum dolor sit amet?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}