"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Accordion() {
    const [open, setOpen] = useState(false);

    return (
        <div className="card mx-auto">
            {/* Header Row */}
            <div className="header" onClick={() => setOpen(!open)}>
                <div className="text-content">
                    <h2 className="title">Expert Business Studies Tutor In Dubai, UAE For Academic Confidence</h2>
                    <p className="subtitle">Master core concepts and boost academic performance with expert Business Studies guidance. At Ignite, our tutors simplify complex topics in marketing, finance, and management. With personalized strategies and real-world examples, students build clarity and confidence. Whether you're in IB, IGCSE, or A Levels, we help you excel in exams and class participation. Our supportive environment fosters motivation and consistent improvement. Take the first step toward academic excellence today.</p>


                </div>
                <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
            </div>

            {/* Expanded Content */}
            {open && (
                <div className="expanded">
                    <h2 className="title">Find The Best Business Studies Tutor In Dubai For You With Ignite Training Institute</h2>
                    <p className="subtitle">Searching for the right tutor can be overwhelming, but not with Ignite. We connect students with top-rated Business Studies tutors in Dubai based on their curriculum and learning needs. Our educators are experienced in handling diverse boards like IB, IGCSE, and A Levels. With a focus on goal-oriented teaching, we ensure each session adds value. Build subject knowledge and exam confidence with Dubai’s trusted tutors. Get matched with the perfect fit today.</p>
                    <br />

                    <h2 className="title">Personalized Business Studies Tuition In Dubai For Every Student</h2>
                    <p className="subtitle">Every student learns differently, and our Business Studies tuition reflects that. At Ignite, we create custom lesson plans tailored to individual strengths and areas of improvement. Our expert tutors help students grasp key business principles through interactive sessions. From case studies to past papers, we offer tools to deepen understanding and retention. Personalized support leads to better grades and sharper thinking. Experience tuition that’s built just for you.</p>
                    <br />

                    <h2 className="title">Score Higher With Targeted Business Studies Coaching In Dubai Today</h2>
                    <p className="subtitle">Want to improve your Business Studies scores? Our targeted coaching approach delivers real results. With Ignite, students receive focused help on tricky topics and exam strategies. We use proven teaching methods, regular assessments, and one-on-one feedback. Our coaching sharpens analytical skills and enhances answer-writing techniques. Ideal for students aiming for top scores in IGCSE, A Levels, or IB. Let’s start raising your academic game now.</p>
                    <br />

                    <h2 className="title">Business Studies Classes In Dubai For Academic Excellence & Exam Support</h2>
                    <p className="subtitle">Join Business Studies classes at Ignite and unlock academic success. Our classes are led by experienced tutors who make theory practical and engaging. We provide structured lessons, revision sessions, and practice questions aligned to your curriculum. Whether you need help with coursework or exam prep, we’re here to support you. Classes are small, focused, and tailored for better learning outcomes. Get the right support to thrive in school and beyond.</p>
                    <br />

                    <h2 className="title">Top-Notch Business Studies Tutoring In Dubai For Stronger Skills</h2>
                    <p className="subtitle">Strong business acumen starts with strong tutoring. At Ignite, our top-notch Business Studies tutors equip students with deep subject knowledge and critical thinking skills. Lessons cover everything from business environments to finance and strategy. We bridge classroom gaps and prepare you for academic and real-world success. Ideal for students seeking to build long-term competency in the subject. Invest in quality tutoring that makes a difference.</p>
                    <br />

                    <h2 className="title">Online Business Studies Tutor In Dubai, Helping Students Build Confidence</h2>
                    <p className="subtitle">Study smarter from the comfort of your home with online tutoring. Ignite’s Business Studies tutors offer interactive, live sessions tailored to your goals. Our digital platform supports seamless learning with flexible scheduling and expert instruction. Gain clarity on complex concepts, prepare for exams, and get ahead in class. Online doesn’t mean impersonal; it means accessible and effective. Build your confidence with trusted guidance, wherever you are.</p>
                    <br />

                    <h2 className="title">Trusted Business Studies Learning Centre In Dubai For Exam Success</h2>
                    <p className="subtitle">Ignite is more than a tuition provider, we’re a trusted learning partner. Our Business Studies centre in Dubai supports students across all levels with a structured learning path. From fundamentals to advanced topics, our experienced tutors help students succeed. We focus on concepts, practice, and exam-readiness. Whether it’s internal assessments or board exams, we ensure you're fully prepared. Join a centre that delivers consistent academic success.</p>
                    <br />

                    <h2 className="title">Looking For A Business Studies Tutor Near Me In Dubai? Get Help Today!</h2>
                    <p className="subtitle">If you're searching “Business Studies tutor near me,” you’ve found the answer. Ignite connects students with expert tutors right here in Dubai. We offer flexible scheduling, both online and offline, and personalized attention. Whether you're behind in class or aiming for top marks, we have the right support. Boost understanding, improve scores, and enjoy learning. Reach out now and get started on your success journey.</p>
                    <br />

                    <h2 className="title">Get Better Results With An IB Business Studies Tutor In Dubai Support</h2>
                    <p className="subtitle">IB Business Studies demands deep analysis, strong writing, and real-world application. Our expert IB tutors at Ignite help students master the curriculum with confidence. We break down complex theories, guide you through IA preparation, and boost exam performance. Personalized sessions target your weak spots and reinforce strengths. Whether you’re in Year 1 or 2, we’ll help you stay ahead. Unlock your IB potential with expert support.</p>
                    <br />

                    <h2 className="title">Experienced IGCSE Business Studies Tutor In Dubai For Exam Prep</h2>
                    <p className="subtitle">Get exam-ready with our experienced IGCSE Business Studies tutors. At Ignite, we cover the entire syllabus, including paper formats, mark schemes, and common pitfalls. Our tutors use past papers, mock tests, and targeted reviews to ensure thorough preparation. Lessons are interactive and focused on improving performance in both theory and case-based questions. Perfect for students aiming for top grades in IGCSE. Get the guidance you need to succeed.</p>
                    <br />

                    <h2 className="title">Achieve More With A Levels Business Studies Tutor In Dubai Help</h2>
                    <p className="subtitle">A Levels demand a deeper understanding of business concepts, and we’re here to help. Our tutors guide you through difficult topics like strategy, operations, and global business. With practice essays, structured analysis, and regular feedback, students become exam-ready. Whether you're struggling with content or aiming for an A*, we tailor support to your needs. Excel in your A Levels with Ignite’s expert guidance. Let’s help you achieve more.</p>
                    <br />

                    <h2 className="title">One-On-One AS Levels Business Studies Tutor In Dubai For Assured Improvement</h2>
                    <p className="subtitle">AS Levels set the foundation for future academic success. Our one-on-one tutoring ensures students get the individual support they need. Ignite tutors explain concepts clearly, provide custom notes, and conduct regular tests to track progress. Sessions are flexible and focused on your specific challenges. Ideal for students who need a strong start in Business Studies. Improve grades and boost confidence with personal, expert-led sessions.</p>
                    <br />

                    <h2 className="title">AP Business Studies Tutor in Dubai Helping Students Excel with Confidence</h2>
                    <p className="subtitle">AP Business Studies combines strategy, operations, marketing, and finance. Ignite’s AP Business Studies tutors in Dubai provide real-world insights alongside exam preparation. Students learn case analysis, business models, and exam-specific application of concepts. Personalized support ensures students understand both theory and practical business applications. Our tutors build students’ confidence through practice and exam-focused guidance. With Ignite, students perform strongly in exams while developing future-ready business thinking skills.</p>


                </div>
            )}

            <style jsx>{`
        .card {
          background-image: url('/assets/Rectangle130.png');
          background-size: cover;
          background-position: center;
          max-width:90vw;
          color: white;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
        }

        .text-content {
          flex: 1;
        }

        .title {
          text-transform: uppercase;
          font-weight: bold;
          letter-spacing: 0.05em;
          font-size: 1.125rem; /* 18px */
          margin: 0;
        }

        .subtitle {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          margin: 4px 0 0 0;
        }

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 16px;
        }

        .expanded {
          margin-top: 16px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
          line-height: 1.5;
        }
                  @media (max-width: 575px) {
                          .card {
          max-width:95vw;
          color: white;
          padding: 20px;
          transition: all 0.3s ease;
          margin-block:40px !important;
        }
            }
      `}</style>
        </div>
    );
}
