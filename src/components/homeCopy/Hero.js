import React, { useState, useEffect } from "react";
import Image from '@/components/CustomImageWrapper';
// Import styles as an object from the CSS Module file
import styles from '@/styles/home-copy/Hero.module.css';

const useDeviceCheck = (breakpoint = 992) => {
    const [isMobile, setIsMobile] = useState(undefined);

    useEffect(() => {
        const checkDevice = () => {
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth < breakpoint);
            }
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);

        return () => window.removeEventListener('resize', checkDevice);
    }, [breakpoint]);

    return isMobile;
};

const Hero = () => {
    const isMobile = useDeviceCheck();

    const renderTitle = () => {
        if (isMobile === undefined) {
            return (
                <h1 className={styles.heroTitleDesktop}>
                    Ignite Your Path To Top <span className="highlight">Academic</span> Performance
                </h1>
            );
        }

        return isMobile ? (
            <h1 className={styles.heroTitleMobile}>
                Empower Your Academic Goals With <span className="highlight">Ignite’s</span> Tutors
            </h1>
        ) : (
            <h1 className={styles.heroTitleDesktop}>
                Ignite Your Path To Top <span className="highlight">Academic</span> Performance
            </h1>
        );
    };

    let mobileClass = '';
    if (isMobile) {
        mobileClass = 'pt-3 pb-3';
    }

    // Define scroll attributes as variables, conditionally including them only when NOT mobile
    const scrollSectionAttr = isMobile ? {} : { 'data-scroll-section': true };
    const scrollRevealAttr = isMobile ? {} : {
        'data-scroll': true,
        'data-scroll-class': 'is-inview',
        'data-scroll-repeat': 'true'
    };

    return (
        // Apply data-scroll-section conditionally
        <section className={`${styles.hero} revealClipRightToLeft ${styles.homeherosection} `} {...scrollSectionAttr}>
            <div className="container">
                {/* Apply data-scroll attributes conditionally */}
                <div
                    {...scrollRevealAttr}
                    className="fade-in-section"
                >
                    <div className={`row ${styles.heroMain}`}>
                        <div className={`col-12 col-lg-7 col-xl-7 pe-5 ${styles.heroLeft}`}>
                            <div
                                {...scrollRevealAttr}
                                className={`fade-in-section ${styles.heroMainHeading} ${mobileClass}`}
                                style={{ animationDelay: "0.4s" }}
                            >
                                <h2 className={styles.SubHeading}>BEST TUTORS IN UAE</h2>
                            </div>

                            <div
                                {...scrollRevealAttr}
                                className="fade-in-section"
                                style={{ animationDelay: "0.6s" }}
                            >
                                {renderTitle()}
                            </div>

                            <div
                                {...scrollRevealAttr}
                                className="fade-in-section"
                                style={{ animationDelay: "0.8s" }}
                            >
                                <div className={styles.heroParagraph}>
                                    {/* These are global elements, their styles are handled via :global() in CSS */}
                                    <h3>Improve Your Grades Today!</h3>
                                    <b>
                                        We support students in progressing across IBDP, IB MYP, IGCSE, A-Levels, AP, & more through our curriculum-specific approach & expert tutors in Dubai, guiding them toward a stronger understanding & lasting growth.
                                    </b>
                                    <strong>
                                        Ignite's experienced tutors in Dubai help students thrive in IBDP, IB MYP, IGCSE, A-Levels, AP, & more with personalized support & structured programs.
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className={`col-12 col-lg-5 col-xl-5 ${styles.heroRight}`}>
                            <div className={styles.videoContainer}>
                                <video
                                    className={styles.heroVideo}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster="/images/banner-image-right.webp"
                                >
                                    <source src="/videos/education-video.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div className={styles.buttonGroup}>
                                <a href="/join-free-demo-class/" className="buttonBlue">
                                    Get A Free Demo{" "}
                                    <Image
                                        src="/images/right-arrow-skyblue.webp"
                                        width={40}
                                        height={40}
                                        quality={100}
                                        alt="Right arrow"
                                        loading="lazy"
                                    />
                                </a>
                                <a href="/courses/" className="buttonSkyBlue">
                                    Explore Classes{" "}
                                    <Image
                                        src="/images/right-arrow-blue.webp"
                                        width={40}
                                        height={40}
                                        quality={100}
                                        alt="Right arrow"
                                        loading="lazy"
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