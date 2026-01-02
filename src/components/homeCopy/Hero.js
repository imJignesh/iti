import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from '@/components/CustomImageWrapper';
import styles from '@/styles/home-copy/Hero.module.css';

const Hero = () => {
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        // OPTIMIZATION: Load video source only after page is interactive
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

        if ('requestIdleCallback' in window) {
            requestIdleCallback(loadVideo, { timeout: 2000 });
        } else {
            setTimeout(loadVideo, 1000);
        }

        const handleInteraction = () => {
            loadVideo();
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

    return (
        <>
            <Head>
                {/* LCP OPTIMIZATION: Responsive Preloads 
                    This ensures the correct image is fetched immediately based on device width.
                */}
                <link
                    rel="preload"
                    as="image"
                    href="/images/banner-image-right.webp"
                    fetchPriority="high"
                    media="(min-width: 576px)"
                />
                <link
                    rel="preload"
                    as="image"
                    href="/images/banner-image-right-m.webp"
                    fetchPriority="high"
                    media="(max-width: 575px)"
                />
            </Head>

            {/* Removed dynamic classes dependent on JS state. Using static classes. */}
            <section className={`${styles.hero} ${styles.homeherosection}`}>
                <div className="container">
                    <div>
                        <div className={`row ${styles.heroMain}`}>
                            {/* Left Content */}
                            <div className={`col-12 col-lg-7 col-xl-7 pe-lg-5 ${styles.heroLeft}`}>
                                <div className={`${styles.heroMainHeading}`}>
                                    <h2 className={styles.SubHeading}>BEST TUTORS IN UAE</h2>
                                </div>

                                {/* TITLE OPTIMIZATION: Both titles exist, CSS toggles them. Zero JS delay. */}
                                <div className="d-lg-none">
                                    <h1 className={`${styles.heroTitleMobile} pt-3 pb-3`}>
                                        Empower Your Academic Goals With <span className="highlight">Ignite's</span> Tutors
                                    </h1>
                                </div>
                                <div className="d-none d-lg-block">
                                    <h1 className={styles.heroTitleDesktop}>
                                        Ignite Your Path To Top <span className="highlight">Academic</span> Performance
                                    </h1>
                                </div>

                                <div>
                                    <div className={styles.heroParagraph}>
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

                            {/* Right Content (Video/Image) */}
                            <div className={`col-12 col-lg-5 col-xl-5 ${styles.heroRight}`}>
                                <div className={styles.videoContainer}>
                                    {/* LCP CRITICAL: 
                                        1. No 'poster' attribute (prevents wrong image download).
                                        2. CSS background-image handles the image display instantly.
                                    */}
                                    <video
                                        ref={videoRef}
                                        className={styles.heroVideo}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="none"
                                    >
                                        {/* Source added dynamically via JS */}
                                    </video>
                                </div>

                                <div className={styles.buttonGroup}>
                                    <a href="/join-free-demo-class/" className="buttonBlue">
                                        Get A Free Demo{" "}
                                        <Image
                                            src="/images/right-arrow-skyblue.webp"
                                            width={40}
                                            height={40}
                                            alt="Right arrow"
                                            priority
                                        />
                                    </a>
                                    <a href="/courses/" className="buttonSkyBlue">
                                        Explore Classes{" "}
                                        <Image
                                            src="/images/right-arrow-blue.webp"
                                            width={40}
                                            height={40}
                                            alt="Right arrow"
                                            priority
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;