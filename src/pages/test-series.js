import React from 'react';
import Head from 'next/head';
import SEO from "@/components/SEO";
import InfoCardLeft from '@/components/shared/InfoCardLeft';
import InfoCardForm from '@/components/shared/InfoCardForm';
import { subjectPages, subjectFormConfigs } from '@/data/heroSubjects';
import LazySection from "@/components/LazySection";
import ChooseApp from '@/components/test-series/choose-app';
import MarqueeBanner from '@/components/test-series/MarqueeBanner';
import CurriculumTestsComponent from '@/components/test-series/curriculum';
import IgniteAchievements from '@/components/test-series/IgniteAchievements';
import SubjectsCard from '@/components/test-series/SubjectCard';
import Usps from '@/components/test-series/Usps';
import FAQSection from '@/components/shared/FaqSection';
import { faqSections } from '@/data/faqSections';
import TutoringHeroSection from '@/components/test-series/BottomSub';
import Accordion from '@/components/shared/Accordion';
import { accordionSections } from '@/data/accordionSections';

const TestSeries = ({ headerHeight }) => {

    return (
        <>
            <Head>
                <link
                    rel="preload"
                    href="/assets/mobileact.webp"
                    as="image"
                    type="image/webp"
                    media="(max-width: 768px)"
                    fetchPriority="high"
                />
                <link
                    rel="preload"
                    href="/assets/act_bg_main.webp"
                    as="image"
                    type="image/webp"
                    media="(min-width: 769px)"
                    fetchPriority="high"
                />
            </Head>
            <SEO
                loadInnerStyles={true}
                title="Test Series | Ignite Training Institute"
                description="Prepare smarter with Ignite's IGCSE, IB, and A-Level test series in Dubai. Practice real exam questions, identify gaps, and improve your scores"
                url="https://ignitetraininginstitute.com/test-series"
            />

            <div
                className='innerpage page-content-padding'
                style={{ paddingTop: `${headerHeight}px` }}
            >
                <section data-scroll-section className="hero-section" id="reserve-form-section">
                    <div className="hero-container">
                        <picture className="hero-bg">
                            <source media="(max-width: 768px)" srcSet="/assets/mobileact.webp" />
                            <img
                                src="/assets/act_bg_main.webp"
                                alt="Test Series Background"
                                fetchPriority="high"
                                width="1200"
                                height="800"
                                className="hero-img"
                                style={{ opacity: 1, visibility: 'visible' }}
                            />
                        </picture>

                        <div className="row g-0 h-100">
                            <InfoCardLeft {...subjectPages.testSeries} />
                            <InfoCardForm formConfig={subjectFormConfigs.testSeries} />
                        </div>
                    </div>

                    <style jsx>{`
            .hero-container {
              position: relative;
              max-width: 90vw;
              margin-inline: auto;
              margin-block: 0;
              min-height: 750px;
              border-radius: 1.5rem;
              overflow: hidden;
              isolation: isolate;
            }
            .hero-bg {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
            }
            .hero-img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center;
            }
            @media (max-width: 1100px) {
              .hero-container {
                max-width: 95vw;
              }
            }
          `}</style>
                </section>


                <LazySection>
                    <section data-scroll-section>
                        <ChooseApp />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <MarqueeBanner />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <CurriculumTestsComponent />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <IgniteAchievements />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <SubjectsCard />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <Usps />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <FAQSection {...faqSections.testSeries} />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <TutoringHeroSection />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <Accordion {...accordionSections.testSeries} />
                    </section>
                </LazySection>
            </div>
        </>
    );
};

export default TestSeries;
