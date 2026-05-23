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
          <h2 className="title">ACT Tutoring In Dubai, UAE, Built Around The Enhanced ACT Format</h2>
          <p className="subtitle">The ACT looks different in 2026 than it did even a year ago. The Enhanced ACT, which became the standard format on national Saturday testing in September 2025, has fewer questions, more time per question, and a Science section that is now optional rather than compulsory. For families in Dubai planning around US university applications, that single change reshapes how the test should be prepared for, how it sits alongside the IBDP or A-Level timetable, and which sections deserve the most coaching hours.<br /><br />At Ignite Training Institute, our <strong>ACT tutoring in Dubai, UAE</strong> is built directly around this new structure. Sessions cover the three composite-scoring sections (English, Math, and Reading) as the priority, with the optional Science and Writing sections layered in for students whose target universities still ask for them. The composite is now an average of just English, Math, and Reading, rounded to the nearest whole number on the 1 to 36 scale, <a href="https://www.compassprep.com/new-act-policies/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>according to the official ACT changes summary by Compass Prep</a>. Math has dropped from five answer choices to four, English passages are shorter, and students get roughly 18 percent more time per question across the board, <a href="https://www.kaptest.com/study/act/test-changes-2025/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>as detailed in Kaplan’s Enhanced ACT breakdown</a>.<br /><br />For Dubai students, this matters in a practical way. International ACT testing moved to the Enhanced format from September 2025, so anyone sitting the test in the UAE this year will face the new structure regardless of whether they choose paper or online. Knowing what is on the test, what counts toward the composite, and where to invest study time is the foundation every effective coaching plan needs.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">What Is The ACT And How Is It Different From The SAT For Dubai Students?</h2>
          <p className="subtitle">The ACT and the Digital SAT are both accepted by US universities, but they measure different things and suit different students. The ACT is content-driven and section-based, with separate scores in English, Math, and Reading that average into a single composite out of 36. The Digital SAT is shorter, fully adaptive, and combines Reading and Writing into one section with Math as the other, scoring on a 1600 scale. Most US universities accept either equally, including all of the Ivy League and the University of California system.<br /><br />Dubai students often choose between the two based on three factors: pace, science aptitude, and how their school curriculum aligns. ACT questions tend to be more straightforward but come faster, which suits students who can work quickly and accurately. The SAT gives more time per question but rewards careful reasoning under adaptive difficulty. Students who are strong in Science and want to showcase that strength often prefer the ACT because the optional Science section still produces a separate, reportable score that helps STEM applications.<br /><br />A practical note for Dubai families: if a student is preparing for IGCSE or IB exams in the same year, the ACT’s linear, predictable structure is often easier to slot around school assessments. Our <a href="https://ignitetraininginstitute.com/blog/sat-vs-igcse" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>SAT vs IGCSE comparison</a> covers the curriculum-side overlap if you are still weighing which standardised test to commit to.</p>
          <br />

          <h2 className="title">How ACT Coaching In Dubai Works At Ignite, From Diagnostic To Test Day</h2>
          <p className="subtitle">Effective ACT coaching is rarely about volume of practice. It is about identifying which sections cost a student the most points, then closing those gaps in a structured way. Our ACT coaching in Dubai follows a three-phase arc that most students complete in 8 to 16 weeks, depending on baseline score and target.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>#A Diagnostic Test That Tells You Which Sections Matter</h3>
          <p className="subtitle">Every student starts with a full-length, timed Enhanced ACT diagnostic. The output is not just a number. It is a section-by-section breakdown showing where time was lost, which question types were missed, and how performance held up under fatigue. From that single test we can see whether the student’s real challenge is grammar rules in English, geometry and algebra accuracy in Math, passage-mapping in Reading, or pacing across all three.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>#Personalized ACT Tuition In Dubai Based On The Gaps That Surface</h3>
          <p className="subtitle">From the diagnostic, we build a personalised ACT tuition in Dubai plan that allocates session hours where they will produce the largest score lift. A student strong in English but weak in Math gets more time with our <a href="https://ignitetraininginstitute.com/maths-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>specialised Maths tutors</a>. A student who reads slowly under timing pressure gets focused work with our <a href="https://ignitetraininginstitute.com/english-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>English tutoring support</a> on passage strategy and time discipline. The plan is reviewed roughly every three weeks and adjusted based on practice test data, not gut feel.<br /><br />The final phase is timed full-length practice under realistic conditions, usually two to four mocks in the four weeks before test day. We identify the errors, review each incorrect response, and eliminate the persistent patterns of mistakes. This is the source of the majority of score improvements during the final phase.</p>
          <br />

          <h2 className="title">ACT Courses For One-On-One And Small-Group Learning</h2>
          <p className="subtitle">There is no single right format for ACT courses. The honest answer is that one-on-one and small-group programmes serve different student profiles, and the better question is which one fits the student in front of you.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>#When One-On-One ACT Classes Make Sense</h3>
          <p className="subtitle">Our 6-week 1-on-1 programme is built for students who need targeted, fast-paced support. This usually means students with uneven section scores (for example, a strong 30 in Reading but a 22 in Math), students with a tight timeline before a specific test date, or students who simply learn faster when a tutor can stop and rebuild a single weak concept in the moment. Sessions are scheduled flexibly around school hours and can be in-person at our DIFC or JLT centres or fully online.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>#When The Group Programme Works Better</h3>
          <p className="subtitle">Our 10-week ACT group programme suits students with more time, a more even score profile, and a preference for collaborative learning. The first 6 weeks build the foundation across English, Math, Reading, and optionally Science. The final 4 weeks shift to ACT-style question drills, mock exams, and live review sessions where students learn from each other’s mistakes as much as their own. Group sizes are kept small so individual attention is still possible.<br /><br />Some students start in the group programme and add 1-on-1 hours for one specific section in the final weeks. That hybrid often produces the strongest score lift for the cost.</p>
          <br />

          <h2 className="title">How To Choose The Best ACT Tutor Or Coaching Centre In Dubai?</h2>
          <p className="subtitle">Most ACT tutoring centres in Dubai will tell you they are the best. Useful signal is in the specifics, not the claim. When evaluating an ACT tutor or coaching centre, the criteria that actually matter are practical and easy to verify on a free demo call.</p><ul className="subtitle"><li>ACT-specific teaching experience, not general tutoring experience, repurposed. Ask how many ACT students the tutor has coached in the last 12 months.</li><li>Awareness of the Enhanced ACT format. A tutor still teaching to the old 5-section, 215-question structure is teaching outdated content.</li><li>Access to recent, format-accurate practice tests. Older practice papers still help with skills, but timed mocks must reflect current section lengths and timing.</li><li>A clear diagnostic-to-plan workflow. The tutor should be able to explain what your first session’s output will look like and how it shapes the next four weeks.</li><li>Mock test cadence. One mock at the start, one mid-programme, and two to four in the final stretch is a reasonable benchmark.</li><li>Logistics that fit your week. Centre location (DIFC and JLT are both common in Dubai), online options for students outside the city, and scheduling that flexes around school exams.</li><li>A free demo or consultation. Any reputable centre should let you meet a tutor and ask questions before you commit.</li></ul><p className="subtitle">A coaching centre that can answer all of these clearly, with examples rather than slogans, is worth shortlisting. Centres that can only offer testimonials and a generic course outline are usually selling a template, not a plan.</p>
          <br />

          <h2 className="title">What To Expect From An ACT Test Preparation Centre In Dubai?</h2>
          <p className="subtitle">A good ACT test preparation centre does more than run sessions. It builds the structure that lets a student improve consistently across an 8 to 16 week programme, and it removes the logistical friction that often gets in the way for Dubai families balancing school, exams, and extracurriculars.<br /><br />At Ignite, the structure includes diagnostic and progress-tracking tests, in-house ACT study materials aligned to the Enhanced format, sessions delivered in-person at our centres in DIFC or JLT or online for students elsewhere in the UAE, and progress check-ins with parents at clear intervals. Students also get supported with college admissions context where it is relevant, since ACT prep rarely sits in isolation. Many of our students are simultaneously thinking about which universities to apply to, what their composite target should be for those universities, and how the ACT timeline fits with IB or A-Level exam season.<br /><br />That broader context shows up in our blog work too. Students who are preparing for the ACT frequently refer to resources such as our guides on applying to <a href="https://ignitetraininginstitute.com/blog/how-to-apply-for-harvard-university" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Harvard University</a> and <a href="https://ignitetraininginstitute.com/blog/how-to-get-into-an-ivy-league-university" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Ivy League admissions</a> to gain insight into the appropriate target score they should aim for. A test preparation centre that can support the academic and the application sides together saves families a lot of fragmented advice.</p>
          <br />

          <h2 className="title">ACT Preparation Timeline For Class Of 2026 And 2027 Students In Dubai</h2>
          <p className="subtitle">Timing is one of the most underrated factors in ACT scores. Starting too late forces rushed prep against IB or A-Level mocks. Beginning too soon results in deviation and a loss of momentum prior to the test that truly matters.<br /><br />For Class of 2026 students applying in the 2025-26 cycle, the standard window has now closed for early decision and most regular decision deadlines, and any remaining ACT sittings should be focused on score improvement for rolling-admission universities or scholarship consideration. For students in Year 12 or Grade 11 who are part of the Class of 2027, the optimal timeframe to take the first ACT is between February and June 2026, allowing for flexibility, leaving room for one retake in September or October 2026, and having the final composite locked in well before the October to January application window in late 2026.<br /><br />For students two years out (Class of 2028), the conversation is different. The focus should be on building the underlying English and Math skills the ACT tests, rather than ACT-specific drilling. Diagnostic testing in the final term of Year 11 or Grade 10 gives a useful baseline before formal prep begins.<br /><br />Whichever year a student is in, the calendar conversation is one we have on every demo call. The right timeline depends on the school, the curriculum, and the specific universities on the shortlist.</p>
          <br />

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
          border-radius: 30px;
          overflow: hidden;
        }

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
          
        }
            }
      `}</style>
    </div>
  );
}
