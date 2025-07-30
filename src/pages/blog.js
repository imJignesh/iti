'use client';

import useSWR from 'swr';
import { useState, useEffect, useCallback, useRef } from 'react';

// Fetcher function for SWR
const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages'), 10);
    return { data, totalPages };
};

export default function WpPosts() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [tagsMap, setTagsMap] = useState({});
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [hasMore, setHasMore] = useState(true);

    const scrollRef = useRef(null);
    const scrollInstanceRef = useRef(null);

    // Debounce effect for search term
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);

    const postsApiUrl = `https://ignitetraininginstitute.com/wp-json/wp/v2/posts?per_page=9&page=${page}&_embed${selectedCategories.length > 0 ? `&categories=${selectedCategories.join(',')}` : ''}${debouncedSearchTerm ? `&search=${debouncedSearchTerm}` : ''}`;

    const { data, error, isLoading, isValidating } = useSWR(postsApiUrl, fetcher);

    // Effect to accumulate posts and determine if more are available
    useEffect(() => {
        if (data && data.data) {
            if (page === 1) {
                setPosts(data.data);
            } else {
                setPosts(prevPosts => [...prevPosts, ...data.data]);
            }
            setHasMore(page < data.totalPages);

            // Update Locomotive Scroll instance after content changes
            if (scrollInstanceRef.current?.update) {
                scrollInstanceRef.current.update();
                console.log("✅ LocomotiveScroll updated after content change");
            }
        }
    }, [data, page]);

    // Fetch tags on component mount
    useEffect(() => {
        const fetchTags = async () => {
            try {
                const res = await fetch('https://ignitetraininginstitute.com/wp-json/wp/v2/tags?per_page=100');
                const tags = await res.json();
                const map = {};
                tags.forEach(tag => (map[tag.id] = tag.name));
                setTagsMap(map);
            } catch (err) {
                console.error("Failed to fetch tags:", err);
            }
        };
        fetchTags();
    }, []);

    // Fetch categories on component mount
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch('https://ignitetraininginstitute.com/wp-json/wp/v2/categories?per_page=100');
                const cats = await res.json();
                setCategories(cats);
            } catch (err) {
                console.error("Failed to fetch categories:", err);
            }
        };
        fetchCategories();
    }, []);

    const handleCategoryClick = useCallback((categoryId) => {
        setPosts([]);
        setPage(1);
        setSearchTerm('');
        setDebouncedSearchTerm('');
        setHasMore(true);

        setSelectedCategories(prevSelected => {
            if (prevSelected.includes(categoryId)) {
                return prevSelected.filter(id => id !== categoryId);
            } else {
                return [...prevSelected, categoryId];
            }
        });
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

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            alert('Link copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy link.');
        }
    };

    // Locomotive Scroll setup
    useEffect(() => {
        let scroll;

        const initScroll = async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            if (!scrollRef.current) return;
            scroll = new LocomotiveScroll({
                el: scrollRef.current,
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

    if (error) return <div className="alert alert-danger my-5 p-4">Oh no babe, the API broke again 😭</div>;
    if (isLoading && posts.length === 0) return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );

    return (
        <div ref={scrollRef} data-scroll-container>
            <section className="ibdpBanner" data-scroll data-scroll-section>
                {/* Image with Wrapper - OUTSIDE the container */}
                {/* This is a visual section, so data-scroll-section is appropriate */}
                <div className="full-width-image-wrapper mb-5" data-scroll-section>
                    <img
                        src="/images/blogbanner.jpg"
                        className="img-fluid"
                        onLoad={() => scrollInstanceRef.current?.update && scrollInstanceRef.current.update()}
                    />
                </div>
                {/* End Image with Wrapper */}

                {/* Main content area, wrapping search, categories, and posts list */}
                {/* This whole 'container' section forms another logical scroll section */}

                {/* Blog Search */}
                <div className="mb-4 p-4 bg-white searchBox rounded shadow-sm">
                    <h2 className="h4 text-secondary mb-3">Search Blog Posts</h2>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            placeholder="SEARCH"
                            className="form-control rounded-pill pe-5 searchbar"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <button
                            className="btn btn-primary position-absolute end-0 h-100 rounded-pill"
                            onClick={() => setDebouncedSearchTerm(searchTerm)}
                            style={{ zIndex: 2 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Category List */}
                <div className="mb-4 p-4 bg-white rounded categoryList shadow-sm">
                    <h2 className="h4 text-secondary mb-3">Blog Categories</h2>
                    <div className="d-flex flex-wrap category-buttons-container">
                        <button
                            className={`btn category-button ${selectedCategories.length === 0 && !searchTerm ? 'category-button-selected' : ''}`}
                            onClick={handleAllCategoriesClick}
                        >
                            All Categories
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`btn category-button ${selectedCategories.includes(category.id) ? 'category-button-selected' : ''}`}
                                onClick={() => handleCategoryClick(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Posts List */}
                {posts.length === 0 && !isValidating && !isLoading ? (
                    <div className="text-center text-muted h4 py-5">No posts found for this category or search term.</div>
                ) : (
                    <div className=" postsList row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {posts.map((post) => {
                            const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
                            const postTags = post.tags.map(tagId => tagsMap[tagId]).filter(Boolean);
                            const postLink = post.link;
                            const postTitle = encodeURIComponent(post.title.rendered);

                            return (
                                <div className="col" key={post.id}>
                                    <div className="card h-100 border-0 shadow-sm rounded-4 position-relative overflow-hidden">
                                        {featuredImage && (
                                            <img
                                                src={featuredImage}
                                                className="card-img-top rounded-top-4"
                                                alt={post.title.rendered}
                                                style={{ height: '224px', objectFit: 'cover', objectPosition: 'center' }}
                                                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/E0F2F7/333333?text=No+Image`; }}
                                                onLoad={() => scrollInstanceRef.current?.update && scrollInstanceRef.current.update()}
                                            />
                                        )}
                                        <div className="card-body d-flex flex-column p-4">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <p className="card-subtitle text-muted small fw-medium mb-0">
                                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                                                </p>
                                                <div className="d-flex gap-2">
                                                    {/* Share buttons as before */}
                                                    <a
                                                        href={`https://www.facebook.com/sharer/sharer.php?u=${postLink}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-muted social-icon-hover"
                                                        aria-label="Share on Facebook"
                                                    >
                                                        <svg className="bi bi-facebook" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.953H10.5c-.984 0-1.291.739-1.291 1.245V8.05h2.17l-.354 2.326H10.5V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                        </svg>
                                                    </a>
                                                    <a
                                                        href={`https://twitter.com/intent/tweet?url=${postLink}&text=${postTitle}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-muted social-icon-hover"
                                                        aria-label="Share on X (Twitter)"
                                                    >
                                                        <svg className="bi bi-twitter-x" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.364l5.478-6.21L0 .75h5.063l3.495 4.633L12.6.75Zm-.86 13.028h1.36L4.323 2.145H2.865l9.075 11.633Z" />
                                                        </svg>
                                                    </a>
                                                    <a
                                                        href={`mailto:?subject=${postTitle}&body=Check out this blog post: ${postLink}`}
                                                        className="text-muted social-icon-hover"
                                                        aria-label="Share via Email"
                                                    >
                                                        <svg className="bi bi-envelope-fill" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.756Z" />
                                                        </svg>
                                                    </a>
                                                    <button
                                                        onClick={() => copyToClipboard(postLink)}
                                                        className="btn btn-link p-0 text-muted social-icon-hover"
                                                        aria-label="Copy Link"
                                                    >
                                                        <svg className="bi bi-link-45deg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.793.792a.5.5 0 0 0 .128.129 2 2 0 0 1-.861 3.337l-1.828 1.828a3 3 0 1 0 4.243-4.243L11.28 7.414a4.018 4.018 0 0 1 .128 1.287z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                            <h5
                                                className="card-title h5 mb-3"
                                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                            />
                                            <div
                                                className="card-text text-secondary mb-4 flex-grow-1"
                                                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                            />
                                            {postTags.length > 0 && (
                                                <p className="mt-2 small text-muted">
                                                    Tags: <span className="fw-medium">{postTags.join(', ')}</span>
                                                </p>
                                            )}
                                        </div>
                                        <a
                                            href={post.link}
                                            className="btn btn-primary rounded-circle position-absolute bottom-0 end-0 m-4 d-flex align-items-center justify-content-center"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Read More"
                                            style={{ width: '48px', height: '48px', background: 'linear-gradient(to right, #60A5FA, #3B82F6)', border: 'none', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Load More Button */}
                {hasMore && (
                    <div className="d-flex justify-content-center mt-5">
                        <button
                            className="btn btn-primary px-5 py-3 rounded-pill"
                            onClick={() => setPage(prevPage => prevPage + 1)}
                            disabled={isValidating}
                        >
                            {isValidating ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Loading More...
                                </>
                            ) : (
                                'Load More'
                            )}
                        </button>
                    </div>
                )}
            </section> {/* End of the main content section */}


        </div>
    );
}