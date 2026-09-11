import { useEffect, useRef, useState } from "react";

const desktopSubjectRows = [
  [
    { name: "English", link: "/english-tutor-in-dubai/" },
    { name: "French", link: "/french-tutor-in-dubai/" },
  ],
  [
    { name: "Spanish", link: "/spanish-tutor-in-dubai/" },
    { name: "Computer Science", link: "/computer-science-tutor-in-dubai/" },
    { name: "Economics", link: "/economics-tutor-in-dubai/" },
  ],
  [
    { name: "Biology", link: "/biology-tutor-in-dubai/" },
    { name: "Chemistry", link: "/chemistry-tutor-in-dubai/" },
  ],
  [
    { name: "Physics", link: "/physics-tutor-in-dubai/" },
    { name: "Maths", link: "/maths-tutor-in-dubai/" },
    { name: "Accounting", link: "/accounting-tutor-in-dubai/" },
  ],
  [
    { name: "Business Studies", link: "/business-studies-tutor-in-dubai/" },
    { name: "Psychology", link: "/psychology-tutor-in-dubai/" },
  ],
];

const mobileSubjectRows = [
  [
    { name: "English", link: "/english-tutor-in-dubai/" },
    { name: "French", link: "/french-tutor-in-dubai/" },
  ],
  [
    { name: "Computer Science", link: "/computer-science-tutor-in-dubai/" },
    { name: "Maths", link: "/maths-tutor-in-dubai/" },
  ],
  [
    { name: "Economics", link: "/economics-tutor-in-dubai/" },
    { name: "Accounting", link: "/accounting-tutor-in-dubai/" },
  ],
  [
    { name: "Chemistry", link: "/chemistry-tutor-in-dubai/" },
    { name: "Physics", link: "/physics-tutor-in-dubai/" },
    { name: "Business Studies", link: "/business-studies-tutor-in-dubai/" },
    { name: "Spanish", link: "/spanish-tutor-in-dubai/" },
  ],
  [
    { name: "Psychology", link: "/psychology-tutor-in-dubai/" },
    { name: "Biology", link: "/biology-tutor-in-dubai/" },
  ],
];

export default function Subjects() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        }, { threshold: 0.1 });
        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    const reveal = `reveal ${visible ? "visible" : ""}`;

    return (
        <section ref={sectionRef} className="section">
            <div className="container">
                <div className="panel">
                    <img className="backgroundShape shapeTop" src="/images/rectangle-bg4.webp" alt="" width={585} height={120} loading="lazy" />
                    <img className="backgroundShape shapeMiddle" src="/images/rectangle-bg5.webp" alt="" width={85} height={120} loading="lazy" />
                    <img className="backgroundShape shapeBottom" src="/images/rectangle-bg4.webp" alt="" width={585} height={120} loading="lazy" />
                    <div className="copy">
                        <h2 className={`eyebrow ${reveal}`} style={{ "--delay": "0.1s" }}>SUBJECT TUTORING</h2>
                        <h3 className={`title ${reveal}`} style={{ "--delay": "0.2s" }}>Expert Guidance For Every Subject In Every <span>Way</span></h3>
                        <p className={`description ${reveal}`} style={{ "--delay": "0.3s" }}>We help students strengthen subject knowledge, choose the right curriculum path, &amp; build the academic confidence needed to excel.</p>
                    </div>
                    <div className="subjects">
                        <div className="desktopSubjects">
                            <div className="subjectRows">
                                {desktopSubjectRows.map((row, index) => (
                                    <div key={index} className={`subjectRow ${visible ? "visible" : ""}`} style={{ "--delay": `${0.4 + index * 0.12}s` }}>
                                        {row.map((subject) => (
                                            <h3 key={subject.name}>
                                                <a className="subjectBubble" href={subject.link}>{subject.name}</a>
                                            </h3>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mobileSubjects">
                            <div className="subjectRows">
                                {mobileSubjectRows.map((row, index) => (
                                    <div key={index} className={`subjectRow ${visible ? "visible" : ""}`} style={{ "--delay": `${0.4 + index * 0.12}s` }}>
                                        {row.map((subject) => (
                                            <h3 key={subject.name}>
                                                <a className="subjectBubble" href={subject.link}>{subject.name}</a>
                                            </h3>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .section {
                    width: 100%;
                    padding: 70px 0;
                }
                .container {
                    width: 85vw;
                    margin: 0 auto;
                    padding: 0 12px;
                }
                .panel {
                    position: relative;
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: space-between;
                    padding: 6vw 2vw;
                    overflow: hidden;
                    border-radius: 40px;
                    background: url("/images/subject-bg.webp") center / cover;
                }
                .backgroundShape {
                    position: absolute;
                    z-index: 0;
                    width: auto;
                    height: 70px;
                    object-fit: contain;
                }
                .shapeTop {
                    top: 1vw;
                    left: 0;
                    width: 16vw;
                }
                .shapeMiddle {
                    top: 22%;
                    left: 20px;
                }
                .shapeBottom {
                    bottom: 8%;
                    left: 20px;
                    width: 150px;
                    border-radius: 0 20px 20px 0;
                    object-fit: fill;
                    object-position: left;
                }
                .copy {
                    position: relative;
                    flex: 0 0 auto;
                    z-index: 1;
                    display: flex;
                    min-width: 320px;
                    width: 33.33333333%;
                    margin-left: 40px;
                    padding-left: 30px;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    gap: 18px;
                }
                .eyebrow {
                    position: relative;
                    margin: 0 0 30px;
                    padding: 0 40px;
                    color: #fff;
                    font-size: 28px;
                    font-weight: 600;
                    line-height: 1.2;
                    text-transform: uppercase;
                }
                .eyebrow::before, .eyebrow::after {
                    position: absolute;
                    top: 0;
                    width: 14px;
                    height: 100%;
                    content: "";
                    background: url("/images/heading-icon.webp") center / contain no-repeat;
                    filter: contrast(0) brightness(2);
                }
                .eyebrow::before {
                    left: 0;
                }
                .eyebrow::after {
                    right: 0;
                }
                .title {
                    max-width: 500px;
                    margin: 0 0 8px;
                    color: var(--white-color);
                    font-size: 2rem;
                    font-weight: 700;
                    line-height: 1.2;
                    text-transform: uppercase;
                }
                .title span {
                    font-size: 1.8vw;
                    color: transparent;
                    background: linear-gradient(to right,#a6eac7 0%,#a6eac7 60%,#fff);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .description {
                    max-width: 100vw;
                    margin: 0 0 16px;
                    color: #c4cad5;
                    font-size: 1vw;
                    line-height: 1.2;
                    opacity: .4;
                }
                .subjects {
                    position: relative;
                    flex: 0 0 auto;
                    z-index: 1;
                    display: flex;
                    width: 66.66666667%;
                    align-items: center;
                    justify-content: flex-start;
                }
                .subjectRows {
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 3vw;
                }
                .subjectRow {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 30px;
                }
                .subjectRow h3 {
                    margin: 0 0 8px;
                    font-size: min(calc(1.3rem + .6vw), 1.75rem);
                    font-weight: 500;
                    line-height: 1.2;
                }
                .subjectBubble {
                    position: relative;
                    min-width: 7vw;
                    padding: 1vw 1.5vw;
                    border: 2px solid var(--border-color);
                    border-radius: 40px;
                    color: var(--green-text);
                    font-size: 1.3vw;
                    font-weight: 400;
                    line-height: 1.2;
                    user-select: none;
                    letter-spacing: .02em;
                    text-align: center;
                    text-decoration: none;
                    transition: color .25s ease, background-color .25s ease, box-shadow .25s ease;
                }
                .subjectBubble:hover {
                    color: var(--white-color);
                    background-color: #ffffff4d;
                    box-shadow: 2px 2px 5px 0 var(--blue-text);
                }
                .desktopSubjects, .mobileSubjects {
                    width: 100%;
                }
                .mobileSubjects {
                    display: none;
                }
                @media (min-width: 992px) {
                    .reveal, .subjectRow {
                        opacity: 0;
                        visibility: hidden;
                    }
                    .visible {
                        visibility: visible;
                        animation: reveal .6s cubic-bezier(.4,0,.2,1) var(--delay) both;
                    }
                }
                @keyframes reveal {
                    from {
                        opacity: 0;
                        transform: translateY(80px);
                    }
                    to {
                        opacity: 1;
                        transform: none;
                    }
                }
                @media (max-width: 1280px) {
                    .subjectBubble {
                        padding: 10px 45px;
                    }
                }
                @media (max-width: 1199px) {
                    .eyebrow {
                        font-size: 18px;
                    }
                    .title, .title span {
                        font-size: 24px;
                        line-height: 1.4;
                    }
                    .panel {
                        padding: 140px 30px;
                    }
                    .copy {
                        gap: 5px;
                    }
                    .desktopSubjects .subjectRows {
                        gap: 10px;
                    }
                    .desktopSubjects .subjectRow {
                        gap: 10px;
                    }
                    .desktopSubjects .subjectBubble {
                        padding: 12px 30px;
                    }
                }
                @media (max-width: 1124px) {
                    .container {
                        width: 90vw;
                    }
                }
                @media (max-width: 1100px) {
                    .panel {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 32px;
                        padding: 70px 20px;
                    }
                    .shapeTop {
                        top: 40px;
                        width: 100%;
                    }
                    .copy {
                        width: 100%;
                        margin-left: 0;
                        align-items: center;
                        padding: 0;
                        text-align: center;
                        gap: 15px;
                    }
                    .eyebrow {
                        margin-bottom: 10px;
                    }
                    .description {
                        font-size: 1rem;
                    }
                    .subjects {
                        width: 100%;
                        padding: 0;
                    }
                    .subjectRow {
                        gap: 12px;
                    }
                    .subjectBubble {
                        font-size: 1rem;
                    }
                }
                @media (max-width: 991px) {
                    .container {
                        width: 95vw;
                    }
                    .description {
                        opacity: 1;
                    }
                }
                @media (max-width: 768px) {
                    .desktopSubjects {
                        display: none;
                    }
                    .mobileSubjects {
                        display: block;
                    }
                    .copy {
                        min-width: 100%;
                        margin-bottom: 40px;
                    }
                }
                @media (max-width: 767px) {
                    .section {
                        padding: 50px 0;
                    }
                    .container {
                        width: 100%;
                    }
                    .mobileSubjects .subjectBubble {
                        padding: 5px 15px;
                        font-size: 16px;
                    }
                }
                @media (max-width: 575px) {
                    .shapeMiddle {
                        top: 35%;
                        left: 0;
                        width: 15%;
                        height: 55px;
                        border-radius: 0 20px 20px 0;
                        object-fit: cover;
                    }
                    .shapeBottom {
                        right: 0;
                        bottom: 2%;
                        left: auto;
                        width: 30%;
                        height: 50px;
                        transform: rotate(180deg);
                    }
                    .eyebrow {
                        padding: 0 24px;
                        font-size: 15px;
                    }
                    .eyebrow::before, .eyebrow::after {
                        top: 50%;
                        height: 24px;
                        transform: translateY(-50%);
                    }
                    .title, .title span {
                        font-size: 20.4px;
                        line-height: 23px;
                    }
                    .description {
                        font-size: 14px;
                    }
                    .copy {
                        min-width: auto;
                    }
                    .subjectRow {
                        flex-wrap: wrap;
                        justify-content: center;
                    }
                }
                @media (max-width: 420px) {
                    .shapeMiddle {
                        top: 40%;
                    }
                }
            `}</style>
        </section>
    );
}
