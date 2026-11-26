import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import styles from "@/styles/home-copy/Testimonial.module.css";

function ReviewText({ text, name, subtitle }) {
  const wrapRef = useRef(null);
  const textRef = useRef(null);
  const closeRef = useRef(null);
  const [shortText, setShortText] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Cut a long review at a word so that "…read more" ends on the last visible line of the card.
  // The full text is in the server HTML; it is only shortened in the browser.
  const fitText = useCallback(() => {
    const wrap = wrapRef.current;
    const element = textRef.current;
    if (!wrap || !element || !wrap.clientHeight) return;

    const probe = element.cloneNode(false);
    probe.style.position = "absolute";
    probe.style.visibility = "hidden";
    wrap.appendChild(probe);

    const link = document.createElement("span");
    link.className = styles.reviewMore;
    link.textContent = "read more";
    const words = String(text).match(/\S+\s*/g) || [];
    const fits = () => probe.scrollHeight <= wrap.clientHeight + 1;

    probe.textContent = text;
    let result = null;
    if (!fits()) {
      let low = 1;
      let high = words.length;
      while (low < high) {
        const middle = Math.ceil((low + high) / 2);
        probe.textContent = `${words.slice(0, middle).join("").trimEnd()}… `;
        probe.appendChild(link);
        if (fits()) low = middle;
        else high = middle - 1;
      }
      result = words.slice(0, low).join("").trimEnd();
    }

    probe.remove();
    setShortText(result);
  }, [text]);

  useEffect(() => {
    fitText();
    // Line breaks change once the web font has loaded.
    document.fonts?.ready.then(fitText);

    const wrap = wrapRef.current;
    if (!wrap || typeof ResizeObserver === "undefined") return undefined;

    const observer = new ResizeObserver(fitText);
    observer.observe(wrap);

    return () => observer.disconnect();
  }, [fitText]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const opener = document.activeElement;
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      opener?.focus?.({ preventScroll: true });
    };
  }, [isOpen]);

  return (
    <div ref={wrapRef} className={styles.testimonialTextWrap}>
      <div ref={textRef} className={styles.testimonialText}>
        {shortText === null ? (
          text
        ) : (
          <>
            {`${shortText}… `}
            <button
              type="button"
              className={styles.reviewMore}
              onClick={() => setIsOpen(true)}
              aria-label={`Read the full review from ${name}`}
            >
              read more
            </button>
          </>
        )}
      </div>

      {isOpen &&
        createPortal(
          <div className={styles.reviewOverlay} onClick={() => setIsOpen(false)}>
            <div
              className={styles.reviewDialog}
              role="dialog"
              aria-modal="true"
              aria-label={`Review from ${name}`}
              data-lenis-prevent
              onClick={(event) => event.stopPropagation()}
            >
              <button
                ref={closeRef}
                type="button"
                className={styles.reviewClose}
                onClick={() => setIsOpen(false)}
                aria-label="Close review"
              >
                ×
              </button>
              <p>{text}</p>
              <b>{name}</b>
              <span>{subtitle}</span>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

export default function ReviewsSection({ testimonials = [], title = "" }) {
  return (
    <>
      <section className={styles.testimonialSection}>
        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className="fade-in-section"
          style={{ "--reveal-delay": "0.1s" }}
        >
          <div className={styles.testimonialHeader}>
            <h2 className="SubHeading">REVIEWS & TESTIMONIALS</h2>
          </div>
        </div>

        <div
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
          className={`fade-in-section ${styles.testimonialBgBox}`}
          style={{ "--reveal-delay": "0.2s" }}
        >
          {/* Decorative rectangles */}
          <img src="/images/rectangle-bg4.webp" alt="testimonials" className={styles.testimonialRect} width={585} height={120} loading="lazy" decoding="async" />
          <img src="/images/rectangle-bg4.webp" alt="testimonials" className={styles.testimonialRect} width={585} height={120} loading="lazy" decoding="async" />
          <img src="/images/rectangle-bg4.webp" alt="testimonials" className={styles.testimonialRect} width={585} height={120} loading="lazy" decoding="async" />

          <img
            src="/images/google-logo.webp"
            alt="google logo"
            data-scroll
            data-scroll-class="is-clipped"
            data-scroll-repeat="true"
            data-scroll-offset="-10%"
            className={styles.googlelogo}
            style={{ "--reveal-delay": "0.2s" }}
            width={250}
            height={80}
            loading="lazy"
            decoding="async"
          />

          <h3
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className={`fade-in-section ${styles.testimonialTitle}`}
            style={{ "--reveal-delay": "0.2s" }}
          >
            {title || "IGNITE TRAINING INSTITUTE - TUTORS IN DUBAI"}
          </h3>

          <p
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className={`fade-in-section ${styles.googleReview}`}
            style={{ "--reveal-delay": "0.2s" }}
          >
            <span>4.9 </span>
            Google Reviews
          </p>

          <img
            src="/images/star-review.webp"
            alt="star rating"
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            data-scroll-offset="-10%"
            className={`fade-in-section ${styles.starReview}`}
            style={{ "--reveal-delay": "0.2s" }}
            width={350}
            height={58}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={`fade-in-section ${styles.testimonialSliderWrap}`}
          data-scroll
          data-scroll-class="is-inview"
          data-scroll-repeat="true"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            spaceBetween={20}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: `.${styles.testimonialPagination}`,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: { slidesPerView: 2, slidesPerGroup: 2 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className={styles.testimonialSwiper}
          >

            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                {item.type === "video" ? (
                  <div className={`${styles.testimonialCard} ${styles.testimonialCardVideo}`}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className={styles.testimonialImg}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className={styles.testimonialVideoOverlay}></div>
                    <div className={styles.testimonialPlayBtn}>
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="23"
                          fill="#0000008a"
                          stroke="#ffffff60"
                          strokeWidth="2"
                        />
                        <polygon points="20,16 34,24 20,32" fill="#ffffff90" />
                      </svg>
                    </div>
                    <div className={styles.testimonialVideoText}>
                      <b>{item.name}</b>
                      <span>{item.subtitle}</span>
                    </div>
                  </div>
                ) : (
                  <div className={`${styles.testimonialCard} ${styles.testimonialCardText}`}>
                    <ReviewText text={item.text} name={item.name} subtitle={item.subtitle} />
                    <div className={styles.testimonialTextName}>
                      <b>{item.name}</b>
                    </div>
                    <div className={styles.testimonialTextSubtitle}>{item.subtitle}</div>
                  </div>
                )}
              </SwiperSlide>
            ))}

          </Swiper>
          <button className="swiper-button-prev" tabIndex={0} aria-label="Previous testimonial">
            <img
              src="/images/right-arrow-blue.webp"
              alt="Prev"
              className="btntest"
              style={{ transform: "rotate(180deg)" }}
              width={32}
              height={32}
              loading="lazy"
              decoding="async"
            />
          </button>
          <button className="swiper-button-next" tabIndex={0} aria-label="Next testimonial">
            <img
              src="/images/right-arrow-blue.webp"
              alt="Next"
              className="btntest"
              width={32}
              height={32}
              loading="lazy"
              decoding="async"
            />
          </button>

          <div className={styles.testimonialPagination}></div>
        </div>
      </section>

    </>
  );
}
