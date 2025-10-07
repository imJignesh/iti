import { useEffect, useRef } from 'react';
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/ibdp/ReviewsSection';
import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/spanish-tutoring/accordian';
import SpanishTutorsInfoCard from '@/components/spanish-tutoring/infoCard';
import SpanishTutorsChooseApp from '@/components/spanish-tutoring/choose-app';
import SpanishTutorsACT from '@/components/spanish-tutoring/ACT';
import SpanishTutorsUsps from "@/components/spanish-tutoring/Usps";
import SpanishTutorsIgniteAchievements from '@/components/spanish-tutoring/IgniteAchievements';
import SpanishTutorsLifeAtIgniteCarousel from '@/components/spanish-tutoring/LifeAtIgniteCarousel';
import SpanishTutorsFAQSection from '@/components/spanish-tutoring/FaqSection';
import SpanishTutorsStudentAchievements from '@/components/spanish-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> SpanishTutorsInDubai
const SpanishTutorsInDubai = ({ headerHeight }) => {
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
                <SpanishTutorsInfoCard />
            </section>

            <section data-scroll-section>
                <SpanishTutorsStudentAchievements />
            </section>

            <section data-scroll-section>
                <MarqueeBanner />
            </section>

            <section data-scroll-section>
                <SpanishTutorsChooseApp />
            </section>

            <section data-scroll-section>
                <SpanishTutorsACT />
            </section>

            <section data-scroll-section>
                <ReviewsSection />
            </section>

            <section data-scroll-section>
                <SpanishTutorsIgniteAchievements />
            </section>

            <section data-scroll-section>
                <SpanishTutorsUsps />
            </section>

            <section data-scroll-section>
                <SpanishTutorsLifeAtIgniteCarousel />
            </section>

            <section data-scroll-section>
                <SpanishTutorsFAQSection />
            </section>

            <section data-scroll-section>
                    <Accordion />
            </section>
        </div>
    );
};

export default SpanishTutorsInDubai;