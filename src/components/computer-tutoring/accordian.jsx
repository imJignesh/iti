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
          <h2 className="title">Expert Computer Science Tutor In Dubai UAE, For Academic Confidence</h2>
          <p className="subtitle">Unlock your full potential in tech with our expert Computer Science tutors in Dubai. Whether you're tackling basic programming or advanced algorithms, our experienced team provides personalized guidance tailored to your learning style. We help you strengthen your concepts, boost confidence, and excel academically. Ignite Training Institute ensures every session adds value to your academic journey. Build a strong foundation in CS today.</p>

        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title"><strong>Computer Science Tutors In Dubai For IB, IGCSE, A-Level, And AP Students</strong></h2>
          <p className="subtitle">Ignite Training Institute provides 1-on-1 Computer Science tutoring in Dubai across IB (SL, HL, MYP), IGCSE, GCSE, A-Level, AP Computer Science A, and AP Computer Science Principles. Lessons cover Python, Java, pseudocode, and C++, depending on what the curriculum requires, with tutors matched to each exam board.<br /><br />Most students come to us when programming logic stops making sense, when algorithm questions on past papers consistently lose marks, or when an IB Computational Solution project feels stuck. Some students join us months ahead of mocks; others arrive with weeks to go and need focused work on one specific topic. Every new student starts with a short diagnostic where the tutor looks at recent code, exam scripts, or project work to see exactly where the gap is.<br /><br />We work with students from international schools across Dubai, including those at GEMS Wellington, Dubai College, Jumeirah College, JESS Ranches, Dubai American Academy, Repton School Dubai, and similar IB / British / American curriculum schools across DIFC, JLT, Jumeirah, and the wider UAE.</p><br />

          <h3 className="title"><strong>Computer Science Courses At A Glance: IB, IGCSE, A-Level, And AP Compared</strong></h3>
          <div className="table-responsive">
            <table className="table table-bordered text-white">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Level</th>
                  <th>Primary Language</th>
                  <th>Assessment Format</th>
                  <th>Typical Year/Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IB Computer Science SL</td>
                  <td>DP Standard Level</td>
                  <td>Java or Python</td>
                  <td>Paper 1 + Paper 2 + Internal Assessment (Computational Solution)</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IB Computer Science HL</td>
                  <td>DP Higher Level</td>
                  <td>Java or Python</td>
                  <td>Paper 1 + Paper 2 + Paper 3 (Case Study) + Internal Assessment</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IGCSE Computer Science (0478 / 0984)</td>
                  <td>Year 10 to 11</td>
                  <td>Python (most common) + pseudocode</td>
                  <td>Paper 1 (theory) + Paper 2 (programming, with pre-release material)</td>
                  <td>Year 10 to 11 (Grade 9 to 10)</td>
                </tr>
                <tr>
                  <td>A-Level Computer Science (9618)</td>
                  <td>AS + A2</td>
                  <td>Python or Java + pseudocode</td>
                  <td>2 written papers + practical programming project</td>
                  <td>Year 12 to 13 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>AP Computer Science A</td>
                  <td>College Board</td>
                  <td>Java only</td>
                  <td>42 MC (90 min) + 4 free-response questions (90 min); scored on a 1 to 5 scale</td>
                  <td>Grade 11 to 12</td>
                </tr>
                <tr>
                  <td>AP Computer Science Principles</td>
                  <td>College Board</td>
                  <td>Language-agnostic (Python widely used)</td>
                  <td>70 MC (120 min, 70%) + Create Performance Task (30%)</td>
                  <td>Grade 10 to 12</td>
                </tr>
              </tbody>
            </table>
          </div><br />

          <h3 className="title"><strong>Why Students Often Struggle With Computer Science?</strong></h3>
          <p className="subtitle">Four areas come up repeatedly across IB, IGCSE, A-Level, and AP students. <strong>Programming logic</strong> is the biggest one, students can read code line by line, but can't yet design a solution from scratch when handed a problem. <strong>Algorithm tracing</strong> under exam conditions is the second, walking through nested loops, recursion, or sorting algorithms step by step to predict the output is harder than it looks on paper. <strong>Pseudocode to code translation</strong> trips up Cambridge IGCSE and A-Level students who understand the logic but lose marks on syntax and variable handling. <strong>Debugging methodology</strong> is the fourth, most students try random fixes instead of working through the error systematically. Tutoring targets each of these specifically rather than treating them as general weaknesses.</p><br />

          <h2 className="title"><strong>Computer Science Tuition And Coaching In Dubai: Formats, Sessions, And What's Included</strong></h2>
          <p className="subtitle">Computer Science tuition in Dubai works best when the format lets the tutor see the student's actual code, not just talk about it. We run two formats: in-person at our DIFC or JLT centres, and one-to-one online for students based further out in Dubai or across the wider UAE. Both formats use the same tutor pool and the same lesson structure, with screen-sharing during online sessions so the tutor can review and debug code in real time.<br /><br />Sessions are typically 60 minutes weekly during the regular term, extending to 90-minute blocks twice a week during exam preparation or major project deadlines. Each session covers a targeted teaching block on one concept, hands-on coding practice with the language the student's syllabus requires, and review of past paper questions or project work. For IB students preparing the Computational Solution IA, sessions also include design documentation review and criteria-based feedback on written sections.<br /><br />For families weighing up exam boards before committing to tuition, our blog on <a href="https://ignitetraininginstitute.com/blog/what-is-the-difference-between-edexcel-and-cambridge" className="text-white text-decoration-underline">the differences between Edexcel and Cambridge</a> is a useful background.</p><br />

          <h2 className="title"><strong>IB Computer Science Tutors For DP (SL And HL) And MYP</strong></h2>
          <p className="subtitle">IB Computer Science is structured into two main DP courses plus the MYP foundation. The DP courses share a common core but differ significantly at HL, and the Internal Assessment runs across both years for either level.</p><br />

          <h3 className="title"><strong>IB Computer Science SL</strong></h3>
          <p className="subtitle">It covers system fundamentals, computer organisation, networks, computational thinking, and programming. The exam includes Paper 1 (theory and algorithm questions) and Paper 2 (a focused option topic), alongside the Internal Assessment.</p><br />

          <h3 className="title"><strong>IB Computer Science HL</strong></h3>
          <p className="subtitle">It covers everything in SL plus recursion, abstract data structures (stacks, queues, linked lists, binary trees), and resource management. HL adds Paper 3, which is the annual Case Study (a pre-released real-world scenario), tested in detail.</p><br />

          <h3 className="title"><strong>The IB Internal Assessment (Computational Solution)</strong></h3>
          <p className="subtitle">It is a major project component for both SL and HL. Students identify a real-world problem, design a solution, code a working program, and submit a structured written report against IB criteria. This process generally requires several months of organized effort, which is the reason we advise beginning tutoring early in DP1 instead of waiting until late in DP2.</p><br />

          <h3 className="title"><strong>MYP Design & Digital Design</strong></h3>
          <p className="subtitle">It runs from Year 7 to Year 11 and builds the computational thinking foundation that makes DP CS manageable. Our <a href="https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai" className="text-white text-decoration-underline">IBDP tutors in Dubai</a> cover the full DP framework, and our <a href="https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai" className="text-white text-decoration-underline">IB MYP tutors</a> handle Years 7 to 11.</p><br />

          <h2 className="title"><strong>IGCSE And GCSE Computer Science Tutors In Dubai</strong></h2>
          <p className="subtitle">IGCSE Computer Science is taken by most UAE international school students at the British curriculum level. <strong>Cambridge IGCSE Computer Science (0478)</strong> is the standard international qualification; <strong>0984</strong> is the UK 9-1 grading variant of the same course. Both papers test the same content with the same structure but use different grading scales, so tutoring is identical in approach.<br /><br />The course covers computational thinking, algorithm design, programming (typically taught in Python), data representation, hardware and software, networks and communications, databases, and cybersecurity. Paper 1 is theory-focused, and Paper 2 is programming-focused. <strong>Paper 2 uses pre-release material</strong>, which Cambridge publishes several weeks before the exam. The pre-release is essentially a coded scenario that students prepare in advance, then face exam questions on. We work through the pre-release with students systematically so they can write, trace, and modify code confidently when the real paper appears.<br /><br />For students at British curriculum schools sitting UK GCSE Computer Science rather than the international IGCSE, we also tutor AQA GCSE Computer Science (8525) and OCR GCSE Computer Science (J277). The subject areas are comparable; however, the assessment frameworks and grading criteria vary.<br /><br />Our <a href="https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai" className="text-white text-decoration-underline">IGCSE tutors in Dubai</a> work across all major IGCSE subjects, so students taking Computer Science alongside Maths, Physics, or other STEM subjects can coordinate scheduling under one weekly plan.</p><br />

          <h2 className="title"><strong>A-Level And AS Computer Science Tutors For Theory And Practical Skills</strong></h2>
          <p className="subtitle">A-Level Computer Science is substantially harder than IGCSE, with the jump catching many students off guard at the start of AS. <strong>Cambridge International A-Level Computer Science (9618)</strong> is the dominant board in UAE schools. The course covers advanced algorithms, object-oriented programming, recursion, data structures (stacks, queues, linked lists, binary trees), databases with SQL, and a substantial individual programming project.<br /><br />The exam structure includes two written papers covering theory and algorithmic problem-solving, plus a practical programming project that students develop across the year. For Cambridge, that practical project is a significant portion of the final grade and benefits from regular tutor review across the design, coding, and documentation phases.<br /><br />For students at British curriculum schools sitting UK A-Level Computer Science rather than the international Cambridge variant, we also tutor AQA A-Level Computer Science (7517) and OCR A-Level Computer Science (H446). Both UK boards include a practical programming project component similar to Cambridge, but with their own coursework requirements.<br /><br />Most students preparing for AS papers in May need targeted work on tracing algorithms, designing functions, and translating between pseudocode and their chosen programming language. A2 students typically need help with recursion, OOP design patterns, and the synoptic elements of advanced data structures. Our <a href="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai" className="text-white text-decoration-underline">A-Level tutors in Dubai</a> coordinate Computer Science alongside other A-Level subjects under a single weekly plan.</p><br />

          <h2 className="title"><strong>AP Computer Science Tutors For AP CS A And AP CS Principles</strong></h2>
          <p className="subtitle">AP Computer Science splits into two completely different courses, and which one your school offers (or both) affects what tutoring looks like.</p><br />

          <h3 className="title"><strong>AP Computer Science A</strong></h3>
          <p className="subtitle">It is the technical, programming-heavy course. It's built around Java, with a strong focus on object-oriented programming, control structures, classes, arrays, ArrayLists, 2D arrays, and recursion tracing (though writing recursion is no longer assessed in the current curriculum). The exam has 42 multiple-choice questions in 90 minutes and 4 free-response questions in 90 minutes. The 2026 exam is on <strong>Friday, May 15, 2026</strong>, delivered fully digitally through the College Board Bluebook app, with FRQs typed into a built-in code editor. The exam is scored on a 1 to 5 scale, and roughly 47% of test-takers score a 4 or 5. This is the course for students planning to study Computer Science or a STEM major at US universities.</p><br />

          <h3 className="title"><strong>AP Computer Science Principles</strong></h3>
          <p className="subtitle">It is the broader, conceptual course. It covers computational thinking, programming concepts, the internet, data and cybersecurity, and the social impact of computing. It is language-agnostic, meaning students can use any programming language for the coursework (Python is the most common choice). The assessment has two components: a 70-question multiple-choice end-of-course exam (120 minutes, 70% of the score) and the Create Performance Task (30% of the score), where students develop their own program over 9 hours of in-class time and submit code plus a Personalized Project Reference. Two written response questions on the exam are based on the student's own Create task. The 2026 exam is on <strong>Thursday, May 14, 2026</strong>, also fully digital in Bluebook.<br /><br />For students aiming at top US universities, AP CS scores carry weight alongside SAT and IB grades. Our <a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai" className="text-white text-decoration-underline">AP tutors in Dubai</a> work across the full AP range, with AP CS handled by tutors who have specifically prepared students through the College Board Java and Create Task frameworks.</p><br />

          <h2 className="title"><strong>Programming Languages And Topics We Cover (Python, Java, Pseudocode, C++)</strong></h2>
          <p className="subtitle">Tutoring at Ignite covers whatever programming language the student's curriculum requires. The dominant languages across Dubai schools are Python and Java, with pseudocode required for Cambridge exams and other languages occasionally used.<br /><br /><strong>Python</strong> is the most commonly taught language in UAE schools across IGCSE, A-Level (where the school chooses Python), IB Computer Science, and AP Computer Science Principles. We teach Python from the foundations through advanced topics, including OOP, file handling, modules, and library usage.<br /><br /><strong>Java</strong> is required for AP Computer Science A and is used in some IB DP schools and Cambridge A-Level schools that choose Java over Python. AP CS A in particular has very specific Java requirements (control structures, classes, arrays, ArrayLists, 2D arrays) that need direct practice with the College Board curriculum framework.<br /><br /><strong>Pseudocode</strong> is utilized in the Cambridge IGCSE (0478, 0984) and A-Level (9618) examinations. Cambridge has its own pseudocode conventions that students must follow for written exam answers, even when they code in Python or Java for the practical components. Translating between pseudocode and a real language is a frequently tested skill.<br /><br /><strong>C++</strong> comes up occasionally in specific schools and for students preparing for competitive coding contexts. We support it when needed.<br /><br />Beyond syntax, the lesson plan focuses on the underlying skills that transfer across languages: computational thinking, algorithmic logic, debugging methodology, and object-oriented design. Specific topics covered include arrays and lists, sorting and searching algorithms, recursion, stacks, queues, linked lists, binary trees, databases, SQL, networking fundamentals, and Boolean logic. Students who prefer one-to-one delivery across multiple subjects often work with our <a href="https://ignitetraininginstitute.com/private-tutors-in-dubai" className="text-white text-decoration-underline">private tutors in Dubai</a>.</p><br />

          <h2 className="title"><strong>Ignite: Best Computer Science Tutor In Dubai For Every Curriculum</strong></h2>
          <p className="subtitle">Ignite has been running tutoring in Dubai for over ten years, and Computer Science is one of the subjects where curriculum-specific expertise matters most. Our two centres at DIFC and JLT serve students from international schools across Dubai, and our online programme extends that reach to Sharjah, Abu Dhabi, and the wider UAE.<br /><br />What makes Computer Science tutoring work, in our experience, is matching tutor to curriculum, language, and exam pattern. A tutor strong on IB CS HL is not automatically the right fit for AP CS A. A Python specialist isn't always the right call for a student locked into Java for AP. Every CS tutor at Ignite has direct experience teaching at least one of the major CS curricula, and most have taught more than one. New students start with a diagnostic session, get matched to a tutor whose curriculum and language specialism fit, and follow a session-by-session plan built around the actual papers, projects, or IA work they need to deliver.<br /><br />If you're considering Computer Science tutoring for the first time, a <a href="https://ignitetraininginstitute.com/join-free-demo-class" className="text-white text-decoration-underline">free demo class with Ignite</a> is the simplest way to see how the diagnostic session and lesson structure works in practice. There's no expectation to commit beyond the demo.</p><br />

          <h2 className="title"><strong>Know more about our programmes:</strong></h2>
          <p className="subtitle">• <a href="https://ignitetraininginstitute.com/ib-curriculum-tutors-in-dubai" className="text-white text-decoration-underline">IB Curriculum Tutors In Dubai</a><br />
          • <a href="https://ignitetraininginstitute.com/british-curriculum-tutors-in-dubai" className="text-white text-decoration-underline">British Curriculum Tutors In Dubai</a><br />
          • <a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai" className="text-white text-decoration-underline">AP Tutors In Dubai</a><br />
          • <a href="https://ignitetraininginstitute.com/join-free-demo-class" className="text-white text-decoration-underline">Free Demo Class At Ignite Training Institute</a><br />
          • <a href="https://ignitetraininginstitute.com/contact-us" className="text-white text-decoration-underline">Contact Us</a></p>
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
