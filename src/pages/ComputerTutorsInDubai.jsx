import { useEffect, useRef } from 'react';
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/ibdp/ReviewsSection';
import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/computer-tutoring/accordian';
import ComputerTutorsInfoCard from '@/components/computer-tutoring/infoCard';
import ComputerTutorsChooseApp from '@/components/computer-tutoring/choose-app';
import ComputerTutorsACT from '@/components/computer-tutoring/ACT';
import ComputerTutorsUsps from "@/components/computer-tutoring/Usps";
import ComputerTutorsIgniteAchievements from '@/components/computer-tutoring/IgniteAchievements';
import ComputerTutorsLifeAtIgniteCarousel from '@/components/computer-tutoring/LifeAtIgniteCarousel';
import ComputerTutorsFAQSection from '@/components/computer-tutoring/FaqSection';
import ComputerTutorsStudentAchievements from '@/components/computer-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> ComputerTutorsInDubai
const ComputerTutorsInDubai = ({ headerHeight }) => {
    const scrollRef = useRef(null);
    const scrollInstanceRef = useRef(null);

    useEffect(() => {
        let scroll;

        const initScroll = async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            if (!scrollRef.current) return;

            scroll = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
                lerp: 0.1,
                // optional:
                getDirection: true,
                getSpeed: true,
                multiplier: 1,
            });

            scrollInstanceRef.current = scroll;
        };

        if (typeof window !== "undefined") {
            initScroll();
        }

        return () => {
            scrollInstanceRef.current?.destroy();
            scrollInstanceRef.current = null;
        };
    }, []);

    return (
        <div
            ref={scrollRef}
            data-scroll-container
            style={{ paddingTop: `${headerHeight}px` }}
        >
            <section data-scroll-section>
                <ComputerTutorsInfoCard />
            </section>

            <section data-scroll-section>
                <ComputerTutorsStudentAchievements />
            </section>

            <section data-scroll-section>
                <MarqueeBanner />
            </section>

            <section data-scroll-section>
                <ComputerTutorsChooseApp />
            </section>

            <section data-scroll-section>
                <ComputerTutorsACT />
            </section>

            <section data-scroll-section>
                <ReviewsSection />
            </section>

            <section data-scroll-section>
                <ComputerTutorsIgniteAchievements />
            </section>

            <section data-scroll-section>
                <ComputerTutorsUsps />
            </section>

            <section data-scroll-section>
                <ComputerTutorsLifeAtIgniteCarousel />
            </section>

            <section data-scroll-section>
                <ComputerTutorsFAQSection />
            </section>

            <section data-scroll-section>
                    <Accordion />
            </section>
        </div>
    );
};

export default ComputerTutorsInDubai;