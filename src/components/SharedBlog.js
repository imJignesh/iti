import React, { useState, useEffect, useRef } from "react";
import he from "he";
import { useScroll } from "./LocomotiveScrollProvider";

/**
 * FETCH BLOG DATA - Synchronous local read
 */
const fetchBlogsLocal = () => {
    try {
        // We import it as a standard JSON module since Next.js supports this
        const listData = require('../data/blog/list.json');
        return listData.posts.slice(0, 3);
    } catch (e) {
        console.warn("SharedBlog: Local list.json not found, falling back to empty.");
        return [];
    }
};

/**
 * FORMAT DATA - Create a clean JS object from JSON posts
 */
const createBlogData = () => {
    const data = fetchBlogsLocal();

    const formattedBlogs = data.map((post) => {
        // Strip HTML tags
        const rawExcerpt = (post.excerpt?.rendered || "").replace(/<[^>]*>?/gm, "");
        const rawTitle = (post.title?.rendered || "").replace(/<[^>]*>?/gm, "");

        // Decode HTML entities (&amp;, &#8217;, etc.)
        const decodedExcerpt = he.decode(rawExcerpt);
        const decodedTitle = he.decode(rawTitle);

        // Trim excerpt for better card fit
        const trimmedExcerpt =
            decodedExcerpt.length > 80
                ? decodedExcerpt.substring(0, decodedExcerpt.lastIndexOf(" ", 80)) + "..."
                : decodedExcerpt;

        return {
            img:
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                "/images/blog-placeholder.webp",
            title: decodedTitle,
            desc: trimmedExcerpt,
            link: post.slug,
            // Pass through any media details if they exist for better layout
            width: 300,
            height: 200,
        };
    });

    return formattedBlogs;
};


/**
 * SHARED BLOG COMPONENT
 */
const SharedBlog = ({ title }) => {
    // 🔥 INSTANT STATE: First render has real data from list.json
    const [blogData] = useState(() => createBlogData());
    const sectionRef = useRef(null);
    const scrollInstance = useScroll();

    /**
     * 🛡️ THE "DEEP" FIX: SAFETY OBSERVER 
     * If Locomotive Scroll fails to trigger 'is-inview' (conflict or beta bug),
     * this local observer will force it to show after 200ms of entering the viewport.
     */
    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Wait 200ms to see if Locomotive Scroll handles the animation automatically.
                        // If not, we manually add 'is-inview' to force visibility.
                        setTimeout(() => {
                            if (sectionRef.current) {
                                const hiddenElements = sectionRef.current.querySelectorAll('.fade-in-section:not(.is-inview)');
                                if (hiddenElements.length > 0) {
                                    hiddenElements.forEach(el => el.classList.add('is-inview'));
                                    console.log("SharedBlog: Forced visibility via Safety Observer.");
                                }
                            }
                        }, 500); // 500ms safety window
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="blogSection" ref={sectionRef}>
            <div className="container">
                <div className="row gap-5 gap-lg-0">
                    {/* --- LEFT CONTENT (HEADINGs) --- */}
                    <div className="col-12 col-lg-5 blogLeft">
                        <div
                            className="fade-in-section blogHeadingRow"
                            data-scroll
                            data-scroll-class="is-inview"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <h2 className="SubHeading">BLOGS</h2>
                        </div>
                        <h3
                            data-scroll
                            data-scroll-class="is-inview"
                            className="fade-in-section blogTitle"
                            style={{ animationDelay: "0.2s" }}
                        >
                            {title}
                        </h3>
                        <div
                            data-scroll
                            data-scroll-class="is-inview"
                            className="fade-in-section blogSubtitle"
                            style={{ animationDelay: "0.3s" }}
                        >
                            Dive Into Our Signature Blogs
                        </div>
                        <a href="/blog" className="nodecoration">
                            <button
                                data-scroll
                                data-scroll-class="is-inview"
                                className="blogAllBtn buttonBlue fade-in-section"
                                style={{ animationDelay: "0.4s" }}
                            >
                                VIEW ALL BLOGS
                                <img
                                    src="/images/right-arrow-skyblue.webp"
                                    alt="arrow"
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </a>
                    </div>

                    {/* --- RIGHT CONTENT (BLOG CARDS) --- */}
                    <div className="col-12 col-lg-7 blogRight">
                        {blogData && blogData.length > 0 ? (
                            blogData.map((blog, i) => (
                                <div
                                    key={i}
                                    className="fade-in-section blogCard"
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    style={{ animationDelay: "0.2s" }}
                                >
                                    <a href={`/blog/${blog.link}`} className="nodecoration">
                                        <img
                                            src={blog.img}
                                            alt="blog"
                                            className="blogImg"
                                            width={blog.width || 300}
                                            height={blog.height || 200}
                                            loading="lazy"
                                        />
                                    </a>
                                    <div className="blogCardContent">
                                        <div className="blogCardTitle">{blog.title}</div>
                                        <div className="blogCardDesc">{blog.desc}</div>
                                        <span className="blogCardLine"></span>
                                        <a href={`/blog/${blog.link}`} className="nodecoration">
                                            <button className="blogReadMoreBtn buttonSkyBlue">
                                                READ MORE
                                                <span className="blogReadMoreArrow">
                                                    <img
                                                        src="/images/right-arrow-blue.webp"
                                                        alt="arrow"
                                                        width={20}
                                                        height={20}
                                                    />
                                                </span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                           /* Fallback if no blogs available */
                           <div className="blogCardTitle">Stay tuned for insights!</div>
                        )}
                    </div>

                    {/* --- MOBILE VIEW (ONLY) --- */}
                    <a href="/blog" className="nodecoration d-lg-none">
                        <button
                            data-scroll
                            data-scroll-class="is-inview"
                            className="blogAllBtnmobile buttonBlue fade-in-section"
                            style={{ animationDelay: "0.4s" }}
                        >
                            VIEW ALL BLOGS
                            <img
                                src="/images/right-arrow-skyblue.webp"
                                alt="arrow"
                                width={24}
                                height={24}
                            />
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SharedBlog;
