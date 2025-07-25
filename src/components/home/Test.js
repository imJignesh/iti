import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Test = ({ isMobileSwiper, active, setActive, testData }) => {
  return (
    <section className="testSection">
      <div className="container">
        <div className="testHeadings">
          <div
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="SubHeading testSubheading">STANDARDISED TESTS</div>
          </div>
          <h2
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section testTitle"
            style={{ animationDelay: "0.2s" }}
          >
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR{" "}
            <span className="highlight">ADIPISCING</span>
          </h2>
        </div>

        {isMobileSwiper ? (
          <Swiper
            data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat="true"
            className="fade-in-section testMobileSwiper"
            spaceBetween={25}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              400: { slidesPerView: 1.2 },
              575: { slidesPerView: 1.5 },
              786: { slidesPerView: 1.8 },
              900: { slidesPerView: 2.2 },
            }}
            modules={[Pagination]}
          >
            {testData.map((card, idx) => (
              <SwiperSlide key={idx}>
                <div className="testCardMobile">
                  <div
                    data-scroll
                    data-scroll-class="is-clipped"
                    className="testCardImageWrap"
                    style={{ backgroundImage: `url(${card.img})` }}
                  >
                    <span className="testCardNumber">{card.number}</span>
                    <span className="testCardTitle">{card.title}</span>
                  </div>
                  <div className="testCardDetailsWrap">
                    <div className="testCardLabel">{card.label}</div>
                    <div className="testCardDetails">
                      {card.details &&
                        card.details.map((d, i) => <span key={i}>{d}</span>)}
                    </div>
                    <button
                      className="testCardBtnMobile buttonSkyBlue"
                      type="button"
                    >
                      {card.btn}
                      <span className="btn-arrow">
                        <Image
                          src="/images/right-arrow-blue.png"
                          width={30}
                          height={30}
                          alt="arrow"
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="row testCardsRow">
            {testData.map((card, idx) => {
              const isCardActive = active === idx;
              return (
                <div
                  key={idx}
                  data-scroll
                  data-scroll-class="is-inview"
                  data-scroll-repeat="true"
                  className="fade-in-section col-4 px-3 testCard"
                  style={{ animationDelay: `${0.3 + idx * 0.15}s` }}
                  onMouseEnter={() => setActive(idx)}
                >
                  <div
                    data-scroll
                    data-scroll-class="is-clipped"
                    className={`cardImageArea ${
                      isCardActive ? "activeImageArea" : ""
                    }`}
                    style={{ backgroundImage: `url('${card.img}')` }}
                  >
                    <div className="imageOverlay"></div>
                    <span className="cardNumber">{card.number}</span>
                    <span className="cardTitle">{card.title}</span>
                  </div>

                  <div
                    className={`cardContentArea ${
                      isCardActive ? "showContent" : "hideContent"
                    }`}
                  >
                    <div className="cardLabel">{card.label}</div>
                    <div className="cardDetails">
                      {card.details &&
                        card.details.map((d, i) => (
                          <p key={i} className="m-0">
                            {d}
                          </p>
                        ))}
                    </div>
                    <button className="cardBtn buttonSkyBlue" type="button">
                      {card.btn}
                      <Image
                        src="/images/right-arrow-blue.png"
                        width={40}
                        height={40}
                        alt="arrow"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Test;
