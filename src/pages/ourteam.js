'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const OurTeam = () => {
    const scrollRef = useRef(null);
    const scrollInstanceRef = useRef(null);

    // Locomotive Scroll setup - similar to blog.js
    useEffect(() => {
        const initScroll = async () => {
            try {
                // Dynamically import LocomotiveScroll to handle potential loading issues.
                // The .default is used because some modules export their main content under a 'default' property.
                const LocomotiveScrollModule = await import("locomotive-scroll");
                const LocomotiveScroll = LocomotiveScrollModule.default || LocomotiveScrollModule;

                if (!scrollRef.current) {
                    console.log("Locomotive Scroll: scrollRef.current is null, cannot initialize.");
                    return;
                }

                scrollInstanceRef.current = new LocomotiveScroll({
                    el: scrollRef.current,
                    smooth: true,
                    lerp: 0.1,
                });

                // Initial update after scroll is ready to ensure correct scroll dimensions.
                if (scrollInstanceRef.current && typeof scrollInstanceRef.current.update === 'function') {
                    scrollInstanceRef.current.update();
                    console.log("✅ LocomotiveScroll initialized and updated");
                }
            } catch (error) {
                // Log any errors if LocomotiveScroll fails to load or initialize.
                // This prevents the application from crashing if the module isn't found.
                console.error("Failed to load or initialize LocomotiveScroll:", error);
                // Optionally, you could set state here to disable features that rely on scrolling
                // or display a fallback message to the user.
            }
        };

        // Only attempt to initialize Locomotive Scroll in a client-side environment.
        if (typeof window !== "undefined") {
            initScroll();
        }

        // Cleanup function for the useEffect hook.
        // Destroys the Locomotive Scroll instance when the component unmounts.
        return () => {
            if (scrollInstanceRef.current) {
                scrollInstanceRef.current.destroy();
                scrollInstanceRef.current = null;
            }
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount.

    // Function to determine the breadcrumb navigation path for the page.
    const getBreadcrumbPath = () => {
        return [
            { name: 'Home', href: '/' },       // Link to the home page
            { name: 'Our Team', href: '/ourteam' } // Current page in the breadcrumb
        ];
    };

    const breadcrumbPath = getBreadcrumbPath();

    return (
        <>
            {/* Main container for the scrollable content.
                Locomotive Scroll attaches to the element marked with data-scroll-container. */}
            <div ref={scrollRef} data-scroll-container style={{ minHeight: 'calc(100vh - 200px)' }}>
                <section className="ibdpBanner" data-scroll data-scroll-section>
                    {/* Banner Section: Contains the background image, title, and breadcrumb. */}
                    <div className="full-width-image-wrapper" data-scroll-section>
                        {/* Image for the banner. Replace the src with your actual team banner image.
                            The onLoad handler triggers a scroll update once the image is loaded,
                            which helps Locomotive Scroll correctly calculate layout. */}
                        <img
                            src="/images/ourteambanner.jpg" // Placeholder image path
                            className="img-fluid" // Bootstrap class for responsive images
                            onLoad={() => scrollInstanceRef.current?.update && scrollInstanceRef.current.update()}
                            alt="Our Team Banner" // Alt text for accessibility
                        />
                        {/* Page title displayed over the banner image. */}
                        <h1 className="banner-text">Our Team</h1>
                        {/* Breadcrumb Navigation: Provides context for the user's location on the site. */}
                        <nav aria-label="breadcrumb" className="blog-breadcrumb">
                            <ol className="breadcrumb">
                                {breadcrumbPath.map((item, index) => (
                                    <li key={index} className={`breadcrumb-item ${index === breadcrumbPath.length - 1 ? 'active' : ''}`}>
                                        {/* Renders as a link if not the current page, otherwise as active text. */}
                                        {index === breadcrumbPath.length - 1 ? (
                                            item.name
                                        ) : (
                                            <a href={item.href}>{item.name}</a>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </div>
                    {/* End Banner Section */}

                    {/* Placeholder for actual team content.
                        This section can be expanded to include team member cards, descriptions, etc. */}
                    <div className="container mx-auto py-10">
                        <h2 className="text-center text-3xl font-bold mb-8">Meet Our Amazing Team!</h2>
                        <p className="text-center text-lg text-gray-700">
                            This is where you can showcase your team members.
                            You can add individual profiles, descriptions, and more here.
                        </p>
                    </div>

                </section>
            </div>
        </>
    );
};

export default OurTeam;
