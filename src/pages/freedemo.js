import { useEffect, useRef, useState } from "react";
import styles from "../styles/ib.module.css";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Curriculum from "@/components/ib/Curriculum";
import Subjects from "@/components/ib/Subjects";
import MovingBanner from "@/components/ib/MovingBanner";
import Testimonial from "@/components/ib/Testimonial";
import Usps from "@/components/ib/Usps";
import UspsSecondary from "@/components/ib/UspsSecondary";
import Faq from "@/components/ib/Faqs";
import Article from "@/components/ib/Article";
import GallerySlider from "@/components/ib/GallerySlider";



const achievements = [
    {
        id: 1,
        logo: "/images/achievements-1.png", // Fauget University
        score: "98%",
        name: "TANIYA SHARMA",
        description: "LOREM IPSUM DOLOR SIT",
    },
    {
        id: 2,
        logo: "/images/achievements-2.png", // University of Pennsylvania
        score: "98%",
        name: "TANIYA SHARMA",
        description: "LOREM IPSUM DOLOR SIT",
    },
    {
        id: 3,
        logo: "/images/achievements-3.png", // Stanford University
        score: "98%",
        name: "TANIYA SHARMA",
        description: "LOREM IPSUM DOLOR SIT",
    },
];

const BookIcon = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 7H20V19.5A2.5 2.5 0 0 1 17.5 22H6.5A2.5 2.5 0 0 1 4 19.5V4.5Z" />
    </svg>
);

const AchievementsCarousel = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="achievements-container">
            <div className="achievements-swiperWrapper">
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
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={4}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 25 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                >
                    {achievements.map((a, idx) => (
                        <SwiperSlide key={a.id}>
                            <div
                                className="achievements-slideWrapper"
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                            >
                                <div className="achievements-slideCard">
                                    <div className="achievements-logoWrapper">
                                        <Image
                                            src={a.logo}
                                            width={idx == 0 ? 260 : 160}
                                            height={220}
                                            quality={100}
                                            alt={`${a.name} logo`}
                                            style={{ objectFit: "contain", backgroundColor: "#f3f3f3" }}

                                        />
                                        <div className="achievements-score">{a.score}</div>
                                    </div>
                                </div>

                                <div className="achievements-info">
                                    <div className="achievements-name">{a.name}</div>
                                    <div className="achievements-bottomRow">
                                        <div className="achievements-iconWrapper">
                                            <BookIcon />
                                        </div>
                                        <div className="achievements-descriptionText">{a.description}</div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

const FreeDemo = () => {
    const scrollRef = useRef(null);
    const scrollInstanceRef = useRef(null);

    useEffect(() => {
        let scroll;
        const initScroll = async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            if (!scrollRef.current) return;
            scroll = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
                lerp: 0.1,
            });
            scrollInstanceRef.current = scroll;
        };
        if (typeof window !== "undefined") {
            initScroll();
        }
        return () => {
            scrollInstanceRef.current?.destroy();
            scrollInstanceRef.current = null;
        };
    }, []);

    return (
        <>
            <div ref={scrollRef} data-scroll-container style={{ padding: 20 }}>
                <section className={styles.ibBanner} data-scroll-section style={{ backgroundImage: "url('/images/blogbanner.jpg')" }}>
                    <div className="">
                        <div className="row align-items-center p-10">
                            <div className="col-lg-7">
                                <div
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className={`fade-in-section ${styles.leftContent}`}
                                    style={{ animationDelay: "0.1s", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                                >
                                    <div className="freedemobanner-overlay"></div>
                                    <div className={`${styles.contentInner}`} style={{ justifyContent: "center", alignContent: "center", height:"100%" }}>
                                        <h1 className={styles.mainHeading}>
                                            Ignite Your Path To Academic Excellence
                                        </h1>
                                        <p className={styles.subHeading}>LOREM IPSUM DOLOR SIT AMET</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className={`fade-in-section ${styles.formContainer}`}
                                    style={{ animationDelay: "0.3s" }}
                                >
                                    <h3 className={styles.formHeading}>
                                        GET A FREE DEMO CLASS + FREE STUDY RESOURCES
                                    </h3>

                                    <form>
                                        <input type="text" className={styles.formInput} placeholder="NAME" />

                                        <div className="row">
                                            <div className="col-md-6">
                                                <input
                                                    type="email"
                                                    className={styles.formInput}
                                                    placeholder="EMAIL"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="tel"
                                                    className={styles.formInput}
                                                    placeholder="PH.NO"
                                                />
                                            </div>
                                        </div>

                                        <input
                                            type="text"
                                            className={styles.formInput}
                                            placeholder="SCHOOL"
                                        />

                                        <textarea
                                            className={styles.formTextarea}
                                            placeholder="DROP A MESSAGE"
                                        ></textarea>

                                        <button type="submit" className={styles.submitButton}>
                                            <span className={styles.submitText}>SUBMIT</span>
                                            <div className={styles.submitArrow}>
                                                <Image
                                                    src="/images/right-arrow.png"
                                                    width={18}
                                                    height={18}
                                                    quality={100}
                                                    alt="submit arrow"
                                                />
                                            </div>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* curriculum section */}

                < section className="achievementsSection" >
                    <div className="container">
                        <div className="achievementsHeadings">
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.1s" }}
                            >
                                <h4 className="SubHeading">curriculum & standardized tests we offer?</h4>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="achievementsTitle">
                                    Lorem ipsum dolor sit amet, <br></br>  <span className="highlight"> consectetur</span> adipiscing{" "}
                                </h1>
                            </div>
                        </div>
                    </div>
                </section >
                <section className="container">
                    <div className="curriculum-col curriculum-col-left" style={{ borderRadius: 20}}>
                        <p className="curriculum-section-heading1 text-center" style={{ fontSize: 22, borderBottomColor: 'grey', borderBottomWidth: 1 }}>CURRICULUMS</p>
                        <div style={{ display: "flex", flexDirection: "row", gap: "20px", justifyContent: "space-around" }}>
                            <button
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="aboutBtn fade-in-section curriculum-left-button"
                                style={{ animationDelay: "0.5s" }}
                                type="button"
                            >
                                <Image
                                    src="/images/check-active.png"
                                    width={40}
                                    height={40}
                                    quality={100}
                                />{" "}IB (MYP & IBDP)
                            </button> <button
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="aboutBtn fade-in-section curriculum-left-button"
                                style={{ animationDelay: "0.5s" }}
                                type="button"
                            >
                                <Image
                                    src="/images/check-inactive.png"
                                    width={40}
                                    height={40}
                                    quality={100}
                                />{" "}IGCSE
                            </button> <button
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="aboutBtn fade-in-section curriculum-left-button"
                                style={{ animationDelay: "0.5s" }}
                                type="button"
                            >
                                <Image
                                    src="/images/check-inactive.png"
                                    width={40}
                                    height={40}
                                    quality={100}
                                />{" "}A-LEVELS

                            </button>
                        </div>
                    </div>
                    <div className="curriculum-col curriculum-col-right" style={{ borderRadius: 20, marginTop: 20 }}>

                        <p className="curriculum-section-heading2 text-center" style={{ fontSize: 22, borderBottomColor: 'grey', borderBottomWidth: 1, borderRadius:0 }}>STANDARDISED TESTS</p>
                        <div style={{ display: "flex", flexDirection: "row", gap: "20px", justifyContent: "space-around" }}>
                            <button
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="aboutBtn fade-in-section  curriculum-right-button"
                                style={{ animationDelay: "0.5s" }}
                                type="button"
                            >
                                ACT{" "}
                                <Image
                                    src="/images/right-arrow-skyblue.png"
                                    width={40}
                                    height={40}
                                    quality={100}
                                />
                            </button>
                        </div>
                    </div>
                </section>
                {/* subjects header */}
                < section className="achievementsSection" >
                    <div className="container">
                        <div className="achievementsHeadings">
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.1s" }}
                            >
                                <h4 className="SubHeading">SUBJECTS</h4>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="achievementsTitle">
                                    Lorem ipsum dolor sit amet, <br></br>  <span className="highlight"> consectetur</span> adipiscing{" "}
                                </h1>
                            </div>
                        </div>
                    </div>
                </section >
                {/* Subjects Section */}
                <Subjects />


                {/* achievements header */}
                <section className="achievementsSection">
                    <div className="container">
                        <div className="achievementsHeadings">
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.1s" }}
                            >
                                <h4 className="SubHeading">STUDENT ACHIEVEMENTS</h4>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="achievementsTitle">
                                    Lorem ipsum dolor sit amet, <span className="highlight">consectetur</span>{" "}
                                    adipiscing
                                </h1>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.4s" }}
                            >
                                <p>
                                    Choosing us means partnering with experienced coaches who are dedicated to
                                    unlocking your potential.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* achievements carousel */}
                <AchievementsCarousel />
                <MovingBanner />
                <Testimonial />
            </div >
        </>
    );
};

export default FreeDemo;