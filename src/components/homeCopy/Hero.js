import React, { useState, useEffect, useRef } from "react";
import Head from "next/head"; // Import Head for LCP optimization
import Image from '@/components/CustomImageWrapper';
import styles from '@/styles/home-copy/Hero.module.css';

const Hero = () => {
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        // OPTIMIZATION: Load video source only after page is interactive
        // This keeps the initial bundle light
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
            const events = ['scroll', 'touchstart', 'mousedown', 'keydown'];
            events.forEach(ev => document.removeEventListener(ev, handleInteraction));
        };

        const events = ['scroll', 'touchstart', 'mousedown', 'keydown'];
        events.forEach(ev => document.addEventListener(ev, handleInteraction, { passive: true, once: true }));

        return () => {
            events.forEach(ev => document.removeEventListener(ev, handleInteraction));
        };
    }, [videoLoaded]);

    return (
        <>
            {/* LCP CRITICAL: Preload the poster image. 
                This forces the browser to fetch the image immediately, 
                fixing LCP without adding extra DOM elements that break the design mask. 
            */}
            <Head>
                <link
                    rel="preload"
                    as="image"
                    href="/images/banner-image-right.webp"
                    fetchPriority="high"
                />
            </Head>

            <section
                className={`${styles.hero} revealClipRightToLeft ${styles.homeherosection}`}
                data-scroll-section
            >
                <div className="container">
                    <div
                        data-scroll
                        data-scroll-class="is-inview"
                        data-scroll-repeat="true"
                        className="fade-in-section"
                    >
                        <div className={`row ${styles.heroMain}`}>
                            <div className={`col-12 col-lg-7 col-xl-7 pe-lg-5 ${styles.heroLeft}`}>
                                <div
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className={`${styles.heroMainHeading}`}
                                    style={{ animationDelay: "0.4s" }}
                                >
                                    <h2 className={styles.SubHeading}>BEST TUTORS IN UAE</h2>
                                </div>

                                <div
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    style={{ animationDelay: "0.6s" }}
                                >
                                    {/* TEXT OPTIMIZATION:
                                        Using CSS classes (d-lg-none) instead of JS state (isMobile) 
                                        ensures the text paints immediately, reducing Render Delay.
                                    */}
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
                                </div>

                                <div
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    style={{ animationDelay: "0.8s" }}
                                >
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

                            <div className={`col-12 col-lg-5 col-xl-5 ${styles.heroRight}`}>
                                <div className={styles.videoContainer}>
                                    {/* Restored original structure. 
                                        The <video> tag has the 'styles.heroVideo' class which applies the CSS Mask correctly.
                                        The poster loads fast because of the <link rel="preload"> in Head above.
                                    */}
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
                                        {/* Source added dynamically via JS to save bandwidth */}
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