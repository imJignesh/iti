import { useEffect, useRef } from 'react';
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/ibdp/ReviewsSection';
import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/psychology-tutoring/accordian';
import PsychologyTutorsInfoCard from '@/components/psychology-tutoring/infoCard';
import PsychologyTutorsChooseApp from '@/components/psychology-tutoring/choose-app';
import PsychologyTutorsACT from '@/components/psychology-tutoring/ACT';
import PsychologyTutorsUsps from "@/components/psychology-tutoring/Usps";
import PsychologyTutorsIgniteAchievements from '@/components/psychology-tutoring/IgniteAchievements';
import PsychologyTutorsLifeAtIgniteCarousel from '@/components/psychology-tutoring/LifeAtIgniteCarousel';
import PsychologyTutorsFAQSection from '@/components/psychology-tutoring/FaqSection';
import PsychologyTutorsStudentAchievements from '@/components/psychology-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> PsychologyTutorsInDubai
const PsychologyTutorsInDubai = ({ headerHeight }) => {
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
                <PsychologyTutorsInfoCard />
            </section>

            {/* <section data-scroll-section>
                <PsychologyTutorsStudentAchievements />
            </section> */}

            <section data-scroll-section>
                <MarqueeBanner />
            </section>

            <section data-scroll-section>
                <PsychologyTutorsChooseApp />
            </section>

            <section data-scroll-section>
                <PsychologyTutorsACT />
            </section>

            <section data-scroll-section>
                <ReviewsSection />
            </section>

            <section data-scroll-section>
                <PsychologyTutorsIgniteAchievements />
            </section>

            <section data-scroll-section>
                <PsychologyTutorsUsps />
            </section>

            {/* <section data-scroll-section>
                <PsychologyTutorsLifeAtIgniteCarousel />
            </section> */}

            <section data-scroll-section>
                <PsychologyTutorsFAQSection />
            </section>

            <section data-scroll-section>
                <Accordion />
            </section>
        </div>
    );
};

export default PsychologyTutorsInDubai;