'use client';

import { useEffect, useRef, useState } from 'react';
import TeamBanner from "@/components/team/Banner";
import MovingBanner from "@/components/home/MovingBanner";

// Data array for the trainers
const trainersData = [
    {
        name: "MASAB",
        experience: "10+ Years",
        image: "/images/prakshi-trainer.png",
        description:
            "Masab, an ACCA member with a Bachelor’s in Commerce, brings over a decade of expertise in teaching Mathematics & Accounting. Known for his ability to simplify complex concepts, he inspires students to achieve academic excellence while fostering a genuine love for learning. Teaching is his true passion, & he approaches every lesson with energy & commitment. Beyond academics, Masab enjoys playing table tennis, a sport that reflects his focus, precision, & competitive spirit.",
    },
    {
        name: "SADAF",
        experience: "11+ Years",
        image: "/images/prakshi-trainer.png",
        description:
            "Sadaf, a Chartered Accountant with a Bachelor’s in Commerce, brings 11 years of experience teaching Accounting, Business, & Economics across Cambridge, Edexcel, and IB curricula, as well as Finance, Marketing, & Cost Management at the university level. Inspired by her educator parents, she tailors her teaching style to each student, making even “boring” subjects engaging & enjoyable. Known for her approachable nature, Sadaf believes there are no bad students, only unique learning journeys. Outside the classroom, she’s a passionate dancer, traveler, movie lover, & avid reader.",
    },
    {
        name: "SARANYA",
        experience: "8+ Years",
        image: "/images/prakshi-trainer.png",
        description:
            "Saranya, with 8 years of experience, specializes in Physics & Mathematics. She holds an MSc in Physics from the University of Calicut, along with a B.Ed. & a B.Sc. in Physics, & has enriched her expertise through an astrophysics project at the Indian Institute of Astrophysics, Bangalore, & a winter workshop at IIT Madras. Passionate about learning & sharing knowledge, she sees teaching as a way to shape future leaders. With strong interests in astrophysics & materials science, Saranya is recognized for her structured lessons & adaptability to each student’s learning style.",
    },
    {
        name: "ASHWANI",
        experience: "7+ Years",
        image: "/images/prakshi-trainer.png",
        description:
            "Ashwani, with 7 years of teaching experience, is a Mathematics educator holding an M.Ed degree. Initially skeptical about teaching, he discovered a true passion for guiding students and uncovering their hidden skills. Rather than simply delivering knowledge, he believes in working alongside students to solve problems, encouraging critical and logical thinking. For Ashwani, teaching is a lifelong journey that keeps him young, as he continues to learn and grow with his students.",
    },
    {
        name: "IRTIQA",
        experience: "6+ Years",
        image: "/images/prakshi-trainer.png",
        description:
            "Irtiqa, a B.Tech graduate in Computer Science & certified Web Developer, has 6 years of experience teaching Computer Science, ICT, & IT. With a student-centered approach, she simplifies complex concepts using real-world examples & interactive activities, fostering curiosity, critical thinking, & practical application. She strives to create an engaging environment where students feel confident exploring ideas. Outside the classroom, Irtiqa enjoys crocheting & knitting, hobbies that inspire her creative, detailed, & thoughtful teaching style.",
    },
    {
        name: "ABDUL",
        experience: "13+ Years",
        image: "/images/prakshi-trainer.png",
        description:
            "Abdul, with 13 years of teaching experience, holds a Master’s in Mathematics & is passionate about making the subject clear & approachable. Inspired by friends who recognized his strong explanation skills, he embraced teaching as a fulfilling career. By placing himself in the student’s shoes, Abdul creates a supportive learning environment that strengthens understanding & builds confidence. Outside the classroom, he enjoys playing carrom, traveling, & pursuing a balanced, independent life.",
    },
    {
        name: "HARSHA",
        experience: "10+ Years",
        image: "/images/prakshi-trainer.png",
        description:
            "Harsha, with over 10 years of teaching experience, is an Economics & Business Studies educator holding an M.Com, B.Com, B.Ed, & a Postgraduate Diploma in Banking Operations. She guides students from Year 10 to Year 13, guiding them toward top results while building real-world understanding. Known for her interactive, practical lessons enriched with discussions & problem-solving, Harsha connects classroom theory to real-life decisions. Her goal is to inspire curiosity, confidence, & skills that students carry well beyond school.",
    },
    {
        name: "NAMRATA",
        experience: "10+ Years",
        image: "/images/prakshi-trainer.png",
        description:
            "Namrata, with over 10 years of teaching experience, specializes in Business Analytics, Mathematics, & Physics. She holds an MBA in Business Analytics & is currently pursuing a Postgraduate Certificate, along with certifications in data analysis, statistical modeling, & programming. Her teaching blends analytical thinking with creativity, using real-life examples & interactive methods to turn complex ideas into clear “aha!” moments. Passionate about making learning an engaging adventure, Namrata also enjoys reading, traveling, & hosting webinars on soft skills.",
    },
    {
        name: "KRITIKA",
        experience: "3+ Years",
        image: "/images/prakshi-trainer.png",
        description:
            "Kritika, with 3 years of teaching experience, is a passionate Mathematics educator holding a Bachelor’s in Physics (Honours) from Punjab University & a Bachelor of Education. She strives to make math engaging & empowering, connecting concepts to real-world applications through her physics background. Known for creating a supportive & motivating learning environment, Kritika encourages curiosity, confidence, & critical thinking. Outside the classroom, she enjoys stargazing & exploring innovative teaching methods to inspire a lifelong love for learning.",
    },
    {
        name: "RUSTHA",
        experience: "3+ Years",
        image: "/images/prakshi-trainer.png",
        description:
            "Rustha, with 3 years of teaching experience, specializes in Chemistry & Biology. She holds an M.Sc. in Forensic Science (with Advanced Practice) & a B.Sc. (Hons) in Forensic Science, with a strong background in Environmental Forensics. Having begun her career in forensic labs, she brings the same curiosity & analytical mindset into her classroom, helping students recognize patterns, think critically, & approach challenges with confidence. Rustha breaks down complex ideas into manageable steps, ensuring every student leaves with a deeper understanding & self-belief.",
    },
    {
        name: "IPSITA",
        experience: "7+ Years",
        image: "/images/prakshi-trainer.png",
        description:
            "Ipsita, with 7 years of teaching experience, specializes in Biology and Environmental Management. She holds an M.Sc. in Zoology and is currently pursuing a B.Ed. Believing that learning should be enjoyable and engaging, she adopts a student-centric approach with interactive lessons that encourage curiosity and participation. Passionate about creating a positive classroom environment, Ipsita finds motivation in watching her students grow in confidence and understanding. Outside of teaching, she enjoys reading, painting, and traveling.",
    },
    {
        name: "FREEZY",
        experience: "4+ Years",
        image: "/images/prakshi-trainer.png",
        description:
            "Freezy, with over 4 years of teaching experience, is a passionate Science educator specializing in Biology, Chemistry, & Environmental Management. She holds a Master’s degree in Biotechnology & has further strengthened her expertise through workshops with IBICUS & Biotecnika. Known for making science engaging, interactive, & accessible, Freezy is dedicated to helping students build strong conceptual foundations & develop a deeper curiosity for the subject.",
    },
    {
        name: "AASHIMA",
        experience: "5+ Years",
        image: "/images/prakshi-trainer.png",
        description:
            "Aashima is a certified Spanish educator specializing in advanced language training. She has completed her C1.1 level from the Embassy of Spain – Instituto Cervantes & is a certified B2 DELE trainer. With strong technical expertise, she integrates modern tools, interactive software, & online resources into her lessons to make learning engaging & effective. Passionate about teaching, Aashima ensures her students gain not just fluency but also confidence in using the language in real-life contexts.",
    },
    {
        name: "ANUJA",
        experience: "10+ Years",
        image: "/images/prakshi-trainer.png",
        description:
            "Ms. Anuja Agrawal brings over 10 years of rich teaching experience, specializing in English and French. With a BA in Psychology & Education, an MSc in Advanced Integrated Communications, & a PGDM in Business Management & Design Thinking, she blends academic depth with practical insights. Certified in Neuro-Linguistic Programming & Emotional Intelligence, she fosters impactful learning experiences. A passionate linguist with B2 French (Alliance Française) & A2 Spanish, Ms. Anuja also finds joy in traveling & exploring diverse cultures.",
    },
    {
        name: "DR. HAYA",
        experience: "9+ Years",
        image: "/images/prakshi-trainer.png",
        description:
            "Dr. Haya Khalid is a doctor by profession and a teacher by passion, with 9 years of teaching experience in Chemistry, Physics, & Biology. Holding an MBBS degree, her deep-rooted love for the sciences extends beyond medicine into inspiring young learners. During her academic journey, she discovered not only her affinity for the hard sciences but also her natural flair for teaching, igniting a career dedicated to shaping curious minds & guiding students toward academic excellence.",
    },
    {
        name: "DEEPAK",
        experience: "13+ Years",
        image: "/images/prakshi-trainer.png",
        description:
            "Deepak Irukullawar has 13 years of experience teaching Physics & Mathematics for IB, A Levels, & IGCSE. With a Master’s in Structural Engineering & Construction and certifications in Child Protection & Safeguarding and Dealing with People of Determination, he ensures a safe & supportive learning environment. Passionate about research & industry collaboration, he brings real-world applications into his teaching, helping students connect theory with practice for stronger academic mastery.",
    },
];



// 1. ACCEPT headerHeight as a prop
const OurTeam = ({ headerHeight }) => {
    const scrollRef = useRef(null);
    const scrollInstanceRef = useRef(null);
    const [expandedTrainers, setExpandedTrainers] = useState({});

    // Locomotive Scroll setup - similar to blog.js
    useEffect(() => {
        const initScroll = async () => {
            try {
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

                if (scrollInstanceRef.current && typeof scrollInstanceRef.current.update === 'function') {
                    scrollInstanceRef.current.update();
                    console.log("✅ LocomotiveScroll initialized and updated");
                }
            } catch (error) {
                console.error("Failed to load or initialize LocomotiveScroll:", error);
            }
        };

        if (typeof window !== "undefined") {
            initScroll();
        }

        return () => {
            if (scrollInstanceRef.current) {
                scrollInstanceRef.current.destroy();
                scrollInstanceRef.current = null;
            }
        };
    }, []);

    // FIX: Update Locomotive Scroll when content height changes (Read More/Less)
    useEffect(() => {
        if (scrollInstanceRef.current) {
            // Use a short delay to ensure the DOM has completed the height change
            const timeoutId = setTimeout(() => {
                scrollInstanceRef.current.update();
            }, 100);

            return () => clearTimeout(timeoutId);
        }
    }, [expandedTrainers]);


    const toggleReadMore = (index) => {
        setExpandedTrainers(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const getBreadcrumbPath = () => {
        return [
            { name: 'Home', href: '/' },
            { name: 'Our Team', href: '/ourteam' }
        ];
    };

    const breadcrumbPath = getBreadcrumbPath();

    return (
        <>
            {/* 2. APPLY paddingTop style using the headerHeight prop */}
            <div ref={scrollRef} data-scroll-container style={{ paddingTop: `${headerHeight}px` }}>
                <section data-scroll-section>
                    <TeamBanner />
                </section>

                <section className="meet-out-team" data-scroll-section>
                    <div className="container">
                        <div className="meet-team-Headings">
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.1s" }}
                            >
                                <h3 className="SubHeading">MEET OUR TEAM</h3>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="meetTitle">
                                    Dedicated Ignite Trainers Shaping Bright <span className="highlight">Futures</span>
                                </h1>
                            </div>

                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="cofounderTitle">
                                    CO-FOUNDERS
                                </h1>
                            </div>
                        </div>
                        <div className="meet-team-cards">
                            <div className="team-card">
                                <div className="team-card-image">
                                    <img src="/images/sumit.png" alt="Sumit Advani" />
                                </div>
                                <div className="team-card-info">
                                    <div className="team-card-name">
                                        <h3>Sumit Advani</h3>
                                    </div>
                                    <div className="team-card-content">
                                        <p>Sumit, Co-Founder of Ignite Training Institute, holds a B.Sc. in IT along with a Diploma in Advertising & PR. With over 10 years of experience in the UAE’s education industry, he specializes in designing tailored academic programs that align with each student’s unique goals. Beyond academics, Sumit actively oversees the institute’s infrastructure & spearheads marketing initiatives, ensuring Ignite continues to deliver excellence both inside & outside the classroom.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="team-card">
                                <div className="team-card-image">
                                    <img src="/images/mohnish.png" alt="Mohnish Ahuja" />
                                </div>
                                <div className="team-card-info">
                                    <div className="team-card-name">
                                        <h3>Mohnish Ahuja</h3>
                                    </div>
                                    <div className="team-card-content">
                                        <p>Mohnish, Co-Founder of Ignite Training Institute, holds a BMS degree & serves as the Head of Academics. With over 12 years of expertise in education, standardized testing, & student profile development, he brings a wealth of knowledge to the classroom. An IB-certified trainer and experienced A-Level educator, Mohnish is passionate about guiding students toward academic excellence. Driven by his vision, he is dedicated to transforming Ignite into a global hub for world-class education.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="admin-staff" data-scroll-section>
                    <div className="container">
                        <div className="meet-team-Headings">
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="cofounderTitle">
                                    STUDENT SUCCESS MANAGERS
                                </h1>
                            </div>
                        </div>
                        <div className="admin-staff-cards">
                            <div className="admin-card">
                                <div className="admin-card-image">
                                    <img src="/images/saif.png" alt="Saif" />
                                </div>
                                <div className="admin-card-info">
                                    <div className="admin-card-content">
                                        <p>Saif, an ACCA-qualified professional, serves as the Student Coordinator & manages all student-related matters, from planning academic activities to ensuring smooth daily operations. With over 5 years of experience, Saif is committed to helping students achieve their goals & navigate the academic & admission process. Outside work, he enjoys reading, staying active through fitness routines, & pursuing his passion for house music by DJ’ing & mixing tracks, finding both creativity & relaxation in blending beats.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="admin-card">
                                <div className="admin-card-image">
                                    <img src="/images/ahzeb.png" alt="Ahzeb" />
                                </div>
                                <div className="admin-card-info">
                                    <div className="admin-card-content">
                                        <p>Ahzeb plays a key role by combining business development expertise with technical oversight. With over a decade of experience across diverse sales teams & cultures, he excels in crafting unique strategies, enrolling students in the right programs, coordinating schedules, providing tech support, & managing the company’s database. He works closely with teams, fosters partnerships, & contributes to performance reviews & new business initiatives. Outside of work, he’s a stand-up performer & avid writing enthusiast.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="moving-container" data-scroll-section>
                    <MovingBanner />
                </section>
                <section className="trainer-section" data-scroll-section>
                    <div className="container">
                        <div className="meet-team-Headings">
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="cofounderTitle">
                                    Trainers
                                </h1>
                            </div>
                        </div>
                        <div className="trainer-cards">
                            {trainersData.map((trainer, index) => (
                                <div className="trainer-card" key={index}>
                                    <div className="trainer-name">
                                        <h3>{trainer.name}</h3>
                                    </div>
                                    <div className="trainer-image">
                                        <img src={trainer.image} alt={trainer.name} />
                                    </div>
                                    <div className="trainer-info">
                                        <p className={`description ${expandedTrainers[index] ? "expanded" : ""}`}>
                                            {expandedTrainers[index]
                                                ? trainer.description
                                                : trainer.description.length > 150
                                                    ? trainer.description.slice(0, 150) + "..."
                                                    : trainer.description}
                                        </p>
                                        {trainer.description.length > 150 && (
                                            <a
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleReadMore(index);
                                                }}
                                            >
                                                {expandedTrainers[index] ? "Read Less" : "Read More"}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* <section className="moving-container" data-scroll-section>
                    <MovingBanner />
                </section>
                <section className="trainer-message-section" data-scroll-section>
                    <div className="container">
                        <div className="meet-team-Headings">

                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.1s" }}
                            >
                                <h3 className="SubHeading">Trainers Message</h3>
                            </div>
                            <div
                                data-scroll
                                data-scroll-class="is-inview"
                                data-scroll-repeat="true"
                                className="fade-in-section"
                                style={{ animationDelay: "0.25s" }}
                            >
                                <h1 className="meetTitle">
                                    Dedicated Ignite Trainers <br />Shaping Bright <span className="highlight">Futures</span>
                                </h1>
                            </div>
                        </div>
                        <div className="trainer-message-card">
                            <div className="trainer-card">
                                <div className="trainer-image">
                                    <img src="/images/Trainermessage1.png" alt="" />
                                </div>
                                <div className="trainer-experience grbg">
                                    <span className="grtx">10+ Years</span>
                                </div>
                            </div>
                            <div className="trainer-card small">
                                <div className="trainer-image">
                                    <img src="/images/Trainermessage2.png" alt="" />
                                </div>
                                <div className="trainer-experience blbg">
                                    <span className="bltx">10+ Years</span>
                                </div>
                            </div>
                            <div className="trainer-card">
                                <div className="trainer-image">
                                    <img src="/images/Trainermessage3.png" alt="" />
                                </div>
                                <div className="trainer-experience grbg">
                                    <span className="grtx">10+ Years</span>
                                </div>
                            </div>
                            <div className="trainer-card small">
                                <div className="trainer-image">
                                    <img src="/images/Trainermessage4.png" alt="" />
                                </div>
                                <div className="trainer-experience blbg">
                                    <span className="bltx">10+ Years</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="cta-section" data-scroll-section>
                    <div className="meet-team-Headings">

                        <div
                            data-scroll
                            data-scroll-class="is-inview"
                            data-scroll-repeat="true"
                            className="fade-in-section"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <h3 className="SubHeading">DOES NOT REQUIRE THIS HEADING</h3>
                        </div>

                    </div>
                    <div className="container call-to-action teams">
                        <div className="cta-container">
                            <div className="cta-content">
                                <h2>Meet The Dedicated Educators <br /> Driving Student Success</h2>
                                <p>
                                    Get to know the passionate experts whose knowledge, guidance, & commitment inspire students to achieve their full potential.
                                </p>
                                <div className="cta-buttons">
                                    <a href="/ourteam" className="btn">Join Our Team <span>→</span></a>
                                    <a href="/join-free-demo-class" className="btn">Join a Free Demo <span>→</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default OurTeam;