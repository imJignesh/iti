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

    useEffect(() => {
        let scroll;

        const initScroll = async () => {
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
            scrollInstanceRef.current?.destroy();
            scrollInstanceRef.current = null;
            setIsReady(false);
        };
    }, []);

    return (
        <div ref={scrollRef} data-scroll-container>
            <ScrollContext.Provider value={scrollInstanceRef.current}>
                {isReady && children}
            </ScrollContext.Provider>
        </div>
    );
};

export default LocomotiveScrollProvider;