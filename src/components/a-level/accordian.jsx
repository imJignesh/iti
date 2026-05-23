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
          <h2 className="title">A-Level Tutors In Dubai For Year 12 And Year 13 Students</h2>
          <p className="subtitle">A-Level tutors in Dubai support Year 12 and Year 13 students through AS-Level and A2-Level across CAIE, Pearson Edexcel, and Oxford AQA. At Ignite Training Institute, our A-Level tutors prepare students for the May/June and October/November exam series, with focused work on subject mastery, past paper technique, and the predicted grades that decide university offers.<br /><br />A-Levels are the linear, exam-anchored qualification UK universities expect. Most Dubai international schools sit students for either CAIE or Edexcel International A-Level (IAL). The structure looks straightforward (3-4 subjects studied in depth across two years), but the actual workload pattern catches students out. Year 12 ends with AS papers that are externally marked and feed predicted grades. Year 13 has UCAS deadlines (14 January for most UK universities, 15 October for Oxbridge and medicine) before the final A2 papers in May/June.<br /><br />Most Year 12 students who reach out to Ignite are not weak. They are capable students who have hit the gap between IGCSE-style content recall and A-Level analytical depth, particularly in Sciences and Economics. We diagnose the gap in the first session, work against the specific exam board's mark scheme, and use past paper practice to bring confidence and accuracy up steadily. As an A-Level tuition centre in Dubai, Ignite runs sessions from our DIFC and JLT centres or fully online, and most students switch between formats depending on the week.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">Why A-Level Tuition In Dubai Matters: AS, A2, And The Three Pathway Options</h2>
          <p className="subtitle">Cambridge International A-Levels offer three assessment pathways.<br /><br />* <strong>Pathway one</strong> is AS-only, where the student sits AS papers at the end of Year 12 and stops there with a half-A-Level qualification.<br /><br />* <strong>Pathway two</strong> is staged: AS papers in Year 12, then A2 papers a year later, with AS marks carrying into the final A-Level grade.<br /><br />* <strong>Pathway three</strong> is fully linear, with all papers sat at the end of Year 13. Pearson Edexcel International A-Level (IAL) follows a modular structure with units sat across the two years. Oxford AQA International A-Levels run linear-only.<br /><br />The pathway shapes when predicted grades are reliable. A staged Year 12 student has actual AS papers behind them by the time UCAS predictions are due, which makes the predicted grade more defensible. A fully linear student has only school mocks by then. Tutoring intensity and timing should match the pathway, not run on a generic plan.<br /><br />A-Level tuition in Dubai is also where subject-specific exam technique gets built. A-Level Sciences expect synoptic answers in A2 Paper 5 that pull together content across the syllabus. A-Level Economics Paper 4 demands extended-essay-style responses scored against a clear mark band. A-Level Maths splits into Pure (P1-P3 or P1-P4 depending on board) plus Mechanics or Statistics. None of this is intuitive, all of it is coachable.</p>
          <br />

          <h2 className="title">AS-Level Tuition In Dubai For Year 12: Building The Foundation For A2</h2>
          <p className="subtitle">AS-Level tuition in Dubai is where the heaviest grade-improvement work happens, because AS marks either stand alone or roll directly into the final A-Level grade, depending on the pathway. Year 12 is the diagnostic year. It tells the student whether they are a 6-7 graded subject candidate or a 4-5 graded one, and it sets the realistic ceiling for Year 13.<br /><br />Ignite's AS-Level tuition runs as a structured 10-month programme from September to June, with over 70 hours of subject-specific tutoring across small groups of 3 to 6 Year 12 students. The cohort moves together through full AS syllabus coverage, unit-wise worksheets tailored to Edexcel, CAIE, or Oxford AQA, and a mock exam series under timed conditions in the months before May finals. One-on-one tutoring is also available year-round for students who need fully individualised pacing or are working on a single weak subject.<br /><br />The Year 12 work runs on a calendar. October to December focuses on syllabus catch-up and concept consolidation. January to March shifts to past paper work and command-term technique. April becomes mock papers and predicted-paper practice. By May, the goal is exam fitness: having sat multiple full papers under timed conditions before the actual sitting.</p>
          <br />

          <h2 className="title">A-Level Coaching In Dubai Across Edexcel, CAIE, And Oxford AQA</h2>
          <p className="subtitle">A-Level coaching in Dubai needs to be exam-board-specific. The three boards (CAIE, Pearson Edexcel, and Oxford AQA) set different papers, mark schemes, and even subject codes. Knowing the difference matters when matching tutors and planning past paper work.<br /><br />Maths: CAIE 9709 (Pure 1-3 plus Mechanics or Statistics options), Edexcel IAL YMA01 (Pure 1-4 plus options), Oxford AQA 9660. Physics: CAIE 9702, Edexcel IAL YPH01, Oxford AQA 9630. Chemistry: CAIE 9701, Edexcel IAL YCH01, Oxford AQA 9620. Biology: CAIE 9700, Edexcel IAL YBI01, Oxford AQA 9610. Economics: CAIE 9708, Edexcel IAL YEC01.<br /><br />Ignite's A-Level coaching matches tutors to the student's specific board for each subject. A single student often has different boards for different subjects depending on what their school offers, so we confirm the exact specification at intake. Pearson Edexcel runs both January and June series for IAL, which gives students retake flexibility CAIE and Oxford AQA do not offer in the same way.</p>
          <br />

          <h2 className="title">A-Level Subject-Specific Tutoring In Dubai: How A2 Differs From AS</h2>
          <p className="subtitle">A-Level subject-specific tutoring at Ignite covers the step-up between AS and A2, which is bigger than most students expect. In <a href="https://ignitetraininginstitute.com/maths-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Maths</a>, AS covers Pure 1 and Pure 2 plus one applied unit; A2 adds Pure 3 (and Pure 4 for Edexcel) plus a second applied unit. The proof, vectors, and integration content in Pure 3 is where most A2 grade movement happens.<br /><br />In <a href="https://ignitetraininginstitute.com/physics-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Physics</a>, <a href="https://ignitetraininginstitute.com/chemistry-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Chemistry</a>, and <a href="https://ignitetraininginstitute.com/biology-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Biology</a>, A2 introduces synoptic questions in Paper 5 (CAIE) or Unit 5 (Edexcel) that draw on AS content alongside new A2 topics. Students who scored 6 at AS through content recall often drop to 5 at A2 without explicit synoptic-answer training. In <a href="https://ignitetraininginstitute.com/economics-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Economics</a>, Paper 4 at A2 is essay-based and demands different writing technique from AS multiple choice. <a href="https://ignitetraininginstitute.com/business-studies-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Business Studies</a>, <a href="https://ignitetraininginstitute.com/accounting-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Accounting</a>, <a href="https://ignitetraininginstitute.com/computer-science-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Computer Science</a>, and <a href="https://ignitetraininginstitute.com/psychology-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Psychology</a> follow similar A2 step-ups.<br /><br /><a href="https://ignitetraininginstitute.com/english-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>English Language and Literature</a>, <a href="https://ignitetraininginstitute.com/french-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>French</a>, and <a href="https://ignitetraininginstitute.com/spanish-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Spanish</a> follow the same AS-to-A2 step-up. Languages add more demanding text analysis and translation work at A2. Further Maths, Statistics, and AS Level EVM round out Ignite's full subject coverage.</p>
          <br />

          <h2 className="title">When Should Students Start A-Level Coaching In Dubai? (Year 11, 12, Or 13)</h2>
          <p className="subtitle">The honest answer to "when should we start" depends on which Year the student is in and what the gap looks like.<br /><br />* <strong>Year 11 students</strong> benefit from starting A-Level coaching in the summer between Year 11 and Year 12 if they are switching from IGCSE/GCSE into A-Levels in a subject they want to take but found hard at IGCSE. The IGCSE-to-A-Level step is bigger than the GCSE-to-A-Level step, particularly in Sciences and Maths. Six to eight weeks of bridging work before September makes Year 12 substantially less stressful.<br /><br />* <strong>Year 12 students</strong> ideally start in September or October, at the beginning of AS. The Year 12 → Year 13 timeline is short enough that gaps left until Year 13 mocks rarely close in time. Students who join in autumn have nine months of structured work before May finals.<br /><br />* <strong>Year 13 students</strong> benefit from starting whenever the gap becomes visible, often after autumn mocks land and predicted grades are submitted. Year 13 work is more compressed and focused on paper technique, command terms, and timed practice. Lifting a predicted B to A in a single Year 13 subject is realistic; lifting two or three across the board is harder once UCAS forms are already in.<br /><br />The most common pattern at Ignite is Year 12 students who join our AS-Level tutoring in October to consolidate AS, stay through finals, and continue into Year 13 with the same tutor. Continuity matters because the tutor knows the student's gaps, school's pacing, and the exam board's quirks.</p>
          <br />

          <h2 className="title">Online A-Level Classes In Dubai For UAE Students Across All Emirates</h2>
          <p className="subtitle">Online A-Level classes in Dubai make sense for Year 13 students particularly, because Year 13 is the year with the heaviest workload and least scheduling flexibility. UCAS drafts, school mocks, EE-style coursework on certain boards, and after-school commitments stack on the same calendar. Cutting commute by switching to online tutoring usually returns 3-5 hours per week, and most students put that time into past paper practice.<br /><br />Online A-Level tutoring also extends Ignite's reach beyond Dubai. Students in Abu Dhabi, Sharjah, Ajman, and the wider UAE access the same tutors and the same 10-month AS Year 12 and A-Level Year 13 group programmes without travelling. Sessions run live with interactive whiteboards, real-time mark-scheme annotation, and recordings for review.</p>
          <br />

          <h2 className="title">How Ignite's A-Level Programme Maps To The Year 12 And Year 13 Calendar</h2>
          <p className="subtitle">Ignite's A-Level programme runs from September to June, mapped to the school academic calendar. The same six teaching pillars run across One-on-One Tutoring, the AS Year 12 Group Programme, and the A-Level Year 13 Group Programme.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>#A-Level Past Paper Solving Across All Three Exam Boards</h3>
          <p className="subtitle">We work through past papers across Edexcel, CAIE, and Oxford AQA based on the student's specific board. Each question is mapped to the official mark scheme, command terms are decoded, and students work under timed exam conditions so paper-day pacing becomes second nature.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>#Complete A-Level Revision Across The Two-Year Syllabus</h3>
          <p className="subtitle">Revision is organised by subject and exam board specification. AS Year 12 revision becomes more intense as the May AS papers approach. A-Level Year 13 revision pulls in synoptic content across the two-year syllabus, because synoptic Paper 5 questions are where Year 13 grade movement happens.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>#A-Level Subject Support Across CAIE, Edexcel, And Oxford AQA</h3>
          <p className="subtitle">Subject support spans Pure Math, Statistics, Further Math, Physics, Chemistry, Biology, Computer Science, Economics, Business Studies, Accounting, English Language and Literature, French, Spanish, Psychology, and AS Level EVM. Each subject is taught at the level and board the student is sitting.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>#A-Level Personalised Training Based On Diagnostic Assessment</h3>
          <p className="subtitle">Every new student starts with a diagnostic in their weak subject. We identify which topic strands are dragging the grade down (in Maths, it is often Pure 3 calculus; in Chemistry, it is often organic mechanisms and equilibria; in Economics, it is often Paper 2 essay structure). The lesson plan is built around closing those specific strands.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>#A-Level Syllabus Completion Aligned With The May/June Calendar</h3>
          <p className="subtitle">For May/June candidates, planning aims for full syllabus coverage by mid-March, leaving 8 to 10 weeks for revision, mocks, and past paper practice. October/November candidates follow a shifted calendar. Mid-year joiners get an accelerated catch-up plan that prioritises the highest-weight topics first.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>#A-Level Exam Strategies For Command Terms And Mark Scheme Alignment</h3>
          <p className="subtitle">A-Level papers reward students who answer the question that was asked, not the one they remember preparing for. We coach students on board-specific command terms (analyse, evaluate, justify, distinguish, calculate), on writing mark-scheme-aligned responses, and on time allocation across paper sections. These are skills, not knowledge.</p>
          <br />

          <h2 className="title">Why Parents And A-Level Students In Dubai Choose Ignite Training Institute?</h2>
          <p className="subtitle">Ignite Training Institute has been guiding A-Level students in Dubai for over 10 years, with tutors who specialise in CAIE, Pearson Edexcel, and Oxford AQA across the full A-Level subject range. Our A-Level tutors include Masab and Abdul (10+ and 13+ years in Maths), Harsha (10+ years in Economics and Business), Saranya (8+ years in Physics), and Namrata (10+ years in Maths and Physics). We back every enrolment with a free demo class so families can assess fit before committing.<br /><br />One A-Level Economics student, Shivam, came to Ignite to take Economics outside of school. He achieved two A's in his AS papers and is now working towards A* in P3 and P4 at A2. He picked up Business Studies support along the way. Another student, Tamanna, completed her full A-Levels with Ignite and credits the structured environment for setting her up for university.<br /><br />If your child is in Year 11, 12, or 13 and needs help across A-Level subjects, focused support for one weak subject, or coaching through AS or A2 exam prep, Ignite can match them with the right tutor and format. Book a <a href="https://ignitetraininginstitute.com/join-free-demo-class" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>free demo class</a> to meet a tutor, or <a href="https://ignitetraininginstitute.com/contact-us" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>contact us</a> to discuss a study plan.</p>
          <br />

          <h2 className="title">Exclusive A Levels Resources</h2>
          <br />
          <div className="schemalinks">
            <a href="https://ignitetraininginstitute.com/blog/british-curriculum-guide">British Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/a-level-qualifications">A-Level</a> | <a href="https://ignitetraininginstitute.com/blog/as-level-qualification">AS-Levels</a> | <a href="https://ignitetraininginstitute.com/blog/a-level-qualifications">A-Level Qualifications</a> | <a href="https://ignitetraininginstitute.com/blog/as-level-university-requirement">AS Level University Requirements</a> | <a href="https://ignitetraininginstitute.com/blog/what-is-the-difference-between-edexcel-and-cambridge">Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/blog/cambridge-a-level-courses">Cambridge A-Level Courses</a> | <a href="https://ignitetraininginstitute.com/blog/a-levels-subjects">A Levels Subjects</a> | <a href="https://ignitetraininginstitute.com/blog/why-choose-a-levels">Why Choose A Levels?</a> | <a href="https://ignitetraininginstitute.com/blog/a-level-grading-system">A-Level Grading System</a> | <a href="https://ignitetraininginstitute.com/blog/what-is-the-difference-between-edexcel-and-cambridge">Difference Between Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/blog/a-level-subjects-for-pyschology">A-Level Subjects For Psychology</a> | <a href="https://ignitetraininginstitute.com/blog/a-level-arts-subjects">A-Level Arts Subjects</a> | <a href="https://ignitetraininginstitute.com/blog/a-levels-chemistry">A Levels Chemistry</a> | <a href="https://ignitetraininginstitute.com/blog/edexcel-a-level-economics">Edexcel A Level Economics</a> | <a href="https://ignitetraininginstitute.com/blog/a-level-physics-course">A-Level Physics</a> | <a href="https://ignitetraininginstitute.com/blog/a-level-maths-grades">A Level Maths Grade</a> | <a href="https://ignitetraininginstitute.com/blog/a-level-computer-science-course">A Level Computer Science</a> | <a href="https://ignitetraininginstitute.com/blog/triple-science-vs-combined-science-what-to-choose">Triple Science VS Combined Science</a> | <a href="https://ignitetraininginstitute.com/blog/indian-curriculum-vs-british-curriculum">Indian Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/difference-between-american-and-british-curriculum">Difference Between American And British Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/ib-curriculum-vs-british-curriculum">IB Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/a-levels-vs-cbse">A-Levels VS CBSE</a> | <a href="https://ignitetraininginstitute.com/blog/a-levels-vs-ibdp-comparison">A-Levels VS IBDP</a> | <a href="https://ignitetraininginstitute.com/blog/difference-between-gcse-and-a-levels">Differences Between GCSE & A-Levels</a> | <a href="https://ignitetraininginstitute.com/blog/a-level-schools-in-dubai">A-Level Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/blog/british-curriculum-schools">British Curriculum Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/blog/british-curriculum-schools-in-abu-dhabi">British Curriculum Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/blog/british-curriculum-schools-in-sharjah">British Curriculum Schools In Sharjah</a>
          </div>

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
      `}</style>
    </div>
  );
}
