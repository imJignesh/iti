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
          <h2 className="title"><strong>English Tutors In Dubai For IB, IGCSE, A-Level, And AP Students</strong></h2>
          <p className="subtitle">Ignite Training Institute provides 1-on-1 English tutoring in Dubai across IB (English A Language and Literature, English A Literature, English B, plus MYP English), Cambridge and Edexcel IGCSE First Language, Literature, and ESL, A-Level English Language and Literature, AP English Language and Composition, and AP English Literature and Composition. Sessions run from our DIFC and JLT centres and online, covering essay technique, unseen analysis, set-text study, and exam strategy.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <p className="subtitle">Most students come to us when essays consistently land at a middle grade despite strong content, when unseen text or unseen poetry questions feel unmanageable, or when an IB Individual Oral or Higher Level Essay is stuck at the planning stage. Some students join us months ahead of mocks; others arrive with weeks to go and need focused work on a single text or paper. Every new student starts with a diagnostic so the tutor can see exactly where marks are being lost rather than re-teaching content the student already knows.</p><br />
          <p className="subtitle">We work with students from international schools across Dubai, including those at GEMS Wellington, Dubai College, Jumeirah College, JESS Ranches, Dubai American Academy, and Repton School Dubai, and with families across DIFC, JLT, Jumeirah, and the wider UAE. English is also the gateway to almost every university route from the UAE, including UCAS, US college applications, and direct-entry programmes in Europe and Canada, so we keep the university target grade in view from the first session.</p><br />

          <h3 className="title"><strong>English Courses At A Glance: IB, IGCSE, A-Level, And AP Compared</strong></h3>
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
                  <td>IB English A (Lang & Lit, Literature)</td>
                  <td>DP SL and HL</td>
                  <td>IB</td>
                  <td>Paper 1 (guided analysis) + Paper 2 (comparative essay) + Individual Oral + HL Essay</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IB English B</td>
                  <td>DP SL and HL</td>
                  <td>IB</td>
                  <td>Paper 1 (productive skills) + Paper 2 (listening + reading) + Individual Oral</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IGCSE English (1st Lang, Lit, ESL)</td>
                  <td>Year 10 to 11</td>
                  <td>Cambridge 0500/0990, 0475/0992, 0510/0993</td>
                  <td>Reading and writing papers, plus speaking and listening for ESL</td>
                  <td>Year 10 to 11 (Grade 9 to 10)</td>
                </tr>
                <tr>
                  <td>A-Level English (Language, Literature)</td>
                  <td>AS + A2</td>
                  <td>Cambridge 9093 (Lang), 9695 (Lit); AQA, OCR, Edexcel</td>
                  <td>Multi-paper assessment across analysis, set texts, and unseen passages</td>
                  <td>Year 12 to 13 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>AP English (Language, Literature)</td>
                  <td>College Board</td>
                  <td>AP</td>
                  <td>Two separate exams: 45 MC + 3 essays each; scored 1 to 5</td>
                  <td>Grade 11 (Lang) and Grade 12 (Lit)</td>
                </tr>
              </tbody>
            </table>
          </div><br />

          <h3 className="title"><strong>Why Students Often Struggle With English?</strong></h3>
          <p className="subtitle">The English language may appear deceptively simple, which is precisely the reason many capable students reach a plateau at a B grade. <strong>Closing the gap between understanding and grade</strong> is the first barrier, since students who follow a text in class still lose marks when their analysis stays on plot rather than method. <strong>Structured argument under timed conditions</strong> is the second, where the planning and pacing of an exam essay needs practice as a skill on its own. <strong>Embedded textual evidence</strong> is the third, because quotations dropped in without integration drag a response back to a descriptive grade. <strong>Unseen text and unseen poetry</strong> is the fourth, where the absence of any pre-prepared notes punishes students who relied on revision guides rather than close-reading practice. Tutoring builds these technique skills directly, since they are what move a B-grade response to an A or A*.</p><br />

          <h2 className="title"><strong>English Tuition And Coaching In Dubai: Formats, Sessions, And What's Included</strong></h2>
          <p className="subtitle">English tuition in Dubai works best when sessions combine close-text work with structured essay practice and past papers, rather than passive set-text discussion. We run two formats: in-person at our DIFC or JLT centres, and one-to-one online for students based further out or with tight schedules. Both use the same tutor pool and the same lesson structure, with screen-sharing during online sessions for annotating texts, planning essays, and working through past paper questions step by step.</p><br />
          <p className="subtitle">Private one-to-one sessions are the most popular choice, because English gaps are personal: the question is always whether this particular student is losing marks on analysis, on structure, or on textual evidence. Sessions are typically 60 minutes weekly during the regular term, extending to 90-minute blocks during exam preparation, because full essays need an uninterrupted run to plan and write. Each session covers a teaching block on a single skill, a timed practice task, and mark-scheme-based feedback. Small-group sessions of two to three students are available for IGCSE and GCSE English where families want structured coaching at a lower per-session cost.</p><br />
          <p className="subtitle">For students who want broader curriculum support alongside English, our <a href="https://ignitetraininginstitute.com/private-tutors-in-dubai" className="text-white text-decoration-underline">private tutors in Dubai</a> coordinate scheduling across multiple subjects under one weekly plan.</p><br />

          <h2 className="title"><strong>IB English Tutors: Language And Literature, Literature, English B, And MYP</strong></h2>
          <p className="subtitle">IB English is the area where course-level specificity matters most, because each option assesses very different skills. Here is how it actually works.</p><br />
          <p className="subtitle"><strong>IB English A: Language and Literature</strong> is the more commonly taken Group 1 course. Students study a mix of literary works (novels, plays, poetry) and non-literary text types (news media, advertising, speeches, image-based texts, blogs). Assessment is built around Paper 1 (a guided analysis of a previously unseen non-literary text), Paper 2 (a comparative essay on two of the studied literary works), the Individual Oral (a 15-minute prepared response on a global issue linking one literary and one non-literary text), and at HL the Higher Level Essay (a 1,200 to 1,500-word independent essay).</p><br />
          <p className="subtitle"><strong>IB English A: Literature</strong> is the purely literary route, focused on novels, plays, poetry, and short stories rather than non-literary text types. The assessment structure mirrors Language and Literature, but Paper 1 is a guided analysis of an unseen literary passage rather than a non-literary text. The HL Essay is also a feature here.</p><br />
          <p className="subtitle"><strong>IB English B (SL and HL)</strong> is for students whose first language is not English. The exam tests communicative competence in English: Paper 1 (productive writing skills based on a chosen text type), Paper 2 (listening and reading comprehension), and the Individual Oral. HL adds literature work that SL does not include.</p><br />
          <p className="subtitle"><strong>MYP English (Phases 1 to 6)</strong> runs from Year 7 to Year 11 and prepares students for the jump to either Language and Literature, Literature, or English B in DP1. Our <a href="https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai" className="text-white text-decoration-underline">IBDP tutors in Dubai</a> cover all six DP subject groups and the core, and our <a href="https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai" className="text-white text-decoration-underline">IB MYP tutors</a> handle the Years 7 to 11 framework.</p><br />

          <h2 className="title"><strong>IGCSE And GCSE English Tutors In Dubai</strong></h2>
          <p className="subtitle">IGCSE English is taken by most UAE international school students at the British curriculum level, and there are three distinct options that get confused with each other. <strong>Cambridge IGCSE First Language English (0500)</strong>, graded A* to G, and its <strong>9-1 graded variant (0990)</strong> are for students using English at a native or near-native level, with papers covering reading, directed writing, and composition. <strong>Cambridge IGCSE Literature in English (0475 / 0992)</strong> is the literature paper, often taken alongside First Language English, covering prose, poetry, and drama with a focus on set-text and unseen analysis. <strong>Cambridge IGCSE English as a Second Language (0510 / 0511 / 0993 / 0991)</strong> is for students whose first language is not English, with reading, writing, listening, and speaking components.</p><br />
          <p className="subtitle">For students at British curriculum schools sitting <strong>UK GCSE English</strong> rather than the international IGCSE, we tutor AQA, OCR, and Pearson Edexcel UK GCSE English Language and English Literature. The underlying skills are the same; the mark schemes and set-text lists differ. Pearson Edexcel International GCSE English is also widely sat in UAE schools, and we cover it as well.</p><br />
          <p className="subtitle">The questions that decide grades at the IGCSE level are the directed writing tasks (where students must hit a register, audience, and purpose precisely) and the extended composition (where structure, vocabulary, and accuracy carry most of the marks). For literature, the unseen poetry question and the set-text essay are usually where the grade is made or lost. Our <a href="https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai" className="text-white text-decoration-underline">IGCSE tutors in Dubai</a> work across all major IGCSE subjects, so students taking English alongside the sciences can coordinate scheduling under one weekly plan.</p><br />

          <h2 className="title"><strong>A-Level And AS English Tutors For Language And Literature</strong></h2>
          <p className="subtitle">A-Level English steps up significantly in analytical demand, and the two main routes are very different from each other. <strong>Cambridge International AS and A-Level English Language (9093)</strong> focuses on the analysis of language across different text types, including spoken and digital language, and the assessment covers reading, writing, and language analysis across multiple papers. <strong>Cambridge International AS and A-Level Literature in English (9695)</strong> is the literature route, with prose, poetry, and drama set texts plus an unseen passage at A2.</p><br />
          <p className="subtitle">For students at British curriculum schools following UK boards, we tutor <strong>AQA, Pearson Edexcel, and OCR A-Level English Language and English Literature</strong>. UK A-Level English Literature includes a wider range of literary periods and an independent coursework component at A2.</p><br />
          <p className="subtitle">The skills that separate top candidates at A-Level are accurate use of literary and linguistic terminology, structured comparative essays that build sustained argument, and the ability to write fluently about unseen texts under timed pressure. AS students preparing for May papers usually need work on essay structure and analytical depth, while A2 students need help with longer comparative essays and the unseen passages. Our <a href="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai" className="text-white text-decoration-underline">A-Level tutors in Dubai</a> coordinate English alongside other subjects under a single weekly plan.</p><br />

          <h2 className="title"><strong>AP English Tutors: Language And Composition, And Literature And Composition</strong></h2>
          <p className="subtitle">AP English is two separate courses, and many UAE students preparing for US universities take both, usually one in Grade 11 and one in Grade 12.</p><br />
          <p className="subtitle"><strong>AP English Language and Composition</strong> focuses on rhetorical analysis of non-fiction prose, argument construction, and synthesis essays drawing on multiple sources. The exam includes 45 multiple-choice questions plus three free-response essays (rhetorical analysis, argument, and synthesis), scored 1 to 5.</p><br />
          <p className="subtitle"><strong>AP English Literature and Composition</strong> focuses on literary analysis across prose fiction, poetry, and drama. The exam includes 55 multiple-choice questions plus three free-response essays (poetry analysis, prose analysis, and a literary argument), scored 1 to 5.</p><br />
          <p className="subtitle">Most US universities look for a 4 or 5 for credit, and the free-response essays are where method and clear analytical reasoning earn the marks, not just the final argument. Our <a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai" className="text-white text-decoration-underline">AP tutors in Dubai</a> work across the full AP range, with AP English handled by tutors who know both courses and their scoring rubrics.</p><br />

          <h2 className="title"><strong>Core English Skills And Exam Components We Cover</strong></h2>
          <p className="subtitle">Most students need help with specific skills rather than the whole subject, so the lesson plan is built around where marks are actually being lost. The areas we support most often are:</p><br />
          <p className="subtitle"><strong>Close textual analysis</strong>, the foundation that every essay leans on, building students from plot-level understanding to method-and-effect analysis. <strong>Essay structure</strong>, including how to plan under timed conditions, build a sustained argument, and finish to time rather than running out of space. <strong>Embedded textual evidence</strong>, where students learn to integrate quotations rather than drop them in, and to vary between full quotation, short phrase, and paraphrase as the argument demands. <strong>Unseen text and unseen poetry</strong>, which carry their own technique: rapid annotation, framework-based response, and writing without the safety net of pre-prepared notes. <strong>Set-text mastery</strong>, where students build a working knowledge of plot, character, theme, context, and critical viewpoint deep enough to handle any question the exam asks. <strong>Rhetorical and linguistic analysis</strong>, for AP Language and Cambridge English Language students, including the named techniques and terminology those courses expect.</p><br />
          <p className="subtitle">Alongside content, we build the cross-cutting skills that English mark schemes reward: precision of expression, integration of context where the specification asks for it, and the analytical writing that lifts a response from descriptive to evaluative. These technique skills transfer across IGCSE, A-Level, IB, and AP.</p><br />

          <h2 className="title"><strong>Ignite: Best English Tutor In Dubai For Every Curriculum</strong></h2>
          <p className="subtitle">Ignite has been running tutoring in Dubai for over ten years, and English is one of our longest-running subjects, with a specialist bench that includes Anuja, who has more than ten years of experience teaching English across the curriculum. One IB student we worked with described our team's experience across IB as the reason their grades moved up across the Diploma. Our two centres at DIFC and JLT serve students from international schools across Dubai, and our online programme extends that reach to Sharjah, Abu Dhabi, and the wider UAE.</p><br />
          <p className="subtitle">What makes English tutoring work, in our experience, is matching the tutor to the exact course and the specific gap, then teaching the analytical method that the relevant mark scheme rewards. A tutor preparing an IB Language and Literature student for the Individual Oral works very differently from one coaching an A-Level Literature student through unseen poetry, or an AP Language student through the synthesis essay, or an ESL student through the IGCSE 0510 speaking paper. Every English tutor at Ignite has direct experience with at least one of the major courses, and most have taught several. New students start with a diagnostic, get matched to a tutor whose specialism fits, and follow a session-by-session plan built around the actual papers and assessments they need to deliver.</p><br />
          <p className="subtitle">If you're considering English tutoring for the first time, a <a href="https://ignitetraininginstitute.com/join-free-demo-class" className="text-white text-decoration-underline">free demo class with Ignite</a> is the simplest way to see how the diagnostic session and lesson structure work in practice. There's no expectation to commit beyond the demo.</p><br />

          <h3 className="title"><strong>Know more about our programmes:</strong></h3>
          <p className="subtitle">
            • <a href="https://ignitetraininginstitute.com/ib-curriculum-tutors-in-dubai" className="text-white text-decoration-underline">IB Curriculum Tutors In Dubai</a><br />
            • <a href="https://ignitetraininginstitute.com/british-curriculum-tutors-in-dubai" className="text-white text-decoration-underline">British Curriculum Tutors In Dubai</a><br />
            • <a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai" className="text-white text-decoration-underline">AP Tutors In Dubai</a><br />
            • <a href="https://ignitetraininginstitute.com/join-free-demo-class" className="text-white text-decoration-underline">Free Demo Class At Ignite Training Institute</a><br />
            • <a href="https://ignitetraininginstitute.com/contact-us" className="text-white text-decoration-underline">Contact Us</a>
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
