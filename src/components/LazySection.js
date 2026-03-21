import React, { useState, useEffect, useRef } from 'react';
import { useScroll } from './LocomotiveScrollProvider'; // Adjust path if needed

const LazySection = ({ children, threshold = 0.1, rootMargin = "200px" }) => {
    // Helper to detect bots/crawlers & also enforce TRUE on server for SEO
    const isBotOrServer = () => {
        // SSR MUST return true to render children in the initial HTML for SEO
        if (typeof window === 'undefined') return true;
        
        const userAgent = navigator.userAgent.toLowerCase();
        // Detect crawlers and search engine bots
        const botPattern = /googlebot|bingbot|applebot|slurp|baiduspider|duckduckbot|google-inspectiontool|headlesschrome|gptbot|oai-searchbot|claudebot|perplexitybot|amazonbot|bytespider|ccbot|facebookexternalhit|twitterbot|linkedinbot|slackbot|discordbot|whatsapp/;

        // On client side, if window > 768px, we also consider it true (eager load desktop)
        if (window.innerWidth > 768) return true;

        return botPattern.test(userAgent);
    };

    const [isVisible, setIsVisible] = useState(() => isBotOrServer());
    const ref = useRef(null);
    const scroll = useScroll(); // Get Locomotive Scroll instance

    // Unified effect for visibility and scroll updates
    useEffect(() => {
        if (isVisible) return; // already visible

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (observer && ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, rootMargin, isVisible]);

    // Separate effect to handle ResizeObserver when content becomes visible
    useEffect(() => {
        if (!isVisible || !ref.current || !scroll) return;

        let resizeTimer;
        const resizeObserver = new ResizeObserver(() => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (scroll && typeof scroll.update === 'function') {
                    scroll.update();
                }
            }, 100);
        });

        resizeObserver.observe(ref.current);

        return () => {
            clearTimeout(resizeTimer);
            resizeObserver.disconnect();
        };
    }, [isVisible, scroll]);

    return (
        <div ref={ref} suppressHydrationWarning>
            {isVisible ? children : null}
        </div>
    );
};

export default LazySection;
