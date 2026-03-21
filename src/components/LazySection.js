import React, { useState, useEffect, useRef } from 'react';
import { useScroll } from './LocomotiveScrollProvider'; // Adjust path if needed
import { isSeoBot, isBot, isPerformanceTool } from '@/utils/performance';

const LazySection = ({ children, threshold = 0.1, rootMargin = "250px" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    const scroll = useScroll(); // Get Locomotive Scroll instance

    // Unified effect for visibility and scroll updates
    useEffect(() => {
        // Eager load ONLY for critical SEO bots. 
        // We do NOT eagerness for Performance Tools (Lighthouse) to measure real UX.
        if (typeof window !== 'undefined' && isSeoBot()) {
            setIsVisible(true);
            return;
        }

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
    }, [threshold, rootMargin]);

    // Separate effect to handle ResizeObserver when content becomes visible
    useEffect(() => {
        if (!isVisible || !ref.current || !scroll) return;

        const resizeObserver = new ResizeObserver(() => {
            if (scroll && typeof scroll.update === 'function') {
                scroll.update();
            }
        });

        resizeObserver.observe(ref.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, [isVisible, scroll]);

    return (
        <div ref={ref} >
            {isVisible ? children : null}
        </div>
    );
};

export default LazySection;
