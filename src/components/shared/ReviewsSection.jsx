import React, { useEffect, useRef, useState } from "react";
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

// Long reviews are cut so that "…read more" ends on the card's last line; it opens the full review.
// The full text stays in the server HTML and is only shortened in the browser.
function ReviewText({ text, name, subtitle }) {
  const wrapRef = useRef(null);
  const [shortText, setShortText] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const fit = () => {
      if (!wrap.clientHeight) return;
      const probe = wrap.firstChild.cloneNode(false);
      probe.style.cssText = "position:absolute;visibility:hidden";
      wrap.appendChild(probe);

      const words = text.match(/\S+\s*/g) || [];
      const fits = (value) => {
        probe.textContent = value;
        return probe.scrollHeight <= wrap.clientHeight + 1;
      };
      const cut = (count) => words.slice(0, count).join("").trimEnd();
      let result = null;
      if (!fits(text)) {
        let low = 1;
        let high = words.length;
        while (low < high) {
          const middle = Math.ceil((low + high) / 2);
          if (fits(`${cut(middle)}… read more`)) low = middle;
          else high = middle - 1;
        }
        result = cut(low);
      }
      probe.remove();
      setShortText(result);
    };

    // Runs again when the card is resized or the web font has loaded.
    const observer = new ResizeObserver(fit);
    observer.observe(wrap);
    document.fonts?.ready.then(fit);
    return () => observer.disconnect();
  }, [text]);

  return (
    <div ref={wrapRef} className={styles.testimonialTextWrap}>
      <div className={styles.testimonialText}>
        {shortText === null ? text : <>{shortText}… <button type="button" className={styles.reviewMore} onClick={() => setIsOpen(true)} aria-label={`Read the full review from ${name}`}>read more</button></>}
      </div>

      {isOpen && createPortal(
        // Native dialog: Esc, focus handling and the dark backdrop come from the browser.
        <dialog
          ref={(node) => node && !node.open && node.showModal()}
          className={styles.reviewDialog}
          aria-label={`Review from ${name}`}
          data-lenis-prevent
          onClose={() => setIsOpen(false)}
          onClick={(event) => event.target === event.currentTarget && event.currentTarget.close()}
        >
          <form method="dialog">
            <button className={styles.reviewClose} aria-label="Close review">×</button>
            <p>{text}</p>
            <b>{name}</b>
            <span>{subtitle}</span>
          </form>
        </dialog>,
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
