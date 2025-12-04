// src/pages/_app.js

// Add all your CSS here.
import "@/styles/globals.css";
// Home Page Css
// import "@/styles/home/Hero.css";
// import "@/styles/home/Course.css";
// import "@/styles/home/About.css";
// import "@/styles/home/Test.css";
import "@/styles/home/MovingBanner.css";
// import "@/styles/home/Subjects.css";
// import "@/styles/home/Alumni.css";
// import "@/styles/home/Usps.css";
// import "@/styles/home/Trainers.css";
import "@/styles/home/Testimonial.css";
// import "@/styles/home/Blog.css";

// Home Copy Page Css
// import "@/styles/home-copy/Hero.css";
import "@/styles/home-copy/Course.css";
import "@/styles/home-copy/About.css";
import "@/styles/home-copy/Test.css";
import "@/styles/home-copy/MovingBanner.css";
import "@/styles/home-copy/Subjects.css";
import "@/styles/home-copy/Alumni.css";
import "@/styles/home-copy/Usps.css";
import "@/styles/home-copy/Trainers.css";
import "@/styles/home-copy/Testimonial.css";
import "@/styles/home-copy/Blog.css";

import "@/styles/contact/ContactHeadline.css";

// Blog Page Css
import "@/styles/blog/Blogpg.css";

// Blog Detail Page Css
import "@/styles/slug/slug.css";

// ACT page Css
import "@/styles/act/Hero.css";
import "@/styles/act/GallerySlider.css";
import "@/styles/act/Subjects.css";
import "@/styles/act/Curriculum.css";
import "@/styles/act/Usps.css";
import "@/styles/act/Faq.css";
import "@/styles/act/Article.css";
import "@/styles/act/GallerySlider.css";

// AP page Css
import "@/styles/ap/Hero.css";
import "@/styles/ap/Curriculum.css";
import "@/styles/ap/Usps.css";
import "@/styles/ap/Faq.css";
import "@/styles/ap/Article.css";
import "@/styles/ap/GallerySlider.css";
import "@/styles/ap/Whystud.css";

// IBDP page Css
import "@/styles/ibdp/Ibdp.css";
import "@/styles/bloginnerpage.css";
// import "@/styles/ib/Acheivements.css";
// import "@/styles/ib/Curriculum.css";
// import "@/styles/ib/Usps.css";
// import "@/styles/ib/Faq.css";
// import "@/styles/ib/Article.css";
// import "@/styles/ib/GallerySlider.css";
// IBDP page Css
// import "@/styles/ibdp/Ibdp.css";
// import "@/styles/ibdp/Achievement.css";
// import "@/styles/ibdp/IbdpCourses.css";

// freeme demo page css
import "@/styles/freedemo/freedemo.css";
import "@/styles/freedemo/Acheivements.css";
import "@/styles/freedemo/Subjects.css";
// team page css
import "@/styles/team/team.css";

// contact page css
import "@/styles/contact/contact.css";
import "@/styles/DelayedPopup.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DelayedPopup from "../components/DelayedPopup";
import { useRouter } from "next/router";

import LocomotiveScrollProvider from '../components/LocomotiveScrollProvider';
import { useState, createContext } from "react";


// --- 1. Define and Export the Context ---
export const PopupContext = createContext({
    isManualOpen: false,
    openManualPopup: () => { console.error('PopupContext used without Provider'); },
    closeManualPopup: () => { console.error('PopupContext used without Provider'); },
});

// --- 2. Define the Provider Component ---
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
        // --- 3. CRITICAL: Wrap the entire app with the PopupProvider ---
        <PopupProvider>
            <LocomotiveScrollProvider>
                <Header setHeaderHeight={setHeaderHeight} />
                <Component {...pageProps} headerHeight={headerHeight} />
                <Footer />
                <DelayedPopup /> {/* DelayedPopup now correctly reads the context */}
            </LocomotiveScrollProvider>
        </PopupProvider>
    );
}