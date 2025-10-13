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
          <h2 className="title">Expert Biology Tutor In Dubai, UAE For Academic Confidence</h2>
          <p className="subtitle">Our expert Biology tutors help students in Dubai grasp difficult concepts with clarity and confidence. Whether it's cell theory or genetics, we make learning interactive and enjoyable. With one-on-one guidance and personalized strategies, students overcome academic hurdles and grow in subject mastery. Let your child discover their potential in Biology with tailored support that truly makes a difference.</p>

        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">Find The Best Biology Tutor In Dubai For You With Ignite Training Institute</h2>
          <p className="subtitle">At Ignite Training Institute, we connect you with highly experienced Biology tutors who specialize in various curricula, including IB, IGCSE, and A Levels. Our tutors use proven teaching techniques that suit individual learning styles. Whether your goal is grade improvement or deeper understanding, we’ll match you with a tutor who delivers results. Get started with a free consultation today.</p>
          <br />

          <h2 className="title">Personalized Biology Tuition In Dubai For Every Student</h2>
          <p className="subtitle">We believe every student deserves a learning plan that fits their unique needs. Our personalized Biology tuition sessions focus on strengthening weak areas and building on existing knowledge. With regular assessments and adaptive strategies, students develop confidence in applying scientific concepts. Ideal for school support or exam preparation, our tutors ensure no student is left behind.</p>
          <br />

          <h2 className="title">Score Higher With Targeted Biology Coaching In Dubai Today</h2>
          <p className="subtitle">Our focused Biology coaching is designed to boost scores through rigorous practice and expert explanation. We break down tough topics like human physiology, plant biology, and molecular structures into digestible parts. Students benefit from real exam-style practice and targeted sessions that prepare them thoroughly. Start improving your performance with the right coaching support today.</p>
          <br />

          <h2 className="title">Biology Classes In Dubai For Academic Excellence & Exam Support</h2>
          <p className="subtitle">Ignite offers structured Biology classes that cater to students at different academic levels. Our small groups ensure individual attention and active participation. We cover curriculum-relevant topics while also preparing students for upcoming tests and board exams. With experienced educators and an engaging format, we help students move from confusion to clarity.</p>
          <br />

          <h2 className="title">Top-Notch Biology Tutoring In Dubai For Stronger Skills</h2>
          <p className="subtitle">Enhance your scientific thinking and analytical skills with our top-notch Biology tutoring. We help students go beyond rote learning and develop a strong conceptual foundation. Whether it’s IB, IGCSE, or A Levels, our tutors guide students toward deeper understanding and better academic outcomes. Join a community of learners reaching their full potential.</p>
          <br />

          <h2 className="title">Online Biology Tutor In Dubai Helping Students Build Confidence</h2>
          <p className="subtitle">Learning Biology online has never been more effective. Our online tutors in Dubai bring interactive tools, clear explanations, and individual feedback to every session. Students enjoy the flexibility of learning from home while still receiving world-class guidance. Perfect for busy schedules or last-minute revisions, our online tutoring builds both skill and confidence.</p>
          <br />

          <h2 className="title">Trusted Biology Learning Centre In Dubai For Exam Success</h2>
          <p className="subtitle">Ignite’s reputation as a trusted learning centre stems from our proven success in guiding students toward academic excellence. Our Biology programs are structured, comprehensive, and delivered by expert educators. From middle school to advanced levels, students find a supportive space to thrive and succeed in their exams.</p>
          <br />

          <h2 className="title">Looking For An Biology Tutor Near Me In Dubai? Get Help Today!</h2>
          <p className="subtitle">If you’ve been searching for a Biology tutor near you, Ignite Training Institute is ready to support. Our team of experienced tutors is located across Dubai and offers both in-person and online sessions. Get the help you need to clarify complex topics, prep for exams, or improve class performance, all from a tutor close to home.</p>
          <br />

          <h2 className="title">Get Better Results With An IB Biology Tutor In Dubai Support</h2>
          <p className="subtitle">Our IB Biology tutors specialize in both SL and HL levels, offering in-depth support tailored to the IB curriculum. With internal assessment guidance, exam practice, and topic-by-topic teaching, we help students meet and exceed expectations. Build a strong foundation and feel confident as you work toward your IB goals.</p>
          <br />

          <h2 className="title">Experienced IGCSE Biology Tutor In Dubai For Exam Prep</h2>
          <p className="subtitle">Whether you're taking Edexcel or Cambridge IGCSE Biology, our tutors are equipped to guide you to success. We provide thorough revision, past paper practice, and concept clarity across all units. Students benefit from step-by-step instruction that enhances both understanding and performance in exams.</p>
          <br />

          <h2 className="title">Achieve More With A Levels Biology Tutor In Dubai Help</h2>
          <p className="subtitle">Our A Levels Biology tutors help students deepen their understanding of key topics like biochemistry, ecology, and cellular processes. With a focus on exam techniques and scientific reasoning, students gain the confidence to tackle complex problems. We support every learner in reaching their academic potential.</p>
          <br />

          <h2 className="title">One-On-One AS Levels Biology Tutor In Dubai For Assured Improvement</h2>
          <p className="subtitle">Get focused support with our one-on-one AS Levels Biology tutoring. Personalized sessions target your specific needs, be it improving coursework, understanding practicals, or mastering difficult theories. Our tutors help build a strong academic foundation and prepare students for future A Level challenges.</p>
          <br />

          <h2 className="title">AP Biology Tutor In Dubai Helping Students Excel With Confidence</h2>
          <p className="subtitle">From genetics and evolution to human systems and ecology, AP Biology covers a wide range of concepts. Ignite’s AP Biology tutors in Dubai make learning engaging and structured for students. We focus on strengthening core knowledge while developing critical thinking and exam readiness. Personalized support ensures every student improves in weaker areas and gains confidence. Our tutors simplify complex processes and use proven strategies to maximize exam performance. With Ignite, students not only prepare for AP Biology exams but also build a strong foundation for higher studies in life sciences.</p>

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
