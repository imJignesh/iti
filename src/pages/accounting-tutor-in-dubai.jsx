import { useEffect, useRef } from 'react';
// Assuming shared components are kept in their original path
import MarqueeBanner from '@/components/ibdp/MarqueeBanner';
import ReviewsSection from '@/components/english-tutoring/ReviewsSection';
import Hero from '@/components/home/Hero';

// Updated imports to new duplicated components (assuming a new folder for components)
import Accordion from '@/components/accounting-tutoring/accordian';
import AccountingTutorsInfoCard from '@/components/accounting-tutoring/infoCard';
import AccountingTutorsChooseApp from '@/components/accounting-tutoring/choose-app';
import AccountingTutorsACT from '@/components/accounting-tutoring/ACT';
import AccountingTutorsUsps from "@/components/accounting-tutoring/Usps";
import Trainers from "@/components/accounting-tutoring/Trainers";
import AccountingTutorsIgniteAchievements from '@/components/accounting-tutoring/IgniteAchievements';
import AccountingTutorsLifeAtIgniteCarousel from '@/components/accounting-tutoring/LifeAtIgniteCarousel';
import AccountingTutorsFAQSection from '@/components/accounting-tutoring/FaqSection';
import AccountingTutorsStudentAchievements from '@/components/accounting-tutoring/StudentAchivement';

//comment
// Renamed main component: SubjectTutoring -> AccountingTutorsInDubai
const AccountingTutorsInDubai = ({ headerHeight }) => {
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
                <AccountingTutorsInfoCard />
            </section>

            {/* <section data-scroll-section>
                <AccountingTutorsStudentAchievements />
            </section> */}

            <section data-scroll-section>
                <MarqueeBanner />
            </section>

            <section data-scroll-section>
                <AccountingTutorsChooseApp />
            </section>

            <section data-scroll-section>
                <AccountingTutorsACT />
            </section>

            <section data-scroll-section>
                <ReviewsSection />
            </section>

            <section data-scroll-section>
                <Trainers />
            </section>

            <section data-scroll-section>
                <AccountingTutorsIgniteAchievements />
            </section>

            <section data-scroll-section>
                <AccountingTutorsUsps />
            </section>

            {/* <section data-scroll-section>
                <AccountingTutorsLifeAtIgniteCarousel />
            </section> */}

            <section data-scroll-section>
                <AccountingTutorsFAQSection />
            </section>

            <section data-scroll-section>
                <Accordion />
            </section>
        </div>
    );
};

export default AccountingTutorsInDubai;