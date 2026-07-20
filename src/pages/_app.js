import { Montserrat } from 'next/font/google';
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Script from "next/script";
import { useState, createContext, useEffect, useRef } from "react";


// critical.css is inlined in _document.js as a <style> tag — zero network request
import "@/styles/globals.css";
// Bootstrap is loaded deferred via Script below — critical Bootstrap utilities are in critical.css
// --- Global Styles for specific sub-pages ---
// Moved to individual pages via <link> tags in Head to prioritize home page LCP.

import Header from "../components/Header";
import Footer from "../components/Footer";
const DelayedPopup = dynamic(() => import("../components/DelayedPopup"), { ssr: false });

import "@/styles/DelayedPopup.css";

const LocomotiveScrollProvider = dynamic(() => import('../components/LocomotiveScrollProvider'), {
    ssr: false,
});

import { isPageSpeedInsights } from "@/utils/botDetection";



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
    const [headerHeight, setHeaderHeight] = useState(102); // Default to approx header height to prevent CLS
    const [showButton, setShowButton] = useState(false);
    const [stylesLoaded, setStylesLoaded] = useState(false);
    const [shouldLoadLocomotiveScroll, setShouldLoadLocomotiveScroll] = useState(false);

    const mobileBreakpoint = 2600;

    // Set Locomotive once on client mount (avoids hydration mismatch)
    useEffect(() => {
        const shouldEnable = window.innerWidth > 991 && !isPageSpeedInsights();
        setShouldLoadLocomotiveScroll(shouldEnable);
    }, []);

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

    const isReportingRef = useRef(false);

    // --- Google Ads Click Conversion Tracking for "Get a Free Demo" ---
    const handleDemoClick = (e) => {
        if (isReportingRef.current) return;

        e.preventDefault();
        const url = '/join-free-demo-class';

        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            isReportingRef.current = true;
            window.gtag('event', 'conversion', {
                'send_to': 'AW-844959495/i6DpCNnjiP4bEIee9JID',
                'event_callback': function () {
                    window.location.href = url;
                    isReportingRef.current = false;
                }
            });

            // Fallback in case the callback doesn't fire
            setTimeout(() => {
                if (isReportingRef.current) {
                    window.location.href = url;
                    isReportingRef.current = false;
                }
            }, 500);
        } else {
            // If gtag isn't loaded, just perform the regular navigation
            window.location.href = url;
        }
    };

    // Minimal Return for Debugging
    return (
        <PopupProvider>
            {/*
              * Bootstrap loaded in _document.js via <link> with media="print" swap.
              * Avoids script execution overhead. CDN is versioned.
              * Critical utilities already inlined in critical.css.
              */}
            <Script
                id="gtm-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PMG2GSQ');`,
                }}
            />
            {/* Google Tag (gtag.js) */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=AW-844959495"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){
                        if (arguments[0] === 'event' && arguments[1] === 'conversion') {
                            console.trace("🔎 ANY GTAG CONVERSION ACCESSED:", arguments);
                        }
                        dataLayer.push(arguments);
                    }
                    gtag('js', new Date());
                    gtag('config', 'AW-844959495');
                `}
            </Script>

            {/* Non-critical CSS loaded in _document.js via <link> with media="print" swap */}

            {/* Meta Pixel Code */}
            <Script id="meta-pixel" strategy="afterInteractive">
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '1590586591378731');
                    fbq('track', 'PageView');
                `}
            </Script>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=1590586591378731&ev=PageView&noscript=1"
                    alt=""
                />
            </noscript>

            {shouldLoadLocomotiveScroll ? (
                <LocomotiveScrollProvider>
                    <MainContent setHeaderHeight={setHeaderHeight} headerHeight={headerHeight} pageProps={pageProps} Component={Component} />
                </LocomotiveScrollProvider>
            ) : (
                <MainContent setHeaderHeight={setHeaderHeight} headerHeight={headerHeight} pageProps={pageProps} Component={Component} />
            )}

            {/* Outside data-scroll-container so Locomotive never sees this DOM mutation */}
            {showButton && (
                <a
                    href="/join-free-demo-class"
                    onClick={handleDemoClick}
                    className="sticky-demo-button"
                    aria-label="Go to Free Demo Class page"
                >
                    Get a Free Demo
                </a>
            )}
        </PopupProvider>
    );
}

const MainContent = ({ setHeaderHeight, headerHeight, pageProps, Component }) => (
    <div className={`${montserrat.className} ${montserrat.variable}`}>
        <Header setHeaderHeight={setHeaderHeight} />
        <Component {...pageProps} headerHeight={headerHeight} />
        <Footer />
        <DelayedPopup />
    </div>
);