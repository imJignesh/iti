import React, { useRef, useState, useEffect } from "react";

const Hero = () => {
    const videoRef = useRef(null);
    const [isVideoVisible, setIsVideoVisible] = useState(false);

    const handleVideoPlaying = () => {
        setIsVideoVisible(true);
    };

    useEffect(() => {
        // Keep the poster as the mobile hero image. Loading the 1.4 MB video
        // on a phone competes with the image and delays the LCP paint.
        if (window.matchMedia('(max-width: 991px)').matches) return undefined;

        const loadVideo = () => videoRef.current?.load();
        const idleId = 'requestIdleCallback' in window
            ? window.requestIdleCallback(loadVideo, { timeout: 4000 })
            : window.setTimeout(loadVideo, 3000);

        return () => {
            if ('cancelIdleCallback' in window && typeof idleId === 'number') {
                window.cancelIdleCallback(idleId);
            } else {
                window.clearTimeout(idleId);
            }
        };
    }, []);

    return (
        <>
            <div className="heroSectionWrapper">
                <section className="hero homeherosection">
                    <div className="container">
                        <div className="row heroMain">
                            <div className="col-12 col-lg-7 col-xl-7 pe-lg-5 heroLeft">
                                <div className="SubHeading">TUITION CENTRES IN DUBAI</div>

                                <h1 className="heroTitle">
                                    Tuition Centres in Dubai for <span className="highlight">IGCSE, A-Level, IB &amp; AP</span>
                                </h1>

                                <div className="heroParagraph">
                                    <h3>Improve Your Grades Today!</h3>
                                    <b>
                                        Whether your child studies IGCSE, A-Level, IBDP, IB MYP or AP, our tuition centre in Dubai gives them the right help at the right time. Our tutors explain every topic clearly, so your child feels confident and exam-ready.
                                    </b>
                                </div>
                            </div>

                            <div className="col-12 col-lg-5 col-xl-5 heroRight">
                                <div className="videoContainer">
                                    <img
                                        src="/images/hero-banner-video-c1-poster.webp"
                                        alt="Ignite tutor guiding a student through a live online tutoring class"
                                        width={552}
                                        height={620}
                                        className="heroPoster"
                                        loading="eager"
                                        decoding="sync"
                                        fetchPriority="high"
                                    />
                                    <video
                                        ref={videoRef}
                                        className={`heroVideo${isVideoVisible ? ' heroVideoVisible' : ''}`}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="none"
                                        onPlaying={handleVideoPlaying}
                                    >
                                        <source src="/videos/hero-banner-video-c1.mp4" type="video/mp4" />
                                    </video>
                                </div>

                                <div className="buttonGroup">
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

            <style jsx>{`
                .heroSectionWrapper {
                    padding: 8.5vh 0;
                }

                @media (max-width: 991px) {
                    .heroSectionWrapper {
                        padding: 0;
                    }

                    .heroSectionWrapper .hero {
                        padding-top: 20px !important;
                    }
                }

                .hero {
                    padding: 0 !important;
                    /* LCP FIX: Desktop Background - Loads instantly */
                    background: url(/images/banner-bg.webp);
                    background-repeat: no-repeat;
                    background-size: 30vw;
                    background-position: 6.5vw 1vw;

                    /* Force visibility */
                    opacity: 1 !important;
                    visibility: visible !important;
                    transform: none !important;
                    clip-path: none !important;
                }

                .homeherosection > div {
                    position: relative;
                }

                .homeherosection > div::after {
                    content: "";
                    z-index: 1;
                    background: url(/images/hero-bg-1.webp) no-repeat;
                    width: 13%;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    aspect-ratio: 81 / 32;
                    background-size: cover;
                }

                .heroMain {
                    display: flex;
                    align-items: center;
                }

                .heroLeft {
                    margin-top: -1vw;
                }

                .heroTitle {
                    margin: 40px 0 50px 0;
                    display: block;
                    font-size: 2rem;
                    font-weight: 700;
                    line-height: 1.1;
                    text-transform: uppercase;
                    color: var(--blue-color);
                }

                .heroParagraph {
                    padding-top: 30px;
                    font-size: 1vw;
                    font-weight: 400;
                    color: var(--blue-color);
                    line-height: 1.5;
                }

                .heroParagraph b,
                .heroParagraph strong {
                    font-weight: 400;
                }

                .heroParagraph strong {
                    display: none;
                }

                .heroParagraph h3 {
                    text-transform: uppercase;
                    display: block;
                    font-size: 1.3rem;
                    font-weight: 500;
                    letter-spacing: 1px;
                    margin-bottom: 30px;
                }

                .heroRight {
                    display: flex;
                    justify-content: flex-end;
                    position: relative;
                }

                .videoContainer {
                    position: relative;
                    width: 30vw;
                    height: 33vw;
                    overflow: hidden;
                }

                /*
                 * Mirrors .heroVideo's box exactly at every breakpoint (see the
                 * matching overrides further down) so the poster and video can
                 * never end up sized differently from one another.
                 */
                .heroPoster {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 30vw;
                    height: 33vw;
                    object-fit: fill;
                    object-position: center;
                    z-index: 1;
                }

                .heroVideo {
                    position: relative;
                    z-index: 2;
                    opacity: 0;
                    transition: opacity 0.4s ease;
                    width: 30vw;
                    height: 33vw;
                    object-fit: fill;
                    display: block;
                }

                .heroVideo.heroVideoVisible {
                    opacity: 1;
                }

                .buttonGroup {
                    position: absolute;
                    top: 0vw;
                    bottom: 1vw;
                    right: 2vw;
                    z-index: 9;
                    display: flex;
                    gap: 1vw;
                    justify-content: flex-end;
                    flex-direction: column;
                    width: 17.5vw;
                }

                .buttonGroup :global(img) {
                    width: 1.7vw;
                    height: auto;
                }

                .buttonGroup :global(.buttonBlue),
                .buttonGroup :global(.buttonSkyBlue) {
                    text-transform: uppercase;
                    cursor: pointer;
                    z-index: 1;
                    border: 0;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1vw;
                    padding: 1vw 1.5vw;
                    font-size: 1.1vw;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all .3s;
                    display: flex;
                    position: relative;
                    overflow: hidden;
                }

                .SubHeading {
                    font-size: 28px;
                    font-weight: 600;
                    line-height: 1.2;
                    text-transform: uppercase;
                    background: linear-gradient(285.71deg, #3f88ba -4.32%, #161664 106.53%), linear-gradient(0deg, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2));
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                    position: relative;
                    padding: 0 40px;
                    display: inline-block;
                }

                .SubHeading:before,
                .SubHeading:after {
                    content: "";
                    width: 14px;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: url(/images/heading-icon.webp) center no-repeat;
                    background-size: contain;
                }

                .SubHeading:before {
                    left: 0;
                }

                .SubHeading:after {
                    right: 0;
                }

                @media (max-width: 1024px) {
                    .SubHeading {
                        font-size: 24px;
                    }
                }

                @media (max-width: 575px) {
                    .hero {
                        background-size: 100%;
                    }

                    .SubHeading {
                        box-sizing: border-box;
                        display: block;
                        width: 88%;
                        margin: 0 auto;
                        padding: 16px 36px;
                        font-size: clamp(12px, 4vw, 15px);
                        text-align: center;
                        white-space: nowrap;
                    }

                    .SubHeading:before,
                    .SubHeading:after {
                        width: 14px;
                        height: 24px;
                        top: 50%;
                        transform: translateY(-50%);
                    }

                    .SubHeading:before {
                        left: 14px;
                    }

                    .SubHeading:after {
                        right: 14px;
                    }
                }

                /* --- Media Queries --- */

                @media (max-width: 1800px) {
                    .hero {
                        background-size: 28vw;
                        background-position: 6.5vw 1vw;
                    }
                }

                @media (max-width: 1500px) {
                    .hero {
                        background-position: top 10% left;
                    }

                    .heroLeft .heroParagraph {
                        font-size: 1.3vw;
                    }
                }

                @media (max-width: 1280px) {
                    .heroRight .buttonGroup {
                        gap: 0.8vw;
                    }
                }

                @media (max-width: 1024px) {
                    .heroLeft .heroTitle {
                        font-size: 35px;
                    }

                    .heroLeft .heroParagraph {
                        font-size: 18px;
                    }
                }

                @media (max-width: 991px) {
                    .hero {
                        padding-bottom: 30px;
                    }

                    .videoContainer {
                        position: relative;
                        width: 100vw;
                        height: 48vw;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .heroRight {
                        justify-content: center;
                    }

                    .heroRight .buttonGroup {
                        top: 0vw;
                        bottom: 1vw;
                        right: 19vw;
                        width: 31vw;
                    }

                    .heroLeft :global(div) {
                        text-align: center;
                    }

                    .heroParagraph b {
                        display: none;
                    }

                    .heroParagraph strong {
                        display: block;
                        opacity: 0.6;
                        font-weight: 500;
                    }

                    .heroVideo,
                    .heroPoster {
                        object-position: center;
                        width: 100vw;
                        height: 50vw;
                    }
                }

                @media (max-width: 767px) {
                    .heroLeft {
                        padding: inherit !important;
                    }

                    .videoContainer {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .hero {
                        background: url(/images/banner-bg-mobile.webp);
                        background-repeat: no-repeat;
                        background-size: 85%;
                        background-position: top right;
                        padding: 20px 0 0 0;

                        clip-path: none !important;
                        animation: none !important;
                    }

                    .heroRight .buttonGroup {
                        left: 40%;
                        right: 15%;
                    }

                    .heroTitle {
                        margin: 0 auto;
                        padding: 20px 0;
                        border-bottom: 1px solid #CCCCCC;
                        max-width: 90vw;
                        line-height: 23px;
                        font-size: 20.4px;
                        text-align: center;
                    }

                    .heroTitle :global(span) {
                        display: inline-block;
                    }

                    .heroLeft .heroParagraph {
                        padding-top: 10px;
                        margin-bottom: 10px;
                    }
                }

                @media (max-width: 700px) {
                    .hero {
                        background-position: top -1% right;
                        background-size: 460px;
                    }
                }

                @media (max-width: 575px) {
                    .hero {
                        padding: 10px 0 0 0;
                        background: url(/images/banner-bg-mobile.webp) no-repeat;
                        background-size: 50vh 16vh;
                        background-position: top 0vh right -2vh;
                    }

                    .videoContainer {
                        height: 95vw;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    /* The video is centered here via the container's flex
                       justify-content, but that doesn't affect .heroPoster
                       since it's position:absolute — so it needs the
                       equivalent centering done explicitly. */
                    .heroPoster {
                        top: 0;
                        left: 50%;
                        width: auto;
                        height: 100%;
                        transform: translateX(-50%);
                    }

                    .heroVideo {
                        height: 100%;
                        width: auto;
                        text-align: center;
                        margin: 0 auto;
                    }

                    .heroRight .buttonGroup :global(.buttonBlue),
                    .heroRight .buttonGroup :global(.buttonSkyBlue) {
                        justify-content: space-around;
                    }

                    .heroRight .buttonGroup :global(img) {
                        width: 7vw;
                    }

                    .heroLeft .heroTitle {
                        font-size: 25px;
                        margin: 15px auto;
                        max-width: 85%;
                        line-height: 1.2;
                    }

                    .heroParagraph strong {
                        font-size: 15px;
                        max-width: 95vw;
                        display: inline-block;
                        padding-bottom: 10px;
                    }

                    .heroRight .buttonGroup {
                        justify-content: flex-end;
                        gap: 3vw;
                        width: 55vw;
                        bottom: 0;
                        left: auto;
                        right: 6vw;
                    }

                    .heroRight .buttonGroup :global(.buttonBlue),
                    .heroRight .buttonGroup :global(.buttonSkyBlue) {
                        font-size: 1rem;
                        font-weight: 600;
                        padding: 8px 15px;
                    }

                    .heroLeft :global(div) {
                        padding-top: 0px;
                    }
                }

                @media (max-width: 425px) {
                    .hero {
                        padding: 20px 0 0 0 !important;
                        background-size: 100%;
                    }

                    .videoContainer {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 88vw;
                    }

                    .heroRight {
                        padding-top: 20px;
                    }

                    .heroParagraph h3 {
                        font-size: 0.9rem;
                    }
                    .heroLeft{
                        margin-top:0;
                    }
                    .heroLeft .heroTitle {
                        font-size: 1.2rem;
                        text-align: center;
                    }

                    .heroLeft .heroTitle :global(span) {
                        display: inline-block;
                    }

                    .heroParagraph strong {
                        font-size: 15px;
                        max-width: 95%;
                        display: inline-block;
                    }

                    .heroRight .buttonGroup {
                        justify-content: flex-end;
                        gap: 1vw;
                        width: 53vw;
                        bottom: 0;
                        left: auto;
                        right: 8vw;
                    }

                    .heroLeft :global(div) {
                        padding-top: 7px;
                    }

                    .heroRight .buttonGroup :global(.buttonBlue),
                    .heroRight .buttonGroup :global(.buttonSkyBlue) {
                        font-size: 0.8rem;
                    }

                  

                    .buttonGroup :global(.buttonBlue),
                    .buttonGroup :global(.buttonSkyBlue) {
                        border-radius: 5vw;
                    }
                }

                @media (max-width: 360px) {
                    .hero {
                        background: url(/images/banner-bg-mobile.webp) right -7vh top 1% / 50vh 16vh no-repeat;
                    }

                   

                    .videoContainer {
                        height: 85vw;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .heroLeft :global(div) {
                        padding-top: 0px;
                    }

                    .heroRight .buttonGroup :global(.buttonBlue),
                    .heroRight .buttonGroup :global(.buttonSkyBlue) {
                        font-size: 0.8rem;
                        padding: 8px 10px;
                    }
                }
            `}</style>
        </>
    );
};

export default Hero;
