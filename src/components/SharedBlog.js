import React, { useState, useEffect, useRef } from "react";
import { useScroll } from "./LocomotiveScrollProvider";
import fallbackPosts from "../data/blog/top-posts.json";

/**
 * SHARED BLOG COMPONENT
 */
const SharedBlog = ({ title, showInnerStyles = false, posts = [] }) => {
    // 🔥 DATA FLOW: 
    // Uses posts from Props (Home Page) OR Fallback JSON (Inner Pages)
    const [blogData] = useState(() => {
        if (posts && posts.length > 0) return posts;
        return fallbackPosts || [];
    });

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

    useEffect(() => {
        // Load Blog.css non-blocking after paint to avoid render-blocking
        const loadCSS = (href) => {
            if (document.querySelector(`link[href="${href}"]`)) return;
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = href;
            document.head.appendChild(link);
        };
        loadCSS("/styles/Blog.css");
        if (showInnerStyles) loadCSS("/styles/bloginnerpage.css");
    }, [showInnerStyles]);

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
