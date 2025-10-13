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
          <h2 className="title">Expert English Tutor In Dubai UAE For Academic Confidence</h2>
          <p className="subtitle">
            At Ignite Training Institute, our expert English tutors in Dubai, UAE provide personalized learning that strengthens core language skills and boosts student confidence. Whether it’s grammar, comprehension, writing, or literature, we tailor lessons to suit each learner’s pace and goals. Our proven methods help students express themselves better, excel in school, and grow more confident in English. From international school support to entrance exam prep, we ensure high-quality outcomes.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">Find The Best English Tutor In Dubai For You With Ignite Training Institute</h2>
          <p className="subtitle">Ignite makes it easy to connect with the best English tutor in Dubai who matches your academic needs and learning style. Whether you’re preparing for board exams or building foundational language skills, our tutors are experienced in multiple curricula. We offer in-centre and online sessions to ensure flexibility and convenience. With our supportive team, students not only improve grades but also grow in communication and confidence.</p>
          <br />
          <h2 className="title">Personalized English Tuition In Dubai For Every Student</h2>
          <p className="subtitle">No two learners are alike, so our English tuition in Dubai is entirely customized to match individual learning requirements. Ignite’s tutors assess student strengths and challenges to deliver focused support in reading, writing, speaking, and literature analysis. Whether you're in IB, IGCSE, or national boards, our lessons are designed to align with your academic targets. Progress is closely tracked to ensure steady improvement.</p>
          <br />
          <h2 className="title">Score Higher With Targeted English Coaching In Dubai Today</h2>
          <p className="subtitle">Boost your English scores with targeted coaching at Ignite Training Institute. Our subject experts guide students through structured sessions that address specific weaknesses, exam patterns, and marking schemes. From essay writing to literary techniques, every element is covered thoroughly. Whether you're catching up or aiming to top your class, our proven strategies help you get there faster and smarter.</p>
          <br />
          <h2 className="title">English Classes In Dubai For Academic Excellence & Exam Support</h2>
          <p className="subtitle">Join Ignite’s English classes in Dubai for a well-rounded learning experience that balances academic achievement with practical language use. Our small-group and one-on-one classes are designed to help students master curriculum requirements, improve vocabulary, and develop analytical writing skills. Whether you're preparing for school exams, entrance tests, or simply want to improve fluency, we offer the support you need to excel.</p>
          <br />
          <h2 className="title">Top-Notch English Tutoring In Dubai For Stronger Skills</h2>
          <p className="subtitle">Ignite offers top-tier English tutoring in Dubai that empowers students to build strong language fundamentals. With a focus on comprehension, grammar, and effective writing, our sessions foster deep understanding and long-term academic success. Our tutors bring years of experience across IB, IGCSE, A-Levels, and other curricula. Each lesson is designed to boost performance and confidence in school and beyond.</p>
          <br />
          <h2 className="title">Online English Tutor In Dubai Helping Students Build Confidence</h2>
          <p className="subtitle">Access expert English tutoring from the comfort of your home with Ignite’s online learning options. Our online English tutors in Dubai offer real-time guidance, tailored lessons, and interactive support that keeps students engaged and progressing. Ideal for busy schedules and international learners, our platform makes quality education accessible anytime, anywhere. Build your skills and confidence with structured, personalized lessons.</p>
          <br />
          <h2 className="title">Trusted English Learning Centre In Dubai For Exam Success</h2>
          <p className="subtitle">Ignite is a trusted English learning centre in Dubai, known for delivering consistent academic results. With a track record of helping students excel in school and competitive exams, we combine experienced tutors, personalized plans, and effective study techniques. Whether you need extra help or are aiming for top marks, our programs ensure readiness, confidence, and measurable improvement.</p>
          <br />
          <h2 className="title">Looking For An English Tutor Near Me In Dubai? Get Help Today!</h2>
          <p className="subtitle">Searching for an “English tutor near me in Dubai”? Ignite Training Institute offers expert tutors just around the corner or online. Our support spans all major curricula including IB, IGCSE, and A-Levels. We focus on areas like essay writing, reading comprehension, and public speaking. Join hundreds of students who’ve improved their grades and grown in confidence with our trusted tutoring.</p>
          <br />
          <h2 className="title">Get Better Results With IB English Tutor In Dubai Support</h2>
          <p className="subtitle">Our experienced IB English tutors in Dubai understand the demands of Language A and B courses and help students approach them with clarity and confidence. From Paper 1 commentary to Paper 2 literary analysis, we offer targeted strategies to master each component. With deep curriculum knowledge and structured feedback, our tutors help students build critical thinking and perform better in exams.</p>
          <br />
          <h2 className="title">Experienced IGCSE English Tutor In Dubai For Exam Prep</h2>
          <p className="subtitle">Ignite’s IGCSE English tutors in Dubai are well-versed with the latest Edexcel and Cambridge syllabi. We help students grasp literary devices, structure essays, and expand vocabulary, all while aligning with exam formats. With our step-by-step approach, students gain clarity, practice regularly, and walk into their exams fully prepared. Achieve higher grades with the right guidance.</p>
          <br />
          <h2 className="title">Achieve More With A Levels English Tutor In Dubai Help</h2>
          <p className="subtitle">Get the edge you need with expert A Levels English tutors in Dubai. Whether it's language or literature, we help students decode complex texts, construct strong arguments, and write with academic flair. With regular practice, in-depth discussion, and examiner-style feedback, our sessions set you up for success in both AS and A2 levels.</p>
          <br />
          <h2 className="title">One-On-One AS Levels English Tutor In Dubai For Assured Improvement</h2>
          <p className="subtitle">Struggling with AS Levels English? Our one-on-one tutoring in Dubai offers personalized guidance tailored to your learning needs. Ignite’s tutors help students sharpen analysis, build structured essays, and improve command of language. Sessions are interactive, exam-focused, and flexible, ideal for focused improvement before exams or during term-time challenges. Watch your grades and confidence rise with every session.</p>
          <br />
          <h2 className="title">AP English Tutor In Dubai Helping Students Excel With Confidence</h2>
          <p className="subtitle">AP English focuses on critical reading, analysis, and writing proficiency. Ignite’s AP English tutors in Dubai help students improve their comprehension, essay writing, and argument-building skills. Our sessions emphasize analytical reading of texts, structured writing, and time management for exams. Personalized guidance allows students to refine their writing style and build confidence. With exam-oriented strategies and feedback, students enhance both academic and communication skills. Ignite ensures students succeed in AP English with clarity and confidence.</p>
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
