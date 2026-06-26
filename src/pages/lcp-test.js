import React, { useState, useEffect } from "react";
import LazySection from "@/components/LazySection";

import SEO from "@/components/SEO";
import SEOHead from "@/components/SEOHead";
import HeroTest from "@/components/homeCopy/HeroTest";

// Dynamic imports for below-the-fold components - all with ssr: false to defer rendering
import dynamic from "next/dynamic";
const Course = dynamic(() => import("@/components/homeCopy/Course"), { ssr: false });
const MarqueeBanner = dynamic(() => import("@/components/homeCopy/MarqueeBanner"), { ssr: false });
const About = dynamic(() => import("@/components/homeCopy/About"), { ssr: false });
const Test = dynamic(() => import("@/components/homeCopy/Test"), { ssr: false });
const Subjects = dynamic(() => import("@/components/homeCopy/Subjects"), { ssr: false });
const Usps = dynamic(() => import("@/components/homeCopy/Usps"), { ssr: false });
const Trainers = dynamic(() => import("@/components/homeCopy/Trainers"), { ssr: false });
const Testimonial = dynamic(() => import("@/components/homeCopy/Testimonial"), { ssr: false });
const Blog = dynamic(() => import("@/components/homeCopy/Blog"), { ssr: false });

import path from "path";
import fs from "fs";
import he from "he";

const LcpTest = ({ blogPosts = [] }) => {
    const [active, setActive] = useState(1);

    return (
        <>
            <SEO
                title="LCP Test - Ignite Training Institute"
                description="LCP testing page - not indexed"
                url="https://ignitetraininginstitute.com/lcp-test"
            />
            {/* Using the CSS class page-content-padding (from critical.css) to ensure SEO-safe SSR without JS layout shifts */}
            <div className="homeCopy page-content-padding">
                <HeroTest />

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
        console.error("LCP Test: Error loading blog data for SSG", e);
        return {
            props: {
                blogPosts: [],
            },
        };
    }
}

export default LcpTest;
