import { useEffect, useRef } from "react";
import Trainers from "@/components/shared/Trainers";
import { getTrainersData } from "@/data/trainersData";

const trainersData = getTrainersData("home");

export default function HomeV1Trainers() {
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
        <section ref={sectionRef} data-scroll-section>
            <Trainers trainers={trainersData} />
        </section>
    );
}
