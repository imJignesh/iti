import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

const ScrollContext = createContext(null);

export const useScroll = () => {
    // This hook returns the instance (or null) directly.
    return useContext(ScrollContext);
};

const LocomotiveScrollProvider = ({ children }) => {
    const scrollRef = useRef(null); // DOM element
    const scrollInstanceRef = useRef(null); // Locomotive instance
    const [isReady, setIsReady] = useState(false);
    // State to track if scroll should be enabled (default to false initially)
    const [isScrollEnabled, setIsScrollEnabled] = useState(false);

    // 1. Effect to handle width check and resize (sets isScrollEnabled)
    useEffect(() => {
        if (typeof window === "undefined") return;

        const checkWidth = () => {
            // Only enable if width is >= 3000px
            const shouldEnable = window.innerWidth >= 3000;
            setIsScrollEnabled(shouldEnable);
        };

        checkWidth();
        window.addEventListener("resize", checkWidth);

        return () => {
            window.removeEventListener("resize", checkWidth);
        };
    }, []);


    // 2. Effect to initialize/destroy Locomotive Scroll based on isScrollEnabled
    useEffect(() => {
        let scroll;

        const initScroll = async () => {
            // Case 1: Scroll is disabled (width < 3000px)
            if (!isScrollEnabled) {
                // Ensure any existing instance is destroyed
                scrollInstanceRef.current?.destroy();
                scrollInstanceRef.current = null;
                setIsReady(true); // Ready to render children with normal scroll
                return;
            }

            // Case 2: Scroll is enabled (width >= 3000px)
            if (scrollInstanceRef.current) return; // Already initialized

            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            if (!scrollRef.current) return;

            scroll = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
                lerp: 0.1,
            });

            scrollInstanceRef.current = scroll;
            setIsReady(true); // Ready to render children with Locomotive Scroll
        };

        if (typeof window !== "undefined") {
            initScroll();
        }

        return () => {
            // Cleanup on unmount or on re-run if isScrollEnabled changes
            scrollInstanceRef.current?.destroy();
            scrollInstanceRef.current = null;
            setIsReady(false);
        };
    }, [isScrollEnabled]); // Re-run effect when width crosses 3000px boundary

    return (
        // Conditionally set data-scroll-container only when scroll is enabled
        <div ref={scrollRef} data-scroll-container={isScrollEnabled ? true : undefined}>
            <ScrollContext.Provider value={scrollInstanceRef.current}>
                {/* Critical: Only render children AFTER scroll is initialized OR disabled */}
                {isReady && children}
            </ScrollContext.Provider>
        </div>
    );
};

export default LocomotiveScrollProvider;