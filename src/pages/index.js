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
import MarqueeBanner from '@/components/ibc/MarqueeBanner';

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
    const scrollRef = useRef(null);
    const scrollInstanceRef = useRef(null);
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

    useEffect(() => {
        let scroll;

        const initScroll = async () => {
            if (isMobile) return;

            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            if (!scrollRef.current) return;
            scroll = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
                lerp: 0.1,
            });

            scrollInstanceRef.current = scroll;
        };

        if (typeof window !== "undefined") {
            initScroll();
        }

        return () => {
            if (scrollInstanceRef.current) {
                scrollInstanceRef.current.destroy();
                scrollInstanceRef.current = null;
            }
        };
    }, [isMobile]);

    return (
        <>
            <SEO
                title="Ignite Training Institute - Tutors In UAE For Exam Success"
                description="As Dubai's leading coaching institute, we empower students to embark on their academic journey by offering expert tutoring for IB, IGCSE, A Levels & AP"
            />
            <div className="homeCopy" style={{ paddingTop: `${headerHeight}px` }}>
                {/* Banner Section */}
                <div className="">
                    <Hero />
                </div>
                {/* Course Section  */}
                <Course />

                {/* Moving Banner Section */}
                {/* <MovingBanner /> */}
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
                <Usps />

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