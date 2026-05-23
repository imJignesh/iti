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
          <h2 className="title">IB Tutoring In Dubai For Academic Excellence At Every IB Stage</h2>
          <p className="subtitle">IB tutoring in Dubai supports students from MYP Grade 6 through to DP Year 2, with focused academic guidance across all six IB subject groups. At Ignite Training Institute, our IB tutors work with students preparing for both May and November exam sessions, helping them strengthen subject understanding, complete <a href="https://ignitetraininginstitute.com/blog/how-to-study-for-ib-exams" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Internal Assessments</a> on time, and build the exam stamina the <a href="https://ignitetraininginstitute.com/blog/ib-diploma" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Diploma Programme</a> demands.<br /><br />The IB is structured very differently from IGCSE or A-Levels. Students juggle six subjects simultaneously, three at Higher Level and three at Standard Level, alongside the core components of TOK, the Extended Essay, and CAS. That workload is real, and it catches a lot of capable students off guard in their first DP year. Most of the students who reach out to us are not weak in their subjects. They are usually strong students who have hit the wall of IB pacing, where new content arrives every week, and there is no real time to fall behind.<br /><br />Our role is to slow that down where needed and speed it up where it matters. We diagnose the gap, build a weekly study plan, and use past paperwork and timed practice to bring exam confidence up steadily. Some students are starting MYP and need a strong foundation. Others are sitting in DP2 and need predicted-grade improvement before university applications. The support is shaped around what they actually need.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">What Makes IB Different From IGCSE, A-Levels, And CBSE, And Why IB Coaching In Dubai Matters</h2>
          <p className="subtitle">IB coaching in Dubai matters because the Diploma Programme is fundamentally different from the curricula most Dubai students transfer in from. IGCSE rewards content recall under time pressure. A-Levels reward subject depth across two or three subjects. CBSE rewards procedural accuracy. The IB rewards none of those alone. It rewards critical analysis, written argument, and the ability to apply subject knowledge across contexts you have not seen before.<br /><br />This is why so many high-achieving students from CBSE, ICSE, or Edexcel IGCSE backgrounds find their first DP term harder than expected. The grading is criterion-referenced, not norm-referenced. A Paper 2 essay in IB History or English Lang and Lit is not marked on how much you remember, but on how well you build a thesis, structure your evidence, and use subject-specific terminology. Maths AA HL students discover that a question they would have aced in A-Level Further Maths now requires written justification at every step. Physics HL students realise that Topic 9 (Wave Phenomena) and the SL Option topics expect them to derive equations, not just apply them.<br /><br />Add to that the Internal Assessment for every subject (15-25% of the final grade depending on subject), the <a href="https://ignitetraininginstitute.com/blog/what-is-ib-extended-essay" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Extended Essay</a> (4,000 words, externally moderated), and the TOK essay and exhibition. None of these exist in IGCSE or CBSE. They are skill-based components that need to be coached, not just studied for.<br /><br />That is the gap good IB coaching fills. Not extra content delivery, but the analytical, written, and project-management skills the IB demands, and most school timetables do not have time to teach properly.</p>
          <br />

          <h2 className="title">IB Tuition In Dubai Across MYP And DP: When Should Students Start?</h2>
          <p className="subtitle">Students benefit most from IB tuition in Dubai when they begin in MYP Year 4 (Grade 9) or at the start of DP Year 1 (Grade 11). MYP Year 4 is when subject choices start mattering for DP, and an early diagnostic helps students choose between <a href="https://ignitetraininginstitute.com/blog/ib-maths" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Maths AA and AI</a>, or between HL and SL options, with a clear sense of where their strengths sit. DP Year 1 is when the IA workload kicks in across six subjects at once, and structured weekly support from a tutor prevents the second-term spiral most parents recognise.<br /><br />Starting earlier is also possible, especially for students switching curricula. A Grade 8 student moving from CBSE or the American curriculum into MYP often needs help with the inquiry-based learning style and the criterion-based assessment rubrics. These are not natural to students who have only worked with closed-form questions and percentage-based grading. A few months of MYP-specific tuition closes that gap before it becomes a confidence problem.<br /><br />For DP Year 2 students, even short-term tuition over the summer between Year 1 and Year 2 makes a measurable difference. That is the window where the Extended Essay first draft is due, IA drafts need polishing, and Paper-style timed practice should already be a weekly habit. Students who do this groundwork over the summer go into Year 2 ahead. Students who do not tend to spend Year 2 catching up.<br /><br />The honest answer to "when should we start" is: as soon as you notice your child has stopped fully understanding what is being taught in class. Waiting until the predicted grades come out in DP Year 2 is usually too late to move from a 5 to a 7. Earlier intervention has a much higher ceiling.</p>
          <br />

          <h2 className="title">Online IB Classes In Dubai Vs In-Person Tutoring: Which Format Works Best?</h2>
          <p className="subtitle">Ignite's IB classes in Dubai run in three formats: in-person at our DIFC and JLT centres, fully online with live interactive sessions, or hybrid (a mix based on the student's week). The right format depends less on the subject and more on the student's schedule, focus profile, and parent preference.<br /><br />In-person IB classes work best for students who need a structured environment to focus, who benefit from the social accountability of being in a room, or who are working on a subject where physical demonstration helps (Sciences with practical work, Maths where problem-solving on a shared whiteboard speeds things up). Ignite's DIFC and JLT centres are positioned for families across Sheikh Zayed Road, Downtown, Business Bay, JLT, JBR, and Dubai Marina, which keeps commute times short.<br /><br />Online IB tutoring at Ignite works best for students with packed school and CAS schedules, families in Abu Dhabi or Sharjah, or students whose weak subject does not need physical demonstration (Economics, Business Management, English Lang and Lit, History, Psychology, TOK). The interactive whiteboard tools we use let tutors annotate past papers in real time, share marking schemes, and record sessions for review. Students who initially preferred face-to-face sessions often switch to online after two or three weeks because they save the commute time and use it for revision.<br /><br />Small Group Tutoring (SGT) is the third option at Ignite, with two to four students at the same level and pace. SGT works well for students who learn from peer questions and discussion, particularly in Economics, Business Management, and English Lit where group analysis is part of how the subject is meant to be done.</p>
          <br />

          <h2 className="title">IB Training For The IB Core: IAs, The Extended Essay, And TOK</h2>
          <p className="subtitle">IB training at Ignite covers more than subject content. The IB core (Internal Assessments, Extended Essay, and Theory of Knowledge) carries roughly 25% weight on the final Diploma score and is where the most predictable grade improvements come from, because each component is rubric-driven and can be coached against the markscheme.<br /><br />Ignite's IB training methodology is built around six structured pillars that map directly to how IB students are assessed.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>1. IB Past Paper Practice For May And November Sessions</h3>
          <p className="subtitle">We work through past papers from May 2018 onwards across Paper 1, Paper 2, and Paper 3 (where applicable). Sessions are not just question-solving. We map each question to the IB markscheme, decode the command terms (analyse, evaluate, justify, compare and contrast), and time students under exam conditions so the pacing becomes second nature before the actual sitting.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>2. Structured IB Revision Across All 6 Subject Groups</h3>
          <p className="subtitle">Revision is organised by IB subject group, not by random topic order. <a href="https://ignitetraininginstitute.com/blog/ib-subject-choices" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Studies in Language and Literature, Language Acquisition, Individuals and Societies, Sciences, Mathematics, and Arts</a> each have their own revision rhythm, paper structure, and command-term focus. We build the revision plan around the IB syllabus document for the student's specific subject, not a generic template.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>3. IB Subject Support At SL And HL Levels</h3>
          <p className="subtitle">The HL versus SL distinction matters more than most students realise at the start. HL Maths AA includes additional topics like proof by induction and complex numbers in polar form that SL students never see. HL Sciences includes the Higher Level extension topics and the longer Paper 3 Section B. HL Economics requires the Quantitative paper. We tailor sessions to the exact level and option the student is sitting, not the generic subject.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>4. Personalised IB Training Based On Diagnostic Assessment</h3>
          <p className="subtitle">Every new student at Ignite starts with a diagnostic in their weak subject. We identify which IB topic strands are weak (for example, in Maths AA SL, it is usually calculus and statistics that drag the grade down, while algebra and functions are stronger). The lesson plan is then built around closing those specific strands, not re-teaching what the student already knows.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>5. Timely IB Syllabus Completion With Built-In Revision Time</h3>
          <p className="subtitle">For the May session candidates, our planning aim is full syllabus coverage by mid-February, leaving roughly 10 weeks for revision, mocks, and paper practice. For the November session candidates, the calendar shifts back by six months. Students who join Ignite mid-year get an accelerated catch-up plan that prioritises the highest-weight topics first.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>6. IB Exam Strategies For Time Management, Answer Structuring, And Command Terms</h3>
          <p className="subtitle">IB papers reward students who answer the question that was actually asked, not the one they remember preparing for. We coach students on IB command terms (the difference between "describe" and "explain" is often six marks), on writing markscheme-aligned responses, and on time allocation across paper sections. These are skills, not knowledge, and they respond well to deliberate practice.</p>
          <br />

          <h2 className="title">How Do You Choose The Right IB Tutor In Dubai For Your Child?</h2>
          <p className="subtitle">Choosing the right IB tutor in Dubai comes down to four things: subject and level match, IB curriculum knowledge, teaching style fit, and progress visibility. Generic "experienced tutor" claims do not tell you whether a tutor has actually taught Maths AA HL, marked TOK essays, or supervised an IB History Extended Essay through to submission. Those are different skills.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>1. Subject And Level Match</h3>
          <p className="subtitle">A strong A-Level Maths tutor is not automatically a strong IB Maths AA HL tutor. The papers are structured differently, the command terms differ, and HL Maths AA includes content that <a href="https://ignitetraininginstitute.com/blog/a-levels-vs-ibdp-comparison" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>A-Level Pure Maths</a> does not cover. Always confirm the tutor has taught the exact subject and level your child is sitting (Maths AA vs AI, English A vs B, Physics HL vs SL, and so on).</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>2. IB Curriculum Knowledge</h3>
          <p className="subtitle">A good IB tutor should be able to explain the IA structure for your child's subject without checking, talk through the Extended Essay supervision process, and reference the latest IB markscheme updates. Ignite's IB tutors have between 3 and 13 years of IB-specific teaching experience across MYP and DP, with subject specialisations across <a href="https://ignitetraininginstitute.com/maths-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Maths</a>, <a href="https://ignitetraininginstitute.com/physics-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Physics</a>, <a href="https://ignitetraininginstitute.com/chemistry-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Chemistry</a>, <a href="https://ignitetraininginstitute.com/biology-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Biology</a>, <a href="https://ignitetraininginstitute.com/economics-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Economics</a>, <a href="https://ignitetraininginstitute.com/business-studies-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Business Studies</a>, <a href="https://ignitetraininginstitute.com/computer-science-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Computer Science</a>, <a href="https://ignitetraininginstitute.com/english-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>English</a>, <a href="https://ignitetraininginstitute.com/french-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>French</a>, <a href="https://ignitetraininginstitute.com/spanish-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Spanish</a>, and <a href="https://ignitetraininginstitute.com/psychology-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Psychology</a>.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>3. Teaching Style Fit</h3>
          <p className="subtitle">Some students need a patient, slow-build tutor who explains the same concept three different ways. Others need a brisk, exam-focused tutor who cuts straight to the markscheme. Neither is better. The fit matters. The free demo class at Ignite exists for this reason: to let the student decide if the tutor's pace and style work for them before committing.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>4. Progress Visibility</h3>
          <p className="subtitle">Parents should be able to see what is being covered each week, where the student stands against their target grade, and what the tutor is planning next. Ignite shares regular progress updates and post-mock reports so parents are not left guessing. If a tutor cannot show you measurable progress over four to six weeks, that is a signal to reconsider, not to wait it out.</p>
          <br />

          <h2 className="title">Why IB Students And Parents In Dubai Choose Ignite Training Institute?</h2>
          <p className="subtitle">Ignite Training Institute has been guiding IB students in Dubai for over 10 years, with tutors who specialise in the IB curriculum at both MYP and DP levels. We support students at over 1,000 IB hours of practice resources, run both May and November session preparation, and back every enrolment with a free demo class so families can assess fit before committing.<br /><br />Our students come to us from IB World Schools across Dubai, and the work happens in two ways. We build subject confidence through small group tutoring (SGT) or one-on-one sessions, and we pair that with structured exam preparation through past papers, timed mocks, and markscheme-aligned feedback. The 7/7 scores across subjects on our results board are not the average outcome, but they are achievable and we have the systems in place to push capable students towards them.<br /><br />One IB student, Kabir, came to us for IB Business Management and Economics. The subjects were covered thoroughly, complex concepts were broken down so they were genuinely understandable, and his grades moved up steadily. Another DP student, Maya, started with IB Maths and was sceptical that online tutoring could match face-to-face. After a few weeks she found the online format just as effective for her subject, and she stayed online for the rest of her DP run.<br /><br />If your child needs help across all six subjects, focused support for one weak HL, or coaching through the EE and TOK essay, we can match them with the right IB tutor and the right format. Book a <a href="https://ignitetraininginstitute.com/join-free-demo-class" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>free demo class</a> to meet a tutor and see how a session would actually work for your child, or <a href="https://ignitetraininginstitute.com/contact-us" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>contact us</a> to discuss a study plan.</p>
          <br />

          <h2 className="title">Exclusive IB Resources</h2>
          <br />
          <div className="schemalinks">
            <a href="https://ignitetraininginstitute.com/blog/ib-curriculum-blog/">IB Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/ib-diploma/">IB Diploma</a> | <a href="https://ignitetraininginstitute.com/blog/guide-on-ib-programmes/">IB Programmes</a> | <a href="https://ignitetraininginstitute.com/blog/ib-myp-programme/">IB MYP Programme Guide</a> | <a href="https://ignitetraininginstitute.com/blog/ib-program-pros-and-cons/">IB Program Pros &amp; Cons</a> | <a href="https://ignitetraininginstitute.com/blog/benefits-of-ib-curriculum/">Benefits Of IB Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/benefits-of-ib-diploma/">Benefits Of The IB Diploma Programme</a> | <a href="https://ignitetraininginstitute.com/blog/is-myp-certificate-important/">Is MYP Certificate Important</a> | <a href="https://ignitetraininginstitute.com/blog/how-to-study-for-ib-exams/">How To Study For IB Exams</a> | <a href="https://ignitetraininginstitute.com/blog/ibdp-syllabus-changes/">IB Syllabus Updates</a> | <a href="https://ignitetraininginstitute.com/blog/ib-bilingual-diploma/">IB Bilingual Diploma</a> | <a href="https://ignitetraininginstitute.com/blog/how-to-get-good-grades-in-ib/">How To Get Good Grades In IB</a> | <a href="https://ignitetraininginstitute.com/blog/ib-diploma-gpa-calculator/">IB Diploma GPA Calculator</a> | <a href="https://ignitetraininginstitute.com/blog/ib-subject-choices/">IB Subject Choices</a> | <a href="https://ignitetraininginstitute.com/blog/colleges-that-accept-ib-diploma/">Colleges That Accept IB Diploma</a> | <a href="https://ignitetraininginstitute.com/blog/what-is-an-ib-world-school/">What Is An IB World School</a> | <a href="https://ignitetraininginstitute.com/blog/ib-grades-explained/">IB Grades Explained</a> | <a href="https://ignitetraininginstitute.com/blog/ib-cas-program/">CAS IB</a> | <a href="https://ignitetraininginstitute.com/blog/ib-cas-ideas/">IB CAS Ideas</a> | <a href="https://ignitetraininginstitute.com/blog/what-is-ib-extended-essay/">What Is An Extended Essay For IB</a> | <a href="https://ignitetraininginstitute.com/blog/ib-learner-profile/">IB Learner Profile Attributes</a> | <a href="https://ignitetraininginstitute.com/blog/ib-career-related-programme-guide/">IB Career Related Programme</a> | <a href="https://ignitetraininginstitute.com/blog/ib-physics/">IB Physics</a> | <a href="https://ignitetraininginstitute.com/blog/ib-maths/">IB Maths</a> | <a href="https://ignitetraininginstitute.com/blog/ib-computer-science-syllabus/">IB Computer Science Syllabus</a> | <a href="https://ignitetraininginstitute.com/blog/ib-economics-exam/">IB Economics</a> | <a href="https://ignitetraininginstitute.com/blog/ib-economics-exam/">IB Economics Exam</a> | <a href="https://ignitetraininginstitute.com/blog/ib-curriculum-vs-british-curriculum/">IB Curriculum Vs British Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/a-levels-vs-ibdp-comparison/">IB VS A Levels</a> | <a href="https://ignitetraininginstitute.com/blog/ib-vs-igcse-program/">IB VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/blog/ib-vs-ap-comparison/">IB VS AP Difficulty</a> | <a href="https://ignitetraininginstitute.com/blog/ib-certificate-vs-ib-diploma/">IB Certificate Vs IB Diploma</a> | <a href="https://ignitetraininginstitute.com/blog/ib-vs-icse/">IB VS ICSE</a> | <a href="https://ignitetraininginstitute.com/blog/ibcp-vs-ibdp/">IBCP VS IBDP</a> | <a href="https://ignitetraininginstitute.com/blog/cbse-or-ib-board/">CBSE Or IB</a> | <a href="https://ignitetraininginstitute.com/blog/a-levels-vs-ibdp-comparison/">A-Levels VS IBDP</a> | <a href="https://ignitetraininginstitute.com/blog/ib-schools-in-dubai/">IB Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/blog/ib-schools-in-abu-dhabi/">IB Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/blog/ibdp-schools-in-dubai/">IBDP Schools In Dubai</a>
          </div>

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
      `}</style>
    </div>
  );
}
