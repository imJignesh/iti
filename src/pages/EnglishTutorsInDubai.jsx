import { useEffect, useRef } from 'react';
// Assuming shared components are kept in their original path
import Accordion from '@/components/ibdp/accordian';
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/ibdp/ReviewsSection';
import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import EnglishTutorsInfoCard from '@/components/english-tutors-in-dubai/EnglishTutorsInDubaiInfoCard';
import EnglishTutorsChooseApp from '@/components/english-tutors-in-dubai/EnglishTutorsInDubaiChooseApp';
import EnglishTutorsACT from '@/components/english-tutors-in-dubai/EnglishTutorsInDubaiACT';
import EnglishTutorsUsps from "@/components/english-tutors-in-dubai/EnglishTutorsInDubaiUsps";
import EnglishTutorsIgniteAchievements from '@/components/english-tutors-in-dubai/EnglishTutorsInDubaiIgniteAchievements';
import EnglishTutorsLifeAtIgniteCarousel from '@/components/english-tutors-in-dubai/EnglishTutorsInDubaiLifeAtIgniteCarousel';
import EnglishTutorsFAQSection from '@/components/english-tutors-in-dubai/EnglishTutorsInDubaiFaqSection';
import EnglishTutorsStudentAchievements from '@/components/english-tutors-in-dubai/EnglishTutorsInDubaiStudentAchivement';

// Renamed main component: SubjectTutoring -> EnglishTutorsInDubai
const EnglishTutorsInDubai = ({ headerHeight }) => {
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
                <EnglishTutorsInfoCard />
            </section>

            <section data-scroll-section>
                <EnglishTutorsStudentAchievements />
            </section>

            <section data-scroll-section>
                <MarqueeBanner />
            </section>

            <section data-scroll-section>
                <EnglishTutorsChooseApp />
            </section>

            <section data-scroll-section>
                <EnglishTutorsACT />
            </section>

            <section data-scroll-section>
                <ReviewsSection />
            </section>

            <section data-scroll-section>
                <EnglishTutorsIgniteAchievements />
            </section>

            <section data-scroll-section>
                <EnglishTutorsUsps />
            </section>

            <section data-scroll-section>
                <EnglishTutorsLifeAtIgniteCarousel />
            </section>

            <section data-scroll-section>
                <EnglishTutorsFAQSection />
            </section>
        </div>
    );
};

export default EnglishTutorsInDubai;