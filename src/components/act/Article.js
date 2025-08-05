import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
    Navigation,
    Pagination,
    EffectCoverflow,
    Scrollbar,
    Mousewheel,
} from "swiper/modules";
import Image from "next/image";
const tabData = {
    "All": [
        {
            "item1": {
                title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do? ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                image: "/images/article.png",
                btnUrl: "#slide1",
            },
            "item2": {
                title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do? ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                image: "/images/article.png",
                btnUrl: "#slide1",
            }
        },
        {
            "item1": {
                title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do? ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                image: "/images/article.png",
                btnUrl: "#slide1",
            },
            "item2": {
                title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do? ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                image: "/images/article.png",
                btnUrl: "#slide1",
            }
        },
    ],
    "Marketing": [
        {
            "item1": {
                title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do? ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                image: "/images/article.png",
                btnUrl: "#slide1",
            },
            "item2": {
                title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do? ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                image: "/images/article.png",
                btnUrl: "#slide1",
            }
        },
        {
            "item1": {
                title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do? ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                image: "/images/article.png",
                btnUrl: "#slide1",
            },
            "item2": {
                title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do? ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                image: "/images/article.png",
                btnUrl: "#slide1",
            }
        },
    ],
    "News": [
        {
            "item1": {
                title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do? ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                image: "/images/article.png",
                btnUrl: "#slide1",
            },
            "item2": {
                title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do? ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                image: "/images/article.png",
                btnUrl: "#slide1",
            }
        },
        {
            "item1": {
                title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do? ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                image: "/images/article.png",
                btnUrl: "#slide1",
            },
            "item2": {
                title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do? ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                image: "/images/article.png",
                btnUrl: "#slide1",
            }
        },
    ],
    "Lorem": [
        {
            "item1": {
                title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do? ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                image: "/images/article.png",
                btnUrl: "#slide1",
            },
            "item2": {
                title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do? ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                image: "/images/article.png",
                btnUrl: "#slide1",
            }
        },
        {
            "item1": {
                title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do? ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                image: "/images/article.png",
                btnUrl: "#slide1",
            },
            "item2": {
                title: "01. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do? ",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                image: "/images/article.png",
                btnUrl: "#slide1",
            }
        },
    ],
};

const Article = () => {
    const tabKeys = Object.keys(tabData);
    const [activeTab, setActiveTab] = useState(tabKeys[0]);

    const prevRef = useRef(null);
    const nextRef = useRef(null);


    return (
        <div className="max-w-4xl mx-auto p-4 article-section">
            {/* Tabs Header */}
            <div className="d-flex justify-content-around  mb-4 border-b pb-2">
                {tabKeys.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`article-tab-heading font-medium ${activeTab === tab
                            ? "article-active-tab"
                            : ""
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Swiper Content */}
            <div className="achievements-swiperWrapper">
                <div
                    className="achievements-navButton achievements-prev"
                    ref={prevRef}
                    aria-label="previous"
                >
                   <img
                src="/images/right-arrow-blue.png"
                alt="Prev"
                style={{ transform: "rotate(180deg)" }}
                width={32}
                height={32}
                className="achievements-arrow"
              />
                </div>
                <div
                    className="achievements-navButton achievements-next"
                    ref={nextRef}
                    aria-label="next"
                >
                     <img
                src="/images/right-arrow-blue.png"
                alt="Next"
                width={32}
                height={32}
                className="achievements-arrow"
              />
                </div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    loop={true}
                    spaceBetween={20}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    pagination={{
                        clickable: true,
                        el: ".testimonialPagination",
                    }}
                    onInit={(swiper) => {
                        // link custom navigation
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        swiper.params.navigation.prevEl = prevRef.current;
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1, slidesPerGroup: 1 },
                        576: { slidesPerView: 1 },
                        992: { slidesPerView: 1 },
                        1200: { slidesPerView: 1 },
                    }}
                    className="testimonialSwiper article-swapper"
                >
                    {tabData[activeTab].map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="container">
                                <div className="col-12">
                                    <div className="row mb-4">
                                        <div className="col-lg-6 col-5 ">
                                            <img
                                                src={item.item1.image}
                                                alt={item.item1.title}
                                                className="object-cover rounded"
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                        <div className="col-lg-6 col-7 article-card">
                                            <h3 className="article-title mb-4">{item.item1.title}</h3>
                                            <p className="article-description">{item.item1.description}</p>
                                            <button type="button"
                                                href={item.item2.btnUrl}
                                                className="buttonSkyBlue mt-4">
                                                Read More{" "}
                                                <Image
                                                    src="/images/right-arrow-blue.png"
                                                    width={40}
                                                    height={40}
                                                    quality={100}
                                                />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-lg-6 col-5">
                                            <img
                                                src={item.item2.image}
                                                alt={item.item2.title}
                                                className="object-cover rounded"
                                                style={{ width: "100%" }}
                                            />
                                        </div>
                                        <div className="col-lg-6 col-7 article-card">
                                            <h3 className="article-title mb-4">{item.item2.title}</h3>
                                            <p className="article-description mb-4">{item.item2.description}</p>

                                            <button type="button"
                                                href={item.item2.btnUrl}
                                                className="buttonSkyBlue mt-4">
                                                Read More{" "}
                                                <Image
                                                    src="/images/right-arrow-blue.png"
                                                    width={40}
                                                    height={40}
                                                    quality={100}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className=" d-flex justify-content-center mt-4">
                    <button
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        className="articleBtn fade-in-section"
                        style={{ animationDelay: "0.5s" }}
                        type="button"
                    >
                        VIEW ALL BLOGS{" "}
                        <Image
                            src="/images/right-arrow-blue.png"
                            width={40}
                            height={40}
                            quality={100}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Article;
