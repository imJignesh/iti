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
                <Hero showVideo={false} isPsiTestPage />

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
                    <section style={{ contentVisibility: "auto", containIntrinsicSize: "1px 1200px" }}>
                        <Test
                            setActive={setActive}
                            active={active}
                        />
                    </section>
                </LazySection>

                <LazySection>
                    <Subjects />
                </LazySection>

                <LazySection>
                    <section
                        data-scroll-section
                        style={{ contentVisibility: "auto", containIntrinsicSize: "1px 900px" }}
                    >
                        <Usps config={getUspsData("homeCopy")} />
                    </section>
                </LazySection>

                <LazySection>
                    <section
                        data-scroll-section
                        style={{ contentVisibility: "auto", containIntrinsicSize: "1px 1600px" }}
                    >
                        <Trainers />
                    </section>
                </LazySection>

                <LazySection>
                    <section style={{ contentVisibility: "auto", containIntrinsicSize: "1px 1400px" }}>
                        <Testimonial />
                    </section>
                </LazySection>

                <LazySection>
                    <Blog posts={blogPosts} />
                </LazySection>
            </div>
        </>
    );
}

export async function getStaticProps() {
    try {
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
            },
            revalidate: 3600,
        };
    } catch (error) {
        console.error("Psi test: Error loading blog data for SSG", error);
        return {
            props: {
                blogPosts: [],
            },
        };
    }
}
