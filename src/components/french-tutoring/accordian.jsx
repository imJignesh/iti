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
          <h2 className="title"><strong>French Tutors In Dubai For IB, IGCSE, A-Level, And AP Students</strong></h2>
          <p className="subtitle">Ignite Training Institute provides 1-on-1 French tutoring in Dubai across IB (Ab Initio, French B SL and HL, plus MYP French), Cambridge and Edexcel IGCSE, GCSE, A-Level and AS, and AP French Language and Culture. Sessions run from our DIFC and JLT centres and online, covering speaking, listening, reading, writing, grammar, and the cultural-context work the higher exams demand, with tutors matched to each board.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <p className="subtitle">Most students come to us when oral exams start feeling unmanageable, when listening papers consistently underperform writing scores, or when grammar accuracy is not holding up under timed conditions. Some students join us months ahead of mocks; others arrive with weeks to go and need focused work on a single skill or paper. Every new student starts with a diagnostic so the tutor can see exactly where marks are being lost rather than re-teaching content the student already knows.</p><br />
          <p className="subtitle">We work with students from international schools across Dubai, including those at GEMS Wellington, Dubai College, Jumeirah College, JESS Ranches, Dubai American Academy, and Repton School Dubai, and with families across DIFC, JLT, Jumeirah, and the wider UAE. French is also a strong second-language option for university applications across Europe and Canada, so we keep the university target grade in view from the first session.</p><br />

          <h3 className="title"><strong>French Courses At A Glance: IB, IGCSE, A-Level, And AP Compared</strong></h3>
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
                  <td>IB French Ab Initio</td>
                  <td>DP SL only</td>
                  <td>IB</td>
                  <td>Paper 1 (writing) + Paper 2 (listening + reading) + Individual Oral (internal)</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IB French B</td>
                  <td>DP SL and HL</td>
                  <td>IB</td>
                  <td>Paper 1 + Paper 2 + Individual Oral; HL adds a literature component</td>
                  <td>DP1 to DP2 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>IGCSE French</td>
                  <td>Year 10 to 11</td>
                  <td>Cambridge 0520, Edexcel 4FR1</td>
                  <td>Listening, reading, speaking, writing across multiple papers</td>
                  <td>Year 10 to 11 (Grade 9 to 10)</td>
                </tr>
                <tr>
                  <td>A-Level French</td>
                  <td>AS + A2</td>
                  <td>Cambridge, Edexcel, AQA 7652</td>
                  <td>Listening/reading, writing/translation, oral, plus literature or film at A2</td>
                  <td>Year 12 to 13 (Grade 11 to 12)</td>
                </tr>
                <tr>
                  <td>AP French Language and Culture</td>
                  <td>College Board</td>
                  <td>AP</td>
                  <td>Multiple choice + 4 free response tasks (interpersonal and presentational); 1 to 5 score</td>
                  <td>Grade 11 to 12</td>
                </tr>
              </tbody>
            </table>
          </div><br />

          <h3 className="title"><strong>Why Students Often Struggle With French?</strong></h3>
          <p className="subtitle">French looks straightforward on paper, then the four skills pull apart in different directions under exam pressure. <strong>Grammar accuracy under time pressure</strong> is the first barrier, where students who recognise rules in isolation lose marks on agreement, tense, and pronoun placement once they are writing or speaking at speed. <strong>Speaking exam nerves</strong> are the second, since the IB Individual Oral, the IGCSE speaking test, and the AP speaking tasks all require sustained spoken French to a stranger, which is a skill in itself.</p><br />
          <p className="subtitle"><strong>Listening paper speed</strong> is the third, where the audio plays once or twice at native pace and students lose marks decoding rather than answering. <strong>Cultural and source-based questions</strong> are the fourth, particularly at A-Level and AP, where answers built only on language fall short of the cultural-engagement criteria. Tutoring weights time toward the weakest skills, since lifting one of the four usually lifts the overall grade more than balanced revision does.</p><br />

          <h2 className="title"><strong>French Tuition And Coaching In Dubai: Formats, Sessions, And What's Included</strong></h2>
          <p className="subtitle">French tuition in Dubai works best when sessions combine teaching with timed practice and oral work, rather than passive vocabulary review. We run two formats: in-person at our DIFC or JLT centres, and one-to-one online for students based further out or with tight schedules. Both use the same tutor pool and the same lesson structure, with screen-sharing during online sessions for working through texts, listening exercises, and past paper questions step by step.</p><br />
          <p className="subtitle">Private one-to-one sessions are the most popular choice, because French gaps are personal: the question is always which of the four skills this particular student is losing marks on. Sessions are typically 60 minutes weekly during regular term, extending to 90-minute blocks twice a week during exam preparation. Each session covers a targeted teaching block on a single skill, a timed practice task on past paper material, and mark-scheme-based feedback. Speaking practice is woven into every session rather than saved for a separate oral block, since oral fluency builds faster with regular short exposure. Small-group sessions of two to three students are available for IGCSE and GCSE where families want structured coaching at a lower per-session cost.</p><br />
          <p className="subtitle">For families weighing up exam boards before committing to tuition, our blog on <a href="https://ignitetraininginstitute.com/blog/what-is-the-difference-between-edexcel-and-cambridge" className="text-white text-decoration-underline">the differences between Edexcel and Cambridge</a> is useful background.</p><br />

          <h2 className="title"><strong>IB French Tutors: Ab Initio, French B (SL And HL), And MYP</strong></h2>
          <p className="subtitle">IB French is the area where course-level specificity matters most, because the three options are very different from each other and the tutoring approach has to match. Here is how it actually works.</p><br />

          <h3 className="title"><strong>French Ab Initio (SL only)</strong></h3>
          <p className="subtitle">It is a beginner-level course for students with little or no prior French. The exam tests basic communicative competence: short writing tasks, simple reading and listening passages, and an Individual Oral built around themes and questions the student has prepared in advance. Most UAE international school students whose home language is not French start here.</p><br />

          <h3 className="title"><strong>French B (SL and HL)</strong></h3>
          <p className="subtitle">It is for students who have studied French for several years and can already handle intermediate texts and conversations. The exam pattern includes Paper 1 (writing tasks based on a chosen text type), Paper 2 (listening and reading comprehension), and an Individual Oral with greater interpretive depth than Ab Initio. HL adds a literature component that SL does not include.</p><br />

          <h3 className="title"><strong>MYP French (Phases 1 to 6)</strong></h3>
          <p className="subtitle">It runs from Year 7 to Year 11 and prepares students for the jump to either Ab Initio or French B in DP1. We work with MYP students on the four criterion-based assessment objectives (listening, reading, speaking, writing) and on the eAssessment for those schools that opt in.</p><br />
          <p className="subtitle">If a family is unsure which DP course their child should be on, the school's IB coordinator can confirm. As a rough guide: students who arrived at IB DP with fewer than three years of French study are usually placed in Ab Initio; students with five or more years of French study (typically through MYP or equivalent) are usually placed in French B.</p><br />
          <p className="subtitle">The decision matters because tutoring effort spent on the wrong course does not transfer cleanly. Our <a href="https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai" className="text-white text-decoration-underline">IBDP tutors in Dubai</a> cover all six DP subject groups and the core, and our <a href="https://ignitetraininginstitute.com/courses/myp-tutors-in-dubai" className="text-white text-decoration-underline">IB MYP tutors</a> handle the Years 7 to 11 framework.</p><br />

          <h2 className="title"><strong>IGCSE And GCSE French Tutors In Dubai</strong></h2>
          <p className="subtitle">IGCSE French is taken by most UAE international school students at the British curriculum level, and we cover both major boards. <strong>Cambridge IGCSE French as a Foreign Language (0520)</strong> and the Cambridge International Level 1/Level 2 Certificate variant (7156) are the standard Cambridge options. <strong>Pearson Edexcel International GCSE French (4FR1)</strong> is the alternative. The exams across both boards test the same four skill areas (listening, reading, speaking, writing) but with different paper structures and weightings, so tutoring matches the specific board.</p><br />
          <p className="subtitle">Speaking and listening are the components most students underperform on at the IGCSE level. The speaking test follows a structured format with a presentation, conversation, and role-play element, all of which benefit from repeated mock practice marked against the actual mark scheme. Listening papers use board-specific audio recordings, and getting used to the accent variations and pace is something students can only build by working through past paper audio systematically.</p><br />
          <p className="subtitle">For students at British curriculum schools sitting <strong>UK GCSE French</strong> rather than the international IGCSE, we tutor AQA, OCR, and Pearson Edexcel UK GCSE. The underlying skills are the same, with mark schemes differing in detail. Our <a href="https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai" className="text-white text-decoration-underline">IGCSE tutors in Dubai</a> work across all major IGCSE subjects, so students taking French alongside Sciences or Humanities can coordinate scheduling under one weekly plan.</p><br />

          <h2 className="title"><strong>A-Level And AS French Tutors For Language And Literature</strong></h2>
          <p className="subtitle">A-Level French is one of the more demanding A-Levels, and the structure varies significantly across exam boards. <strong>Cambridge International A-Level French</strong> covers reading, writing, listening, and oral skills, with separate AS and A2 components. <strong>Pearson Edexcel International AS and A-Level French (YFR0 / YFR1)</strong> follows a similar structure with a written translation paper, an essay-based response paper, and an oral examination.</p><br />
          <p className="subtitle">For students at British curriculum schools following UK boards, we tutor <strong>AQA A-Level French (7652)</strong> and <strong>Pearson Edexcel A-Level French</strong>. UK A-Level French is heavier on literary and film analysis than the international variants, with two studied works examined through written response and a longer independent research project at A2. AQA topics include the changing nature of family in France, the cyber society, the place of voluntary work, French-speaking heritage, contemporary francophone music, and the cult of celebrity, with the studied works drawn from both literature and film.</p><br />
          <p className="subtitle">Most students preparing for AS papers in May need targeted work on essay structure and timed translation, since the jump from IGCSE to AS in writing density and analytical expectation is significant. A2 students typically need help with the synoptic literature or film essay and the longer translation passages. Our <a href="https://ignitetraininginstitute.com/courses/a-level-tutors-in-dubai" className="text-white text-decoration-underline">A-Level tutors in Dubai</a> coordinate French alongside other A-Level subjects under a single weekly plan where needed.</p><br />

          <h2 className="title"><strong>AP French Language And Culture Tutors</strong></h2>
          <p className="subtitle">AP French Language and Culture is the College Board's single AP French course, usually taken in Grade 11 or 12 by students preparing for US university applications. It tests four skill areas with a heavier emphasis on cultural context and authentic source materials than most other French exams.</p><br />
          <p className="subtitle">The exam structure splits into two sections. Section 1 is Multiple Choice, covering interpretive reading and listening across written, audio, and combined audio-text sources. Section 2 is Free Response, made up of four tasks: an email reply (interpersonal writing), a persuasive essay drawing on three sources (presentational writing), a conversation (interpersonal speaking), and a cultural comparison presentation (presentational speaking). The exam is scored 1 to 5, with most US universities looking for a 4 or 5 for credit.</p><br />
          <p className="subtitle">Tutoring for AP French centres on three areas: building familiarity with the persuasive essay's three-source synthesis, which is unfamiliar to students coming from IB or A-Level; refining the cultural comparison speaking task, where students often lose marks on under-developed cultural knowledge; and timed listening practice with authentic francophone audio sources covering France, Quebec, West Africa, the Caribbean, and other francophone regions. Our <a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai" className="text-white text-decoration-underline">AP tutors in Dubai</a> work across the full AP range, with AP French handled by tutors who have specifically prepared students through the College Board framework.</p><br />

          <h2 className="title"><strong>Core French Skills And Exam Components We Cover</strong></h2>
          <p className="subtitle">Most students underperform on one or two of the four French skills, not all four, so the lesson plan weights time toward the weakest skills based on the diagnostic session.</p><br />
          <p className="subtitle"><strong>Speaking</strong> is built through structured conversation practice on the exam topic list, mock oral exams under timed conditions, and pronunciation work where needed. For IB Individual Orals, IGCSE speaking tests, and A-Level oral exams, we run multiple full mocks across the preparation arc rather than one mock at the end.<br /><br />
          <strong>Listening</strong> is built through past paper audio from the relevant exam board, since the skill is not comprehension of French in general but the ability to extract specific information under timed pressure from audio that often plays only once.<br /><br />
          <strong>Reading</strong> focuses on text analysis, vocabulary expansion, and answering exam-specific question types, where the trick at IGCSE and A-Level is recognising the question type quickly (true/false/justify, gap-fill, multiple choice, short answer) and applying the right reading strategy for each.<br /><br />
          <strong>Writing</strong> covers essay structure, descriptive and narrative writing, translation passages, and summary writing, with each exam board weighting these differently so writing practice stays board-specific.</p><br />
          <p className="subtitle">Students who prefer one-to-one delivery across several subjects often work with our <a href="https://ignitetraininginstitute.com/private-tutors-in-dubai" className="text-white text-decoration-underline">private tutors in Dubai</a>, which lets us coordinate French alongside other subjects under a single weekly plan.</p><br />

          <h2 className="title"><strong>Ignite: Best French Tutor In Dubai For Every Curriculum</strong></h2>
          <p className="subtitle">Ignite has been running tutoring in Dubai for over ten years, and French is among the languages we have worked on the longest, with a specialist bench that includes Anuja, who has more than ten years of experience teaching French. Our two centres at DIFC and JLT serve students from international schools across Dubai, and our online programme extends that reach to Sharjah, Abu Dhabi, and the wider UAE.</p><br />
          <p className="subtitle">What makes French tutoring work, in our experience, is the right tutor-student match. A tutor preparing an Ab Initio student for their first Individual Oral works very differently from one coaching a French B HL student on literature commentary, or an AP student on the three-source persuasive essay, or an A-Level student through translation and film analysis.</p><br />
          <p className="subtitle">Every French tutor at Ignite has direct experience teaching at least one of IB, IGCSE, A-Level, or AP, and most have taught more than one. New students start with a diagnostic, get matched to a tutor whose curriculum specialism and teaching style fit, and follow a session-by-session plan built around the actual papers they will sit.</p><br />
          <p className="subtitle">If you're considering French tutoring for the first time, a <a href="https://ignitetraininginstitute.com/join-free-demo-class" className="text-white text-decoration-underline">free demo class with Ignite</a> is the simplest way to see how the diagnostic session and lesson structure work in practice. There's no expectation to commit beyond the demo.</p><br />

          <h3 className="title"><strong>Know more about our programmes:</strong></h3>
          <p className="subtitle">
            • <a href="https://ignitetraininginstitute.com/ib-curriculum-tutors-in-dubai" className="text-white text-decoration-underline">IB Curriculum Tutors In Dubai</a><br />
            • <a href="https://ignitetraininginstitute.com/british-curriculum-tutors-in-dubai" className="text-white text-decoration-underline">British Curriculum Tutors In Dubai</a><br />
            • <a href="https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai" className="text-white text-decoration-underline">AP Tutors In Dubai</a><br />
            • <a href="https://ignitetraininginstitute.com/join-free-demo-class" className="text-white text-decoration-underline">Free Demo Class At Ignite Training Institute</a><br />
            • <a href="https://ignitetraininginstitute.com/contact-us" className="text-white text-decoration-underline">Contact Us</a>
          </p>
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
