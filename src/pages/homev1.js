import path from "path";
import fs from "fs";
import he from "he";
import Head from "next/head";
import SEO from "@/components/SEO";
import dynamic from "next/dynamic";
import Hero from "@/components/homev1/Hero";
import Course from "@/components/homev1/Course";
import About from "@/components/homev1/About";
import Test from "@/components/homev1/Test";
import Subjects from "@/components/homev1/Subjects";
import Footer from "@/components/homev1/Footer";
import { getMarqueeData } from "@/data/marqueeConfig";

const Testimonial = dynamic(() => import("@/components/homev1/Testimonial"));
const Blog = dynamic(() => import("@/components/homev1/Blog"));
const Trainers = dynamic(() => import("@/components/homev1/Trainers"));
const Usps = dynamic(() => import("@/components/homev1/Usps"));
const MarqueeBanner = dynamic(() => import("@/components/shared/MarqueeBanner"));

export default function HomeV1Page({ blogPosts = [] }) {
    return (
        <>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
                <link
                    rel="preload"
                    as="image"
                    href="/images/hero-banner-video-c1-poster.webp"
                    fetchPriority="high"
                />
                <link
                    rel="preload"
                    as="image"
                    href="/images/banner-bg.webp"
                    media="(min-width: 768px)"
                />
                <link
                    rel="preload"
                    as="image"
                    href="/images/banner-bg-mobile.webp"
                    media="(max-width: 767px)"
                />
            </Head>
            <SEO
                title="Ignite Training Institute - Tutors In UAE For Exam Success"
                description="As Dubai's leading coaching institute, we empower students to embark on their academic journey by offering expert tutoring for IB, IGCSE, A Levels & AP"
                url="https://ignitetraininginstitute.com"
            />
            <Hero />
            <Course />
            <div className="homev1Marquee">
                <MarqueeBanner config={getMarqueeData("homeCopy")} />
            </div>
            <About />
            <Test />
            <Subjects />
            <Usps />
            <Trainers />
            <Testimonial />
            <Blog posts={blogPosts} />
            <Footer />
            <style jsx global>{`
                .homev1Marquee .fade-in-section {
                    opacity: 1;
                    visibility: visible;
                    transform: none;
                }
            `}</style>
        </>
    );
}

export async function getServerSideProps(context) {
    context.res.setHeader("Cache-Control", "no-store, max-age=0");
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
                isHomeV1Page: true,
                blogPosts,
            },
        };
    } catch (e) {
        console.error("HomeV1: Error loading blog data", e);
        return {
            props: {
                isHomeV1Page: true,
                blogPosts: [],
            },
        };
    }
}

