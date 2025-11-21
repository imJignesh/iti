import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import InfoCard from '@/components/freedemo/InfoCard';
import Subjects from "@/components/freedemo/Subjects";
import MovingBanner from "@/components/freedemo/MovingBanner";
import MarqueeBanner from '@/components/freedemo/MarqueeBanner';
import Testimonial from "@/components/freedemo/Testimonial";
import TrainersMessage from "@/components/freedemo/videoTrainer";
import CallToAction from "@/components/freedemo/CallToAction";
import StudentAchievements from '@/components/freedemo/StudentAchivement';
import SEO from "@/components/SEO";

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
    // REMOVED: Unnecessary `mounted` state and conditional rendering.
    // Proper ref attachment and onBeforeInit is a more reliable pattern.

    return (

        <section className="achievements-container">
            <div className="achievements-swiperWrapper">
                {/* OPTIMIZATION: Added ref={prevRef} to correctly link the external button to Swiper */}
                <button ref={prevRef} className="swiper-button-prev customNavBtn">
                    <img
                        src="/images/right-arrow-blue.png"
                        alt="Prev"
                        style={{ transform: "rotate(180deg)" }}
                        width={32}
                        height={32}
                    />
                </button>
                {/* OPTIMIZATION: Added ref={nextRef} to correctly link the external button to Swiper */}
                <button ref={nextRef} className="swiper-button-next customNavBtn">
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
                        // This hook now correctly accesses the buttons via the refs
                        if (swiper.params.navigation) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }
                    }}
                    // OPTIMIZATION: Replaced flawed `navigation` prop with boolean.
                    // The onBeforeInit hook is now the sole source of truth for the elements.
                    navigation={true}
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


/**
 * NEW COMPONENT: Handles the hover state for the curriculum cards.
 * It replaces 'light' with 'dark' in the class name on hover.
 */
const CurriculumCard = ({ defaultClass, full, children }) => {
    // State to track if the card is being hovered
    const [isHovered, setIsHovered] = useState(false);

    // Determine the class name
    let colorClass = defaultClass; // e.g., 'light-green'
    if (isHovered) {
        // If hovered, replace 'light' with 'dark' (e.g., 'dark-green')
        colorClass = defaultClass.replace('light', 'dark');
    }

    // Combine base class, dynamic color class, and 'full' class if present
    const classes = `fd-curr ${colorClass} ${full ? 'full' : ''}`;

    return (
        <div
            className={classes}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </div>
    );
};


// 1. Accept the headerHeight prop
const FreeDemo = ({ headerHeight }) => {
    const scrollRef = useRef(null);
    const scrollInstanceRef = useRef(null);

    useEffect(() => {
        let scroll;
        const initScroll = async () => {
            // Locomotive Scroll initialization is kept with dynamic import and cleanup, which is good practice
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
            <SEO
                title="Free Demo Class | Ignite Training Institute In UAE"
                description="Book a free demo class with Ignite Training Institute in Dubai, UAE. Experience our personalized tutoring for IB, IGCSE, A-Levels, & AP before enrolling."
            />
            {/* 2. Apply it as paddingTop to the main scroll container */}
            <div
                ref={scrollRef}
                data-scroll-container
                style={{ paddingTop: `${headerHeight}px` }}
            >

                <section data-scroll-section>
                    <InfoCard />
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
                                <h2 className="SubHeading">CURRICULUMS & STANDARDISED TESTS</h2>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h3 className="achievementsTitle">
                                    Curriculum-Focused  <br></br> Tutoring & Exam Prep<span className="highlight"> Expertise</span> {" "}
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* OPTIMIZATION: Corrected 'class' to 'className' in the following divs */}
                    <div className="container freedemo-curriculm">

                        <div className="column">
                            <div className="title">CURRICULUMS</div>
                            <div className="cards">
                                {/* REPLACED div with CurriculumCard component */}
                                <CurriculumCard defaultClass="light-green">
                                    <span className="check">✔</span> IB (MYP & IBDP)
                                </CurriculumCard>
                                <CurriculumCard defaultClass="light-green">
                                    <span className="check">✔</span> IGCSE
                                </CurriculumCard>
                                <CurriculumCard defaultClass="light-green" full>
                                    <span className="check">✔</span> A Levels
                                </CurriculumCard>
                                <CurriculumCard defaultClass="light-green" full>
                                    <span className="check">✔</span> Private Candidate (Homeschooling)
                                </CurriculumCard>
                            </div>
                        </div>
                        <div className="column">
                            <div className="title tests">STANDARDISED TESTS</div>
                            <div className="cards">
                                {/* REPLACED div with CurriculumCard component */}
                                <CurriculumCard defaultClass="light-blue">
                                    <span className="check">✔</span> ACT
                                </CurriculumCard>
                                <CurriculumCard defaultClass="light-blue">
                                    <span className="check">✔</span> AP
                                </CurriculumCard>
                                <CurriculumCard defaultClass="light-blue" full>
                                    <span className="check">✔</span> UCAT
                                </CurriculumCard>
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
                                <h2 className="SubHeading">SUBJECTS WE SUPPORT</h2>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h3 className="achievementsTitle">
                                    In-Depth Tutoring That Makes Every<br></br>  <span className="highlight"> Subject</span> Clear{" "}
                                </h3>
                            </div>
                        </div>
                    </div>
                </section >
                {/* Subjects Section */}
                <Subjects />



                {/* achievements carousel */}
                {/* <section data-scroll-section>
                    <StudentAchievements />
                </section> */}

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
                                <h2 className="SubHeading">WHAT MORE DO WE OFFER?</h2>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h3 className="achievementsTitle">

                                    Comprehensive Guidance For Every <span className="highlight">Academic</span>{" "}
                                    Milestone
                                </h3>
                            </div>

                        </div>
                    </div>
                    {/* OPTIMIZATION: Corrected 'class' to 'className' in the following div */}
                    <div className="container what-we-offer">
                        <div className="step">
                            <div className="icon-wrap" data-step="01">
                                <img src="/images/school.png" alt="School Options" />
                            </div>
                            <h3 className="step-title mb-0">SCHOOL OPTIONS</h3>
                            <div className="step-desc">Discover schools that align with your core strengths & goals.</div>
                        </div>

                        <div className="step">
                            <div className="icon-wrap" data-step="02">
                                <img src="/images/idealcur.png" alt="Ideal Curriculum" />
                            </div>
                            <h3 className="step-title mb-0">IDEAL CURRICULUM</h3>
                            <div className="step-desc">Choose the right-fit curriculum for lasting academic success.</div>
                        </div>

                        <div className="step">
                            <div className="icon-wrap" data-step="03">
                                <img src="/images/subject.png" alt="Subject Choices" />
                            </div>
                            <h3 className="step-title mb-0">SUBJECT CHOICES</h3>
                            <div className="step-desc">Choose subjects that match your career & higher education goals.</div>
                        </div>

                        <div className="step">
                            <div className="icon-wrap" data-step="04">
                                <img src="/images/universitypath.png" alt="University Pathways" />
                            </div>
                            <h3 className="step-title mb-0">UNIVERSITY PATHWAYS</h3>
                            <div className="step-desc">Map a clear, strategic path to top international universities.</div>
                        </div>
                    </div>


                </section>

                {/* What We Offer End */}
                {/* <MovingBanner /> */}

                <section data-scroll-section>
                    <MarqueeBanner />
                </section>

                <Testimonial />

                <section data-scroll-section>
                    <TrainersMessage />
                </section>

                <section data-scroll-section>
                    <CallToAction />
                </section>
            </div >
        </>
    );
};

export default FreeDemo;