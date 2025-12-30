import React, { useState, useEffect, useRef } from "react";
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
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        // OPTIMIZATION: Load video after page is interactive
        const loadVideo = () => {
            if (videoRef.current && !videoLoaded) {
                const source = document.createElement('source');
                source.src = '/videos/hero-banner-video2.mp4';
                source.type = 'video/mp4';
                videoRef.current.appendChild(source);
                videoRef.current.load();
                setVideoLoaded(true);
            }
        };

        // Use requestIdleCallback for better performance
        if ('requestIdleCallback' in window) {
            requestIdleCallback(loadVideo, { timeout: 2000 });
        } else {
            setTimeout(loadVideo, 1000);
        }

        // Also load on user interaction
        const handleInteraction = () => {
            loadVideo();
            // Remove listeners after first interaction
            document.removeEventListener('scroll', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
            document.removeEventListener('mousedown', handleInteraction);
        };

        document.addEventListener('scroll', handleInteraction, { passive: true, once: true });
        document.addEventListener('touchstart', handleInteraction, { passive: true, once: true });
        document.addEventListener('mousedown', handleInteraction, { passive: true, once: true });

        return () => {
            document.removeEventListener('scroll', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
            document.removeEventListener('mousedown', handleInteraction);
        };
    }, [videoLoaded]);

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
                Empower Your Academic Goals With <span className="highlight">Ignite's</span> Tutors
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
    const visibilityClass = isMobile ? styles.mobileHeroVisible : "";
    const fadeInClass = isMobile === false ? "fade-in-section" : "";

    return (
        // Apply data-scroll-section conditionally
        <section className={`${styles.hero} revealClipRightToLeft ${styles.homeherosection} `} {...scrollSectionAttr}>
            <div className="container">
                {/* Apply data-scroll attributes conditionally */}
                <div
                    {...scrollRevealAttr}
                    className={`${fadeInClass} ${visibilityClass}`}
                >
                    <div className={`row ${styles.heroMain}`}>
                        <div className={`col-12 col-lg-7 col-xl-7 ${!isMobile ? 'pe-5' : ''} ${styles.heroLeft} ${visibilityClass}`}>
                            <div
                                {...scrollRevealAttr}
                                className={`${fadeInClass} ${styles.heroMainHeading} ${mobileClass}`}
                                style={{ animationDelay: "0.4s" }}
                            >
                                <h2 className={styles.SubHeading}>BEST TUTORS IN UAE</h2>
                            </div>

                            <div
                                {...scrollRevealAttr}
                                className={fadeInClass}
                                style={{ animationDelay: "0.6s" }}
                            >
                                {renderTitle()}
                            </div>

                            <div
                                {...scrollRevealAttr}
                                className={fadeInClass}
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
                                {/* OPTIMIZED: Video loads lazily, source added dynamically */}
                                <video
                                    ref={videoRef}
                                    className={styles.heroVideo}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster="/images/banner-image-right.webp"
                                    preload="none"
                                >
                                    {/* Source will be added dynamically via JavaScript */}
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