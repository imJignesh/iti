import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from '@/styles/home-copy/Hero.module.css';

// TEST VERSION: Uses img instead of video to debug LCP request discovery error

const HeroTest = () => {
    const [posterImage, setPosterImage] = useState('/images/video-cover.webp');

    useEffect(() => {
        // Set correct poster image based on screen width
        setPosterImage(window.innerWidth <= 767 ? '/images/video-cover-mobile.webp' : '/images/video-cover.webp');
    }, []);


    return (
        <>
            <Head>
                {/* Preload Background Decoration Images (low priority — not LCP) */}
                <link rel="preload" as="image" href="/images/banner-bg.webp" media="(min-width: 768px)" {...{ fetchpriority: 'low' }} />
                <link rel="preload" as="image" href="/images/banner-bg-mobile.webp" media="(max-width: 767px)" {...{ fetchpriority: 'low' }} />
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
                                    <img
                                        src={posterImage}
                                        alt="Ignite Training Institute Hero"
                                        className={styles.heroVideo}
                                        {...{ fetchpriority: 'high' }}
                                    />
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

export default HeroTest;
