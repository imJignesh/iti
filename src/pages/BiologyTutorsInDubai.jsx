import { useEffect, useRef } from 'react';
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/ibdp/ReviewsSection';
import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/biology-tutoring/accordian';
import BiologyTutorsInfoCard from '@/components/biology-tutoring/infoCard';
import BiologyTutorsChooseApp from '@/components/biology-tutoring/choose-app';
import BiologyTutorsACT from '@/components/biology-tutoring/ACT';
import BiologyTutorsUsps from "@/components/biology-tutoring/Usps";
import BiologyTutorsIgniteAchievements from '@/components/biology-tutoring/IgniteAchievements';
import BiologyTutorsLifeAtIgniteCarousel from '@/components/biology-tutoring/LifeAtIgniteCarousel';
import BiologyTutorsFAQSection from '@/components/biology-tutoring/FaqSection';
import BiologyTutorsStudentAchievements from '@/components/biology-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> BiologyTutorsInDubai
const BiologyTutorsInDubai = ({ headerHeight }) => {
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
                <BiologyTutorsInfoCard />
            </section>

            <section data-scroll-section>
                <BiologyTutorsStudentAchievements />
            </section>

            <section data-scroll-section>
                <MarqueeBanner />
            </section>

            <section data-scroll-section>
                <BiologyTutorsChooseApp />
            </section>

            <section data-scroll-section>
                <BiologyTutorsACT />
            </section>

            <section data-scroll-section>
                <ReviewsSection />
            </section>

            <section data-scroll-section>
                <BiologyTutorsIgniteAchievements />
            </section>

            <section data-scroll-section>
                <BiologyTutorsUsps />
            </section>

            <section data-scroll-section>
                <BiologyTutorsLifeAtIgniteCarousel />
            </section>

            <section data-scroll-section>
                <BiologyTutorsFAQSection />
            </section>

            <section data-scroll-section>
                    <Accordion />
            </section>
        </div>
    );
};

export default BiologyTutorsInDubai;