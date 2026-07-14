import React, { useState, useEffect, useRef } from "react";
import { useScroll } from "./LocomotiveScrollProvider";
import fallbackPosts from "../data/blog/top-posts.json";

/**
 * SHARED BLOG COMPONENT
 * Self-contained: styles live inside <style jsx> — no external CSS file needed.
 */
const SharedBlog = ({ title, posts = [] }) => {
    // 🔥 DATA FLOW:
    // Uses posts from Props (Home Page) OR Fallback JSON (Inner Pages)
    const [blogData] = useState(() => {
        if (posts && posts.length > 0) return posts;
        return fallbackPosts || [];
    });

    const sectionRef = useRef(null);
    const scrollInstance = useScroll();

    /**
     * 🛡️ SAFETY OBSERVER
     * If Locomotive Scroll fails to trigger 'is-inview' (conflict or beta bug),
     * this local observer will force it to show after 500ms of entering the viewport.
     */
    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            if (sectionRef.current) {
                                const hiddenElements = sectionRef.current.querySelectorAll('.fade-in-section:not(.is-inview)');
                                if (hiddenElements.length > 0) {
                                    hiddenElements.forEach(el => el.classList.add('is-inview'));
                                }
                            }
                        }, 500);
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
        <>
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
                                <div className="blogCardTitle">Stay tuned for insights!</div>
                            )}
                        </div>

                        {/* --- MOBILE CTA (ONLY) --- */}
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

            <style jsx>{`
                .blogSection {
                    padding: 80px 0 40px 0;
                    background: #fff;
                    width: 100%;
                }

                .blogSection .blogsLabel {
                    font-size: 22px;
                    font-weight: 700;
                    color: var(--blue-color);
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }

                .blogSection .blogTitle {
                    font-weight: 700;
                    color: var(--blue-color);
                    text-transform: uppercase;
                    margin: 35px 0 18px 0;
                    line-height: 1.1;
                }

                .blogSection .blogTitle .blogHighlight {
                    background: linear-gradient(to left, var(--green-color), var(--lightgreen-color));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .blogSection .blogSubtitle {
                    font-size: 1vw;
                    color: var(--blue-color);
                    letter-spacing: 2px;
                    margin: 25px 0;
                    text-transform: uppercase;
                }

                .blogSection .blogAllBtn,
                .blogSection .blogAllBtnmobile {
                    font-size: 1rem;
                    font-weight: 700;
                    width: max-content;
                }

                .blogSection .blogAllBtnmobile {
                    display: none;
                }

                .blogSection .blogLeft h3 {
                    width: 80%;
                    font-size: 2rem;
                }

                .blogSection .blogRight {
                    display: flex;
                    flex-direction: column;
                    gap: 36px;
                }

                .blogSection .blogCard {
                    display: flex;
                    align-items: center;
                    gap: 30px;
                    background: none;
                    box-shadow: none;
                }

                .blogSection .blogImg {
                    aspect-ratio: 3 / 2;
                    object-fit: cover;
                    border-radius: 24px;
                }

                .blogSection .blogCardContent {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    gap: 12px;
                    flex: 1;
                }

                .blogSection .blogCardTitle {
                    font-size: 1vw;
                    font-weight: 700;
                    color: var(--blue-color);
                    margin-bottom: 4px;
                    line-height: 1.2;
                }

                .blogSection .blogCardDesc {
                    font-size: 0.8vw;
                    color: #7a8ca3;
                    opacity: 0.9;
                    line-height: 1.2;
                }

                .blogSection .blogCardLine {
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(to right, var(--border-color), transparent);
                    margin: 8px 0;
                }

                .blogSection .blogReadMoreBtn {
                    font-size: 1rem;
                    font-weight: 700;
                    padding: 5px 20px;
                }

                .blogSection .blogReadMoreBtn:hover {
                    transform: scale(1.05);
                }

                .blogSection .blogReadMoreArrow {
                    width: 25px;
                    height: 25px;
                }

                .blogSection .blogReadMoreArrow img {
                    width: 100%;
                    height: 100%;
                }

                /* Fade animation */
                .fade-in-section {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
                }
                .fade-in-section.is-inview {
                    opacity: 1;
                    transform: translateY(0);
                }

                @media (max-width: 1100px) {
                    .blogSection .blogTitle {
                        font-size: 1.4rem;
                    }
                    .blogSection .blogSubtitle {
                        font-size: 14px;
                    }
                    .blogSection .blogAllBtn {
                        font-size: 1rem;
                    }
                    .blogSection .blogCardTitle {
                        font-size: 1rem;
                    }
                    .blogSection .blogCardDesc {
                        font-size: 1rem;
                    }
                }

                @media (max-width: 991px) {
                    .blogSection .blogLeft {
                        text-align: center;
                    }
                    .blogSection .blogTitle {
                        max-width: 500px;
                        margin: 20px auto;
                        font-size: 20.4px !important;
                        line-height: 23px !important;
                    }
                    .blogSection .blogAllBtn {
                        display: none;
                    }
                    .blogSection .blogCard {
                        padding-bottom: 40px;
                        border-bottom: 1px solid #dedede;
                    }
                    .blogSection .blogCardContent {
                        padding-right: 30px;
                    }
                    .blogSection .blogCardDesc {
                        margin-bottom: 10px;
                    }
                    .blogSection .blogReadMoreBtn {
                        padding: 10px 20px;
                        letter-spacing: 2px;
                    }
                    .blogSection .blogCardLine {
                        display: none;
                    }
                }

                @media (max-width: 767px) {
                    .blogSection .blogSubtitle {
                        display: block;
                    }
                    .blogSection .blogImg {
                        max-width: 30vw;
                    }
                    .blogSection .blogAllBtnmobile {
                        display: flex;
                        margin: 0 auto;
                        gap: 15px;
                    }
                    .blogSection .blogCard {
                        gap: 7vw;
                    }
                    .blogSection .blogCardDesc {
                        font-size: 0.8rem;
                    }
                }

                @media (max-width: 575px) {
                    .blogSection .blogAllBtnmobile {
                        max-width: 100vw;
                    }
                    .blogSection .blogImg {
                        max-width: 100%;
                        width: 100%;
                        height: auto;
                    }
                    .blogSection .blogCard {
                        flex-direction: column;
                        margin-bottom: 20px;
                        padding-bottom: 20px;
                    }
                    .blogSection .blogLeft h3 {
                        width: 100%;
                    }
                    .blogSection .blogRight {
                        gap: 5px;
                    }
                    .mobile-hide {
                        display: none;
                    }
                }

                @media (max-width: 440px) {
                    .blogSection .blogCard {
                        flex-direction: column;
                    }
                }
            `}</style>
        </>
    );
};

export default SharedBlog;
