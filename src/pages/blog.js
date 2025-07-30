'use client';

import useSWR from 'swr';
import { useState, useEffect, useCallback, useRef } from 'react'; // Import useRef

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
    const [posts, setPosts] = useState([]); // Stores all loaded posts
    const [page, setPage] = useState(1); // Tracks the current page number for API requests
    const [tagsMap, setTagsMap] = useState({});
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]); // Changed to array for multi-select
    const [searchTerm, setSearchTerm] = useState(''); // State for the search input
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(''); // State for debounced search term
    const [hasMore, setHasMore] = useState(true); // Controls visibility of "Load More" button

    // Refs for Locomotive Scroll
    const scrollRef = useRef(null); // Ref for the main scrollable container
    const scrollInstanceRef = useRef(null); // Ref to store the Locomotive Scroll instance

    // Debounce effect for search term
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500); // 500ms debounce time

        return () => {
            clearTimeout(timerId);
        };
    }, [searchTerm]);

    // Construct the API URL for posts based on selected category and search term
    // Now fetching 9 posts per page
    const postsApiUrl = `https://ignitetraininginstitute.com/wp-json/wp/v2/posts?per_page=9&page=${page}&_embed${selectedCategories.length > 0 ? `&categories=${selectedCategories.join(',')}` : ''}${debouncedSearchTerm ? `&search=${debouncedSearchTerm}` : ''}`;

    // Fetch posts using SWR
    const { data, error, isLoading, isValidating } = useSWR(postsApiUrl, fetcher);

    // Effect to accumulate posts and determine if more are available
    useEffect(() => {
        if (data && data.data) {
            if (page === 1) {
                // If it's the first page or a new search/filter, replace posts
                setPosts(data.data);
            } else {
                // For subsequent "Load More" clicks, append new posts
                setPosts(prevPosts => [...prevPosts, ...data.data]);
            }
            // Determine if there are more pages to load
            setHasMore(page < data.totalPages);

            // Update Locomotive Scroll instance after content changes
            if (scrollInstanceRef.current?.update) {
                scrollInstanceRef.current.update();
                console.log("✅ LocomotiveScroll updated after content change");
            }
        }
    }, [data, page]); // Depend on data and page to re-run when new data arrives or page changes

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

    // Handler for category click (now supports multi-select)
    const handleCategoryClick = useCallback((categoryId) => {
        setPosts([]); // Clear existing posts for new filter
        setPage(1); // Reset to first page
        setSearchTerm(''); // Clear search term
        setDebouncedSearchTerm(''); // Clear debounced search term
        setHasMore(true); // Assume more until proven otherwise by fetch

        setSelectedCategories(prevSelected => {
            if (prevSelected.includes(categoryId)) {
                // If already selected, remove it
                return prevSelected.filter(id => id !== categoryId);
            } else {
                // If not selected, add it
                return [...prevSelected, categoryId];
            }
        });
    }, []);

    // Handler for "All Categories" button
    const handleAllCategoriesClick = useCallback(() => {
        setPosts([]); // Clear existing posts
        setSelectedCategories([]); // Clear all selected categories
        setPage(1); // Reset to first page
        setSearchTerm(''); // Clear search term
        setDebouncedSearchTerm(''); // Clear debounced search term
        setHasMore(true); // Assume more until proven otherwise by fetch
    }, []);


    // Handler for search input change
    const handleSearchChange = useCallback((event) => {
        setPosts([]); // Clear existing posts for new search
        setSearchTerm(event.target.value);
        setPage(1); // Reset to first page
        setSelectedCategories([]); // Clear selected categories when searching
        setHasMore(true); // Assume more until proven otherwise by fetch
    }, []);

    // Function to copy post link to clipboard
    const copyToClipboard = async (text) => {
        try {
            // Using the modern Clipboard API
            await navigator.clipboard.writeText(text);
            alert('Link copied to clipboard!'); // Using alert for simplicity, consider a custom modal for better UX
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy link.');
        }
    };

    // --- Locomotive Scroll useEffect ---
    useEffect(() => {
        let scroll;

        const initScroll = async () => {
            // Dynamically import Locomotive Scroll only on the client side
            const LocomotiveScroll = (await import("locomotive-scroll")).default;

            // Ensure scrollRef.current is available
            if (!scrollRef.current) return;

            scroll = new LocomotiveScroll({
                el: scrollRef.current, // The element to apply the scroll effect to
                smooth: true,
                lerp: 0.1,
            });

            // Store the instance in a ref for later access (e.g., for update())
            scrollInstanceRef.current = scroll;

            // Optional: You can uncomment this if you find issues with initial scroll updates
            // setTimeout(() => {
            //   if (scrollInstanceRef.current?.update) {
            //     scrollInstanceRef.current.update();
            //     console.log("✅ LocomotiveScroll updated on initial load");
            //   }
            // }, 500);
        };

        // Only initialize Locomotive Scroll if window is defined (client-side)
        if (typeof window !== "undefined") {
            initScroll();
        }

        // Cleanup function: destroy the scroll instance when the component unmounts
        return () => {
            scrollInstanceRef.current?.destroy();
            scrollInstanceRef.current = null;
        };
    }, []); // Empty dependency array means this runs once on mount and cleans up on unmount
    // --- End Locomotive Scroll useEffect ---


    if (error) return <div className="alert alert-danger my-5 p-4">Oh no babe, the API broke again 😭</div>;
    // Initial loading spinner for the first fetch
    if (isLoading && posts.length === 0) return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );

    return (
        // Assign the scrollRef to the main wrapper element
        <div ref={scrollRef}> {/* This div will be the scrollable element for Locomotive Scroll */}
            {/* Image with Wrapper - OUTSIDE the container */}
            <div className="full-width-image-wrapper mb-5">
                <img
                    src="/images/blogbanner.jpg"
                    className="img-fluid"
                />
            </div>
            {/* End Image with Wrapper */}

            <div className="container my-5">
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
                                            />
                                        )}
                                        <div className="card-body d-flex flex-column p-4">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <p className="card-subtitle text-muted small fw-medium mb-0">
                                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                                                </p>
                                                <div className="d-flex gap-2">
                                                    {/* Facebook Share */}
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
                                                    {/* X (Twitter) Share */}
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
                                                    {/* Email Share */}
                                                    <a
                                                        href={`mailto:?subject=${postTitle}&body=Check out this blog post: ${postLink}`}
                                                        className="text-muted social-icon-hover"
                                                        aria-label="Share via Email"
                                                    >
                                                        <svg className="bi bi-envelope-fill" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.756Z" />
                                                        </svg>
                                                    </a>
                                                    {/* Copy Link */}
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
            </div>
        </div> // End of the main scrollable div
    );
}