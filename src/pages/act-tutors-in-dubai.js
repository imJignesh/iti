import React, { useEffect, useRef } from 'react';
import LazySection from '@/components/LazySection';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";
import SEO from "@/components/SEO";
import Accordion from '@/components/act/accrodian';
import Blog from "@/components/act/Blog";
import CourseCard from '@/components/act/CourseCard';
import FAQSection from '@/components/act/FaqSection';
import IgniteAchievements from '@/components/act/IgniteAchievements';
import InfoCard from '@/components/act/InfoCard';
import IgniteAboutCard from "@/components/act/IgniteAboutCard";
import LifeAtIgniteCarousel from '@/components/act/LifeAtIgniteCarousel';
import MarqueeBanner from '@/components/act/MarqueeBanner';
import ReviewsSection from '@/components/act/ReviewsSection';
import StudentAchievements from '@/components/act/StudentAchivement';
import SubjectsCard from '@/components/act/SubjectCard';
import SubjectsCard1 from '@/components/act/SubjectCard1';
import UspsSection from '@/components/act/UspsSection';
import Head from 'next/head';

// 1. ACCEPT the headerHeight prop
const act = ({ headerHeight }) => {

  // ----------------------------------------------------
  // 👇 COMBINED JSON-LD SCHEMAS DEFINITION FOR THIS PAGE
  // ----------------------------------------------------
  const actSchema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What Changed In The Enhanced ACT And How Does It Affect Students In Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Enhanced ACT, which became the standard format on national Saturday testing from September 2025, made the test shorter and the Science section optional. The composite score is now an average of just English, Math, and Reading on the 1 to 36 scale. The full test is around 2 hours without Science, or about 2 hours 40 minutes with Science included, and Math questions now have four answer choices rather than five. International ACT testing in the UAE moved to the Enhanced format alongside the September 2025 rollout, so any Dubai student sitting the ACT in 2026 will take the new version regardless of paper or online format."
          }
        },
        {
          "@type": "Question",
          "name": "How Long Does It Take To Prepare For The ACT With A Tutor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most students need 8 to 16 weeks of structured ACT preparation to see meaningful score improvement. The exact timeline depends on three things: the gap between the student’s diagnostic score and target score, how much weekly time they can commit alongside school, and whether they are preparing for one test sitting or planning two attempts. Students with a 4 to 6 point gap typically need 10 to 12 weeks of consistent coaching with two sessions per week. Larger gaps or shorter weekly commitments push the timeline longer."
          }
        },
        {
          "@type": "Question",
          "name": "What Is A Realistic ACT Score Improvement With Structured Coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A realistic improvement range with structured coaching is 3 to 6 points on the composite over 8 to 12 weeks, depending on starting score and effort. Students starting in the high 20s and aiming for 32 plus tend to see slower gains because each additional point requires fewer wrong answers. Students starting below 24 often see faster gains in the first 4 to 6 weeks as foundational gaps close. We do not promise a guaranteed score because the actual outcome depends on student effort, test-day performance, and consistency. What we do promise is a structured plan that gives every student the best chance of hitting their personal target."
          }
        },
        {
          "@type": "Question",
          "name": "Should Dubai Students Take The Optional ACT Science Section?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on which universities are on the shortlist. Some universities still require or strongly recommend the Science section, including Marquette University, while many others including Stanford, the University of Pennsylvania, and Penn State have confirmed they will not require it. About 90 percent of universities tracked by Compass Prep’s policy table have moved Science to optional. Our practical guidance for Dubai students is straightforward: if the shortlist includes any STEM-focused programme or a university with a stated Science requirement, take it. If the shortlist is liberal arts or business focused and the student finds Science fatiguing, skipping it shortens the test and often improves performance on the three sections that count toward the composite."
          }
        },
        {
          "@type": "Question",
          "name": "How Much Does ACT Tutoring In Dubai Typically Cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ACT tutoring fees in Dubai vary based on session format, hours per week, and tutor experience. One-on-one tutoring is generally priced at a higher hourly rate than small-group programmes because the tutor is dedicated to a single student. Group programmes spread the cost across a small cohort and tend to be more affordable per hour. Most reputable centres in Dubai work on package pricing for 6 to 10 week programmes rather than open-ended hourly billing, which makes the total cost easier to plan for. We share specific pricing during the free demo call once we understand the student’s starting point and target."
          }
        },
        {
          "@type": "Question",
          "name": "Can ACT Prep Run Alongside IB Or A-Level Coursework?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, and most of our ACT students at Ignite are doing exactly that. The key is sequencing. Heavier ACT hours work best during quieter terms when school assessments are not stacking up, and the load tapers in the weeks immediately before IB or A-Level mocks. Students typically commit 3 to 5 hours per week to ACT prep alongside school, with that figure rising slightly in the final 3 to 4 weeks before the test. The skills overlap also helps: A-Level English Literature students bring strong reading stamina, IB Math students bring quantitative fluency, and IBDP Science students often find the optional ACT Science section accessible without much extra prep."
          }
        },
        {
          "@type": "Question",
          "name": "Is One-On-One Or Group ACT Coaching Better?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Neither is universally better. One-on-one coaching gives faster feedback and personalised pacing, which suits students with uneven section scores or tight timelines. Group coaching gives a structured weekly rhythm, peer comparison, and a more affordable per-hour cost, which suits students with more time and balanced section performance. A hybrid approach, where a student joins a group programme and adds private hours for their weakest section in the final 4 weeks, often produces the strongest results for the cost. The honest answer for any individual student comes from looking at their diagnostic results, their schedule, and their target score together."
          }
        },
        {
          "@type": "Question",
          "name": "Where In Dubai Can I Take ACT Classes, DIFC, JLT, Or Online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ignite Training Institute offers ACT classes at two centres in Dubai. The DIFC location at Al Moosa Tower 1 on Sheikh Zayed Road is convenient for students near Emirates Towers Metro and the wider Downtown area. The JLT location at Tiffany Tower in Cluster W serves students from Dubai Marina, JBR, and the Greens. Both centres run the same programmes with the same tutors. We also offer fully online ACT classes for students based in Abu Dhabi, Sharjah, or other emirates, as well as students whose school schedule makes commuting difficult. The online format uses live video sessions, shared digital whiteboards, and the same diagnostic and mock test workflow as in-person classes."
          }
        },
        {
          "@type": "Question",
          "name": "Is The ACT Accepted By UK And UAE Universities, Or Only US Colleges?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The ACT is primarily a US university entrance test, and almost every US university accepts it as an alternative to the SAT. It is also accepted by a growing number of UK universities, particularly for applicants who are not following an A-Level or IB pathway. Cambridge, Oxford, and several Russell Group universities accept ACT scores from international applicants, often with subject-specific tests required alongside. In the UAE, the American University of Sharjah and several international branch campuses accept ACT scores. Students applying primarily to UK universities through the UCAS system usually do not need the ACT if they have strong A-Level or IB Diploma predicted grades, but it can strengthen applications to highly selective US programmes alongside their UK options."
          }
        },
        {
          "@type": "Question",
          "name": "How Do I Start ACT Tutoring At Ignite Training Institute In Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The starting point is a free ACT demo class at Ignite Training Institute. The demo runs through a short diagnostic, a conversation about target score and timeline, and a walkthrough of how a personalised plan would look for the student. Parents are welcome to join. There is no obligation after the demo, and the conversation often makes it easier to decide whether ACT prep is the right priority right now or whether another path makes more sense for the student’s applications. To book, you can request a demo through the website or speak to an academic advisor directly."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://ignitetraininginstitute.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "ACT Tutors In Dubai",
          "item": "https://ignitetraininginstitute.com/act-tutors-in-dubai"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "@id": "https://ignitetraininginstitute.com/",
      "name": "Ignite Training Institute",
      "url": "https://ignitetraininginstitute.com/",
      "logo": "https://ignitetraininginstitute.com/images/logo.webp",
      "description": "Ignite Training Institute is a leading tutoring centre in Dubai, UAE offering expert IB, IGCSE, A-Level, AP, ACT, and Homeschooling support for students.",
      "foundingDate": "2015",
      "telephone": "+971568357374",
      "email": "hello@ignitetraininginstitute.com",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "1503, Al Moosa Tower 1, Sheikh Zayed Road, Near Emirates Towers Metro (Sea Side)",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Tiffany Tower, Level 11, Cluster W, Jumeirah Lake Towers",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Dubai"
        },
        {
          "@type": "Country",
          "name": "United Arab Emirates"
        }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+971568357374",
          "contactType": "customer service",
          "email": "hello@ignitetraininginstitute.com",
          "areaServed": "AE",
          "availableLanguage": ["English", "Arabic"]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+971568357374",
          "contactType": "sales",
          "url": "https://wa.me/+971568357374",
          "contactOption": "TollFree",
          "availableLanguage": "English"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/ignitetraininginstitute",
        "https://www.instagram.com/ignitetraininginstitute/",
        "https://www.linkedin.com/company/ignite-training-institute"
      ],
      "knowsAbout": [
        "IGCSE",
        "GCSE",
        "British curriculum",
        "A-Level",
        "IB Diploma Programme",
        "IB Middle Years Programme",
        "Advanced Placement",
        "ACT",
        "UCAT",
        "Homeschooling"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "@id": "https://ignitetraininginstitute.com/act-tutors-in-dubai",
      "name": "ACT Tutoring in Dubai",
      "description": "Expert ACT preparation in Dubai with personalised tutoring across all ACT sections including English, Math, Reading, Science, and Writing. Programs include diagnostic testing, structured exam strategies, mock tests, and detailed feedback to help students achieve target scores.",
      "url": "https://ignitetraininginstitute.com/act-tutors-in-dubai",
      "image": "https://ignitetraininginstitute.com/assets/act_bg_main.webp",
      "educationalLevel": "Pre-University Standardised Test Preparation",
      "educationalCredentialAwarded": "ACT Score Improvement",
      "inLanguage": "en",
      "teaches": [
        "ACT English",
        "ACT Math",
        "ACT Reading",
        "ACT Science",
        "ACT Writing",
        "ACT Maths I and II",
        "ACT Physics",
        "ACT Chemistry",
        "ACT Biology",
        "Time Management Strategies",
        "Exam-Style Question Practice"
      ],
      "provider": {
        "@type": "EducationalOrganization",
        "@id": "https://ignitetraininginstitute.com/",
        "name": "Ignite Training Institute",
        "url": "https://ignitetraininginstitute.com/"
      },
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "student",
        "audienceType": "High school students preparing for the ACT standardised test"
      },
      "hasCourseInstance": [
        {
          "@type": "CourseInstance",
          "name": "Bespoke One-On-One Tutoring For ACT",
          "description": "A focused 6-week ACT program starting with a personalised diagnostic test, followed by tailored lessons in Math, English, and Science with flexible scheduling, mock exams, and exclusive in-house study materials.",
          "courseMode": ["Blended", "Onsite", "Online"]
        },
        {
          "@type": "CourseInstance",
          "name": "ACT Group Learning Program",
          "description": "A 10-week ACT group program: 6 weeks of subject foundation building followed by 4 weeks of intensive practice with ACT-style questions, mock exams, essay writing, and live review sessions.",
          "courseMode": ["Blended", "Onsite", "Online"]
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "81",
        "reviewCount": "8"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Nidhi Choudhury"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "We had a great experience with the instructor Flavy at Ignite. My child progressed amazingly under her guidance and achieved good grade in Chemistry. Thank you so much to her and Ahzeb and Ignite team for supporting us in this!",
          "publisher": {
            "@type": "Organization",
            "name": "Google"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Nicole Morgan"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "Sumit from Ignite went out of his way to arrange a tutor for my daughter on very short notice. The tutor was kind and competent and managed to quickly solve my daughter's doubt. Thank you! Highly recommend!",
          "publisher": {
            "@type": "Organization",
            "name": "Google"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sara Kerr"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "Really good tutoring sessions conducted. I'm a student going there myself and I really enjoy my Economics sessions with my tutor (Nidhi) who really gives good resources and explains/condenses concepts really well. Lots of past paper practice and she's very good at essay planning as well. Overall, I really enjoy the sessions I've been receiving here.",
          "publisher": {
            "@type": "Organization",
            "name": "Google"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sushma Menon"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "I was referred to Ignite by a family member who had previously used their services and was highly satisfied. From the start, the coordinator, Mr. Ahzeb, demonstrated exceptional professionalism in his interactions with both parents and students.My daughter was initially struggling with economics, but under the guidance of Miss Harsha, the subject became much more approachable and understandable. Her teaching style made a significant difference in my daughter’s confidence and performance.I would highly recommend this institute to anyone seeking additional academic support. Their dedication and quality of tutoring truly stand out, and I’m confident others will have a similarly positive experience.I would like to wish the team the very best of luck and I hope they will offer their services to many more countries within the Middle East in the future .",
          "publisher": {
            "@type": "Organization",
            "name": "Google"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rosie Seldon"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "The trainers were flexible and were able to help in difficult subjects like Physics. My son scored a 100/100 on one of his maths papers after working with the tutors. Great work.",
          "publisher": {
            "@type": "Organization",
            "name": "Google"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Abdullah Al Noubani"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "Ignite provides high quality tutoring with knowledgeable tutors and provide beneficial resources.",
          "publisher": {
            "@type": "Organization",
            "name": "Google"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Shweta Monga"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "They were happy to help regardless of my location. They also promptly responded to my request and set up a meeting on a short notice. It speaks a lot about their work ethics and I found them to be a credible institute.",
          "publisher": {
            "@type": "Organization",
            "name": "Google"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Alizah"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": "Been here for 3 years it was an amazing journey to be on academically and socially. Amazing vibe with the teachers.",
          "publisher": {
            "@type": "Organization",
            "name": "Google"
          }
        }
      ]
    }
  ];
  // ----------------------------------------------------
  // 👆 END OF SCHEMA DEFINITION
  // ----------------------------------------------------


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
        title="ACT Subject Tests Prep With Focused Courses & Tutors In UAE"
        description="Ignite Training Institute can support you as the best ACT tutors in Dubai through our comprehensive guidance & ACT-specific tutoring strategies"
        url="https://ignitetraininginstitute.com/act-tutors-in-dubai"
      />
      {/* 2. RENDER THE SCHEMA COMPONENT, passing the combined array */}
      <JsonLd schema={actSchema} />

      {/* 3. APPLY the style for paddingTop to the scroll container */}
      <div
        ref={scrollRef}
        className='overflow-hidden innerpage page-content-padding'
        data-scroll-container
      >
        <section data-scroll-section className="hero-section">
          <div className="hero-container">
            {/* LCP Image moved here for immediate painting (SSR) */}
            <picture className="hero-bg">
              <source media="(max-width: 768px)" srcSet="/assets/mobileact.webp" />
              <img
                src="/assets/act_bg_main.webp"
                alt="ACT Tutors Background"
                fetchPriority="high"
                width="1200"
                height="800"
                className="hero-img"
                style={{ opacity: 1, visibility: 'visible' }}
              />
            </picture>

            <InfoCard />
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
            <IgniteAboutCard />
          </section>
        </LazySection>
        {/* <section data-scroll-section>
            <StudentAchievements />
          </section> */}

        <LazySection>
          <section data-scroll-section>
            <CourseCard />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <SubjectsCard />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <SubjectsCard1 />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <UspsSection />
          </section>
        </LazySection>

        {/* <section data-scroll-section>
            <LifeAtIgniteCarousel />
          </section> */}

        <LazySection>
          <section data-scroll-section>
            <ReviewsSection />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section>
            <FAQSection />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <MarqueeBanner />
          </section>
        </LazySection>

        <LazySection>
          <section data-scroll-section className='actblogs'>
            <Blog />
          </section>
        </LazySection>
        <LazySection>
          <section data-scroll-section>
            <Accordion />
          </section>
        </LazySection>
      </div>
    </>
  );
};

export default act;