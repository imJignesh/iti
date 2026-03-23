import React from 'react';
import Head from 'next/head';
import LazySection from "@/components/LazySection";
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
import dynamic from 'next/dynamic';

const Advantages = dynamic(() => import('@/components/homeSchooling/Advantages'));
const Curriculum = dynamic(() => import('@/components/homeSchooling/Curriculum'));
const CourseCard = dynamic(() => import('@/components/homeSchooling/CourseCard'));
const FAQSection = dynamic(() => import('@/components/homeSchooling/FaqSection'));
import InfoCard from '@/components/homeSchooling/InfoCard'; // ATF - keep static
const LifeAtIgniteCarousel = dynamic(() => import('@/components/homeSchooling/LifeAtIgniteCarousel'));
const MarqueeBanner = dynamic(() => import('@/components/homeSchooling/MarqueeBanner'));
const HomeschoolingMindset = dynamic(() => import('@/components/homeSchooling/mindset'));
const WhatWeOfferSection = dynamic(() => import('@/components/homeSchooling/WhatWeOfferSection'));
const Accordion = dynamic(() => import('@/components/homeSchooling/accrodian'));
const Blog = dynamic(() => import('@/components/homeSchooling/Blog'));
const ReviewsSection = dynamic(() => import('@/components/homeSchooling/ReviewsSection'));
const StudentAchievements = dynamic(() => import('@/components/ibdp/StudentAchivement'));


// 1. ACCEPT the headerHeight prop
const homeschoolingSchema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What levels & curricula does Ignite support for homeschooling students?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ignite offers homeschooling support for British Curriculum (IGCSE, A-Levels) & AP courses from primary to pre-university levels."
        }
      },
      {
        "@type": "Question",
        "name": "Is the homeschooling program fully flexible with individual schedules?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, sessions are designed to match the student’s pace, academic goals, & daily schedule, offering full flexibility in subject selection & timing."
        }
      },
      {
        "@type": "Question",
        "name": "Do homeschooled students receive exam & assessment support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Students receive targeted prep for board exams, past paper practice, & support with assessments required by their chosen curriculum or exam board."
        }
      },
      {
        "@type": "Question",
        "name": "Can Ignite help with selecting & planning a complete homeschool curriculum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our academic advisors assist with curriculum planning, subject selection, exam registration guidance, & personalized learning roadmaps."
        }
      },
      {
        "@type": "Question",
        "name": "Is a free demo class available for homeschooling tutoring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Ignite Training Institute offers a free demo session so parents & students can experience the teaching style & approach before enrolling."
        }
      },
      {
        "@type": "Question",
        "name": "Is private candidacy accepted by private universities in the UAE?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, private candidacy is generally accepted by private universities in the UAE, as long as students meet the required curriculum standards and hold recognized qualifications."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://ignitetraininginstitute.com/"
    }, {
      "@type": "ListItem",
      "position": 2,
      "name": "Courses",
      "item": "https://ignitetraininginstitute.com/courses/"
    }, {
      "@type": "ListItem",
      "position": 3,
      "name": "Homeschooling Tutors",
      "item": "https://ignitetraininginstitute.com/courses/homeschooling-tutors/"
    }]
  },
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "name": "Ignite Training Institute",
        "url": "https://ignitetraininginstitute.com/courses/homeschooling-tutors-in-dubai/",
        "logo": "https://ignitetraininginstitute.com/wp-content/uploads/2023/02/ignitefinallogos_1.svg",
        "telephone": "+971588589958",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Al Moosa Tower 1 - 1503 - Sheikh Zayed Rd - near Emirates Towers Metro (Sea Side - Trade Centre - Trade Centre 1)",
          "addressLocality": "Dubai",
          "addressCountry": "United Arab Emirates"
        },
        "sameAs": [
          "https://www.facebook.com/ignitetraininginstitute",
          "https://www.instagram.com/ignitetraininginstitute/",
          "https://ae.linkedin.com/company/ignitetraininginstitute"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "79",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Homeschooling Tutoring",
        "name": "Homeschooling Tutors in Dubai - Ignite Training Institute",
        "description": "Ignite Training Institute offers expert homeschooling support (private candidacy) in Dubai. Our tutors help students across various curricula achieve academic excellence through personalized learning strategies tailored to individual needs.",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Ignite Training Institute",
          "url": "https://ignitetraininginstitute.com/courses/homeschooling-tutors-in-dubai/"
        }
      }
    ]
  }
];

const HomeSchooling = ({ headerHeight }) => {



  return (
    <>
    <Head>
        <link rel="preload" as="image" href="/assets/homeschooling-bg.webp" media="(max-width: 768px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/assets/homeschooling_bg_main.webp" media="(min-width: 769px)" fetchPriority="high" />
    </Head>
    <SEO
        title="Homeschooling In Dubai | Support For Private Candidates"
        description="Join homeschooling in Dubai, UAE for IGCSE, A-Levels & AP as private candidates. Get personalized learning support to excel academically & beyond"
        url="https://ignitetraininginstitute.com/courses/homeschooling-tutors-in-dubai"
        preloadImages={[
          {
            src: "/assets/homeschooling-bg.webp",
            type: "image/webp",
            media: "(max-width: 768px)"
          },
          {
            src: "/assets/homeschooling_bg_main.webp",
            type: "image/webp",
            media: "(min-width: 769px)"
          }
        ]}
      />
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={homeschoolingSchema} />

      {/* 3. APPLY the style for paddingTop to the scroll container */}
      <div className='overflow-hidden innerpage page-content-padding'>
        <section data-scroll-section className="hero-section">
          <div className="hero-container">
            {/* LCP Image moved here for immediate painting (SSR) */}
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/homeschooling-bg.webp" />
              <img
                src="/assets/homeschooling_bg_main.webp"
                alt="Homeschooling Tutors Background"
                fetchPriority="high"
                width="1200"
                height="800"
                className="hero-img"
                style={{ opacity: 1, visibility: 'visible' }}
              />
            </picture>

            <InfoCard />
          </div>

        </section>


        <LazySection>
          <section data-scroll-section>
            <Curriculum />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <CourseCard />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Advantages />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <MarqueeBanner />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <HomeschoolingMindset />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <ReviewsSection />
          </section>
        </LazySection>

        <LazySection>
          <WhatWeOfferSection />
        </LazySection>


        <LazySection>
          <section data-scroll-section>
            <FAQSection />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <Blog />
          </section>
        </LazySection>
        <LazySection>
          <section>
            <Accordion />
          </section>
        </LazySection>
      </div>
    </>
  );
};

export default HomeSchooling;