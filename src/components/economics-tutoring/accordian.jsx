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
          <h2 className="title">Expert Economics Tutor In Dubai, UAE For Academic Confidence</h2>
          <p className="subtitle">Gain the academic edge you need with expert Economics tutoring in Dubai. Our qualified tutors simplify complex concepts and enhance your analytical thinking. Whether you're struggling with microeconomics or macroeconomics, we tailor our approach to your needs. With personal attention and a results-driven method, you'll feel more confident and prepared for exams. Build a strong foundation and set yourself up for long-term success in Economics.</p>


        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">Find The Best Economics Tutor In Dubai For You With Ignite Training Institute</h2>
          <p className="subtitle">At Ignite Training Institute, we match students with the best Economics tutors in Dubai. Our team comprises experienced educators who understand international curricula and how to unlock student potential. We focus on conceptual clarity, exam strategies, and academic confidence. Whether you're in IB, IGCSE, or A Levels, we’ll help you find a tutor who suits your learning style. Begin your journey with a free consultation and see the difference expert guidance makes.</p>
          <br />

          <h2 className="title">Personalized Economics Tuition In Dubai For Every Student</h2>
          <p className="subtitle">No two students learn the same way, which is why our Economics tuition is completely personalized. We assess your strengths and challenges to create a plan that supports your academic goals. From foundational understanding to advanced exam techniques, our sessions are designed to maximise learning outcomes. Our tutors build rapport, foster curiosity, and guide you at a pace that works for you. Unlock your potential with tuition built just for you.</p>
          <br />

          <h2 className="title">Score Higher With Targeted Economics Coaching In Dubai Today</h2>
          <p className="subtitle">Achieving top grades in Economics requires more than just memorization. Our targeted coaching focuses on critical thinking, data interpretation, and application skills. With structured practice, timed assessments, and regular feedback, students develop the confidence to perform under pressure. Our Dubai-based coaches specialize in helping students reach their academic goals, whether it’s improving school performance or acing final exams. Start today and take control of your success.</p>
          <br />

          <h2 className="title">Economics Classes In Dubai For Academic Excellence & Exam Support</h2>
          <p className="subtitle">Our Economics classes in Dubai combine expert teaching with strategic exam preparation. Whether you're preparing for IGCSE, IB, or A Levels, our programs are tailored to ensure syllabus coverage and exam success. Classes are interactive, engaging, and designed to help you think critically and write effectively. From individual doubt-solving to mock tests, we support you every step of the way. Excel in Economics with the right class environment and expert support.</p>
          <br />

          <h2 className="title">Top-Notch Economics Tutoring In Dubai For Stronger Skills</h2>
          <p className="subtitle">Master Economics with top-notch tutoring that builds your academic and problem-solving skills. Our experienced tutors in Dubai help students strengthen their understanding of key topics and develop exam-ready strategies. Lessons are dynamic and customized to suit your curriculum and goals. Whether you're struggling with economic models or essay writing, we’re here to guide you through. Strengthen your skills and elevate your confidence in every lesson.</p>
          <br />

          <h2 className="title">Online Economics Tutor In Dubai Helping Students Build Confidence</h2>
          <p className="subtitle">Access expert Economics support from the comfort of your home with our online tutoring services. We bring personalized learning to your screen with interactive sessions, digital resources, and focused feedback. Whether you need help understanding market structures or preparing for a final exam, our online tutors in Dubai are ready to help. Build academic confidence and excel in Economics with flexible, effective online support.</p>
          <br />

          <h2 className="title">Trusted Economics Learning Centre In Dubai For Exam Success</h2>
          <p className="subtitle">Ignite Training Institute is a trusted name when it comes to Economics learning support in Dubai. Our centre offers structured programs, experienced faculty, and a nurturing environment that promotes deep understanding and exam readiness. We support students across various boards, including IB, IGCSE, and A Levels, and focus on helping each learner achieve their personal best. Join a centre that understands your goals and helps you achieve them.</p>
          <br />

          <h2 className="title">Looking For An Economics Tutor Near Me In Dubai? Get Help Today!</h2>
          <p className="subtitle">Struggling to find a reliable Economics tutor near you in Dubai? Ignite makes the search easy. Our tutors are located across the city and also offer flexible online options to suit your schedule. Whether you need help catching up or aiming for a top score, we provide expert guidance that’s right around the corner. Book a session today and get the academic support you’ve been looking for.</p>
          <br />

          <h2 className="title">Get Better Results With An IB Economics Tutor In Dubai Support</h2>
          <p className="subtitle">IB Economics can be challenging, but our tutors make it easier to master. From data response to essay writing, our IB specialists guide you through each part of the curriculum with clarity. We focus on real-world application, time management, and exam techniques tailored to the IB format. With the right support, you can aim higher and feel more confident walking into your exams.</p>
          <br />

          <h2 className="title">Experienced IGCSE Economics Tutor In Dubai For Exam Prep</h2>
          <p className="subtitle">Our IGCSE Economics tutors in Dubai are well-versed in the syllabus and grading criteria. They help you understand economic theory, apply concepts, and write clear, structured answers. With practice papers, revision sessions, and topic-wise support, our tutors ensure you’re thoroughly prepared. Whether you're targeting a specific grade or need help building consistency, we’re here to guide you toward success.</p>
          <br />

          <h2 className="title">Achieve More With A Levels Economics Tutor In Dubai Help</h2>
          <p className="subtitle">A Levels Economics demands critical analysis, structured argumentation, and deep understanding. Our tutors in Dubai specialize in helping students develop these skills through focused instruction and strategic preparation. We tailor our sessions to your board’s requirements and help you excel in both micro and macro aspects of the syllabus. With consistent guidance, you’ll be able to tackle complex questions and improve your academic standing.</p>
          <br />

          <h2 className="title">One-On-One AS Levels Economics Tutor In Dubai For Assured Improvement</h2>
          <p className="subtitle">Our one-on-one AS Levels tutoring ensures every session is built around your specific needs. Whether you're struggling with elasticity, government intervention, or data analysis, we’re here to simplify concepts and improve your writing. Our tutors in Dubai offer a supportive environment where questions are encouraged and progress is tracked. With consistent effort and personalized attention, academic improvement is within reach.</p>
          <br />

          <h2 className="title">AP Economics Tutor In Dubai Helping Students Excel With Confidence</h2>
          <p className="subtitle">AP Economics requires clarity in both microeconomics and macroeconomics concepts. Ignite’s AP Economics tutors in Dubai simplify complex theories, graphs, and problem-solving techniques. Students learn how to analyze data, understand market behavior, and apply concepts effectively in exams. Personalized sessions focus on improving analytical skills and building exam confidence. With targeted strategies and practice, students enhance both conceptual understanding and application. Ignite ensures students approach AP Economics with a structured, result-driven plan for success.</p>




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
