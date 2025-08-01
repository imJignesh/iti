'use client';

import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useEffect, useRef } from 'react';

// Fetcher function for SWR to handle API requests
const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        // If the response is not OK (e.g., 404, 500), throw an error
        const error = new Error('Failed to fetch data');
        error.info = await res.json(); // Attach response body for more details
        error.status = res.status; // Attach status code
        throw error;
    }
    return res.json(); // Parse and return the JSON response
};

export default function PostDetail() {
    // useRouter hook to access the router object, which contains query parameters
    const router = useRouter();
    // Extract the 'slug' from the URL query parameters.
    // For a route like /my-post-slug, slug will be 'my-post-slug'.
    const { slug } = router.query;

    // Construct the WordPress API URL to fetch a single post by its slug.
    // The '_embed' parameter ensures that featured media and author data are included.
    // Only fetch if a slug is available.
    const postApiUrl = slug ? `https://ignitetraininginstitute.com/wp-json/wp/v2/posts?slug=${slug}&_embed` : null;

    // useSWR hook for data fetching, caching, and revalidation.
    // It takes the API URL and the fetcher function.
    const { data, error, isLoading } = useSWR(postApiUrl, fetcher);

    // Refs for Locomotive Scroll container and its instance
    const scrollRef = useRef(null);
    const scrollInstanceRef = useRef(null);

    // useEffect for initializing Locomotive Scroll
    useEffect(() => {
        let scroll; // Declare scroll variable
        const initScroll = async () => {
            // Dynamically import Locomotive Scroll to ensure it's client-side only
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            if (!scrollRef.current) return; // Exit if the scroll container ref is not available

            // Initialize Locomotive Scroll with the container element
            scroll = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true, // Enable smooth scrolling
                lerp: 0.1,    // Adjust scroll easing
            });

            // Store the instance in a ref for later updates/destruction
            scrollInstanceRef.current = scroll;
        };

        // Only initialize if running in a browser environment
        if (typeof window !== "undefined") {
            initScroll();
        }

        // Cleanup function for Locomotive Scroll
        return () => {
            // Destroy the scroll instance when the component unmounts
            scrollInstanceRef.current?.destroy();
            scrollInstanceRef.current = null;
        };
    }, []); // Empty dependency array ensures this runs only once on mount

    // useEffect to update Locomotive Scroll when content changes
    useEffect(() => {
        // If the scroll instance exists and has an update method, call it
        if (scrollInstanceRef.current?.update) {
            scrollInstanceRef.current.update();
            console.log("✅ LocomotiveScroll updated after content change (detail page)");
        }
    }, [data]); // Re-run this effect when 'data' changes (i.e., post content is loaded/updated)

    // Handle loading state:
    // router.isFallback is true when using getStaticPaths with fallback: true
    // isLoading is true while SWR is fetching data
    if (router.isFallback || isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    // Handle error state:
    // If there's an error from SWR, display an error message
    if (error) {
        return <div className="alert alert-danger my-5 p-4">Failed to load post. Please try again later.</div>;
    }

    // WordPress API returns an array of posts, even when searching by slug.
    // For a unique slug, we expect only one post, so we take the first element.
    const post = data?.[0];

    // Handle case where no post is found for the given slug (e.g., 404)
    if (!post) {
        return (
            <div className="text-center text-muted h4 py-5">
                <h1>404 - Post Not Found</h1>
                <p>The blog post you are looking for does not exist.</p>
                {/* Button to navigate back to the blog list or homepage */}
                <button onClick={() => router.push('/')} className="btn btn-primary mt-3">
                    Go to Homepage
                </button>
            </div>
        );
    }

    // Extract the featured image URL from the embedded data
    const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

    return (
        // The main container for Locomotive Scroll
        <div ref={scrollRef} data-scroll-container>
            {/* Section for the post detail content, marked as a Locomotive Scroll section */}
            <section className="post-detail-section py-5" data-scroll data-scroll-section>
                <div className="container">
                    {/* Button to go back to the previous page in browser history */}
                    <button onClick={() => router.back()} className="btn btn-secondary mb-4">
                        &larr; Back to Blog
                    </button>

                    {/* Post Title */}
                    <h1 className="mb-4 display-4" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

                    {/* Featured Image */}
                    {featuredImage && (
                        <div className="text-center mb-5">
                            <img
                                src={featuredImage}
                                alt={post.title.rendered}
                                className="img-fluid rounded shadow"
                                style={{ maxHeight: '500px', objectFit: 'cover', width: '100%' }}
                                // Fallback for broken images
                                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/1200x500/E0F2F7/333333?text=No+Image`; }}
                                // Update Locomotive Scroll after image loads to ensure correct scroll height
                                onLoad={() => scrollInstanceRef.current?.update && scrollInstanceRef.current.update()}
                            />
                        </div>
                    )}

                    {/* Post Metadata (Date and Author) */}
                    <div className="d-flex justify-content-between align-items-center mb-4 text-muted small">
                        <span>Published on: {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        {post._embedded?.author?.[0]?.name && (
                            <span>By: {post._embedded.author[0].name}</span>
                        )}
                    </div>

                    {/* Post Content */}
                    <div
                        className="post-content lh-lg text-secondary"
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    />
                </div>
            </section>
        </div>
    );
}
