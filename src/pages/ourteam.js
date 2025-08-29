'use client';

import { useEffect, useRef } from 'react';
import ContactBanner from "@/components/contact/Banner";
import MovingBanner from "@/components/home/MovingBanner";
const OurTeam = () => {
    const scrollRef = useRef(null);
    const scrollInstanceRef = useRef(null);

    // Locomotive Scroll setup - similar to blog.js
    useEffect(() => {
        const initScroll = async () => {
            try {
                // Dynamically import LocomotiveScroll to handle potential loading issues.
                // The .default is used because some modules export their main content under a 'default' property.
                const LocomotiveScrollModule = await import("locomotive-scroll");
                const LocomotiveScroll = LocomotiveScrollModule.default || LocomotiveScrollModule;

                if (!scrollRef.current) {
                    console.log("Locomotive Scroll: scrollRef.current is null, cannot initialize.");
                    return;
                }

                scrollInstanceRef.current = new LocomotiveScroll({
                    el: scrollRef.current,
                    smooth: true,
                    lerp: 0.1,
                });

                // Initial update after scroll is ready to ensure correct scroll dimensions.
                if (scrollInstanceRef.current && typeof scrollInstanceRef.current.update === 'function') {
                    scrollInstanceRef.current.update();
                    console.log("✅ LocomotiveScroll initialized and updated");
                }
            } catch (error) {
                // Log any errors if LocomotiveScroll fails to load or initialize.
                // This prevents the application from crashing if the module isn't found.
                console.error("Failed to load or initialize LocomotiveScroll:", error);
                // Optionally, you could set state here to disable features that rely on scrolling
                // or display a fallback message to the user.
            }
        };

        // Only attempt to initialize Locomotive Scroll in a client-side environment.
        if (typeof window !== "undefined") {
            initScroll();
        }

        // Cleanup function for the useEffect hook.
        // Destroys the Locomotive Scroll instance when the component unmounts.
        return () => {
            if (scrollInstanceRef.current) {
                scrollInstanceRef.current.destroy();
                scrollInstanceRef.current = null;
            }
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount.

    // Function to determine the breadcrumb navigation path for the page.
    const getBreadcrumbPath = () => {
        return [
            { name: 'Home', href: '/' },       // Link to the home page
            { name: 'Our Team', href: '/ourteam' } // Current page in the breadcrumb
        ];
    };

    const breadcrumbPath = getBreadcrumbPath();

    return (
        <>
            <div ref={scrollRef} data-scroll-container>
                <section data-scroll-section>
                    <ContactBanner />
                </section>

                <section class="meet-out-team" data-scroll-section>
                    <div className="container">
                        <div className="meet-team-Headings">
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.1s" }}
                            >
                                <h3 className="SubHeading">TUTORING COURSES</h3>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="meetTitle">
                                    Lorem ipsum dolor sit amet, consectetur <span className="highlight">adipiscing</span>
                                </h1>
                            </div>

                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="cofounderTitle">
                                    CO-FOUNDERS
                                </h1>
                            </div>
                        </div>
                        <div className="meet-team-cards">
                            <div className="team-card">
                                <div className="team-card-image">
                                    <img src="/images/sumit.png" alt="" />
                                </div>
                                <div className="team-card-info">
                                    <div className="team-card-name">
                                        <h3>Sumit Advani</h3>
                                    </div>
                                    <div className="team-card-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...<a>Read More</a></p>

                                    </div>
                                </div>
                            </div>
                            <div className="team-card">
                                <div className="team-card-image">
                                    <img src="/images/mohnish.png" alt="" />
                                </div>
                                <div className="team-card-info">
                                    <div className="team-card-name">
                                        <h3>Mohnish Ahuja</h3>
                                    </div>
                                    <div className="team-card-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...<a>Read More</a></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="admin-staff" data-scroll-section>
                    <div className="container">
                        <div className="meet-team-Headings">
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="cofounderTitle">
                                    Admin-staff
                                </h1>
                            </div>
                        </div>
                        <div className="admin-staff-cards">
                            <div className="admin-card">
                                <div className="admin-card-image">
                                    <img src="/images/prakshi.png" alt="" />
                                </div>
                                <div className="admin-card-info">
                                    <div className="admin-card-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...<a>Read More</a></p>

                                    </div>
                                </div>
                            </div>
                            <div className="admin-card">
                                <div className="admin-card-image">
                                    <img src="/images/prakshi.png" alt="" />
                                </div>
                                <div className="admin-card-info">
                                    <div className="admin-card-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...<a>Read More</a></p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="moving-container" data-scroll-section>
                    <MovingBanner />
                </section>
                <section className="trainer-section" data-scroll-section>
                    <div className="container">
                        <div className="meet-team-Headings">
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="cofounderTitle">
                                    Trainers
                                </h1>
                            </div>
                        </div>
                        <div className="trainer-cards">
                            <div className="trainer-card">
                                <div className="trainer-name">
                                    <h3>Prakshi Sharma</h3>
                                </div>
                                <div className="trainer-image">
                                    <img src="/images/prakshi-trainer.png" alt="" />
                                </div>
                                <div className="trainer-info">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...<a>Read More</a></p>

                                </div>
                            </div>
                            <div className="trainer-card">
                                <div className="trainer-name">
                                    <h3>Nikhil Pawar</h3>
                                </div>
                                <div className="trainer-image">
                                    <img src="/images/prakshi-trainer.png" alt="" />
                                </div>
                                <div className="trainer-info">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...<a>Read More</a></p>

                                </div>
                            </div>
                            <div className="trainer-card">
                                <div className="trainer-name">
                                    <h3>Nikhil Pawar</h3>
                                </div>
                                <div className="trainer-image">
                                    <img src="/images/prakshi-trainer.png" alt="" />
                                </div>
                                <div className="trainer-info">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...<a>Read More</a></p>

                                </div>
                            </div>
                            <div className="trainer-card">
                                <div className="trainer-name">
                                    <h3>Nikhil Pawar</h3>
                                </div>
                                <div className="trainer-image">
                                    <img src="/images/prakshi-trainer.png" alt="" />
                                </div>
                                <div className="trainer-info">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...<a>Read More</a></p>

                                </div>
                            </div>

                            <div className="trainer-card">
                                <div className="trainer-name">
                                    <h3>Nikhil Pawar</h3>
                                </div>
                                <div className="trainer-image">
                                    <img src="/images/prakshi-trainer.png" alt="" />
                                </div>
                                <div className="trainer-info">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...<a>Read More</a></p>

                                </div>
                            </div>
                            <div className="trainer-card">
                                <div className="trainer-name">
                                    <h3>Nikhil Pawar</h3>
                                </div>
                                <div className="trainer-image">
                                    <img src="/images/prakshi-trainer.png" alt="" />
                                </div>
                                <div className="trainer-info">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...<a>Read More</a></p>

                                </div>
                            </div>
                            <div className="trainer-card">
                                <div className="trainer-name">
                                    <h3>Nikhil Pawar</h3>
                                </div>
                                <div className="trainer-image">
                                    <img src="/images/prakshi-trainer.png" alt="" />
                                </div>
                                <div className="trainer-info">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...<a>Read More</a></p>

                                </div>
                            </div>
                            <div className="trainer-card">
                                <div className="trainer-name">
                                    <h3>Nikhil Pawar</h3>
                                </div>
                                <div className="trainer-image">
                                    <img src="/images/prakshi-trainer.png" alt="" />
                                </div>
                                <div className="trainer-info">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...<a>Read More</a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="moving-container" data-scroll-section>
                    <MovingBanner />
                </section>
                <section className="trainer-message-section" data-scroll-section>
                    <div className="container">
                        <div className="meet-team-Headings">
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="cofounderTitle">
                                    Trainers
                                </h1>
                            </div>
                        </div>
                        <div className="trainer-message-card">
                            <div className="trainer-card">
                                <div className="trainer-image">
                                    <img src="/images/prakshi-trainer.png" alt="" />
                                </div>
                                <div className="trainer-experience">

                                    <span>10+ Years</span>
                                </div>
                            </div>
                            <div className="trainer-card small">
                                <div className="trainer-image">
                                    <img src="/images/prakshi-trainer.png" alt="" />
                                </div>
                                <div className="trainer-experience">

                                    <span>10+ Years</span>
                                </div>
                            </div>
                            <div className="trainer-card">
                                <div className="trainer-image">
                                    <img src="/images/prakshi-trainer.png" alt="" />
                                </div>
                                <div className="trainer-experience">

                                    <span>10+ Years</span>
                                </div>
                            </div>
                            <div className="trainer-card small">
                                <div className="trainer-image">
                                    <img src="/images/prakshi-trainer.png" alt="" />
                                </div>
                                <div className="trainer-experience">

                                    <span>10+ Years</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div >
        </>
    );
};

export default OurTeam;
