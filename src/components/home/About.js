import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="about-heading">
                    <span className="SubHeading">ABOUT US</span>
                </div>
                <div className="row about-section-inner">
                    <div className="col-12 col-lg-6 about-left">
                        <div className="about-image-wrap">
                            <div>
                                <img
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className="fade-in-section rectangle-bg"
                                    src="/images/rectangle-bg1.png"
                                    alt="Teacher"
                                />
                                {[...Array(3)].map((_, i) => (
                                    <img
                                        key={i}
                                        data-scroll
                                        data-scroll-class="is-inview"
                                        data-scroll-repeat="true"
                                        className="fade-in-section rectangle-bg"
                                        src="/images/rectangle-bg2.png"
                                        alt="Teacher"
                                    />
                                ))}
                            </div>
                            <Image
                                src="/images/about-us-img.png"
                                alt="Teacher"
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section about-image"
                                width={500}
                                height={400}
                            />
                            <div
                                data-scroll
                                data-scroll-class="is-clipped"
                                data-scroll-repeat="true"
                                className="stat-card stat-card-years"
                            >
                                <div className="stat-big">11 YEARS +</div>
                                <div className="stat-small">OF RICH TUTORING EXPERIENCE</div>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-clipped"
                                data-scroll-repeat="true"
                                className="stat-card stat-card-resources"
                            >
                                <div className="stat-big">1000+</div>
                                <div className="stat-small">
                                    RESOURCES THAT HELP YOU JOIN THE TOP 1%
                                </div>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="vertical-label fade-in-section"
                                style={{ animationDelay: "0.8s" }}
                            >
                                <span>4.9</span> GOOGLE REVIEWS
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 about-right">
                        <div
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <div className="about-heading-row">
                                <span className="SubHeading">ABOUT US</span>
                            </div>
                        </div>
                        <h2
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section about-title"
                            style={{ animationDelay: "0.2s" }}
                        >
                            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR{" "}
                            <span className="about-highlight">ADIPISCING</span>
                        </h2>
                        <p
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section about-desc"
                            style={{ animationDelay: "0.3s" }}
                        >
                            Choosing us means partnering with experienced coaches who are
                            dedicated to unlocking your potential. We offer personalized
                            strategies, proven methods, and unwavering support to help you
                            navigate challenges.
                        </p>
                        <div
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section w-100"
                            style={{ animationDelay: "0.4s" }}
                        >
                            <div className="about-stats-row">
                                <div className="about-stat-block">
                                    <div className="about-stat-big">2300+</div>
                                    <div className="about-stat-label">
                                        TRULY HAPPY STUDENTS FROM UAE
                                    </div>
                                </div>
                                <span className="about-stat-border"></span>
                                <div className="about-stat-block">
                                    <div className="about-stat-big">89%</div>
                                    <div className="about-stat-label">
                                        OF STUDENTS ACCEPTED TO TOP UNIVERSITIES
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="about-btn fade-in-section buttonSkyBlue"
                            style={{ animationDelay: "0.5s" }}
                            type="button"
                        >
                            GET A FREE DEMO{" "}
                            <Image
                                src="/images/right-arrow-blue.png"
                                width={40}
                                height={40}
                                alt="Arrow"
                                quality={100}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
