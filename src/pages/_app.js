// src/pages/_app.js
// Add all css here.

import "@/styles/globals.css";
//Home Page Css
import "@/styles/home/Hero.css";
import "@/styles/home/Course.css";
import "@/styles/home/About.css";
import "@/styles/home/Test.css";
import "@/styles/home/MovingBanner.css";
import "@/styles/home/Subjects.css";
import "@/styles/home/Alumni.css";
import "@/styles/home/Usps.css";
import "@/styles/home/Trainers.css";
import "@/styles/home/Testimonial.css";
import "@/styles/home/Blog.css";

//Home Copy Page Css
import "@/styles/home-copy/Hero.css";
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

//Blog Page Css
import "@/styles/blog/Blogpg.css";

//Blog Detail Page Css
import "@/styles/slug/slug.css";

//ACT page Css
import "@/styles/act/Hero.css";
// import "@/styles/act/Acheivements.css";
import "@/styles/act/GallerySlider.css";
import "@/styles/act/Subjects.css";
import "@/styles/act/Curriculum.css";


// import "@/styles/act/Subjects.css";
import "@/styles/act/Usps.css";
import "@/styles/act/Faq.css";
import "@/styles/act/Article.css";
import "@/styles/act/GallerySlider.css";


//AP page Css
import "@/styles/ap/Hero.css";
import "@/styles/ap/Curriculum.css"; // plain CSS import
// import "@/styles/ap/Subjects.css";
import "@/styles/ap/Usps.css";
import "@/styles/ap/Faq.css";
import "@/styles/ap/Article.css";
import "@/styles/ap/GallerySlider.css";
import "@/styles/ap/Whystud.css";

//IBDP page Css
import "@/styles/ib/Acheivements.css";
import "@/styles/ib/Curriculum.css"; // plain CSS import
// import "@/styles/ib/Subjects.css";
import "@/styles/ib/Usps.css";
import "@/styles/ib/Faq.css";
import "@/styles/ib/Article.css";
import "@/styles/ib/GallerySlider.css";
//IBDP page Css
import "@/styles/ibdp/Ibdp.css";
import "@/styles/ibdp/Achievement.css";
// import "@/styles/ibdp/Subject.css";
import "@/styles/ibdp/IbdpCourses.css";

// freeme demo page css
import "@/styles/freedemo/freedemo.css";


import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useRouter } from "next/router";
import Home from "./Home";
import ACT from "./act";
import AP from "./ap";
import IBDP from "./ibdp";
import Blog from "./blog";
import IB from "./ib";

export default function App({ Component, pageProps }) {
    const router = useRouter();

    let RenderedComponent = null;

    if (router.pathname === "/") {
        RenderedComponent = <Home />;
    } else if (router.pathname === "/act") {
        RenderedComponent = <ACT />;
    }
    else if (router.pathname === "/ap") {
        RenderedComponent = <AP />;
    } else if (router.pathname === "/ibdp") {
        RenderedComponent = <IBDP />;
    }
    else if (router.pathname === "/blog") {
        RenderedComponent = <Blog />;
    } else if (router.pathname === "/ib") {
        RenderedComponent = <IB />;
    } else {
        RenderedComponent = <Component {...pageProps} />;
    }

    return (
        <>
            <Header />
            {RenderedComponent}
            <Footer />
        </>
    );
}
