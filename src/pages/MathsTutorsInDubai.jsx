import { useEffect, useRef } from 'react';
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/ibdp/ReviewsSection';
import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/maths-tutoring/accordian';
import MathsTutorsInfoCard from '@/components/maths-tutoring/infoCard';
import MathsTutorsChooseApp from '@/components/maths-tutoring/choose-app';
import MathsTutorsACT from '@/components/maths-tutoring/ACT';
import MathsTutorsUsps from "@/components/maths-tutoring/Usps";
import MathsTutorsIgniteAchievements from '@/components/maths-tutoring/IgniteAchievements';
import MathsTutorsLifeAtIgniteCarousel from '@/components/maths-tutoring/LifeAtIgniteCarousel';
import MathsTutorsFAQSection from '@/components/maths-tutoring/FaqSection';
import MathsTutorsStudentAchievements from '@/components/maths-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> MathsTutorsInDubai
const MathsTutorsInDubai = ({ headerHeight }) => {
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
                <MathsTutorsInfoCard />
            </section>

            <section data-scroll-section>
                <MathsTutorsStudentAchievements />
            </section>

            <section data-scroll-section>
                <MarqueeBanner />
            </section>

            <section data-scroll-section>
                <MathsTutorsChooseApp />
            </section>

            <section data-scroll-section>
                <MathsTutorsACT />
            </section>

            <section data-scroll-section>
                <ReviewsSection />
            </section>

            <section data-scroll-section>
                <MathsTutorsIgniteAchievements />
            </section>

            <section data-scroll-section>
                <MathsTutorsUsps />
            </section>

            <section data-scroll-section>
                <MathsTutorsLifeAtIgniteCarousel />
            </section>

            <section data-scroll-section>
                <MathsTutorsFAQSection />
            </section>

            <section data-scroll-section>
                    <Accordion />
            </section>
        </div>
    );
};

export default MathsTutorsInDubai;