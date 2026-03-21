import React, { useEffect, useRef } from 'react';
import { useScroll } from './LocomotiveScrollProvider'; // Adjust path if needed

const LazySection = ({ children, threshold = 0.1, rootMargin = "200px" }) => {
    const ref = useRef(null);
    const scroll = useScroll(); // Get Locomotive Scroll instance

    // Effect to handle ResizeObserver for Locomotive Scroll
    useEffect(() => {
        if (!ref.current || !scroll) return;

        const resizeObserver = new ResizeObserver(() => {
            if (scroll && typeof scroll.update === 'function') {
                scroll.update();
            }
        });

        // Add a small delay for scroll update to ensure DOM layout has settled
        setTimeout(() => {
            if (scroll && typeof scroll.update === 'function') {
                scroll.update();
            }
        }, 500);

        resizeObserver.observe(ref.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, [scroll]);

    return (
        <div ref={ref}>
            {children}
        </div>
    );
};

export default LazySection;
