import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const backgroundPieces = [
    "/images/rectangle-bg1.webp",
    "/images/rectangle-bg2.webp",
    "/images/rectangle-bg2.webp",
    "/images/rectangle-bg2.webp",
];

export default function About() {
    const sectionRef = useRef(null);
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

    const reveal = `reveal ${isVisible ? "visible" : ""}`;

    return (
        <section ref={sectionRef} className="section" aria-labelledby="homev1-about-title">
            <div className="container">
                <div className={`mobileHeading ${reveal}`} style={{ "--delay": "0.1s" }}>
                    <h2>About Ignite</h2>
                </div>

                <div className="layout">
                    <div className="visualColumn">
                        <div className={`visual ${reveal}`} style={{ "--delay": "0.2s" }}>
                            <div className="backgroundPieces" aria-hidden="true">
                                {backgroundPieces.map((src, index) => (
                                    <Image key={`${src}-${index}`} src={src} alt="" width={265} height={102} />
                                ))}
                            </div>
                            <Image
                                className="aboutImage"
                                src="/images/home-about-us.webp"
                                alt="Portrait of a teacher"
                                width={500}
                                height={400}
                            />
                            <div className={`statCard yearsCard`}>
                                <strong>10 YEARS</strong>
                                <span>OF RICH TUTORING EXPERIENCE</span>
                            </div>
                            <div className={`statCard resourcesCard`}>
                                <strong>1000+</strong>
                                <span>RESOURCES THAT HELP YOU JOIN THE TOP 1%</span>
                            </div>
                            <div className="rating"><span>4.9</span> RATED ON GOOGLE</div>
                        </div>
                    </div>

                    <div className="content">
                        <div className={`desktopEyebrow ${reveal}`} style={{ "--delay": "0.1s" }}>
                            <span>About Ignite</span>
                        </div>
                        <h3 id="homev1-about-title" className={`title ${reveal}`} style={{ "--delay": "0.2s" }}>
                            Exam-Ready Support With Trusted Curricula <span>Experts</span>
                        </h3>
                        <p className={`description ${reveal}`} style={{ "--delay": "0.3s" }}>
                            At Ignite Training Institute, every student can thrive with the right guidance &amp; support. Our experienced trainers &amp; tailored learning methods help unlock true potential, inside &amp; outside the classroom.
                        </p>
                        <div className={`stats ${reveal}`} style={{ "--delay": "0.4s" }}>
                            <div>
                                <strong>2300+</strong>
                                <span>TRULY HAPPY STUDENTS FROM UAE</span>
                            </div>
                            <i aria-hidden="true" />
                            <div>
                                <strong>89%</strong>
                                <span>OF STUDENTS ACCEPTED TO TOP UNIVERSITIES</span>
                            </div>
                        </div>
                        <a className={`button ${reveal}`} style={{ "--delay": "0.5s" }} href="/join-free-demo-class/">
                            <span>Get A Free Demo</span>
                            <Image src="/images/right-arrow-blue.webp" width={40} height={40} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .section { margin: 0; padding: 90px 0 0; }
                .container { width: 85vw; margin: 0 auto; }
                .layout { display: flex; align-items: center; justify-content: center; gap: 60px; }
                .visualColumn { display: flex; min-width: 340px; flex: 1; justify-content: space-evenly; align-items: flex-end; }
                .visual { position: relative; display: flex; width: 80%; height: 100%; padding-right: 50px; flex-direction: column; align-items: center; justify-content: center; }
                .backgroundPieces { position: absolute; inset: 0; z-index: -1; }
                .backgroundPieces :global(img) { position: absolute; width: auto; height: 12%; }
                .backgroundPieces :global(img:nth-child(1)) { top: 20px; left: -20px; }
                .backgroundPieces :global(img:nth-child(2)) { right: 20px; bottom: 45%; }
                .backgroundPieces :global(img:nth-child(3)) { right: -20px; bottom: 30%; }
                .backgroundPieces :global(img:nth-child(4)) { right: 20px; bottom: 15%; }
                :global(.aboutImage) { width: 75%; height: 100%; border-radius: 32px; object-fit: contain; }
                .statCard { position: absolute; z-index: 2; display: flex; width: 46%; height: 33%; padding: 30px 20px; flex-direction: column; align-items: flex-start; justify-content: center; gap: 8px; border: 4px solid var(--white-color); border-radius: 24px; box-shadow: 0 4px 24px rgba(0, 0, 0, .07); color: var(--blue-color); background: linear-gradient(to right, var(--border-color), #e7f6ff); }
                .statCard strong { color: var(--blue-color); font-size: 1.8vw; }
                .statCard span { color: var(--blue-color); font-size: .7vw; font-weight: 600; line-height: 1.5; }
                .yearsCard { top: 10%; right: -30px; width: max-content; }
                .resourcesCard { bottom: 0; left: 0; background: linear-gradient(to right, var(--green-text), #e7f6ff); }
                .rating { position: absolute; right: 30vw; bottom: 12vw; color: var(--blue-color); font-size: 1.1rem; font-weight: 700; writing-mode: sideways-lr; transform: rotate(180deg); }
                .rating span { color: var(--lightgreen-color); }
                .content { display: flex; min-width: 320px; flex: 1; flex-direction: column; align-items: flex-start; gap: 30px; }
                .mobileHeading { display: none; margin-bottom: 50px; text-align: center; }
                .mobileHeading h2, .desktopEyebrow span { position: relative; display: inline-block; margin: 0; padding: 0 40px; color: transparent; background: linear-gradient(285.71deg, #3f88ba -4.32%, #161664 106.53%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 28px; font-weight: 600; line-height: 1.2; text-transform: uppercase; }
                .desktopEyebrow span::before, .desktopEyebrow span::after, .mobileHeading h2::before, .mobileHeading h2::after { position: absolute; top: 0; width: 14px; height: 100%; content: ""; background: url("/images/heading-icon.webp") center / contain no-repeat; }
                .desktopEyebrow span::before, .mobileHeading h2::before { left: 0; }
                .desktopEyebrow span::after, .mobileHeading h2::after { right: 0; }
                .title { margin: 0 0 12px; color: var(--blue-color); font-size: 2rem; font-weight: 700; line-height: 1.2; text-transform: uppercase; }
                .title span { color: transparent; background: linear-gradient(to right, var(--lightgreen-color), var(--green-color)); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: .04em; }
                .description { max-width: 90%; margin: 0 0 18px; color: #7a8ca3; font-size: 1vw; line-height: 1.6; }
                .stats { display: flex; gap: 48px; padding-top: 18px; border-top: 2px solid #e6f6ff; }
                .stats div { display: flex; width: max-content; flex-direction: column; align-items: flex-start; gap: 4px; }
                .stats strong { color: transparent; background: linear-gradient(to right, var(--lightgreen-color), var(--green-color)); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 1.8rem; letter-spacing: .04em; }
                .stats span { max-width: 250px; color: var(--blue-color); font-size: .9vw; font-weight: 600; opacity: .8; }
                .stats i { display: none; width: 2px; height: 100px; border-radius: 5px; background: linear-gradient(var(--border-color), #e7f6ff); opacity: .5; }
                .button { display: flex; width: max-content; align-items: center; justify-content: space-between; gap: 20px; margin-top: 0; padding: 10px 10px 10px 15px; overflow: hidden; border-radius: 40px; color: var(--blue-color); background: linear-gradient(to right, var(--border-color), #e7f6ff); font-size: 1rem; font-weight: 600; text-decoration: none; text-transform: uppercase; }
                .button :global(img) { width: 30px; height: auto; }
                .reveal { opacity: 0; transform: translateY(30px); transition: opacity .7s ease var(--delay), transform .7s ease var(--delay); }
                .visible { opacity: 1; transform: translateY(0); }
                @media (max-width: 1199px) { .title { font-size: 1.8rem; } .description { font-size: 14px; } .stats span { font-size: .8rem; } }
                @media (max-width: 1024px) { .mobileHeading h2 { font-size: 24px; } }
                @media (max-width: 991px) { .container { width: 95vw; padding: 0 12px; } .layout { flex-wrap: wrap; gap: 30px; } .layout { margin: 0 -12px; } .visualColumn, .content { flex: 0 0 100%; width: 100%; padding: 0 12px; } .content { padding-top: 20px; } .button { width: 16vw; margin-top: 30px; padding: .8vw 1vw; gap: 1vw; font-size: 1vw; } .stats, .stats div { align-items: center; justify-content: center; } .statCard strong { font-size: 1.5rem; } .visual { max-width: 600px; margin: 0 auto; } .statCard { height: 25%; } .rating { font-size: 1rem; } .mobileHeading { display: block; } .desktopEyebrow { display: none; } .content { align-items: center; } .title, .description, .stats span { text-align: center; } .stats { width: 100%; gap: 20px; } .stats div { flex: 1; min-width: 0; width: auto; } .stats span { max-width: 100%; } .stats i { flex-shrink: 0; } .stats i { display: block; } .stats strong { font-size: 2.5rem; } .stats span { font-size: 1rem; } }
                @media (max-width: 767px) { .container { width: 100%; } .visualColumn { overflow: hidden; } }
                @media (max-width: 575px) { .mobileHeading h2 { font-size: 15px; padding: 0 24px; } .mobileHeading h2::before, .mobileHeading h2::after { top: 50%; height: 24px; transform: translateY(-50%); } .section { padding-top: 60px; } .statCard { height: max-content; padding: 30px; } .yearsCard { right: 0; width: 45%; } .visual { padding-right: 20px; } .rating { top: 0; bottom: 42%; font-size: .8rem; } .content { gap: 10px; } .title { font-size: 20.4px; line-height: 23px; } .stats strong { font-size: 1.5rem; } .stats span { font-size: .8rem; } .statCard strong { font-size: 25px; } }
                @media (max-width: 500px) { .rating { right: 66vw; } .statCard strong { font-size: 22px; } .statCard span { font-size: .7rem; } .button { width: fit-content; padding: 1vw 2vw; font-size: inherit; } .statCard { padding: 1.2vw 4vw; } }
                @media (max-width: 425px) { .layout { gap: 20px; } .statCard strong { font-size: 20px; } }
                @media (max-width: 375px) { .layout { overflow: hidden; } .statCard strong { font-size: 18px; } }
            `}</style>
        </section>
    );
}
