import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Subjects from "@/components/act/Subjects";
import MovingBanner from "@/components/act/MovingBanner";
import UspsSecondary from "@/components/act/UspsSecondary";
import ActCoures from '@/components/act/ActCoures';
import Faq from "@/components/act/Faqs";
import Article from "@/components/act/Article";
import GallerySlider from "@/components/act/GallerySlider";



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

const ACT = () => {
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
            <div ref={scrollRef} data-scroll-container className="act" style={{ padding: 20 }}>
                <section className="actBanner" data-scroll-section>
                    <div className="">
                        <div className="row align-items-center p-10">
                            <div className="col-lg-7">
                                <div
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className="fade-in-section leftContent"
                                    style={{ animationDelay: "0.1s" }}
                                >
                                    <div className="contentInner">
                                        <h1 className="mainHeading">
                                            ACT TUTORS IN<br />
                                            DUBAI, FOR ASSURED <br />
                                            HIGH SCORES
                                        </h1>
                                        <p className="subHeading">LOREM IPSUM DOLOR SIT AMET</p>

                                        <div className="featureCards">
                                            <div className="featureCardInner">
                                                <Image
                                                    src="/images/banner-icon1.png"
                                                    width={40}
                                                    height={40}
                                                    quality={100}
                                                    className="cardImage"
                                                    alt="Focused ACT Prep"
                                                />
                                                <p className="featureText">Focused ACT<br></br>Prep</p>
                                            </div>
                                            <div className="featureCardInner">
                                                <Image
                                                    src="/images/banner-icon2.png"
                                                    width={40}
                                                    height={40}
                                                    quality={100}
                                                    className="cardImage"
                                                    alt="Online & In-Person"
                                                />
                                                <p className="featureText">Online <br></br>& In-Person</p>
                                            </div>
                                            <div className="featureCardInner featureCardInnerLast">
                                                <Image
                                                    src="/images/location.png"
                                                    width={40}
                                                    height={40}
                                                    quality={100}
                                                    className="cardImage"
                                                    alt="Dubai (DIFC, JLT)"
                                                />
                                                <p className="featureText">Dubai<br></br> (DIFC, JLT)</p>
                                            </div>
                                        </div>

                                        <p className="descriptionText">
                                            We provide comprehensive academic support through our customized
                                            IB curriculum courses, giving students access to high-end learning with
                                            experienced and certified IB tutors across various IB subjects.
                                        </p>
                                    </div>

                                    <div className="ctaButtons">
                                        <button className="ctaButton">
                                            IGCSE TUTORS
                                            <div className="arrowWrapper">
                                                <Image
                                                    src="/images/right-arrow.png"
                                                    width={15}
                                                    height={15}
                                                    quality={100}
                                                    alt="arrow"
                                                />
                                            </div>
                                        </button>
                                        <button className="ctaButton">
                                            A-LEVELS TUTORS
                                            <div className="arrowWrapper">
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
                                    className="fade-in-section formContainer"
                                    style={{ animationDelay: "0.3s" }}
                                >
                                    <h3 className="formHeading">
                                        GET A FREE DEMO CLASS + FREE STUDY RESOURCES
                                    </h3>

                                    <form>
                                        <input type="text" className="formInput" placeholder="NAME" />

                                        <div className="row">
                                            <div className="col-md-6">
                                                <input
                                                    type="email"
                                                    className="formInput"
                                                    placeholder="EMAIL"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <input
                                                    type="tel"
                                                    className="formInput"
                                                    placeholder="PH.NO"
                                                />
                                            </div>
                                        </div>

                                        <input
                                            type="text"
                                            className="formInput"
                                            placeholder="SCHOOL"
                                        />

                                        <textarea
                                            className="formTextarea"
                                            placeholder="DROP A MESSAGE"
                                        ></textarea>

                                        <button type="submit" className="submitButton">
                                            <span className="submitText">SUBMIT</span>
                                            <div className="submitArrow">
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
                <ActCoures></ActCoures>
                {/* ACT TEST Overview Section */}
                <section className="act-exam-overview">
                    <div className="container">
                        <div className="actTestHeadings">
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.1s" }}
                            >
                                <h4 className="SubHeading">ACT TEST OVERVIEW</h4>
                            </div>

                        </div>

                        <div className="act-table-container">
                            <table className="act-exam-table">
                                <thead>
                                    <tr>
                                        <th>ACT SECTION</th>
                                        <th>NO. OF QUESTIONS</th>
                                        <th>TIMES ALLOTED</th>
                                        <th>SCORE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>English</td>
                                        <td>75</td>
                                        <td>45 Minutes</td>
                                        <td>0-36</td>
                                    </tr>
                                    <tr>
                                        <td>Maths</td>
                                        <td>60</td>
                                        <td>60 Minutes</td>
                                        <td>0-36</td>
                                    </tr>
                                    <tr>
                                        <td>Reading</td>
                                        <td>40</td>
                                        <td>35 Minutes</td>
                                        <td>0-36</td>
                                    </tr>
                                    <tr>
                                        <td>Science</td>
                                        <td>40</td>
                                        <td>35 Minutes</td>
                                        <td>0-36</td>
                                    </tr>
                                    <tr>
                                        <td>Writing</td>
                                        <td>1</td>
                                        <td>40 Minutes</td>
                                        <td>0-36</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section> {/* Correctly closed section tag */}
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
                                <h3 className="SubHeading">USP's</h3>
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
                <UspsSecondary />
                < section className="alumniSection mb-4" >
                    <div className="container">
                        <div className="achievementsHeadings">
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
                    <GallerySlider />
                </section >

                <Faq />
                <MovingBanner />
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
            </div> {/* Correctly closed data-scroll-container div */}

        </>
    );
};

export default ACT;