import { useEffect, useRef, useState } from "react";

export default function Hero() {
    const videoRef = useRef(null);
    const [videoVisible, setVideoVisible] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(max-width: 991px)").matches) return undefined;

        const loadVideo = () => videoRef.current?.load();
        const idleId = "requestIdleCallback" in window
            ? window.requestIdleCallback(loadVideo, { timeout: 4000 })
            : window.setTimeout(loadVideo, 3000);

        return () => {
            if ("cancelIdleCallback" in window && typeof idleId === "number") {
                window.cancelIdleCallback(idleId);
            } else {
                window.clearTimeout(idleId);
            }
        };
    }, []);

    return (
        <main className="page">
            <div className="wrapper">
                <section id="homev1-hero-section" className="hero pageHero" aria-labelledby="homev1-hero-title">
                    <div className="heroContainer">
                        <div className="content">
                            <div className="copy">
                                <div className="kickerBlock">
                                    <h1 className="kicker">BEST TUTORS IN UAE</h1>
                                </div>
                                <h2 id="homev1-hero-title" className="title">
                                    Empower Your Academic Goals With <span className="highlight">Ignite&apos;s</span> Tutors
                                </h2>
                                <div className="paragraph">
                                    <h3>Improve Your Grades Today!</h3>
                                    <b>
                                        We support students in progressing across IBDP, IB MYP, IGCSE, A-Levels, AP, &amp; more through our curriculum-specific approach &amp; expert tutors in Dubai, guiding them toward a stronger understanding &amp; lasting growth.
                                    </b>
                                    <strong>
                                        Ignite&apos;s experienced tutors in Dubai help students thrive in IBDP, IB MYP, IGCSE, A-Levels, AP, &amp; more with personalized support &amp; structured programs.
                                    </strong>
                                </div>
                            </div>

                            <div className="mediaColumn">
                                <div className="media">
                                    <img className="poster" src="/images/hero-banner-video-c1-poster.webp" alt="Ignite tutor guiding a student through a live online tutoring class" width="552" height="620" loading="eager" decoding="sync" fetchPriority="high" />
                                    <video ref={videoRef} className={`video ${videoVisible ? "videoVisible" : ""}`} autoPlay muted loop playsInline preload="none" onPlaying={() => setVideoVisible(true)}>
                                        <source src="/videos/hero-banner-video-c1.mp4" type="video/mp4" />
                                    </video>
                                </div>

                                <div className="actions">
                                    <a href="/join-free-demo-class/" className="action demo">
                                        <span>Get A Free Demo</span>
                                        <img src="/images/right-arrow-skyblue.webp" width="40" height="40" alt="" loading="eager" />
                                    </a>
                                    <a href="/courses/" className="action classes">
                                        <span>Explore Classes</span>
                                        <img src="/images/right-arrow-blue.webp" width="40" height="40" alt="" loading="eager" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <style jsx>{`
                .page { min-height: 100vh; padding-top: max(120px, 6vw); overflow: hidden; }
                .wrapper { position: relative; display: flex; align-items: center; justify-content: center; width: 100%; margin: 0 auto; min-height: calc(100vh - max(120px, 6vw)); padding: 0; }
                .hero.pageHero { position: relative; overflow: visible; background: url("/images/banner-bg.webp") 1.5vw 4vw / 30vw no-repeat; width: 100%; }
                .heroContainer { position: relative; width: 85vw; max-width: 1540px; margin: 0 auto; padding: 0; }
                .heroContainer::after { content: ""; position: absolute; z-index: 1; bottom: 0; left: 0; width: 13%; aspect-ratio: 81 / 32; background: url("/images/hero-bg-1.webp") center / cover no-repeat; }
                .content { display: flex; flex-wrap: wrap; align-items: center; width: 100%; margin: 0; }
                .copy { flex: 0 0 auto; width: 58.33333333%; margin-top: -1vw; padding: 0 calc(12px + 3rem) 0 12px; }
                .kicker { position: relative; display: inline-block; padding: 0 40px; background: linear-gradient(285.71deg,#3f88ba -4.32%,#161664 106.53%),linear-gradient(0deg,rgba(0,0,0,.2),rgba(0,0,0,.2)); background-clip: text; -webkit-background-clip: text; color: transparent; -webkit-text-fill-color: transparent; font-size: 28px; font-weight: 600; line-height: 1.2; text-transform: uppercase; }
                .kicker::before,.kicker::after { content: ""; position: absolute; top: 0; width: 14px; height: 100%; background: url("/images/heading-icon.webp") center / contain no-repeat; }
                .kicker::before { left: 0; }.kicker::after { right: 0; }
                .title { display: block; margin: 40px 0 50px; color: var(--blue-color); font-size: 2rem; font-weight: 700; line-height: 1.1; text-transform: uppercase; }
                .highlight { background: linear-gradient(to left,var(--green-color),var(--lightgreen-color)); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .paragraph { padding-top: 30px; color: var(--blue-color); font-size: 1vw; font-weight: 400; line-height: 1.5; }
                .paragraph h3 { margin: 0 0 30px; font-size: 1.3rem; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; }
                .paragraph b,.paragraph strong { font-weight: 400; }.paragraph strong { display: none; }
                .mediaColumn { flex: 0 0 auto; width: 41.66666667%; position: relative; display: flex; justify-content: flex-end; padding: 0 12px; }
                .media { position: relative; width: 30vw; height: 33vw; overflow: hidden; }
                .poster,.video { width: 30vw; height: 33vw; object-fit: fill; object-position: center; }.poster { position: absolute; inset: 0; z-index: 1; }
                .video { position: relative; z-index: 2; display: block; opacity: 0; transition: opacity .4s ease; }.videoVisible { opacity: 1; }
                .actions { position: absolute; right: 2vw; bottom: 1vw; z-index: 3; display: flex; flex-direction: column; justify-content: flex-end; gap: 1vw; width: 17.5vw; }
                .action { position: relative; z-index: 1; isolation: isolate; display: flex; align-items: center; justify-content: space-between; gap: 1vw; overflow: hidden; padding: 1vw 1.5vw; border-radius: 40px; color: var(--white-color); font-size: 1.1vw; font-weight: 600; text-transform: uppercase; transition: transform .3s ease,box-shadow .3s ease; }
                .action::before { content: ""; position: absolute; top: 0; left: 0; z-index: -1; width: 200%; height: 100%; transition: transform .4s ease-in-out; }.demo::before { background: linear-gradient(to right,var(--blue-color),#3f88ba 55%,var(--blue-color) 85%,var(--blue-color)); }.classes::before { background: linear-gradient(to right,var(--border-color),#e7f6ff 55%,var(--border-color) 85%,var(--border-color)); }.action:hover::before { transform: translateX(-50%); }.action:hover { transform: scale(1.03); box-shadow: 0 4px 12px rgba(0,0,0,.12); }.demo,.classes { background: transparent; }.classes { color: var(--blue-color); }.action img { width: 1.7vw; height: auto; }

                @media (max-width: 1500px) { .hero.pageHero { background-position: top 10% left; } .paragraph { font-size: 1.3vw; } }
                @media (max-width: 1280px) { .page { padding-top: 130px; } .hero.pageHero { background-size: 28vw; } .actions { gap: .8vw; } }
                @media (max-width: 1024px) { .kicker { font-size: 24px; } .title { font-size: 35px; } .paragraph { font-size: 18px; } }
                @media (max-width: 991px) { .page { min-height: 0; } .wrapper { width: 100%; min-height: 0; padding: 0; } .hero.pageHero { padding: 20px 0 0 !important; } .heroContainer { width: 95vw; } .content { flex-direction: column; } .copy,.mediaColumn { width: 100%; } .copy { padding-right: 12px; } .copy>div { text-align: center; } .paragraph b { display: none; } .paragraph strong { display: block; opacity: .6; font-weight: 500; } .mediaColumn { justify-content: center; } .media { display: flex; align-items: center; justify-content: center; width: 100vw; height: 48vw; } .poster,.video { width: 100vw; height: 50vw; } .actions { top: 0; right: 19vw; width: 31vw; } }
                @media (max-width: 768px) { .page { padding-top: 80px; } }
                @media (max-width: 767px) { .hero.pageHero { background: url("/images/banner-bg-mobile.webp") top right / 85% no-repeat; padding-top: 20px; } .heroContainer { width: 100%; } .copy { padding: 0; } .title { text-align: center; max-width: 90vw; margin: 0 auto; padding: 20px 0; border-bottom: 1px solid #ccc; font-size: 35px; line-height: 23px; } .title span { display: inline-block; } .paragraph { padding-top: 10px; margin-bottom: 10px; } .actions { left: 40%; right: 15%; } }
                @media (max-width: 700px) { .hero.pageHero { background-position: top -1% right; background-size: 460px; } }
                @media (max-width: 575px) { .hero.pageHero { background-size: 50vh 16vh; background-position: top right -2vh; } .kicker { padding: 0 24px; font-size: 15px; } .kicker::before,.kicker::after { top: 50%; height: 24px; transform: translateY(-50%); } .media { height: 95vw; } .poster { left: 50%; width: auto; height: 100%; transform: translateX(-50%); } .video { width: auto; height: 100%; margin: 0 auto; } .title { max-width: 85%; margin: 15px auto; font-size: 25px; line-height: 1.2; } .paragraph strong { display: inline-block; max-width: 95vw; padding-bottom: 10px; font-size: 15px; } .actions { right: 6vw; bottom: 0; left: auto; width: 55vw; gap: 3vw; } .action { justify-content: space-around; padding: 8px 15px; font-size: 1rem; } .action img { width: 7vw; } }
                @media (max-width: 425px) { .paragraph h3 { font-size: .9rem; } .page { padding-top: 100px; }  .hero.pageHero { padding-top: 20px; background-size: 90%; } .mediaColumn { padding-top: 20px; } .media { height: 88vw; } .copy { margin-top: 0; } .kickerBlock { padding-top: 7px; } .title { font-size: 1.2rem; text-align: center; } .paragraph strong { max-width: 95%; } .actions { right: 8vw; width: 53vw; gap: 1vw; } .action { font-size: .8rem; border-radius: 5vw; } }
                @media (max-width: 360px) { .hero.pageHero { background: url("/images/banner-bg-mobile.webp") right -7vh top 1% / 50vh 16vh no-repeat; } .media { height: 85vw; } .kickerBlock { padding-top: 0; } .action { padding: 8px 10px; font-size: .8rem; } }
            `}</style>
        </main>
    );
}
