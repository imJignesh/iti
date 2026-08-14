import React from "react";
import Image from "@/components/CustomImageWrapper";
import styles from "@/styles/home-copy/Test.module.css";
import testData from "./testData";

const TestDesktopCards = ({ active = 1, setActive }) => (
  <div className={styles.testDesktopWrapper}>
    <div className="container">
      <div className={`row ${styles.testCardsRow}`}>
        {testData.slice(0, 3).map((card, idx) => {
          const isCardActive = active === idx;

          return (
            <div
              key={idx}
              data-scroll
              data-scroll-class="is-inview"
              className={`fade-in-section col-4 px-3 ${styles.testCard}`}
              style={{ animationDelay: `${0.3 + idx * 0.15}s` }}
              onMouseEnter={() => setActive?.(idx)}
              onMouseLeave={() => setActive?.(1)}
            >
              <div
                data-scroll
                data-scroll-class="is-clipped"
                data-scroll-offset="-10%"
                className={`${styles.cardImageArea} ${
                  isCardActive ? styles.activeImageArea : ""
                }`}
                style={{ backgroundImage: `url('${card.img}')` }}
              >
                <div className={styles.imageOverlay}></div>
                <span className={styles.cardNumber}>{card.number}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
              <div
                className={`${styles.cardContentArea} ${
                  isCardActive ? styles.showContent : styles.hideContent
                }`}
              >
                <h3 className={styles.cardLabel}>{card.label}</h3>
                <div className={styles.cardDetails}>
                  {card.details?.map((detail) => (
                    <p key={detail} className="m-0">
                      {detail}
                    </p>
                  ))}
                </div>
                <a
                  href={card.link}
                  className={`${styles.cardBtn} buttonSkyBlue`}
                  type="button"
                >
                  {card.btn}{" "}
                  <Image
                    src="/images/right-arrow-blue.webp"
                    width={40}
                    height={40}
                    quality={100}
                    alt="arrow"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default TestDesktopCards;
