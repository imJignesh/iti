import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

const ScrollContext = createContext(null);

export const useScroll = () => {
    return useContext(ScrollContext);
};

const LocomotiveScrollProvider = ({ children }) => {
    const scrollRef = useRef(null); // DOM element
    const scrollInstanceRef = useRef(null); // Locomotive instance
    const [isReady, setIsReady] = useState(false);
    // NEW: State to track if scroll should be enabled (default to true)
    const [isScrollEnabled, setIsScrollEnabled] = useState(true);

    // 1. Effect to handle width check and resize
    useEffect(() => {
        if (typeof window === "undefined") return;

        const checkWidth = () => {
            // Disable if width is less than 3000px
            const shouldEnable = window.innerWidth >= 3000;
            setIsScrollEnabled(shouldEnable);
        };

        checkWidth();
        window.addEventListener("resize", checkWidth);

        return () => {
            window.removeEventListener("resize", checkWidth);
        };
    }, []);


    // 2. Effect to initialize/destroy Locomotive Scroll based on width
    useEffect(() => {
        let scroll;

        const initScroll = async () => {
            // If scroll is disabled, ensure the context value is null and mark as ready
            if (!isScrollEnabled) {
                // If an instance exists but shouldn't, destroy it
                scrollInstanceRef.current?.destroy();
                scrollInstanceRef.current = null;
                setIsReady(true);
                return;
            }

            // If scroll is enabled but an instance already exists, do nothing (wait for destroy on width change)
            if (scrollInstanceRef.current) return;

            const LocomotiveScroll = (await import("locomotive-scroll")).default;
            if (!scrollRef.current) return;

            scroll = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
                lerp: 0.1,
            });

            scrollInstanceRef.current = scroll;
            setIsReady(true); // trigger re-render so context updates
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
    }, [isScrollEnabled]); // Re-run effect when isScrollEnabled changes

    return (
        // Conditionally set data-scroll-container attribute
        <div ref={scrollRef} data-scroll-container={isScrollEnabled ? true : undefined}>
            <ScrollContext.Provider value={scrollInstanceRef.current}>
                {/* Only render children if the component is ready (Loco Scroll initialized OR correctly disabled) */}
                {isReady && children}
            </ScrollContext.Provider>
        </div>
    );
};

export default LocomotiveScrollProvider;