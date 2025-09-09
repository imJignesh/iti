'use client';

import { useEffect, useRef, useState } from 'react';
import TeamBanner from "@/components/team/Banner";
import MovingBanner from "@/components/home/MovingBanner";

// Data array for the trainers
const trainersData = [
    {
        name: "Prakshi Sharma",
        image: "/images/prakshi-trainer.png",
        description: "Prakshi is an experienced educator specializing in innovative teaching methodologies and student-centered learning.She has a strong background in developing engaging curriculum frameworks and guiding students toward academic excellence. With her passion for holistic education, she fosters critical thinking, creativity, and lifelong learning in every classroom she leads.",
    },
    {
        name: "Nikhil Pawar",
        image: "/images/prakshi-trainer.png",
        description: "Prakshi is an experienced educator specializing in innovative teaching methodologies and student-centered learning.She has a strong background in developing engaging curriculum frameworks and guiding students toward academic excellence. With her passion for holistic education, she fosters critical thinking, creativity, and lifelong learning in every classroom she leads.",
    },
    {
        name: "Nikhil Pawar",
        image: "/images/prakshi-trainer.png",
        description: "Prakshi is an experienced educator specializing in innovative teaching methodologies and student-centered learning.",
    },
    {
        name: "Nikhil Pawar",
        image: "/images/prakshi-trainer.png",
        description: "Prakshi is an experienced educator specializing in innovative teaching methodologies and student-centered learning.",
    },
    {
        name: "Nikhil Pawar",
        image: "/images/prakshi-trainer.png",
        description: "Prakshi is an experienced educator specializing in innovative teaching methodologies and student-centered learning.",
    },
    {
        name: "Nikhil Pawar",
        image: "/images/prakshi-trainer.png",
        description: "Prakshi is an experienced educator specializing in innovative teaching methodologies and student-centered learning.",
    },
    {
        name: "Nikhil Pawar",
        image: "/images/prakshi-trainer.png",
        description: "Prakshi is an experienced educator specializing in innovative teaching methodologies and student-centered learning.",
    },
    {
        name: "Nikhil Pawar",
        image: "/images/prakshi-trainer.png",
        description: "Prakshi is an experienced educator specializing in innovative teaching methodologies and student-centered learning.",
    },
];

const OurTeam = () => {
    const scrollRef = useRef(null);
    const scrollInstanceRef = useRef(null);
    const [expandedTrainers, setExpandedTrainers] = useState({});

    // Locomotive Scroll setup - similar to blog.js
    useEffect(() => {
        const initScroll = async () => {
            try {
                const LocomotiveScrollModule = await import("locomotive-scroll");
                const LocomotiveScroll = LocomotiveScrollModule.default || LocomotiveScrollModule;

                if (!scrollRef.current) {
                    console.log("Locomotive Scroll: scrollRef.current is null, cannot initialize.");
                    return;
                }

                scrollInstanceRef.current = new LocomotiveScroll({
                    el: scrollRef.current,
                    smooth: true,
                    lerp: 0.1,
                });

                if (scrollInstanceRef.current && typeof scrollInstanceRef.current.update === 'function') {
                    scrollInstanceRef.current.update();
                    console.log("✅ LocomotiveScroll initialized and updated");
                }
            } catch (error) {
                console.error("Failed to load or initialize LocomotiveScroll:", error);
            }
        };

        if (typeof window !== "undefined") {
            initScroll();
        }

        return () => {
            if (scrollInstanceRef.current) {
                scrollInstanceRef.current.destroy();
                scrollInstanceRef.current = null;
            }
        };
    }, []);

    const toggleReadMore = (index) => {
        setExpandedTrainers(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const getBreadcrumbPath = () => {
        return [
            { name: 'Home', href: '/' },
            { name: 'Our Team', href: '/ourteam' }
        ];
    };

    const breadcrumbPath = getBreadcrumbPath();

    return (
        <>
            <div ref={scrollRef} data-scroll-container>
                <section data-scroll-section>
                    <TeamBanner />
                </section>

                <section className="meet-out-team" data-scroll-section>
                    <div className="container">
                        <div className="meet-team-Headings">
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.1s" }}
                            >
                                <h3 className="SubHeading">MEET OUR TEAM</h3>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="meetTitle">
                                    Dedicated Ignite Trainers Shaping Bright <span className="highlight">Futures</span>
                                </h1>
                            </div>

                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="cofounderTitle">
                                    CO-FOUNDERS
                                </h1>
                            </div>
                        </div>
                        <div className="meet-team-cards">
                            <div className="team-card">
                                <div className="team-card-image">
                                    <img src="/images/sumit.png" alt="Sumit Advani" />
                                </div>
                                <div className="team-card-info">
                                    <div className="team-card-name">
                                        <h3>Sumit Advani</h3>
                                    </div>
                                    <div className="team-card-content">
                                        <p>Sumit, Co-Founder of Ignite Training Institute, holds a B.Sc. in IT along with a Diploma in Advertising & PR. With over 10 years of experience in the UAE’s education industry, he specializes in designing tailored academic programs that align with each student’s unique goals. Beyond academics, Sumit actively oversees the institute’s infrastructure & spearheads marketing initiatives, ensuring Ignite continues to deliver excellence both inside & outside the classroom.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="team-card">
                                <div className="team-card-image">
                                    <img src="/images/mohnish.png" alt="Mohnish Ahuja" />
                                </div>
                                <div className="team-card-info">
                                    <div className="team-card-name">
                                        <h3>Mohnish Ahuja</h3>
                                    </div>
                                    <div className="team-card-content">
                                        <p>Mohnish, Co-Founder of Ignite Training Institute, holds a BMS degree & serves as the Head of Academics. With over 12 years of expertise in education, standardized testing, & student profile development, he brings a wealth of knowledge to the classroom. An IB-certified trainer and experienced A-Level educator, Mohnish is passionate about guiding students toward academic excellence. Driven by his vision, he is dedicated to transforming Ignite into a global hub for world-class education.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="admin-staff" data-scroll-section>
                    <div className="container">
                        <div className="meet-team-Headings">
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="cofounderTitle">
                                    STUDENT SUCCESS MANAGERS
                                </h1>
                            </div>
                        </div>
                        <div className="admin-staff-cards">
                            <div className="admin-card">
                                <div className="admin-card-image">
                                    <img src="/images/saif.png" alt="Saif" />
                                </div>
                                <div className="admin-card-info">
                                    <div className="admin-card-content">
                                        <p>Saif, an ACCA-qualified professional, serves as the Student Coordinator & manages all student-related matters, from planning academic activities to ensuring smooth daily operations. With over 5 years of experience, Saif is committed to helping students achieve their goals & navigate the academic & admission process. Outside work, he enjoys reading, staying active through fitness routines, & pursuing his passion for house music by DJ’ing & mixing tracks, finding both creativity & relaxation in blending beats.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="admin-card">
                                <div className="admin-card-image">
                                    <img src="/images/ahzeb.png" alt="Ahzeb" />
                                </div>
                                <div className="admin-card-info">
                                    <div className="admin-card-content">
                                        <p>Ahzeb plays a key role by combining business development expertise with technical oversight. With over a decade of experience across diverse sales teams & cultures, he excels in crafting unique strategies, enrolling students in the right programs, coordinating schedules, providing tech support, & managing the company’s database. He works closely with teams, fosters partnerships, & contributes to performance reviews & new business initiatives. Outside of work, he’s a stand-up performer & avid writing enthusiast.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="moving-container" data-scroll-section>
                    <MovingBanner />
                </section>
                <section className="trainer-section" data-scroll-section>
                    <div className="container">
                        <div className="meet-team-Headings">
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="cofounderTitle">
                                    Trainers
                                </h1>
                            </div>
                        </div>
                        <div className="trainer-cards">
                            {trainersData.map((trainer, index) => (
                                <div className="trainer-card" key={index}>
                                    <div className="trainer-name">
                                        <h3>{trainer.name}</h3>
                                    </div>
                                    <div className="trainer-image">
                                        <img src={trainer.image} alt={trainer.name} />
                                    </div>
                                    <div className="trainer-info">
                                        <p className={`description ${expandedTrainers[index] ? "expanded" : ""}`}>
                                            {expandedTrainers[index]
                                                ? trainer.description
                                                : trainer.description.length > 150
                                                    ? trainer.description.slice(0, 150) + "..."
                                                    : trainer.description}
                                        </p>
                                        {trainer.description.length > 150 && (
                                            <a
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleReadMore(index);
                                                }}
                                            >
                                                {expandedTrainers[index] ? "Read Less" : "Read More"}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="moving-container" data-scroll-section>
                    <MovingBanner />
                </section>
                <section className="trainer-message-section" data-scroll-section>
                    <div className="container">
                        <div className="meet-team-Headings">

                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.1s" }}
                            >
                                <h3 className="SubHeading">Trainers Message</h3>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="meetTitle">
                                    Dedicated Ignite Trainers <br />Shaping Bright <span className="highlight">Futures</span>
                                </h1>
                            </div>
                        </div>
                        <div className="trainer-message-card">
                            <div className="trainer-card">
                                <div className="trainer-image">
                                    <img src="/images/Trainermessage1.png" alt="" />
                                </div>
                                <div className="trainer-experience grbg">
                                    <span className="grtx">10+ Years</span>
                                </div>
                            </div>
                            <div className="trainer-card small">
                                <div className="trainer-image">
                                    <img src="/images/Trainermessage2.png" alt="" />
                                </div>
                                <div className="trainer-experience blbg">
                                    <span className="bltx">10+ Years</span>
                                </div>
                            </div>
                            <div className="trainer-card">
                                <div className="trainer-image">
                                    <img src="/images/Trainermessage3.png" alt="" />
                                </div>
                                <div className="trainer-experience grbg">
                                    <span className="grtx">10+ Years</span>
                                </div>
                            </div>
                            <div className="trainer-card small">
                                <div className="trainer-image">
                                    <img src="/images/Trainermessage4.png" alt="" />
                                </div>
                                <div className="trainer-experience blbg">
                                    <span className="bltx">10+ Years</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-section" data-scroll-section>
                    <div className="meet-team-Headings">

                        <div
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <h3 className="SubHeading">Coll To action</h3>
                        </div>

                    </div>
                    <div className="container call-to-action">
                        <div className="cta-container">
                            <div className="cta-content">
                                <h2>LOREM IPSUM DOLOR SIT AMET,<br /> CONSECTETUR ADIPISCING</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                </p>
                                <div className="cta-buttons">
                                    <a href="#" className="btn">Join Our Team <span>→</span></a>
                                    <a href="#" className="btn">Join a Free Demo <span>→</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default OurTeam;