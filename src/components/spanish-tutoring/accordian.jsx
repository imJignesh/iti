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
          <h2 className="title"><strong>Spanish Tutors In Dubai For IB, IGCSE, A-Level, And AP Students</strong></h2>
          <p className="subtitle">Ignite Training Institute provides 1-on-1 Spanish tutoring in Dubai across IB (Ab Initio, Language B HL and SL, MYP), IGCSE, GCSE, A-Level, and AP curriculums. Lessons run from our DIFC and JLT centres and online, with native and near-native tutors matched to each exam board.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <p className="subtitle">Most families come to us when oral exams start feeling unmanageable, when listening papers consistently underperform writing scores, or when a student stops finishing exam papers on time. Certain students begin their preparation several months prior to mock examinations; others come just weeks before and require concentrated effort on a particular skill or exam paper. Every new student starts with a diagnostic session and the lesson plan follows from there.</p><br />

          <p className="subtitle">We work with students from international schools across Dubai, including those at GEMS Wellington, Dubai College, Jumeirah College, JESS Ranches, Dubai American Academy, Repton School Dubai, and similar IB / British / American curriculum schools across DIFC, JLT, Jumeirah, and the wider UAE.</p><br />

          <h3 className="title"><strong>Spanish Courses At A Glance: IB, IGCSE, A-Level, And AP Compared</strong></h3>
          <div className="table-responsive">
            <table className="table table-bordered table-striped" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Level</th>
                  <th>Best For</th>
                  <th>Assessment Format</th>
                  <th>Typical Year/Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>IB Spanish Ab Initio</td>
                  <td>SL only</td>
                  <td>Beginners with little or no prior Spanish</td>
                  <td>Paper 1 (writing), Paper 2 (listening + reading), Individual Oral</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IB Spanish B</td>
                  <td>HL or SL</td>
                  <td>Students with 3+ years of Spanish</td>
                  <td>Paper 1 (writing), Paper 2 (listening + reading), Individual Oral, HL: literature component</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IGCSE Spanish (0530 / 4SP1)</td>
                  <td>Year 10 to 11</td>
                  <td>Beginner to intermediate students</td>
                  <td>4 papers: listening, reading, speaking, writing</td>
                  <td>Year 10 to 11 (Grade 9 to 10)</td>
                </tr>
                <tr>
                  <td>A-Level Spanish (AS + A2)</td>
                  <td>Advanced</td>
                  <td>Students with 4+ years of Spanish</td>
                  <td>Translation, essay/research, oral, listening, literary/film analysis</td>
                  <td>Year 12 to 13 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>AP Spanish Language and Culture</td>
                  <td>College Board</td>
                  <td>Advanced students applying to US universities</td>
                  <td>MC (reading + listening) + 4 free-response tasks; scored on a 1 to 5 scale</td>
                  <td>Grade 11 to 12</td>
                </tr>
              </tbody>
            </table>
          </div>
          <br />

          <h3 className="title"><strong>Why Students Often Struggle With Spanish?</strong></h3>
          <p className="subtitle">Three grammar areas come up repeatedly across IB, IGCSE, A-Level, and AP students. <strong>Ser vs estar</strong> (the two Spanish verbs for "to be") trips up almost every student at some point because English has no equivalent split. The <strong>subjunctive mood</strong> is the second consistent challenge, since English uses it rarely while Spanish uses it constantly for opinions, doubts, and hypotheticals. <strong>Preterite vs imperfect</strong> is the third one, where choosing the right past tense depends on context that isn't intuitive for English speakers. Beyond grammar, gender agreement on adjectives and articles is a high-frequency error in written work that costs marks even when the meaning is clear. Targeted tutoring addresses these specifically rather than treating them as side issues.</p><br />

          <h2 className="title"><strong>Spanish Tuition And Coaching In Dubai: Formats, Sessions, And What's Included?</strong></h2>
          <p className="subtitle">Spanish tuition in Dubai works best when the format matches the student's schedule and the skill being built. We run two formats: in-person at our DIFC or JLT centres, and one-to-one online for students based further out in Dubai or across the wider UAE. Both formats use the same tutor pool and the same lesson structure, so switching between them during term doesn't break continuity.</p><br />

          <p className="subtitle">Sessions are typically 60 minutes weekly during regular term, extending to 90-minute blocks twice a week during exam preparation. Each session covers a targeted teaching block on a single skill, a timed practice task using past paper material, and mark-scheme-based feedback. Speaking practice is woven into every session rather than saved for a separate "oral" block, because oral fluency builds faster through regular short exposure than through occasional long sessions. Small-group sessions of two to three students are available for IGCSE and GCSE Spanish, where families want the structure of coaching at a lower per-session cost.</p><br />

          <p className="subtitle">For families weighing up exam boards before choosing tuition, our blog on <a href="https://ignitetraininginstitute.com/blog/what-is-the-difference-between-edexcel-and-cambridge" style={{color: "inherit", textDecoration: "underline"}}>the differences between Edexcel and Cambridge</a> is a useful background.</p><br />

          <h2 className="title"><strong>IB Spanish Tutors For Ab Initio, Language B (HL And SL), And MYP</strong></h2>
          <p className="subtitle">IB Spanish is the area where course-level specificity matters most. The three relevant IB Spanish options are very different from each other, and a tutor's preparation approach has to match the course.</p><br />

          <h3 className="title"><strong>IB Spanish Ab Initio (SL only)</strong></h3>
          <p className="subtitle">It is a beginner-level course for students with little or no prior Spanish. The exam tests basic communicative competence through Paper 1 (short writing tasks), Paper 2 (simple listening and reading comprehension), and an Individual Oral built around prepared themes. Most UAE international school students whose home language isn't Spanish start here.</p><br />

          <h3 className="title"><strong>IB Spanish B (HL and SL)</strong></h3>
          <p className="subtitle">It is for students with three or more years of Spanish study, comfortable with intermediate texts and conversations. The assessment includes Paper 1 (writing tasks based on a chosen text type), Paper 2 (listening and reading comprehension), and an Individual Oral with greater interpretive depth. HL adds a literature component that SL does not include.</p><br />

          <h3 className="title"><strong>MYP Spanish (Phases 1 to 6)</strong></h3>
          <p className="subtitle">It runs from Year 7 to Year 11 and prepares students for the jump to either Ab Initio or Language B in DP1. We work with MYP students on the four criterion-based assessment objectives (listening, reading, speaking, writing) and on the eAssessment for schools that opt in.</p><br />

          <h3 className="title"><strong>IB Spanish Ab Initio VS Language B: Which Course Are You On?</strong></h3>
          <p className="subtitle">Your school's IB coordinator confirms course placement based on a diagnostic, but as a general guide: students who reached IB DP with fewer than three years of Spanish study are usually placed in Ab Initio. Students with five or more years of Spanish (typically through MYP or equivalent) are placed in Language B. The assessments differ completely between the two courses, so tutoring effort spent on the wrong course doesn't transfer cleanly.</p><br />

          <p className="subtitle">Our <a href="https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai" style={{color: "inherit", textDecoration: "underline"}}>IBDP tutors in Dubai</a> encompass all six DP subject groups along with the core components, while our <a href="https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai" style={{color: "inherit", textDecoration: "underline"}}>IB MYP tutors</a> cater to students in Years 7 to 11, assisting families in their preparation for the transition to the DP.</p><br />

          <h2 className="title"><strong>IGCSE And GCSE Spanish Tutors In Dubai</strong></h2>
          <p className="subtitle">IGCSE Spanish is taken by most UAE international school students at the British curriculum level, and we cover both major boards. <strong>Cambridge IGCSE Spanish (0530)</strong> is the standard Spanish as a Foreign Language qualification; <strong>Cambridge International Level 1/Level 2 Certificate Spanish (7160)</strong> is the equivalent UK-recognised variant. <strong>Pearson Edexcel International GCSE Spanish (4SP1)</strong> is the Pearson alternative. All three test the same four skill areas (listening, reading, speaking, writing) but with different paper structures and weightings, so tutoring must be matched to the specific board.</p><br />

          <p className="subtitle">Speaking and listening are the components most students underperform on at IGCSE level. The speaking test follows a structured format with a presentation, conversation, and role-play element. Each part benefits from repeated mock practice with a tutor who has marked these tests before. Listening papers use exam-board-specific audio recordings, and getting used to accent variations (peninsular vs Latin American Spanish) and pace is something only built by working through past paper audio systematically.</p><br />

          <p className="subtitle">For students at British curriculum schools that follow the UK GCSE (AQA, OCR, or Pearson Edexcel UK) rather than the international IGCSE, we tutor those boards too. The underlying skills are the same; mark schemes differ in detail. Our <a href="https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai" style={{color: "inherit", textDecoration: "underline"}}>IGCSE tutors in Dubai</a> work across all major IGCSE subjects, so if your child needs Spanish alongside Sciences or Humanities, we can usually fit it into one coordinated schedule.</p><br />

          <h2 className="title"><strong>A-Level And AS Spanish Tutors For Language And Literature</strong></h2>
          <p className="subtitle">A-Level Spanish is considered one of the more challenging A-Level subjects, and its structure differs considerably among various examination boards. Cambridge International A-Level Spanish (codes vary by year of entry, so please confirm with your school) covers reading, writing, listening, and oral skills, with separate AS and A2 components. Pearson Edexcel International AS and A-Level Spanish (YSP0 / YSP1) follows a similar pattern with a written translation paper, an essay-based response paper, and an oral examination.</p><br />

          <p className="subtitle">For students at British curriculum schools following UK boards, we also tutor AQA A-Level Spanish (7692) and Pearson Edexcel A-Level Spanish. UK A-Level Spanish is heavier on literary and film analysis than the international variants. It includes two studied works examined through written response, and a longer independent research project at A2.</p><br />

          <p className="subtitle">Most students preparing for AS papers in May need targeted work on essay structure and timed translation, because the jump from IGCSE to AS in writing density and analytical expectation is significant. A2 students typically need help with the synoptic literature/film essay and longer translation passages. Our <a href="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai" style={{color: "inherit", textDecoration: "underline"}}>A-Level tutors in Dubai</a> coordinate Spanish alongside other A-Level subjects under a single weekly plan where needed.</p><br />

          <h2 className="title"><strong>AP Spanish Tutors For AP Spanish Language And Culture</strong></h2>
          <p className="subtitle">AP Spanish Language and Culture is the College Board's flagship Spanish course, taken in Grade 11 or 12 by students preparing for US university applications. It tests four skill areas with a heavier emphasis on cultural context and authentic source materials than most other Spanish exams.</p><br />

          <p className="subtitle">The exam structure splits into two sections. <strong>Section 1 (Multiple Choice)</strong> covers interpretive reading and listening across written, audio, and combined audio-text sources. <strong>Section 2 (Free Response)</strong> has four tasks: an email reply (interpersonal writing), a persuasive essay drawing on three sources (presentational writing), a conversation (interpersonal speaking), and a cultural comparison presentation (presentational speaking). The examination is graded on a scale from 1 to 5, with the majority of universities in the United States seeking a score of 4 or 5 for academic credit.</p><br />

          <p className="subtitle">AP Spanish tutoring at Ignite focuses on three areas: building familiarity with the persuasive essay's three-source synthesis (unfamiliar to students coming from IB or A-Level), refining the cultural comparison speaking task (where students often lose marks on under-developed cultural knowledge), and timed listening practice with authentic Spanish-language audio sources. Our <a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai" style={{color: "inherit", textDecoration: "underline"}}>AP tutors in Dubai</a> work across the full AP range, with AP Spanish handled by tutors who have specifically prepared students through the College Board framework.</p><br />

          <h2 className="title"><strong>Speaking, Listening, Reading, And Writing: How Skills Are Built</strong></h2>
          <p className="subtitle">Most students underperform on one or two of the four Spanish skills, not all four. The lesson plan weights time toward the weakest skills based on the diagnostic session.</p><br />

          <p className="subtitle"><strong>Speaking</strong> is built through structured conversation practice on the exam topic list, mock oral exams under timed conditions, and pronunciation work where needed. For IB Individual Oral, IGCSE speaking tests, and A-Level oral exams, we run multiple full mocks across the preparation arc rather than a single mock at the end.</p><br />

          <p className="subtitle"><strong>Listening</strong> is built through past paper audio from the relevant exam board. The skill isn't comprehension of Spanish in general; it's the ability to extract specific information under timed pressure from audio that often plays only once. Regular weekly listening exposure makes more difference than long monthly sessions.</p><br />

          <p className="subtitle"><strong>Reading</strong> focuses on text analysis, vocabulary expansion, and answering exam-specific question types. The trick at IGCSE and A-Level is recognising the question type quickly (true/false/justify, gap-fill, multiple choice, short answer) and applying the right reading strategy for each.</p><br />

          <p className="subtitle"><strong>Writing</strong> covers essay structure, descriptive and narrative writing, translation passages, and summary writing. Each exam board weights these differently, so writing practice must be board-specific. We work through past paper writing prompts with mark-scheme-based feedback after each task.</p><br />

          <p className="subtitle">Students who prefer one-to-one delivery across multiple subjects often work with our <a href="https://ignitetraininginstitute.com/private-tutors-in-dubai" style={{color: "inherit", textDecoration: "underline"}}>private tutors in Dubai</a>, which lets us coordinate Spanish alongside other subjects under a single weekly plan.</p><br />

          <h2 className="title"><strong>Ignite: Best Spanish Tutor In Dubai For Every Curriculum</strong></h2>
          <p className="subtitle">Ignite has been running tutoring in Dubai for over ten years, and Spanish is one of the languages we've worked on longest. Our two centres at DIFC and JLT serve students from international schools across Dubai, and our online programme extends that reach to Sharjah, Abu Dhabi, and the wider UAE.</p><br />

          <p className="subtitle">Every Spanish tutor at Ignite has direct experience teaching either IB, IGCSE, A-Level, or AP, and most have taught more than one of these. New students start with a diagnostic session, get matched to a tutor whose curriculum specialism and teaching style fit, and follow a session-by-session plan built around the actual papers they'll sit. If a match isn't working in the first two or three sessions, we change it.</p><br />

          <p className="subtitle">If you're considering Spanish tutoring for the first time, a <a href="https://ignitetraininginstitute.com/join-free-demo-class" style={{color: "inherit", textDecoration: "underline"}}>free demo class with Ignite</a> is the simplest way to see how the diagnostic session and lesson structure works in practice. There's no expectation to commit beyond the demo.</p><br />
          
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
