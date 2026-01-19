'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useSWR from 'swr';
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import Head from 'next/head';
import initialStaticPosts from '../../public/data/posts.json';

const limitChars = (text, maxChars) => {
    if (!text) return '';
    if (text.length <= maxChars) return text;
    return text.substring(0, maxChars) + '...';
};

const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch data');
    const data = await res.json();
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages'), 10) || 1;
    return { data, totalPages };
};

const Blogpg = ({ headerHeight }) => {
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://ignitetraininginstitute.com/blog/"
        },
        "headline": "Ignite Training Institute Blog",
        "description": "Explore expert insights, academic tips, and exam strategies.",
        "publisher": {
            "@type": "EducationalOrganization",
            "name": "Ignite Training Institute",
            "url": "https://ignitetraininginstitute.com/",
            "logo": {
                "@type": "ImageObject",
                "url": "https://ignitetraininginstitute.com/wp-content/uploads/2023/02/ignitefinallogos_1.svg"
            }
        },
        "url": "https://ignitetraininginstitute.com/blog/"
    };

    const [posts, setPosts] = useState(initialStaticPosts);
    const [page, setPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [isDynamic, setIsDynamic] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const timerId = setTimeout(() => setDebouncedSearchTerm(searchTerm), 500);
        return () => clearTimeout(timerId);
    }, [searchTerm]);

    const postsApiUrl = `https://api.ignitetraininginstitute.com/wp-json/wp/v2/posts?per_page=9&page=${page}&_embed&_fields=id,date,title,slug,excerpt,featured_media,_links,_embedded,yoast_head_json${selectedCategories.length > 0 ? `&categories=${selectedCategories.join(',')}` : ''}${debouncedSearchTerm ? `&search=${debouncedSearchTerm}` : ''}`;

    const { data, isValidating } = useSWR(isDynamic ? postsApiUrl : null, fetcher);

    useEffect(() => {
        if (data && data.data) {
            if (page === 1) {
                setPosts(data.data);
            } else {
                setPosts(prevPosts => [...prevPosts, ...data.data]);
            }
            setHasMore(page < data.totalPages);
        }
    }, [data, page]);

    useEffect(() => {
        const fetchMetadata = async () => {
            try {
                const res = await fetch('https://api.ignitetraininginstitute.com/wp-json/wp/v2/categories?per_page=100&_fields=id,name');
                const cats = await res.json();
                setCategories(cats);
            } catch (err) {
                console.error("Failed to fetch categories", err);
            }
        };
        fetchMetadata();
    }, []);

    const triggerDynamicFetch = () => {
        setIsDynamic(true);
        setPage(1);
    };

    const handleLoadMore = () => {
        setIsDynamic(true);
        setPage(prev => prev + 1);
    };

    const handleCategoryClick = useCallback((categoryId) => {
        triggerDynamicFetch();
        setPosts([]);
        setSelectedCategories(prevSelected =>
            prevSelected.includes(categoryId) ? prevSelected.filter(id => id !== categoryId) : [...prevSelected, categoryId]
        );
    }, []);

    const handleAllCategoriesClick = useCallback(() => {
        setIsDynamic(false);
        setPosts(initialStaticPosts);
        setSelectedCategories([]);
        setPage(1);
        setSearchTerm('');
        setDebouncedSearchTerm('');
        setHasMore(true);
    }, []);

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://api.ignitetraininginstitute.com" />
            </Head>
            <SEO title="Academic Blog - IB, IGCSE, A-Level, AP & Test Prep Tips" description="Explore the latest academic tips and study guides." />
            <JsonLd schema={blogSchema} />

            <div style={{ minHeight: 'calc(100vh - 200px)', paddingTop: `${headerHeight}px` }} >
                <section className="blog-banner">
                    <div className="dark-overlay"></div>
                    <div className="overlay">
                        <h1 className="heading" style={{ background: "linear-gradient(90deg, #EDFFF4, #A6EAC7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>BLOG</h1>
                        <p className="subHeading">HOME // Blog</p>
                    </div>
                </section>

                <section className="ibdpBanner container">
                    <div className="mb-4 p-4 bg-white searchBox rounded">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                placeholder="SEARCH"
                                className="form-control rounded-pill pe-5 searchbar"
                                value={searchTerm}
                                onChange={(e) => { triggerDynamicFetch(); setSearchTerm(e.target.value); }}
                            />
                            <button className="btn btn-primary position-absolute end-0 h-100 rounded-pill" style={{ zIndex: 2 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>
                            </button>
                        </div>
                    </div>

                    <div className="p-4 bg-white rounded categoryList">
                        <div className="d-flex flex-wrap category-buttons-container justify-content-center gap-3">
                            <button className={`btn category-button ${selectedCategories.length === 0 && !searchTerm ? 'category-button-selected' : ''}`} onClick={handleAllCategoriesClick}>All Categories</button>
                            {categories.map((category) => (
                                <button key={category.id} className={`btn category-button ${selectedCategories.includes(category.id) ? 'category-button-selected' : ''}`} onClick={() => handleCategoryClick(category.id)}>{category.name}</button>
                            ))}
                        </div>
                    </div>

                    <div className="mb-4 p-4 postsList">
                        {posts.map((post, index) => {
                            const featuredImage = post.local_image || post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                            const postSlug = post.slug;

                            return (
                                <div className="col" key={`${post.id}-${index}`}>
                                    <div className="card border-0 position-relative">
                                        <div className="p-3 position-relative">
                                            {featuredImage && (
                                                <a href={`/blog/${postSlug}`}>
                                                    <img
                                                        src={featuredImage}
                                                        className="card-img-top"
                                                        alt={post.title.rendered}
                                                        style={{ objectFit: 'cover' }}
                                                        loading={index < 3 ? "eager" : "lazy"}
                                                        fetchpriority={index < 3 ? "high" : "auto"}
                                                    />
                                                </a>
                                            )}
                                            <div className="card-body-text d-flex flex-column">
                                                <div className="d-flex justify-content-between align-items-center mb-3">
                                                    <p className="card-subtitle">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
                                                </div>
                                                <a href={`/blog/${postSlug}`}><h5 className="card-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} /></a>
                                                <div className="card-text" dangerouslySetInnerHTML={{ __html: limitChars(post.excerpt.rendered.replace(/<[^>]*>/g, ''), 90) }} />
                                                <a href={`/blog/${postSlug}`} className="btn btn-primary rounded-circle position-absolute m-4 d-flex align-items-center justify-content-center" aria-label="Read More">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                                                </a>
                                            </div>
                                            <svg preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 524 663" fill="none" xmlns="http://www.w3.org/2000/svg" className="position-absolute card-svg-border" style={{ pointerEvents: 'none' }}>
                                                <mask id={`mask-${post.id}-${index}`} fill="white">
                                                    <path d="M524 522C524 538.569 510.569 552 494 552H436C419.431 552 406 565.431 406 582V633C406 649.569 392.569 663 376 663H30C13.4315 663 0 649.569 0 633V30C0 13.4315 13.4315 0 30 0H494C510.569 0 524 13.4315 524 30V522Z" />
                                                </mask>
                                                <path d="M494 552V550H436V552V554H494V552ZM406 582H404V633H406H408V582H406ZM376 663V661H30V663V665H376V663ZM0 633H2V30H0H-2V633H0ZM30 0V2H494V0V-2H30V0ZM524 30H522V522H524H526V30H524ZM494 0V2C509.464 2 522 14.536 522 30H524H526C526 12.3269 511.673 -2 494 -2V0ZM0 30H2C2 14.536 14.536 2 30 2V0V-2C12.3269 -2 -2 12.3269 -2 30H0ZM30 663V661C14.536 661 2 648.464 2 633H0H-2C-2 650.673 12.3269 665 30 665V663ZM406 633H404C404 648.464 391.464 661 376 661V663V665C393.673 665 408 650.673 408 633H406ZM436 552V550C418.327 550 404 564.327 404 582H406H408C408 566.536 420.536 554 436 554V552ZM494 552V554C511.673 554 526 539.673 526 522H524H522C522 537.464 509.464 550 494 550V552Z" fill="url(#paint0_linear_blog)" mask={`url(#mask-${post.id}-${index})`} />
                                                <defs>
                                                    <linearGradient id="paint0_linear_blog" x1="561.244" y1="647.48" x2="-152.496" y2="488.771" gradientUnits="userSpaceOnUse">
                                                        <stop offset="0.00638475" stopColor="#3F88BA" />
                                                        <stop offset="1" stopColor="#161664" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {hasMore && (
                        <div className="d-flex justify-content-center mt-5">
                            <button className="btn btn-primary px-5 py-3 rounded-pill" onClick={handleLoadMore} disabled={isValidating}>
                                {isValidating ? 'Loading More...' : 'Load More'}
                            </button>
                        </div>
                    )}
                </section>
            </div>
        </>
    );
};

export default Blogpg;