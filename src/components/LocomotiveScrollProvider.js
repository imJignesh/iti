import React, { createContext, useContext, useEffect, useRef } from 'react';

// Create a context to hold the scroll instance
const ScrollContext = createContext(null);

export const useScroll = () => {
    return useContext(ScrollContext);
};

const LocomotiveScrollProvider = ({ children }) => {
    const scrollRef = useRef(null);
    const scrollInstanceRef = useRef(null);

    useEffect(() => {
        let scroll;

        const initScroll = async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
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

        // Cleanup function to destroy the scroll instance when the component unmounts
        return () => {
            scrollInstanceRef.current?.destroy();
            scrollInstanceRef.current = null;
        };
    }, []);

    return (
        <div ref={scrollRef} data-scroll-container>
            <ScrollContext.Provider value={scrollInstanceRef.current}>
                {children}
            </ScrollContext.Provider>
        </div>
    );
};

export default LocomotiveScrollProvider;