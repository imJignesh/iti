import React, { useState, useRef, useEffect } from "react";
import SEO from "@/components/SEO";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/scrollbar";
import Hero from "@/components/homeCopy/Hero";
import Course from "@/components/homeCopy/Course";
import MovingBanner from "@/components/homeCopy/MovingBanner";
import About from "@/components/homeCopy/About";
import Test from "@/components/homeCopy/Test";
import Subjects from "@/components/homeCopy/Subjects";
import Alumni from "@/components/homeCopy/Alumni";
import Usps from "@/components/homeCopy/Usps";
import Trainers from "@/components/homeCopy/Trainers";
import Testimonial from "@/components/homeCopy/Testimonial";
import MarqueeBanner from '@/components/homeCopy/MarqueeBanner';

import Blog from "@/components/homeCopy/Blog";

function useInViewAnimation(threshold = 0.3) {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        if (typeof window === "undefined") return;
        const observer = new window.IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setInView(true);
                });
            },
            { threshold }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [threshold]);
    return [ref, inView];
}

const HomeCopy = ({ headerHeight }) => {
    const [active, setActive] = useState(1);
    const [activeIndex, setActiveIndex] = React.useState(1);
    // Removed scrollRef and scrollInstanceRef
    const [courseHeadingRef, courseHeadingInView] = useInViewAnimation();
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileSwiper, setIsMobileSwiper] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 991;
            setIsMobile(mobile);
            setIsMobileSwiper(mobile);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Removed the conflicting useEffect block for scroll initialization/destruction.

    return (
        <>
            <SEO
                title="Ignite Training Institute - Tutors In UAE For Exam Success"
                description="As Dubai's leading coaching institute, we empower students to embark on their academic journey by offering expert tutoring for IB, IGCSE, A Levels & AP"
            />
            <div className="homeCopy" style={{ paddingTop: `${headerHeight}px` }}>
                {/* Banner Section */}
                <div className={isMobile ? "hero-section-mobile" : "hero-section-desktop"}>
                    <Hero />
                </div>
                {/* Course Section  */}
                <Course />

                {/* Moving Banner Section */}
                <section data-scroll-section>
                    <MarqueeBanner />
                </section>

                {/* About US Section  */}
                <About />
                {/* Test Section  */}
                <Test
                    setActive={setActive}
                    isMobileSwiper={isMobileSwiper}
                    active={active}
                />

                {/* Subject Section */}
                <Subjects />

                {/* Alumni Section */}
                {/* <Alumni setActiveIndex={setActiveIndex} /> */}

                {/* Our USPs */}
                <section data-scroll-section>
                    <Usps />
                </section>

                {/* Trainers Section */}
                <section data-scroll-section>
                    <Trainers />
                </section>

                {/* Testimonial Section */}
                <Testimonial />


                {/* Blogs Section  */}
                <Blog />
            </div>
        </>
    );
};

export default HomeCopy;