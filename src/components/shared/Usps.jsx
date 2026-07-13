import React from "react";
import Image from "next/image";
import styles from '@/styles/home-copy/Usps.module.css';

export default function Usps({ config }) {
  const uspDataRows = [];
  for (let i = 0; i < config.usps.length; i += 2) {
    uspDataRows.push(config.usps.slice(i, i + 2));
  }

  return (
    <>
      <div className="usp-section sp-container">
        <div
          className={`fade-in-section ${styles.uspSection}`}
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat
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
                  className="fade-in-section SubHeading mb-0"
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.1s" }}
                >
                  OUR PROMISE
                </h2>

                <h3
                  className={`fade-in-section ${styles.uspTitle} mb-0`}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
                  style={{ animationDelay: "0.2s" }}
                >
                  {config.heading}
                </h3>

                <a
                  href="/about-us/"
                  className={`${styles.uspBtn} fade-in-section buttonSkyBlue`}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat
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
              <div className={styles.uspRight}>
                {uspDataRows.map((row, index) => (
                  <div key={index} className={styles.uspSlide}>
                    {row.map((usp, i) => (
                      <div
                        key={i}
                        className={`fade-in-section ${styles.uspItem}`}
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat
                      >
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
