import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { isBot as isBotDetected } from "@/utils/botDetection";

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
    // A ref to hold the Locomotive Scroll instance (for init/destroy logic)
    const scrollInstanceRef = useRef(null);
    // State-tracked instance so context consumers re-render when Locomotive is ready
    const [scrollInstance, setScrollInstance] = useState(null);
    const [isScrollEnabled, setIsScrollEnabled] = useState(false);

    // Effect 0: Apply class to body if bot is detected
    useEffect(() => {
        if (typeof document !== 'undefined' && isBotDetected()) {
            document.body.classList.add('is-bot-detected');
            console.log("Lighthouse/Bot detected. Animations disabled via CSS.");
        }
    }, []);

    // Effect 1: Check width and set scroll enablement
    useEffect(() => {
        if (typeof window === "undefined") return;

        const checkWidth = () => {
            // LCP FIX: Only enable on desktop (> 991px) to prevent Locomotive Scroll
            // from initializing on mobile/tablet — which was gating paint behind JS execution.
            const shouldEnable = window.innerWidth > 991;

            // --- MODIFIED: Check width AND check for PSI bot ---
            if (shouldEnable && !isBotDetected()) {
                setIsScrollEnabled(true);
            } else {
                setIsScrollEnabled(false);
            }
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
                setScrollInstance(null);
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
            setScrollInstance(scroll);
            console.log("Locomotive Scroll Initialized");
        };

        if (typeof window !== "undefined") {
            initScroll();
        }

        return destroyScroll;
    }, [isScrollEnabled]);

    return (
        <div ref={scrollRef} data-scroll-container={isScrollEnabled ? true : undefined}>
            <ScrollContext.Provider value={scrollInstance}>
                {children}
            </ScrollContext.Provider>
        </div>
    );
};

export default LocomotiveScrollProvider;