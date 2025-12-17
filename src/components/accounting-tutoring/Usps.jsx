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
    title: "Expert Guidance",
    desc: "Learn from skilled tutors with deep accounting expertise.",
  },
  {
    number: "02",
    icon: "/images/usp-icon2.png",
    title: "Practical Insights",
    desc: "Understand real-world accounting through applied learning methods.",
  },
  {
    number: "03",
    icon: "/images/usp-icon3.png",
    title: "Proven Results",
    desc: "Consistent track record of top scores in Accounting assessments.",
  },
  {
    number: "04",
    icon: "/images/usp-icon4.png",
    title: "Clear Concepts",
    desc: "Grasp complex accounting topics with simplified explanations.",
  },
  {
    number: "05",
    icon: "/images/usp-icon5.png",
    title: "Flexible Sessions",
    desc: "Study efficiently on your terms with schedule-friendly classes..",
  },
  {
    number: "06",
    icon: "/images/usp-icon6.png",
    title: "Tailored Learning",
    desc: "Accounting lessons expertly designed to match your style and goals.",
  },
  {
    number: "07",
    icon: "/images/usp-icon1.png",
    title: "Confidence Boost",
    desc: "Build lasting clarity and confidence through guided support.",
  },
  {
    number: "08",
    icon: "/images/usp-icon2.png",
    title: "Exam Strategies",
    desc: "Tackle exams with smart, targeted preparation techniques.",
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
          // Apply local module class: styles.uspSection
          className={`fade-in-sections ${styles.uspSection}`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="row justify-content-between gx-5">
            <div className="col-lg-4">
              <div
                // Apply local module class: styles.uspLeft
                className={styles.uspLeft}
                // FIX: Attributes enable Locomotive Scroll's custom sticky behavior
                data-scroll
                data-scroll-sticky
                data-scroll-target={`.${styles.uspSection}`} // Target the module class
              >
                <h2
                  className="fade-in-sections SubHeading mb-0"
                  style={{ animationDelay: "0.1s" }}
                >
                  OUR PROMISE
                </h2>

                <h3
                  // Apply local module class: styles.uspTitle
                  className={`fade-in-sections ${styles.uspTitle} mb-0`}
                  style={{ animationDelay: "0.2s" }}
                >
                  What Do Students Get From Ignite's French Support?
                </h3>

                {/* The commented-out subtitle/desc elements (uspSubtitle, uspDesc) 
                    are structurally correct if uncommented, using local styles. */}

                <a
                  href="/about-us/"
                  // Apply local module class: styles.uspBtn, and global class: buttonSkyBlue
                  className={`${styles.uspBtn} fade-in-sections buttonSkyBlue`}
                  style={{ animationDelay: "0.5s" }}
                >
                  KNOW MORE ABOUT IGNITE{" "}
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
              {/* Apply local module class: styles.uspRight */}
              <div className={styles.uspRight}>
                {uspDataRows.map((row, index) => (
                  // Apply local module class: styles.uspSlide
                  <div key={index} className={styles.uspSlide}>
                    {row.map((usp, i) => (
                      // Apply local module class: styles.uspItem
                      <div key={i} className={styles.uspItem}>
                        <div className={styles.uspNumber}>{usp.number}</div>
                        <div className={styles.uspIconCircle}>
                          <img
                            src={usp.icon}
                            alt={usp.title}
                            // Apply local module class: styles.uspIcon
                            className={styles.uspIcon}
                          />
                        </div>
                        <div className={styles.uspContent}>
                          {/* Apply local module classes: styles.uspItemTitle, styles.uspItemDesc */}
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