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
          <h2 className="title">Expert Maths Tutor In Dubai UAE For Academic Confidence</h2>
          <p className="subtitle">Ignite Training Institute offers expert Maths tutors in Dubai who provide focused guidance tailored to each student’s level. Whether you're catching up or aiming to excel, our tutors help strengthen your core concepts and problem-solving skills. We ensure students build confidence in Maths through step-by-step support and targeted strategies. With a deep understanding of school and international curricula, we make complex topics simple and engaging. Our tutors adapt to different learning styles, making sessions productive and impactful. Join hundreds of students across Dubai who’ve boosted their grades with our expert maths support.</p>

        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title"><strong>Maths Tutors In Dubai For IB, IGCSE, A-Level, And AP Students</strong></h2>
          <p className="subtitle">Ignite Training Institute provides 1-on-1 maths tutoring in Dubai across IB (both AA and AI, SL and HL), IGCSE, GCSE, A-Level, AS-Level, and AP. Sessions run from our DIFC and JLT centres and online, covering algebra, functions, geometry, calculus, and statistics, with tutors matched to each exam board and a focus on problem-solving and exam technique.</p>
          <br />
          <p className="subtitle">Most students come to us when small gaps have started to compound, when they can follow a method in class but freeze on an unfamiliar exam question, or when an IB Internal Assessment is stuck at the planning stage. Some join months ahead of mocks; others arrive with weeks to go and need focused work on one topic or one paper. Whatever the timing, every new student starts with a diagnostic so the tutor can see exactly where marks are being lost rather than re-teaching what the student already knows.</p>
          <br />
          <p className="subtitle">We work with students from international schools across Dubai, including those at GEMS Wellington, Dubai College, Jumeirah College, JESS Ranches, Dubai American Academy, and Repton School Dubai, and with families across DIFC, JLT, Jumeirah, Motor City, Dubai Hills, and the wider UAE searching for a maths tutor near me. Maths is also the gateway subject for almost every STEM and business degree, so we keep the university target grade in view from the first session.</p>
          <br />

          <h3 className="title"><strong>Maths Courses At A Glance: IB, IGCSE, A-Level, And AP Compared</strong></h3>
          <div className="table-responsive">
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
                  <td>IB Maths (AA or AI)</td>
                  <td>DP SL and HL</td>
                  <td>IB</td>
                  <td>SL: Paper 1 + Paper 2 + IA (20%); HL adds Paper 3</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IGCSE Maths</td>
                  <td>Core / Extended</td>
                  <td>Cambridge 0580, Edexcel 4MA1</td>
                  <td>Multiple papers covering non-calculator and calculator skills</td>
                  <td>Year 10 to 11 (Grade 9 to 10)</td>
                </tr>
                <tr>
                  <td>Additional Maths</td>
                  <td>IGCSE level</td>
                  <td>Cambridge 0606</td>
                  <td>Pure maths bridge into A-Level for stronger students</td>
                  <td>Year 10 to 11</td>
                </tr>
                <tr>
                  <td>A-Level Maths</td>
                  <td>AS + A2</td>
                  <td>Cambridge 9709, Edexcel IAL, AQA, OCR</td>
                  <td>Pure Maths plus Mechanics and Statistics components</td>
                  <td>Year 12 to 13 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>AP Maths</td>
                  <td>College Board</td>
                  <td>AP</td>
                  <td>Calculus AB, Calculus BC, Statistics, Precalculus; scored 1 to 5</td>
                  <td>Grade 11 to 12</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />

          <h3 className="title"><strong>Why Students Often Struggle With Maths?</strong></h3>
          <p className="subtitle">Maths is the subject where gaps compound fastest, so the cause of a low grade is rarely the topic the student is on right now. <strong>Foundational gaps</strong> are the first reason, since a shaky grasp of fractions or indices from two years ago quietly breaks everything built on top of it. <strong>Algebra fluency</strong> is the second, because students who cannot rearrange and manipulate expressions quickly lose time and accuracy on every other topic. <strong>Translating word problems</strong> is the third, where the maths is manageable but turning a paragraph into an equation is the real barrier. <strong>Exam method and timing</strong> is the fourth, since maths mark schemes reward shown working, and students who jump to answers lose method marks they had earned. Tutoring works best when it fixes the foundation first, because that single change lifts performance across the whole paper.</p>
          <br />

          <h2 className="title"><strong>Maths Tuition And Coaching In Dubai: Formats, Sessions, And What's Included</strong></h2>
          <p className="subtitle">Maths tuition in Dubai works best when sessions combine teaching with worked practice and past papers, rather than passive review of notes. We run two formats: in-person at our DIFC or JLT centres, and one-to-one online for students based further out or with tight schedules. Both use the same tutor pool and the same lesson structure, with a shared digital whiteboard during online sessions for working through problems line by line.</p>
          <br />
          <p className="subtitle">Private one-to-one sessions are the most popular choice, because maths problems are personal: the question is always where this particular student is losing marks. Sessions are typically 60 minutes weekly during regular term, extending to 90-minute blocks during exam preparation. Each session covers a targeted teaching block, worked practice on the relevant topic, and past paper questions marked against the real board mark scheme so students see exactly where method marks are won and lost. Small-group maths classes of two to three students are available for IGCSE and GCSE where families want structured coaching at a lower per-session cost.</p>
          <br />
          <p className="subtitle">For families weighing up exam boards before committing to tuition, our guide on <a href="https://ignitetraininginstitute.com/blog/what-is-the-difference-between-edexcel-and-cambridge">the differences between Edexcel and Cambridge</a> is useful background.</p>
          <br />

          <h2 className="title"><strong>IB Maths Tutors: Analysis &amp; Approaches (AA) And Applications &amp; Interpretation (AI)</strong></h2>
          <p className="subtitle">IB Maths confuses more families at the course-selection stage than any other subject, because the choice between the two routes shapes university options. Here is how it actually works.</p>
          <br />
          <p className="subtitle">IB Maths is split into two courses, each available at Standard Level and Higher Level. <strong>Analysis and Approaches (AA)</strong> is the traditional, pure-maths route built around algebra, functions, calculus, and formal proof, and it is the course that engineering, physics, computer science, and mathematics degrees expect. <strong>Applications and Interpretation (AI)</strong> is the applied route, with a heavier focus on statistics, probability, and real-world modelling, and it suits students heading into business, design, social sciences, and similar fields. Choosing the wrong route can quietly close university doors, so we help families match the course to the degree before DP1 begins.</p>
          <br />
          <p className="subtitle">Both courses cover the <strong>same five topics</strong>: Number and Algebra, Functions, Geometry and Trigonometry, Statistics and Probability, and Calculus. AA goes deeper into algebra, proof, and calculus, while AI emphasises functions, statistics, and modelling. HL in either route adds harder content and a third paper.</p>
          <br />
          <p className="subtitle">Assessment differs between the routes in a way that matters for tutoring. <strong>AA Paper 1 is sat without a calculator</strong>, while AA Paper 2 and all AI papers allow a graphical display calculator, so GDC fluency is essential for AI students from the start. At SL, students sit Paper 1 and Paper 2, each worth 40%, plus the Internal Assessment worth 20%. At HL, the weighting becomes Paper 1 at 30%, Paper 2 at 30%, Paper 3 at 20%, and the IA at 20%. The <strong>Internal Assessment is a mathematical exploration</strong> worth 20% of the final grade, and it is where many students lose marks on a weak research question or thin mathematical engagement, so we settle it early. Our <a href="https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai">IBDP tutors in Dubai</a> cover the full Diploma, and our <a href="https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai">IB MYP tutors</a> build the foundation that leads into DP Maths.</p>
          <br />

          <h2 className="title"><strong>IGCSE And GCSE Maths Tutors In Dubai</strong></h2>
          <p className="subtitle">The IGCSE Maths course is undertaken by the majority of international school students in the UAE who follow the British curriculum, establishing the groundwork that A-Level and IB Maths rely upon. <strong>Cambridge IGCSE Mathematics (0580)</strong> and <strong>Pearson Edexcel International (4MA1)</strong> are the two common specifications, both tiered into Core and Extended (Edexcel uses Foundation and Higher). Stronger students often also take <strong>Additional Mathematics (0606)</strong>, a pure-maths bridge that makes the jump to A-Level far less steep.</p>
          <br />
          <p className="subtitle">The course covers number, algebra, geometry and trigonometry, mensuration, probability, and statistics, assessed across multiple papers that test both non-calculator and calculator skills. The topics where Dubai students most often lose marks are algebraic manipulation, circle theorems, probability, and the step up from Core to Extended tier. We build past-paper technique and timing into every plan rather than leaving it to the final weeks. Our <a href="https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai">IGCSE tutors in Dubai</a> work across all major subjects, so students taking Maths alongside the sciences can coordinate scheduling under one weekly plan.</p>
          <br />

          <h2 className="title"><strong>A-Level And AS Maths Tutors For Pure, Mechanics, And Statistics</strong></h2>
          <p className="subtitle">A-Level Maths carries a real difficulty jump from IGCSE, and the students who cope best are usually the ones who took Additional Maths first. <strong>Cambridge International AS and A-Level Mathematics (9709)</strong> is the most common specification in UAE schools, alongside <strong>Edexcel IAL</strong>, with UK boards <strong>AQA</strong> and <strong>OCR</strong> used in British curriculum schools. The course combines <strong>Pure Mathematics</strong> (algebra, functions, calculus, trigonometry) with applied components in <strong>Mechanics</strong> and <strong>Statistics</strong>.</p>
          <br />
          <p className="subtitle">The skills that separate top candidates are algebraic fluency, confident calculus, and the ability to apply familiar methods to unfamiliar problems under time pressure. AS students preparing for May papers usually need targeted work on calculus accuracy and structured solutions, while A2 students need help with harder integration, proof, and the applied modules. Students aiming for mathematics, engineering, or economics at top universities often add <strong>Further Maths</strong>, covering complex numbers, matrices, and further calculus. Our <a href="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai">A-Level tutors in Dubai</a> coordinate Maths alongside Physics, Chemistry, and other subjects under a single weekly plan.</p>
          <br />

          <h2 className="title"><strong>AP Maths Tutors: Calculus AB/BC, Statistics, And Precalculus</strong></h2>
          <p className="subtitle">There is no single course called "AP Maths." The College Board runs several separate AP mathematics courses, and students take whichever their school offers. <strong>AP Calculus AB</strong> covers a first year of calculus (limits, derivatives, and integrals), while <strong>AP Calculus BC</strong> extends that with series, parametric and polar functions, and additional integration techniques. <strong>AP Statistics</strong> covers data analysis, probability, and inference, and <strong>AP Precalculus</strong> prepares students for the calculus courses.</p>
          <br />
          <p className="subtitle">All Advanced Placement mathematics examinations are evaluated on a scale from 1 to 5, with the majority of universities in the United States seeking a score of 4 or 5 in order to grant academic credit. The exams combine a multiple-choice section with a free-response section where method and clear mathematical reasoning earn the marks, not just the final answer. Our <a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai">AP tutors in Dubai</a> handle the full AP maths range, matching students to a tutor who knows the specific course and its scoring rubric.</p>
          <br />

          <h2 className="title"><strong>Core Maths Topics And Skills We Cover</strong></h2>
          <p className="subtitle">Most students need help with specific topics rather than the whole subject, so the lesson plan is built around where marks are actually being lost. The areas we support most often are:</p>
          <br />
          <p className="subtitle"><strong>Algebra and equations</strong>, the foundation that every other topic leans on, from rearranging expressions to quadratics and simultaneous equations. <strong>Functions and graphs</strong>, including transformations, domains, and reading meaning from a curve. <strong>Geometry and trigonometry</strong>, including circle theorems, identities, and 3D problems. <strong>Calculus</strong>, including differentiation, integration, and their applications, which is where A-Level and IB students spend the most time. <strong>Statistics and probability</strong>, including distributions, hypothesis testing, and data interpretation, which carry heavy weight in IB AI and AP Statistics. <strong>Vectors, matrices, complex numbers, and sequences</strong>, the higher-tier topics that separate the strongest candidates.</p>
          <br />
          <p className="subtitle">Alongside content, we build the cross-cutting skills maths mark schemes reward: showing clear working so method marks are earned, managing time across a paper, and using a graphical display calculator efficiently where one is allowed. Students who want Maths and Physics supported together can work with a tutor across both, and those who prefer one-to-one delivery across several subjects often work with our <a href="https://ignitetraininginstitute.com/private-tutors-in-dubai">private tutors in Dubai</a>.</p>
          <br />

          <h2 className="title"><strong>Ignite: Best Maths Tutor In Dubai For Every Curriculum</strong></h2>
          <p className="subtitle">Ignite has been running tutoring in Dubai for over ten years, and Maths is one of our most active subjects, with a bench of specialist tutors including Abdul, who has With over thirteen years of experience, one parent specifically highlighted the A-Level Further Maths instruction for addressing her daughter's questions in a step-by-step manner. Our two centres at DIFC and JLT serve students from international schools across Dubai, and our online programme extends that reach to Sharjah, Abu Dhabi, and the wider UAE.</p>
          <br />
          <p className="subtitle">What makes maths tutoring work, in our experience, is matching the tutor to the exact course and the specific gap, then fixing the foundation that sits under everything else. A tutor guiding an IB student through the AA Paper 1 non-calculator demands works very differently from one coaching an AI student on statistics and modelling, or an A-Level student through Mechanics. Every maths tutor at Ignite has direct experience with at least one of the major curriculums, and most have taught several. New students start with a diagnostic, get matched to a tutor whose specialism fits, and follow a session-by-session plan built around the actual papers and assessments they need to deliver.</p>
          <br />
          <p className="subtitle">If you're considering maths tutoring for the first time, a <a href="https://ignitetraininginstitute.com/join-free-demo-class">free demo class with Ignite</a> is the simplest way to see how the diagnostic session and lesson structure work in practice. There's no expectation to commit beyond the demo.</p>
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
