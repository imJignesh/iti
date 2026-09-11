import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const courses = [
    {
        number: "01.",
        title: "IBDP",
        label: "IBDP",
        subtitle: "International Baccalaureate Diploma Programme",
        details: ["Total Courses: 4", "|", "Online & In-Person"],
        image: "/images/course-bg1.webp",
        href: "/courses/ibdp-tutors-in-dubai",
    },
    {
        number: "02.",
        title: "IB MYP",
        label: "IB MYP",
        subtitle: "Middle Years Programme",
        details: ["Total Courses: 2", "|", "Online & In-Person"],
        image: "/images/course-bg2.webp",
        href: "/courses/myp-tutors-in-dubai",
    },
    {
        number: "03.",
        title: "A Levels",
        label: "A Levels",
        subtitle: "Advanced Levels",
        details: ["Total Courses: 3", "|", "Online & In-Person"],
        image: "/images/course-bg3.webp",
        href: "/courses/a-level-tutors-in-dubai",
    },
    {
        number: "04.",
        title: "IGCSE",
        label: "IGCSE",
        subtitle: "International General Certificate Of Secondary Education",
        details: ["Total Courses: 3", "|", "Online & In-Person"],
        image: "/images/course-bg4.webp",
        href: "/courses/igcse-tutors-in-dubai",
    },
    {
        number: "05.",
        title: "Homeschooling",
        label: "Homeschooling",
        subtitle: "Private Candidacy",
        details: ["Total Courses: 2", "|", "Online & In-Person"],
        image: "/images/course-bg5.webp",
        href: "/courses/homeschooling-tutors-in-dubai",
    },
];

export default function Course() {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(3);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 },
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="section" aria-labelledby="homev1-course-title">
            <div className="container">
                <header className="headingBlock">
                    <div className={`reveal ${isVisible ? "visible" : ""}`} style={{ "--delay": "0.1s" }}>
                        <h2 className="eyebrow">Tutoring Programs</h2>
                    </div>
                    <div className={`reveal ${isVisible ? "visible" : ""}`} style={{ "--delay": "0.25s" }}>
                        <h3 id="homev1-course-title" className="heading">
                            Become Exam-Ready With Targeted Prep <span>Courses</span>
                        </h3>
                    </div>
                    <div className={`reveal ${isVisible ? "visible" : ""}`} style={{ "--delay": "0.4s" }}>
                        <p className="description">
                            Whether you&apos;re aiming for top scores or a strong foundation, Ignite&apos;s courses give you the edge to succeed.
                        </p>
                    </div>
                </header>

                <div className={`cards ${isVisible ? "visible" : ""}`}>
                    {courses.map((course, index) => {
                        const isActive = activeIndex === index;
                        const cardClass = isActive ? "cardActive" : "card";

                        return (
                            <div
                                key={course.number}
                                className={`${cardClass} reveal`}
                                style={{ "--delay": `${0.3 + index * 0.25}s` }}
                                onMouseEnter={() => setActiveIndex(index)}
                                onFocus={() => setActiveIndex(index)}
                            >
                                <span className="cardNumber">{course.number}</span>
                                <h3 className="cardTitle">{course.title}</h3>

                                <div className="cardImage">
                                    <Image
                                        src={course.image}
                                        alt={`${course.title} course background`}
                                        fill
                                        className="cardImageAsset"
                                        sizes="(max-width: 991px) 100vw, 23vw"
                                        loading="lazy"
                                    />
                                </div>

                                <div className={`cardContent ${isActive ? "contentActive" : "contentInactive"}`}>
                                    <div>
                                        <div className="cardLabel">{course.label}</div>
                                        <h3 className="cardSubtitle">{course.subtitle}</h3>
                                    </div>
                                    <div className="cardDetails">
                                        {course.details.map((detail) => <span key={detail}>{detail}</span>)}
                                    </div>
                                    <a className="cardButton" href={course.href}>
                                        <span>View Course</span>
                                        <Image src="/images/right-arrow-blue.webp" width={40} height={40} alt="" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <style jsx>{`
                .section { padding: 70px 0 0; }
                .container { width: min(100% - 32px, 1320px); margin: 0 auto; }
                .headingBlock { padding-bottom: 30px; text-align: center; background: linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, var(--border-color), #e7f6ff) border-box; border-bottom: 2px solid transparent; }
                .eyebrow { position: relative; display: inline-block; margin: 0; padding: 0 40px; color: transparent; background: linear-gradient(285.71deg, #3f88ba -4.32%, #161664 106.53%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 28px; font-weight: 600; line-height: 1.2; text-transform: uppercase; }
                .eyebrow::before, .eyebrow::after { position: absolute; top: 0; width: 14px; height: 100%; content: ""; background: url("/images/heading-icon.webp") center / contain no-repeat; }
                .eyebrow::before { left: 0; }
                .eyebrow::after { right: 0; }
                .heading { margin: 40px 0 30px; color: var(--blue-color); font-size: 2rem; font-weight: 700; line-height: 1.1; text-transform: uppercase; }
                .heading span { color: transparent; background: linear-gradient(to right, var(--lightgreen-color), var(--green-color)); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .description { max-width: 60%; margin: 0 auto; color: var(--grey-text); font-size: 1vw; line-height: 1.5vw; opacity: 0.5; }
                .cards { display: flex; align-items: stretch; justify-content: center; gap: 40px; max-width: 60vw; margin: 40px auto 0; }
                .card, .cardActive { position: relative; display: flex; flex: 0 0 10%; flex-direction: column; align-items: center; justify-content: flex-start; min-width: 0; height: 25vw; padding-top: 120px; overflow: hidden; border-radius: 20px; background: rgba(255, 255, 255, 0.7); box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07); cursor: pointer; transition: flex-basis 0.8s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.8s, background 0.8s; will-change: flex-basis, height, box-shadow; }
                .cardActive { flex-basis: 23vw; z-index: 2; border-radius: 2vw; background: #fff; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12); }
                .cardNumber { position: absolute; top: 1rem; right: 1.5rem; left: 1.5rem; z-index: 3; padding-bottom: 2rem; border-bottom: 1px solid var(--grey-text); color: var(--blue-color); font-size: 1.7vw; font-weight: 600; text-align: center; }
                .cardActive .cardNumber { left: 1.5vw; padding-bottom: 0; border: 0; color: #fff; font-size: 1.7vw; line-height: 2; text-align: left; }
                .cardTitle { z-index: 3; margin: 0 0 2vw; color: var(--blue-color); font-size: 1.7vw; font-weight: 600; letter-spacing: 2px; writing-mode: vertical-rl; }
                .cardActive .cardTitle { opacity: 0; pointer-events: none; }
                .cardImage { position: absolute; inset: 0; z-index: 1; overflow: hidden; border-radius: 30px; filter: blur(2px) brightness(0.9); opacity: 0.8; transform: scale(1.05); transition: filter 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
                .cardActive .cardImage { filter: blur(0) brightness(1); opacity: 1; transform: scale(1); }
                :global(.cardImageAsset) { object-fit: cover; object-position: center; }
                .cardImage::after { position: absolute; inset: 0; z-index: 2; content: ""; background: #a3cbf583; transition: background 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
                .cardActive .cardImage::after { background: #2f534161; }
                .cardContent { position: absolute; inset: 0; z-index: 4; display: flex; flex-direction: column; justify-content: flex-end; gap: 1vw; padding: 2vw; border-radius: 25px; color: #fff; background: linear-gradient(180deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6)); transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
                .contentActive { opacity: 1; transform: translateY(0) scale(1); }
                .contentInactive { opacity: 0; pointer-events: none; transform: translateY(30px) scale(0.98); }
                .cardLabel { width: 10ch; margin-bottom: 1vw; font-size: 1.8rem; font-weight: 700; letter-spacing: 2px; line-height: 1; }
                .cardSubtitle { min-width: 27ch; max-width: 27ch; margin: 0; font-size: 1vw; font-weight: 600; letter-spacing: 1.5px; line-height: 1.2; text-transform: uppercase; }
                .cardDetails { display: flex; min-width: 33ch; align-items: center; justify-content: space-between; gap: 12px; padding-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.3); font-size: 0.9vw; }
                .cardButton { position: relative; z-index: 1; display: flex; width: max-content; align-items: center; justify-content: space-between; gap: 20px; margin-top: 2vw; padding: 10px 10px 10px 15px; overflow: hidden; border-radius: 40px; color: var(--blue-color); background: linear-gradient(to right, var(--border-color), #e7f6ff); font-size: 1rem; font-weight: 600; text-decoration: none; text-transform: uppercase; }
                .cardButton::before { position: absolute; top: 0; left: 0; z-index: -1; width: 200%; height: 100%; content: ""; background: linear-gradient(to right, var(--border-color), #e7f6ff 55%, var(--border-color) 85%, var(--border-color)); transition: transform 0.4s ease-in-out; }
                .cardButton:hover::before { transform: translateX(-50%); }
                .cardButton :global(img) { width: 30px; height: auto; }
                .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease var(--delay), transform 0.7s ease var(--delay); }
                .visible .reveal, .reveal.visible { opacity: 1; transform: translateY(0); }
                .cards > .card, .cards > .cardActive { transition: flex-basis 0.8s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.8s, background 0.8s, opacity 0.7s ease var(--delay), transform 0.7s ease var(--delay);border:none;border-radius:30px; }
                @media (max-width: 1440px) { .card, .cardActive { height: 500px; border-radius: 30px; } .cardActive { flex-basis: 500px; } }
                @media (max-width: 1280px) { .card, .cardActive { height: 550px; } .cardLabel { font-size: 3rem; } .cardDetails { font-size: 1.3rem; } }
                @media (max-width: 1124px) { .cards { max-width: 100%; } .card, .cardActive { height: 450px; padding-top: 120px; } .cardActive { flex-basis: 400px; } .card { flex-basis: 100px; } .cardTitle { font-size: 22px; } .cardNumber { padding-bottom: 20px; font-size: 35px; } .cardSubtitle { font-size: 18px; } .cardLabel { margin-bottom: 8px; font-size: 32px; } }
                @media (max-width: 1024px) { .eyebrow { font-size: 24px; } .heading { font-size: 35px; } .description { max-width: 700px; font-size: 20px; line-height: 1.5; } }
                @media (max-width: 991px) { .container { width: 95vw; padding: 0 12px; } .heading { font-size: 30px; } .cards { flex-direction: column; align-items: stretch; gap: 20px; } .card, .cardActive { flex-basis: auto; } .cardActive { width: 100%; height: 360px; border-radius: 20px; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.07); } .card { width: 100%; height: 120px; flex-direction: row; padding: 20px; border-radius: 20px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04); } .card .cardNumber { position: static; width: max-content; padding: 0 30px 0 20px; border: 0; border-right: 1px solid; font-size: 2em; } .cardTitle, .cardActive .cardTitle { position: static; margin: 0 0 0 30px; font-size: 2rem; writing-mode: horizontal-tb; } .cardContent { gap: 10px; padding: 20px; border-radius: 18px; background: linear-gradient(180deg,rgba(0,0,0,.01),rgba(0,0,0,.5)); transition-duration: .3s; } .cardLabel { font-size: 2.5rem; } .cardSubtitle { font-size: 1.6rem; } .cardDetails { gap: 30px; padding-top: 4px; justify-content: flex-start; font-size: 1.2rem; font-weight: 500; } .cardButton { margin-top: 8px; padding: 8px 18px; border-radius: 22px; } .cardImage { border-radius: 0; } }
                @media (max-width: 767px) { .container { width: 100%; } }
                @media (max-width: 575px) { .eyebrow { font-size: 15px; padding: 0 24px; } .eyebrow::before, .eyebrow::after { top: 50%; height: 24px; transform: translateY(-50%); } .section { padding-top: 50px; } .container { width: 100%; } .heading { margin: 20px 0; font-size: 20.4px; line-height: 23px; } .description { font-size: 14px; line-height: 22px; } .card { flex-basis: 80px; border-radius: 15px; } .cardActive { flex-basis: 350px; } .cardContent { justify-content: center; } .cardNumber { padding: 0 20px 0 10px; font-size: 1.6rem; } .cardTitle, .cardActive .cardTitle { margin-left: 20px; font-size: 1.6rem; } .cardLabel { font-size: 1.3rem; line-height: 30px; } .cardSubtitle { min-width: 24ch; max-width: 24ch; margin-top: 12px; padding-bottom: 5px; font-size: 1.2rem; line-height: 24px; } .cardDetails { padding-top: 10px; font-size: 0.9rem; } .cardActive .cardNumber { left: 20px; font-size: 22px; opacity: 0.5; } .cardActive .cardImage::after { background: rgba(0, 0, 0, 0.493); } }
                @media (max-width: 440px) { .cardActive { flex-basis: 360px; } .card .cardNumber { padding: 0 10px 0 0; font-size: 1.2rem; } .cardTitle, .cardActive .cardTitle { margin-left: 20px; font-size: 1.2rem; } .cardDetails { gap: 10px; } }
                @media (max-width: 991px) { .cards > .card, .cards > .cardActive { transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.7s ease var(--delay), transform 0.7s ease var(--delay); } }
            `}</style>
        </section>
    );
}
