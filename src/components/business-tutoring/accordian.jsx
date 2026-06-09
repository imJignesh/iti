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
          <h2 className="title">Expert Business Studies Tutor In Dubai, UAE For Academic Confidence</h2>
          <p className="subtitle">Master core concepts and boost academic performance with expert Business Studies guidance. At Ignite, our tutors simplify complex topics in marketing, finance, and management. With personalized strategies and real-world examples, students build clarity and confidence. Whether you're in IB, IGCSE, or A Levels, we help you excel in exams and class participation. Our supportive environment fosters motivation and consistent improvement. Take the first step toward academic excellence today.</p>

        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title"><strong>Business Studies Tutors In Dubai For IB, IGCSE, A-Level, And AP Students</strong></h2>
          <p className="subtitle">Ignite Training Institute provides 1-on-1 business studies tutoring in Dubai across IGCSE, GCSE, A-Level, AS-Level, IB Business Management (SL and HL), and the new AP Business course. Sessions run from our DIFC and JLT centres and online, covering marketing, finance, human resources, and operations, with tutors matched to each exam board and a focus on case-study application and exam technique.</p><br />
          <p className="subtitle">Most students come to us when they can recite business theory but lose marks applying it to an unseen case study, when the analysis-and-evaluation questions feel impossible to structure, or when the quantitative finance topics (ratios, break-even, investment appraisal) stop making sense. Some join months ahead of mocks; others arrive with weeks to go and need focused work on exam technique. Every new student starts with a diagnostic so the tutor can see exactly where marks are being lost rather than re-teaching content the student already knows.</p><br />
          <p className="subtitle">We work with students from international schools across Dubai, including those at GEMS Wellington, Dubai College, Jumeirah College, JESS Ranches, Dubai American Academy, and Repton School Dubai, and with families across DIFC, JLT, Jumeirah, and the wider UAE. Business is also a popular foundation for university degrees in management, finance, and economics, so we keep the university target grade in view from the first session.</p><br />

          <h3 className="title"><strong>Business Courses At A Glance: IB, IGCSE, A-Level, And AP Compared</strong></h3>
          <div className="table-responsive my-3">
            <table className="table table-bordered text-white">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Level</th>
                  <th>Board / Codes</th>
                  <th>Key Assessment Components</th>
                  <th>Typical Year/Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IB Business Management</td>
                  <td>DP SL and HL</td>
                  <td>IB</td>
                  <td>Paper 1 (pre-released case study) + Paper 2 (quantitative) + IA; HL adds Paper 3</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IGCSE Business Studies</td>
                  <td>Year 10 to 11</td>
                  <td>Cambridge 0450 / 0986, Edexcel</td>
                  <td>Short-answer and case-study papers, including high-mark evaluation questions</td>
                  <td>Year 10 to 11 (Grade 9 to 10)</td>
                </tr>
                <tr>
                  <td>A-Level Business</td>
                  <td>AS + A2</td>
                  <td>Cambridge 9609, Edexcel, AQA</td>
                  <td>Case-study and essay papers across the two years</td>
                  <td>Year 12 to 13 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>AS-Level Business</td>
                  <td>AS only</td>
                  <td>Cambridge, Edexcel, AQA</td>
                  <td>First-year content and exam technique foundation</td>
                  <td>Year 12 (Grade 11)</td>
                </tr>
                <tr>
                  <td>AP Business</td>
                  <td>College Board</td>
                  <td>AP</td>
                  <td>AP Business with Personal Finance (from 2026 to 2027); project-based</td>
                  <td>Grade 11 to 12</td>
                </tr>
              </tbody>
            </table>
          </div><br />

          <h3 className="title"><strong>Why Students Often Struggle With Business Studies?</strong></h3>
          <p className="subtitle">Business looks approachable, which is exactly why students underestimate it. <strong>Application over memorisation</strong> is the first barrier, since students who learn definitions still lose marks when they cannot apply theory to the specific business in front of them. <strong>Analysis and evaluation chains</strong> are the second, because higher-mark questions reward a developed argument with a justified judgement, not a list of points. <strong>Quantitative finance</strong> is the third, where break-even, ratios, cash flow, and investment appraisal trip up students who expected business to be essay-only. <strong>Case-study time pressure</strong> is the fourth, since reading a case, planning, and writing a structured answer under timed conditions is a skill that needs practice. Tutoring focuses on these exam skills, because that is where grades actually move.</p><br />

          <h2 className="title"><strong>Business Studies Tuition And Coaching In Dubai: Formats, Sessions, And What's Included</strong></h2>
          <p className="subtitle">In Dubai, business studies tuition is most effective when sessions integrate concept instruction with case study analysis and the review of past papers, rather than relying solely on passive note-taking. We run two formats: in-person at our DIFC or JLT centres, and one-to-one online for students based further out or with tight schedules. Both use the same tutor pool and the same lesson structure, with screen-sharing during online sessions for working through case studies and calculations.</p><br />
          <p className="subtitle">Private one-to-one sessions are the most popular choice, because business questions are personal: the issue is usually whether this particular student applies theory well or argues to a judgement. Sessions are typically 60 minutes weekly during the regular term, extending to 90-minute blocks during exam preparation. Each session combines a targeted teaching block, practice on the relevant case study or calculation, and past paper questions marked against the actual board mark scheme, so students see exactly where application and evaluation marks are won. Small-group business studies classes of two to three students are available where families want structured coaching at a lower per-session cost.</p><br />
          <p className="subtitle">For students taking Business alongside Economics, our <a href="https://ignitetraininginstitute.com/economics-tutor-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>Economics tutors in Dubai</a> coordinate both subjects, which overlap usefully on markets, costs, and the wider economic environment.</p><br />

          <h2 className="title"><strong>IB Business Management Tutors: SL And HL (And Why It Is Not Called Business Studies)</strong></h2>
          <p className="subtitle">This is the point that confuses most families, so it is worth stating plainly. At IGCSE and A-Level, the subject is Business Studies, but in the IB Diploma, the same subject is officially called <strong>Business Management</strong>. If a school or tutor only ever says "IB Business Studies," that is a small sign that they may not know the IB course closely. Here is how the IB course actually works.</p><br />
          <p className="subtitle">IB Business Management is built around <strong>five units</strong>: Introduction to Business Management, Human Resource Management, Finance and Accounts, Marketing, and Operations Management. Running through all of them are the four course concepts of creativity, change, ethics, and sustainability, plus the <strong>Business Management Toolkit</strong> (tools such as SWOT, the Ansoff matrix, STEEPLE analysis, the BCG matrix, and break-even analysis) that students are expected to apply in their answers.</p><br />
          <p className="subtitle">Assessment is where tutoring matters most. <strong>Paper 1</strong> is based on a pre-released case study that the IB publishes a few months before the exam, so preparation can start early. <strong>Paper 2</strong> focuses on quantitative and analytical skills, including finance and data response. <strong>Paper 3 is HL only</strong> and centres on a social enterprise scenario. All students also complete the <strong>Internal Assessment</strong>, a business research project, which is common to SL and HL under the current syllabus. At SL, the weighting falls more heavily on Papers 1 and 2 plus the IA, while HL adds Paper 3 and carries more analytical depth across every unit. Our <a href="https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>IBDP tutors in Dubai</a> cover the full Diploma, and our <a href="https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>IB MYP tutors</a> build the foundation that leads into DP Business Management.</p><br />

          <h2 className="title"><strong>IGCSE And GCSE Business Studies Tutors In Dubai</strong></h2>
          <p className="subtitle">IGCSE Business Studies is where most UAE students first meet the subject formally, and it sets the foundation for A-Level. <strong>Cambridge IGCSE Business Studies (0450)</strong>, graded A* to G, and its <strong>9-1 graded variant (0986)</strong> are the common specifications, alongside <strong>Pearson Edexcel International GCSE Business</strong>. The syllabus covers business activity and enterprise, marketing, operations, finance, and people in organisations, assessed through short-answer and case-study questions.</p><br />
          <p className="subtitle">The questions that decide grades are the higher-mark evaluation questions, where students have to weigh up a decision and justify a recommendation rather than just describe. These are the most commonly dropped marks at IGCSE, so we build that argue-to-a-judgement technique early rather than leaving it to revision. We also work through the quantitative topics (revenue, costs, break-even, and simple cash flow) that catch students who expected business to be essay-only. Our <a href="https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>IGCSE tutors in Dubai</a> work across all major subjects, so students can coordinate Business alongside Economics or Maths under one weekly plan.</p><br />

          <h2 className="title"><strong>A-Level And AS Business Tutors For Case Studies And Essays</strong></h2>
          <p className="subtitle">A-Level Business steps up the demand for sustained argument and applied analysis. <strong>Cambridge International AS and A-Level Business (9609)</strong> is the most common specification in UAE schools, alongside <strong>Edexcel</strong> and UK boards such as <strong>AQA</strong>. The course enhances the same functional domains (marketing, finance, operations, human resources) while incorporating strategy, business expansion, and the external environment, all evaluated through case studies and essay assignments.</p><br />
          <p className="subtitle">The skills that separate top candidates are reading a case study quickly and accurately, applying theory to that specific business, and building analysis through to a justified evaluation under time pressure. AS students usually need work on structuring answers and applying concepts precisely, while A2 students need help with strategic analysis and the longer evaluative essays. Our <a href="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>A-Level tutors in Dubai</a> coordinate Business alongside Economics and other subjects under a single weekly plan, which suits the many students taking Business for a management or finance degree application.</p><br />

          <h2 className="title"><strong>AP Business With Personal Finance Tutors</strong></h2>
          <p className="subtitle">For students in American curriculum schools, the College Board is introducing a new course called <strong>AP Business with Personal Finance</strong>, launching nationally for the 2026 to 2027 school year as part of the AP Career Kickstart programme. This is genuinely new, so a lot of older guidance online still says there is no AP business course at all.</p><br />
          <p className="subtitle">The course is an introductory, college-level business and personal finance course covering entrepreneurship, marketing, finance, accounting, and management, with personal finance standards integrated throughout. It is built around real-world application, case studies, and a business project rather than pure theory, which means exam preparation and project work go hand in hand. Our <a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>AP tutors in Dubai</a> work across the AP range and prepare students for both the academic content and the project-based elements of the new course.</p><br />

          <h2 className="title"><strong>Core Business Topics And Exam Skills We Cover</strong></h2>
          <p className="subtitle">Most students need help with specific topics and specific question types rather than the whole subject, so the lesson plan is built around where marks are actually being lost. The areas we support most often are:</p><br />
          <p className="subtitle"><strong>Marketing</strong>, including the marketing mix, market research, and segmentation. <strong>Finance and accounts</strong>, including costs and revenue, break-even, cash flow, final accounts, and ratio analysis, which is where students who expected an essay-only subject tend to struggle. <strong>Human resource management</strong>, including organisational structure, motivation, and leadership. <strong>Operations management</strong>, including production methods, quality, and the supply chain. <strong>Business strategy and the external environment</strong>, including tools such as SWOT, Ansoff, and STEEPLE that examiners expect students to apply rather than just name.</p><br />
          <p className="subtitle">Alongside content, we build the exam skills that business mark schemes reward: decoding command words, applying theory to the specific case rather than in general, and developing analysis through to a justified evaluation. These technique skills are what move a student from a middle grade to a top one, and they transfer across IGCSE, A-Level, and IB. Students who prefer one-to-one delivery across several subjects often work with our <a href="https://ignitetraininginstitute.com/private-tutors-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>private tutors in Dubai</a>.</p><br />

          <h2 className="title"><strong>Ignite: Best Business Studies Tutor In Dubai For Every Curriculum</strong></h2>
          <p className="subtitle">Ignite has been running tutoring in Dubai for over ten years, and Business is one of our most established subjects, with specialist tutors including Harsha, who has more than ten years of experience teaching across the curriculums. One IB parent described our team as the best Business and Economics teachers they had worked with, crediting the clear explanations for getting their child on track for a strong Diploma score. Our two centres at DIFC and JLT serve students from international schools across Dubai, and our online programme extends that reach to Sharjah, Abu Dhabi, and the wider UAE.</p><br />
          <p className="subtitle">What makes business tutoring work, in our experience, is matching the tutor to the exact course, then drilling the application and evaluation skills that exams actually reward rather than re-teaching theory the student can already recite. A tutor guiding an IB student through the Paper 1 pre-released case study works very differently from one coaching an A-Level student through a strategic essay or an IGCSE student through the high-mark evaluation question.</p><br />
          <p className="subtitle">Several of our students take Business and Economics together, and a number have gone on to strong A-Level and Diploma results in both. New students start with a diagnostic, get matched to a tutor whose specialism fits, and follow a session-by-session plan built around the actual papers and assessments they need to deliver.</p><br />
          <p className="subtitle">If you're considering business tutoring for the first time, a <a href="https://ignitetraininginstitute.com/join-free-demo-class" style={{ color: "#fff", textDecoration: "underline" }}>free demo class with Ignite</a> is the simplest way to see how the diagnostic session and lesson structure work in practice. There's no expectation to commit beyond the demo.</p>
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
