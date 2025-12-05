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
                  What Do Students Get From Ignite's Maths Support?
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