import React, { useState, useEffect } from "react";

import SEO from "@/components/SEO";
import SEOHead from "@/components/SEOHead";
import Hero from "@/components/homeCopy/Hero";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";

// Dynamic imports
// Dynamic imports switched to static for SSR
import Course from "@/components/homeCopy/Course";
import MarqueeBanner from "@/components/homeCopy/MarqueeBanner";
import About from "@/components/homeCopy/About";
import Test from "@/components/homeCopy/Test";
import Subjects from "@/components/homeCopy/Subjects";
import Usps from "@/components/homeCopy/Usps";
import Trainers from "@/components/homeCopy/Trainers";
import Testimonial from "@/components/homeCopy/Testimonial";
import Blog from "@/components/homeCopy/Blog";

const HomeCopy = ({ headerHeight }) => {
    const [active, setActive] = useState(1);
    const [isMobileSwiper, setIsMobileSwiper] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 991;
            setIsMobileSwiper(mobile);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>

            <SEO
                title="Ignite Training Institute - Tutors In UAE For Exam Success"
                description="As Dubai's leading coaching institute, we empower students to embark on their academic journey by offering expert tutoring for IB, IGCSE, A Levels & AP"
                preloadImages={[
                    {
                        src: "/images/banner-bg-mobile.webp",
                        type: "image/webp",
                        media: "(max-width: 767px)"
                    },
                    {
                        src: "/images/banner-bg.webp",
                        type: "image/webp",
                        media: "(min-width: 768px)"
                    }
                ]}
            />
            <div className="homeCopy" style={{ paddingTop: `${headerHeight}px` }}>
                <Hero />

                <Course />
                <section data-scroll-section>
                    <MarqueeBanner />
                </section>
                <About />
                <Test
                    setActive={setActive}
                    isMobileSwiper={isMobileSwiper}
                    active={active}
                />
                <Subjects />
                <section data-scroll-section>
                    <Usps />
                </section>
                <section data-scroll-section>
                    <Trainers />
                </section>
                <Testimonial />
                <Blog />
            </div>
        </>
    );
};

export default HomeCopy;