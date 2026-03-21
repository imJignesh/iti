import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

import { isPerformanceTool, isMobileDevice, isBot } from "@/utils/performance";

// --- 1. Create Context ---
const ScrollContext = createContext(null);

// --- 2. Custom Hook to Access Instance ---
export const useScroll = () => {
    return useContext(ScrollContext);
};

// --- 3. Provider Component ---
const LocomotiveScrollProvider = ({ children }) => {
    // A ref to hold the DOM element that will be the scroll container
    const scrollRef = useRef(null);
    // A ref to hold the Locomotive Scroll instance
    const scrollInstanceRef = useRef(null);
    const [isScrollEnabled, setIsScrollEnabled] = useState(false);

    // Effect 0: Apply class to body if bot/lighthouse is detected
    useEffect(() => {
        if (typeof document !== 'undefined' && (isBot() || isPerformanceTool())) {
            document.body.classList.add('is-bot-detected');
            console.log("PerformanceTool/Bot detected. Smooth scroll disabled.");
        }
    }, []);

    // Effect 1: Check width and set scroll enablement
    useEffect(() => {
        if (typeof window === "undefined") return;

        const checkWidth = () => {
            // Enable scroll ONLY if on desktop (width > 768), NOT a performance tool, AND NOT a mobile device
            const shouldEnable = window.innerWidth > 768 && !isPerformanceTool() && !isMobileDevice();
            setIsScrollEnabled(shouldEnable);
        };

        checkWidth();
        window.addEventListener("resize", checkWidth);

        return () => {
            window.removeEventListener("resize", checkWidth);
        };
    }, []);

    // Effect 2: Initialize/Destroy Locomotive Scroll based on isScrollEnabled
    useEffect(() => {
        const destroyScroll = () => {
            if (scrollInstanceRef.current) {
                scrollInstanceRef.current.destroy();
                scrollInstanceRef.current = null;
            }
        };

        const initScroll = async () => {
            if (!isScrollEnabled || scrollInstanceRef.current) {
                if (!isScrollEnabled) destroyScroll();
                return;
            }

            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            if (!scrollRef.current) return;

            // --- FIX: Use large negative rootMargin for mobile/tablet to stabilize detection ---
            const rootMarginValue = '0px';

            const scroll = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
                lerp: 0.1,
                // The rootMargin configuration is passed directly to the Intersection Observer instance 
                // used internally by Locomotive Scroll for visibility detection.
                rootMargin: rootMarginValue,
            });
            // --- END FIX ---

            scrollInstanceRef.current = scroll;
            console.log("Locomotive Scroll Initialized");
        };

        if (typeof window !== "undefined") {
            initScroll();
        }

        return destroyScroll;
    }, [isScrollEnabled]);

    return (
        <div ref={scrollRef} data-scroll-container={isScrollEnabled ? true : undefined}>
            <ScrollContext.Provider value={scrollInstanceRef.current}>
                {children}
            </ScrollContext.Provider>
        </div>
    );
};

export default LocomotiveScrollProvider;