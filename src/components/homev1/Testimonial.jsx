import { useEffect, useRef } from "react";
import ReviewsSection from "@/components/shared/ReviewsSection";
import { getReviewsData } from "@/data/reviewsData";

const testimonialData = getReviewsData("homeCopy");

export default function HomeV1Testimonial() {
    const sectionRef = useRef(null);

    useEffect(() => {
        // homev1 does not use Home's scroll provider; trigger the existing reveals locally.
        const elements = sectionRef.current?.querySelectorAll("[data-scroll-class]");
        if (!elements) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(({ target, isIntersecting }) => {
                if (isIntersecting) {
                    target.classList.add(target.dataset.scrollClass);
                } else if (target.hasAttribute("data-scroll-repeat")) {
                    target.classList.remove(target.dataset.scrollClass);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef}>
            <ReviewsSection testimonials={testimonialData} />
        </div>
    );
}
