import { useEffect, useRef } from "react";
import Footer from "@/components/Footer";

export default function HomeV1Footer() {
    const wrapperRef = useRef(null);

    useEffect(() => {
        // Reveal the shared footer without Home's scroll provider.
        const elements = wrapperRef.current?.querySelectorAll("[data-scroll-class]");
        if (!elements) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(({ target, isIntersecting }) => {
                if (!isIntersecting) return;
                target.classList.add(target.dataset.scrollClass);
                observer.unobserve(target);
            });
        });

        elements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={wrapperRef}>
            <Footer />
        </div>
    );
}
