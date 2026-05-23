"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="card mx-auto fade-in-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat>
      {/* Header Row */}
      <div className="header" onClick={() => setOpen(!open)}>
        <div className="text-content">
          <h2 className="title">Tutors In JLT Dubai For Academic Excellence And Exam-Ready Support</h2>
          <p className="subtitle">At Ignite Training Institute, the tutors in JLT Dubai work with students across IGCSE, IB, A-Levels, AP, and homeschooling pathways. Sessions are built around each student's current level, the specific exam board they are sitting (Cambridge CAIE, Pearson Edexcel, AQA, IBO, or College Board), and the topics they are finding difficult. No fixed curriculum is pushed onto every learner. The plan is shaped to the syllabus the school is teaching and the gaps the student needs to close before the next assessment.<br /><br />The Ignite JLT centre sits within a short distance of DMCC Metro, Dubai Marina, and the surrounding international school catchment. That makes after-school tutoring practical for families across JLT, Jumeirah, JBR, and Dubai Marina. Whether a student is preparing for IGCSE mocks, an IB internal assessment, or an AP exam in May, the focus stays on subject understanding, past paper practice, and the exam technique that scores marks under timed conditions.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">Top-Rated Tuition Centre In JLT Dubai For IBDP, IB MYP, IGCSE, A-Levels, And AP</h2>
          <p className="subtitle">As a tuition centre in JLT, Ignite runs dedicated programmes for each international curriculum rather than treating them as one undifferentiated block. Each board has its own command words, mark scheme expectations, and assessment style, and tutors at Ignite prepare students accordingly. The <a href="https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>IGCSE tutors in Dubai</a> at Ignite cover both Cambridge and Pearson Edexcel routes, including the practical differences in paper structure and the <a href="https://ignitetraininginstitute.com/blog/what-is-the-difference-between-edexcel-and-cambridge" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Edexcel and Cambridge IGCSE difference</a> that often confuses students switching boards.<br /><br />For senior school, the <a href="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>A-Level tutors in Dubai</a> at Ignite support both AS and A2 students across sciences, maths, economics, business, and the humanities. Students preparing for the IB Diploma work with the <a href="https://ignitetraininginstitute.com/ib-curriculum-tutors-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>IB tutors in Dubai</a> on Standard Level and Higher Level subjects, alongside core components like the Extended Essay and Theory of Knowledge. For US-pathway students, the <a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>AP tutors in Dubai</a> at Ignite guide preparation aligned to the College Board's scoring rubric and exam calendar.</p>
          <br />

          <h2 className="title">Personalised Coaching Centre In JLT Dubai For Higher Exam Scores</h2>
          <p className="subtitle">A coaching centre in JLT is only as effective as the diagnostic it begins with. Every student who joins Ignite starts with an assessment that identifies where the gaps actually sit: weak topic foundations, exam technique, time management under pressure, or a combination. Lesson plans are then built around that diagnostic rather than running through a fixed sequence of chapters.<br /><br />Sessions move between concept clarity, worked examples, and past paper practice with mark scheme analysis. Most students see the biggest grade movement once they understand how examiners award marks, which is usually different from how the topic was taught at school. Whether the student chooses one-on-one tutoring or small group classes in JLT, the goal stays the same: measurable improvement before the next mock or final exam.</p>
          <br />

          <h2 className="title">What Subjects Do The Tutors In JLT Dubai Cover?</h2>
          <p className="subtitle">Subject coverage at Ignite spans the core academic disciplines across every curriculum on offer. The list below reflects the subjects most JLT-area families request, though coverage extends beyond this where required.</p><ul className="subtitle"><li><a href="https://ignitetraininginstitute.com/maths-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}><strong>Mathematics</strong></a> (IGCSE, A-Level Maths and Further Maths, IB Maths AA and AI, AP Calculus AB and BC, AP Statistics)</li><li><a href="https://ignitetraininginstitute.com/physics-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}><strong>Physics</strong></a> (IGCSE, A-Level, IB SL and HL, AP Physics 1, 2, C)</li><li><a href="https://ignitetraininginstitute.com/chemistry-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}><strong>Chemistry</strong></a> (IGCSE, A-Level, IB SL and HL, AP Chemistry)</li><li><a href="https://ignitetraininginstitute.com/biology-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}><strong>Biology</strong></a> (IGCSE, A-Level, IB SL and HL, AP Biology)</li><li><a href="https://ignitetraininginstitute.com/economics-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}><strong>Economics</strong></a> (IGCSE, A-Level, IB SL and HL, AP Microeconomics and Macroeconomics)</li><li><a href="https://ignitetraininginstitute.com/business-studies-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}><strong>Business Studies</strong></a> <strong>and <a href="https://ignitetraininginstitute.com/accounting-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Accounting</a></strong> (IGCSE, A-Level, IB Business Management)</li><li><a href="https://ignitetraininginstitute.com/english-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}><strong>English Language and Literature</strong></a> (IGCSE, A-Level, IB Language A and Language B)</li><li><a href="https://ignitetraininginstitute.com/computer-science-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}><strong>Computer Science</strong></a> (IGCSE, A-Level, IB, AP Computer Science A and Principles)</li><li><a href="https://ignitetraininginstitute.com/psychology-tutor-in-dubai/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}><strong>Psychology</strong></a> (IGCSE, A-Level, IB, AP)</li></ul><p className="subtitle">Students often combine subjects to strengthen specific paper components. For example, an IGCSE Biology student preparing for the Cambridge Paper 6 alternative-to-practical may also work on <a href="https://ignitetraininginstitute.com/blog/how-to-study-for-igcse-biology" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>how to study for IGCSE Biology</a>, while A-Level students choosing their final combination may want to review the <a href="https://ignitetraininginstitute.com/blog/a-levels-subjects" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>A-Level subjects guide</a> before committing.</p>
          <br />

          <h2 className="title">Why Families In JLT, Dubai Marina, And DMCC Choose Ignite</h2>
          <p className="subtitle">JLT sits at the centre of one of Dubai's densest international-school catchments. Families living in JLT, Dubai Marina, JBR, Jumeirah Islands, and the Greens send children to a wide spread of British, IB, and American curriculum schools. That mix is exactly why a tuition centre in JLT needs strong cross-curriculum capability rather than one-subject specialism. Two students from the same building can be sitting Cambridge IGCSE Biology and IB MYP eAssessments in the same term, and a tutor needs to handle both with full fluency.<br /><br />The Ignite JLT centre is built around this reality. Tutors are subject specialists with direct experience of the boards they teach, and timetables are designed to fit around the typical 3 to 4 PM school finish for nearby international schools. For families who prefer to learn from home, Ignite also offers online classes in JLT-area timezones, which is particularly useful during exam season when commute time matters.</p>
          <br />

          <h2 className="title">Trusted Tuition Centre In Motor City For Assured Better Results With Ignite</h2>
          <p className="subtitle">Ignite also operates a tuition centre in <a href="https://ignitetraininginstitute.com/tutors-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Motor City, Dubai</a>, for families based further inland. The Motor City branch follows the same academic framework as the JLT centre: diagnostic assessment, board-specific preparation, past paper practice, and structured feedback. Students who live closer to Motor City, Arabian Ranches, or Dubai Sports City can access the same standard of tutoring without a long commute.<br /><br />The teaching philosophy stays consistent across both branches. Short-term marks are not chased at the expense of subject understanding. Real grade improvement comes from closing the conceptual gaps first and then layering exam technique on top, which is why most students stay with Ignite across multiple school years rather than only during exam season.</p>
          <br />

          <h2 className="title">How Do The Tutors At Ignite In JLT Dubai Help Students Achieve Academic Success?</h2>
          <p className="subtitle">The starting point is always the same: understanding where the student is right now. Tutors at Ignite in JLT Dubai begin with a short diagnostic that maps current understanding against the syllabus the student's school is following. From there, a focused plan is agreed with the student and parent, with clear targets for the next month, the next mock, and the final exam window.<br /><br />Every session combines three things: clarifying the concept that the school did not explain clearly, working through examiner-style questions, and reviewing where marks were lost or gained. Progress is tracked in writing, not just verbally, so parents have visibility into what is improving and what still needs work. Tutors at Ignite are also available between sessions for short queries, which matters when a student is stuck on a question the night before a deadline.</p>
          <br />

          <h2 className="title">How To Enrol With Ignite Training Institute At The JLT Centre?</h2>
          <p className="subtitle">Enrolment is straightforward. Submit the enquiry form on the Ignite Training Institute website with the student's year group, curriculum, and subjects of interest. A member of the academic team will get in touch to understand the student's current standing, school, and exam timeline, and recommend a tutoring plan that fits. Ignite also offers a <a href="https://ignitetraininginstitute.com/join-free-demo-class" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>free demo class</a> at the JLT centre so families can experience the teaching approach before committing.<br /><br />For families who prefer to speak before booking, the academic team at Ignite can be reached through the <a href="https://ignitetraininginstitute.com/contact-us" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>contact page</a> for a callback. The team will walk parents through which programme fits, expected session frequency, and the timeline that gives the student the best chance of hitting their target grade.</p>
          <br />

        </div>
      )}

      <style jsx>{`
        .card {
          background-image: url('/assets/Rectangle130.webp');
          background-size: cover;
          background-position: center;
          max-width:90vw;
          color: white;
          padding: 24px;
          transition: all 0.3s ease;
          margin:0 auto !important;
         border-radius: 30px; overflow: hidden;}

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
         border-radius: 30px; overflow: hidden;}
            }
      `}</style>
    </div>
  );
}
