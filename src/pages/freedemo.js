import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Subjects from "@/components/freedemo/Subjects";
import MovingBanner from "@/components/ib/MovingBanner";
import Testimonial from "@/components/ib/Testimonial";



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
            <div ref={scrollRef} data-scroll-container>
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
                                            IGNITE YOUR PATH TO<br />ACADEMIC EXCELLENCE
                                        </h1>
                                        <p className="subHeading">NOW ALSO OPEN IN JLT, DUBAI</p>

                                        <div className="featureCards">
                                            <div className="featureCardInner">
                                                <Image
                                                    src="/images/banner-icon1.png"
                                                    width={40}
                                                    height={40}
                                                    quality={100}
                                                    className="cardImage"
                                                    alt="Grade 8 to 12 Support"
                                                />
                                                <p className="featureText">Grade 8 to 12<br></br>Support</p>
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
                                            Experience curriculum-aligned tutoring for IBDP, MYP, IGCSE, A-Levels, & AP delivered by expert educators who know the exams inside out, with a focus on clarity, measurable progress, & real academic results.
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
                                <h4 className="SubHeading">CURRICULUMS & STANDARDISED TESTS</h4>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="achievementsTitle">
                                    Curriculum-Focused  <br></br> Tutoring & Exam Prep<span className="highlight"> Expertise</span> {" "}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div class="container freedemo-curriculm">

                        <div class="column">
                            <div class="title">CURRICULUMS</div>
                            <div class="cards">
                                <div class="fd-curr dark-green"><span class="check">✔</span> IB (MYP & IBDP)</div>
                                <div class="fd-curr light-green"><span class="check">✔</span> IGCSE</div>
                                <div class="fd-curr light-green full"><span class="check">✔</span> A Levels</div>
                                <div class="fd-curr light-green full"><span class="check">✔</span> Private Candidate (Homeschooling)</div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="title tests">STANDARDISED TESTS</div>
                            <div class="cards">
                                <div class="fd-curr dark-blue"><span class="check">✔</span> ACT</div>
                                <div class="fd-curr light-blue"><span class="check">✔</span> AP</div>
                                <div class="fd-curr light-blue full"><span class="check">✔</span> UCAT</div>
                            </div>
                        </div>
                    </div>
                </section >

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
                                <h4 className="SubHeading">SUBJECTS WE SUPPORT</h4>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="achievementsTitle">
                                    In-Depth Tutoring That Makes Every<br></br>  <span className="highlight"> Subject</span> Clear{" "}
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
                                <h4 className="SubHeading">OUR ALUMNI IN TOP UNIVERSITIES</h4>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="achievementsTitle">
                                    Preparing Students To Thrive On <span className="highlight">The World</span>{" "}
                                    Stage
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

                {/* what we offer Start */}
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
                                <h4 className="SubHeading">WHAT MORE DO WE OFFER?</h4>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="achievementsTitle">

                                    Comprehensive Guidance For Every <span className="highlight">Academic</span>{" "}
                                    Milestone
                                </h1>
                            </div>

                        </div>
                    </div>
                    <div class="what-we-offer">
                        <div class="step">
                            <div class="icon-wrap" data-step="01">
                                <img src="images/school.png" alt="School Options" />
                            </div>
                            <div class="step-title">SCHOOL OPTIONS</div>
                            <div class="step-desc">Discover schools that align with your core strengths & goals.</div>
                        </div>

                        <div class="step">
                            <div class="icon-wrap" data-step="02">
                                <img src="images/idealcur.png" alt="Ideal Curriculum" />
                            </div>
                            <div class="step-title">IDEAL CURRICULUM</div>
                            <div class="step-desc">Choose the right-fit curriculum for lasting academic success.</div>
                        </div>

                        <div class="step">
                            <div class="icon-wrap" data-step="03">
                                <img src="images/subject.png" alt="Subject Choices" />
                            </div>
                            <div class="step-title">SUBJECT CHOICES</div>
                            <div class="step-desc">Choose subjects that match your career & higher education goals.</div>
                        </div>

                        <div class="step">
                            <div class="icon-wrap" data-step="04">
                                <img src="images/universitypath.png" alt="University Pathways" />
                            </div>
                            <div class="step-title">UNIVERSITY PATHWAYS</div>
                            <div class="step-desc">Map a clear, strategic path to top international universities.</div>
                        </div>
                    </div>


                </section>

                {/* What We Offer End */}
                <MovingBanner />
                <Testimonial />
            </div >
        </>
    );
};

export default FreeDemo;