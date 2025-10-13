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
          <h2 className="title">Expert Spanish Tutor In Dubai, UAE For Academic Confidence</h2>
          <p className="subtitle">Build a strong foundation in Spanish with guidance from expert tutors at Ignite Training Institute. Our experienced faculty simplifies complex grammar and vocabulary for better understanding. Whether you're a beginner or looking to sharpen your fluency, we create a clear path to academic confidence. With structured lessons and individual attention, students feel empowered to express themselves in Spanish. We don’t just teach the language, we inspire a love for it. Choose Ignite for expert-led learning that boosts both skill and self-assurance.</p>


        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">Find The Best Spanish Tutor In Dubai For You With Ignite Training Institute</h2>
          <p className="subtitle">Searching for a Spanish tutor who truly understands your learning needs? Ignite matches you with the right tutor based on your goals and current level. From conversational Spanish to exam prep, we personalize your journey every step of the way. Our tutors are not only fluent but also skilled educators who care about your progress. Learn faster, smarter, and more confidently with one-on-one or small-group sessions. Find your perfect-fit Spanish tutor in Dubai with Ignite today.</p>
          <br />

          <h2 className="title">Personalized Spanish Tuition In Dubai For Every Student</h2>
          <p className="subtitle">No two students are the same, and neither are our Spanish lessons. At Ignite, we offer personalized Spanish tuition that adapts to your pace, strengths, and challenges. Our tutors use proven methods to reinforce weak areas while enhancing fluency. Whether you're preparing for school exams or simply want to improve communication skills, our tuition is tailored just for you. With flexible scheduling and continuous feedback, you stay on track toward your goals. Learn Spanish your way, confidently and effectively.</p>
          <br />

          <h2 className="title">Score Higher With Targeted Spanish Coaching In Dubai Today</h2>
          <p className="subtitle">Get the academic edge you need with targeted Spanish coaching at Ignite. Our programs are designed to align with school curricula, international exam boards, and personal learning milestones. Through engaging lessons, practical application, and strategic revision, we help students score higher in Spanish. Regular assessments and progress reports ensure you’re always improving. Gain more than just marks, build lasting skills and confidence in your Spanish language journey. Start your transformation today with expert coaching.</p>
          <br />

          <h2 className="title">Spanish Classes In Dubai For Academic Excellence & Exam Support</h2>
          <p className="subtitle">Excel in Spanish with our structured classes that blend language fluency with exam success. Whether you're studying for IB, IGCSE, A-Levels, or school exams, Ignite offers expert-led lessons designed for results. Our small class sizes allow for active participation and personalized attention. From mastering grammar to building vocabulary, we equip students with the tools they need to succeed. Ongoing test practice and support ensure you’re prepared, confident, and capable.</p>
          <br />

          <h2 className="title">Top-Notch Spanish Tutoring In Dubai For Stronger Skills</h2>
          <p className="subtitle">Strengthen your Spanish skills with Ignite’s top-tier tutoring. Our expert tutors focus on comprehension, conversation, reading, and writing, all tailored to your needs. We help students of all levels, from beginners to advanced, achieve clarity, fluency, and accuracy. With interactive techniques and real-world applications, language becomes second nature. Whether you’re preparing for an exam or learning for personal growth, our tutoring gives you the tools to succeed in Spanish.</p>
          <br />

          <h2 className="title">Online Spanish Tutor In Dubai Helping Students Build Confidence</h2>
          <p className="subtitle">Learn Spanish from the comfort of your home with our online tutoring. Ignite’s virtual Spanish classes are interactive, personalized, and effective. Our tutors use dynamic teaching tools to make online learning engaging and impactful. Whether you're revising for exams or learning as a hobby, we help you build language confidence step by step. Flexible scheduling means you can learn at your pace, anytime, anywhere. Boost your Spanish skills online with Ignite today.</p>
          <br />

          <h2 className="title">Trusted Spanish Learning Centre In Dubai For Exam Success</h2>
          <p className="subtitle">Join one of Dubai’s most trusted names for Spanish education. At Ignite Training Institute, our Spanish learning centre supports students aiming for academic excellence. We cover everything from foundational grammar to advanced exam prep, including IB, IGCSE, and A-Level Spanish. Our reputation is built on results and student satisfaction. With customized support, regular assessments, and a motivating environment, we set you up for exam success. Your success story starts here.</p>
          <br />

          <h2 className="title">Looking For A Spanish Tutor Near Me In Dubai? Get Help Today!</h2>
          <p className="subtitle">If you're searching for “Spanish tutor near me” in Dubai, look no further. Ignite connects you with skilled local tutors who understand the UAE academic landscape. Whether you prefer in-person sessions or online learning, our flexible formats ensure convenience without compromising quality. From grammar basics to fluency goals, we cover all aspects of Spanish. Get the expert help you need, right in your neighborhood. Ignite makes finding a tutor simple and rewarding.</p>
          <br />

          <h2 className="title">Get Better Results With An IB Spanish Tutor In Dubai Support</h2>
          <p className="subtitle">IB Spanish requires precision, fluency, and strategic exam prep. Our specialized IB Spanish tutors in Dubai are trained to help students succeed across both SL and HL levels. We focus on oral communication, textual analysis, and exam-style writing. With regular mock tests and individualized feedback, students improve both their confidence and scores. Our goal is to simplify the syllabus and amplify results. Learn smarter with dedicated IB Spanish support at Ignite.</p>
          <br />

          <h2 className="title">Experienced IGCSE Spanish Tutor In Dubai For Exam Prep</h2>
          <p className="subtitle">Tackle your IGCSE Spanish exam with a tutor who understands the curriculum inside out. Ignite’s tutors are experienced in helping students succeed in Cambridge and Edexcel syllabi. We break down complex topics into manageable lessons and provide continuous test practice. Students build vocabulary, enhance grammar, and sharpen speaking skills with confidence. With past paper analysis and focused revision, we prepare you to face the IGCSE exam head-on. Let Ignite support your Spanish success.</p>
          <br />

          <h2 className="title">Achieve More With A Levels Spanish Tutor In Dubai Help</h2>
          <p className="subtitle">Whether you're struggling with A-Level Spanish essays or oral exams, Ignite is here to help. Our A-Level Spanish tutors in Dubai are experts in curriculum requirements and effective strategies. Lessons are designed to help you interpret texts, improve grammar, and enhance fluency. We also provide guidance on past paper techniques and exam expectations. With regular feedback and customized coaching, students gain both skill and confidence. Get ahead in A-Level Spanish with expert help.</p>
          <br />

          <h2 className="title">One-On-One AS Levels Spanish Tutor In Dubai For Assured Improvement</h2>
          <p className="subtitle">Our AS Level Spanish tutoring offers individual attention that truly makes a difference. One-on-one sessions at Ignite are personalized to address specific learning goals and challenges. From boosting speaking confidence to refining grammar and comprehension, we guide you every step of the way. Tutors focus on your pace, style, and syllabus requirements to drive consistent progress. With tailored lesson plans and exam techniques, improvement is guaranteed. Discover the difference focused support can make.</p>
          <br />

          <h2 className="title">AP Spanish Tutor In Dubai Helping Students Excel With Confidence</h2>
          <p className="subtitle">AP Spanish requires strong command over vocabulary, grammar, listening, and speaking. Ignite’s AP Spanish tutors in Dubai help students build fluency through interactive learning. Our sessions combine grammar mastery with cultural awareness for a complete learning experience. Students practice real exam-style tasks, essays, and conversations to boost confidence. With personalized teaching, students strengthen weaker areas and improve accuracy. Ignite prepares students to excel in AP Spanish exams and use the language effectively in real-world contexts.</p>


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
