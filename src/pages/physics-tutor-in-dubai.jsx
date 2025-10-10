import { useEffect, useRef } from 'react';
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/physics-tutoring/accordian';
import PhysicsTutorsInfoCard from '@/components/physics-tutoring/infoCard';
import PhysicsTutorsChooseApp from '@/components/physics-tutoring/choose-app';
import PhysicsTutorsACT from '@/components/physics-tutoring/ACT';
import PhysicsTutorsUsps from "@/components/physics-tutoring/Usps";
import Trainers from "@/components/physics-tutoring/Trainers";
import PhysicsTutorsIgniteAchievements from '@/components/physics-tutoring/IgniteAchievements';
import PhysicsTutorsLifeAtIgniteCarousel from '@/components/physics-tutoring/LifeAtIgniteCarousel';
import PhysicsTutorsFAQSection from '@/components/physics-tutoring/FaqSection';
import PhysicsTutorsStudentAchievements from '@/components/physics-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> PhysicsTutorsInDubai
const PhysicsTutorsInDubai = ({ headerHeight }) => {
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
                <PhysicsTutorsInfoCard />
            </section>

            {/* <section data-scroll-section>
                <PhysicsTutorsStudentAchievements />
            </section> */}

            <section data-scroll-section>
                <MarqueeBanner />
            </section>

            <section data-scroll-section>
                <PhysicsTutorsChooseApp />
            </section>

            <section data-scroll-section>
                <PhysicsTutorsACT />
            </section>

            <section data-scroll-section>
                <ReviewsSection />
            </section>

            <section data-scroll-section>
                <Trainers />
            </section> 

            <section data-scroll-section>
                <PhysicsTutorsIgniteAchievements />
            </section>

            <section data-scroll-section>
                <PhysicsTutorsUsps />
            </section>

            {/* <section data-scroll-section>
                <PhysicsTutorsLifeAtIgniteCarousel />
            </section> */}

            <section data-scroll-section>
                <PhysicsTutorsFAQSection />
            </section>

            <section data-scroll-section>
                <Accordion />
            </section>
        </div>
    );
};

export default PhysicsTutorsInDubai;