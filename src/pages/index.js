import { useState } from "react";
import Head from "next/head";
import LazySection from "@/components/LazySection";

import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import Hero from "@/components/homeCopy/Hero";
// import TestSeriesBanner from "@/components/homeCopy/TestSeriesBanner"; // Switched to dynamic




// Dynamic imports
// Dynamic imports switched to static for SSR (kept static for LCP/ATF components)
// import Course from "@/components/homeCopy/Course"; // Moving to dynamic

// Dynamic imports for below-the-fold components
import dynamic from "next/dynamic";
const Course = dynamic(() => import("@/components/homeCopy/Course"));
const MarqueeBanner = dynamic(() => import("@/components/shared/MarqueeBanner"));
import { getMarqueeData } from "@/data/marqueeConfig";
const About = dynamic(() => import("@/components/homeCopy/About"));
const Test = dynamic(() => import("@/components/homeCopy/Test"));
const Subjects = dynamic(() => import("@/components/homeCopy/Subjects"));
const Usps = dynamic(() => import("@/components/homeCopy/Usps"));
import { getTrainersData } from "@/data/trainersData";
const trainersData = getTrainersData("home");
const TrainersShared = dynamic(() => import("@/components/shared/Trainers"));
const Trainers = () => <TrainersShared trainers={trainersData} subHeading="MEET OUR TUTORS" title="Teachers Who Care About Your Success" />;
const CourseGallery = dynamic(() => import("@/components/shared/CourseGallery"));
import { getCourseGalleryData } from "@/data/coursePageSectionsConfig";
const Testimonial = dynamic(() => import("@/components/homeCopy/Testimonial"));
const Blog = dynamic(() => import("@/components/homeCopy/Blog"));
const FAQSection = dynamic(() => import("@/components/shared/FaqSection"));
// const TestSeriesBanner = dynamic(() => import("@/components/homeCopy/TestSeriesBanner"));


import path from "path";
import fs from "fs";
import he from "he";
import { homepageFaqs, homepageFaqSchema, homepageServicesSchema } from "@/data/homepageContent";

const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://ignitetraininginstitute.com/#webpage",
            url: "https://ignitetraininginstitute.com/",
            name: "Tuition Centres in Dubai | IGCSE, A-Level, IB & AP",
            description: "Ignite Training Institute is one of the trusted tuition centres in Dubai for students in Grades 6 to 13. Our tuition centre in Dubai offers IGCSE, A-Level, IBDP, IB MYP and AP tutoring, plus ACT preparation and homeschooling support. As a tutoring centre in Dubai, we run one-to-one lessons and small-group classes, online and in person at our Sheikh Zayed Road and Jumeirah Lakes Towers (JLT) centres. Our exam preparation centre in Dubai gives students past paper practice, mock exams and regular progress checks for Cambridge, Edexcel and AQA. Parents looking for private tuition centers or coaching centres in Dubai can book a free demo class first.",
            isPartOf: { "@id": "https://ignitetraininginstitute.com/#website" },
            about: { "@id": "https://ignitetraininginstitute.com/#organization" },
            primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://ignitetraininginstitute.com/images/hero-banner-video-c1-poster.webp",
            },
            breadcrumb: { "@id": "https://ignitetraininginstitute.com/#breadcrumb" },
            inLanguage: "en",
            mainEntity: { "@id": "https://ignitetraininginstitute.com/#organization" },
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://ignitetraininginstitute.com/#breadcrumb",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://ignitetraininginstitute.com/",
                },
            ],
        },
        homepageServicesSchema,
        homepageFaqSchema,
    ],
};

const HomeCopy = ({ blogPosts = [] }) => {
    const [active, setActive] = useState(1);

    return (
        <>
            <Head>
                <link
                    rel="preload"
                    as="image"
                    href="/images/hero-banner-video-c1-poster.webp"
                    fetchPriority="high"
                />
            </Head>
            <SEO
                title="Tuition Centres in Dubai | IGCSE, A-Level, IB & AP"
                description="Ignite is a trusted tuition centre in Dubai for IGCSE, A-Level, IBDP, IB MYP and AP. Expert tutors, online or in person at SZR and JLT. Book a free demo."
                url="https://ignitetraininginstitute.com/"
            />
            <JsonLd schema={homepageSchema} />
            {/* Using the CSS class page-content-padding (from critical.css) to ensure SEO-safe SSR without JS layout shifts */}
            <div className="homeCopy page-content-padding">
                <Hero />

                {/* <LazySection>
                    <TestSeriesBanner />
                </LazySection> */}

                <LazySection>
                    <Course />
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <MarqueeBanner config={getMarqueeData('homeCopy')} />
                    </section>
                </LazySection>

                <LazySection>
                    <About />
                </LazySection>

                <LazySection>
                    <Test
                        setActive={setActive}
                        active={active}
                        heading="Prepare for Your Next Test With Expert"
                        headingHighlight="Support"
                        description="Our coaching centre in Dubai also helps students prepare for the tests that matter for university. Classes are online and in person. Many families look at coaching centres in Dubai for test preparation, and our small classes and past paper practice keep the work focused."
                    />
                </LazySection>

                <LazySection>
                    <Subjects />
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <Usps />
                    </section>
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <Trainers />
                    </section>
                </LazySection>

                <LazySection>
                    <CourseGallery config={getCourseGalleryData("home")} />
                </LazySection>

                <LazySection>
                    <Testimonial />
                </LazySection>

                <LazySection>
                    <Blog posts={blogPosts} />
                </LazySection>

                <LazySection>
                    <section className="homeFaqSection" data-scroll-section>
                        <FAQSection
                            subHeading="FAQS"
                            title={'Your Questions About <highlight>Tuition Centres in Dubai</highlight>, Answered'}
                            faqData={homepageFaqs}
                        />
                    </section>
                </LazySection>
            </div>

            <style jsx>{`
                .homeFaqSection {
                    padding: 70px 0;
                }

                @media (max-width: 767px) {
                    .homeFaqSection {
                        padding: 50px 0;
                    }
                }
            `}</style>
        </>
    );
};

export async function getStaticProps() {
    try {
        const filePath = path.join(process.cwd(), 'src', 'data', 'blog', 'list.json');
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const listData = JSON.parse(fileData);

        // Extract top 3 posts
        const rawPosts = listData.posts ? listData.posts.slice(0, 3) : [];

        // Format data on the server — client only gets exactly what it needs to display
        const blogPosts = rawPosts.map((post) => {
            const rawExcerpt = (post.excerpt?.rendered || "").replace(/<[^>]*>?/gm, "");
            const rawTitle = (post.title?.rendered || "").replace(/<[^>]*>?/gm, "");

            const decodedExcerpt = he.decode(rawExcerpt);
            const decodedTitle = he.decode(rawTitle);

            const trimmedExcerpt =
                decodedExcerpt.length > 80
                    ? decodedExcerpt.substring(0, decodedExcerpt.lastIndexOf(" ", 80)) + "..."
                    : decodedExcerpt;

            return {
                img: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/blog-placeholder.webp",
                title: decodedTitle,
                desc: trimmedExcerpt,
                link: post.slug,
                width: 300,
                height: 200,
            };
        });

        return {
            props: {
                blogPosts,
            },
            revalidate: 3600,
        };
    } catch (e) {
        console.error("Home: Error loading blog data for SSG", e);
        return {
            props: {
                blogPosts: [],
            },
        };
    }
}

export default HomeCopy;
