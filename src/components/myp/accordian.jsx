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
          <h2 className="title">MYP Tutors In Dubai For Grade 8 To 10 IB Students</h2>
          <p className="subtitle">MYP tutors in Dubai support students through Grades 8, 9, and 10, the years that map to MYP 3, MYP 4, and MYP 5 of the IB Middle Years Programme. At Ignite Training Institute, our IB MYP tutors in Dubai focus on subject mastery across the eight MYP subject groups, criterion-based assessment preparation, and the academic skills that decide how confidently a student moves into the IB Diploma Programme.<br /><br />The MYP is not a content-recall programme. It rewards inquiry, conceptual understanding, and the ability to apply skills in unfamiliar contexts. That shift catches a lot of capable students off guard, especially those moving in from CBSE, ICSE, or American curriculum backgrounds where mark schemes look very different. The students who reach out to Ignite are usually strong learners working through the gap between what their school grades them on and what an MYP rubric actually expects.<br /><br />Our work is shaped around that gap. We diagnose where the student sits against the four MYP criteria for each subject, build a weekly study plan around their school's pacing, and run focused sessions on the skills that move grades up. Year 5 students get added support for MYP eAssessment preparation and the Personal Project. Year 3 and Year 4 students get foundation-building work that pays off when external assessment lands.</p>
        </div>
        <div className="icon">{open ? <Minus size={20} /> : <Plus size={20} />}</div>
      </div>

      {/* Expanded Content */}
      {open && (
        <div className="expanded">
          <h2 className="title">How IB MYP Assessment Work? Criteria A To D & The 1-7 Grade</h2>
          <p className="subtitle">Every MYP subject is marked against four criteria, labelled A, B, C, and D, each scored out of 8. The four criterion scores total out of 32 and convert to a final 1-7 grade using IB grade boundaries. The criteria themselves vary by subject (for example, in Sciences they are Knowledge and Understanding, Inquiring and Designing, Processing and Evaluating, Reflecting on the Impacts of Science), but the structure is consistent: four equally weighted strands, each measuring a different skill.<br /><br />This matters more than it sounds. Criterion-based assessment means the student is judged against published descriptors, not against other students. A Year 9 Maths student who scores 6 out of 8 in Criterion A (Knowing and Understanding) but 3 out of 8 in Criterion D (Applying Mathematics in Real-Life Contexts) has a clear, specific gap to close. Effective MYP tutoring works against the rubric, not against a generic syllabus.<br /><br />The 1-7 conversion is also worth understanding. A 7 sits at 28 out of 32 and above. A 6 sits at 24-27. A 5 sits at 19-23. Below 14 is a 3 or lower. Most Dubai IB World Schools report MYP grades termly using these bands, and the gap between a 5 and a 6 is often a single weak criterion strand rather than a broad subject weakness. That diagnosis is where most of our tutoring work begins.</p>
          <br />

          <h2 className="title">IB MYP Tutoring In Dubai Across All Eight Subject Groups</h2>
          <p className="subtitle">IB MYP tutoring in Dubai at Ignite covers the eight MYP subject groups: Language and Literature, Language Acquisition, Individuals and Societies, Sciences, Mathematics, Arts, Design, and Physical and Health Education. We run focused subject support across <a href="https://ignitetraininginstitute.com/maths-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Maths</a> (Standard and Extended), <a href="https://ignitetraininginstitute.com/physics-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Physics</a>, <a href="https://ignitetraininginstitute.com/chemistry-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Chemistry</a>, <a href="https://ignitetraininginstitute.com/biology-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Biology</a>, <a href="https://ignitetraininginstitute.com/computer-science-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Computer Science</a>, <a href="https://ignitetraininginstitute.com/economics-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Economics</a>, <a href="https://ignitetraininginstitute.com/business-studies-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>Business Management</a>, <a href="https://ignitetraininginstitute.com/english-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>English Language and Literature</a>, and <a href="https://ignitetraininginstitute.com/french-tutor-in-dubai" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>French</a>.<br /><br />Subject specialisation matters in MYP because each subject has its own four-criterion rubric, its own command terms, and its own way of marking. A strong Sciences MYP tutor knows that Criterion B (Inquiring and Designing) rewards a clear hypothesis, controlled variables, and a justified method. A strong Maths MYP tutor knows that Criterion C (Communicating) rewards complete mathematical notation and structured working, not just the right answer. A strong English Language and Literature tutor knows that Criterion A (Analysing) wants close textual reading and inferential interpretation, not summary.<br /><br />Maths Standard versus Maths Extended is a choice that matters in Year 4 and Year 5. Extended Mathematics is the route students take if they are aiming for Maths AA HL in the IBDP, or for engineering and STEM degrees later. Standard Maths is the route most students take if their post-MYP pathway is Maths AI SL or social sciences. Getting the subject choice right at MYP 4 is much easier than reversing it later.</p>
          <br />

          <h2 className="title">MYP eAssessment & ePortfolio Preparation In Dubai, UAE</h2>
          <p className="subtitle">MYP eAssessment is the IB's externally validated assessment for Year 5 students. It runs in May and November sessions and consists of two formats. On-screen examinations of around two hours are externally marked by the IB across Language and Literature, Individuals and Societies, Sciences, Mathematics, and Interdisciplinary Learning. ePortfolios are submitted for Arts, Design, Physical and Health Education, and Language Acquisition, marked by the school and externally moderated by the IB. Together with the Personal Project, the eight required eAssessments lead to the IB MYP Certificate, with each component graded 1-7.<br /><br />One thing parents often miss: MYP eAssessment is optional at the school level. Some Dubai IB World Schools register their students for it; others issue an internal school-based MYP Certificate or Record of Participation without external IB validation. If you are unsure where your child's school sits, ask the MYP coordinator directly. Tutoring strategy shifts depending on the answer.<br /><br />For schools that do register for eAssessment, the on-screen format needs deliberate practice. Students sit at a screen for two hours, type extended responses under timed conditions, and work with media-rich question stems that draw on global contexts announced six months ahead of each session. Ignite's MYP eAssessment preparation runs through past on-screen exam practice, command-term breakdown (analyse, evaluate, justify, compare and contrast, distinguish), and timed mock papers in the months before the May or November sitting.<br /><br />For ePortfolio subjects, the work happens earlier in the year. We support students in selecting evidence, structuring their portfolio against the criteria, and refining their reflective commentary before the school submits the sample for external moderation.</p>
          <br />

          <h2 className="title">The MYP Personal Project: Year 5 Independent Inquiry Support</h2>
          <p className="subtitle">The Personal Project is mandatory for every Year 5 MYP student, regardless of whether the school registers for eAssessment. It is a self-directed inquiry of around 3,000 words, supported by a process journal and a final product. The project is marked against four criteria (Planning, Applying Skills, Reflecting, and a process journal component), each scored out of 8.<br /><br />Most students find the Personal Project hard for the same reason: it is the first time they have been asked to design and manage a multi-month research project on their own. There is no fixed answer, no question paper, and no teacher pacing the work week by week. The process journal is where most marks are won or lost. A weak journal that captures only outcome scores low on Reflection. A strong journal that captures decisions, problems encountered, and what the student learned from each iteration scores high.<br /><br />Ignite's Personal Project support is a structured part of our MYP tuition in Dubai for Year 5 students. We help students with topic selection in the early months (a topic with a clear product is much easier to assess than an abstract one), structured supervisor meeting preparation, weekly process journal review, and final report drafting against the rubric. The Personal Project sits in the gradebook for the IB MYP Certificate, so the work is worth doing properly, not at the last minute.</p>
          <br />

          <h2 className="title">IB MYP Coaching In Dubai For ATL Skills And MYP-To-DP Transition</h2>
          <p className="subtitle">ATL skills (Approaches to Learning) sit at the centre of the MYP and are the single biggest predictor of how well a student will handle the IBDP after Grade 10. There are five ATL skill clusters: Communication, Social, Self-Management, Research, and Thinking. They are not assessed as a separate subject. They are embedded in every MYP criterion across every subject, which is why students who develop them early have a much smoother transition into Year 11 of the Diploma Programme.<br /><br />IB MYP coaching at Ignite focuses on the ATL skills that hold students back most often: time management for multi-week assignments, structured note-taking and information processing, source evaluation and academic integrity, and academic writing in a criterion-based context. These skills carry directly into the IBDP, where students will manage Internal Assessments across six subjects, an Extended Essay, TOK essays, and Paper 2 timed essays.<br /><br />The MYP-to-DP transition is the part most parents underestimate. Year 11 is not just harder content. It is six subjects taught simultaneously at HL or SL, written under the IB rubric, with IA submissions starting in the first term. Students who finish MYP with strong ATL skills find this manageable. Students who do not usually spend the first DP term catching up on skills they should have built in MYP. Coaching the ATL gap during Grade 10 is much easier than catching up after the move.</p>
          <br />

          <h2 className="title">Online MYP Classes In Dubai Vs In-Person Tutoring: Which Format Works?</h2>
          <p className="subtitle">Online MYP classes in Dubai work well for Grade 8-10 students with packed school and activity schedules. CAS-equivalent service hours, sports commitments, and family logistics often eat into evening tutoring availability. Cutting commute time by switching to online sessions usually returns 2 to 4 hours per week to the student, and at the MYP level, that time tends to convert into homework completion and reading.<br /><br />In-person MYP tutoring at Ignite's DIFC and JLT centres still suits some students better, particularly those working on Maths or Sciences, where shared whiteboard work speeds up problem-solving, or those who focus better in a structured tutoring environment. Our DIFC and JLT centres serve families across Sheikh Zayed Road, Downtown, Business Bay, JLT, JBR, and Dubai Marina.<br /><br />Small Group Tutoring (SGT) with three to six students at the same year and pace is also available across both formats. SGT works particularly well for the 9-month MYP eAssessments Prep Program, where the cohort moves together through past on-screen exam practice, peer-reviewed responses, and group discussion of command terms. For Year 3 and Year 4 students who are still building foundations, the choice between formats matters less than the regularity of sessions.</p>
          <br />

          <h2 className="title">How Does Ignite's MYP Tutoring Guide Students To Success?</h2>
          <p className="subtitle">Ignite's MYP training is built around six teaching pillars that map directly to how MYP students are assessed. These run across both Ignite MYP courses, the year-round Bespoke One-on-One Tutoring For IB MYP, and the 9-month MYP eAssessments Prep Program In Groups.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>1. MYP Subject Support At Standard And Extended Levels</h3>
          <p className="subtitle">Subject support covers the full MYP syllabus at the level the student is taking. Maths Extended includes additional content beyond Standard, including more advanced algebra, statistics, and applications in real-world contexts. Science support covers both the school's chosen course and the cross-cutting concepts the IB rubric expects. Language support covers both Language and Literature and Language Acquisition pathways.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>2. MYP Personalised Training Based On Diagnostic Assessment</h3>
          <p className="subtitle">Every new student at Ignite starts with a diagnostic in their weak subject in the first session. We map the student's current performance against each of the four MYP criteria for that subject and identify where the gap actually sits (in Maths it is often Criterion D, Applying Mathematics in Real-Life Contexts; in Sciences it is often Criterion B, Inquiring and Designing). The lesson plan is built around closing those specific criterion gaps.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>3. MYP Syllabus Completion Aligned With School Pacing</h3>
          <p className="subtitle">We align with the student's school pacing rather than running a parallel curriculum. For Dubai IB World Schools, this means tutoring tracks the unit the student is currently studying at school, with extension work added where the student is ahead and remedial work added where they are behind. For Year 5 students, the calendar shifts towards eAssessment and Personal Project work in the final term.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>4. MYP Past Paper Solving And On-Screen Exam Practice</h3>
          <p className="subtitle">For Year 5 students preparing for eAssessment, we work through past on-screen exam questions across Language and Literature, Individuals and Societies, Sciences, Mathematics, and Interdisciplinary Learning. Each question is mapped to the relevant MYP criterion, command terms are decoded, and students practise typing extended responses under two-hour timed conditions to build the specific stamina the on-screen format needs.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>5. Complete MYP Revision Across The Eight Subject Groups</h3>
          <p className="subtitle">Revision is organised by MYP subject group, with each subject's four criteria as the structuring frame. We build the revision plan around the IB MYP subject guide for the student's specific year and school, not a generic template. Year 5 revision in particular runs against the prescribed global context, which the IB releases six months before each eAssessment session.</p>
          <br />

          <h3 className="title" style={{ fontSize: "1.1rem", marginTop: "1rem" }}>6. MYP Exam Strategies For Command Terms And Criterion Alignment</h3>
          <p className="subtitle">MYP papers and ePortfolio tasks reward students who answer the question that was actually asked, against the criterion that was being tested. We coach students on the IB MYP command terms (analyse, describe, explain, evaluate, justify, distinguish), on writing rubric-aligned responses that hit each strand of a criterion, and on managing time across the on-screen exam sections. These are skills, not knowledge, and they respond well to deliberate practice.</p>
          <br />

          <h2 className="title">Why Parents & IB MYP Students In Dubai Choose Ignite Training Institute?</h2>
          <p className="subtitle">Ignite Training Institute has been guiding IB students in Dubai for over 10 years, with tutors who specialise in MYP and DP across all eight MYP subject groups. We support Grade 8-10 students with over 1,000 IB-specific practice resources, run a dedicated 9-month MYP eAssessments Prep Program for Year 5 students, and back every enrolment with a free demo class so families can assess fit before committing.<br /><br />Our MYP students come to Ignite from IB World Schools across Dubai, and the work happens in two formats. Bespoke One-on-One Tutoring suits students who need fully individualised pacing or are working on specific criterion gaps. The 9-month MYP eAssessments Prep Program runs as small group tutoring (3 to 6 students) for Year 5 cohorts moving together through external assessment preparation. Both formats are available online and in-person.<br /><br />If your child is in Grade 8, 9, or 10 and needs help across MYP subjects, focused support for a weak criterion strand, or guidance through the Personal Project and eAssessment cycle, Ignite can match them with the right MYP tutor and format. Book a <a href="https://ignitetraininginstitute.com/join-free-demo-class" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>free demo class</a> to meet a tutor and see how a real MYP session would work for your child, or <a href="https://ignitetraininginstitute.com/contact-us" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", color: "inherit" }}>contact us</a> to discuss a study plan.</p>
          <br />

          <h2 className="title">Exclusive MYP Resources</h2>
          <br />
          <div className="schemalinks">
            <a href="https://ignitetraininginstitute.com/blog/ib-myp-programme">IB MYP Programme Guide</a> | <a href="https://ignitetraininginstitute.com/blog/is-myp-certificate-important">Is MYP Certificate Important</a> | <a href="https://ignitetraininginstitute.com/blog/ib-schools-in-dubai">IB Schools In Dubai</a> | <a href="https://ignitetraininginstitute.com/blog/ib-schools-in-abu-dhabi">IB Schools In Abu Dhabi</a> | <a href="https://ignitetraininginstitute.com/blog/ibdp-schools-in-dubai">IBDP Schools In Dubai</a>
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
