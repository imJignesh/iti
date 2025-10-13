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
          <h2 className="title">Expert Chemistry Tutor In Dubai UAE For Academic Confidence</h2>
          <p className="subtitle">Gain clarity and confidence in chemistry with expert guidance. Ignite’s experienced chemistry tutors help simplify complex topics, making learning more effective and engaging. Whether you struggle with organic, inorganic, or physical chemistry, we tailor lessons to your academic level and curriculum. Our tutors build strong conceptual foundations and support you through assignments, labs, and exams. Students gain not just marks but deep understanding. Let us help you feel confident in every chemistry class.</p>

        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">Find The Best Chemistry Tutor In Dubai For You With Ignite Training Institute</h2>
          <p className="subtitle">Searching for the right chemistry tutor? Ignite connects students with highly qualified professionals who make science simple. Our chemistry tutors specialize in IB, IGCSE, A Levels, and more. Each student receives individual attention and lesson plans that match their learning pace and goals. Whether you're preparing for board exams or improving classroom performance, we’re here to help. Ignite makes finding the perfect chemistry tutor in Dubai easy and effective.</p>
          <br />


          <h2 className="title">Personalized Chemistry Tuition In Dubai For Every Student</h2>
          <p className="subtitle">No two students learn the same way, so why should tuition be generic? Ignite offers personalized chemistry tuition that adapts to your needs. We focus on your strengths, identify weak areas, and provide step-by-step support. Our tutors use real-life examples and visual aids to enhance understanding. From equations to experiments, every concept is explained in a student-friendly way. With a customized approach, learning chemistry becomes a lot more enjoyable and successful.</p>
          <br />

          <h2 className="title">Score Higher With Targeted Chemistry Coaching In Dubai Today</h2>
          <p className="subtitle">If you’re aiming for top scores in chemistry, Ignite’s targeted coaching is the solution. We go beyond textbooks, offering strategies, exam tips, and topic mastery. Our tutors emphasize past paper practice and concept clarity for better retention. Whether you’re preparing for finals or international exams, we equip you with the tools to succeed. Join our chemistry coaching program in Dubai to reach your full academic potential with confidence.</p>
          <br />

          <h2 className="title">Chemistry Classes In Dubai For Academic Excellence & Exam Support</h2>
          <p className="subtitle">Ignite’s chemistry classes are designed to build academic excellence and exam readiness. We offer small-group and one-on-one sessions for maximum support. Covering every major curriculum, IB, IGCSE, British, and more, our sessions focus on deep understanding and application. From periodic tables to chemical bonding, our tutors explain it all with clarity. Students learn smarter, not harder, and approach exams with better preparation and less stress.</p>
          <br />

          <h2 className="title">Top-Notch Chemistry Tutoring In Dubai For Stronger Skills</h2>
          <p className="subtitle">Struggling with reactions or formulas? Our top-notch chemistry tutoring helps students strengthen both theoretical and practical skills. Ignite’s expert tutors break down difficult concepts and build up your confidence. We offer a structured plan to tackle each syllabus section with practice and feedback. Whether you're aiming for an A or simply want to improve, our personalized support ensures measurable progress. Experience chemistry tutoring that truly delivers results.</p>
          <br />

          <h2 className="title">Online Chemistry Tutor In Dubai Helping Students Build Confidence</h2>
          <p className="subtitle">Learn chemistry from anywhere in Dubai with Ignite’s trusted online tutors. Our virtual chemistry sessions are interactive, flexible, and just as effective as in-person classes. Students receive personalized attention and support from experienced educators. With engaging tools and regular assessments, we help boost your confidence and understanding. Perfect for busy schedules, our online chemistry tuition brings expert help right to your screen, no matter where you are.</p>
          <br />

          <h2 className="title">Trusted Chemistry Learning Centre In Dubai For Exam Success</h2>
          <p className="subtitle">Ignite is a trusted name for chemistry tutoring in Dubai. Our learning centre provides a focused, encouraging environment where students thrive. With expert tutors, structured programs, and hands-on learning, we support you through every academic milestone. Whether you’re catching up or racing ahead, we help you stay on track. From quizzes to mocks, our centre prepares you to walk into every chemistry exam with confidence.</p>
          <br />

          <h2 className="title">Looking For A Chemistry Tutor Near Me In Dubai? Get Help Today!</h2>
          <p className="subtitle">If you’ve been searching for “chemistry tutor near me in Dubai,” your solution is here. Ignite connects you with nearby experts who make chemistry clear and achievable. Our tutors come equipped with knowledge, patience, and a passion for teaching. Sessions are available at home, in-centre, or online, whatever suits you best. Don’t let chemistry slow you down, get the help you need right in your neighborhood.</p>
          <br />

          <h2 className="title">Get Better Results With An IB Chemistry Tutor In Dubai Support</h2>
          <p className="subtitle">Tackling the IB Chemistry syllabus? Our experienced tutors know exactly how to help. From internal assessments to HL and SL papers, we offer targeted support across every section. We guide students through lab work, data analysis, and exam prep with precision. Our teaching style is exam-focused but student-centered, helping you understand and apply knowledge effectively. Score higher and stress less with our IB Chemistry tutoring in Dubai.</p>
          <br />

          <h2 className="title">Experienced IGCSE Chemistry Tutor In Dubai For Exam Prep</h2>
          <p className="subtitle">Get ready for your IGCSE Chemistry exam with an expert tutor by your side. Ignite’s tutors are well-versed in Edexcel and Cambridge syllabi and tailor lessons to suit your level. Through detailed explanations, past papers, and revision strategies, we help students stay ahead of the curve. Whether you need concept clarity or exam practice, our one-on-one support ensures success. Join us for focused, result-driven IGCSE Chemistry tutoring in Dubai.</p>
          <br />

          <h2 className="title">Achieve More With A Levels Chemistry Tutor In Dubai Help</h2>
          <p className="subtitle">A Levels Chemistry is demanding, but our tutors make it manageable and meaningful. Ignite’s A Levels Chemistry tutors focus on key areas like organic reactions, mechanisms, and calculations. We guide you through the syllabus with structure, clarity, and exam-focused revision. Students receive individual mentoring and practical tools to master tough topics. Whether it’s AS or A2, you can achieve more with our expert support in Dubai.</p>
          <br />

          <h2 className="title">One-On-One AS Levels Chemistry Tutor In Dubai For Assured Improvement</h2>
          <p className="subtitle">Personalized attention can make all the difference in AS Level Chemistry. Ignite offers one-on-one sessions that target your weak areas and boost your confidence. Our tutors cover each unit in depth, using diagrams, mnemonics, and practice papers to improve retention. Whether you're revising for mocks or your finals, we provide structured and effective guidance. With consistent support, you’ll notice significant improvement in both performance and understanding.</p>
          <br />

          <h2 className="title">AP Chemistry Tutor In Dubai Helping Students Excel With Confidence</h2>
          <p className="subtitle">AP Chemistry requires a solid grasp of concepts, equations, and practical applications. Ignite’s AP Chemistry tutors in Dubai provide expert guidance on chemical reactions, kinetics, equilibrium, and organic chemistry. Our sessions focus on simplifying difficult topics while sharpening analytical and problem-solving skills. Students receive personalized support, practice tests, and exam-focused strategies to build confidence. With a balance of theory and real-life applications, our tutors make AP Chemistry easier to understand. Ignite ensures students develop the skills needed for strong performance and future success in sciences.</p>

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
