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
                    <h2 className="title">Expert Physics Tutor In Dubai UAE For Academic Confidence</h2>
                    <p className="subtitle">Ignite’s expert Physics tutors in Dubai offer in-depth guidance tailored to every learner’s pace and goals. With strong fundamentals and conceptual clarity, students develop the confidence needed to handle even the most complex topics. Our teaching methods encourage curiosity, critical thinking, and real-world application. Whether you’re aiming for higher grades or stronger conceptual understanding, we’re here to help. Students benefit from a structured yet flexible approach. Each lesson builds clarity, momentum, and measurable progress.</p>

                </div>
                <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
            </div>

            {/* Expanded Content */}
            {open && (
                <div className="expanded">
                    <h2 className="title">Find The Best Physics Tutor In Dubai For You With Ignite Training Institute</h2>
                    <p className="subtitle">At Ignite, we help you find the right Physics tutor in Dubai to match your academic needs and learning style. Our qualified tutors offer both academic expertise and mentorship, helping students overcome challenges with ease. Whether it's revision support or concept mastery, we ensure a personalized and results-driven approach. With a proven track record of success, our students consistently achieve top results. Discover a tutor who truly understands your goals and helps you reach them. Start building your academic future with Ignite.</p>
                    <br/>

                    <h2 className="title">Personalized Physics Tuition In Dubai For Every Student</h2>
                    <p className="subtitle">We believe every learner deserves tailored support, and that’s what our personalized Physics tuition in Dubai delivers. Our tutors focus on individual strengths, learning gaps, and curriculum requirements to craft lessons that make a difference. With one-on-one attention and real-time feedback, students learn faster and retain more. We cover IB, IGCSE, A-Levels, and other major curricula with precision and depth. Whether it’s problem-solving, lab work, or theory, we support holistic understanding. Personalized learning leads to consistent growth and confidence.</p>
                    <br/>

                    <h2 className="title">Score Higher With Targeted Physics Coaching In Dubai Today</h2>
                    <p className="subtitle">Boost your Physics performance with targeted coaching designed for exam success. At Ignite, our tutors identify weak areas early and help you master them through focused practice and proven strategies. From foundational concepts to advanced applications, every session is aligned with your academic goals. We offer timed assessments, review sessions, and revision drills to build exam readiness. Whether you need help with mechanics, electricity, or thermodynamics, we’ve got you covered. High scores start with high-impact coaching.</p>
                    <br/>

                    <h2 className="title">Physics Classes In Dubai For Academic Excellence & Exam Support</h2>
                    <p className="subtitle">Join our Physics classes in Dubai to experience structured learning and impactful exam support. Taught by experienced educators, our classes combine strong theoretical grounding with practical problem-solving. We help students from diverse curricula prepare for their board exams with clarity and confidence. Through interactive learning and regular assessments, we track performance and encourage improvement. Whether you’re in IB, IGCSE, or A-Levels, we tailor content to suit your needs. Excellence is not just a goal – it’s the result of consistent support.</p>
                    <br/>

                    <h2 className="title">Top-Notch Physics Tutoring In Dubai For Stronger Skills</h2>
                    <p className="subtitle">Our Physics tutoring program in Dubai is built to sharpen skills and deepen understanding. Students are encouraged to ask questions, explore concepts, and engage in active learning. With our expert guidance, topics like kinematics, energy, and magnetism become easy to grasp. Tutors provide timely feedback, performance tracking, and continuous motivation. Whether it’s grade improvement or concept mastery, we help students progress with confidence. Unlock your true potential with top-quality tutoring that delivers results.</p>
                    <br/>

                    <h2 className="title">Online Physics Tutor In Dubai Helping Students Build Confidence</h2>
                    <p className="subtitle">Study from anywhere in Dubai with our expert online Physics tutors. With interactive whiteboards, shared resources, and live explanations, students enjoy a classroom-like experience from the comfort of home. Our digital learning sessions are flexible, effective, and fully personalized to suit your schedule and pace. Whether it’s IB, IGCSE, or A-Levels, our online tutoring ensures you’re always supported. Get help before exams, clarify doubts instantly, and improve steadily. Confidence in Physics starts with the right online tutor.</p>
                    <br/>

                    <h2 className="title">Trusted Physics Learning Centre In Dubai For Exam Success</h2>
                    <p className="subtitle">Ignite is a trusted name for Physics education in Dubai, known for its rigorous academic standards and caring approach. Our learning centre is equipped to support students across all major curricula, preparing them for academic and exam success. With structured study plans, mock tests, and constant mentorship, we help students build exam strategies and subject mastery. Physics is no longer intimidating with the right guidance in place. Our results speak for themselves – and so do our students’ achievements.</p>
                    <br/>

                    <h2 className="title">Looking For An Physics Tutor Near Me In Dubai? Get Help Today!</h2>
                    <p className="subtitle">If you’re searching for a “Physics tutor near me” in Dubai, Ignite is here with the perfect match. Our local tutors bring deep curriculum knowledge and a personalized touch to every session. Get the flexibility of choosing between home tutoring, centre-based sessions, or online classes. Students benefit from individual attention, proven techniques, and consistent progress tracking. Don’t wait to fall behind – get expert support right where you are. Start your journey to better grades and stronger confidence now.</p>
                    <br/>

                    <h2 className="title">Get Better Results With IB Physics Tutor In Dubai Support</h2>
                    <p className="subtitle">Our IB Physics tutors in Dubai specialize in HL and SL support, guiding students through a challenging and concept-heavy curriculum. We focus on strengthening IA preparation, lab report clarity, and command terms for exams. Tutors break down complex theories into digestible parts, using real-life examples to enhance understanding. We ensure students are confident with calculations, evaluations, and application-based questions. Our proven track record includes multiple 6s and 7s from past students. With the right support, IB Physics becomes manageable and even enjoyable.</p>
                    <br/>

                    <h2 className="title">Experienced IGCSE Physics Tutor In Dubai For Exam Prep</h2>
                    <p className="subtitle">Our IGCSE Physics tutors in Dubai are experienced in both Edexcel and Cambridge syllabi, offering exam-focused guidance and conceptual clarity. From forces and motion to energy transfers and electricity, we help students tackle the most challenging topics. Every lesson is backed with past paper practice, tips on marking schemes, and revision strategies. Students learn how to approach 4-mark and 6-mark questions with precision and confidence. We create a supportive, structured learning space that encourages progress. With our help, exam prep becomes effective and less stressful.</p>
                    <br/>

                    <h2 className="title">Achieve More With A Levels Physics Tutor In Dubai Help</h2>
                    <p className="subtitle">Take your grades higher with our expert A Levels Physics tutors in Dubai. We simplify complex topics such as quantum physics, nuclear reactions, and thermodynamics to ensure clear understanding. Our tutors emphasize real-world application and step-by-step problem solving. Students also receive past paper practice, exam tips, and targeted feedback. Whether you're pursuing AQA, Edexcel, or Cambridge, we align our sessions to your board. With consistent guidance, high achievement in A Levels Physics is within reach.</p>
                    <br />

                    <h2 className="title">One-On-One AS Levels Physics Tutor In Dubai For Assured Improvement</h2>
                    <p className="subtitle">Our one-on-one AS Levels Physics tutoring in Dubai offers fully personalized support to help students overcome academic hurdles and achieve better results. Tutors focus on key areas like wave motion, circuits, and forces, making sure you grasp each topic completely. With tailored explanations, regular quizzes, and mentorship, students grow in confidence and competence. We help you prepare thoroughly for internal assessments and board exams. With our dedicated one-on-one sessions, improvement is not just possible – it’s guaranteed.</p>
                    <br />

                    <h2 className="title">AP Physics Tutor In Dubai Helping Students Excel With Confidence</h2>
                    <p className="subtitle">Mastering AP Physics requires strong conceptual clarity, problem-solving skills, and consistent practice. At Ignite Training Institute, our AP Physics tutors in Dubai help students tackle complex topics like mechanics, electricity, magnetism, and waves with ease. Personalized sessions are designed to strengthen weak areas, improve analytical thinking, and boost exam performance. With exam-focused strategies, practice tests, and one-on-one guidance, students gain confidence in solving challenging problems. Our tutors ensure students not only prepare for AP exams but also build a strong foundation for future STEM studies.</p>

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
