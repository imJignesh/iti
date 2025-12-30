import { Montserrat } from 'next/font/google';
import { useRouter } from "next/router";
import { useState, createContext, useEffect } from "react";
import Link from 'next/link';
import dynamic from 'next/dynamic';

import "@/styles/critical.css";
import "@/styles/globals.css";

// ADD THIS IMPORT
import SEOHead from '../components/SEOHead';

const Header = dynamic(() => import("../components/Header"), { ssr: true });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });
const DelayedPopup = dynamic(() => import("../components/DelayedPopup"), { ssr: false });
const LocomotiveScrollProvider = dynamic(() => import('../components/LocomotiveScrollProvider'), { ssr: false });

const loadStyles = () => {
    import("@/styles/home-copy/Blog.css");
    import("@/styles/blog/Blogpg.css");
    import("@/styles/slug/slug.css");
    import("@/styles/ibdp/Ibdp.css");
    import("@/styles/bloginnerpage.css");
    // import("@/styles/freedemo/freedemo.css");
    // import("@/styles/freedemo/Acheivements.css");
    // import("@/styles/freedemo/Subjects.css");
    import("@/styles/team/team.css");
    import("@/styles/contact/contact.css");
    import("@/styles/DelayedPopup.css");
    import("bootstrap/dist/css/bootstrap.min.css");
};

const montserrat = Montserrat({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat',
    preload: true,
    fallback: ['Arial', 'sans-serif'],
});

export const PopupContext = createContext({
    isManualOpen: false,
    openManualPopup: () => { console.error('PopupContext used without Provider'); },
    closeManualPopup: () => { console.error('PopupContext used without Provider'); },
});

const PopupProvider = ({ children }) => {
    const [isManualOpen, setIsManualOpen] = useState(false);
    const openManualPopup = () => setIsManualOpen(true);
    const closeManualPopup = () => setIsManualOpen(false);

    return (
        <PopupContext.Provider value={{ isManualOpen, openManualPopup, closeManualPopup }}>
            {children}
        </PopupContext.Provider>
    );
}

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [headerHeight, setHeaderHeight] = useState(0);
    const [showButton, setShowButton] = useState(false);
    const [stylesLoaded, setStylesLoaded] = useState(false);

    const mobileBreakpoint = 2600;

    useEffect(() => {
        if (!stylesLoaded) {
            const timer = setTimeout(() => {
                loadStyles();
                setStylesLoaded(true);
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [stylesLoaded]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth <= mobileBreakpoint) {
                const shouldShow = window.scrollY > 100;
                setShowButton(shouldShow);
            } else {
                setShowButton(true);
            }
        };

        const handleResize = () => {
            if (window.innerWidth > mobileBreakpoint) {
                setShowButton(true);
            } else {
                handleScroll();
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <PopupProvider>
            <LocomotiveScrollProvider>
                {/* ADD GLOBAL SEOHead HERE */}
                <SEOHead />

                <div className={`${montserrat.className} ${montserrat.variable}`}>
                    <Header setHeaderHeight={setHeaderHeight} />
                    <Component {...pageProps} headerHeight={headerHeight} />
                    <Footer />
                    <DelayedPopup />
                </div>
                {showButton && (
                    <Link href="/join-free-demo-class" passHref legacyBehavior>
                        <a className="sticky-demo-button" aria-label="Go to Free Demo Class page">
                            Get a Free Demo
                        </a>
                    </Link>
                )}
            </LocomotiveScrollProvider>
        </PopupProvider>
    );
}