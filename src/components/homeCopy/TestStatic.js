import React from "react";
import Image from "@/components/CustomImageWrapper";
import styles from "@/styles/home-copy/Test.module.css";
import testData from "./testData";
import TestDesktopCards from "./TestDesktopCards";

const TestStatic = ({ active = 1, setActive }) => (
  <section className={styles.testSection1}>
    <div className="container">
      <div className={styles.testHeadings}>
        <div
          data-scroll
          data-scroll-class="is-inview"
          className="fade-in-section"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className={`SubHeading ${styles.testSubheading}`}>
            STANDARDISED TESTS
          </h2>
        </div>
        <h3
          data-scroll
          data-scroll-class="is-inview"
          className={`fade-in-section ${styles.testTitle}`}
          style={{ animationDelay: "0.2s" }}
        >
          Power Your Academic Goals With Expert Prep{" "}
          <span className="highlight">Support</span>
        </h3>
        <div
          className="fade-in-section"
          data-scroll
          data-scroll-class="is-inview"
          style={{ animationDelay: "0.4s" }}
        >
          <p>
            Whether you're aiming for top scores or a strong foundation,
            Ignite’s courses give you the edge to succeed.
          </p>
        </div>
      </div>
    </div>

    <div className={styles.testStaticMobile}>
      {testData.map((card) => (
        <div className={styles.testCardMobile} key={card.number}>
          <div
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-offset="-10%"
            className={`${styles.testCardImageWrap} ${styles.mobileActiveImageArea}`}
            style={{ backgroundImage: `url(${card.img})` }}
          >
            <span
              className={`${styles.testCardNumber} ${styles.mobileActiveNumber}`}
            >
              {card.number}
            </span>
            <h3
              className={`${styles.testCardTitle} ${styles.mobileActiveTitle}`}
            >
              {card.title}
            </h3>
          </div>
          <div
            className={`${styles.testCardDetailsWrap} ${styles.mobileShowContent}`}
          >
            <h3 className={styles.testCardLabel}>{card.label}</h3>
            <div className={styles.testCardDetails}>
              {card.details?.map((detail) => (
                <span key={detail}>{detail}</span>
              ))}
            </div>
            <a
              href={card.link}
              className={`${styles.testCardBtnMobile} buttonSkyBlue`}
              type="button"
            >
              {card.btn}
              <span className={styles.btnArrow}>
                <Image
                  src="/images/right-arrow-blue.webp"
                  width={30}
                  height={30}
                  quality={100}
                  alt="arrow"
                />
              </span>
            </a>
          </div>
        </div>
      ))}
    </div>

    <TestDesktopCards active={active} setActive={setActive} />
  </section>
);

export default TestStatic;
