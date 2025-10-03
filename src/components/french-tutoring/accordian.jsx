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
                    <h2 className="title">Expert French Tutor In Dubai UAE, For Academic Confidence</h2>
                    <p className="subtitle">Ignite your child’s language journey with an expert French tutor in Dubai, UAE. Our tutors build a strong foundation in reading, writing, listening, and speaking. Lessons are tailored to individual learning styles and academic goals. Whether you're a beginner or looking to refine your fluency, we guide you at every step. Gain the confidence to speak French effortlessly. Master grammar, vocabulary, and pronunciation with ease. Let learning French feel exciting, not intimidating.</p>

                </div>
                <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
            </div>

            {/* Expanded Content */}
            {open && (
                <div className="expanded">
                    <h2 className="title">Find The Best French Tutor In Dubai For You With Ignite Training Institute</h2>
                    <p className="subtitle">Choosing the right tutor can transform how students learn French. At Ignite, we match students with highly qualified tutors who bring energy and clarity to every lesson. Our expert faculty makes grammar, conversation, and comprehension engaging and accessible. Whether for school exams or personal enrichment, we have the right fit. Experience improvement from the very first session. Your best French tutor in Dubai is just a session away.</p>
                    <br />

                    <h2 className="title">Personalized French Tuition In Dubai For Every Student</h2>
                    <p className="subtitle">One-size-fits-all learning doesn't work, our French tuition in Dubai is personalized to suit every learner. Whether you're struggling with tenses or pronunciation, our tutors adapt their approach to your needs. Each session is goal-focused and progress-driven. We support students of all levels, from beginners to advanced. The result? Faster learning, stronger retention, and visible results. Learn French at your pace, your way.</p>
                    <br />

                    <h2 className="title">Score Higher With Targeted French Coaching In Dubai Today</h2>
                    <p className="subtitle">Boost your French grades with strategic, exam-focused coaching in Dubai. Our French tutors help students prepare for key assessments through focused practice and revision techniques. We break down complex concepts and ensure thorough understanding. With consistent support, students build academic discipline and fluency. We equip learners with skills to score higher and feel more confident. Begin your journey to academic success in French today.</p>
                    <br />

                    <h2 className="title">French Classes In Dubai For Academic Excellence & Exam Support</h2>
                    <p className="subtitle">Our French classes in Dubai are structured to help students achieve academic excellence. From vocabulary drills to past paper practice, we cover every element of the curriculum. Whether preparing for IGCSE, IB, A-Levels, or internal exams, our support is comprehensive. Students gain a strong grasp of reading, writing, and oral communication. We track progress with regular feedback and customized strategies. Academic excellence in French starts here.</p>
                    <br />

                    <h2 className="title">Top-Notch French Tutoring In Dubai For Stronger Skills</h2>
                    <p className="subtitle">Unlock language mastery with top-notch French tutoring in Dubai. Our tutors don't just teach, they inspire students to love learning the language. Sessions are interactive, immersive, and focused on skill-building. Grammar is simplified, vocabulary is expanded, and fluency becomes natural. Perfect for academic performance or conversational development. We help students develop stronger communication and comprehension skills in French. Watch your confidence grow with every lesson.</p>
                    <br />

                    <h2 className="title">Online French Tutor In Dubai Helping Students Build Confidence</h2>
                    <p className="subtitle">Online French tutoring offers unmatched flexibility and results. With Ignite’s expert online tutors in Dubai, students enjoy the same high-quality instruction from the comfort of home. Our sessions are dynamic, engaging, and tailored to student goals. From grammar drills to speaking exercises, learning is interactive. We focus on building confidence in both academics and conversation. Online doesn't mean distant; it means more accessible, more efficient, more effective.</p>
                    <br />

                    <h2 className="title">Trusted French Learning Centre In Dubai For Exam Success</h2>
                    <p className="subtitle">As a trusted French learning centre in Dubai, Ignite has helped hundreds of students succeed. Our structured programs support students across major curricula like IGCSE, IB, and A-Levels. With the right mix of teaching, testing, and mentoring, we ensure exam readiness. Our centre is built on student results and parent trust. We offer group and one-on-one sessions led by experienced faculty. Join the community of learners achieving success in French with us.</p>
                    <br />

                    <h2 className="title">Looking For A French Tutor Near Me In Dubai? Get Help Today!</h2>
                    <p className="subtitle">If you're searching for a reliable French tutor near you in Dubai, Ignite has you covered. Our tutors are available across the city and online, making access easy and convenient. We offer flexible timing, curriculum-aligned lessons, and expert faculty. Perfect for school support, exam prep, or language development. Don’t let location limit your learning. Help is closer than you think. Reach out and get started today.</p>
                    <br />

                    <h2 className="title">Get Better Results With An IB French Tutor In Dubai Support</h2>
                    <p className="subtitle">Our IB French tutors in Dubai specialize in helping students meet the demands of this rigorous curriculum. We focus on both SL and HL requirements, covering textual analysis, oral assessments, and writing skills. With personalized coaching and targeted strategies, students see measurable improvements. Whether you're struggling with literature or need oral fluency, we provide support that works. Results matter, and we’re here to help you achieve them.</p>
                    <br />

                    <h2 className="title">Experienced IGCSE French Tutor In Dubai For Exam Prep</h2>
                    <p className="subtitle">Prepare with confidence with an experienced IGCSE French tutor in Dubai. We guide students through the core topics, exam formats, and scoring rubrics. Regular mock tests and speaking practice sharpen exam technique. Our tutors simplify grammar and ensure vocabulary retention. Whether it’s Cambridge or Edexcel, we tailor support to your board. Score higher and feel fully prepared on exam day.</p>
                    <br />

                    <h2 className="title">Achieve More With A Levels French Tutor In Dubai Help</h2>
                    <p className="subtitle">A-Levels demand deep understanding, and our French tutors in Dubai deliver just that. From essay writing to listening comprehension, we build all-around skills. We provide revision support, targeted test prep, and in-depth concept review. Our approach improves not just grades but also language proficiency. Suitable for AS and A2 students looking for serious improvement. Let us help you achieve more in your French A-Levels.</p>
                    <br />

                    <h2 className="title">One-On-One AS Levels French Tutor In Dubai For Assured Improvement</h2>
                    <p className="subtitle">Get focused, personalized support with a one-on-one AS Levels French tutor in Dubai. These sessions are built around your syllabus, pace, and challenges. We break down complex ideas, provide regular feedback, and track your progress. With one-on-one attention, improvement is consistent and assured. Ideal for students aiming for higher grades and better fluency. Make every session count with Ignite’s expert tutors.</p>
                    <br />

                    <h2 className="title">AP French Tutor In Dubai Helping Students Excel With Confidence</h2>
                    <p className="subtitle">AP French demands fluency in reading, writing, listening, and speaking. Ignite’s AP French tutors in Dubai provide a balanced approach to mastering language skills. Students practice grammar, vocabulary, and oral expression through structured sessions. Our tutors prepare students for real exam scenarios, enhancing confidence and accuracy. With personalized learning, students develop cultural understanding along with language fluency. Ignite ensures students perform well in exams and communicate effectively in French beyond academics.</p>

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
