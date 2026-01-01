import React, { useState, useEffect, useRef } from "react";
import Image from '@/components/CustomImageWrapper';
import styles from '@/styles/home-copy/Hero.module.css';

const Hero = () => {
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
                                {/* LCP OPTIMIZATION: Render BOTH titles and toggle via CSS.
                                    This prevents hydration mismatch and layout shifts caused by JS checks.
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
                            <div className={styles.videoContainer} style={{ position: 'relative', overflow: 'hidden' }}>
                                {/* LCP CRITICAL: Explicitly render the poster image with priority.
                                    This beats the <video poster> attribute and ensures the LCP element paints immediately.
                                */}
                                <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                                    <Image
                                        src="/images/banner-image-right.webp"
                                        alt="Ignite Training Institute Student"
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        priority={true}
                                        fetchPriority="high"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>

                                <video
                                    ref={videoRef}
                                    className={styles.heroVideo}
                                    style={{ position: 'relative', zIndex: 1 }}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster="/images/banner-image-right.webp" // Keep as fallback
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
    );
};

export default Hero;