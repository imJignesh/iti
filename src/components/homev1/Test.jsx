import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const tests = [
    { number: "01.", title: "ACT", label: "American College Testing", details: ["Total Courses: 2", "Online & In-Person"], image: "/images/test-section1.webp", href: "/act-tutors-in-dubai/" },
    { number: "02.", title: "AP", label: "Advanced Placements", details: ["Total Courses: 2", "Online & In-Person"], image: "/images/test-section2.webp", href: "/advanced-placements-tutors-in-dubai/" },
    { number: "03.", title: "UCAT", label: "University Clinical Aptitude Test", details: ["Total Courses: 2", "Online & In-Person"], image: "/images/test-section3.webp", href: "#" },
];

export default function Test() {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(1);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return undefined;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.1 });
        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="section" aria-labelledby="homev1-test-title">
            <div className="testContainer">
                <header className="headingBlock">
                    <div className={`reveal ${isVisible ? "visible" : ""}`} style={{ "--delay": "0.1s" }}>
                        <h2 className="eyebrow">Standardised Tests</h2>
                    </div>
                    <h3 id="homev1-test-title" className={`heading reveal ${isVisible ? "visible" : ""}`} style={{ "--delay": "0.2s" }}>
                        Power Your Academic Goals With Expert Prep <span>Support</span>
                    </h3>
                    <div className={`reveal ${isVisible ? "visible" : ""}`} style={{ "--delay": "0.4s" }}>
                        <p className="description">Whether you&apos;re aiming for top scores or a strong foundation, Ignite&apos;s courses give you the edge to succeed.</p>
                    </div>
                </header>
            </div>

            <div className="mobileWrapper">
                <Swiper
                    className="mobileSwiper"
                    initialSlide={1}
                    centeredSlides
                    slidesPerView={1.1}
                    spaceBetween={20}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    breakpoints={{ 400: { slidesPerView: 1.1, spaceBetween: 25 }, 575: { slidesPerView: 1.2, spaceBetween: 25 }, 786: { slidesPerView: 1.5, spaceBetween: 30 }, 900: { slidesPerView: 1.8, spaceBetween: 30 } }}
                >
                    {tests.map((test, index) => {
                        const active = activeIndex === index;
                        return (
                            <SwiperSlide key={test.number}>
                                <div className="mobileCard">
                                    <div
                                        className={`mobileImage ${active ? "activeImage" : ""}`}
                                        style={{ backgroundImage: `url("${test.image}")` }}
                                    >
                                        <span className={`cardNumber ${active ? "activeNumber" : ""}`}>{test.number}</span>
                                        <h3 className={`cardTitle ${active ? "activeTitle" : ""}`}>{test.title}</h3>
                                    </div>
                                    <div className={`mobileDetails ${active ? "detailsVisible" : "detailsHidden"}`}>
                                        <h3 className="cardLabel">{test.label}</h3>
                                        <div className="detailsList">
                                            {test.details.map((detail) => <span key={detail}>{detail}</span>)}
                                        </div>
                                        <a className="cardButton" href={test.href}>
                                            <span>View Courses</span>
                                            <Image src="/images/right-arrow-blue.webp" width={40} height={40} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>

            <div className="desktopWrapper">
                <div className="testContainer">
                    <div className="desktopCards">
                        {tests.map((test, index) => {
                            const active = activeIndex === index;
                            return (
                                <div key={test.number} className={`reveal ${isVisible ? "visible" : ""}`} style={{ "--delay": `${0.3 + index * 0.15}s` }}>
                                    <div className="desktopCard" onMouseEnter={() => setActiveIndex(index)} onMouseLeave={() => setActiveIndex(1)}>
                                        <div
                                            className={`desktopImage ${active ? "activeImage" : ""}`}
                                            style={{ backgroundImage: `url("${test.image}")` }}
                                        >
                                            <span className={`cardNumber ${active ? "activeNumber" : ""}`}>{test.number}</span>
                                            <h3 className={`cardTitle ${active ? "activeTitle" : ""}`}>{test.title}</h3>
                                        </div>
                                        <div className={`desktopDetails ${active ? "detailsVisible" : "detailsHidden"}`}>
                                            <h3 className="cardLabel">{test.label}</h3>
                                            <div className="detailsList">
                                                {test.details.map((detail) => <p key={detail} className="m-0">{detail}</p>)}
                                            </div>
                                            <a className="cardButton" href={test.href}>
                                                <span>View Courses</span>
                                                <Image src="/images/right-arrow-blue.webp" width={40} height={40} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .section { padding: 20px 0; background: #fff; }
                .testContainer { box-sizing: border-box; width: 85vw; margin: 0 auto; padding: 0 12px; }
                .headingBlock { margin-bottom: 40px; text-align: center; }
                .eyebrow { position: relative; display: inline-block; margin: 0; padding: 0 40px; color: transparent; background: linear-gradient(285.71deg,#3f88ba -4.32%,#161664 106.53%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 28px; font-weight: 600; line-height: 1.2; text-transform: uppercase; }
                .eyebrow::before, .eyebrow::after { position: absolute; top: 0; width: 14px; height: 100%; content: ""; background: url("/images/heading-icon.webp") center / contain no-repeat; }
                .eyebrow::before { left: 0; }.eyebrow::after { right: 0; }
                .heading { max-width: 60%; margin: 40px auto; color: var(--blue-color); font-size: 2rem; font-weight: 700; line-height: 1.2; text-transform: uppercase; }
                .heading span { color: transparent; background: linear-gradient(to right,var(--lightgreen-color),var(--green-color)); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .description { margin: 0; color: var(--grey-text); font-size: 1rem; line-height: 1.5; opacity: .5; }
                .desktopCards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px; margin: 40px 4px 0; }
                .desktopCard { display: flex; flex-direction: column; align-items: stretch; position: relative; }
                .desktopImage, .mobileImage { position: relative; display: flex; width: 100%; height: 25vw; min-height: 225px; align-items: flex-end; overflow: hidden; border-radius: 32px; background-position: center; background-size: cover; transition: height .6s cubic-bezier(.4,0,.2,1); }
                .desktopImage::before, .mobileImage::before { position: absolute; inset: 0; content: ""; background: linear-gradient(180deg,rgb(0 0 0 / 20%) 60%,rgb(0 0 0 / 80%)); }
                .desktopImage.activeImage { height: 15vw; }
                .cardNumber { position: absolute; top: 28px; left: 28px; z-index: 1; color: #fff; font-size: 3.2rem; font-weight: 700; line-height: 1; letter-spacing: 2px; opacity: .7; text-shadow: 0 2px 8px rgb(0 0 0 / 18%); transition: .3s all; }
                .activeNumber { font-size: 1.8rem; opacity: 1; }
                .cardTitle { position: absolute; bottom: 2vw; left: 50%; z-index: 1; margin: 0; color: #fff; font-size: 1.8rem; font-weight: 700; line-height: 1; letter-spacing: 1px; opacity: .85; text-shadow: 0 2px 8px rgb(0 0 0 / 18%); transform: translateX(-50%); transition: .4s all; }
                .desktopImage.activeImage .cardTitle { left: 20%; margin: 0; transform: translateX(-50%); }
                .desktopDetails, .mobileDetails { display: flex; flex-direction: column; align-items: flex-start; margin-top: 8px; overflow: hidden; pointer-events: none; opacity: 0; max-height: 0; transform: translateY(-30px); transition: opacity .8s, max-height .8s, transform .8s; }
                .detailsVisible { pointer-events: auto; opacity: 1; max-height: 240px; transform: translateY(0); }
                .cardLabel { margin: 0 0 8px; color: var(--blue-color); font-size: 1vw; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; }
                .detailsList { display: flex; gap: 16px; margin-bottom: 14px; color: var(--blue-color); font-size: 1vw; font-weight: 500; opacity: .9; }
                .cardButton { display: flex; width: 100%; align-items: center; justify-content: space-between; gap: 20px; padding: 10px 10px 10px 15px; border-radius: 40px; color: var(--blue-color); background: linear-gradient(to right,var(--border-color),#e7f6ff); font-size: 1vw; font-weight: 500; text-decoration: none; text-transform: uppercase; }
                .cardButton :global(img) { width: 30px; height: auto; }
                .mobileWrapper { display: none; }
                .reveal { opacity: 0; transform: translateY(30px); transition: opacity .7s ease var(--delay), transform .7s ease var(--delay); }
                .visible { opacity: 1; transform: translateY(0); }

                @media (max-width: 1440px) { .desktopImage { height: 480px; } .desktopImage.activeImage { height: 300px; } .cardLabel { font-size: 20px; } .detailsList { font-size: 1rem; } }
                @media (max-width: 1199px) { .desktopImage { height: 400px; } .desktopImage.activeImage { height: 225px; } .cardLabel { font-size: 18px; } .cardTitle { left: 25%; } }
                @media (max-width: 1124px) { .testContainer { width: 90vw; } }
                @media (max-width: 1024px) { .eyebrow { font-size: 24px; } }
                @media (max-width: 991px) { .testContainer { width: 95vw; } .section { padding: 0 0 30px; } .desktopWrapper { display: none; } .mobileWrapper { display: block; } .heading { max-width: 600px; margin: 20px auto; font-size: 1.5rem; } .mobileSwiper { width: 100vw; margin-left: calc(50% - 50vw); padding: 0 20px; overflow: hidden; } .mobileSwiper :global(.swiper-slide) { display: flex; justify-content: center; } .mobileCard { display: flex; flex-direction: column; gap: 24px; } .mobileImage { height: 320px; min-height: 0; padding: 20px; border-radius: 24px; } .mobileImage.activeImage { height: 180px; } .mobileImage .cardNumber { top: 20px; left: 20px; font-size: 3rem; letter-spacing: normal; opacity: .9; } .mobileImage .activeNumber { top: 15px; left: 15px; font-size: 2.5rem; opacity: 1; } .mobileImage .cardTitle { bottom: 20px; font-size: 4rem; letter-spacing: normal; opacity: 1; } .mobileImage.activeImage .cardTitle { bottom: 15px; left: 20%; font-size: 1.8rem; } .mobileDetails { gap: 12px; margin-top: 0; } .mobileDetails.detailsVisible { max-height: 500px; } .mobileDetails.detailsHidden { transform: translateY(-150px); } .mobileSwiper :global(.swiper-slide:not(.swiper-slide-active)) .mobileCard { width: 100%; max-width: none; opacity: .5; transition: opacity .4s ease-in-out; } .mobileDetails .cardButton { font-size: 1rem; } .mobileDetails .cardLabel { font-size: 1.1rem; letter-spacing: .5px; } .mobileDetails .detailsList { flex-direction: column; gap: 4px; margin-bottom: 12px; line-height: 1.4; } }
                @media (max-width: 900px) { .mobileSwiper .mobileCard { width: 100%; max-width: 350px; } .mobileImage { height: 490px; } .mobileImage.activeImage { height: 300px; } }
                @media (max-width: 767px) { .testContainer { width: 100%; } }
                @media (max-width: 575px) { .eyebrow { padding: 0 24px; font-size: .9rem; } .heading { font-size: 20.4px; line-height: 23px; } .description { font-size: 14px; } }
            `}</style>
        </section>
    );
}
