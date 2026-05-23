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
          <h2 className="title">IBDP Tutoring In Dubai For Year 1 & Year 2 Diploma Students</h2>
          <p className="subtitle">IBDP tutoring in Dubai supports students through both years of the IB Diploma Programme, covering all six subject groups, the Extended Essay, Theory of Knowledge, and Internal Assessments. At Ignite Training Institute, our IBDP tutors prepare students for both May and November exam sessions, focusing on subject mastery, IA submissions, and the predicted grades universities ask for.<br /><br />The IBDP is a two-year commitment that does not give students room to coast. Year 1 (Grade 11) is when subject foundations get built, first IA drafts are written, and the Extended Essay topic is chosen. Year 2 (Grade 12) is when the EE is finalised, TOK essays are written, predicted grades come out around October, and Paper 1, Paper 2, and Paper 3 mocks start landing. The compressed timeline catches strong students by surprise, especially those joining IBDP from IGCSE or A-Level backgrounds, where the rhythm is very different.<br /><br />Most IBDP students who reach out to Ignite are not weak in their subjects. They are usually capable students hit by the volume of the programme: six subjects taught simultaneously, three at HL and three at SL, plus the core, plus CAS, plus university applications opening in Year 2. We diagnose where the gap actually sits and build a weekly plan to close it.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">IB Diploma Tutoring In Dubai: Why The Two-Year Programme Demands A Different Approach</h2>
          <p className="subtitle">IB Diploma tutoring in Dubai cannot work the same way A-Level or AP tutoring works. The IBDP runs for two continuous years, and almost every assessment compounds into the final 45-point score. A weak Internal Assessment in Year 1 sits in the gradebook through Year 2 and into the final Diploma. A poorly chosen Extended Essay topic in early Year 1 becomes a 4,000-word problem in Year 2.<br /><br />This is why effective IB Diploma tutoring takes a long view. Year 1 sessions focus on subject foundations, IA topic selection, and EE research planning. Year 2 sessions shift to predicted-grade improvement, TOK essay drafting against the IB prescribed titles, EE final polish, and Paper 1, Paper 2, and Paper 3 timed practice.<br /><br />University applications make the timing even more critical. IBDP students apply to universities in October and November of Year 2 using their predicted grades, not their final IB scores. The work to push a predicted 5 to a 6 has to happen in the first 14 months of the programme. Students who only start tutoring after Year 2 mocks usually find they are working against a closed timeline.</p>
          <br />

          <h2 className="title">Understanding The IBDP Score: What Strong IB Diploma Tutoring Targets?</h2>
          <p className="subtitle">The IBDP is graded out of 45 points. Each of the six subjects is scored 1 to 7 (42 points), plus up to 3 bonus points from the combined Extended Essay and Theory of Knowledge grades. To earn the Diploma, students need at least 24 points overall, successful CAS completion, and they must avoid failing conditions like a 1 in any subject or a 2 in two HL subjects.<br /><br />Where IB Diploma tutoring at Ignite focuses depends on where the student sits. A student averaging 4s and 5s usually has subject-specific gaps and IA quality issues. A student averaging 5s and 6s usually has paper-technique gaps, especially Paper 2 essays in Languages and Humanities, where command-term execution decides the grade. A student aiming for 40+ overall is usually working on the EE and TOK bonus points (an A in EE plus a B in TOK gives 3 bonus points; a B plus a C gives 1).<br /><br />For context, top UK universities like Oxford, Cambridge, LSE, and UCL typically ask for 38 to 40+ with specific HL grades (often 7,7,6 in named subjects). NYU Abu Dhabi sits around 38+ for competitive courses. Khalifa University, AUS, Heriot-Watt Dubai, and Middlesex Dubai all publish IBDP point thresholds. Real tutoring work means knowing the target and reverse-engineering the path.</p>
          <br />

          <h2 className="title">IBDP Tuition In Dubai, UAE, Across HL And SL Subjects</h2>
          <p className="subtitle">IBDP tuition in Dubai at Ignite covers all six IB subject groups at both Higher Level and Standard Level, including the HL extension topics and Paper 3 components that catch most students out. The HL versus SL distinction is bigger than it sounds. HL Maths AA includes proof by induction, Maclaurin series, and complex numbers in polar form that SL students never see. HL Sciences include the option topics and the longer Paper 3 with extended-response questions. HL Economics includes the Quantitative Paper.<br /><br />Subject specialisation matters more in IBDP tutoring than in most other programmes because IB papers reward subject-specific written technique, not just content recall. Ignite's IBDP tutors specialise across <a href="https://ignitetraininginstitute.com/maths-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Maths</a>, <a href="https://ignitetraininginstitute.com/physics-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Physics</a>, <a href="https://ignitetraininginstitute.com/chemistry-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Chemistry</a>, <a href="https://ignitetraininginstitute.com/biology-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Biology</a>, <a href="https://ignitetraininginstitute.com/economics-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Economics</a>, <a href="https://ignitetraininginstitute.com/business-studies-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Business Studies</a>, <a href="https://ignitetraininginstitute.com/computer-science-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Computer Science</a>, <a href="https://ignitetraininginstitute.com/english-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>English</a>, <a href="https://ignitetraininginstitute.com/french-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>French</a>, <a href="https://ignitetraininginstitute.com/spanish-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Spanish</a>, and <a href="https://ignitetraininginstitute.com/psychology-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Psychology</a>, at HL and SL. We confirm the tutor has taught the exact subject and level the student is sitting before sessions start.<br /><br />The Maths AA versus AI choice deserves a specific mention because it shapes university options. Maths AA is the route most engineering, physics, computer science, and economics degrees expect at HL. Maths AI suits social sciences, business, and design degrees. Once enrolled, switching is rarely realistic past the first month of Year 1. We help students get this choice right before they lock in.</p>
          <br />

          <h2 className="title">The IBDP Core: Extended Essay, Theory Of Knowledge, And Internal Assessments</h2>
          <div className="subtitle">The IBDP core (EE, TOK, and Internal Assessments) is where the most predictable grade improvements happen because every component is rubric-driven. The IB markscheme tells you exactly what an A grade looks like, what an E looks like, and what falls between. Strong tutoring against the rubric is high-leverage work.<br /><br />
          <ul>
            <li><strong>Extended Essay (4,000 words, externally assessed).</strong> Marked out of 34 against five criteria (A: focus and method; B: knowledge and understanding; C: critical thinking; D: presentation; E: engagement). The score maps to an A through E band, and the EE band combines with the TOK band for 0 to 3 bonus Diploma points. Ignite tutors guide students through research question framing in early Year 1, structured supervisor meeting preparation, and final-draft polish. A weak research question in October of Year 1 is the single biggest predictor of a weak EE in March of Year 2.</li>
            <li><strong>Theory of Knowledge (TOK essay + TOK exhibition).</strong> The TOK essay (1,600 words, externally assessed against the IB prescribed titles released annually) and the TOK exhibition (three objects, internally assessed) together score across criteria A through E. A strong essay-exhibition combination delivers an A or B, which feeds the bonus points alongside EE.</li>
            <li><strong>Internal Assessments (across all six subjects).</strong> IA weightings vary by subject but typically sit between 20% and 30% of the final subject grade. Sciences IA = 20%, Maths IA = 20%, Economics IA = 20%, Business Management IA = 25%, English Lang and Lit Individual Oral = 30%. Each IA is criterion-marked. Ignite tutors guide IA topic selection, structured drafting against the criteria, and final polish before submission.</li>
          </ul></div>
          <br />

          <h2 className="title">IBDP Coaching In Dubai For Predicted Grades, Mocks, And Final Exams</h2>
          <p className="subtitle">IBDP coaching in Dubai works against a specific calendar. Year 1 ends with the first round of school mocks, which feed into early predicted grades. Year 2 starts with autumn term mocks (October to November), which become the predicted grades schools submit on the UCAS form by 14 January and on US applications by November 1 or January 1. Final IB exams sit in May (Northern Hemisphere) or November (Southern Hemisphere). Diploma results are released around 6 July (May session) or 5 January (November session).<br /><br />The work in each window is different. Autumn Year 2 coaching at Ignite focuses on the highest-leverage push to lift predicted grades before they get sent to universities. January to March coaching shifts to Paper 1, Paper 2, and Paper 3 timed practice, mock-paper analysis against the markscheme, and command-term technique. April becomes intensive past-paper work and predicted-paper practice. November session candidates follow the same arc shifted six months back.<br /><br />The four IBDP courses Ignite runs are calibrated to this calendar. The 9-month Finals Prep Program runs August to April for Year 2 students writing May exams. The 6-week Pre-IBDP Summer Bridge Course runs July to August for students transitioning into the programme. The 2-week Spring Revision Course runs March to April as the final exam-readiness sprint. The Bespoke One-on-One Tutoring runs year-round for students who need fully individualised pacing across either Year 1 or Year 2.</p>
          <br />

          <h2 className="title">Online IBDP Classes In Dubai Vs In-Person Tutoring: Which Suits Year 12 Best?</h2>
          <p className="subtitle">Online IBDP classes in Dubai work particularly well for Year 12 students because Year 12 is the year with the heaviest workload and the least flexibility. CAS hours, EE supervision meetings, TOK draft submissions, school mocks, university applications, and after-school activities all stack on the same calendar. Cutting commute time by switching to online sessions often gives Year 12 students 3 to 5 hours back per week, and that time tends to go straight into revision.<br /><br />In-person IBDP tutoring at Ignite's DIFC and JLT centres still suits some Year 12 students better, particularly those working on subjects with practical demonstration value (Maths and Sciences problem-solving on a shared whiteboard, Chemistry mechanisms drawn out in real time) or those who need the structured environment of a tutoring room to focus. Our DIFC and JLT centres serve families across Sheikh Zayed Road, Downtown, Business Bay, JLT, JBR, and Dubai Marina.<br /><br />For Year 11 students, the format choice matters less because the workload is lighter. Year 11 students often start in-person and switch to online closer to mocks. Small Group Tutoring (SGT) with 2 to 4 students at the same level is also available across both formats and works particularly well for Economics, Business Management, and English Language and Literature where group analysis adds value.</p>
          <br />

          <h2 className="title">How Do Ignite's IBDP Programmes Guide Students To Success?</h2>
          <p className="subtitle">Ignite's IBDP training is built around six teaching pillars that map directly to how IBDP students are assessed. These run across all four IBDP courses Ignite offers, from year-round Bespoke One-on-One Tutoring through the 9-month Finals Prep Program, the 6-week Pre-IBDP Summer Bridge Course, and the 2-week Spring Revision Course.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>1. IBDP Personalised Training Based On Diagnostic Assessment</h3>
          <p className="subtitle">Every new student at Ignite starts with a diagnostic in their weak subject in the first session. We identify which IB topic strands are dragging the grade down (in Maths AA SL it is usually calculus and statistics; in Economics, it is usually Paper 2 data response; in Chemistry, it is usually thermodynamics and kinetics). The lesson plan is built around closing those specific strands.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>2. IBDP Syllabus Completion Aligned With The Two-Year Calendar</h3>
          <p className="subtitle">For the May session candidates, planning aims for full syllabus coverage by mid-February of Year 2, leaving roughly 10 weeks for revision, mocks, and paper practice. November session candidates follow the same arc as six months back. Year 1 students work to a steadier pace, with first-IA submissions and EE topic registration falling in their last term.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>3. IBDP Exam Strategies For Command Terms, Time Allocation, And Markscheme Alignment</h3>
          <p className="subtitle">IB papers reward students who answer the question that was actually asked, not the one they remember preparing for. We coach students on IB command terms (analyse, evaluate, justify, distinguish), markscheme-aligned response writing, and time allocation across paper sections. These are skills, not knowledge, and they respond well to deliberate practice.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>4. IBDP Past Paper Solving Across Paper 1, Paper 2, And Paper 3</h3>
          <p className="subtitle">We work through past papers from May 2018 onwards across Paper 1, Paper 2, and Paper 3 (HL only for most subjects). Each question is mapped to the IB markscheme, command terms are decoded, and students work under timed exam conditions so the pacing becomes second nature.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>5. Complete IBDP Revision Across All Six Subject Groups</h3>
          <p className="subtitle">Revision is organised by IB subject group: Studies in Language and Literature, Language Acquisition, Individuals and Societies, Sciences, Mathematics, and the Arts. Each group has its own paper structure and rubric weighting. We build the revision plan around the IB syllabus document for the student's specific subject and level.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>6. IBDP Subject Support At HL And SL With Option Topics</h3>
          <p className="subtitle">Subject support covers the full HL syllabus, including extension topics and Paper 3. For Sciences, this means HL options like Astrophysics or Biotechnology. For Maths AA HL, this includes proof, vectors, and calculus extension content. For languages, this includes the prescribed reading list. We tailor sessions to the exact level and option the student is on.</p>
          <br />

          <h2 className="title">Why Parents And IBDP Students In Dubai Choose Ignite Training Institute?</h2>
          <p className="subtitle">Ignite Training Institute has been guiding IBDP students in Dubai for over 10 years, with tutors who specialise in the IB Diploma Programme at HL and SL across all six subject groups. We back every enrolment with a free demo class so families can assess fit before committing, and we run dedicated programmes for both May and November exam sessions.<br /><br />Our IBDP students come to Ignite from IB World Schools across Dubai, and the work is split across two formats. Bespoke One-on-One Tutoring suits students who need fully individualised pacing or are pushing a weak HL subject up before predicted grades land. Small Group Tutoring (SGT) with 3 to 6 students at the same level works well for the 9-month Finals Prep Program, where peer questions and shared past-paper analysis add genuine value.<br /><br />One IBDP student, Kabir, came to Ignite for IB Business Management and Economics during his DP course. The syllabus was covered thoroughly, complex concepts were broken down so they were genuinely understandable, and his grades moved up steadily, putting him on track for a strong DP score. Another DP student, Maya, started with IB Maths and was sceptical that online tutoring could match face-to-face. After a few weeks, she found the online format just as effective, and she stayed online for the rest of her DP run.<br /><br />If your child needs help across all six subjects, focused support for one weak HL, or coaching through the EE and TOK essay, Ignite can match them with the right IBDP tutor and the right course format. Book a <a href="https://ignitetraininginstitute.com/join-free-demo-class" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>free demo class</a> to meet a tutor and see how a real IBDP session would work for your child, or <a href="https://ignitetraininginstitute.com/contact-us" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>contact us</a> to discuss a study plan.</p>
          <br />

          <h2 className="title">Exclusive IBDP Resources</h2>
          <br />
          <div className="schemalinks">
            <a href="https://ignitetraininginstitute.com/blog/ib-diploma">IB Diploma</a> | <a href="https://ignitetraininginstitute.com/blog/benefits-of-ib-diploma">Benefits Of The IB Diploma Programme</a> | <a href="https://ignitetraininginstitute.com/blog/ib-bilingual-diploma">IB Bilingual Diploma</a> | <a href="https://ignitetraininginstitute.com/blog/ib-diploma-gpa-calculator">IB Diploma GPA Calculator</a> | <a href="https://ignitetraininginstitute.com/blog/ibdp-subjects-2">IBDP Subjects</a> | <a href="https://ignitetraininginstitute.com/blog/colleges-that-accept-ib-diploma">Colleges That Accept IB Diploma</a> | <a href="https://ignitetraininginstitute.com/blog/ib-curriculum-vs-british-curriculum">IB Curriculum Vs British Curriculum</a> | <a href="https://ignitetraininginstitute.com/blog/a-levels-vs-ibdp-comparison">IB VS A Levels</a> | <a href="https://ignitetraininginstitute.com/blog/ib-vs-igcse-program">IB VS IGCSE</a> | <a href="https://ignitetraininginstitute.com/blog/ib-vs-ap-comparison">IB VS AP Difficulty</a> | <a href="https://ignitetraininginstitute.com/blog/ib-certificate-vs-ib-diploma">IB Certificate Vs IB Diploma</a> | <a href="https://ignitetraininginstitute.com/blog/ib-vs-icse">IB VS ICSE</a> | <a href="https://ignitetraininginstitute.com/blog/ibcp-vs-ibdp">IBCP VS IBDP</a> | <a href="https://ignitetraininginstitute.com/blog/cbse-or-ib-board">CBSE Or IB</a> | <a href="https://ignitetraininginstitute.com/blog/a-levels-vs-ibdp-comparison">A-Levels VS IBDP</a> | <a href="https://ignitetraininginstitute.com/blog/ib-schools-in-dubai">IB Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/blog/ib-schools-in-abu-dhabi">IB Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/blog/ibdp-schools-in-dubai">IBDP Schools In Dubai</a>
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
