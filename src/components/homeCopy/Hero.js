import React from "react";
// import Image from "next/image";
import Image from '@/components/CustomImageWrapper';

// No need for useRef or useEffect for scroll here.
// The data-scroll-container is now handled by the provider
const Hero = () => {
    return (
        // The data-scroll-section is still needed here
        <section className="hero revealClipRightToLeft" data-scroll-section>
            <div className="container">
                <div data-scroll data-scroll-class="is-inview" data-scroll-repeat="true" className="fade-in-section">
                    <div className="row heroMain">
                        <div className="col-12 col-lg-7 col-xl-7 pe-5 heroLeft">
                            {/* All your content with data-scroll attributes */}
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section heroMainHeading"
                                style={{ animationDelay: "0.4s" }}
                            >
                                <h3 className="SubHeading">BEST TUTORS IN UAE</h3>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.6s" }}
                            >
                                <h1 className="heroTitle-desktop">
                                    Ignite Your Path To Top <span className="highlight">Academic</span> Performance
                                </h1>
                                <h1 className="heroTitle-mobile">
                                    Empower Your Academic Goals With <span className="highlight">Ignite’s</span> Tutors

                                </h1>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.8s" }}
                            >
                                <p className="heroParagraph">
                                    <span>Improve Your Grades Today!</span>
                                    <b>
                                        We support students in progressing across IBDP, IB MYP, IGCSE, A-Levels, AP, & more through our curriculum-specific approach & expert tutors in Dubai, guiding them toward a stronger understanding & lasting growth.
                                    </b>
                                    <strong>
                                        Ignite's experienced tutors in Dubai help students thrive in IBDP, IB MYP, IGCSE, A-Levels, AP, & more with personalized support & structured programs, creating a learning environment where you can truly progress.
                                    </strong>
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 col-xl-5 heroRight">
                            <div className="videoContainer">
                                <video
                                    className="heroVideo"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster="/images/banner-image-right.png"
                                >
                                    <source src="/videos/education-video.mp4" type="video/mp4" />
                                    <Image
                                        src="/images/banner-image-right.png"
                                        alt="Education Platform"
                                        className="heroImage"
                                        width={500}
                                        height={500}
                                        quality={100}
                                    />
                                </video>
                            </div>
                            <div className="buttonGroup">
                                <a href="/join-free-demo-class/" className="buttonBlue">
                                    Get A Free Demo{" "}
                                    <Image
                                        src="/images/right-arrow-skyblue.png"
                                        width={40}
                                        height={40}
                                        quality={100}
                                        alt="Right arrow"
                                    />
                                </a>
                                <a href="/courses/" className="buttonSkyBlue">
                                    Explore Classes{" "}
                                    <Image
                                        src="/images/right-arrow-blue.png"
                                        width={40}
                                        height={40}
                                        quality={100}
                                        alt="Right arrow"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
        </section>
    );
};

export default Hero;