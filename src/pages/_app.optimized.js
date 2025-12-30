import { Montserrat } from 'next/font/google';
import { useRouter } from "next/router";
import { useState, createContext, useEffect } from "react";
import Link from 'next/link';
import dynamic from 'next/dynamic';

// CRITICAL: Import only critical CSS first
import "@/styles/critical.css";

// CRITICAL: Lazy load all other styles
const loadNonCriticalStyles = () => {
  return Promise.all([
    import("@/styles/globals.css"),
    import("@/styles/home-copy/Blog.css"),
    import("@/styles/blog/Blogpg.css"),
    import("@/styles/slug/slug.css"),
    import("@/styles/ibdp/Ibdp.css"),
    import("@/styles/bloginnerpage.css"),
    import("@/styles/team/team.css"),
    import("@/styles/contact/contact.css"),
    import("@/styles/DelayedPopup.css"),
    import("bootstrap/dist/css/bootstrap.min.css"),
  ]);
};

// Dynamic imports with loading priority
const Header = dynamic(() => import("../components/Header"), { 
  ssr: true,
  loading: () => null,
});

const Footer = dynamic(() => import("../components/Footer"), { 
  ssr: false,
  loading: () => null,
});

const DelayedPopup = dynamic(() => import("../components/DelayedPopup"), { 
  ssr: false,
  loading: () => null,
});

const LocomotiveScrollProvider = dynamic(() => import('../components/LocomotiveScrollProvider'), { 
  ssr: false,
  loading: () => null,
});

// Optimize font loading
const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
  fallback: ['Arial', 'sans-serif'],
  adjustFontFallback: true,
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

  // CRITICAL: Load non-critical styles after page is interactive
  useEffect(() => {
    if (!stylesLoaded) {
      // Use requestIdleCallback for better performance
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          loadNonCriticalStyles().then(() => setStylesLoaded(true));
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          loadNonCriticalStyles().then(() => setStylesLoaded(true));
        }, 1);
      }
    }
  }, [stylesLoaded]);

  // Optimize scroll handler with passive listeners
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.innerWidth <= mobileBreakpoint) {
            const shouldShow = window.scrollY > 100;
            setShowButton(shouldShow);
          } else {
            setShowButton(true);
          }
          ticking = false;
        });
        ticking = true;
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
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <PopupProvider>
      <LocomotiveScrollProvider>
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
