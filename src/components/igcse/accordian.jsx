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
          <h2 className="title">IGCSE Tutors In Dubai For Year 8 To Year 11 Students</h2>
          <p className="subtitle">IGCSE tutors in Dubai support students through Year 8, Year 9, Year 10, and Year 11, covering Key Stage 3 foundations and the two external exam years that finalise the IGCSE qualification. At Ignite Training Institute, our IGCSE tutors prepare students for both May/June and October/November exam series, with focused work on subject mastery, past paper technique, and the exam-board-specific mark schemes that decide final grades.<br /><br />The IGCSE is the most chosen Year 10-11 qualification across Dubai's British international schools, sat under either Cambridge International (CAIE), Pearson Edexcel, or Oxford International AQA. Most students reach out for tutoring at one of three points: the Year 9 to Year 10 transition, Year 10 mid-term mocks when grades become visible, or after Year 11 autumn mocks when predicted grades land for sixth form applications.<br /><br />We diagnose subject gaps and exam board specifics in the first session, build a study plan around the student's school pacing, and use past paper work to bring grades up steadily. Year 10 and Year 11 students get exam-focused work calibrated to their board's papers and the 9-1 grade boundaries.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">IGCSE VS GCSE: Which Curriculum Does Your Child's School In Dubai Follow?</h2>
          <p className="subtitle">IGCSE and GCSE share most of their content but differ in structure, exam board availability, and grading timing. IGCSE (International General Certificate of Secondary Education) is offered by Cambridge International, Pearson Edexcel International, and Oxford International AQA, designed for international cohorts. GCSE is the UK domestic version, offered primarily by AQA, Pearson Edexcel UK, OCR, and WJEC.<br /><br />Most Dubai British schools offer IGCSE rather than GCSE because IGCSE allows broader text choice in English Literature, runs both January and June exam series for some boards (Edexcel International), and avoids UK-specific compulsory components. A handful of British schools in Dubai offer GCSE, particularly those that follow the UK National Curriculum strictly. Our <a href="https://ignitetraininginstitute.com/blog/igcse-vs-gcse-comparison" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>comparison guide on IGCSE vs GCSE</a> covers the full distinction in detail.<br /><br />What matters for tutoring: past papers and mark schemes are different. A strong IGCSE Maths CAIE 0580 tutor is not automatically a strong GCSE Maths AQA 8300 tutor. Ignite confirms which exact specification the student is sitting before sessions start, then plans past paper work around that exact code.</p>
          <br />

          <h2 className="title">IGCSE Tuition In Dubai Across Edexcel, CAIE, And Oxford AQA</h2>
          <p className="subtitle">IGCSE tuition in Dubai needs to be exam-board-specific because each board sets different syllabus codes, paper structures, and grading boundaries. The differences look small on paper and matter a lot in practice.<br /><br />For Maths: CAIE 0580 (Core/Extended) or 0606 (Additional Maths), Edexcel International 4MA1, Oxford AQA 9260. For Physics: CAIE 0625, Edexcel 4PH1, Oxford AQA 9630. Chemistry: CAIE 0620, Edexcel 4CH1, Oxford AQA 9620. Biology: CAIE 0610, Edexcel 4BI1, Oxford AQA 9610. English Language: CAIE 0500 or 0510/0511, Edexcel 4EA1. Economics: CAIE 0455, Edexcel 4EC1.<br /><br />Both CAIE and Edexcel International grade on the 9-1 scale (9 highest), aligned with UK GCSE since 2017. Edexcel runs January and June series, giving retake flexibility CAIE does not offer. Ignite's tutors are matched to the student's specific board for each subject, with mock exams and unit worksheets calibrated to that exact specification.</p>
          <br />

          <h2 className="title">IGCSE Subject-Specific Tutoring: Maths, Sciences, English, And More</h2>
          <p className="subtitle">IGCSE subject-specific tutoring is where most grade improvement happens, because each subject rewards different exam techniques. <a href="https://ignitetraininginstitute.com/maths-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>IGCSE Maths</a> splits into Core (target grade 5 maximum) and Extended (target up to 9). Extended Paper 4 includes algebra, trigonometry, and vectors that Core students never see. Students aiming for sixth form Maths AA HL or A-Level Further Maths should sit Extended.<br /><br /><a href="https://ignitetraininginstitute.com/physics-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>IGCSE Sciences</a> is split into Combined Science (Double Award), Triple Science, or single sciences. <a href="https://ignitetraininginstitute.com/physics-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Physics</a>, <a href="https://ignitetraininginstitute.com/chemistry-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Chemistry</a>, and <a href="https://ignitetraininginstitute.com/biology-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Biology</a> reward students who handle calculation questions in Paper 4 alongside conceptual understanding. Practical assessment skills are tested on Paper 6. Our guide on <a href="https://ignitetraininginstitute.com/blog/triple-science-vs-combined-science-what-to-choose" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Triple Science vs Combined Science</a> helps families pick the right route.<br /><br /><a href="https://ignitetraininginstitute.com/english-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>IGCSE English Language</a> and English Literature reward analytical writing under timed conditions. <a href="https://ignitetraininginstitute.com/economics-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Economics</a>, <a href="https://ignitetraininginstitute.com/business-studies-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Business Studies</a>, <a href="https://ignitetraininginstitute.com/accounting-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Accounting</a>, <a href="https://ignitetraininginstitute.com/computer-science-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Computer Science</a>, <a href="https://ignitetraininginstitute.com/psychology-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Psychology</a>, <a href="https://ignitetraininginstitute.com/french-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>French</a>, and <a href="https://ignitetraininginstitute.com/spanish-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Spanish</a> round out coverage, alongside Further Maths, Statistics, and EVM.</p>
          <br />

          <h2 className="title">IGCSE Coaching Classes In Dubai For Year 10 And Year 11 Cohorts</h2>
          <p className="subtitle">IGCSE coaching classes at Ignite run as structured 10-month programmes from September to June, mapped to the school academic calendar. Two group programmes serve different year cohorts.<br /><br />The <strong>IGCSE Year 10 Group</strong> runs as small-group coaching (3 to 6 students) with weekly sessions across all IGCSE subjects, focused on building strong foundations before Year 11 finals. Sessions prepare students ahead of school formative and summative assessments. Continuous progress tracking through unit tests shows where the student stands month by month.<br /><br />The IGCSE <strong>Finals Prep Group</strong> is the 80+ hour Year 11 programme for students writing May/June finals. The cohort moves together through full IGCSE syllabus completion, intensive past paper practice, unit-wise worksheets tailored to Edexcel, CAIE, or Oxford AQA, and a full mock exam series under timed conditions. Detailed paper review sessions follow each mock so students see exactly where marks were lost.<br /><br />For students who need fully individualised pacing, the year-round Bespoke One-to-One programme runs alongside both group programmes as IGCSE private tuition. It starts with a diagnostic assessment, builds a personalised lesson plan, and is best suited for Year 8, 9, or 10 students working on specific weak subjects.</p>
          <br />

          <h2 className="title">IGCSE Tuition Centre In Dubai (Near Me): DIFC, JLT, And Across The UAE</h2>
          <p className="subtitle">Ignite operates as an IGCSE tuition centre across two Dubai locations, with sessions also available fully online for students who cannot commute or who live outside Dubai. The DIFC centre at Sheikh Zayed Road serves families from Downtown, Business Bay, Bur Dubai, and Deira. The JLT centre at Jumeirah Lake Towers serves families from JLT, JBR, Dubai Marina, Dubai Internet City, Tecom, and Dubai Hills.<br /><br />For families searching for "IGCSE tutor near me" or "IGCSE coaching classes near me," the in-person centres work for most Dubai catchments. Both sit on the metro line and are within 20-30 minutes of most British international schools. Students from Greens, Al Barsha, Springs, and Meadows typically use the JLT centre. For students in Abu Dhabi, Sharjah, Ajman, and the wider UAE, online IGCSE tutoring delivers the same tutors and the same group programmes.</p>
          <br />

          <h2 className="title">When Should Students Start IGCSE Tutoring In Dubai? (Year 8, 9, Or 10)</h2>
          <p className="subtitle">The honest answer depends on which Year the student is in.<br /><br /><strong>Year 8 students</strong> benefit from starting if they are switching curricula (CBSE, ICSE, American to British) and need to align with British academic conventions before Year 9 option choices.<br /><br /><strong>Year 9 students</strong> benefit from starting at the IGCSE option-choice point. This is when subjects for Year 10-11 IGCSE get locked in (the standard 8-10 IGCSEs across English, Maths, Sciences, plus options). Tutoring helps with subject choice (Triple Science vs Combined, Maths Extended vs Core, IGCSE Further Maths) and builds the foundations Year 10 will demand.<br /><br /><strong>Year 10 students</strong> benefit from starting in September, the most common entry point at Ignite. Year 10 has the heaviest content load because new IGCSE-level material arrives every week, and gaps left until Year 11 rarely close in time.<br /><br /><strong>Year 11 students</strong> benefit from starting whenever the gap becomes visible, often after autumn mocks. Year 11 work is more compressed and focused on past paper technique, command terms, and timed practice. Lifting one weak subject from a 6 to a 7-8 by May is realistic; lifting three across the board is much harder by Year 11.</p>
          <br />

          <h2 className="title">Online IGCSE Classes In Dubai And Abu Dhabi For UAE Students</h2>
          <p className="subtitle">Online IGCSE classes at Ignite are available across Year 8, Year 9, Year 10, and Year 11 for students anywhere in the UAE. Year 11 students particularly benefit from online sessions because Year 11 has the heaviest workload of the IGCSE programme. Cutting commute time by 3 to 5 hours per week converts directly into past paper practice or revision.<br /><br />Online IGCSE tutoring in Abu Dhabi gives families access to Dubai-based IGCSE tutors without the commute. Ignite supports students from international schools across Abu Dhabi, Sharjah, Ajman, and the broader UAE. Sessions run live with interactive whiteboards, real-time mark-scheme annotation, and recordings students can review before mocks. Small Group Tutoring (SGT) of 3 to 6 students at the same year and exam board is also available online, working well for Economics, Business Studies, and Languages.<br /><br />In-person sessions at the DIFC and JLT centres remain preferred for some students, particularly in Maths and Sciences where shared whiteboard problem-solving speeds up understanding. Most Ignite students switch between formats depending on the week and subject.</p>
          <br />

          <h2 className="title">Inside Ignite's IGCSE Coaching: From Diagnostic To Final Exam</h2>
          <p className="subtitle">Ignite's IGCSE coaching follows six teaching pillars across the full Year 10 to Year 11 journey, mapped to how IGCSE students are actually assessed. The same pillars run across the IGCSE Year 10 Group, the IGCSE Finals Prep Group for Year 11, and Bespoke One-to-One Tutoring.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>1. IGCSE Subject Support At Core And Extended Levels</h3>
          <p className="subtitle">Subject support spans Maths (Core and Extended), Further Maths, Statistics, Physics, Chemistry, Biology, Computer Science, Double Award Science, Economics, Business Studies, Accounting, English Language and Literature, French, Spanish, Psychology, and EVM. Each subject is taught at the level and board the student is sitting.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>2. IGCSE Personalised Training Based On Diagnostic Assessment</h3>
          <p className="subtitle">Every new student starts with a diagnostic in their weak subject. We identify which topic strands are dragging the grade down (in Maths it is often algebra and trigonometry; in Sciences it is often application and Paper 6 practical questions; in English Literature it is often essay structure). The lesson plan is then built around closing those specific strands.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>3. IGCSE Syllabus Completion Aligned With School Pacing</h3>
          <p className="subtitle">For May/June candidates, planning aims for full syllabus coverage by mid-March, leaving 8 to 10 weeks for revision, mocks, and past paper practice. October/November candidates follow a shifted calendar. Mid-year joiners get an accelerated catch-up plan that prioritises the highest-weight topics first.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>4. IGCSE Past Paper Solving Across All Three Exam Boards</h3>
          <p className="subtitle">We work through past papers from recent series across Edexcel, CAIE, and Oxford AQA based on the student's specific board. Each question is mapped to the official mark scheme, command terms are decoded, and students sit timed papers under exam conditions so paper-day pacing becomes second nature.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>5. Complete IGCSE Revision Aligned With 9-1 Grade Boundaries</h3>
          <p className="subtitle">Revision is targeted at the gap between the student's current grade and their next grade boundary. Lifting a 6 to a 7 needs different work from lifting a 4 to a 5, and revision is calibrated accordingly. Year 11 revision intensifies before May/June finals.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>6. IGCSE Exam Strategies For Command Terms And Mark Scheme Alignment</h3>
          <p className="subtitle">IGCSE papers reward students who answer the question that was actually asked. We coach students on board-specific command terms (describe, explain, evaluate, calculate, compare, distinguish), on writing mark-scheme-aligned responses, and on time allocation across paper sections. These are skills, not knowledge.</p>
          <br />

          <h2 className="title">Why Parents And IGCSE Students In Dubai Choose Ignite Training Institute?</h2>
          <p className="subtitle">Ignite Training Institute has guided IGCSE students in Dubai for over 10 years, with subject specialists across Maths, Sciences, English, Humanities, and Languages. Our tutors include Masab and Abdul (10+ and 13+ years in Maths), Harsha (10+ years in Economics and Business), Saranya (8+ years in Physics), Shwetha (6+ years in Biology), and Irtiqa (6+ years in Computer Science). We back every enrolment with a free demo class so families can assess fit before committing.<br /><br />One Ignite student, Hassan, came to us scoring 5s and 6s at the start of his GCSEs and went on to sit his finals with grades of 8s and 9s. Another long-term student, Zeynep, completed three years with Ignite across IGCSE Sciences, Maths, IB Maths, IB Biology, and Spanish, earning offers from UCL and the University of Edinburgh.<br /><br />If your child is in Year 8, 9, 10, or 11 and needs help across IGCSE subjects, focused support for one weak subject, or coaching through Year 11 finals, Ignite can match them with the right tutor and format. Book a <a href="https://ignitetraininginstitute.com/join-free-demo-class" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>free demo class</a> to meet a tutor, or <a href="https://ignitetraininginstitute.com/contact-us" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>contact us</a> to discuss a study plan.</p>
          <br />

          <h2 className="title">Exclusive IGCSE Resources</h2>
          <br />
          <div className="schemalinks">
            <a href="https://ignitetraininginstitute.com/blog/british-curriculum-guide">British Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/gcse-guide">GCSE</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-curriculum">What Is IGCSE Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/cambridge-igcse-guide">Cambridge IGCSE</a> | <a href="https://ignitetraininginstitute.com/blog/what-is-aqa-gcse">What Is AQA GCSE</a> | <a href="https://ignitetraininginstitute.com/blog/what-is-the-difference-between-edexcel-and-cambridge">Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/blog/pearson-edexcel-igcse">Pearson Edexcel IGCSE</a> | <a href="https://ignitetraininginstitute.com/blog/cambridge-igcse-guide">Cambridge IGCSE</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-exams">IGCSE Exams 2025</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-grades-explained">IGCSE Grades</a> | <a href="https://ignitetraininginstitute.com/blog/gcse-grading-system">GCSE Grading System</a> | <a href="https://ignitetraininginstitute.com/blog/gcse-grading-system">New Vs Old GCSE Grading System</a> | <a href="https://ignitetraininginstitute.com/blog/are-gcses-important">Are GCSEs Important</a> | <a href="https://ignitetraininginstitute.com/blog/how-to-study-for-igcse">How To Study For IGCSE</a> | <a href="https://ignitetraininginstitute.com/blog/universities-that-accept-igcse-certificate">Universities That Accept IGCSE Certificate In USA & UK</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-chemistry">IGCSE Chemistry</a> | <a href="https://ignitetraininginstitute.com/blog/what-do-you-do-in-gcse-photography">GCSE Photography</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-accounting-syllabus-overview-key-takeaways">IGCSE Accounting</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-biology">IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-physics">IGCSE Physics</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-computer-science">IGCSE Computer Science</a> | <a href="https://ignitetraininginstitute.com/blog/edexcel-igcse-biology-syllabus">Edexcel IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/blog/how-to-study-for-igcse-biology">How To Study For IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/blog/how-to-revise-for-business-studies-gcse">How To Revise For Business Studies GCSE</a> | <a href="https://ignitetraininginstitute.com/blog/aqa-vs-cie">AQA VS CIE</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-vs-cbse">IGCSE VS CBSE</a> | <a href="https://ignitetraininginstitute.com/blog/triple-science-vs-combined-science-what-to-choose">Triple Science VS Combined Science</a> | <a href="https://ignitetraininginstitute.com/blog/easiest-igcse-subjects">Easiest IGCSE Subjects</a> | <a href="https://ignitetraininginstitute.com/blog/indian-curriculum-vs-british-curriculum">Indian Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/difference-between-american-and-british-curriculum">Difference Between American And British Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/ib-curriculum-vs-british-curriculum">IB Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-vs-gcse-comparison">IGCSE VS GCSE</a> | <a href="https://ignitetraininginstitute.com/blog/difference-between-gcse-and-a-levels">Differences Between GCSE & A-Levels</a> | <a href="https://ignitetraininginstitute.com/blog/ib-vs-igcse-program">IB VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/blog/sat-vs-igcse">SAT VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/blog/what-is-the-difference-between-edexcel-and-cambridge">Difference Between Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/igcse-chemistry/">I</a> | <a href="https://ignitetraininginstitute.com/blog/british-curriculum-schools">British Curriculum Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/blog/british-curriculum-schools-in-abu-dhabi">British Curriculum Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/blog/british-curriculum-schools-in-sharjah">British Curriculum Schools In Sharjah</a>
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
