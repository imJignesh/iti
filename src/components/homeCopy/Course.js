// components/home/Course.js
import React, { useState } from "react";
import Image from "next/image";


const courseData = [
    {
        number: "01.",
        title: "IBDP",
        label: "IBDP",
        subtitle: "International Baccalaureate Diploma Programme",
        details: ["Total Courses: 5", "|", "Online & In-Person"],
        img: "/images/course-bg1.jpg",
        link: "/courses/ibdp-tutors-in-dubai",
    },
    {
        number: "02.",
        title: "IB MYP",
        label: "IB MYP",
        subtitle: "Middle Years Programme",
        details: ["Total Courses: 2", "|", "Online & In-Person"],
        img: "/images/course-bg2.jpg",
        link: "/courses/myp-tutors-in-dubai",
    },
    {
        number: "03.",
        title: "A Levels",
        label: "A Levels",
        subtitle: "Advanced Levels",
        details: ["Total Courses: 3", "|", "Online & In-Person"],
        img: "/images/course-bg3.jpg",
        link: "/courses/a-level-tutors-in-dubai",
    },
    {
        number: "04.",
        title: "IGCSE",
        label: "IGCSE",
        subtitle: "International General Certificate Of Secondary Education",
        details: ["Total Courses: 3", "|", "Online & In-Person"],
        img: "/images/course-bg4.jpg",
        link: "/courses/igcse-tutors-in-dubai",
    },
    {
        number: "05.",
        title: "Homeschooling",
        label: "Homeschooling",
        subtitle: "Private Candidacy",
        details: ["Total Courses: 2", "|", "Online & In-Person"],
        img: "/images/course-bg5.jpg",
        link: "/courses/homeschooling-tutors-in-dubai",
    },
];

const Course = () => {
    const [hovered, setHovered] = useState(1);

    return (
        <section className="courseSection">
            <div className="container">
                <div className="courseHeadings">
                    <div
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        className="fade-in-section"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <h2 className="SubHeading">TUTORING PROGRAMS</h2>
                    </div>
                    <div
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        className="fade-in-section"
                        style={{ animationDelay: "0.25s" }}
                    >
                        <h3 className="courseTitle">
                            Become Exam-Ready With Targeted Prep <span className="highlight">Courses</span>
                        </h3>
                    </div>
                    <div
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        className="fade-in-section"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <p>
                            Whether you're aiming for top scores or a strong foundation, Ignite’s courses give you the edge to succeed.
                        </p>
                    </div>
                </div>

                <div
                    data-scroll
                    data-scroll-class="is-inview"
                    data-scroll-repeat="true"
                    className="fade-in-section courseInner"
                    style={{ animationDelay: "0.4s" }}
                >
                    {courseData.map((card, idx) => {
                        const isActive = hovered === idx;
                        return (
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className={isActive ? "mainCard" : "sideCard"}
                                style={{ animationDelay: `${0.3 + idx * 0.25}s`, background: "none" }}
                                key={idx}
                                onMouseEnter={() => setHovered(idx)}
                            >
                                <span className="cardNumber">{card.number}</span>
                                <h3 className="cardTitle">{card.title}</h3>
                                <div
                                    className="cardBg"
                                    style={{ backgroundImage: `url('${card.img}')` }}
                                />
                                <div
                                    className={
                                        (isActive ? "mainCardContent" : "sideCardContent") +
                                        " " +
                                        (isActive ? "activeOverlay" : "inactiveOverlay")
                                    }
                                >
                                    <div>
                                        <div className="mainCardLabel">{card.label}</div>
                                        <h3 className="mainCardTitle">{card.subtitle}</h3>
                                    </div>
                                    <div className="mainCardDetails">
                                        {card.details.map((d, i) => (
                                            <span key={i}>{d}</span>
                                        ))}
                                    </div>
                                    <a href={card.link} className="nodecoration">
                                        <button className="buttonSkyBlue mainCardBtn">
                                            VIEW COURSE{" "}
                                            <Image
                                                src="/images/right-arrow-blue.png"
                                                width={40}
                                                height={40}
                                                quality={100}
                                            />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Course;
