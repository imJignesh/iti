import React from "react";
import he from "he";
import { useEffect } from "react";
import { useScroll } from "../LocomotiveScrollProvider";

const fetchBlogs = async () => {
    const res = await fetch(
        "https://ignitetraininginstitute.com/wp-json/wp/v2/posts?per_page=3&_embed"
    );
    const data = await res.json();
    return data;
};

// create javascript object for blog data
const createBlogData = async () => {
    const data = await fetchBlogs();

    const formattedBlogs = data.map((post) => {
        // Strip HTML tags
        const rawExcerpt = post.excerpt.rendered.replace(/<[^>]*>?/gm, "");
        const rawTitle = post.title.rendered.replace(/<[^>]*>?/gm, "");

        // Decode HTML entities (&amp;, &#8217;, etc.)
        const decodedExcerpt = he.decode(rawExcerpt);
        const decodedTitle = he.decode(rawTitle);

        // Trim to ~100 chars without cutting words
        const trimmedExcerpt =
            decodedExcerpt.length > 80
                ? decodedExcerpt.substring(0, decodedExcerpt.lastIndexOf(" ", 80)) +
                "..."
                : decodedExcerpt;

        return {
            img:
                post._embedded["wp:featuredmedia"]?.[0]?.source_url ||
                "/images/blog-placeholder.jpg",
            title: decodedTitle,
            desc: trimmedExcerpt,
            link: post.slug,
        };
    });

    return formattedBlogs;
};

const staticBlogs = [
    {
        img: "/images/blogImage1.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        desc: "Choosing us means partnering with experienced coaches who are...",
        link: "/blogs",
    },
    {
        img: "/images/blogImage2.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        desc: "Choosing us means partnering with experienced coaches who are...",
        link: "/blogs",
    },
    {
        img: "/images/blogImage3.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        desc: "Choosing us means partnering with experienced coaches who are...",
        link: "/blogs",
    },
];

const Blog = () => {
    const [blogData, setBlogData] = React.useState(staticBlogs);
    const scrollRef = useScroll();

    useEffect(() => {
        const fetchData = async () => {
            const data = await createBlogData();
            setBlogData(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (blogData.length > 0) {
            scrollRef?.update();
        }
    }, [blogData]);

    return (
        <section className="blogSection">
            <div className="container">
                <div className="row gap-5 gap-lg-0">
                    <div className="col-12 col-lg-5 blogLeft">
                        <div
                            className="fade-in-section blogHeadingRow"
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <span className="SubHeading">BLOGS</span>
                        </div>
                        <h2
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section blogTitle"
                            style={{ animationDelay: "0.2s" }}
                        >
                            Smarter Learning Starts With The Right Insights
                            {/* <span className="blogHighlight"> ADIPISCING</span> */}
                        </h2>
                        <div
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section blogSubtitle"
                            style={{ animationDelay: "0.3s" }}
                        >
                            Dive Into Our Signature Blogs
                        </div>
                        <a href="/blog" className="nodecoration">
                            <button
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="blogAllBtn buttonBlue fade-in-section"
                                style={{ animationDelay: "0.4s" }}
                            >
                                VIEW ALL BLOGS
                                <img
                                    src="/images/right-arrow-skyblue.png"
                                    alt="arrow"
                                    width={24}
                                    height={24}
                                />
                            </button>
                        </a>
                    </div>

                    <div className="col-12 col-lg-7 blogRight">
                        {blogData &&
                            blogData.map((blog, i) => (
                                <div
                                    key={i}
                                    data-scroll
                                    data-scroll-class="is-inview"
                                    data-scroll-repeat="true"
                                    className="fade-in-section blogCard"
                                    style={{ animationDelay: "0.2s" }}
                                >
                                    <a href={`/blog/${blog.link}`} className="nodecoration"><img
                                        src={blog.img}
                                        alt="blog"
                                        data-scroll
                                        data-scroll-class="is-clipped"
                                        data-scroll-repeat="true"
                                        data-scroll-offset="-10%"
                                        className="blogImg"
                                    /></a>
                                    <div className="blogCardContent">
                                        <div className="blogCardTitle">{blog.title}</div>
                                        <div className="blogCardDesc">{blog.desc}</div>
                                        <span className="blogCardLine"></span>
                                        <a href={`/blog/${blog.link}`} className="nodecoration">
                                            <button className="blogReadMoreBtn buttonSkyBlue">
                                                READ MORE
                                                <span className="blogReadMoreArrow">
                                                    <img
                                                        src="/images/right-arrow-blue.png"
                                                        alt="arrow"
                                                        width={20}
                                                        height={20}
                                                    />
                                                </span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            ))}
                    </div>

                    <a href="/blog" className="nodecoration d-lg-none">
                        <button
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="blogAllBtnmobile buttonBlue fade-in-section"
                            style={{ animationDelay: "0.4s" }}
                        >
                            VIEW ALL BLOGS
                            <img
                                src="/images/right-arrow-skyblue.png"
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

export default Blog;