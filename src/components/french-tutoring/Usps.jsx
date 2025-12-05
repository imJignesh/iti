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
      <div
        className="usp-section sp-container"
      >
        <div
          className={`fade-in-sections ${styles.uspSection}`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="row justify-content-between gx-5">
            <div className="col-lg-4">
              <div
                className={styles.uspLeft}
                data-scroll
                data-scroll-sticky
                data-scroll-target={`.${styles.uspSection}`}
              >
                <h2
                  className="fade-in-sections SubHeading mb-0"
                  style={{ animationDelay: "0.1s" }}
                >
                  OUR PROMISE
                </h2>

                <h3
                  className={`fade-in-sections ${styles.uspTitle} mb-0`}
                  style={{ animationDelay: "0.2s" }}
                >
                  What Do Students Get From Ignite's French Support?
                </h3>

                <a
                  href="/why-ignite/"
                  className={`${styles.uspBtn} fade-in-sections buttonSkyBlue`}
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
              <div className={styles.uspRight}>
                {uspDataRows.map((row, index) => (
                  <div key={index} className={styles.uspSlide}>
                    {row.map((usp, i) => (
                      <div key={i} className={styles.uspItem}>
                        <div className={styles.uspNumber}>{usp.number}</div>
                        <div className={styles.uspIconCircle}>
                          <img
                            src={usp.icon}
                            alt={usp.title}
                            className={styles.uspIcon}
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