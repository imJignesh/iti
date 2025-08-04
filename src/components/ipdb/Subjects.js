import React, { useState } from "react";
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

const subjectRows = [
  "IGCSE Environmental Management (EVM)",
  "Math Applications & Interpretations (AI)",
  "IGCSE/GCSE Double Award Science",
  " IGCSE/GCSE Double Award Science",
  "Combined Science",
  "IGCSE Further Math"
];




export default function Subjects({ }) {

  const [selectedSubject, setSelectedSubject] = useState(subjectRows[0])
  console.log("selectedSubject", selectedSubject);

  return (
    <>
      {" "}
      <section
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat="true"
        className="fade-in-section subjectibdpSection "
        style={{ animationDelay: "0.2s" }}
      >
        <div className="row align-items-center">
          <div className="col-md-6 ">

            <img
              data-scroll
              data-scroll-class="is-clipped"
              data-scroll-repeat="true"
              data-scroll-offset="-10%"
              src="/images/rectangle-bg4.png"
              alt="bg-shape"
              className="bgRect"
            />
            <div className="uspLeft">

              <span
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section SubHeading"
                style={{ animationDelay: "0.1s" }}
              >
                SUBJECTS
              </span>

              <h2
                data-scroll
                data-scroll-class="is-inview"
                data-scroll-repeat="true"
                className="fade-in-section uspTitle"
                style={{ animationDelay: "0.2s" }}
              >
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING
              </h2>

              <img
                data-scroll
                data-scroll-class="is-clipped"
                data-scroll-offset="-10%"
                src="/images/rectangle-bg1.png"
                alt="bg-shape"
                className="bgRect"
              />
            </div>
          </div>

          <div className="col-md-6">

            <div className="subject">
              <ul class="nav flex-column ">
                {subjectRows.map(i => (
                  <li key={i} class={` subject-item ${selectedSubject == i && "subject-item-active"} `} onClick={() => setSelectedSubject(i)}>
                    <a class="" aria-current="page" >{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


      </section >
    </>
  );
}