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
          <h2 className="title"><strong>Chemistry Tutors In Dubai For IB, IGCSE, A-Level, And AP Students</strong></h2>
          <p className="subtitle">Ignite Training Institute provides 1-on-1 Chemistry tutoring in Dubai across IB (SL and HL), IGCSE, GCSE, A-Level, and AP Chemistry. Lessons run from our DIFC and JLT centres and online, covering organic, physical, and inorganic chemistry, with tutors matched to each exam board and a focus on calculations, mechanisms, and exam technique.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <p className="subtitle">Most students come to us when the calculation side of chemistry stops adding up, when organic mechanisms feel like memorising without understanding, or when an IB Internal Assessment is stuck at the design stage. Some students join us months ahead of mocks; others arrive with weeks to go and need focused work on one branch or one paper. Every new student starts with a diagnostic where the tutor works through recent problems and past paper attempts to see exactly where marks are being lost.</p><br />

          <p className="subtitle">We work with students from international schools across Dubai, including those at GEMS Wellington, Dubai College, Jumeirah College, JESS Ranches, Dubai American Academy, Repton School Dubai, and similar IB / British / American curriculum schools across DIFC, JLT, Jumeirah, and the wider UAE. Chemistry is also a gateway subject for medicine, pharmacy, and engineering pathways, so we keep an eye on the grade those university routes expect.</p><br />

          <h3 className="title"><strong>Chemistry Courses At A Glance: IB, IGCSE, A-Level, And AP Compared</strong></h3>
          <div className="table-responsive">
            <table className="table table-bordered text-white">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Level</th>
                  <th>Board Code</th>
                  <th>Key Assessment Components</th>
                  <th>Typical Year/Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IB Chemistry SL</td>
                  <td>DP Standard Level</td>
                  <td>IB</td>
                  <td>Paper 1 (1A multiple choice + 1B data) + Paper 2 + Internal Assessment (20%)</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IB Chemistry HL</td>
                  <td>DP Higher Level</td>
                  <td>IB</td>
                  <td>Same papers as SL with additional HL content + Internal Assessment (20%)</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IGCSE Chemistry</td>
                  <td>Year 10 to 11</td>
                  <td>Cambridge 0620 / 0971</td>
                  <td>Multiple-choice, theory, and practical/alternative-to-practical papers</td>
                  <td>Year 10 to 11 (Grade 9 to 10)</td>
                </tr>
                <tr>
                  <td>A-Level Chemistry</td>
                  <td>AS + A2</td>
                  <td>Cambridge 9701</td>
                  <td>MCQ, AS and A2 structured papers, plus a practical assessment</td>
                  <td>Year 12 to 13 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>AP Chemistry</td>
                  <td>College Board</td>
                  <td>AP</td>
                  <td>60 MC (50%) + 7 free-response questions (50%); scored on a 1 to 5 scale</td>
                  <td>Grade 11 to 12</td>
                </tr>
              </tbody>
            </table>
          </div><br />

          <h3 className="title"><strong>Why Students Often Struggle With Chemistry?</strong></h3>
          <p className="subtitle">The biggest barrier in chemistry is the maths, not the theory. <strong>Mole calculations and stoichiometry</strong> sit underneath most of the subject, and students who aren't fluent with them lose marks across every topic, from titrations to reacting masses to gas volumes. <strong>Balancing equations</strong>, including ionic and half-equations, is the second consistent gap, since a wrong equation cascades into wrong calculations. <strong>Organic mechanisms</strong> are the third, where students try to memorise reactions instead of understanding why electrons move the way they do, then can't handle an unfamiliar molecule in the exam. <strong>Abstract bonding and structure concepts</strong> are the fourth, because students can't see what they're being asked to picture. Tutoring targets the maths foundation first, since fixing it lifts marks across the whole subject.</p><br />

          <h2 className="title"><strong>Chemistry Tuition And Coaching In Dubai: Formats, Sessions, And What's Included</strong></h2>
          <p className="subtitle">Chemistry tuition in Dubai works best when sessions combine concept teaching with worked calculations and past paper practice, rather than passive review. We run two formats: in-person at our DIFC or JLT centres, and one-to-one online for students based further out in Dubai or across the wider UAE. Both formats use the same tutor pool and the same lesson structure, with screen-sharing during online sessions for working through problems step by step.</p><br />
          <p className="subtitle">Sessions are typically 60 minutes weekly during regular term, extending to 90-minute blocks twice a week during exam preparation. Each session covers a targeted teaching block, worked practice on the relevant calculations or mechanisms, and past paper questions marked against the actual board mark scheme. Some students also use intensive blocks during the summer or winter break to get ahead before a tough term or to close gaps before mocks. Small-group sessions of two to three students are available for IGCSE and GCSE Chemistry where families want the structure of coaching at a lower per-session cost.</p><br />
          <p className="subtitle">For families weighing up exam boards before committing to tuition, our blog on <a href="https://ignitetraininginstitute.com/blog/what-is-the-difference-between-edexcel-and-cambridge" className="text-white text-decoration-underline">the differences between Edexcel and Cambridge</a> is useful background.</p><br />

          <h2 className="title"><strong>IB Chemistry Tutors For DP (SL And HL) And MYP</strong></h2>
          <p className="subtitle">IB Chemistry changed substantially with the syllabus first examined in May 2025, and a lot of material online still describes the old course. Here is how it actually works now.</p><br />
          <p className="subtitle">The course is built around two organising concepts: <strong>Structure</strong> (the nature of matter, models of bonding, classification of matter) and <strong>Reactivity</strong> (what drives reactions, how much and how fast, and reaction mechanisms). This replaced the old numbered topics. The four option topics (Materials, Biochemistry, Energy, Medicinal Chemistry) were removed, with some content folded into the core.</p><br />
          <p className="subtitle">Assessment changed too. The standalone Paper 3 was removed, and its data-analysis element was absorbed into <strong>Paper 1B</strong>. Students now sit Paper 1 (Paper 1A multiple choice, with 30 questions at SL and 40 at HL, plus Paper 1B data-based questions) and Paper 2 (extended response). Calculators are now allowed on all papers, which is a meaningful change from the old syllabus. The external papers carry roughly 80% of the grade.</p><br />
          <p className="subtitle"><strong>IB Chemistry SL and HL</strong> share the Structure and Reactivity framework, but HL goes considerably deeper, adding topics such as entropy and Gibbs energy, transition metals, organic reaction mechanisms (including SN1 and SN2), and more advanced electrochemistry. The <strong>Internal Assessment</strong> is a scientific investigation worth 20%, with a 3,000-word limit, and it runs across the two years. We support students from research-question design through to data analysis and evaluation. Our <a href="https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai" className="text-white text-decoration-underline">IBDP tutors in Dubai</a> cover the full DP framework, and our <a href="https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai" className="text-white text-decoration-underline">IB MYP tutors</a> handle the Sciences foundation that leads into DP Chemistry.</p><br />

          <h2 className="title"><strong>IGCSE And GCSE Chemistry Tutors In Dubai</strong></h2>
          <p className="subtitle">IGCSE Chemistry is taken by most UAE international school students at the British curriculum level, and it builds the foundation that A-Level and IB Chemistry assume. <strong>Cambridge IGCSE Chemistry (0620)</strong> is the standard international qualification, graded A* to G, with <strong>0971</strong> being the 9-1 graded variant of the same syllabus. Students taking combined science rather than separate Chemistry usually sit Cambridge IGCSE Co-ordinated Sciences (0654), which overlaps heavily with 0620 for the core chemistry topics.</p><br />
          <p className="subtitle">The course covers states of matter, atoms and bonding, stoichiometry, electrochemistry, energetics, rates of reaction, acids and bases, the periodic table, metals, and organic chemistry. Practical skills matter here: depending on the school, students sit either a practical exam or the alternative-to-practical paper, both of which test experimental design, observation, and data handling. We build those practical-paper skills alongside the theory rather than leaving them to the end.</p><br />
          <p className="subtitle">For students at British curriculum schools sitting UK GCSE Chemistry rather than the international IGCSE, we tutor AQA, OCR, and Pearson Edexcel GCSE Chemistry. Our <a href="https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai" className="text-white text-decoration-underline">IGCSE tutors in Dubai</a> work across all major IGCSE subjects, so students taking Chemistry alongside Maths, Physics, or Biology can coordinate scheduling under one weekly plan.</p><br />

          <h2 className="title"><strong>A-Level And AS Chemistry Tutors For Theory And Practical Skills</strong></h2>
          <p className="subtitle">A-Level Chemistry is one of the more demanding A-Levels, with a heavy mix of theory, calculation, and practical work. <strong>Cambridge International A-Level Chemistry (9701)</strong> is the most common specification in UAE schools. It is assessed through Paper 1 (multiple choice), Paper 2 (AS structured questions), Paper 4 (A2 structured questions), and Paper 5 (planning, analysis, and evaluation), with the practical skills assessed through the practical paper. The content runs across the three branches: physical (energetics, equilibrium, kinetics), inorganic (periodicity, group chemistry, transition elements), and organic (mechanisms, synthesis, reagents and conditions).</p><br />
          <p className="subtitle">For students at British curriculum schools sitting UK A-Level Chemistry, we tutor AQA, Pearson Edexcel, and OCR specifications, which include a separately assessed practical endorsement alongside the written papers. Practical understanding feeds directly into exam questions, so it cannot be treated as optional.</p><br />
          <p className="subtitle">The skills that separate top A-Level candidates are calculation fluency (moles, enthalpy, equilibrium constants, rate equations), correct use of units, and the ability to apply organic mechanisms to unfamiliar molecules. Most students preparing for AS papers in May need targeted work on calculation accuracy and structured answers, while A2 students need help with the synoptic depth and the planning-and-analysis paper. Our <a href="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai" className="text-white text-decoration-underline">A-Level tutors in Dubai</a> coordinate Chemistry alongside Maths, Physics, and Biology under a single weekly plan, which suits the many students taking Chemistry for a medicine or engineering application.</p><br />

          <h2 className="title"><strong>AP Chemistry Tutors For AP Chemistry</strong></h2>
          <p className="subtitle">AP Chemistry is the College Board's college-level chemistry course, taken in Grade 11 or 12 by students preparing for US university applications, and it is widely accepted as equivalent to A-Level Chemistry by UK universities. The course is organised into <strong>nine units</strong>, from atomic structure and molecular properties through intermolecular forces, chemical reactions, kinetics, thermodynamics, equilibrium, acids and bases, and applications of thermodynamics.</p><br />
          <p className="subtitle">The exam is a hybrid digital format taken in the May AP testing window. It has two sections, each worth 50% of the score: <strong>Section I is 60 multiple-choice questions</strong> (90 minutes), and <strong>Section II is 7 free-response questions</strong> (105 minutes), made up of 3 long-answer questions and 4 short-answer questions. Calculators are permitted on both sections, and a periodic table and formula sheet are provided. The exam is scored on a 1 to 5 scale, with most US universities looking for a 4 or 5 for credit.</p><br />
          <p className="subtitle">AP Chemistry is more mathematical than AP Biology, and the free-response section rewards clear reasoning, correct units, and the ability to justify a claim with data. Our <a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai" className="text-white text-decoration-underline">AP tutors in Dubai</a> work across the full AP range, with AP Chemistry handled by tutors familiar with the nine-unit framework and the free-response expectations.</p><br />

          <h2 className="title"><strong>Core Chemistry Topics And Skills We Cover: Organic, Physical, And Inorganic</strong></h2>
          <p className="subtitle">Chemistry divides into three branches, and most students are stronger in some than others. Tutoring is built around the branch and the skill where marks are actually being lost, not a flat run through the syllabus.</p><br />
          <p className="subtitle"><strong>Physical chemistry</strong> is the calculation-heavy branch: moles and stoichiometry, energetics and enthalpy, equilibrium, reaction kinetics, and electrochemistry. This is where the maths foundation matters most, and where a student who searches for a physical chemistry tutor usually needs the most support. <strong>Organic chemistry</strong> rewards understanding reaction mechanisms (addition, substitution, elimination, oxidation and reduction) and applying them to unfamiliar molecules, rather than memorising reactions in isolation. <strong>Inorganic chemistry</strong> covers the periodic table, periodicity, bonding, group chemistry, and transition elements, with an emphasis on explaining trends using correct chemical reasoning.</p><br />
          <p className="subtitle">Across all three branches, we build the cross-cutting skills that chemistry mark schemes reward: accurate mole calculations and stoichiometry, balancing equations including ionic and half-equations, drawing and interpreting mechanisms, data and graph interpretation, and precise use of command terms (state, define, explain, deduce, suggest). Students who prefer one-to-one delivery across multiple subjects often work with our <a href="https://ignitetraininginstitute.com/private-tutors-in-dubai" className="text-white text-decoration-underline">private tutors in Dubai</a>.</p><br />

          <h2 className="title"><strong>Ignite: Best Chemistry Tutor In Dubai For Every Curriculum</strong></h2>
          <p className="subtitle">Ignite has been running tutoring in Dubai for over ten years, and Chemistry is one of our most active subjects, with a bench of specialist tutors including Dr. Haya, who has more than nine years of experience. Our two centres at DIFC and JLT serve students from international schools across Dubai, and our online programme extends that reach to Sharjah, Abu Dhabi, and the wider UAE.</p><br />
          <p className="subtitle">What makes Chemistry tutoring work, in our experience, is matching the tutor to the exam board and the branch where the student is losing marks, then fixing the maths foundation that sits under everything else. A tutor preparing a student for the new IB Structure and Reactivity papers works very differently from one coaching an A-Level student through the planning-and-analysis paper or an AP student through free-response reasoning. Every Chemistry tutor at Ignite has direct experience with at least one of the major curriculums, and most have taught several. New students start with a diagnostic, get matched to a tutor whose curriculum specialism fits, and follow a session-by-session plan built around the actual papers, calculations, and IA work they need to deliver.</p><br />
          <p className="subtitle">If you're considering Chemistry tutoring for the first time, a <a href="https://ignitetraininginstitute.com/join-free-demo-class" className="text-white text-decoration-underline">free demo class with Ignite</a> is the simplest way to see how the diagnostic session and lesson structure works in practice. There's no expectation to commit beyond the demo.</p><br />

          <h3 className="title"><strong>Know more about our programmes:</strong></h3>
          <ul className="subtitle" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li><a href="https://ignitetraininginstitute.com/ib-curriculum-tutors-in-dubai" className="text-white text-decoration-underline">IB Curriculum Tutors In Dubai</a></li>
            <li><a href="https://ignitetraininginstitute.com/british-curriculum-tutors-in-dubai" className="text-white text-decoration-underline">British Curriculum Tutors In Dubai</a></li>
            <li><a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai" className="text-white text-decoration-underline">AP Tutors In Dubai</a></li>
            <li><a href="https://ignitetraininginstitute.com/join-free-demo-class" className="text-white text-decoration-underline">Free Demo Class At Ignite Training Institute</a></li>
            <li><a href="https://ignitetraininginstitute.com/contact-us" className="text-white text-decoration-underline">Contact Us</a></li>
          </ul>
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
