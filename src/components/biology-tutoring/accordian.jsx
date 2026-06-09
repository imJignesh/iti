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
          <h2 className="title">Expert Biology Tutor In Dubai, UAE For Academic Confidence</h2>
          <p className="subtitle">Our expert Biology tutors help students in Dubai grasp difficult concepts with clarity and confidence. Whether it's cell theory or genetics, we make learning interactive and enjoyable. With one-on-one guidance and personalized strategies, students overcome academic hurdles and grow in subject mastery. Let your child discover their potential in Biology with tailored support that truly makes a difference.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title"><strong>Biology Tutors In Dubai For IB, IGCSE, A-Level, And AP Students</strong></h2>
          <p className="subtitle">Ignite Training Institute provides 1-on-1 Biology tutoring in Dubai across IB (SL and HL), IGCSE, GCSE, A-Level, and AP Biology. Lessons run from our DIFC and JLT centres and online, with tutors matched to each exam board and a focus on genetics, physiology, ecology, data questions, and IA support.<br /><br />Most students come to us when the volume of biological content and terminology becomes hard to retain, when data and graph questions lose marks despite solid topic knowledge, or when an IB Internal Assessment feels stuck. Some students join us months ahead of mocks; others arrive with weeks to go and need focused work on a specific theme or paper. Every new student starts with a diagnostic where the tutor reviews recent work to see exactly where the marks are being lost.<br /><br />We work with students from international schools across Dubai, including those at GEMS Wellington, Dubai College, Jumeirah College, JESS Ranches, Dubai American Academy, Repton School Dubai, and similar IB / British / American curriculum schools across DIFC, JLT, Jumeirah, and the wider UAE. Biology is also the foundation subject for students aiming at medicine, dentistry, and life sciences degrees, so we keep an eye on the depth those university pathways expect.</p><br />

          <h3 className="title"><strong>Biology Courses At A Glance: IB, IGCSE, A-Level, And AP Compared</strong></h3>
          <div className="table-responsive">
            <table className="table table-bordered text-white">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Level</th>
                  <th>Key Assessment Components</th>
                  <th>Distinctive Focus</th>
                  <th>Typical Year/Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IB Biology SL</td>
                  <td>DP Standard Level</td>
                  <td>Paper 1 (MC + data) + Paper 2 (short + extended) + Internal Assessment (20%)</td>
                  <td>Four themes, data interpretation</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IB Biology HL</td>
                  <td>DP Higher Level</td>
                  <td>Same papers as SL with additional HL content + Internal Assessment (20%)</td>
                  <td>Greater depth, more AHL content</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IGCSE Biology (0610 / 0970)</td>
                  <td>Year 10 to 11</td>
                  <td>Multiple-choice, theory, and practical/alternative-to-practical papers</td>
                  <td>Core vs Extended tier</td>
                  <td>Year 10 to 11 (Grade 9 to 10)</td>
                </tr>
                <tr>
                  <td>A-Level Biology (9700)</td>
                  <td>AS + A2</td>
                  <td>Theory papers + practical assessment</td>
                  <td>Required practicals, application</td>
                  <td>Year 12 to 13 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>AP Biology</td>
                  <td>College Board</td>
                  <td>60 MC + 6 FRQs (50/50 split); scored on a 1 to 5 scale</td>
                  <td>8 units, experimental design</td>
                  <td>Grade 11 to 12</td>
                </tr>
              </tbody>
            </table>
          </div><br />

          <h3 className="title"><strong>Why Students Often Struggle With Biology?</strong></h3>
          <p className="subtitle">Four issues come up repeatedly across IB, IGCSE, A-Level, and AP students. <strong>Volume of content and terminology</strong> is the most common, since Biology has more named structures, processes, and definitions than most subjects, and students who try to memorise without understanding hit a wall. <strong>Command-term precision</strong> is the second, where students lose marks because they describe when the question said explain, or state when it asked them to evaluate. <strong>Data and graph interpretation</strong> is the third, and it now carries heavy weight across all four curricula, with questions built on unfamiliar experiments and datasets. <strong>Application to unfamiliar contexts</strong> is the fourth, where students who know the textbook example struggle when the same concept appears in a new scenario. Tutoring targets each of these directly rather than treating Biology as pure memorisation.</p><br />

          <h2 className="title"><strong>Biology Tuition And Coaching In Dubai: Formats, Sessions, And What's Included</strong></h2>
          <p className="subtitle">Biology tuition in Dubai works best when sessions mix concept teaching with active recall and exam-style questions, rather than passive review. We run two formats: in-person at our DIFC or JLT centres, and one-to-one online for students based further out in Dubai or across the wider UAE. Both formats use the same tutor pool and the same lesson structure, so switching between them during the term doesn't break continuity.<br /><br />Sessions are typically 60 minutes weekly during the regular term, extending to 90-minute blocks twice a week during exam preparation. Each session covers a targeted teaching block on one theme or topic, active recall practice on terminology and processes, and exam-style questions marked against the actual board mark scheme. For IB students, sessions also cover Internal Assessment design and feedback against IB criteria. Small-group sessions of two to three students are available for IGCSE and GCSE Biology, where families want the structure of coaching at a lower per-session cost.<br /><br />For families weighing up exam boards before committing to tuition, our blog on <a href="https://ignitetraininginstitute.com/blog/what-is-the-difference-between-edexcel-and-cambridge" className="text-white text-decoration-underline">the differences between Edexcel and Cambridge</a> is a useful background.</p><br />

          <h2 className="title"><strong>IB Biology Tutors For DP (SL And HL) And MYP</strong></h2>
          <p className="subtitle">IB Biology changed substantially with the syllabus first examined in May 2025, and a lot of older material online still describes the previous structure. It is important to ensure the current course is correct; therefore, here is an explanation of how it functions at present.<br /><br />The course is built around <strong>four themes</strong>: Unity and Diversity, Form and Function, Interaction and Interdependence, and Continuity and Change. Each theme is explored across four levels of biological organisation, from molecules to ecosystems. The old numbered topics and the optional topics (such as neurobiology, ecology, and conservation) have gone, with the most relevant content folded into the core.<br /><br />Assessment is now <strong>two external papers plus the Internal Assessment</strong>. Paper 1 combines multiple-choice questions with data-based questions across all themes. Paper 2 has data-based, short-answer, and extended-response questions. Paper 3 has been removed entirely. The external papers account for roughly 80% of the grade, and they reward data interpretation more heavily than recall.<br /><br /><strong>IB Biology SL and HL</strong> share the four themes, but HL students study additional content (AHL) at greater depth, with SL recommended at around 150 teaching hours and HL at 240. The <strong>Internal Assessment</strong> is an individual investigation worth 20%, completed in about 10 hours of class time. We support students from research-question design through to the final analysis and evaluation, since the most common mark loss is a question that's too broad to investigate properly. Our <a href="https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai" className="text-white text-decoration-underline">IBDP tutors in Dubai</a> cover the full DP framework, and our <a href="https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai" className="text-white text-decoration-underline">IB MYP tutors</a> handle the Sciences foundation that leads into DP Biology.</p><br />

          <h2 className="title"><strong>IGCSE And GCSE Biology Tutors In Dubai</strong></h2>
          <p className="subtitle">IGCSE Biology is taken by most UAE international school students at the British curriculum level, and it's a strong foundation for A-Level or IB Biology later. <strong>Cambridge IGCSE Biology (0610)</strong> is the standard international qualification, graded A* to G, with <strong>0970</strong> being the 9-1 graded variant of the same course. Students taking combined science instead of separate Biology often sit Cambridge IGCSE Co-ordinated Sciences (0654), which overlaps heavily with 0610 for the core topics.<br /><br />Cambridge IGCSE Biology offers two tiers: <strong>Core</strong> and <strong>Extended</strong>. Every student studies the Core content, while Extended students also study the Supplement material, which builds the deeper conceptual base that A-Level and IB Biology assume. Students aiming at medicine or life sciences should take the Extended tier wherever possible. The papers cover cells, biological molecules, enzymes, plant and human physiology, reproduction, inheritance, variation and selection, and ecology.<br /><br />For students at British curriculum schools sitting UK GCSE Biology rather than the international IGCSE, we tutor AQA, OCR, and Pearson Edexcel GCSE Biology. The topic coverage is similar, but assessment structures differ. Our <a href="https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai" className="text-white text-decoration-underline">IGCSE tutors in Dubai</a> work across all major IGCSE subjects, so students taking Biology alongside Chemistry, Physics, or Maths can coordinate scheduling under one weekly plan.</p><br />

          <h2 className="title"><strong>A-Level And AS Biology Tutors For Theory And Practical Skills</strong></h2>
          <p className="subtitle">A-Level Biology is a demanding subject with a heavy content load and a strong emphasis on application and practical skills. <strong>Cambridge International A-Level Biology (9700)</strong> is the most common specification in UAE schools, covering cell structure, biological molecules, enzymes, cell membranes, mitosis, genetic control, transport in plants and mammals, gas exchange, infectious disease, immunity, energy and respiration, photosynthesis, homeostasis, inheritance, and ecology across AS and A2.<br /><br />For students at British curriculum schools sitting UK A-Level Biology, we tutor AQA, Pearson Edexcel, and OCR specifications. UK A-Levels include a separately assessed set of required practicals and a practical endorsement alongside the written papers, so practical understanding feeds directly into exam questions.<br /><br />The skill that separates top A-Level Biology candidates is handling <strong>application and data-analysis questions</strong>, where students apply familiar concepts to unfamiliar experiments and datasets. Strong recall alone caps most students below the top grades. Most students preparing for AS papers in May need targeted work on extended-response structure and data questions, while A2 students need help with synoptic links across topics. Our <a href="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai" className="text-white text-decoration-underline">A-Level tutors in Dubai</a> coordinate Biology alongside Chemistry, Maths, and other subjects under a single weekly plan, which suits the many students taking Biology as part of a medicine or life-sciences application.</p><br />

          <h2 className="title"><strong>AP Biology Tutors For AP Biology</strong></h2>
          <p className="subtitle">AP Biology is the College Board's life-sciences course, taken in Grade 11 or 12 by students preparing for US university applications, and it's widely accepted as equivalent to A-Level Biology by UK universities too. The course is organised into <strong>eight units</strong>, from chemistry of life and cell structure through genetics, gene expression, natural selection, and ecology, with natural selection and cellular energetics carrying the heaviest exam weighting.<br /><br />The exam is a hybrid digital format taken in the May AP testing window. It has two sections split evenly: <strong>60 multiple-choice questions</strong> and a <strong>free-response section of 6 questions</strong> (2 long and 4 short), each section worth 50% of the score. Calculators are permitted, and a formula and equations sheet is provided. The exam is scored on a 1 to 5 scale, with most US universities looking for a 4 or 5 for credit.<br /><br />AP Biology rewards scientific reasoning and data analysis over memorization. The free-response section is data-heavy, often built around a real experiment where students plot data, calculate statistics, design controls, and justify whether a hypothesis is supported. Our <a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai" className="text-white text-decoration-underline">AP tutors in Dubai</a> work across the full AP range, with AP Biology handled by tutors familiar with the eight-unit framework and the experimental-design expectations of the free-response section.</p><br />

          <h2 className="title"><strong>Core Biology Topics And Skills We Cover</strong></h2>
          <p className="subtitle">Most students need help with specific topics rather than the whole subject, so the lesson plan is built around the areas where marks are actually being lost. The topics we support most often are:<br /><br /><strong>Cell biology and biochemistry</strong>, including cell structure, membranes, enzymes, respiration, and photosynthesis. <strong>Genetics and inheritance</strong>, which combines abstract concepts with problem-solving, is one of the most common request areas. <strong>Human physiology</strong>, including the circulatory, respiratory, digestive, and nervous systems, where the heavy interlinked detail trips students up. <strong>Ecology and the environment</strong>, including ecosystems, energy flow, and the data-handling that ecology questions demand. <strong>Evolution and natural selection</strong>, which carries significant weight in AP and IB.<br /><br />Alongside content, we build the exam skills that Biology mark schemes reward: precise use of <strong>command terms</strong> (state, describe, explain, outline, evaluate), structured extended-response answers, and <strong>data and graph interpretation</strong> for the unfamiliar-context questions that now appear across every board. Students who prefer one-to-one delivery across multiple subjects often work with our <a href="https://ignitetraininginstitute.com/private-tutors-in-dubai" className="text-white text-decoration-underline">private tutors in Dubai</a>.</p><br />

          <h2 className="title"><strong>Ignite: Best Biology Tutor In Dubai For Every Curriculum</strong></h2>
          <p className="subtitle">Ignite has been running tutoring in Dubai for over ten years, and Biology is one of our most active subjects, with a bench of specialist tutors who have guided students through IB, IGCSE, A-Level, and AP. Our two centres at DIFC and JLT serve students from international schools across Dubai, and our online programme extends that reach to Sharjah, Abu Dhabi, and the wider UAE.<br /><br />What makes Biology tutoring work, in our experience, is matching the tutor to the exam board and the specific gap, then building genuine understanding rather than memorisation. A tutor preparing a student for the new IB Biology themes works very differently from one coaching an A-Level student through required practicals or an AP student through experimental-design free-response questions.<br /><br />Every Biology tutor at Ignite has direct experience with at least one of the major curriculums, and most have taught several. New students start with a diagnostic, get matched to a tutor whose curriculum specialism fits, and follow a session-by-session plan built around the actual papers, practicals, and IA work they need to deliver.<br /><br />If you're considering Biology tutoring for the first time, a <a href="https://ignitetraininginstitute.com/join-free-demo-class" className="text-white text-decoration-underline">free demo class with Ignite</a> is the simplest way to see how the diagnostic session and lesson structure works in practice. There's no expectation to commit beyond the demo.</p><br />

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
          margin: 0 auto !important;
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
