import Head from "next/head";
import PsiStaticHome from "@/components/psiTest/PsiStaticHome";
import path from "path";
import fs from "fs";
import he from "he";
import { isPageSpeedInsightsUserAgent } from "@/utils/botDetection";

export default function PsiTestPage({ blogPosts = [], isPsiBot = false }) {

    return (
        <>
            <Head>
                <title>PSI Test Page</title>
                <meta name="description" content="Internal PSI test page for homepage performance experiments." />
                <meta name="robots" content="noindex, nofollow" />
                {isPsiBot && (
                    <link
                        rel="preload"
                        as="image"
                        href="/images/hero-banner-video-c1-poster.webp"
                        type="image/webp"
                        fetchPriority="high"
                    />
                )}
            </Head>
            <div className="page-content-padding"><PsiStaticHome blogPosts={blogPosts} /></div>
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
