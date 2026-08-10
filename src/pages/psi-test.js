import Head from "next/head";
import dynamic from "next/dynamic";
import fs from "fs";
import path from "path";
import he from "he";
import { useState } from "react";

import SEO from "@/components/SEO";
import Hero from "@/components/homeCopy/Hero";
import LazySection from "@/components/LazySection";
import { getMarqueeData } from "@/data/marqueeConfig";
import { getTrainersData } from "@/data/trainersData";
import { getUspsData } from "@/data/uspsConfig";
import { isPageSpeedInsightsUserAgent } from "@/utils/botDetection";

const Course = dynamic(() => import("@/components/homeCopy/Course"));
const MarqueeBanner = dynamic(() => import("@/components/shared/MarqueeBanner"));
const About = dynamic(() => import("@/components/homeCopy/About"));
const Test = dynamic(() => import("@/components/homeCopy/Test"));
const Subjects = dynamic(() => import("@/components/homeCopy/Subjects"));
const Usps = dynamic(() => import("@/components/homeCopy/Usps"));
const TrainersShared = dynamic(() => import("@/components/shared/Trainers"));
const Testimonial = dynamic(() => import("@/components/homeCopy/Testimonial"));
const Blog = dynamic(() => import("@/components/homeCopy/Blog"));

const trainersData = getTrainersData("home");
const Trainers = () => <TrainersShared trainers={trainersData} />;

export default function PsiTestPage({ blogPosts = [] }) {
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
                <Hero />

                <LazySection>
                    <Course />
                </LazySection>

                <LazySection>
                    <section data-scroll-section>
                        <MarqueeBanner config={getMarqueeData("homeCopy")} />
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
                        <Usps config={getUspsData("homeCopy")} />
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

            <style jsx>{`
                .psiStaticSection {
                    padding: 40px 0;
                }

                .psiStaticCard {
                    border: 1px solid rgba(22, 22, 100, 0.12);
                    border-radius: 24px;
                    padding: 32px;
                    background: #fff;
                    color: var(--blue-color);
                }

                .psiStaticCard h2 {
                    font-size: 28px;
                    line-height: 1.2;
                    margin-bottom: 12px;
                    text-transform: uppercase;
                }

                .psiStaticCard p {
                    font-size: 18px;
                    line-height: 1.6;
                    margin: 0;
                    max-width: 720px;
                }
            `}</style>
        </>
    );
}

export async function getServerSideProps(context) {
    try {
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
    } catch (error) {
        console.error("Psi test: Error loading blog data for SSG", error);
        return {
            props: {
                blogPosts: [],
                isPsiBot: false,
            },
        };
    }
}
