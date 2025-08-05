import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';



const sampleSlides = [
    {
        title: "Slide 1",
        image: "/images/life--inginte.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
    },
    {
        title: "Slide 2",
        image: "/images/life--inginte.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."

    },
    {
        title: "Slide 3",
        image: "/images/life--inginte.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
    },
    {
        title: "Slide 4",
        image: "/images/life--inginte.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
    },
];

const GallerySlider = () => {


    return (
        <div className="container" style={{ marginTop: "40px" }}>
            <div className="row justify-content-center gallery-slider">
                <div className="col-md-10 col-12">
                    <div className="gallery-swiperWrapper">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-12">


                                {/* <Swiper
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
                                    breakpoints={{
                                        0: { slidesPerView: 1, slidesPerGroup: 1 },
                                        576: { slidesPerView: 1 },
                                        992: { slidesPerView: 1 },
                                        1200: { slidesPerView: 1 },
                                    }}
                                    className="testimonialSwiper gallery-swapper"
                                >
                                    {sampleSlides.map((i) => (
                                        <SwiperSlide key={i}>
                                            <div className="text-center">
                                                <img src={i.image}></img>
                                                <p className="mt-2" style={{ color: "#233467" }}>{i.desc}</p>
                                            </div>
                                        </SwiperSlide>

                                    ))}
                                </Swiper> */}

                                <Swiper
                                    effect={'cards'}
                                    grabCursor={true}
                                    modules={[EffectCards]}
                                    className="gallery-swipper"
                                >
                                    {sampleSlides.map((i) => (
                                        <SwiperSlide key={i} className="gallery-slider">
                                                <img src={i.image} style={{borderRadius:"10px"}}></img>
                                                <p className="gallery-text mt-2" style={{ color: "#233467" }}>{i.desc}</p>
                                        </SwiperSlide>

                                    ))}
                                </Swiper>
                                <button className="swiper-button-prev" style={{ border: 0, background: "none" }} tabIndex={0} aria-label="Previous testimonial">
                                    <img
                                        src="/images/right-arrow-blue.png"
                                        alt="Prev"
                                        style={{ transform: "rotate(180deg)" }}
                                        width={32}
                                        height={32}
                                    />
                                </button>
                                <button className="swiper-button-next" style={{ border: 0, background: "none" }} tabIndex={0} aria-label="Next testimonial">
                                    <img
                                        src="/images/right-arrow-blue.png"
                                        alt="Next"
                                        width={32}
                                        height={32}
                                    />
                                </button>

                                <div className="testimonialPagination"></div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GallerySlider;
