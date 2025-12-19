import React from 'react';

const WhatWeOfferSection = () => {
    return (
        <>
            <section className="what-we-offer-section" data-scroll-section>
                <div className="container">
                    <div className="achievementsHeadings">
                        <h2
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <h4 className="SubHeading">WHAT MORE DO WE OFFER?</h4>
                        </h2>
                        <div
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section"
                            style={{ animationDelay: "0.25s" }}
                        >
                            <h3 className="achievementsTitle">
                                Comprehensive Guidance For Every Academic <span className="highlight">Milestone</span>
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Container for the steps */}
                <div className="container what-we-offer">
                    <div className="step fade-in-section"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <div className="icon-wrap" data-step="01">
                            <img src="/images/school.png" alt="School Options" />
                        </div>
                        <h3 className="step-title mb-0">SCHOOL OPTIONS</h3>
                        <div className="step-desc">Discover schools that align with your core strengths & goals.</div>
                    </div>

                    <div className="step fade-in-section"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <div className="icon-wrap" data-step="02">
                            <img src="/images/idealcur.png" alt="Ideal Curriculum" />
                        </div>
                        <h3 className="step-title mb-0">IDEAL CURRICULUM</h3>
                        <div className="step-desc">Choose the right-fit curriculum for lasting academic success.</div>
                    </div>

                    <div className="step fade-in-section"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <div className="icon-wrap" data-step="03">
                            <img src="/images/subject.png" alt="Subject Choices" />
                        </div>
                        <h3 className="step-title mb-0">SUBJECT CHOICES</h3>
                        <div className="step-desc">Choose subjects that match your career & higher education goals.</div>
                    </div>

                    <div className="step fade-in-section"
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        style={{ animationDelay: "0.1s" }}
                    >
                        <div className="icon-wrap" data-step="04">
                            <img src="/images/universitypath.png" alt="University Pathways" />
                        </div>
                        <h3 className="step-title mb-0">UNIVERSITY PATHWAYS</h3>
                        <div className="step-desc">Map a clear, strategic path to top international universities.</div>
                    </div>
                </div>
            </section>
            <style jsx>{`
            @media (max-width: 575px) {
                .what-we-offer-section .SubHeading { 
                    margin: 0;
                }
            }
        `}</style>
        </>
    );
};

export default WhatWeOfferSection;