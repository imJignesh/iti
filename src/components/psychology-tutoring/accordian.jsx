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
          <h2 className="title">Expert Psychology Tutor In Dubai, UAE For Academic Confidence</h2>
          <p className="subtitle">Master core concepts and boost academic performance with expert Psychology guidance. At Ignite, our tutors simplify complex topics in cognition, behavior, and development. With personalized strategies and real-world examples, students build clarity and confidence. Whether you're in IB, IGCSE, or A Levels, we help you excel in exams and class participation. Our supportive environment fosters curiosity, motivation, and consistent improvement. Take the first step toward academic excellence today.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title"><strong>Psychology Tutors In Dubai For IB, IGCSE, A-Level, And AP Students</strong></h2>
          <p className="subtitle">Ignite Training Institute offers personalized one-on-one psychology tutoring in Dubai, covering IB (Standard Level and Higher Level, both current and new syllabus), Cambridge IGCSE 0266, UK GCSE, A-Level and AS, as well as the updated AP Psychology course. Sessions run from our DIFC and JLT centres and online, covering the biological, cognitive, and sociocultural approaches, research methods, the named studies, and the essay technique that mark schemes reward.</p><br />
          <p className="subtitle">Most students come to us when they can remember the studies but lose marks on evaluation, when essay structure starts to slip under timed conditions, or when an IB Internal Assessment is stuck at the research-question stage. Some join months ahead of mocks; others arrive with weeks to go and need focused work on one approach or one paper. Every new student starts with a diagnostic so the tutor can see exactly where marks are being lost rather than re-teaching content the student already knows.</p><br />
          <p className="subtitle">We work with students from international schools across Dubai, including those at GEMS Wellington, Dubai College, Jumeirah College, JESS Ranches, Dubai American Academy, and Repton School Dubai, and with families across DIFC, JLT, Jumeirah, and the wider UAE searching for a psychology tutor near me. Psychology is also a strong foundation for university degrees in medicine, education, social sciences, and business, so we keep an eye on the grades those routes typically expect.</p><br />

          <h3 className="title"><strong>Psychology Courses At A Glance: IB, IGCSE, A-Level, And AP Compared</strong></h3>
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
                  <td>IB Psychology (current)</td>
                  <td>DP SL and HL</td>
                  <td>IB, last exam May 2026</td>
                  <td>Paper 1 (SAQs + ERQ on three approaches) + Paper 2 (options) + IA (20%); HL adds Paper 3</td>
                  <td>DP2 (Grade 12)</td>
                </tr>
                <tr>
                  <td>IB Psychology (new)</td>
                  <td>DP SL and HL</td>
                  <td>IB, first exam May 2027</td>
                  <td>Redesigned structure, changes to research methods and the IA</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IGCSE Psychology</td>
                  <td>Year 10 to 11</td>
                  <td>Cambridge 0266 (from 2027); UK GCSE (AQA, OCR, Edexcel)</td>
                  <td>Theory papers covering core approaches and research</td>
                  <td>Year 10 to 11 (Grade 9 to 10)</td>
                </tr>
                <tr>
                  <td>A-Level Psychology</td>
                  <td>AS + A2</td>
                  <td>Cambridge 9990, AQA, Edexcel, OCR</td>
                  <td>Multi-paper assessment across approaches, research methods, and applied options</td>
                  <td>Year 12 to 13 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>AP Psychology (redesigned)</td>
                  <td>College Board</td>
                  <td>AP, digital from May 2025</td>
                  <td>5 units, 75 MC, AAQ and EBQ free-response, scored 1 to 5</td>
                  <td>Grade 11 to 12</td>
                </tr>
              </tbody>
            </table>
          </div><br />

          <h3 className="title"><strong>Why Students Often Struggle With Psychology?</strong></h3>
          <p className="subtitle">Psychology looks readable, which is exactly why students underestimate it. <strong>Balancing studies and evaluation</strong> is the first barrier, since strong answers need a named study with its method and findings AND a critical evaluation of it, and students who memorise one without the other lose marks either way. <strong>Command-term precision</strong> is the second, because mark schemes treat "describe," "outline," "explain," "discuss," and "evaluate" as different demands, and answering the wrong command costs marks even when the content is right. <strong>Essay structure under timed conditions</strong> is the third, since the longer questions (IB ERQs, A-Level essays, AP FRQs) reward planned answers and punish ones that drift. <strong>The volume of named studies</strong> is the fourth, where students try to remember every study and end up confusing methods between them. Tutoring focuses on these exam skills, because they are where grades actually move.</p><br />

          <h2 className="title"><strong>Psychology Tuition And Coaching In Dubai: Formats, Sessions, And What's Included</strong></h2>
          <p className="subtitle">Psychology tuition in Dubai works best when sessions combine concept teaching with essay practice and past papers, rather than passive note review. We run two formats: in-person at our DIFC or JLT centres, and one-to-one online for students based further out or with tight schedules. Both use the same tutor pool and the same lesson structure, with screen-sharing during online sessions for working through essay plans, study evaluations, and source-based questions step by step.</p><br />
          <p className="subtitle">Private one-to-one sessions are the most popular choice, because psychology questions are personal: the issue is usually whether this particular student is losing marks on application, on evaluation, or on essay structure. Sessions are typically 60 minutes weekly during regular term, extending to 90-minute blocks during exam preparation, because full essays need an uninterrupted run to plan and write. Each session combines a targeted teaching block, practice on the relevant study or research-methods topic, and past paper questions marked against the actual board mark scheme so students see exactly where evaluation marks are won and lost. Small-group psychology classes of two to three students are available for IGCSE and GCSE where families want structured coaching at a lower per-session cost.</p><br />
          <p className="subtitle">For students taking Psychology alongside other social sciences, our <a href="https://ignitetraininginstitute.com/economics-tutor-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>Economics tutors in Dubai</a> and <a href="https://ignitetraininginstitute.com/business-studies-tutor-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>Business Studies tutors in Dubai</a> coordinate scheduling so families can run one weekly plan across multiple subjects.</p><br />

          <h2 className="title"><strong>IB Psychology Tutors: The May 2026 / May 2027 Syllabus Transition</strong></h2>
          <p className="subtitle">This is the point most families want clarified before booking, because the IB Psychology course is in the middle of a major transition. Here is how it actually works.</p><br />
          <p className="subtitle"><strong>Students sitting their final exams in May 2026 are on the current syllabus</strong>, which has been in place for several years. The current course is built around the three core approaches (biological, cognitive, and sociocultural), with research methods running through each. Assessment at SL is Paper 1 (short-answer questions on the three approaches plus an extended-response question), Paper 2 (essay on an optional topic), and the Internal Assessment (an experimental study worth 20%). HL adds Paper 3, a research-methods paper based on a source. May 2026 is the LAST examination session under this syllabus.</p><br />
          <p className="subtitle"><strong>Students who started the Diploma in August 2025 are on the redesigned course</strong>, with first assessment in <strong>May 2027</strong>. The new syllabus has substantial structural changes, including how research methods are tested and how the Internal Assessment is approached, and a great deal of legacy material online still describes the old course rather than the new one. We tutor both cohorts, but the approach is very different depending on the exam session, which is why matching the tutor to the syllabus matters more than usual right now.</p><br />
          <p className="subtitle">Across both syllabi, the skill that separates top candidates is <strong>evaluation</strong>: applying a recognised framework (such as evaluating studies on generalisability, reliability, validity, and ethics) rather than describing studies in isolation. We build that evaluation discipline alongside study learning from the first session. Our <a href="https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>IBDP tutors in Dubai</a> cover the full Diploma, and our <a href="https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>IB MYP tutors</a> build the foundation that leads into DP Psychology.</p><br />

          <h2 className="title"><strong>IGCSE And GCSE Psychology Tutors In Dubai</strong></h2>
          <p className="subtitle">Psychology is becoming more available at IGCSE level just as students reach the age where it most engages them. <strong>Cambridge IGCSE Psychology (0266)</strong> is the new Cambridge specification, with <strong>first examinations from 2027</strong>, which means students are studying it now ahead of those sittings. Because the syllabus is new, lesson resources online are still patchy, and tutoring helps students work from the actual syllabus rather than from older materials written for other boards.</p><br />
          <p className="subtitle">For students at British curriculum schools sitting <strong>UK GCSE Psychology</strong>, we tutor <strong>AQA, OCR, and Pearson Edexcel</strong> specifications. These cover similar foundational ground: research methods, the main approaches in psychology, memory, social influence, and development. The skills we build at this level (correct use of command words, application of theory to examples, and clear short-answer structure) carry directly into A-Level and IB. Our <a href="https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>IGCSE tutors in Dubai</a> work across all major subjects, so students can coordinate Psychology alongside Biology or Sociology under one weekly plan.</p><br />

          <h2 className="title"><strong>A-Level And AS Psychology Tutors For Cambridge And UK Boards</strong></h2>
          <p className="subtitle">A-Level Psychology is one of the most popular A-Levels in the UAE, partly because it pairs well with both science and social-science degree routes. <strong>Cambridge International AS and A-Level Psychology (9990)</strong> is the main international specification, alongside UK boards <strong>AQA</strong>, <strong>Edexcel</strong>, and <strong>OCR</strong>. AQA is the most widely taught UK board in British curriculum schools, and its specification is built around five named topics at AS (social influence, memory, attachment, biopsychology, and psychopathology), with research methods and issues and debates running through all of them. A2 then layers on options such as cognition and development, schizophrenia, forensic psychology, addiction, and relationships.</p><br />
          <p className="subtitle">Cambridge 9990 covers similar ground through its own approaches structure, with applied options at A2 in areas such as clinical, consumer, health, and organisational psychology. The skills that separate top candidates at A-Level are accurate naming of studies and findings, disciplined application of evaluation criteria (typically a framework like GRAVE, covering generalisability, reliability, application, validity, and ethics), and structured essay writing that builds an argument toward a justified conclusion. AS students preparing for May papers usually need work on study recall and the short-answer questions, while A2 students need help with longer essays and the synoptic links between topics. Our <a href="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>A-Level tutors in Dubai</a> coordinate Psychology alongside Biology and other subjects under a single weekly plan.</p><br />

          <h2 className="title"><strong>AP Psychology Tutors: The 2025 Digital Redesign</strong></h2>
          <p className="subtitle">AP Psychology was redesigned for <strong>first administration in May 2025</strong>, and the change is substantial enough that most older online guidance is out of date. Here is what actually changed.</p><br />
          <p className="subtitle">The course was restructured from <strong>nine units to five</strong>, following the American Psychological Association's recommended "five pillars" of introductory psychology: <strong>biological bases of behavior; cognition; development and learning; social psychology and personality; and mental and physical health</strong>. The narrower scope is designed for deeper treatment rather than thinner coverage.</p><br />
          <p className="subtitle">The exam itself moved to a <strong>fully digital format delivered via the College Board's Bluebook app</strong>, with paper testing available only for approved accommodations. The multiple-choice section was reduced from 100 questions to <strong>75 questions</strong>, each with <strong>four answer choices instead of five</strong>, and students now have <strong>90 minutes</strong> for that section. The free-response section has two new question types: the <strong>Article Analysis Question (AAQ)</strong>, which gives students a description of a study to analyse, and the <strong>Evidence-Based Question (EBQ)</strong>, which presents source material to apply psychological concepts to. AP Psychology is now listed by the College Board as both a science and a social science, which broadens the courses and university credit it can count toward. Our <a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>AP tutors in Dubai</a> work across the AP range and prepare students for both the redesigned content and the digital exam interface.</p><br />

          <h2 className="title"><strong>Core Psychology Topics And Exam Skills We Cover</strong></h2>
          <p className="subtitle">Most students need help with specific topics rather than the whole subject, so the lesson plan is built around where marks are actually being lost. The areas we support most often are:</p><br />
          <p className="subtitle"><strong>The three approaches</strong> that run through almost every course: biological (brain structure, neurotransmitters, hormones, genetics), cognitive (memory, perception, thinking, biases), and sociocultural (social identity, conformity, cultural norms). <strong>Research methods</strong>, including experimental design, types of data, sampling, reliability, validity, and ethical considerations, which carry their own questions and feed every essay. <strong>Named studies and their evaluation</strong>, where students learn a manageable set of studies thoroughly rather than memorising too many shallowly. <strong>Applied options and topics</strong>, including memory, attachment, psychopathology, social influence, and developmental psychology depending on the specification.</p><br />
          <p className="subtitle">Alongside content, we build the cross-cutting skills that psychology mark schemes reward: correct response to command words, accurate use of named studies as evidence (rather than as decoration), structured essay writing that builds an argument, and disciplined evaluation using a consistent framework rather than scattered comments. These technique skills are what move a student from a middle grade to a top one, and they transfer across IGCSE, GCSE, A-Level, IB, and AP. Students who prefer one-to-one delivery across several subjects often work with our <a href="https://ignitetraininginstitute.com/private-tutors-in-dubai" style={{ color: "#fff", textDecoration: "underline" }}>private tutors in Dubai</a>.</p><br />

          <h2 className="title"><strong>Ignite: Best Psychology Tutor In Dubai For Every Curriculum</strong></h2>
          <p className="subtitle">Ignite has been running tutoring in Dubai for over ten years, with students preparing across IB, British, and American curriculums. Our two centres at DIFC and JLT serve students from international schools across Dubai, and our online programme extends that reach to Sharjah, Abu Dhabi, and the wider UAE.</p><br />
          <p className="subtitle">What makes psychology tutoring work, in our experience, is matching the tutor to the exact specification and the specific gap. A tutor preparing an IB DP2 student for the May 2026 papers under the current syllabus works very differently from one guiding a DP1 student through the redesigned course toward May 2027, or coaching an AP student through the redesigned digital exam, or working through AQA A-Level psychopathology essays. The accuracy work has to come first: if a tutor isn't current on the syllabus a student is actually sitting, the rest of the help misses. Every psychology tutor at Ignite is matched to the syllabus a student is on, and new students start with a diagnostic, get matched to the right tutor, and follow a session-by-session plan built around the actual papers and assessments they need to deliver.</p><br />
          <p className="subtitle">If you're considering psychology tutoring for the first time, a <a href="https://ignitetraininginstitute.com/join-free-demo-class" style={{ color: "#fff", textDecoration: "underline" }}>free demo class with Ignite</a> is the simplest way to see how the diagnostic session and lesson structure work in practice. There's no expectation to commit beyond the demo.</p>
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
