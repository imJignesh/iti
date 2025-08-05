import { useEffect, useRef, useState } from 'react';
import styles from "../styles/ibdp.module.css"; 
import stylesib from "../styles/ib.module.css";

import Image from 'next/image';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Subjects from '@/components/ipdb/Subjects';
import Testimonial from '@/components/home/Testimonial';
import Achivement from '@/components/ipdb/Achivement';
import MovingBanner from '@/components/ipdb/MovingBanner';
import Faq from '@/components/ipdb/Faqs';
import GallerySlider from '@/components/ipdb/GallerySlider';
import IbdpCoures from '@/components/ipdb/IbdpCoures';
import Article from '@/components/ib/Article';
import UspsSecondary from '@/components/ib/UspsSecondary';
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
                                            width={160}
                                            height={120}
                                            quality={100}
                                            alt={`${a.name} logo`}
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                    <div className="achievements-score">{a.score}</div>
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

const IBDP = () => {
    const scrollRef = useRef(null);
    const scrollInstanceRef = useRef(null);

    // Locomotive Scroll setup
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
            <div ref={scrollRef} data-scroll-container>
                   <section className={stylesib.ibBanner} data-scroll-section>
                    <div className="">
                        <div className="row align-items-center p-10">
                            <div className="col-lg-7">
                                <div
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className={`fade-in-section ${stylesib.leftContent}`}
                                    style={{ animationDelay: "0.1s" }}
                                >
                                    <div className={stylesib.contentInner}>
                                        <h1 className={stylesib.mainHeading}>
                                            IBDP Tutors In Dubai, UAE For Curriculum Excellence
                                        </h1>
                                        <p className={stylesib.subHeading}>LOREM IPSUM DOLOR SIT AMET</p>

                                        <div className={stylesib.featureCards}>
                                            <div className={stylesib.featureCardInner}>
                                                <Image
                                                    src="/images/banner-icon1.png"
                                                    width={40}
                                                    height={40}
                                                    quality={100}
                                                    className={stylesib.cardImage}
                                                    alt="Grade 8 to 12 Support"
                                                />
                                                <p className={stylesib.featureText}>Grade 8 to 12 <br></br>Support</p>
                                            </div>
                                            <div className={stylesib.featureCardInner}>
                                                <Image
                                                    src="/images/banner-icon2.png"
                                                    width={40}
                                                    height={40}
                                                    quality={100}
                                                    className={stylesib.cardImage}
                                                    alt="Online & In-Person"
                                                />
                                                <p className={stylesib.featureText}>Online <br></br>& In-Person</p>
                                            </div>
                                            <div className={`${stylesib.featureCardInner} ${stylesib.featureCardInnerLast}`}>
                                                <Image
                                                    src="/images/ib/location.png"
                                                    width={40}
                                                    height={40}
                                                    quality={100}
                                                    className={stylesib.cardImage}
                                                    alt="Dubai (DIFC, JLT)"
                                                />
                                                <p className={stylesib.featureText}>Dubai<br></br> (DIFC, JLT)</p>
                                            </div>
                                        </div>

                                        <p className={stylesib.descriptionText}>
                                            We provide comprehensive academic support through our customized IB
                                            curriculum courses, giving students access to high-end learning with
                                            experienced and certified IB tutors across various IB subjects.
                                        </p>
                                    </div>

                                    <div className={stylesib.ctaButtons}>
                                        <button className={stylesib.ctaButton}>
                                            IGCSE TUTORS
                                            <div className={stylesib.arrowWrapper}>
                                                <Image
                                                    src="/images/right-arrow.png"
                                                    width={15}
                                                    height={15}
                                                    quality={100}
                                                    alt="arrow"
                                                />
                                            </div>
                                        </button>
                                        <button className={stylesib.ctaButton}>
                                            A-LEVELS TUTORS
                                            <div className={stylesib.arrowWrapper}>
                                                <Image
                                                    src="/images/right-arrow.png"
                                                    width={15}
                                                    height={15}
                                                    quality={100}
                                                    alt="arrow"
                                                />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className={`fade-in-section ${stylesib.formContainer}`}
                                    style={{ animationDelay: "0.3s" }}
                                >
                                    <h3 className={stylesib.formHeading}>
                                        GET A FREE DEMO CLASS + FREE STUDY RESOURCES
                                    </h3>

                                    <form>
                                        <input type="text" className={stylesib.formInput} placeholder="NAME" />

                                        <div className="row">
                                            <div className="col-md-6">
                                                <input
                                                    type="email"
                                                    className={stylesib.formInput}
                                                    placeholder="EMAIL"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="tel"
                                                    className={stylesib.formInput}
                                                    placeholder="PH.NO"
                                                />
                                            </div>
                                        </div>

                                        <input
                                            type="text"
                                            className={stylesib.formInput}
                                            placeholder="SCHOOL"
                                        />

                                        <textarea
                                            className={stylesib.formTextarea}
                                            placeholder="DROP A MESSAGE"
                                        ></textarea>

                                        <button type="submit" className={stylesib.submitButton}>
                                            <span className={stylesib.submitText}>SUBMIT</span>
                                            <div className={stylesib.submitArrow}>
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
                </section >
                {/* achievements carousel */}
                < AchievementsCarousel />
                  {/* curriculum header */}
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
                                <h4 className="SubHeading">Courses</h4>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="achievementsTitle">
                                    Stages Of INTERNATIONAL BACCALAUREATE  <br></br> Supported By<span className="highlight"> Ignite</span>{" "}
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
                                    Choosing us means partnering with experienced coaches who are
                                    dedicated to unlocking your potential.
                                </p>
                            </div>
                        </div>
                    </div>
                </section >
                <IbdpCoures></IbdpCoures>
                <Subjects></Subjects>
                <Testimonial></Testimonial>
                {/* curriculum header */}
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
                                <h4 className="SubHeading">IGNITE ACHIEVEMENTS</h4>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="achievementsTitle">
                                    Stages Of INTERNATIONAL BACCALAUREATE  <br></br> Supported By<span className="highlight"> Ignite</span>{" "}
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
                                    Choosing us means partnering with experienced coaches who are
                                    dedicated to unlocking your potential.
                                </p>
                            </div>
                        </div>
                    </div>
                </section >
                <Achivement></Achivement>
                <MovingBanner></MovingBanner>
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
                                <h4 className="SubHeading">Ups's</h4>
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
                <UspsSecondary></UspsSecondary>
                  < section className="alumniSection mb-4" >
                    <div className="container">
                        <div className="alumniSubSection">
                            <h3
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section SubHeading alumniSubHeading"
                                style={{ animationDelay: "0.1s" }}
                            >
                                LIFE AT IGNITE
                            </h3>
                            <h2
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section alumniTitle"
                                style={{ margin: "24px 0 0 0", animationDelay: "0.2s" }}
                            >
                                LOREM IPSUM DOLOR SIT AMET, consectetur
                                <span className="alumniHighlight"> ADIPISCING</span>
                            </h2>
                        </div>
                    </div>
                </section >
                <GallerySlider />
                <Faq />
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
                                <h4 className="SubHeading">LATEST ARTICLES TO READ</h4>
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
                <Article />
                   <div className="container faq-secondary-container">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Lorem ipsum dolor sit amet?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IBDP;
