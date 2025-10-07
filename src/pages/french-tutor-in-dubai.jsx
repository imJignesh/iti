import { useEffect, useRef } from 'react';
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/ibdp/ReviewsSection';
import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/french-tutoring/accordian';
import FrenchTutorsInfoCard from '@/components/french-tutoring/infoCard';
import FrenchTutorsChooseApp from '@/components/french-tutoring/choose-app';
import FrenchTutorsACT from '@/components/french-tutoring/ACT';
import FrenchTutorsUsps from "@/components/french-tutoring/Usps";
import FrenchTutorsIgniteAchievements from '@/components/french-tutoring/IgniteAchievements';
import FrenchTutorsLifeAtIgniteCarousel from '@/components/french-tutoring/LifeAtIgniteCarousel';
import FrenchTutorsFAQSection from '@/components/french-tutoring/FaqSection';
import FrenchTutorsStudentAchievements from '@/components/french-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> FrenchTutorsInDubai
const FrenchTutorsInDubai = ({ headerHeight }) => {
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
                <FrenchTutorsInfoCard />
            </section>

            {/* <section data-scroll-section>
                <FrenchTutorsStudentAchievements />
            </section> */}

            <section data-scroll-section>
                <MarqueeBanner />
            </section>

            <section data-scroll-section>
                <FrenchTutorsChooseApp />
            </section>

            <section data-scroll-section>
                <FrenchTutorsACT />
            </section>

            <section data-scroll-section>
                <ReviewsSection />
            </section>

            <section data-scroll-section>
                <FrenchTutorsIgniteAchievements />
            </section>

            <section data-scroll-section>
                <FrenchTutorsUsps />
            </section>

            {/* <section data-scroll-section>
                <FrenchTutorsLifeAtIgniteCarousel />
            </section> */}

            <section data-scroll-section>
                <FrenchTutorsFAQSection />
            </section>

            <section data-scroll-section>
                <Accordion />
            </section>
        </div>
    );
};

export default FrenchTutorsInDubai;