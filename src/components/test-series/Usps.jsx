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
import styles from '@/styles/home-copy/Usps.module.css';

const uspData = [
  {
    number: "01",
    icon: "/images/usp-icon1.webp",
    title: "Timed & Invigilated exam environment",
    desc: "",
    width: 77,
    height: 67,
  },
  {
    number: "02",
    icon: "/images/usp-icon2.webp",
    title: "Mix of important & high-weightage past paper questions",
    desc: "",
    width: 67,
    height: 63,
  },
  {
    number: "03",
    icon: "/images/usp-icon3.webp",
    title: "All question styles covered (MCQ, short & long answers)",
    desc: "",
    width: 76,
    height: 69,
  },
  {
    number: "04",
    icon: "/images/usp-icon4.webp",
    title: "Strict Adherence to curriculum-specific guidelines",
    desc: "",
    width: 66,
    height: 71,
  },
  {
    number: "05",
    icon: "/images/usp-icon5.webp",
    title: "Detailed correction with examiner-style marking & feedback",
    desc: "",
    width: 78,
    height: 74,
  },
  {
    number: "06",
    icon: "/images/usp-icon6.webp",
    title: "Mark schemes with report card & predicted grades",
    desc: "",
    width: 76,
    height: 78,
  },
  {
    number: "07",
    icon: "/images/usp-icon1.webp",
    title: "Flexible scheduling around student availability",
    desc: "",
    width: 77,
    height: 67,
  },
  {
    number: "08",
    icon: "/images/usp-icon2.webp",
    title: "Personalized doubt & revision sessions (on request)",
    desc: "",
    width: 67,
    height: 63,
  },
  {
    number: "09",
    icon: "/images/usp-icon2.webp",
    title: "Compete with UAE students & get percentile ranking",
    desc: "",
    width: 67,
    height: 63,
  },
  {
    number: "10",
    icon: "/images/usp-icon2.webp",
    title: "Per-subject pricing with multi-subject discounts",
    desc: "",
    width: 67,
    height: 63,
  },
];

const uspDataRows = [];
for (let i = 0; i < uspData.length; i += 2) {
  uspDataRows.push(uspData.slice(i, i + 2));
}

export default function Usps({ }) {
  return (
    <>
      <div
        className="usp-section blue sp-container"
      >
        <div
          className={`fade-in-section ${styles.uspSection}`}
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
          style={{ animationDelay: "0.2s" }}
        >
          <div className="row justify-content-between gx-5">
            <div className="col-lg-4 uspwrapper">
              <div
                className={styles.uspLeft}
                data-scroll
                data-scroll-sticky
                data-scroll-target={`.${styles.uspSection}`}
              >
                <h2
                  className="fade-in-section SubHeading mb-0"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.1s" }}
                >
                  The Extra Edge
                </h2>

                <h3
                  className={`fade-in-section ${styles.uspTitle} mb-0`}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.2s" }}
                >
                  What Makes Ignite’s Test Series Different?
                </h3>
                <h4
                  // Apply local module class
                  className={`fade-in-section ${styles.uspSubtitle}`}
                  data-scroll
                  data-scroll-class="is-inview"

                  style={{ animationDelay: "0.3s" }}
                >
                  Not Just Tests, Real Preparation
                </h4>

                {/* 1. DESKTOP TEXT */}
                <p
                  // Apply local module class and global Bootstrap classes
                  className={`fade-in-section ${styles.uspDesc} d-none d-lg-block`}
                  data-scroll
                  data-scroll-class="is-inview"

                  style={{ animationDelay: "0.4s" }}
                >
                  Choosing Ignite means partnering with experienced subject-specialist coaches who understand exam patterns, marking standards, and scoring strategies.
                </p>
                <a
                  href="/about-us/"
                  className={`${styles.uspBtn} fade-in-section buttonSkyBlue`}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.5s" }}
                >
                  KNOW MORE
                  <Image
                    src="/images/right-arrow-blue.webp"
                    width={40}
                    height={40}
                    quality={100}
                    alt="right arrow"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className={styles.uspRight}>
                {uspDataRows.map((row, index) => (
                  <div key={index} className={styles.uspSlide}>
                    {row.map((usp, i) => (
                      <div key={i} className={`fade-in-section ${styles.uspItem}`}
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat>
                        <div className={styles.uspNumber}>{usp.number}</div>
                        <div className={styles.uspIconCircle}>
                          <img
                            src={usp.icon}
                            alt={usp.title}
                            className={styles.uspIcon}
                            width={usp.width}
                            height={usp.height}
                          />
                        </div>
                        <div className={styles.uspContent}>
                          <h3 className={styles.uspItemTitle}>{usp.title}</h3>
                          <div className={styles.uspItemDesc}>{usp.desc}</div>
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