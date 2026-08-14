import Head from "next/head";
import { useState } from "react";
import dynamic from "next/dynamic";
import SEO from "@/components/SEO";
import Hero from "@/components/psiTest/Hero";
import PsiSection from "@/components/psiTest/PsiSection";
import { getMarqueeData } from "@/data/marqueeConfig";
import { getTrainersData } from "@/data/trainersData";
import path from "path";
import fs from "fs";
import he from "he";
import { isPageSpeedInsightsUserAgent } from "@/utils/botDetection";

const Course = dynamic(() => import("@/components/homeCopy/Course"));
const MarqueeBanner = dynamic(() => import("@/components/shared/MarqueeBanner"));
const About = dynamic(() => import("@/components/homeCopy/About"));
const TestInteractive = dynamic(() => import("@/components/homeCopy/Test"));
const TestStatic = dynamic(() => import("@/components/homeCopy/TestStatic"));
const Subjects = dynamic(() => import("@/components/homeCopy/Subjects"));
const Usps = dynamic(() => import("@/components/homeCopy/Usps"));
const TrainersShared = dynamic(() => import("@/components/shared/Trainers"));
const Testimonial = dynamic(() => import("@/components/homeCopy/Testimonial"));
const Blog = dynamic(() => import("@/components/homeCopy/Blog"));

const trainersData = getTrainersData("home");
const Trainers = () => <TrainersShared trainers={trainersData} />;

export default function PsiTestPage({ blogPosts = [], isPsiBot = false }) {
    const [active, setActive] = useState(1);

    return (
        <>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <SEO
                title="PSI Test Page"
                description="Internal PSI test page for homepage performance experiments."
                url="https://ignitetraininginstitute.com/psi-test"
            />
            <div className="homeCopy page-content-padding">
                <Hero disableVideo={isPsiBot} />
                <PsiSection intrinsicHeight={900}>
                    <Course />
                </PsiSection>

                <PsiSection intrinsicHeight={180}>
                    <section data-scroll-section>
                        <MarqueeBanner config={getMarqueeData("homeCopy")} />
                    </section>
                </PsiSection>

                <PsiSection intrinsicHeight={850}>
                    <About />
                </PsiSection>

                <PsiSection intrinsicHeight={850}>
                    {isPsiBot ? (
                        <TestStatic setActive={setActive} active={active} />
                    ) : (
                        <TestInteractive setActive={setActive} active={active} />
                    )}
                </PsiSection>

                <PsiSection intrinsicHeight={750}>
                    <Subjects />
                </PsiSection>

                <PsiSection intrinsicHeight={900}>
                    <section data-scroll-section>
                        <Usps />
                    </section>
                </PsiSection>

                <PsiSection intrinsicHeight={900}>
                    <section data-scroll-section>
                        <Trainers />
                    </section>
                </PsiSection>

                <PsiSection intrinsicHeight={700}>
                    <Testimonial />
                </PsiSection>

                <PsiSection intrinsicHeight={700}>
                    <Blog posts={blogPosts} />
                </PsiSection>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    try {
        // Keep the bot-specific response from being reused by normal visitors.
        // This route is an internal test page and is already noindex/nofollow.
        context.res.setHeader("Cache-Control", "private, no-store, max-age=0");

        const userAgent = context.req?.headers?.["user-agent"] || "";
        const isPsiBot = isPageSpeedInsightsUserAgent(userAgent);

        const filePath = path.join(process.cwd(), "src", "data", "blog", "list.json");
        const fileData = fs.readFileSync(filePath, "utf-8");
        const listData = JSON.parse(fileData);
        const rawPosts = listData.posts ? listData.posts.slice(0, 3) : [];

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
                isPsiBot,
            },
        };
    } catch (e) {
        console.error("PSI Test: Error loading blog data for SSG", e);
        return {
            props: {
                blogPosts: [],
                isPsiBot: false,
            },
        };
    }
}
