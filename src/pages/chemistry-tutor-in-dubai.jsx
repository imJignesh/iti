import { useEffect, useRef } from 'react';
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/chemistry-tutoring/accordian';
import ChemistryTutorsInfoCard from '@/components/chemistry-tutoring/infoCard';
import ChemistryTutorsChooseApp from '@/components/chemistry-tutoring/choose-app';
import ChemistryTutorsACT from '@/components/chemistry-tutoring/ACT';
import ChemistryTutorsUsps from "@/components/chemistry-tutoring/Usps";
import Trainers from "@/components/chemistry-tutoring/Trainers";
import ChemistryTutorsIgniteAchievements from '@/components/chemistry-tutoring/IgniteAchievements';
import ChemistryTutorsLifeAtIgniteCarousel from '@/components/chemistry-tutoring/LifeAtIgniteCarousel';
import ChemistryTutorsFAQSection from '@/components/chemistry-tutoring/FaqSection';
import ChemistryTutorsStudentAchievements from '@/components/chemistry-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> ChemistryTutorsInDubai
const ChemistryTutorsInDubai = ({ headerHeight }) => {
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
                <ChemistryTutorsInfoCard />
            </section>

            {/* <section data-scroll-section>
                <ChemistryTutorsStudentAchievements />
            </section> */}

            <section data-scroll-section>
                <MarqueeBanner />
            </section>

            <section data-scroll-section>
                <ChemistryTutorsChooseApp />
            </section>

            <section data-scroll-section>
                <ChemistryTutorsACT />
            </section>

            <section data-scroll-section>
                <ReviewsSection />
            </section>

            <section data-scroll-section>
                <Trainers />
            </section> 

            <section data-scroll-section>
                <ChemistryTutorsIgniteAchievements />
            </section>

            <section data-scroll-section>
                <ChemistryTutorsUsps />
            </section>

            {/* <section data-scroll-section>
                <ChemistryTutorsLifeAtIgniteCarousel />
            </section> */}

            <section data-scroll-section>
                <ChemistryTutorsFAQSection />
            </section>

            <section data-scroll-section>
                <Accordion />
            </section>
        </div>
    );
};

export default ChemistryTutorsInDubai;