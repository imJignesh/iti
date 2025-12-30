import React, { useState, useRef, useEffect } from "react";
import SEO from "@/components/SEO";
import SEOHead from "@/components/SEOHead"; // ADD THIS LINE
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

    return (
        <>
            <SEOHead
                title="Ignite Training Institute - Tutors In UAE For Exam Success"
                description="As Dubai's leading coaching institute, we empower students to embark on their academic journey by offering expert tutoring for IB, IGCSE, A Levels & AP"
                preloadImages={[
                    { src: '/images/banner-image-right.webp', type: 'image/webp' },
                    { src: '/images/banner-image-right.avif', type: 'image/avif' },
                    { src: 'https://ignite.amigosserver.com/images/course-bg1.webp', type: 'image/webp' }
                ]}
            />
            <SEO
                title="Ignite Training Institute - Tutors In UAE For Exam Success"
                description="As Dubai's leading coaching institute, we empower students to embark on their academic journey by offering expert tutoring for IB, IGCSE, A Levels & AP"
            />
            <div className="homeCopy" style={{ paddingTop: `${headerHeight}px` }}>
                <div className={isMobile ? "hero-section-mobile" : "hero-section-desktop"}>
                    <Hero />
                </div>
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