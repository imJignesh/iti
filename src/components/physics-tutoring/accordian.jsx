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
          <h2 className="title"><strong>Physics Tutors In Dubai For IB, IGCSE, A-Level, And AP Students</strong></h2>
          <p className="subtitle">Ignite Training Institute provides 1-on-1 Physics tutoring in Dubai across IB (SL and HL), IGCSE, GCSE, A-Level, and AP Physics. Lessons run from our DIFC and JLT centres and online, covering mechanics, waves, electricity, fields, and modern physics, with tutors matched to each exam board and a focus on problem-solving, the maths behind the physics, and exam technique.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <p className="subtitle">Most students come to us when the numerical side of physics stops making sense, when they understand a concept in class but cannot apply it to an unfamiliar exam question, or when an IB Internal Assessment is stuck at the design stage. Some students join us months ahead of mocks; others arrive with weeks to go and need focused work on one topic or one paper. Every new student starts with a diagnostic where the tutor works through recent problems and past paper attempts to see exactly where marks are being lost.</p><br />

          <p className="subtitle">We work with students from international schools across Dubai, including those at GEMS Wellington, Dubai College, Jumeirah College, JESS Ranches, Dubai American Academy, Repton School Dubai, and similar IB / British / American curriculum schools across DIFC, JLT, Jumeirah, and the wider UAE. Physics is also a gateway subject for engineering, medicine, and other STEM degrees, so we keep an eye on the grade those university routes expect.</p><br />

          <h3 className="title"><strong>Physics Courses At A Glance: IB, IGCSE, A-Level, And AP Compared</strong></h3>
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
                  <td>IB Physics SL</td>
                  <td>DP Standard Level</td>
                  <td>IB</td>
                  <td>Paper 1 (1A multiple choice + 1B data) + Paper 2 + Internal Assessment (20%)</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IB Physics HL</td>
                  <td>DP Higher Level</td>
                  <td>IB</td>
                  <td>Same papers as SL with additional HL content + Internal Assessment (20%)</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IGCSE Physics</td>
                  <td>Year 10 to 11</td>
                  <td>Cambridge 0625 / 0972</td>
                  <td>Multiple-choice, theory, and practical/alternative-to-practical papers</td>
                  <td>Year 10 to 11 (Grade 9 to 10)</td>
                </tr>
                <tr>
                  <td>A-Level Physics</td>
                  <td>AS + A2</td>
                  <td>Cambridge 9702</td>
                  <td>MCQ, AS and A2 structured papers, plus a practical assessment</td>
                  <td>Year 12 to 13 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>AP Physics</td>
                  <td>College Board</td>
                  <td>AP</td>
                  <td>Separate courses (1, 2, C: Mechanics, C: E&M); each 40 MC + free response; scored 1 to 5</td>
                  <td>Grade 11 to 12</td>
                </tr>
              </tbody>
            </table>
          </div><br />

          <h3 className="title"><strong>Why Students Often Struggle With Physics?</strong></h3>
          <p className="subtitle">The biggest barrier in physics is usually the maths, not the physics itself. <strong>Rearranging equations</strong> trips students up first, since a student who understands a concept can still lose every mark by getting the algebra wrong under exam pressure. <strong>Units and significant figures</strong> are the second consistent gap, where correct working loses marks for a missing or wrong unit. <strong>Vectors and graph work</strong> are the third, because direction, components, and gradients carry meaning that students often skip past. <strong>Visualising abstract ideas</strong> like fields, forces, and waves is the fourth, since you cannot see a magnetic field or an electric force the way you can see a moving object. Tutoring fixes the maths foundation first, because that single change lifts marks across every topic.</p><br />

          <h2 className="title"><strong>Physics Tuition And Coaching In Dubai: Formats, Sessions, And What's Included?</strong></h2>
          <p className="subtitle">Physics tuition in Dubai works best when sessions combine concept teaching with worked problems and past paper practice, rather than passive review. We run two formats: in-person at our DIFC or JLT centres, and one-to-one online for students based further out in Dubai or across the wider UAE. Both formats use the same tutor pool and the same lesson structure, with screen-sharing during online sessions for working through problems step by step.</p><br />
          <p className="subtitle">Private one-to-one sessions are the most popular choice, since physics problems are personal: the question is always where this particular student is losing method marks. Sessions are typically 60 minutes weekly during regular term, extending to 90-minute blocks twice a week during exam preparation. Each session covers a targeted teaching block, worked practice on the relevant calculations, and past paper questions marked against the actual board mark scheme. Small-group sessions of two to three students are available for IGCSE and GCSE Physics where families want the structure of coaching at a lower per-session cost.</p><br />
          <p className="subtitle">For families weighing up exam boards before committing to tuition, our blog on <a href="https://ignitetraininginstitute.com/blog/what-is-the-difference-between-edexcel-and-cambridge" className="text-white text-decoration-underline">the differences between Edexcel and Cambridge</a> is useful background.</p><br />

          <h2 className="title"><strong>IB Physics Tutors For DP (SL And HL) And MYP</strong></h2>
          <p className="subtitle">IB Physics changed substantially with the syllabus first examined in May 2025, and a lot of material online still describes the old course. Here is how it actually works now.</p><br />
          <p className="subtitle">The course is built around <strong>five themes</strong>: Space, Time and Motion; The Particulate Nature of Matter; Wave Behaviour; Fields; and Nuclear and Quantum Physics. This replaced the old numbered topics. The optional topics were removed and astrophysics was dropped, so every SL and HL student now studies the same core content, with HL going deeper within the same five themes rather than choosing a separate option.</p><br />
          <p className="subtitle">Assessment changed too. The standalone Paper 3 was removed, and its experimental-design and data-analysis questions were absorbed into <strong>Paper 1B</strong>. Students now sit Paper 1 (Paper 1A multiple choice, plus Paper 1B data-based questions) and Paper 2 (short-answer and extended-response). The external papers carry roughly 80% of the grade, and the new structure rewards scientific reasoning and uncertainty analysis more than recall.</p><br />
          <p className="subtitle"><strong>IB Physics SL and HL</strong> share the five themes, but HL covers more material at greater depth, with topics such as rotational mechanics and deeper field theory. The <strong>Internal Assessment</strong> is a scientific investigation worth 20%, with a 3,000-word limit, and it runs across the two years. We support students from research-question design through to uncertainty handling and evaluation, since that is where most IA marks are won or lost. Our <a href="https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai" className="text-white text-decoration-underline">IBDP tutors in Dubai</a> cover the full DP framework, and our <a href="https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai" className="text-white text-decoration-underline">IB MYP tutors</a> handle the Sciences foundation that leads into DP Physics.</p><br />

          <h2 className="title"><strong>IGCSE And GCSE Physics Tutors In Dubai</strong></h2>
          <p className="subtitle">IGCSE Physics is taken by most UAE international school students at the British curriculum level, and it builds the foundation that A-Level and IB Physics assume. <strong>Cambridge IGCSE Physics (0625)</strong> is the standard international qualification, graded A* to G, with <strong>0972</strong> being the 9-1 graded variant of the same syllabus. Students taking combined science rather than separate Physics usually sit Cambridge IGCSE Co-ordinated Sciences (0654), which overlaps heavily with 0625 for the core physics topics.</p><br />
          <p className="subtitle">The course covers motion, forces and energy, thermal physics, waves, electricity and magnetism, and atomic physics. Cambridge IGCSE Physics is tiered into Core and Extended, and students sit either a practical exam or the alternative-to-practical paper, both of which test experimental skills, measurement, and data handling. We build those practical-paper skills alongside the theory rather than leaving them to the end.</p><br />
          <p className="subtitle">For students at British curriculum schools sitting UK GCSE Physics rather than the international IGCSE, we tutor AQA, OCR, and Pearson Edexcel GCSE Physics. Our <a href="https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai" className="text-white text-decoration-underline">IGCSE tutors in Dubai</a> work across all major IGCSE subjects, so students taking Physics alongside Maths, Chemistry, or Biology can coordinate scheduling under one weekly plan.</p><br />

          <h2 className="title"><strong>A-Level And AS Physics Tutors For Theory And Practical Skills</strong></h2>
          <p className="subtitle">A-Level Physics is one of the most demanding A-Levels, combining heavy conceptual content with a real mathematical load. <strong>Cambridge International A-Level Physics (9702)</strong> is the most common specification in UAE schools. It is assessed through a multiple-choice paper, AS and A2 structured papers, and a practical assessment covering planning, analysis, and evaluation. The content runs across mechanics, waves, electricity, fields, and nuclear and particle physics.</p><br />
          <p className="subtitle">For students at British curriculum schools sitting UK A-Level Physics, we tutor AQA, Pearson Edexcel, and OCR specifications, which include a separately assessed practical endorsement alongside the written papers. Practical understanding feeds directly into exam questions, so it cannot be treated as optional.</p><br />
          <p className="subtitle">The skills that separate top A-Level candidates are mathematical fluency (rearranging equations, working with vectors, handling logarithms and exponentials), correct use of units and significant figures, and the ability to apply familiar physics to unfamiliar scenarios. This is exactly why so many students look for a tutor who can support physics and maths together.</p><br />
          <p className="subtitle">Most students preparing for AS papers in May need targeted work on calculation accuracy and structured answers, while A2 students need help with synoptic links and the practical paper. Our <a href="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai" className="text-white text-decoration-underline">A-Level tutors in Dubai</a> coordinate Physics alongside Maths, Chemistry, and other subjects under a single weekly plan, which suits the many students taking Physics for an engineering or medicine application.</p><br />

          <h2 className="title"><strong>AP Physics Tutors: Physics 1, 2, And C</strong></h2>
          <p className="subtitle">AP Physics is not a single course. The College Board runs four separate AP Physics courses, and students take whichever their school offers: <strong>AP Physics 1</strong> and <strong>AP Physics 2</strong> are algebra-based, while <strong>AP Physics C: Mechanics</strong> and <strong>AP Physics C: Electricity and Magnetism</strong> are calculus-based and aimed at students heading into engineering and the physical sciences.</p><br />
          <p className="subtitle">The courses were redesigned for the May 2025 exams. AP Physics 1 now has eight units, with fluid mechanics moved in from AP Physics 2. Across the courses, the multiple-choice section is 40 questions with four answer choices, and the free-response section uses a set of structured question types covering experimental design, data analysis, and mathematical reasoning. The two AP Physics C exams now sit in separate testing sessions. All AP Physics exams are scored on a 1 to 5 scale, with most US universities looking for a 4 or 5 for credit.</p><br />
          <p className="subtitle">AP Physics rewards clear reasoning and correct working, not just final answers, and the free-response section is where method marks are won. Our <a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai" className="text-white text-decoration-underline">AP tutors in Dubai</a> work across the full AP range, with AP Physics handled by tutors familiar with both the algebra-based and calculus-based courses and the redesigned exam format.</p><br />

          <h2 className="title"><strong>Core Physics Topics And Skills We Cover</strong></h2>
          <p className="subtitle">Most students need help with specific topics rather than the whole subject, so the lesson plan is built around the areas where marks are actually being lost. The topics we support most often are:</p><br />
          <p className="subtitle"><strong>Mechanics</strong>, including motion, forces, energy, momentum, and circular motion, which is where most students start and where the maths foundation is set. <strong>Waves and optics</strong>, including wave behaviour, interference, and the electromagnetic spectrum. <strong>Electricity and magnetism</strong>, including circuits, fields, and electromagnetic induction, which students consistently find the hardest to visualise. <strong>Thermal physics</strong>, including temperature, heat transfer, and gas laws. <strong>Fields and nuclear and modern physics</strong>, including gravitational and electric fields, radioactivity, and quantum ideas.</p><br />
          <p className="subtitle">Alongside content, we build the cross-cutting skills that physics mark schemes reward: rearranging and applying equations, correct use of units and significant figures, working with vectors and graphs, and showing clear method so that working earns marks even when a final answer slips. Because so much of physics rests on the maths, students who want both supported together can work with a tutor across Physics and Maths, and those who prefer one-to-one delivery across multiple subjects often work with our <a href="https://ignitetraininginstitute.com/private-tutors-in-dubai" className="text-white text-decoration-underline">private tutors in Dubai</a>.</p><br />

          <h2 className="title"><strong>Ignite: Best Physics Tutor In Dubai For Every Curriculum</strong></h2>
          <p className="subtitle">Ignite has been running tutoring in Dubai for over ten years, and Physics is one of our most active subjects, with a bench of specialist tutors including Deepak, who has more than thirteen years of experience. Our two centres at DIFC and JLT serve students from international schools across Dubai, and our online programme extends that reach to Sharjah, Abu Dhabi, and the wider UAE.</p><br />
          <p className="subtitle">What makes Physics tutoring work, in our experience, is matching the tutor to the exam board and the specific gap, then fixing the maths foundation that sits under everything else. A tutor preparing a student for the new IB five-theme papers works very differently from one coaching an A-Level student through the practical paper or an AP student through calculus-based mechanics.</p><br />
          <p className="subtitle">Every Physics tutor at Ignite has direct experience with at least one of the major curriculums, and most have taught several. New students start with a diagnostic, get matched to a tutor whose curriculum specialism fits, and follow a session-by-session plan built around the actual papers, practicals, and IA work they need to deliver.</p><br />
          <p className="subtitle">If you're considering Physics tutoring for the first time, a <a href="https://ignitetraininginstitute.com/join-free-demo-class" className="text-white text-decoration-underline">free demo class with Ignite</a> is the simplest way to see how the diagnostic session and lesson structure works in practice. There's no expectation to commit beyond the demo.</p><br />

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
