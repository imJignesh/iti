// src/pages/_app.js

import { Montserrat } from 'next/font/google'; // Import the font loader
import "@/styles/globals.css";
import "@/styles/home-copy/Blog.css";
import "@/styles/blog/Blogpg.css";
import "@/styles/slug/slug.css";
import "@/styles/ibdp/Ibdp.css";
import "@/styles/bloginnerpage.css";
import "@/styles/freedemo/freedemo.css";
import "@/styles/freedemo/Acheivements.css";
import "@/styles/freedemo/Subjects.css";
import "@/styles/team/team.css";
import "@/styles/contact/contact.css";
import "@/styles/DelayedPopup.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DelayedPopup from "../components/DelayedPopup";
import { useRouter } from "next/router";

import LocomotiveScrollProvider from '../components/LocomotiveScrollProvider';
import { useState, createContext, useEffect } from "react"; // Ensure useEffect is imported
import Link from 'next/link';

// --- 1. Define the Montserrat Font Loader ---
const montserrat = Montserrat({
    // Specify a range or specific weights to manage size. 
    weight: ['400', '500', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-montserrat', // Use a CSS variable for easier theme integration
});


// --- 2. Define and Export the Context ---
export const PopupContext = createContext({
    isManualOpen: false,
    openManualPopup: () => { console.error('PopupContext used without Provider'); },
    closeManualPopup: () => { console.error('PopupContext used without Provider'); },
});

// --- 3. Define the Provider Component ---
const PopupProvider = ({ children }) => {
    // This state controls the popup's visibility when manually triggered
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

    // --- NEW STATE & LOGIC FOR SCROLL BUTTON ---
    const [showButton, setShowButton] = useState(false);
    const mobileBreakpoint = 768; // Matches the CSS media query breakpoint

    useEffect(() => {
        const handleScroll = () => {
            // Only execute logic on mobile screens
            if (window.innerWidth <= mobileBreakpoint) {
                // Determine if the user has scrolled past a small threshold (e.g., 100px)
                const shouldShow = window.scrollY > 100;
                setShowButton(shouldShow);
            } else {
                // Always show the button on desktop/tablet (if not hidden by other logic)
                setShowButton(true);
            }
        };

        const handleResize = () => {
            // Re-evaluate button visibility on resize
            if (window.innerWidth > mobileBreakpoint) {
                setShowButton(true);
            } else {
                // Re-apply scroll-based visibility check if resized to mobile
                handleScroll();
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // ------------------------------------------

    return (
        // --- 4. Apply the font class to the component container ---
        <PopupProvider>
            <LocomotiveScrollProvider>
                {/* Apply the font class name and variable */}
                <div className={`${montserrat.className} ${montserrat.variable}`}>
                    <Header setHeaderHeight={setHeaderHeight} />
                    <Component {...pageProps} headerHeight={headerHeight} />
                    <Footer />
                    <DelayedPopup />
                </div>
                {showButton && ( // Conditionally render the button based on the state
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