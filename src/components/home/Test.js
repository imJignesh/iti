import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Pagination
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Test = ({ isMobileSwiper, active, setActive, testData }) => {
    return (
        <section className="test-section">
            <div className="container">
                <div className="test-headings">
                    <div
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        className="fade-in-section"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <div className="SubHeading test-subheading">STANDARDISED TESTS</div>
                    </div>
                    <h2
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        className="fade-in-section test-title"
                        style={{ animationDelay: "0.2s" }}
                    >
                        LOREM IPSUM DOLOR SIT AMET,
                        CONSECTETUR <span className="highlight">ADIPISCING</span>
                    </h2>
                </div>

                {isMobileSwiper ? (
                    <Swiper
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        className="fade-in-section test-mobile-swiper"
                        spaceBetween={25}
                        loop={true}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            400: { slidesPerView: 1.2 },
                            575: { slidesPerView: 1.5 },
                            786: { slidesPerView: 1.8 },
                            900: { slidesPerView: 2.2 }
                        }}
                        modules={[Pagination]}
                    >
                        {testData.map((card, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="test-card-mobile">
                                    <div
                                        data-scroll
                                        data-scroll-class="is-clipped"
                                        className="test-card-image-wrap"
                                        style={{ backgroundImage: `url(${card.img})` }}
                                    >
                                        <span className="test-card-number">{card.number}</span>
                                        <span className="test-card-title">{card.title}</span>
                                    </div>
                                    <div className="test-card-details-wrap">
                                        <div className="test-card-label">{card.label}</div>
                                        <div className="test-card-details">
                                            {card.details &&
                                                card.details.map((d, i) => <span key={i}>{d}</span>)}
                                        </div>
                                        <button className="test-card-btn-mobile buttonSkyBlue" type="button">
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
                    <div className="row test-cards-row">
                        {testData.map((card, idx) => {
                            const isCardActive = active === idx;
                            return (
                                <div
                                    key={idx}
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className="fade-in-section col-4 px-3 test-card"
                                    style={{ animationDelay: `${0.3 + idx * 0.15}s` }}
                                    onMouseEnter={() => setActive(idx)}
                                >
                                    <div
                                        data-scroll
                                        data-scroll-class="is-clipped"
                                        className={`card-image-area ${isCardActive ? "active-image-area" : ""}`}
                                        style={{ backgroundImage: `url('${card.img}')` }}
                                    >
                                        <div className="image-overlay"></div>
                                        <span className="card-number">{card.number}</span>
                                        <span className="card-title">{card.title}</span>
                                    </div>

                                    <div className={`card-content-area ${isCardActive ? "show-content" : "hide-content"}`}>
                                        <div className="card-label">{card.label}</div>
                                        <div className="card-details">
                                            {card.details &&
                                                card.details.map((d, i) => <p key={i} className="m-0">{d}</p>)}
                                        </div>
                                        <button className="card-btn buttonSkyBlue" type="button">
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
