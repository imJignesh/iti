import { useEffect, useRef } from 'react';
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/ibdp/ReviewsSection';
import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/business-tutoring/accordian';
import BusinessTutorsInfoCard from '@/components/business-tutoring/infoCard';
import BusinessTutorsChooseApp from '@/components/business-tutoring/choose-app';
import BusinessTutorsACT from '@/components/business-tutoring/ACT';
import BusinessTutorsUsps from "@/components/business-tutoring/Usps";
import BusinessTutorsIgniteAchievements from '@/components/business-tutoring/IgniteAchievements';
import BusinessTutorsLifeAtIgniteCarousel from '@/components/business-tutoring/LifeAtIgniteCarousel';
import BusinessTutorsFAQSection from '@/components/business-tutoring/FaqSection';
import BusinessTutorsStudentAchievements from '@/components/business-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> BusinessTutorsInDubai
const BusinessTutorsInDubai = ({ headerHeight }) => {
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
                <BusinessTutorsInfoCard />
            </section>

            <section data-scroll-section>
                <BusinessTutorsStudentAchievements />
            </section>

            <section data-scroll-section>
                <MarqueeBanner />
            </section>

            <section data-scroll-section>
                <BusinessTutorsChooseApp />
            </section>

            <section data-scroll-section>
                <BusinessTutorsACT />
            </section>

            <section data-scroll-section>
                <ReviewsSection />
            </section>

            <section data-scroll-section>
                <BusinessTutorsIgniteAchievements />
            </section>

            <section data-scroll-section>
                <BusinessTutorsUsps />
            </section>

            <section data-scroll-section>
                <BusinessTutorsLifeAtIgniteCarousel />
            </section>

            <section data-scroll-section>
                <BusinessTutorsFAQSection />
            </section>

            <section data-scroll-section>
                    <Accordion />
            </section>
        </div>
    );
};

export default BusinessTutorsInDubai;