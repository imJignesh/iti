'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import useSWR from 'swr';
import SEO from "@/components/SEO";
import Image from 'next/image';
// 1. Import the reusable schema component
import JsonLd from "@/components/JsonLd";


/**
 * Truncates a string to a specified number of characters.
 * @param {string} text - The original string.
 * @param {number} maxChars - The maximum number of characters allowed.
 * @returns {string} The truncated string with an ellipsis if it was cut.
 */
const limitChars = (text, maxChars) => {
    if (!text) return '';
    if (text.length <= maxChars) {
        return text;
    }
    // Truncate the text and append an ellipsis
    return text.substring(0, maxChars) + '...';
};

// Fetcher function for SWR
const fetcher = async (url) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            const error = new Error('Failed to fetch data');
            try {
                error.info = await res.json();
            } catch (e) {
                error.info = { message: res.statusText || 'Unknown error' };
            }
            error.status = res.status;
            throw error;
        }
        const data = await res.json();
        const totalPages = parseInt(res.headers.get('X-WP-TotalPages'), 10) || 1;
        return { data, totalPages };
    } catch (err) {
        if (err instanceof TypeError && err.message === "Failed to fetch") {
            const silentError = new Error(`API Connection Failed: ${url}`);
            silentError.status = 503;
            console.warn("Suppressing fetch overlay for network error in blog page.");
            throw silentError;
        }
        throw err;
    }
};

// 1. Accept the headerHeight prop AND other props (like fallbackData)
const Blogpg = ({ headerHeight, ...props }) => {

    // ... existing code ...

    return (
        <>
            {/* ... */}
            <div style={{ minHeight: 'calc(100vh - 200px)', paddingTop: `${headerHeight}px` }} >
                {/* ... */}
            </div >
        </>
    );
};

export async function getServerSideProps() {
    try {
        // Fetch initial posts (page 1, 9 posts)
        // We use the direct external URL here because SSR runs on the server (Node.js)
        // and doesn't suffer from the same CORS/Browser-Network issues as client-side.
        const res = await fetch('https://api.ignitetraininginstitute.com/wp-json/wp/v2/posts?per_page=9&page=1&_embed');

        if (!res.ok) {
            console.warn('SSR Blog Fetch failed:', res.status);
            return {
                props: {
                    fallbackData: { posts: [], totalPages: 1, hasMore: false }
                }
            };
        }

        const data = await res.json();
        const totalPages = parseInt(res.headers.get('X-WP-TotalPages'), 10) || 1;

        return {
            props: {
                fallbackData: {
                    posts: Array.isArray(data) ? data : [],
                    totalPages: totalPages,
                    hasMore: 1 < totalPages
                }
            }
        };

    } catch (error) {
        console.error('SSR Error in blog.js:', error);
        // Return empty fallback content so the page still loads (client-side can retry)
        return {
            props: {
                fallbackData: { posts: [], totalPages: 1, hasMore: false }
            }
        };
    }
}

export default Blogpg;