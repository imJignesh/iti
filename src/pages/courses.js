import LazySection from "@/components/LazySection";
import { useEffect, useState } from "react";
import TutoringCourses from "@/components/maincourse/Banner";
// import Test from "@/components/maincourse/StandardsedTest";
import Test from "@/components/maincourse/Test";
import CallToAction from "@/components/maincourse/CallToAction";
import Testimonial from "@/components/ibdp/ReviewsSection";
import Learning from "@/components/maincourse/Learning";
import MainBanner from "@/components/maincourse/MainBanner";
import SEO from "@/components/SEO";

// 1. ACCEPT the headerHeight prop
const About = ({ headerHeight }) => {
    const [active, setActive] = useState(1);
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
            <SEO
                title="Top Courses In UAE For IB, IGCSE, A Levels, & AP Tutoring"
                description="Learn with certified tutors for IB, IGCSE, A-Levels, AP, ACT & UCAT. Get expert coaching with personalized support & proven strategies. Enroll today"
                url="https://ignitetraininginstitute.com/courses"
            />
            <div
                className=" innerpage"
                style={{ paddingTop: `${headerHeight}px` }} // <--- THE STICKY HEADER FIX
            >
                <section data-scroll-section>
                    <MainBanner />
                </section>
                <LazySection>
                    <section data-scroll-section>
                        <TutoringCourses />
                    </section>
                </LazySection>
                <LazySection>
                    <section data-scroll-section className="padding-0">
                        <Test
                            setActive={setActive}
                            isMobileSwiper={isMobileSwiper}
                            active={active}
                        />


                    </section>
                </LazySection>
                <LazySection>
                    <section data-scroll-section>
                        <Learning />
                    </section>
                </LazySection>
                <LazySection>
                    <section data-scroll-section>
                        <Testimonial />
                    </section>
                </LazySection>
                <LazySection>
                    <section data-scroll-section>
                        <CallToAction />
                    </section>
                </LazySection>
            </div>
        </>
    );
};

export default About;