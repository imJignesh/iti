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

export default function Alumni({ alumniData, setActiveIndex }) {
  return (
    <>
      <section className="alumniSection">
        <div className="container">
          <div className="alumniSubSection">
            <h3
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section SubHeading alumniSubHeading"
              style={{ animationDelay: "0.1s" }}
            >
              OUR ALUMNI IN TOP UNIVERSITIES
            </h3>
            <h2
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section alumniTitle"
              style={{ margin: "24px 0 0 0", animationDelay: "0.2s" }}
            >
              LOREM IPSUM DOLOR SIT AMET, consectetur{" "}
              <span className="alumniHighlight"> ADIPISCING</span>
            </h2>
          </div>

          <div className="alumniSwiper swiperNavWrap">
            <button className="swiper-button-prev customNavBtn">
              <img
                src="/images/right-arrow-blue.png"
                alt="Prev"
                style={{ transform: "rotate(180deg)" }}
                width={32}
                height={32}
              />
            </button>
            <button className="swiper-button-next customNavBtn">
              <img
                src="/images/right-arrow-blue.png"
                alt="Next"
                width={32}
                height={32}
              />
            </button>

            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow]}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: -20,
                depth: 200,
                modifier: 2,
                initialSlide: 1,
                slideShadows: false,
              }}
              initialSlide={1}
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={80}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="alumniSwiper"
              breakpoints={{
                0: { slidesPerView: 1.5 },
                767: { slidesPerView: 2 },
                1100: { slidesPerView: 3 },
              }}
            >
              {alumniData.map((alumni, idx) => (
                <SwiperSlide key={idx}>
                  {({ isActive }) => (
                    <div
                      data-scroll
                      data-scroll-class="is-inview"
                      data-scroll-repeat="true"
                      className="fade-in-section alumniCard"
                      style={{ animationDelay: `${0.3 + idx * 0.15}s` }}
                    >
                      <div
                        className={isActive ? "alumniBg activeBg" : "alumniBg"}
                      ></div>
                      <div className="alumniImageWrap">
                        <img
                          src={alumni.img}
                          alt={alumni.name}
                          data-scroll
                          data-scroll-class="is-inview"
                          data-scroll-repeat="true"
                          className="alumniImage"
                        />
                        <div className="alumniLogoBox">
                          <img
                            src={alumni.logo}
                            alt="university logo"
                            data-scroll
                            data-scroll-class="is-clipped"
                            className="alumniLogo"
                          />
                        </div>
                      </div>
                      <div
                        className={
                          isActive ? "alumniName activeBg" : "alumniName"
                        }
                      >
                        {alumni.name}
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
