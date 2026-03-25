import React, { useState, useEffect } from "react";
import LazySection from "@/components/LazySection";

import SEO from "@/components/SEO";
import SEOHead from "@/components/SEOHead";
import Hero from "@/components/homeCopy/Hero";
// import TestSeriesBanner from "@/components/homeCopy/TestSeriesBanner"; // Switched to dynamic




// Dynamic imports
// Dynamic imports switched to static for SSR (kept static for LCP/ATF components)
// import Course from "@/components/homeCopy/Course"; // Moving to dynamic

// Dynamic imports for below-the-fold components
import dynamic from "next/dynamic";
const Course = dynamic(() => import("@/components/homeCopy/Course"));
const MarqueeBanner = dynamic(() => import("@/components/homeCopy/MarqueeBanner"));
const About = dynamic(() => import("@/components/homeCopy/About"));
const Test = dynamic(() => import("@/components/homeCopy/Test"));
const Subjects = dynamic(() => import("@/components/homeCopy/Subjects"));
const Usps = dynamic(() => import("@/components/homeCopy/Usps"));
const Trainers = dynamic(() => import("@/components/homeCopy/Trainers"));
const Testimonial = dynamic(() => import("@/components/homeCopy/Testimonial"));
const Blog = dynamic(() => import("@/components/homeCopy/Blog"));
const TestSeriesBanner = dynamic(() => import("@/components/homeCopy/TestSeriesBanner"));


import path from "path";
import fs from "fs";
import he from "he";

const HomeCopy = ({ blogPosts = [] }) => {
    const [active, setActive] = useState(1);

    return (
        <>
            <SEO
                title="Ignite Training Institute - Tutors In UAE For Exam Success"
                description="As Dubai's leading coaching institute, we empower students to embark on their academic journey by offering expert tutoring for IB, IGCSE, A Levels & AP"
                url="https://ignitetraininginstitute.com"
            />
            {/* Using the CSS class page-content-padding (from critical.css) to ensure SEO-safe SSR without JS layout shifts */}
            <div className="homeCopy page-content-padding">
                <Hero />
                
                <LazySection>
                    <TestSeriesBanner />
                </LazySection>

                <LazySection>
                    <Course />
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <MarqueeBanner />
                    </section>
                </LazySection>

                <LazySection>
                    <About />
                </LazySection>

                <LazySection>
                    <Test
                        setActive={setActive}
                        active={active}
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
                    <Testimonial />
                </LazySection>

                <LazySection>
                    <Blog posts={blogPosts} />
                </LazySection>
            </div>
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