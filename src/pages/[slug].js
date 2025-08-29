//pages/[slug].js

'use client';

import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

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

    const yoastData = post?.yoast_head_json;

    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    const authorName = post._embedded?.author?.[0]?.name || 'Sumit Advani';
    const publishedDate = post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A';
    const updatedDate = post.modified ? new Date(post.modified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : null;

    const postUrl = typeof window !== 'undefined' ? window.location.href : '';
    const postTitle = post.title.rendered.replace(/<\/?[^>]+(>|$)/g, "");

    return (
        <>
            {yoastData && (
                <Head>
                    <title>{yoastData.title}</title>
                    <meta name="description" content={yoastData.description} key="desc" />
                    {yoastData.og_image && (
                        <meta property="og:image" content={yoastData.og_image[0].url} />
                    )}
                </Head>
            )}

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
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`} target="_blank" rel="noopener noreferrer">

                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 1.19995C-4.26814 2.02795 -7.15102 41.6942 20.4192 46.8H24H27.5808C55.1573 41.6894 52.2619 2.02507 24 1.19995Z" fill="#1877F2" />
                                <path d="M27.5807 30.7699H32.9207L33.9369 24.1392H27.5807V19.836C27.5807 18.0221 28.4687 16.2538 31.3156 16.2538H34.2057V10.6085C28.0166 9.49343 20.5809 9.83279 20.4191 19.0853V24.1392H14.6001V30.7699H20.4191V46.8H23.9999H27.5807V30.7699Z" fill="#F1F1F1" />
                            </svg>

                        </a>
                        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postTitle)}`} target="_blank" rel="noopener noreferrer">

                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_7_16)">
                                    <path d="M24 0C10.7456 0 0 10.7456 0 24C0 37.2544 10.7456 48 24 48C37.2544 48 48 37.2544 48 24C48 10.7456 37.2544 0 24 0Z" fill="black" />
                                    <path d="M26.6257 21.8281L36.8998 9.88525H34.4652L25.5441 20.2551L18.419 9.88525H10.2009L20.9756 25.5662L10.2009 38.0901H12.6357L22.0565 27.1392L29.5812 38.0901H37.7993L26.6251 21.8281H26.6257ZM13.513 11.7181H17.2526L34.4663 36.3406H30.7266L13.513 11.7181Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_7_16">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </a>
                        <a href={`mailto:?subject=${encodeURIComponent(postTitle)}&body=${encodeURIComponent(postUrl)}`} target="_blank" rel="noopener noreferrer">

                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_7_13)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.008 0.0078125C37.2627 0.0078125 48.008 10.7503 48.008 24.0111C48.008 37.2652 37.2628 48.0077 24.008 48.0077C10.7531 48.0077 0.00805664 37.2657 0.00805664 24.0111C0.00805664 10.7503 10.7532 0.0078125 24.008 0.0078125ZM38.8883 14.8716L25.7709 25.7709C25.2776 26.1868 24.6531 26.4149 24.0078 26.4149C23.3626 26.4149 22.7381 26.1868 22.2447 25.7709L9.1274 14.8716C9.04812 15.0744 9.00761 15.2904 9.00796 15.5082V32.5071C9.00903 32.9736 9.19478 33.4208 9.52461 33.7507C9.85444 34.0806 10.3015 34.2666 10.768 34.2678H37.2476C37.7142 34.2666 38.1613 34.0808 38.4912 33.7508C38.8211 33.4208 39.0069 32.9737 39.008 32.5071V15.5082C39.0082 15.2904 38.9676 15.0744 38.8883 14.8716Z" fill="#4CAF50" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_7_13">
                                        <rect width="48" height="48" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </a>
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