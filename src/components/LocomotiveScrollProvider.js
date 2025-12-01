import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

// --- 1. Create Context ---
const ScrollContext = createContext(null);

// --- 2. Custom Hook to Access Instance ---
export const useScroll = () => {
    // This hook returns the live Locomotive Scroll instance (or null if not initialized/disabled).
    return useContext(ScrollContext);
};

// --- 3. Provider Component ---
const LocomotiveScrollProvider = ({ children }) => {
    // A ref to hold the DOM element that will be the scroll container
    const scrollRef = useRef(null);
    // A ref to hold the Locomotive Scroll instance
    const scrollInstanceRef = useRef(null);
    const [isScrollEnabled, setIsScrollEnabled] = useState(false);

    // Effect 1: Check width and set scroll enablement
    useEffect(() => {
        if (typeof window === "undefined") return;

        const checkWidth = () => {
            // Only enable if width is >= 1280px
            const shouldEnable = window.innerWidth >= 1280;
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
            // Case 1: Scroll is disabled OR already initialized
            if (!isScrollEnabled || scrollInstanceRef.current) {
                if (!isScrollEnabled) destroyScroll();
                return;
            }

            // Case 2: Scroll is enabled and needs initialization
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            if (!scrollRef.current) return;

            const scroll = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
                lerp: 0.1,
            });

            scrollInstanceRef.current = scroll;
            // You might want to remove the console log in production
            console.log("Locomotive Scroll Initialized");
        };

        if (typeof window !== "undefined") {
            initScroll();
        }

        // Cleanup on unmount or when dependencies change
        return destroyScroll;
    }, [isScrollEnabled]);

    return (
        // The container div for Locomotive Scroll
        // data-scroll-container is only added when scroll is enabled
        <div ref={scrollRef} data-scroll-container={isScrollEnabled ? true : undefined}>
            <ScrollContext.Provider value={scrollInstanceRef.current}>
                {children}
            </ScrollContext.Provider>
        </div>
    );
};

export default LocomotiveScrollProvider;