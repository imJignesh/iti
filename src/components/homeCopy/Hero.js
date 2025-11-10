import React, { useState, useEffect } from "react";
// import Image from "next/image";
import Image from '@/components/CustomImageWrapper';

// --- 1. Custom Hook for Device Detection ---
/**
 * Detects if the current device is considered 'mobile' based on a breakpoint.
 * Uses client-side window object check to avoid hydration issues during SSR.
 * @param {number} breakpoint - The max width (in pixels) for a device to be considered mobile (default: 992px).
 * @returns {boolean | undefined} - true if mobile, false if desktop/tablet, undefined during initial SSR.
 */
const useDeviceCheck = (breakpoint = 992) => {
    // Start as undefined to avoid hydration mismatch with Next.js SSR
    const [isMobile, setIsMobile] = useState(undefined);

    useEffect(() => {
        // Function to determine if the screen width is less than the breakpoint
        const checkDevice = () => {
            // Only run if 'window' is defined (i.e., running on the client)
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth < breakpoint);
            }
        };

        // Run check initially
        checkDevice();

        // Add event listener for window resizing
        window.addEventListener('resize', checkDevice);

        // Cleanup the event listener
        return () => window.removeEventListener('resize', checkDevice);
    }, [breakpoint]);

    return isMobile;
};
// --- End of useDeviceCheck Hook ---

// No need for useRef or useEffect for scroll here.
// The data-scroll-container is now handled by the provider
const Hero = () => {
    // Use the custom hook to determine the device
    const isMobile = useDeviceCheck();

    // Function to handle the conditional title rendering
    const renderTitle = () => {
        // If isMobile is undefined (during initial SSR/load), render the desktop title as the default.
        if (isMobile === undefined) {
            return (
                <h1 className="heroTitle-desktop">
                    Ignite Your Path To Top <span className="highlight">Academic</span> Performance
                </h1>
            );
        }

        // Client-side conditional rendering: render only the appropriate title
        return isMobile ? (
            <h1 className="heroTitle-mobile">
                Empower Your Academic Goals With <span className="highlight">Ignite’s</span> Tutors
            </h1>
        ) : (
            <h1 className="heroTitle-desktop">
                Ignite Your Path To Top <span className="highlight">Academic</span> Performance
            </h1>
        );
    };

    return (
        // The data-scroll-section is still needed here
        <section className="hero revealClipRightToLeft " data-scroll-section>
            <div className="container">
                <div data-scroll data-scroll-class="is-inview" data-scroll-repeat="true" className="fade-in-section">
                    <div className="row heroMain">
                        <div className="col-12 col-lg-7 col-xl-7 pe-5 heroLeft">
                            {/* All your content with data-scroll attributes */}
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section heroMainHeading pt-3 pb-3"
                                style={{ animationDelay: "0.4s" }}
                            >
                                <h3 className="SubHeading">BEST TUTORS IN UAE</h3>
                            </div>

                            {/* --- Conditionally Rendered Hero Title --- */}
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.6s" }}
                            >
                                {renderTitle()}
                            </div>
                            {/* ---------------------------------------- */}

                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.8s" }}
                            >
                                <p className="heroParagraph pt-3 pb-3">
                                    <span>Improve Your Grades Today!</span>
                                    <b>
                                        We support students in progressing across IBDP, IB MYP, IGCSE, A-Levels, AP, & more through our curriculum-specific approach & expert tutors in Dubai, guiding them toward a stronger understanding & lasting growth.
                                    </b>
                                    <strong>
                                        Ignite's experienced tutors in Dubai help students thrive in IBDP, IB MYP, IGCSE, A-Levels, AP, & more with personalized support & structured programs.
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