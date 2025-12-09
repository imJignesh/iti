// src/pages/_app.js

import { Montserrat } from 'next/font/google'; // Import the font loader
import "@/styles/globals.css";
import "@/styles/home-copy/Blog.css"; // Keep this imported until you move it to a module
import "@/styles/blog/Blogpg.css"; // Global Blog Page CSS to be converted
import "@/styles/slug/slug.css"; // Global Blog Detail CSS to be converted
import "@/styles/ibdp/Ibdp.css"; // Global IBDP CSS to be converted
import "@/styles/bloginnerpage.css"; // Global Blog Inner Page CSS to be converted
import "@/styles/freedemo/freedemo.css"; // Global Freedemo CSS to be converted
import "@/styles/freedemo/Acheivements.css"; // Global Freedemo Achievements CSS to be converted
import "@/styles/freedemo/Subjects.css"; // Global Freedemo Subjects CSS to be converted
import "@/styles/team/team.css"; // Global Team Page CSS to be converted
import "@/styles/contact/contact.css"; // Global Contact Page CSS to be converted
import "@/styles/DelayedPopup.css"; // Global Popup CSS (Can remain here if global)


import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DelayedPopup from "../components/DelayedPopup";
import { useRouter } from "next/router";

import LocomotiveScrollProvider from '../components/LocomotiveScrollProvider';
import { useState, createContext } from "react";

// --- 1. Define the Montserrat Font Loader ---
const montserrat = Montserrat({
    // Specify a range or specific weights to manage size. 
    // We'll use 400-700 as a standard range for headers and body text.
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
            </LocomotiveScrollProvider>
        </PopupProvider>
    );
}