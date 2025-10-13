import React, { useState, useRef, useEffect } from "react";
// Import the reusable schema component
import JsonLd from "@/components/JsonLd";
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
import Blog from "@/components/homeCopy/Blog";

// Custom hook for checking if an element is in view
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

    // ----------------------------------------------------
    // 👇 JSON-LD SCHEMA DEFINITION FOR THIS PAGE
    // ----------------------------------------------------
    const educationalOrganizationSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Ignite Training Institute",
        "url": "https://ignitetraininginstitute.com/",
        "logo": "https://ignitetraininginstitute.com/wp-content/uploads/2023/02/ignitefinallogos_1.svg",
        "description": "Ignite Training Institute offers expert tutoring in Dubai for IB, IGCSE, A-Levels, AP, SAT, ACT, MYP, and homeschooling programs. With qualified tutors and personalized learning, Ignite supports students in achieving academic success.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Al Moosa Tower 1 - 1503 - Sheikh Zayed Rd - near Emirates Towers Metro (Sea Side - Trade Centre - Trade Centre 1",
            "addressLocality": "Dubai",
            "addressCountry": "United Arab Emirates"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+971588589958",
            "contactType": "customer service",
            "areaServed": "AE",
            "availableLanguage": ["English", "Arabic"]
        },
        "sameAs": [
            "https://www.instagram.com/ignitetraininginstitute/",
            "https://ae.linkedin.com/company/ignite-training-institute",
            "https://www.facebook.com/ignitetraininginstitute"
        ]
    };

    // ----------------------------------------------------
    // 👇 EXISTING COMPONENT LOGIC
    // ----------------------------------------------------
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
            {/* 👇 SCHEMA INJECTION: Use the reusable component here */}
            <JsonLd schema={educationalOrganizationSchema} />

            <div className="homeCopy" style={{ paddingTop: `${headerHeight}px` }}>
                {/* Banner Section */}
                <div className="vh-100vh">
                    <Hero />
                </div>
                {/* Course Section  */}
                <Course />

                {/* Moving Banner Section */}
                <MovingBanner />

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