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
                    <h2 className="title">Expert Maths Tutor In Dubai UAE For Academic Confidence</h2>
                    <p className="subtitle">Ignite Training Institute offers expert Maths tutors in Dubai who provide focused guidance tailored to each student’s level. Whether you're catching up or aiming to excel, our tutors help strengthen your core concepts and problem-solving skills. We ensure students build confidence in Maths through step-by-step support and targeted strategies. With a deep understanding of school and international curricula, we make complex topics simple and engaging. Our tutors adapt to different learning styles, making sessions productive and impactful. Join hundreds of students across Dubai who’ve boosted their grades with our expert maths support.</p>

                </div>
                <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
            </div>

            {/* Expanded Content */}
            {open && (
                <div className="expanded">
                    <h2 className="title">Find The Best Mathematics Tutor In Dubai For You With Ignite Training Institute</h2>
                    <p className="subtitle">Struggling to find the right Maths tutor? Ignite Training Institute connects students with highly qualified Mathematics tutors in Dubai who understand different learning paces and goals. Whether it's IB, IGCSE, or A Levels, our tutors bring clarity and confidence to every lesson. We focus on foundational understanding, logical reasoning, and effective revision techniques. Flexible timing, in-person and online options, and personalized attention make it easy to stay on track. With our support, you’ll stop dreading Maths and start mastering it. Let us match you with the right tutor for your needs.
                    </p>
                    <br/>

                    <h2 className="title">Personalized Maths Tuition In Dubai For Every Student</h2>
                    <p className="subtitle">At Ignite, we understand that no two students learn Maths the same way. Our personalized Maths tuition in Dubai is designed around your strengths, challenges, and academic goals. From homework help to exam prep, our tutors build a learning path that truly works. We ensure every concept is thoroughly explained and practiced so students feel more confident in class and during assessments. The result is a stronger grasp of topics and improved academic performance. Discover the power of custom learning with Ignite’s personalised tuition support.</p>
                    <br/>

                    <h2 className="title">Score Higher With Targeted Maths Coaching In Dubai Today</h2>
                    <p className="subtitle">Get the scores you need with focused and strategic Maths coaching at Ignite. Our Dubai-based tutors offer structured sessions that align with your curriculum and upcoming exams. We don’t just teach Maths, we coach students to think critically, solve efficiently, and apply their knowledge under pressure. Regular assessments, feedback, and targeted revisions help eliminate weak areas and boost performance. Whether preparing for term tests or final boards, our approach is results-driven and student-centric. Take the first step toward higher scores with expert coaching today.</p>
                    <br/>

                    <h2 className="title">Maths Classes In Dubai For Academic Excellence & Exam Support</h2>
                    <p className="subtitle">Ignite Training Institute offers comprehensive Maths classes in Dubai for students across IB, IGCSE, A Levels, and other international curricula. Our classes are designed to improve understanding, sharpen skills, and build exam readiness. Tutors follow a structured approach, ensuring students cover all necessary topics with clarity and confidence. We offer support in algebra, geometry, calculus, statistics, and more. With a blend of concept-based teaching and rigorous practice, we prepare students for success inside and outside the classroom. Join our high-performing Maths learners today.</p>
                    <br/>

                    <h2 className="title">Top-Notch Maths Tutoring In Dubai For Stronger Skills</h2>
                    <p className="subtitle">Develop stronger analytical and problem-solving skills with Ignite’s top-tier Maths tutoring. Our tutors in Dubai are subject-matter experts who make abstract concepts more accessible and engaging. From junior school Maths to advanced levels, we support students at every stage of their academic journey. Our sessions blend theory, application, and continuous practice to help students gain mastery. Whether you’re working to improve grades or aiming for academic excellence, we offer the tools, techniques, and mentoring you need. Ignite is where skills meet confidence.</p>
                    <br/>

                    <h2 className="title">Online Maths Tutor In Dubai Helping Students Build Confidence</h2>
                    <p className="subtitle">Can’t attend in-person sessions? Our online Maths tutors in Dubai deliver the same quality support right to your screen. We offer flexible, interactive, and personalized tutoring from the comfort of your home. Using digital tools and real-time feedback, our tutors guide students through concepts, clarify doubts, and provide structured assignments. It’s ideal for students with busy schedules or who prefer learning in a quieter space. With one-on-one focus and engaging virtual lessons, we help students overcome fear of Maths and thrive academically.</p>
                    <br/>

                    <h2 className="title">Trusted Maths Learning Centre In Dubai For Exam Success</h2>
                    <p className="subtitle">Ignite Training Institute is a trusted Maths learning centre in Dubai, known for driving real academic results. Our students consistently achieve top grades thanks to our systematic teaching methods, regular mock tests, and concept-driven learning plans. We go beyond rote memorization, focusing on building deep understanding and confident application. Whether you're struggling with functions or preparing for finals, we’ve got you covered. Our dedicated Maths faculty ensures every student receives the attention and strategies needed to succeed. Experience exam success with us.</p>
                    <br/>

                    <h2 className="title">Looking For A Maths Tutor Near Me In Dubai? Get Help Today!</h2>
                    <p className="subtitle">Searching for a Maths tutor near you in Dubai? Ignite Training Institute offers accessible and expert tutors ready to support your academic goals. We match students with tutors based on curriculum, skill level, and learning preferences. Our nearby locations and flexible timings make it easy to fit tutoring into your routine. Whether you need urgent exam help or long-term academic support, we have qualified tutors across the city. Get the help you need today and see real improvement in your Maths performance.</p>
                    <br/>

                    <h2 className="title">Get Better Results With IB Maths Tutor In Dubai Support</h2>
                    <p className="subtitle">Our experienced IB Maths tutors in Dubai help students master the unique demands of the IB curriculum. From standard to higher level, we offer structured guidance, time-saving techniques, and clarity on complex topics. Our tutors break down syllabus components, past papers, and internal assessments in a way that builds both understanding and confidence. With a balance of theory and practical application, we ensure students are well-prepared for exams. Improve your results and take the stress out of IB Maths with our expert support.</p>
                    <br/>

                    <h2 className="title">Experienced IGCSE Maths Tutor In Dubai For Exam Prep</h2>
                    <p className="subtitle">Prepare smarter and perform better with our IGCSE Maths tutors in Dubai. At Ignite, we focus on exam techniques, time management, and core concept clarity to help students excel. Our tutors are well-versed in the IGCSE syllabus and guide students through key topics, tricky questions, and past paper practice. We offer both extended and core level support, ensuring students build confidence and skill with every session. With our structured approach, you’ll walk into your exams fully prepared and ready to score high.</p>
                    <br/>

                    <h2 className="title">Achieve More With A Levels Maths Tutor In Dubai Help</h2>
                    <p className="subtitle">Our A Levels Maths tutors in Dubai are dedicated to helping students tackle advanced concepts with ease. We specialize in supporting students through pure, mechanics, and statistics components, ensuring a strong grasp of each. With a focus on precision, application, and problem-solving, our tutors prepare students for both coursework and final exams. Whether you’re struggling or aiming for top grades, our tailored sessions adapt to your needs. Achieve more and go further in A Levels with Ignite’s expert Maths tutors.</p>
                    <br/>

                    <h2 className="title">One-On-One AS Levels Maths Tutor In Dubai For Assured Improvement</h2>
                    <p className="subtitle">Ignite’s AS Levels Maths tutoring in Dubai offers personalized, one-on-one sessions for students who want focused improvement. We help students understand fundamental principles, build step-by-step strategies, and develop exam confidence. Our tutors identify problem areas and provide targeted support that leads to measurable progress. With regular feedback and exam-style practice, students become more proficient and less anxious about assessments. Whether you’re catching up or pushing ahead, our tutors are here to help you improve with every session.</p>
                    <br/>

                    <h2 className="title">AP Maths Tutor In Dubai Helping Students Excel With Confidence</h2>
                    <p className="subtitle">AP Maths can be demanding, with advanced concepts in calculus, algebra, and statistics. Ignite’s AP Maths tutors in Dubai simplify complex theories and guide students step by step. Through focused practice, exam strategies, and conceptual clarity, students strengthen their problem-solving skills. Our tutors provide structured sessions to help students maximize their scores and confidence. Personalized teaching ensures every student masters both theory and application. With Ignite’s guidance, students approach AP Maths with clarity, accuracy, and improved performance.</p>

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
