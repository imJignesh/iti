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
          <h2 className="title">Expert Accounting Tutor In Dubai, UAE For Academic Confidence</h2>
          <p className="subtitle">Ignite Training Institute offers expert Accounting tutors in Dubai who specialize in building deep subject understanding and academic assurance. Whether you need help grasping financial statements or preparing for high-stakes exams, our tutors deliver personalized support that aligns with your academic goals. Students gain confidence through guided problem-solving and real-world examples. With focused attention and a strong curriculum-based approach, we help learners master concepts and perform better in class. Achieve clarity, accuracy, and better grades with our expert guidance. Trust us to help you unlock your potential in Accounting.</p>

        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title"><strong>Accounting Tutors In Dubai For IGCSE, A-Level, And Beyond</strong></h2>
          <p className="subtitle">Ignite Training Institute provides 1-on-1 accounting tutoring in Dubai for IGCSE, GCSE, A-Level, and AS-Level Accounting (Cambridge and Edexcel), plus support on the Finance and Accounts unit of IB Business Management and the accounting content within the new AP Business with Personal Finance course. Sessions run from our DIFC and JLT centres and online, with tutors matched to each exam board and a focus on double-entry accuracy, format discipline, and exam technique.</p><br />
          <p className="subtitle">Most students come to us when the double-entry logic stops making sense, when control accounts and adjustments start piling up, or when the presentation discipline that earns method marks slips under exam time pressure. Some join months ahead of mocks; others arrive with weeks to go and need focused work on specific question types. Every new student starts with a diagnostic so the tutor can see exactly where marks are being lost rather than re-teaching content the student already knows.</p><br />
          <p className="subtitle">We work with students from international schools across Dubai, including those at GEMS Wellington, Dubai College, Jumeirah College, JESS Ranches, Dubai American Academy, and Repton School Dubai, and with families across DIFC, JLT, Jumeirah, and the wider UAE. Accounting is a strong foundation for business, finance, and economics degrees, and a useful subject for any university route that involves quantitative reasoning.</p><br />

          <h3 className="title"><strong>Where Accounting Sits Across The Curriculums?</strong></h3>
          <div className="table-responsive my-3">
            <table className="table table-bordered text-white">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Level</th>
                  <th>Board / Codes</th>
                  <th>Standalone Accounting?</th>
                  <th>What We Support</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IGCSE Accounting</td>
                  <td>Year 10 to 11</td>
                  <td>Cambridge 0452 / 0985, Edexcel</td>
                  <td>Yes, standalone subject</td>
                  <td>Full syllabus, structured calculation papers</td>
                </tr>
                <tr>
                  <td>A-Level Accounting</td>
                  <td>AS + A2</td>
                  <td>Cambridge 9706, Edexcel IAL (WAC11/12)</td>
                  <td>Yes, standalone subject</td>
                  <td>Pure and applied questions, Paper 3 problem-solving</td>
                </tr>
                <tr>
                  <td>IB Business Management</td>
                  <td>DP SL and HL</td>
                  <td>IB</td>
                  <td>No standalone IB Accounting</td>
                  <td>Unit 3: Finance and Accounts</td>
                </tr>
                <tr>
                  <td>AP Business with Personal Finance</td>
                  <td>College Board</td>
                  <td>AP (from 2026 to 2027)</td>
                  <td>No standalone AP Accounting</td>
                  <td>Accounting content within the course</td>
                </tr>
                <tr>
                  <td>Introductory University Accounting</td>
                  <td>First-year undergrad</td>
                  <td>Various</td>
                  <td>Yes</td>
                  <td>Bridging support for university entry</td>
                </tr>
              </tbody>
            </table>
          </div><br />

          <h3 className="title"><strong>Why Students Often Struggle With Accounting?</strong></h3>
          <p className="subtitle">Accounting looks like maths at first, then reveals itself as something more particular. <strong>Format and presentation accuracy</strong> is the first barrier, since mark schemes reward correct headings, dates, narrations, and balance carrying-forward, and students lose method marks even when their numbers are right. <strong>Double-entry logic</strong> is the second, because the moment a student treats debit and credit as arithmetic rather than as a system, every subsequent topic breaks. <strong>Volume of adjustments</strong> is the third, since end-of-year work on accruals, prepayments, depreciation, and bad debts is where most students lose their grip on the figures. <strong>Calculation under time pressure</strong> is the fourth, because the longest exam questions ask for a full set of final accounts and the student who plans the workings runs faster than the one who improvises. Tutoring fixes the foundation first, since clean double-entry lifts every later topic.</p><br />

          <h2 className="title"><strong>Accounting Tuition And Coaching In Dubai: Formats, Sessions, And What's Included</strong></h2>
          <p className="subtitle">Accounting tuition in Dubai works best when sessions combine teaching with worked problems and past papers, rather than passive review of textbook chapters. We run two formats: in-person at our DIFC or JLT centres, and one-to-one online for students based further out or with tight schedules. Both use the same tutor pool and the same lesson structure, with screen-sharing during online sessions for working through full ledger and statement problems step by step.</p><br />
          <p className="subtitle">Private one-to-one sessions are the most popular choice, because accounting errors are personal: the question is always whether this particular student is dropping marks on logic, format, or arithmetic. Sessions are typically 60 minutes weekly during regular term, extending to 90-minute blocks during exam preparation, because full accounts questions need an uninterrupted run to complete properly. Each session combines a targeted teaching block, worked practice on the relevant topic, and past paper questions marked against the real board mark scheme so students see exactly where method marks are won and lost. Small-group accounting classes of two to three students are available for IGCSE where families want structured coaching at a lower per-session cost.</p><br />
          <p className="subtitle">For students taking Accounting alongside Business and Economics, our <a href="https://ignitetraininginstitute.com/business-studies-tutor-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>Business Studies tutors in Dubai</a> and <a href="https://ignitetraininginstitute.com/economics-tutor-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>Economics tutors in Dubai</a> coordinate all three subjects, which overlap usefully on financial concepts and the wider business environment.</p><br />

          <h2 className="title"><strong>Where Accounting Actually Lives In Your School Curriculum?</strong></h2>
          <p className="subtitle">This is the point most families want clarified before booking, so it is worth stating plainly. Standalone school-level Accounting only exists at <strong>IGCSE and A-Level</strong>. At IB Diploma and AP, accounting content is embedded inside broader business courses rather than offered as a separate subject. Here is how it actually works.</p><br />
          <p className="subtitle"><strong>IGCSE and GCSE Accounting</strong> is a full standalone subject taken by students in Year 10 and 11, with its own syllabus, papers, and grade. <strong>AS and A-Level Accounting</strong> continues the subject for students in Year 12 and 13 who want a deeper, more analytical treatment.</p><br />
          <p className="subtitle"><strong>IB Business Management</strong> does not offer a standalone Accounting course. The IB Diploma Group 3 (Individuals and Societies) has ten subjects, and Accounting is not one of them. Instead, the accounting content sits inside Unit 3 of Business Management, called Finance and Accounts, which covers final accounts, ratio analysis, cash flow, sources of finance, and investment appraisal. IB students often need extra tutoring on this unit, which is what we provide.</p><br />
          <p className="subtitle"><strong>AP</strong> also does not run a standalone Accounting course. The closest fit is the new <strong>AP Business with Personal Finance</strong>, launching nationally for the 2026 to 2027 school year as part of AP Career Kickstart. The course covers entrepreneurship, marketing, finance, accounting, and management alongside personal finance standards, with a project-based business component. Our AP tutors support students on the accounting content within that course.</p><br />
          <p className="subtitle">The reason for spelling this out is that many tutoring services claim to offer "IB Accounting" or "AP Accounting," which is technically inaccurate and tends to confuse families during course selection.The assistance provided through tutoring is both genuine and beneficial across all educational levels; however, the context is significant: in the case of IB and AP, the support focuses on the accounting components of a more extensive curriculum. While at IGCSE and A-Level it is on the full standalone subject.</p><br />

          <h2 className="title"><strong>IGCSE And GCSE Accounting Tutors In Dubai</strong></h2>
          <p className="subtitle">IGCSE Accounting is where most UAE students first meet the subject formally, and it sets the foundation that A-Level Accounting builds on. <strong>Cambridge IGCSE Accounting (0452)</strong>, graded A* to G, and its <strong>9-1 graded variant (0985)</strong> are the standard specifications, alongside <strong>Pearson Edexcel International GCSE Accounting</strong>. The syllabus covers the source documents and books of original entry, double-entry bookkeeping, the trial balance, financial statements of sole traders, partnerships and limited companies, accounting for clubs and non-profits, and analysis and interpretation.</p><br />
          <p className="subtitle">The questions that decide grades are the longer structured-calculation questions, where students prepare adjusted financial statements from a trial balance with several end-of-year adjustments. These are where format discipline and clean double-entry pay off, and where students who try to skip the workings lose method marks they had already earned. We build that step-by-step technique early rather than leaving it to revision. For families weighing up exam boards before committing to tuition, our guide on <a href="https://ignitetraininginstitute.com/blog/what-is-the-difference-between-edexcel-and-cambridge" style={{ color: "#fff", textDecoration: "underline" }}>the differences between Edexcel and Cambridge</a> is useful background. Our IGCSE tutors in Dubai cover all key subjects, allowing students to integrate Accounting with Business Studies or Maths within a single weekly schedule.</p><br />

          <h2 className="title"><strong>A-Level And AS Accounting Tutors For Cambridge And Edexcel</strong></h2>
          <p className="subtitle">A-Level Accounting steps up the analytical demand significantly. <strong>The Cambridge International AS and A-Level Accounting (9706)</strong> is the predominant specification utilized in schools across the UAE, in conjunction with the <strong>Pearson Edexcel International A Level Accounting (WAC11 for AS and WAC12 for A2)</strong>. The course extends the IGCSE foundation into manufacturing accounts, departmental accounts, partnership changes, company accounts, costing and budgeting, ratio analysis, and investment appraisal. AS students focus on the core financial accounting, while A2 introduces more management accounting and analytical questions.</p><br />
          <p className="subtitle">The skills that separate top candidates are accurate and quick double-entry under pressure, confident handling of complex adjustments, and the analytical writing that the higher-tier questions require. Cambridge 9706 Paper 3 in particular tests structured problem-solving and analysis, where students who treat it as a calculation exercise lose marks they could have earned by writing two clear evaluative sentences. We work both sides: the technical accuracy and the written analysis. Our <a href="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>A-Level tutors in Dubai</a> coordinate Accounting alongside Business, Economics, and Maths under a single weekly plan, which suits the many students taking Accounting for a finance or accountancy degree application.</p><br />

          <h2 className="title"><strong>IB Business Management Finance And Accounts Support</strong></h2>
          <p className="subtitle">For IB Diploma students who want serious accounting depth, the support sits inside Business Management Unit 3 (Finance and Accounts). This is one of the five units of the IB Business Management syllabus, and it carries a significant share of the Paper 2 quantitative content as well as appearing across Papers 1 and 3 at HL.</p><br />
          <p className="subtitle">Unit 3 covers introduction to finance, sources of finance, costs and revenues, final accounts (income statement and statement of financial position), profitability and liquidity ratio analysis, debt and equity ratio analysis (HL only), cash flow, investment appraisal, and budgets (HL only). Many students find this the most quantitative part of the entire IB Business Management course, and it is also where Paper 2 marks are won or lost. We support IB DP1 and DP2 students with the technical material in this unit, the application of ratios and appraisal techniques to case studies, and the data-response question structure. Our <a href="https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>IBDP tutors in Dubai</a> cover the full Diploma, and our <a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>AP tutors in Dubai</a> handle the accounting content within AP Business with Personal Finance for American curriculum students.</p><br />

          <h2 className="title"><strong>Core Accounting Topics And Exam Skills We Cover</strong></h2>
          <p className="subtitle">Most students need help with specific topics rather than the whole subject, so the lesson plan is built around where marks are actually being lost. The areas we support most often are:</p><br />
          <p className="subtitle"><strong>Double-entry bookkeeping</strong>, the foundation that every later topic leans on, from source documents and books of original entry through to the ledger and the trial balance. <strong>Financial statements</strong>, including the income statement, statement of financial position, and (at A-Level) the cash flow statement, with the format and presentation discipline that mark schemes reward. <strong>End-of-year adjustments</strong>, including accruals and prepayments, depreciation, bad debts and provisions, and inventory valuation, which is where most students lose their grip on the figures. <strong>Control accounts and bank reconciliations</strong>, which carry their own short calculation questions in exams. <strong>Partnership, manufacturing, and company accounts</strong> at A-Level, which add new presentation rules each time. <strong>Ratio analysis and interpretation</strong>, which is the analytical writing side of the subject and a heavy mark earner at A-Level and IB.</p><br />
          <p className="subtitle">Alongside content, we build the cross-cutting skills that accounting mark schemes reward: showing clean workings, presenting statements in the correct format, and structuring analytical answers around the figures rather than waffling around them. These technique skills are what move a student from a middle grade to a top one.</p><br />

          <h2 className="title"><strong>Ignite: Best Accounting Tutor In Dubai For Every Curriculum</strong></h2>
          <p className="subtitle">Ignite has been running tutoring in Dubai for over ten years, and our accounting bench includes Masab, who has more than ten years of experience teaching the subject across IGCSE and A-Level. Our two centres at DIFC and JLT serve students from international schools across Dubai, and our online programme extends that reach to Sharjah, Abu Dhabi, and the wider UAE.</p><br />
          <p className="subtitle">What makes accounting tutoring work, in our experience, is fixing the double-entry foundation first, then drilling the format discipline that mark schemes reward, then layering the analytical writing on top. A tutor guiding an IGCSE student through structured calculation questions works very differently from one coaching an A-Level student through Cambridge 9706 Paper 3 or an IB student through ratio analysis on a Paper 2 case study. Every accounting tutor at Ignite has direct experience with the major school-level specifications, and new students start with a diagnostic, get matched to a tutor whose specialism fits, and follow a session-by-session plan built around the actual papers and assessments they need to deliver.</p><br />
          <p className="subtitle">If you're considering accounting tutoring for the first time, a <a href="https://ignitetraininginstitute.com/join-free-demo-class" style={{ color: "#fff", textDecoration: "underline" }}>free demo class with Ignite</a> is the simplest way to see how the diagnostic session and lesson structure work in practice. There's no expectation to commit beyond the demo.</p>
          <br /><br />
          <h2><strong>Ignite's Exclusive Learning Resources </strong></h2>
          <h3><strong>IB Resources</strong></h3>
          <p><strong><a href="https://ignitetraininginstitute.com/ib-curriculum-blog/">IB Curriculum</a> | <a href="https://ignitetraininginstitute.com/ib-diploma/">IB Diploma</a> | <a href="https://ignitetraininginstitute.com/guide-on-ib-programmes/">IB Programmes</a> | <a href="https://ignitetraininginstitute.com/ib-myp-programme/">IB MYP Programme Guide</a> | <a href="https://ignitetraininginstitute.com/ib-program-pros-and-cons/">IB Program Pros & Cons</a> | <a href="https://ignitetraininginstitute.com/benefits-of-ib-curriculum/">Benefits Of IB Curriculum</a> | <a href="https://ignitetraininginstitute.com/benefits-of-ib-diploma/">Benefits Of The IB Diploma Programme</a> | <a href="https://ignitetraininginstitute.com/is-myp-certificate-important/">Is MYP Certificate Important</a> | <a href="https://ignitetraininginstitute.com/how-to-study-for-ib-exams/">How To Study For IB Exams</a> | <a href="https://ignitetraininginstitute.com/ibdp-syllabus-changes/">IB Syllabus Updates</a> | <a href="https://ignitetraininginstitute.com/ib-bilingual-diploma/">IB Bilingual Diploma</a> | <a href="https://ignitetraininginstitute.com/how-to-get-good-grades-in-ib/">How To Get Good Grades In IB</a> | <a href="https://ignitetraininginstitute.com/ib-diploma-gpa-calculator/">IB Diploma GPA Calculator</a> | <a href="https://ignitetraininginstitute.com/ib-subject-choices/">IB Subject Choices</a> | <a href="https://ignitetraininginstitute.com/colleges-that-accept-ib-diploma/">Colleges That Accept IB Diploma</a> | <a href="https://ignitetraininginstitute.com/what-is-an-ib-world-school/">What Is An IB World School</a> | <a href="https://ignitetraininginstitute.com/ib-grades-explained/">IB Grades Explained</a> | <a href="https://ignitetraininginstitute.com/ib-cas-program/">CAS IB</a> | <a href="https://ignitetraininginstitute.com/ib-cas-ideas/">IB CAS Ideas</a> | <a href="https://ignitetraininginstitute.com/what-is-ib-extended-essay/">What Is An Extended Essay For IB</a> | <a href="https://ignitetraininginstitute.com/ib-learner-profile/">IB Learner Profile Attributes</a> | <a href="https://ignitetraininginstitute.com/ib-career-related-programme-guide/">IB Career Related Programme</a> | | <a href="https://ignitetraininginstitute.com/ib-physics/">IB Physics</a> | <a href="https://ignitetraininginstitute.com/ib-maths/">IB Maths</a> | <a href="https://ignitetraininginstitute.com/ib-computer-science-syllabus/">IB Computer Science Syllabus</a> | <a href="https://ignitetraininginstitute.com/ib-economics-exam/">IB Economics</a> | <a href="https://ignitetraininginstitute.com/ib-economics-exam/">IB Economics Exam</a> | <a href="https://ignitetraininginstitute.com/ib-curriculum-vs-british-curriculum/">IB Curriculum Vs British Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-ibdp-comparison/">IB VS A Levels</a> | <a href="https://ignitetraininginstitute.com/ib-vs-igcse-program/">IB VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/ib-vs-ap-comparison/">IB VS AP Difficulty</a> | <a href="https://ignitetraininginstitute.com/ib-certificate-vs-ib-diploma/">IB Certificate Vs IB Diploma</a> | <a href="https://ignitetraininginstitute.com/ib-vs-icse/">IB VS ICSE</a> | <a href="https://ignitetraininginstitute.com/ibcp-vs-ibdp/">IBCP VS IBDP</a> | <a href="https://ignitetraininginstitute.com/cbse-or-ib-board/">CBSE Or IB</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-ibdp-comparison/">A-Levels VS IBDP</a> | <a href="https://ignitetraininginstitute.com/ib-schools-in-dubai/">IB Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/ib-schools-in-abu-dhabi/">IB Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/ibdp-schools-in-dubai/">IBDP Schools In Dubai</a></strong></p>
          <h3><strong>Exclusive British Curriculum Resources</strong></h3>
          <p><strong><a href="https://ignitetraininginstitute.com/british-curriculum/">British Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-level-qualifications/">A-Level</a> | <a href="http://as-levels">AS-Levels</a> | <a href="https://ignitetraininginstitute.com/gcse-guide/">GCSE</a> | <a href="https://ignitetraininginstitute.com/igcse-curriculum/">What Is IGCSE Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-level-qualifications/">A-Level Qualifications</a> | <a href="https://ignitetraininginstitute.com/cambridge-igcse-guide/">Cambridge IGCSE</a> |  <a href="https://ignitetraininginstitute.com/cambridge-a-level-courses/">Cambridge A-Level Courses</a> | <a href="https://ignitetraininginstitute.com/what-is-aqa-gcse/">What Is AQA GCSE</a> | <a href="https://ignitetraininginstitute.com/igcse-exams/">IGCSE Exams 2025</a> | <a href="https://ignitetraininginstitute.com/igcse-grades-explained/">IGCSE Grades</a> | <a href="https://ignitetraininginstitute.com/what-is-the-difference-between-edexcel-and-cambridge/">Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/a-levels-subjects/">A Levels Subjects</a> | <a href="https://ignitetraininginstitute.com/pearson-edexcel-igcse/">Pearson Edexcel IGCSE</a> | <a href="https://ignitetraininginstitute.com/cambridge-igcse-guide/">Cambridge IGCSE</a> | <a href="https://ignitetraininginstitute.com/why-choose-a-levels/">Why Choose A Levels?</a> |  <a href="https://ignitetraininginstitute.com/are-gcses-important/">Are GCSEs Important</a> | <a href="https://ignitetraininginstitute.com/gcse-grading-system/">New Vs Old GCSE Grading System</a> | <a href="https://ignitetraininginstitute.com/a-level-grading-system/">A-Level Grading System</a> | <a href="https://ignitetraininginstitute.com/universities-that-accept-igcse-certificate/">Universities That Accept IGCSE Certificate In USA & UK</a> | <a href="https://ignitetraininginstitute.com/as-level-university-requirement/">AS Level University Requirements</a> | <a href="https://ignitetraininginstitute.com/what-is-the-difference-between-edexcel-and-cambridge/">Difference Between Edexcel & Cambridge</a> | <a href="https://ignitetraininginstitute.com/a-level-subjects-for-pyschology/">A-Level Subjects For Psychology</a> | <a href="https://ignitetraininginstitute.com/a-level-arts-subjects/">A-Level Arts Subjects</a> | <a href="https://ignitetraininginstitute.com/edexcel-a-level-economics/">Edexcel A Level Economics</a> |  <a href="https://ignitetraininginstitute.com/a-levels-chemistry/">A Levels Chemistry</a> | <a href="https://ignitetraininginstitute.com/a-level-physics-course/">A-Level Physics</a> | <a href="https://ignitetraininginstitute.com/a-level-maths-grades/">A Level Maths Grade</a> | <a href="https://ignitetraininginstitute.com/igcse-chemistry/">IGCSE Chemistry</a> | <a href="https://ignitetraininginstitute.com/what-do-you-do-in-gcse-photography/">GCSE Photography</a> | <a href="https://ignitetraininginstitute.com/igcse-accounting-syllabus-overview-key-takeaways/">IGCSE Accounting</a> | <a href="https://ignitetraininginstitute.com/igcse-biology/">IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/igcse-physics/">IGCSE Physics</a> | <a href="https://ignitetraininginstitute.com/how-to-study-for-igcse/">How To Study For IGCSE</a> | <a href="https://ignitetraininginstitute.com/how-to-study-for-igcse-biology/">How To Study For IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/how-to-revise-for-business-studies-gcse/">How To Revise For Business Studies GCSE</a> | <a href="https://ignitetraininginstitute.com/igcse-computer-science/">IGCSE Computer Science</a> | <a href="https://ignitetraininginstitute.com/edexcel-igcse-biology-syllabus/">Edexcel IGCSE Biology</a> | <a href="https://ignitetraininginstitute.com/aqa-vs-cie/">AQA VS CIE</a> | <a href="https://ignitetraininginstitute.com/igcse-vs-cbse/">IGCSE VS CBSE</a> | <a href="https://ignitetraininginstitute.com/triple-science-vs-combined-science-what-to-choose/">Triple Science VS Combined Science</a> | <a href="https://ignitetraininginstitute.com/easiest-igcse-subjects/">Easiest IGCSE Subjects</a> | <a href="https://ignitetraininginstitute.com/indian-curriculum-vs-british-curriculum/">Indian Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/difference-between-american-and-british-curriculum/">Difference Between American And British Curriculum</a> | <a href="https://ignitetraininginstitute.com/ib-curriculum-vs-british-curriculum/">IB Curriculum VS British Curriculum</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-cbse/">A-Levels VS CBSE</a> | <a href="https://ignitetraininginstitute.com/a-levels-vs-ibdp-comparison/">A-Levels VS IBDP</a> | <a href="https://ignitetraininginstitute.com/igcse-vs-gcse-comparison/">IGCSE VS GCSE</a> | <a href="https://ignitetraininginstitute.com/difference-between-gcse-and-a-levels/">Differences Between GCSE & A-Levels</a> | <a href="https://ignitetraininginstitute.com/ib-vs-igcse-program/">IB VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/sat-vs-igcse/">SAT VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools/">British Curriculum Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools-in-abu-dhabi/">British Curriculum Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/british-curriculum-schools-in-sharjah/">British Curriculum Schools In Sharjah</a> |</strong></p>
          <h3><strong>Exclusive AP Resources</strong></h3>
          <p><strong><a href="https://ignitetraininginstitute.com/advanced-placements/">Advanced Placements</a> | <a href="https://ignitetraininginstitute.com/ap-scores/">AP Scores</a> | <a href="https://ignitetraininginstitute.com/ib-vs-ap-comparison/">IB VS AP</a> | <a href="https://ignitetraininginstitute.com/ap-courses/">AP Courses</a> | <a href="https://ignitetraininginstitute.com/ap-exams-overview/">AP Exams</a> | <a href="https://ignitetraininginstitute.com/what-is-an-ap-seminar-exam/">AP Seminar Exam</a> | <a href="https://ignitetraininginstitute.com/are-ap-exams-hard/">Are AP Exams Hard</a> | <a href="https://ignitetraininginstitute.com/easiest-ap-exams/">Easiest AP Exams</a> | <a href="https://ignitetraininginstitute.com/ap-exam-test-dates/">AP Exam Test Dates</a> | <a href="https://ignitetraininginstitute.com/how-many-ap-classes-to-take/">AP Classes To Take</a> | <a href="https://ignitetraininginstitute.com/do-ap-classes-count-as-college-credit/">Do AP Classes Count As College Credit</a> | <a href="https://ignitetraininginstitute.com/how-to-get-a-5-on-ap-statistics/">How To Get A 5 On The AP Statistics</a> | <a href="https://ignitetraininginstitute.com/ap-computer-science-principles-vs-ap-computer-science-a/">AP Computer Science Principles VS AP Computer Science A</a> | <a href="https://ignitetraininginstitute.com/is-ap-statistics-easy/">Is AP Statistics Easy</a> | <a href="https://ignitetraininginstitute.com/ap-courses-for-engineering/">AP Courses For Engineering</a> | <a href="https://ignitetraininginstitute.com/ap-biology/">AP Biology</a> | <a href="https://ignitetraininginstitute.com/what-is-ap-chemistry-exam/">AP Chemistry Exam</a> | <a href="https://ignitetraininginstitute.com/how-to-register-for-ap-exams/">How To Register For AP Exams</a> | </strong></p>
          <h3><strong>Exclusive Homeschooling Resources</strong></h3>
          <p><strong><a href="https://ignitetraininginstitute.com/why-homeschooling-is-better/">Why Homeschooling Is Better</a> | <a href="https://ignitetraininginstitute.com/homeschooling-in-uae/">Homeschooling In UAE</a> | <a href="https://ignitetraininginstitute.com/how-does-being-homeschooled-work/">How Does Being Homeschooled Work</a></strong></p>

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
