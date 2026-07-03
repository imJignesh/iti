import React, { useEffect, useRef } from 'react';
import { useScroll } from './LocomotiveScrollProvider';

/**
 * LazySection Optimized for SSR & SEO
 * 
 * To ensure Google can crawl all content, we now render children immediately 
 * in the initial SSR HTML. The performance gains are maintained by next/dynamic 
 * which defers the hydration of the components until their JS is ready.
 * 
 * This component now primarily handles Locomotive Scroll updates when the 
 * component's size changes or becomes visible.
 */
const LazySection = ({ children }) => {
    const ref = useRef(null);
    const scroll = useScroll();

    useEffect(() => {
        if (!ref.current || !scroll) return;

        // Ensure Locomotive Scroll is notified when the component reaches its final size
        const resizeObserver = new ResizeObserver(() => {
            if (scroll && typeof scroll.update === 'function') {
                scroll.update();
            }
        });

        resizeObserver.observe(ref.current);

        return () => {
            if (resizeObserver) resizeObserver.disconnect();
        };
    }, [scroll]);

    return (
        <div ref={ref}>
            {children}
        </div>
    );
};

export default LazySection;
