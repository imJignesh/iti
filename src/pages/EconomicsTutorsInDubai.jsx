import { useEffect, useRef } from 'react';
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/ibdp/ReviewsSection';
import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/economics-tutoring/accordian';
import EconomicsTutorsInfoCard from '@/components/economics-tutoring/infoCard';
import EconomicsTutorsChooseApp from '@/components/economics-tutoring/choose-app';
import EconomicsTutorsACT from '@/components/economics-tutoring/ACT';
import EconomicsTutorsUsps from "@/components/economics-tutoring/Usps";
import EconomicsTutorsIgniteAchievements from '@/components/economics-tutoring/IgniteAchievements';
import EconomicsTutorsLifeAtIgniteCarousel from '@/components/economics-tutoring/LifeAtIgniteCarousel';
import EconomicsTutorsFAQSection from '@/components/economics-tutoring/FaqSection';
import EconomicsTutorsStudentAchievements from '@/components/economics-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> EconomicsTutorsInDubai
const EconomicsTutorsInDubai = ({ headerHeight }) => {
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
                <EconomicsTutorsInfoCard />
            </section>

            <section data-scroll-section>
                <EconomicsTutorsStudentAchievements />
            </section>

            <section data-scroll-section>
                <MarqueeBanner />
            </section>

            <section data-scroll-section>
                <EconomicsTutorsChooseApp />
            </section>

            <section data-scroll-section>
                <EconomicsTutorsACT />
            </section>

            <section data-scroll-section>
                <ReviewsSection />
            </section>

            <section data-scroll-section>
                <EconomicsTutorsIgniteAchievements />
            </section>

            <section data-scroll-section>
                <EconomicsTutorsUsps />
            </section>

            <section data-scroll-section>
                <EconomicsTutorsLifeAtIgniteCarousel />
            </section>

            <section data-scroll-section>
                <EconomicsTutorsFAQSection />
            </section>

            <section data-scroll-section>
                    <Accordion />
            </section>
        </div>
    );
};

export default EconomicsTutorsInDubai;