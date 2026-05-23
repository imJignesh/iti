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
          <h2 className="title">British Curriculum Tutors In Dubai For Year 8 To Year 13 Students</h2>
          <p className="subtitle">British Curriculum tutors in Dubai support students through Years 8, 9, 10, 11, 12, and 13, covering Key Stage 3, IGCSE/GCSE, and AS/A-Level. At Ignite Training Institute, our tutors work with students preparing for all three British exam boards (CAIE, Pearson Edexcel, and Oxford AQA), focusing on subject mastery, past paper technique, and the kind of structured exam preparation that decides final grades.<br /><br />The British Curriculum is the most chosen international framework in Dubai, with around 36% of private school students enrolled in it. That popularity comes with pressure. Year 9 is when subject choices for IGCSE start to matter. Year 10 and Year 11 are externally examined GCSE/IGCSE years. Year 12 and Year 13 are AS and A2, with UCAS predicted grades sent to UK universities by 15 January of Year 13. Each transition tightens the timeline, and most parents reach out to Ignite when their child is at one of these inflection points rather than well before.<br /><br />Our work is built around where the student actually sits. We diagnose subject gaps and exam board specifics in the first session, build a weekly study plan around the student's school pacing, and use past paper work and timed practice to bring grades up steadily. Year 8 and Year 9 students get foundation-building support that pays off when KS4 starts. Year 10 to Year 13 students get exam-focused work calibrated to their specific board's papers and grade boundaries.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">What Is The British Curriculum: Key Stages 3, 4, And 5 Explained For UAE Parents</h2>
          <p className="subtitle">The British Curriculum (also called the National Curriculum for England) runs through five Key Stages, but for Dubai families with secondary-aged children, three matter most. Key Stage 3 covers Years 7 to 9 and lays foundations across English, Maths, Sciences, Humanities, and Languages. Key Stage 4 covers Years 10 and 11, ending in IGCSE or GCSE external exams. Key Stage 5 covers Years 12 and 13, ending in AS-Level (Year 12) and A-Level (Year 13) external exams.<br /><br />What makes the British Curriculum different from IB or American is the linear, exam-anchored structure. IGCSE and A-Level are externally marked qualifications with set syllabi, published past papers going back many years, and predictable command-term-driven mark schemes. That structure is a gift if you tutor against it deliberately. It is unforgiving if the student is not exam-ready by the end of Year 11 or Year 13.<br /><br />For parents in the UAE, two further details matter. First, KHDA, ADEK, and SPEA inspect British curriculum schools regularly, so school standards are tracked. Second, Arabic and Islamic Studies are mandated alongside the British curriculum in UAE schools, which adds to the workload that schools in the UK do not carry. Tutoring strategy should account for this, particularly in Year 10 and Year 11 when external exam preparation overlaps with mandatory ministry subjects.</p>
          <br />

          <h2 className="title">British Curriculum Tuition In Dubai Across CAIE, Pearson Edexcel, And Oxford AQA</h2>
          <p className="subtitle">British Curriculum tuition in Dubai needs to be exam-board-specific because the three boards (Cambridge Assessment International Education, Pearson Edexcel, and Oxford AQA) set different papers, mark schemes, and grade boundaries. A strong CAIE Maths tutor is not automatically a strong Edexcel Maths tutor. The syllabus codes are different (e.g., CAIE IGCSE Maths 0580 vs Edexcel IGCSE Maths 4MA1), the paper structures differ, and the question styles vary even when the underlying content overlaps.<br /><br />Ignite's British Curriculum tutors are matched to the student's specific exam board before sessions start. We confirm whether the student is sitting CAIE, Edexcel, or Oxford AQA in each subject (a single student often has different boards for different subjects depending on what their school offers), then plan past paper work around that exact specification. For IGCSE Sciences, we cover both Double Award and Combined Science routes. For Maths, we cover Core, Extended, Further Maths, and Statistics depending on the student's pathway.<br /><br />Oxford AQA is worth a specific mention because it has grown in UAE schools recently. Some Dubai schools offer Oxford AQA International A-Levels alongside or instead of CAIE, and the assessment structure differs from both Cambridge and Edexcel. We tutor across all three, and we update our teaching materials with each board's specification revisions so students can prepare for the exact paper they will sit.</p>
          <br />

          <h2 className="title">British Curriculum Classes In Dubai For Year 9, Year 10, And Year 11 (KS3 To IGCSE/GCSE)</h2>
          <p className="subtitle">British Curriculum classes in Dubai across Year 9 to Year 11 are where a lot of the predicted-grade work happens. Year 9 is the bridge year. It is the last year of Key Stage 3 and the year when students choose IGCSE option subjects (typically the last 4 subjects on top of the mandatory English, Maths, and Sciences). Online Year 9 tuition at Ignite focuses on consolidating KS3 content, building exam technique habits before they matter, and helping with subject choice ahead of the Year 10 transition.<br /><br />Year 10 and Year 11 are the IGCSE and GCSE years. Most international British schools in Dubai use IGCSE rather than GCSE because IGCSE is designed for international cohorts and is offered by both CAIE and Edexcel. GCSE is the UK domestic version offered primarily by AQA, Edexcel, and OCR. The content overlaps significantly between IGCSE and GCSE, but the papers are not identical, particularly in English Literature and the humanities, where IGCSE often allows broader text choice. Ignite covers both routes, matched to whatever the student's school offers.<br /><br />For deeper IGCSE-specific support across all subjects, papers, and grading from 9-1, we run a dedicated IGCSE programme covered on our <a href="https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>IGCSE tutors page</a>. The British Curriculum hub support here is the wider context. The leaf page is the deep dive.</p>
          <br />

          <h2 className="title">British Curriculum Coaching For Year 12 And Year 13 (AS And A-Level)</h2>
          <p className="subtitle">British Curriculum coaching for Year 12 and Year 13 students is structured around the AS-Level and A-Level external exams that finalise university applications. Year 12 typically sits AS-Level papers in the May/June series. Year 13 sits A2 papers, which combine with AS results to give the final A-Level grade. Some boards have moved to fully linear A-Levels where all assessment happens at the end of Year 13, while others retain the modular AS-then-A2 structure. We confirm the student's pathway in the first session.<br /><br />The Year 12 to Year 13 window is where predicted grades crystallise. Most UAE international schools submit predicted A-Level grades on the UCAS form by 15 January of Year 13 for UK university applications, and earlier for US applications. The push to lift a predicted B to a predicted A has to happen in the first 14 months of Sixth Form, not the last 3. Year 12 students who join Ignite for one strong subject often see that subject move two grade boundaries by the time predicted grades land.<br /><br />For deeper A-Level-specific support across subject choices, UCAS planning, and Russell Group entry requirements, see our <a href="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>A-Level tutors page</a>. This page covers the wider British Curriculum context.</p>
          <br />

          <h2 className="title">British Curriculum Vs IB Vs CBSE: How UAE Parents Choose Between Curricula?</h2>
          <p className="subtitle">UAE parents choose between curricula more often than parents in most other countries because Dubai schools offer all three at scale. Each rewards different student profiles. The British Curriculum rewards focused subject depth, exam-driven preparation, and clear linear pathways to university. The IB rewards a broad academic range, written analysis across six subjects simultaneously, and project-management-heavy independent work like the Extended Essay and TOK essay. CBSE rewards procedural fluency, content recall, and structured numeric assessment.<br /><br />For students aiming at UK universities, the British Curriculum is usually the path of least resistance. UCAS offers are typically expressed in A-Level grades (e.g., AAB or A*AA), which makes the predicted grade conversation simpler. For students aiming at US universities, both British and IB work, but admissions officers often weigh IB's Extended Essay and TOK favourably. For students likely to apply to Indian universities or sit the Indian engineering or medical entrances, CBSE is structurally better suited.<br /><br />The right curriculum is also about the student's working style. Students who prefer focused subject depth and clear exam preparation often do better in British. Students who prefer breadth, written analysis, and self-directed projects often do better in IB. There is no universal answer, only the best fit for the specific student.</p>
          <br />

          <h2 className="title">Online British Curriculum Tutoring In Dubai Vs In-Person Sessions: Which Format Works?</h2>
          <p className="subtitle">Online British Curriculum tutoring in Dubai works particularly well for Year 9 onwards because workload increases sharply once IGCSE preparation begins. Online Year 9, Year 10, and Year 11 sessions cut commute time and let students fit tutoring around school, sports, and homework. Online IGCSE classes in Dubai also work well for students whose schools are far from our centres, or families in Abu Dhabi, Sharjah, and the wider UAE who need British-curriculum-trained tutors but cannot commute to Dubai.<br /><br />In-person British Curriculum tutoring at Ignite's DIFC and JLT centres still suits some students better, particularly those working on Maths, Further Maths, or Sciences, where shared whiteboard problem-solving speeds up understanding. Our DIFC and JLT centres serve families across Sheikh Zayed Road, Downtown, Business Bay, JLT, JBR, and Dubai Marina.<br /><br />Year 8 students often start in-person to build the structured study habit, then move online once they are comfortable. Year 13 students often run hybrid weeks, with one or two subjects in-person and others online based on which need shared whiteboard work. Small Group Tutoring (SGT) with three to six students at the same year and exam board is also available across both formats and works particularly well for Economics, Business Studies, and English Literature.</p>
          <br />

          <h2 className="title">How Does Ignite's British Curriculum Tutoring Guide Students To Success?</h2>
          <p className="subtitle">Ignite's British Curriculum tutoring is built around six teaching pillars that map directly to how British Curriculum students are assessed. These run across IGCSE, GCSE, AS, and A-Level support for all three exam boards.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>1. British Curriculum Subjects Support**</h3>
          <p className="subtitle">Subject support spans the full British Curriculum range: Maths (Core and Extended), Further Maths, Statistics, Physics, Chemistry, Biology, Computer Science and ICT, IGCSE/GCSE Double Award Science, Combined Science, Environmental Management, Business Studies, Economics, Accounting, English Language, English Literature, French, and Spanish. Each subject is taught at the level the student is sitting, not generic content.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>2. British Curriculum Personalised Training**</h3>
          <p className="subtitle">Every new student at Ignite starts with a diagnostic in their weak subject in the first session. We identify which topic strands are dragging the grade down (in Maths, it is often algebra and trigonometry; in Sciences, it is often application questions; in Economics, it is often Paper 2 essay structure). The lesson plan is then built around closing those specific strands.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>3. British Curriculum Syllabus Completion**</h3>
          <p className="subtitle">For May/June exam candidates, our planning aim is full syllabus coverage by mid-March, leaving roughly 8 to 10 weeks for revision, mocks, and past paper practice. November and January sitting candidates follow a shifted calendar. Students who join us mid-year get an accelerated catch-up plan that prioritises the highest-weight topics first.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>4. British Curriculum Past Paper Solving**</h3>
          <p className="subtitle">We work through past papers from recent series across CAIE, Edexcel, and Oxford AQA, depending on the student's specific board. Each question is mapped to the official mark scheme, command terms are decoded (the difference between "describe" and "explain" is often four marks), and students work under timed exam conditions, so the paper-day pacing becomes second nature.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>5. Complete British Curriculum Revision**</h3>
          <p className="subtitle">Revision is organised by subject and exam board specification, not by generic topic order. We build the revision plan around the student's specific syllabus document, particularly important for Sciences and Maths, where CAIE, Edexcel, and Oxford AQA cover overlapping but not identical content. Year 11 and Year 13 revision intensifies in the final term before May/June examinations.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>#British Curriculum Exam Strategies</h3>
          <p className="subtitle">British Curriculum papers reward students who answer the question that was actually asked, not the one they remember preparing for. We coach students on board-specific command terms (analyse, evaluate, justify, compare, distinguish, suggest), on writing mark-scheme-aligned responses, and on time allocation across paper sections. These are skills, not knowledge, and they respond well to deliberate practice across a few weeks.</p>
          <br />

          <h2 className="title">Why Parents & Students In Dubai Choose Ignite Training Institute For British Curriculum Support?</h2>
          <p className="subtitle">Ignite Training Institute has been guiding British Curriculum students in Dubai for over 10 years, with tutors who specialise in IGCSE, GCSE, AS, and A-Level across CAIE, Pearson Edexcel, and Oxford AQA. We support Year 8 to Year 13 students with over 1,000 British-curriculum-specific practice resources, run dedicated programmes for IGCSE and A-Level cohorts, and back every enrolment with a free demo class so families can assess fit before committing.<br /><br />Our students come to Ignite from British international schools across Dubai, and the work happens in two formats. Bespoke One-on-One Tutoring suits students who need fully individualised pacing or are pushing a weak subject up before mocks. Small Group Tutoring (SGT) with three to six students in the same year and exam board works well for Economics, Business Studies, and English Literature, where group analysis adds genuine value. Both formats are available online and in person.<br /><br />One Ignite parent shared that their daughter recently achieved A* grades in Maths, Physics, Chemistry, and Biology with us. The teachers' personalised attention and availability for any clarification made the difference, particularly across the four-subject load that many science-route students carry. Another A-Level student worked with us on Economics outside of school and achieved two A's in his AS papers, with P3 and P4 still ahead. He found the structured approach more effective than school sessions alone.<br /><br />If your child is in Year 8, 9, 10, 11, 12, or 13 and needs help across British Curriculum subjects, focused support for one weak subject, or coaching through IGCSE or A-Level exam preparation, Ignite can match them with the right tutor and the right format. Our specialisations span <a href="https://ignitetraininginstitute.com/maths-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Maths</a>, <a href="https://ignitetraininginstitute.com/physics-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Physics</a>, <a href="https://ignitetraininginstitute.com/chemistry-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Chemistry</a>, <a href="https://ignitetraininginstitute.com/biology-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Biology</a>, <a href="https://ignitetraininginstitute.com/computer-science-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Computer Science</a>, <a href="https://ignitetraininginstitute.com/economics-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Economics</a>, <a href="https://ignitetraininginstitute.com/business-studies-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Business Studies</a>, <a href="https://ignitetraininginstitute.com/english-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>English</a>, <a href="https://ignitetraininginstitute.com/french-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>French</a>, <a href="https://ignitetraininginstitute.com/spanish-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Spanish</a>, and <a href="https://ignitetraininginstitute.com/accounting-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Accounting</a>. Book a <a href="https://ignitetraininginstitute.com/join-free-demo-class" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>free demo class</a> to meet a tutor and see how a real session would work for your child, or <a href="https://ignitetraininginstitute.com/contact-us" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>contact us</a> to discuss a study plan.</p>
          <br />

          <h2 className="title">Exclusive British Curriculum Resources</h2>
          <br />
          <div className="schemalinks">
            <a href="https://ignitetraininginstitute.com/blog/british-curriculum-guide">British Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/a-level-qualifications">A-Level</a> | <a href="https://ignitetraininginstitute.com/blog/as-level-qualification">AS-Levels</a> | <a href="https://ignitetraininginstitute.com/blog/gcse-guide">GCSE</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-curriculum">What Is IGCSE Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/a-level-qualifications">A-Level Qualifications</a> | <a href="https://ignitetraininginstitute.com/blog/cambridge-igcse-guide">Cambridge IGCSE</a> | <a href="https://ignitetraininginstitute.com/blog/cambridge-a-level-courses">Cambridge A-Level Courses</a> | <a href="https://ignitetraininginstitute.com/blog/what-is-aqa-gcse">What Is AQA GCSE</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-exams">IGCSE Exams 2025</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-grades-explained">IGCSE Grades</a> | <a href="https://ignitetraininginstitute.com/blog/what-is-the-difference-between-edexcel-and-cambridge">Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/blog/a-levels-subjects">A Levels Subjects</a> | <a href="https://ignitetraininginstitute.com/blog/pearson-edexcel-igcse">Pearson Edexcel IGCSE</a> | <a href="https://ignitetraininginstitute.com/blog/cambridge-igcse-guide">Cambridge IGCSE</a> | <a href="https://ignitetraininginstitute.com/blog/why-choose-a-levels">Why Choose A Levels?</a> | <a href="https://ignitetraininginstitute.com/blog/are-gcses-important">Are GCSEs Important</a> | <a href="https://ignitetraininginstitute.com/blog/gcse-grading-system">New Vs Old GCSE Grading System</a> | <a href="https://ignitetraininginstitute.com/blog/a-level-grading-system">A-Level Grading System</a> | <a href="https://ignitetraininginstitute.com/blog/universities-that-accept-igcse-certificate">Universities That Accept IGCSE Certificate In USA & UK</a> | <a href="https://ignitetraininginstitute.com/blog/as-level-university-requirement">AS Level University Requirements</a> | <a href="https://ignitetraininginstitute.com/blog/what-is-the-difference-between-edexcel-and-cambridge">Difference Between Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/blog/a-level-subjects-for-pyschology">A-Level Subjects For Psychology</a> | <a href="https://ignitetraininginstitute.com/blog/a-level-arts-subjects">A-Level Arts Subjects</a> | <a href="https://ignitetraininginstitute.com/blog/edexcel-a-level-economics">Edexcel A Level Economics</a> | <a href="https://ignitetraininginstitute.com/blog/a-levels-chemistry">A Levels Chemistry</a> | <a href="https://ignitetraininginstitute.com/blog/a-level-physics-course">A-Level Physics</a> | <a href="https://ignitetraininginstitute.com/blog/a-level-maths-grades">A Level Maths Grade</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-chemistry">IGCSE Chemistry</a> | <a href="https://ignitetraininginstitute.com/blog/what-do-you-do-in-gcse-photography">GCSE Photography</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-accounting-syllabus-overview-key-takeaways">IGCSE Accounting</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-biology">IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-physics">IGCSE Physics</a> | <a href="https://ignitetraininginstitute.com/blog/how-to-study-for-igcse">How To Study For IGCSE</a> | <a href="https://ignitetraininginstitute.com/blog/how-to-study-for-igcse-biology">How To Study For IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/blog/how-to-revise-for-business-studies-gcse">How To Revise For Business Studies GCSE</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-computer-science">IGCSE Computer Science</a> | <a href="https://ignitetraininginstitute.com/blog/edexcel-igcse-biology-syllabus">Edexcel IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/blog/aqa-vs-cie">AQA VS CIE</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-vs-cbse">IGCSE VS CBSE</a> | <a href="https://ignitetraininginstitute.com/blog/triple-science-vs-combined-science-what-to-choose">Triple Science VS Combined Science</a> | <a href="https://ignitetraininginstitute.com/blog/easiest-igcse-subjects">Easiest IGCSE Subjects</a> | <a href="https://ignitetraininginstitute.com/blog/indian-curriculum-vs-british-curriculum">Indian Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/difference-between-american-and-british-curriculum">Difference Between American And British Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/ib-curriculum-vs-british-curriculum">IB Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/a-levels-vs-cbse">A-Levels VS CBSE</a> | <a href="https://ignitetraininginstitute.com/blog/a-levels-vs-ibdp-comparison">A-Levels VS IBDP</a> | <a href="https://ignitetraininginstitute.com/blog/igcse-vs-gcse-comparison">IGCSE VS GCSE</a> | <a href="https://ignitetraininginstitute.com/blog/difference-between-gcse-and-a-levels">Differences Between GCSE & A-Levels</a> | <a href="https://ignitetraininginstitute.com/blog/ib-vs-igcse-program">IB VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/blog/sat-vs-igcse">SAT VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/blog/british-curriculum-schools">British Curriculum Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/blog/british-curriculum-schools-in-abu-dhabi">British Curriculum Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/blog/british-curriculum-schools-in-sharjah">British Curriculum Schools In Sharjah</a>
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
