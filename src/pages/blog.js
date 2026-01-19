'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useSWR from 'swr';
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import Head from 'next/head';

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

export async function getStaticProps() {
    const API_URL = `https://api.ignitetraininginstitute.com/wp-json/wp/v2/posts?per_page=9&page=1&_embed&_fields=id,date,title,slug,excerpt,featured_media,_links,_embedded,yoast_head_json`;

    try {
        const res = await fetch(API_URL);
        const initialPosts = await res.json();
        const totalPages = parseInt(res.headers.get('X-WP-TotalPages'), 10) || 1;

        return {
            props: {
                initialPosts,
                initialTotalPages: totalPages,
            },
            revalidate: 3600,
        };
    } catch (error) {
        return { props: { initialPosts: [], initialTotalPages: 1 } };
    }
}

const Blogpg = ({ headerHeight, initialPosts, initialTotalPages }) => {
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

    const [posts, setPosts] = useState(initialPosts || []);
    const [page, setPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [hasMore, setHasMore] = useState((initialTotalPages || 1) > 1);

    useEffect(() => {
        const timerId = setTimeout(() => setDebouncedSearchTerm(searchTerm), 500);
        return () => clearTimeout(timerId);
    }, [searchTerm]);

    const postsApiUrl = `https://api.ignitetraininginstitute.com/wp-json/wp/v2/posts?per_page=9&page=${page}&_embed&_fields=id,date,title,slug,excerpt,featured_media,_links,_embedded,yoast_head_json${selectedCategories.length > 0 ? `&categories=${selectedCategories.join(',')}` : ''}${debouncedSearchTerm ? `&search=${debouncedSearchTerm}` : ''}`;

    const { data, isValidating } = useSWR(
        (page > 1 || selectedCategories.length > 0 || debouncedSearchTerm) ? postsApiUrl : null,
        fetcher
    );

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
                const catsRes = await fetch('https://api.ignitetraininginstitute.com/wp-json/wp/v2/categories?per_page=100&_fields=id,name');
                const cats = await catsRes.json();
                setCategories(cats);
            } catch (err) { console.error(err); }
        };
        fetchMetadata();
    }, []);

    const handleCategoryClick = useCallback((categoryId) => {
        setPosts([]);
        setPage(1);
        setSearchTerm('');
        setDebouncedSearchTerm('');
        setHasMore(true);
        setSelectedCategories(prevSelected =>
            prevSelected.includes(categoryId) ? prevSelected.filter(id => id !== categoryId) : [...prevSelected, categoryId]
        );
    }, []);

    const handleAllCategoriesClick = useCallback(() => {
        setPosts([]);
        setSelectedCategories([]);
        setPage(1);
        setSearchTerm('');
        setDebouncedSearchTerm('');
        setHasMore(true);
    }, []);

    const handleSearchChange = useCallback((event) => {
        setPosts([]);
        setSearchTerm(event.target.value);
        setPage(1);
        setSelectedCategories([]);
        setHasMore(true);
    }, []);

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://api.ignitetraininginstitute.com" />
            </Head>
            <SEO title="Academic Blog - IB, IGCSE, A-Level, AP & Test Prep Tips" description="Explore the latest academic tips and study guides." />
            <JsonLd schema={blogSchema} />

            <div style={{ minHeight: 'calc(100vh - 200px)', paddingTop: `${headerHeight}px` }}>
                {/* FIX: Removed 'fade-in-section' and 'is-inview' to ensure banner is visible immediately */}
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
                            <input type="text" placeholder="SEARCH" className="form-control rounded-pill pe-5 searchbar" value={searchTerm} onChange={handleSearchChange} />
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
                            const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                            const postSlug = post.slug;

                            return (
                                <div className="col" key={post.id}>
                                    <div className="card border-0 position-relative">
                                        <div className="p-3 position-relative">
                                            {featuredImage && (
                                                <a href={`/blog/${postSlug}`}>
                                                    <img
                                                        src={featuredImage}
                                                        className="card-img-top"
                                                        alt={post.title.rendered}
                                                        style={{ objectFit: 'cover' }}
                                                        loading={index === 0 ? "eager" : "lazy"}
                                                        fetchpriority={index === 0 ? "high" : "auto"}
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
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {hasMore && (
                        <div className="d-flex justify-content-center mt-5">
                            <button className="btn btn-primary px-5 py-3 rounded-pill" onClick={() => setPage(prev => prev + 1)} disabled={isValidating}>
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