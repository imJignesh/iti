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
          <h2 className="title">Expert Economics Tutor In Dubai, UAE For Academic Confidence</h2>
          <p className="subtitle">Gain the academic edge you need with expert Economics tutoring in Dubai. Our qualified tutors simplify complex concepts and enhance your analytical thinking. Whether you're struggling with microeconomics or macroeconomics, we tailor our approach to your needs. With personal attention and a results-driven method, you'll feel more confident and prepared for exams. Build a strong foundation and set yourself up for long-term success in Economics.</p>

        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title"><strong>Economics Tutors In Dubai For IB, IGCSE, A-Level, And AP Students</strong></h2>
          <p className="subtitle">Ignite Training Institute provides 1-on-1 Economics tutoring in Dubai across IB (SL and HL), IGCSE, GCSE, A-Level, AP Microeconomics, and AP Macroeconomics. Lessons run from our DIFC and JLT centres and online, with tutors matched to each exam board and a focus on essay technique, diagrams, and evaluation.</p>
          <br />
          <p className="subtitle">Most students come to us when essay marks plateau despite knowing the content, when diagrams lose marks on labelling and accuracy, or when evaluation answers stay one-sided and never reach the top band. Some students join us months ahead of mocks; others arrive with weeks to go and need focused work on a specific paper. Every new student starts with a diagnostic where the tutor reviews recent essays or past paper attempts to see exactly where marks are being lost.</p>
          <br />
          <p className="subtitle">We work with students from international schools across Dubai, including those at GEMS Wellington, Dubai College, Jumeirah College, JESS Ranches, Dubai American Academy, Repton School Dubai, and similar IB / British / American curriculum schools across DIFC, JLT, Jumeirah, and the wider UAE.</p>
          <br />

          <h3 className="title"><strong>Economics Courses At A Glance: IB, IGCSE, A-Level, And AP Compared</strong></h3>
          <div className="table-responsive">
            <table className="table table-bordered text-white">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Level</th>
                  <th>Key Assessment Components</th>
                  <th>Distinctive Skill Focus</th>
                  <th>Typical Year/Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IB Economics SL</td>
                  <td>DP Standard Level</td>
                  <td>Paper 1 (essays) + Paper 2 (data-response) + Internal Assessment</td>
                  <td>DEED essay structure, diagram accuracy</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IB Economics HL</td>
                  <td>DP Higher Level</td>
                  <td>Paper 1 + Paper 2 + Paper 3 (quantitative) + Internal Assessment</td>
                  <td>PED, XED, PES, multiplier calculations</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IGCSE Economics (0455)</td>
                  <td>Year 10 to 11</td>
                  <td>Multiple choice + structured/data-response paper</td>
                  <td>Command words, structured answers</td>
                  <td>Year 10 to 11 (Grade 9 to 10)</td>
                </tr>
                <tr>
                  <td>A-Level Economics (9708 / 9EC0 / 7136)</td>
                  <td>AS + A2</td>
                  <td>Multiple choice, data-response, and essay papers</td>
                  <td>Evaluation chains, diagram annotation</td>
                  <td>Year 12 to 13 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>AP Microeconomics</td>
                  <td>College Board</td>
                  <td>60 MC (66%) + 3 FRQs (33%); scored on a 1 to 5 scale</td>
                  <td>Market structures, firm behaviour, graphs</td>
                  <td>Grade 11 to 12</td>
                </tr>
                <tr>
                  <td>AP Macroeconomics</td>
                  <td>College Board</td>
                  <td>60 MC (66%) + 3 FRQs (33%); scored on a 1 to 5 scale</td>
                  <td>AD/AS, money market, Phillips curve graphs</td>
                  <td>Grade 11 to 12</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />

          <h3 className="title"><strong>Why Students Often Struggle With Economics?</strong></h3>
          <p className="subtitle">Four issues come up repeatedly across IB, IGCSE, A-Level, and AP students. <strong>Diagram precision</strong> is the most common, students understand the concept but lose marks on unlabelled axes, missing equilibrium points, or shifts drawn in the wrong direction. <strong>Evaluation depth</strong> is the second, since top grades require weighing both sides of an argument with real-world context, and most students stop at one-sided explanation.</p>
          <br />
          <p className="subtitle"><strong>Essay structure</strong> trips up students who know the content but don't follow the definition, explanation, diagram, application, and evaluation sequence examiners reward. <strong>Data-response under time pressure</strong> is the fourth, where students struggle to interpret tables, calculate percentages, and write concise answers to the command word within the minutes available. Tutoring targets each of these directly rather than treating them as general weaknesses.</p>
          <br />

          <h2 className="title"><strong>Economics Tuition And Coaching In Dubai: Formats, Sessions, And What's Included</strong></h2>
          <p className="subtitle">Economics tuition in Dubai works best when sessions are built around the student's actual exam papers and the skills they're losing marks on. We run two formats: in-person at our DIFC or JLT centres, and one-to-one online for students based further out in Dubai or across the wider UAE. Both formats use the same tutor pool and the same lesson structure, so switching between them during the term doesn't break continuity.</p>
          <br />
          <p className="subtitle">Sessions are typically 60 minutes weekly during the regular term, extending to 90-minute blocks twice a week during exam preparation. Each session covers a targeted teaching block on one concept or skill, a timed practice task using past paper material, and feedback marked against the actual exam board mark scheme (Cambridge, Edexcel, AQA, IBO, or College Board). For IB students, sessions also cover Internal Assessment commentary writing and feedback against IB criteria. Small-group sessions of two to three students are available for IGCSE and A-Level Economics, where families want the structure of coaching at a lower per-session cost.</p>
          <br />
          <p className="subtitle">For families weighing up exam boards before committing to tuition, our blog on <a href="https://ignitetraininginstitute.com/blog/what-is-the-difference-between-edexcel-and-cambridge">the differences between Edexcel and Cambridge</a> is useful background.</p>
          <br />

          <h2 className="title"><strong>IB Economics Tutors For DP (SL And HL) And MYP</strong></h2>
          <p className="subtitle">IB Economics is one of the more analytically demanding DP subjects, and the SL and HL courses share a core but diverge at the assessment level. Both levels study the same four units: introduction to economics, microeconomics, macroeconomics, and the global economy.</p>
          <br />
          <p className="subtitle"><strong>IB Economics SL</strong> is assessed through Paper 1 (extended-response essays) and Paper 2 (data-response based on an unseen text and data), alongside the Internal Assessment. <strong>IB Economics HL</strong> adds Paper 3, a quantitative paper that requires calculations including price elasticity of demand (PED), cross elasticity of demand (XED), price elasticity of supply (PES), and the multiplier, plus deeper analytical treatment of the syllabus.</p>
          <br />
          <p className="subtitle"><strong>The IB Internal Assessment</strong> is a portfolio of three commentaries, where students analyse real-world news articles using economic theory and diagrams. This is built across both years of the DP, which is why we recommend starting tutoring early in DP1 rather than late in DP2.</p>
          <br />
          <p className="subtitle">For Paper 1 essays, we teach the <strong>DEED framework: Define, Explain, Example, Diagram</strong>. Each key term is defined, the economic reasoning is explained step by step, a real-world example grounds the answer, and an accurate diagram supports the analysis. Most students who plateau at a 4 or 5 are losing marks on the example and diagram steps, not the explanation. Our <a href="https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai">IBDP tutors in Dubai</a> cover the full DP framework, and our <a href="https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai">IB MYP tutors</a> handle the Individuals and Societies foundation that leads into DP Economics.</p>
          <br />

          <h2 className="title"><strong>IGCSE And GCSE Economics Tutors In Dubai</strong></h2>
          <p className="subtitle">IGCSE Economics introduces the fundamentals of micro and macroeconomics and is a strong foundation for A-Level or IB Economics later. <strong>Cambridge IGCSE Economics (0455)</strong> is the most common specification in Dubai schools. It covers the basic economic problem, allocation of resources, the price system, market failure, the macroeconomy, government intervention, international trade, and economic development.</p>
          <br />
          <p className="subtitle">The course is assessed through a multiple-choice paper and a structured/data-response paper. The biggest mark differentiator at IGCSE is understanding <strong>command words</strong>, the difference between what "identify", "explain", "analyse", and "discuss" require, and structuring answers accordingly. Many students lose marks not because they don't know the content, but because they write an explanation when the question asked them to evaluate.</p>
          <br />
          <p className="subtitle">For students at British curriculum schools sitting UK GCSE Economics rather than the international IGCSE, we tutor AQA, OCR, and Pearson Edexcel GCSE Economics. The topic coverage is similar but the assessment structures and mark schemes differ. Our <a href="https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai">IGCSE tutors in Dubai</a> work across all major IGCSE subjects, so students taking Economics alongside Business, Maths, or other subjects can coordinate scheduling under one weekly plan.</p>
          <br />

          <h2 className="title"><strong>A-Level And AS Economics Tutors For Theory And Application</strong></h2>
          <p className="subtitle">A-Level Economics is a significant step up from IGCSE, demanding sustained analytical writing, accurate diagram work, and genuine evaluation. Three exam boards dominate UAE schools, and the content emphasis differs across them. <strong>Cambridge International A-Level Economics (9708)</strong> uses data-response and essay papers. <strong>Pearson Edexcel A-Level Economics (9EC0)</strong> uses themed papers spanning micro and macro together. <strong>AQA A-Level Economics (7136)</strong> includes a distinct essay paper alongside data-response and multiple-choice.</p>
          <br />
          <p className="subtitle">The skill that separates A and A* candidates is <strong>evaluation chains</strong>, the ability to develop an argument, weigh it against a counter-argument, and reach a justified conclusion with real-world context. Strong content knowledge alone caps most students at a B. We focus sessions on building those evaluation chains, annotating diagrams accurately, and applying current economic examples from the UAE, UK, and the global economy.</p>
          <br />
          <p className="subtitle">Most students preparing for AS papers in May need targeted work on essay structure and timed data-response, since the jump from IGCSE in writing density is significant. A2 students typically need help with synoptic links across micro and macro, and the deeper evaluation expected at the top band. Our <a href="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai">A-Level tutors in Dubai</a> coordinate Economics alongside other A-Level subjects under a single weekly plan.</p>
          <br />

          <h2 className="title"><strong>AP Economics Tutors For AP Microeconomics And AP Macroeconomics</strong></h2>
          <p className="subtitle">AP Economics is split into two separate College Board courses, and many students take both in the same year since they complement each other. Each has its own exam and its own score.</p>
          <br />
          <p className="subtitle"><strong>AP Microeconomics</strong> focuses on individual markets, firms, and consumer behaviour, including supply and demand, elasticity, market structures (perfect competition, monopoly, oligopoly), factor markets, and market failure.</p>
          <br />
          <p className="subtitle"><strong>AP Macroeconomics</strong> focuses on the economy as a whole, including GDP, inflation, unemployment, fiscal and monetary policy, and international trade. Macro is heavily graph-based, requiring students to draw and shift AD/AS, the money market, and the Phillips curve from memory.</p>
          <br />
          <p className="subtitle">Both exams follow the same structure: 60 multiple-choice questions (1 hour 10 minutes, 66% of the score) and 3 free-response questions, one long and two short (1 hour, including a 10-minute reading period, 33% of the score). Both are hybrid digital exams taken in the May AP testing window, scored on a 1 to 5 scale, with most US universities looking for a 4 or 5 for credit. Our <a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai">AP tutors in Dubai</a> work across the full AP range, with AP Economics handled by tutors familiar with both the Micro and Macro frameworks and the graph-heavy free-response expectations.</p>
          <br />

          <h2 className="title"><strong>Exam Technique: Diagrams, Evaluation, And Data-Response Skills</strong></h2>
          <p className="subtitle">Economics rewards technique as much as knowledge. A student who knows every definition but can't structure an evaluation or label a diagram accurately will not reach the top band in any curriculum. Tutoring at Ignite builds four technique areas alongside content.</p>
          <br />
          <p className="subtitle"><strong>Diagram precision</strong> covers accurate drawing, labelling, and annotation of supply and demand, cost and revenue curves, and market structure diagrams. The common mark loss here is unlabelled axes, missing equilibrium points, and shifts drawn in the wrong direction. We drill diagrams until they're automatic under exam conditions.</p>
          <br />
          <p className="subtitle"><strong>Evaluation</strong> is the highest-value skill at A-Level and IB. It means weighing an argument against its counter-argument, considering assumptions and real-world context, and reaching a justified judgement rather than sitting on the fence. We build evaluation chains step by step until students can produce them under time pressure.</p>
          <br />
          <p className="subtitle"><strong>Essay structure</strong> follows a clear sequence: define the key terms, explain the economic reasoning, support it with a diagram, apply it to a real-world context, and evaluate. This sequence (which the DEED framework captures for IB) keeps answers complete and examiner-friendly.</p>
          <br />
          <p className="subtitle"><strong>Data-response technique</strong> covers interpreting data tables and extracts, calculating percentages and changes, identifying trends, and writing concise answers matched to the command word. We use past paper extracts so students build speed and accuracy together. Students who prefer one-to-one delivery across multiple subjects often work with our <a href="https://ignitetraininginstitute.com/private-tutors-in-dubai">private tutors in Dubai</a>.</p>
          <br />

          <h2 className="title"><strong>Ignite: Best Economics Tutor In Dubai For Every Curriculum</strong></h2>
          <p className="subtitle">Ignite has been running tutoring in Dubai for over ten years, and Economics is one of our most established subjects, with tutors who have guided students through IB, IGCSE, A-Level, and AP for years. Our two centres at DIFC and JLT serve students from international schools across Dubai, and our online programme extends that reach to Sharjah, Abu Dhabi, and the wider UAE.</p>
          <br />
          <p className="subtitle">What makes Economics tutoring work, in our experience, is matching the tutor to the exam board and the specific skill gap. A tutor strong on IB Paper 1 essays and the DEED framework approaches a session very differently from one preparing a student for AP Macroeconomics graph work. Every Economics tutor at Ignite has direct experience with at least one of the major curricula, and most have taught several. New students start with a diagnostic, get matched to a tutor whose curriculum specialism fits, and follow a session-by-session plan built around the actual papers, essays, and IA work they need to deliver.</p>
          <br />
          <p className="subtitle">If you're considering Economics tutoring for the first time, a <a href="https://ignitetraininginstitute.com/join-free-demo-class">free demo class with Ignite</a> is the simplest way to see how the diagnostic session and lesson structure works in practice. There's no expectation to commit beyond the demo.</p>
          <br />

          <h3 className="title"><strong>Know more about our programmes:</strong></h3>
          <p className="subtitle">
            • <a href="https://ignitetraininginstitute.com/ib-curriculum-tutors-in-dubai">IB Curriculum Tutors In Dubai</a><br />
            • <a href="https://ignitetraininginstitute.com/british-curriculum-tutors-in-dubai">British Curriculum Tutors In Dubai</a><br />
            • <a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai">AP Tutors In Dubai</a><br />
            • <a href="https://ignitetraininginstitute.com/join-free-demo-class">Free Demo Class At Ignite Training Institute</a><br />
            • <a href="https://ignitetraininginstitute.com/contact-us">Contact Us</a>
          </p>

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
