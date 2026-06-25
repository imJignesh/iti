import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import styles from '@/styles/home-copy/Hero.module.css';

const Hero = () => {
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [posterImage, setPosterImage] = useState('/images/video-cover.webp');
    const isVideoLoadingRef = useRef(false);

    useEffect(() => {
        // Set correct poster image based on screen width
        setPosterImage(window.innerWidth <= 767 ? '/images/video-cover-mobile.webp' : '/images/video-cover.webp');
    }, []);

    useEffect(() => {
        const loadVideo = () => {
            if (videoRef.current && !isVideoLoadingRef.current) {
                isVideoLoadingRef.current = true;
                if (videoRef.current.getElementsByTagName('source').length === 0) {
                    const source = document.createElement('source');
                    source.src = '/videos/hero-banner-video2.mp4';
                    source.type = 'video/mp4';
                    videoRef.current.appendChild(source);
                }
                videoRef.current.load();
            }
        };

        const delay = window.innerWidth <= 767 ? 6000 : 2000;
        // LCP FIX: Use setTimeout directly.
        // requestIdleCallback(fn, {timeout}) runs fn AS SOON as the browser is idle,
        // which often happens at 2s, causing the video paint to become a late LCP.
        // We want a strict minimum delay here to protect the LCP window.
        const timerId = setTimeout(() => {
            if ('requestIdleCallback' in window) {
                requestIdleCallback(loadVideo);
            } else {
                loadVideo();
            }
        }, delay);

        const handleInteraction = () => {
            loadVideo();
        };

        document.addEventListener('scroll', handleInteraction, { passive: true, once: true });
        document.addEventListener('touchstart', handleInteraction, { passive: true, once: true });
        document.addEventListener('mousedown', handleInteraction, { passive: true, once: true });

        return () => {
            clearTimeout(timerId);
            document.removeEventListener('scroll', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
            document.removeEventListener('mousedown', handleInteraction);
        };
    }, [videoLoaded]);

    return (
        <>
            <Head>
                {/* Preload Background Decoration Images (low priority — not LCP) */}
                <link rel="preload" as="image" href="/images/banner-bg.webp" media="(min-width: 768px)" fetchPriority="low" />
                <link rel="preload" as="image" href="/images/banner-bg-mobile.webp" media="(max-width: 767px)" fetchPriority="low" />
            </Head>

            <div className={styles.heroSectionWrapper}>
                <section className={`${styles.hero} ${styles.homeherosection}`}>
                    <div className="container">
                        <div className={`row ${styles.heroMain}`}>
                            <div className={`col-12 col-lg-7 col-xl-7 pe-lg-5 ${styles.heroLeft}`}>
                                <div className={`${styles.heroMainHeading}`}>
                                    <h1 className={styles.SubHeading}>BEST TUTORS IN UAE</h1>
                                </div>

                                <h2 className={styles.heroTitle}>
                                    Empower Your Academic Goals With <span className="highlight">Ignite's</span> Tutors
                                </h2>

                                <div className={styles.heroParagraph}>
                                    <h3>Improve Your Grades Today!</h3>
                                    <b>
                                        We support students in progressing across IBDP, IB MYP, IGCSE, A-Levels, AP, &amp; more through our curriculum-specific approach &amp; expert tutors in Dubai, guiding them toward a stronger understanding &amp; lasting growth.
                                    </b>
                                    <strong>
                                        Ignite's experienced tutors in Dubai help students thrive in IBDP, IB MYP, IGCSE, A-Levels, AP, &amp; more with personalized support &amp; structured programs.
                                    </strong>
                                </div>
                            </div>

                            <div className={`col-12 col-lg-5 col-xl-5 ${styles.heroRight}`}>
                                <div className={styles.videoContainer}>
                                    <video
                                        ref={videoRef}
                                        className={styles.heroVideo}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="none"
                                        poster={posterImage}
                                        onCanPlay={() => setVideoLoaded(true)}
                                    >
                                    </video>
                                </div>

                                <div className={styles.buttonGroup}>
                                    <a href="/join-free-demo-class/" className="buttonBlue">
                                        Get A Free Demo{" "}
                                        <img
                                            src="/images/right-arrow-skyblue.webp"
                                            width={40}
                                            height={40}
                                            alt="Right arrow"
                                            loading="eager"
                                        />
                                    </a>
                                    <a href="/courses/" className="buttonSkyBlue">
                                        Explore Classes{" "}
                                        <img
                                            src="/images/right-arrow-blue.webp"
                                            width={40}
                                            height={40}
                                            alt="Right arrow"
                                            loading="eager"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Hero;