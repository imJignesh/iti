import React from "react";
import { getMarqueeData } from "@/data/marqueeConfig";
import { getTrainersData } from "@/data/trainersData";
import { getUspsData } from "@/data/uspsConfig";
import styles from "@/styles/psi-test/PsiStaticHome.module.css";

const courses = [
    ["IBDP", "International Baccalaureate Diploma Programme", "/courses/ibdp-tutors-in-dubai"],
    ["IB MYP", "Middle Years Programme", "/courses/myp-tutors-in-dubai"],
    ["A Levels", "Advanced Levels", "/courses/a-level-tutors-in-dubai"],
    ["IGCSE", "International General Certificate Of Secondary Education", "/courses/igcse-tutors-in-dubai"],
    ["Homeschooling", "Private Candidacy", "/courses/homeschooling-tutors-in-dubai"],
];

const subjects = [
    ["English", "/english-tutor-in-dubai/"], ["French", "/french-tutor-in-dubai/"],
    ["Spanish", "/spanish-tutor-in-dubai/"], ["Computer Science", "/computer-science-tutor-in-dubai/"],
    ["Economics", "/economics-tutor-in-dubai/"], ["Biology", "/biology-tutor-in-dubai/"],
    ["Chemistry", "/chemistry-tutor-in-dubai/"], ["Physics", "/physics-tutor-in-dubai/"],
    ["Maths", "/maths-tutor-in-dubai/"], ["Accounting", "/accounting-tutor-in-dubai/"],
    ["Business Studies", "/business-studies-tutor-in-dubai/"], ["Psychology", "/psychology-tutor-in-dubai/"],
];

const tests = [
    ["ACT", "AMERICAN COLLEGE TESTING", "/act-tutors-in-dubai/", "/images/test-section1.webp"],
    ["AP", "ADVANCED PLACEMENTS", "/advanced-placements-tutors-in-dubai/", "/images/test-section2.webp"],
    ["UCAT", "UNIVERSITY CLINICAL APTITUDE TEST", "#", "/images/test-section3.webp"],
];

const reviews = [
    ["Exceptional support and guidance throughout the academic journey.", "Student review"],
    ["The tutors are experienced, patient, and focused on real progress.", "Parent review"],
    ["A structured learning approach that improved confidence and results.", "Student review"],
];

const StaticSection = ({ children, className = "" }) => (
    <section className={`${styles.section} ${className}`}>{children}</section>
);

export default function PsiStaticHome({ blogPosts = [] }) {
    const uspData = getUspsData("homeCopy").usps;
    const trainers = getTrainersData("homeCopy").slice(0, 10);
    const marqueeItems = getMarqueeData("homeCopy").items;

    return (
        <main className={styles.page}>
            <StaticSection className={styles.hero}>
                <div className={styles.heroCopy}>
                    <p className={styles.kicker}>BEST TUTORS IN UAE</p>
                    <h1>Empower Your Academic Goals With <span>Ignite&apos;s</span> Tutors</h1>
                    <h2>Improve Your Grades Today!</h2>
                    <p>We support students in progressing across IBDP, IB MYP, IGCSE, A-Levels, AP, &amp; more through our curriculum-specific approach &amp; expert tutors in Dubai, guiding them toward a stronger understanding &amp; lasting growth.</p>
                </div>
                <div className={styles.heroMedia}>
                    <img src="/images/hero-banner-video-c1-poster.webp" alt="Ignite tutor guiding a student through a live online tutoring class" width="552" height="620" fetchPriority="high" />
                    <div className={styles.heroActions}>
                        <a href="/join-free-demo-class/">Get A Free Demo</a>
                        <a href="/courses/">Explore Classes</a>
                    </div>
                </div>
            </StaticSection>

            <StaticSection>
                <p className={styles.kicker}>TUTORING PROGRAMS</p>
                <h2>Become Exam-Ready With Targeted Prep <span>Courses</span></h2>
                <p className={styles.intro}>Whether you&apos;re aiming for top scores or a strong foundation, Ignite&apos;s courses give you the edge to succeed.</p>
                <div className={styles.cardGrid}>
                    {courses.map(([title, subtitle, href], index) => (
                        <a className={styles.courseCard} href={href} key={title}>
                            <img src={`/images/course-bg${index + 1}.webp`} alt="" width="400" height="300" loading="lazy" />
                            <strong>{title}</strong><span>{subtitle}</span>
                        </a>
                    ))}
                </div>
            </StaticSection>

            <div className={styles.marquee} aria-label="Ignite benefits">
                {marqueeItems.map((item, index) => <span key={`${item}-${index}`}>● {item}</span>)}
            </div>

            <StaticSection className={styles.about}>
                <div><p className={styles.kicker}>ABOUT IGNITE</p><h2>Exam-Ready Support With Trusted Curricula <span>Experts</span></h2></div>
                <p>Ignite&apos;s experienced tutors in Dubai help students thrive in IBDP, IB MYP, IGCSE, A-Levels, AP, &amp; more with personalised support &amp; structured programs.</p>
                <a className={styles.textLink} href="/join-free-demo-class/">Get A Free Demo</a>
            </StaticSection>

            <StaticSection>
                <p className={styles.kicker}>STANDARDISED TESTS</p>
                <h2>Power Your Academic Goals With Expert Prep <span>Support</span></h2>
                <p className={styles.intro}>Whether you&apos;re aiming for top scores or a strong foundation, Ignite&apos;s courses give you the edge to succeed.</p>
                <div className={styles.testGrid}>
                    {tests.map(([title, label, href, image]) => <a className={styles.testCard} href={href} key={title}><img src={image} alt="" width="400" height="300" loading="lazy" /><b>{title}</b><span>{label}</span></a>)}
                </div>
            </StaticSection>

            <StaticSection className={styles.subjectSection}>
                <p className={styles.kicker}>SUBJECT TUTORING</p><h2>Expert Guidance For Every Subject In Every <span>Way</span></h2>
                <p>We help students strengthen subject knowledge, choose the right curriculum path, &amp; build the academic confidence needed to excel.</p>
                <div className={styles.subjectGrid}>{subjects.map(([name, href]) => <a href={href} key={name}>{name}</a>)}</div>
            </StaticSection>

            <StaticSection className={styles.uspSection}><p className={styles.kicker}>WHY CHOOSE IGNITE</p><h2>Why Choose Ignite for Tutoring in Dubai?</h2><div className={styles.uspGrid}>{uspData.map((usp) => <article key={usp.number}><img src={usp.icon} alt="" width="50" height="50" loading="lazy" /><h3>{usp.title}</h3><p>{usp.desc}</p></article>)}</div></StaticSection>

            <StaticSection><p className={styles.kicker}>OUR TRAINERS</p><h2>The Best Trainers For Your Success Journey</h2><div className={styles.trainerGrid}>{trainers.map((trainer) => <article key={trainer.name}><img src={trainer.img} alt={trainer.name} width="240" height="300" loading="lazy" /><h3>{trainer.name}</h3><p>{trainer.subtitle}</p></article>)}</div></StaticSection>

            <StaticSection className={styles.reviewSection}><p className={styles.kicker}>REVIEWS &amp; TESTIMONIALS</p><h2>What Our Students Say</h2><div className={styles.reviewGrid}>{reviews.map(([quote, author]) => <blockquote className={styles.reviewQuote} key={quote}><p>&ldquo;{quote}&rdquo;</p><cite>{author}</cite></blockquote>)}</div></StaticSection>

            <StaticSection><p className={styles.kicker}>INSIGHTS</p><h2>Explore Expert Insights, Study Tips, &amp; Success Stories</h2><div className={styles.blogGrid}>{blogPosts.map((post) => <a href={`/blog/${post.link}`} key={post.link}><img src={post.img} alt="" width="300" height="200" loading="lazy" /><h3>{post.title}</h3><p>{post.desc}</p></a>)}</div></StaticSection>
        </main>
    );
}
