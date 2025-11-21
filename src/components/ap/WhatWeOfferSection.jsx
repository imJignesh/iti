import React from 'react';

const WhatWeOfferSection = () => {
    return (
        <>
            <section className="what-we-offer-section" data-scroll-section>
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
                                Comprehensive Guidance For Every AP <span className="highlight">Milestone</span>
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Container for the steps */}
                <div className="container what-we-offer">
                    <div className="step">
                        <div className="icon-wrap" data-step="01">
                            <img src="/images/school.png" alt="School Options" />
                        </div>
                        <h3 className="step-title mb-0">SCHOOL OPTIONS</h3>
                        <div className="step-desc">Identify schools that recognize AP credits & support learners.</div>
                    </div>

                    <div className="step">
                        <div className="icon-wrap" data-step="02">
                            <img src="/images/idealcur.png" alt="Ideal Curriculum" />
                        </div>
                        <h3 className="step-title mb-0">IDEAL CURRICULUM</h3>
                        <div className="step-desc">Integrate AP courses into your curriculum for stronger prep.</div>
                    </div>

                    <div className="step">
                        <div className="icon-wrap" data-step="03">
                            <img src="/images/subject.png" alt="Subject Choices" />
                        </div>
                        <h3 className="step-title mb-0">SUBJECT CHOICES</h3>
                        <div className="step-desc">Select subjects that align with your university major & career.</div>
                    </div>

                    <div className="step">
                        <div className="icon-wrap" data-step="04">
                            <img src="/images/universitypath.png" alt="University Pathways" />
                        </div>
                        <h3 className="step-title mb-0">UNIVERSITY PATHWAYS</h3>
                        <div className="step-desc">Leverage AP scores to strengthen applications to global schools.</div>
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