//pages/[slug].js

'use client';

import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect, useRef, useState } from 'react';

// You must add 'import "locomotive-scroll/dist/locomotive-scroll.css";'
// to your `pages/_app.js` file to avoid a build error.

// Fetcher function for SWR to handle API requests
const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        const error = new Error('Failed to fetch data');
        error.info = await res.json();
        error.status = res.status;
        throw error;
    }
    return res.json();
};

// Helper function to create a URL-friendly slug from a string
const slugify = (text) => {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/-+$/, '');
};

// Function to generate the sidebar's HTML as a string
const getSidebarHtml = () => {
    return `
        <div class="sticky-sidebar-wrapper">
            <div class="sidebar-image mb-4">
                <img
                    src="/images/blog-sidebar.png"
                    alt="Get a Free Counseling"
                    class="img-fluid w-100 rounded"
                />
            </div>
            <div class="form-container">
                <h2>Get a Free Demo Class +<br />Free Study Resources</h2>
                <form>
                    <div class="form-row">
                        <div class="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="" />
                        </div>
                        <div class="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <div class="phone-input">
                            <img src="https://flagcdn.com/w40/ae.png" alt="UAE Flag" class="flag" />
                            <input type="text" id="phone" placeholder="+971" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label htmlFor="course">Tests/Courses</label>
                        <select id="course">
                            <option>IB Diploma</option>
                            <option>IGCSE</option>
                            <option>ACT</option>
                            <option>SAT</option>
                        </select>
                    </div>
                    <button type="submit" class="submit-btn">
                        Submit
                        <span class="arrow">→</span>
                    </button>
                </form>
            </div>
        </div>
    `;
};


// Component to handle rendering the post content with the TOC inserted
const TOCPostContent = ({ content, toc }) => {
    if (!content) return null;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    const firstH2 = tempDiv.querySelector('h2');
    if (firstH2) {
        const tocWrapper = document.createElement('div');
        tocWrapper.id = 'toc-container';
        firstH2.parentNode.insertBefore(tocWrapper, firstH2);
    }

    const tocHtml = `
        <div class="my-4 d-lg-none">
            <div class="card-body">
                <h5 class="toc-title">Table of Contents</h5>
                <nav>
                    <ul class="list-unstyled mb-0 toc-list">
                        ${toc.map(({ text, id }) => `<li class="toc-item py-1"><a href="#${id}" class="text-decoration-none">${text}</a></li>`).join('')}
                    </ul>
                </nav>
            </div>
        </div>
        <div class="d-lg-none">
            ${getSidebarHtml()}
        </div>
    `;

    let newContent = tempDiv.innerHTML;
    if (firstH2) {
        const tocPlaceholder = `<div id="toc-container"></div>`;
        newContent = newContent.replace(tocPlaceholder, tocHtml);
    }

    return (
        <div
            className="post-content lh-lg text-secondary"
            dangerouslySetInnerHTML={{ __html: newContent }}
        />
    );
};


export default function PostDetail() {
    const router = useRouter();
    const { slug } = router.query;
    const [toc, setToc] = useState([]);

    const postApiUrl = slug ? `https://ignitetraininginstitute.com/wp-json/wp/v2/posts?slug=${slug}&_embed` : null;
    const { data, error, isLoading } = useSWR(postApiUrl, fetcher);

    const scrollInstanceRef = useRef(null);

    useEffect(() => {
        let scroll;
        const initScroll = async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            scroll = new LocomotiveScroll({
                el: document.body,
                smooth: true,
                lerp: 0.1,
            });
            scrollInstanceRef.current = scroll;
        };

        if (typeof window !== "undefined") {
            initScroll();
        }

        return () => {
            scrollInstanceRef.current?.destroy();
            scrollInstanceRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (data && data[0]?.content?.rendered) {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data[0].content.rendered;

            const headings = Array.from(tempDiv.querySelectorAll('h2'));
            const generatedToc = headings.map(heading => {
                const text = heading.textContent;
                const id = slugify(text);
                heading.id = id;
                return { text, id };
            });

            data[0].content.rendered = tempDiv.innerHTML;
            setToc(generatedToc);

            if (scrollInstanceRef.current?.update) {
                scrollInstanceRef.current.update();
            }
        }
    }, [data]);

    if (router.isFallback || isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="alert alert-danger my-5 p-4">Failed to load post. Please try again later.</div>;
    }

    const post = data?.[0];

    if (!post) {
        return (
            <div className="text-center text-muted h4 py-5">
                <h1>404 - Post Not Found</h1>
                <p>The blog post you are looking for does not exist.</p>
                <button onClick={() => router.push('/')} className="btn btn-primary mt-3">
                    Go to Homepage
                </button>
            </div>
        );
    }

    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const authorName = post._embedded?.author?.[0]?.name || 'Sumit Advani';
    const publishedDate = post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A';
    const updatedDate = post.modified ? new Date(post.modified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : null;

    const postUrl = typeof window !== 'undefined' ? window.location.href : '';
    const postTitle = post.title.rendered.replace(/<\/?[^>]+(>|$)/g, "");

    return (
        <>
            <section className="post-detail-section py-5" data-scroll data-scroll-section>
                <div className="container">
                    <h1 className="mb-4 display-4 main-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    <div className="mb-2 post-date">
                        <span>Published on {publishedDate} </span>
                        <span className="post-date-separator">|</span>
                        {updatedDate && (
                            <span>Updated on {updatedDate}</span>
                        )}
                    </div>
                    <div className="mb-2 post-author">
                        <span>By {authorName}</span>
                    </div>

                    <div className="post-share-icons mb-4">
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`} target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postTitle)}`} target="_blank" rel="noopener noreferrer">X</a>
                        <a href={`mailto:?subject=${encodeURIComponent(postTitle)}&body=${encodeURIComponent(postUrl)}`} target="_blank" rel="noopener noreferrer">Mail</a>
                    </div>

                    {featuredImage && (
                        <div className="text-center mb-5 image-feature">
                            <img
                                src={featuredImage}
                                alt={post.title.rendered}
                                className="img-fluid"
                                style={{ objectFit: 'cover', width: '100%' }}
                            />
                        </div>
                    )}
                </div>
            </section>

            <section
                className="post-content-and-sidebar-section py-5"
                data-scroll
                data-scroll-section
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <TOCPostContent content={post.content.rendered} toc={toc} />
                        </div>
                        <div className="col-lg-1 d-none d-lg-block">  </div>
                        <div className="col-lg-3 d-none d-lg-block">
                            <div className="sticky-sidebar-wrapper">
                                {/* This is the desktop sidebar, which is hidden on mobile */}
                                <div dangerouslySetInnerHTML={{ __html: getSidebarHtml() }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}