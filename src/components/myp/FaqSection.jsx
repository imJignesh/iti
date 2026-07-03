"use client";

import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHighDpi, setIsHighDpi] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);

      // Check for 1920px at 125% zoom (effective width = 1536px)
      setIsHighDpi(width >= 1536 && width <= 1919);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

    const faqData = [
    {
      question: "What Subjects Are Covered In IB MYP Tutoring At Ignite?",
      answer:
        "Ignite's IB MYP tutoring covers Maths Standard and Extended, Physics, Chemistry, Biology, Computer Science, Economics, Business Management, English Language and Literature, and French. Subjects are taught across all four MYP criteria for each year level, with Year 5 support extended to eAssessment preparation and Personal Project supervision.",
    },
    {
      question: "Is Ignite's MYP Tutoring Aligned With IB Criterion-Based Assessment?",
      answer:
        "Yes. Sessions are structured around the four MYP criteria (A, B, C, D, each scored out of 8\\) used by IB World Schools in Dubai. Tutors map student work against criterion descriptors, identify weak strands, and align ATL skill-building with what the IB rubric actually rewards.",
    },
    {
      question: "How Are Ignite's MYP Tutoring Sessions Personalised For Each Student?",
      answer:
        "Every new MYP student starts with a diagnostic in their weak subject. Tutors map current performance against each of the four MYP criteria for that subject, identify the specific criterion strands dragging the grade down, and build a personalised lesson plan around closing those gaps rather than re-teaching what the student already knows.",
    },
    {
      question: "Does Ignite Help With MYP Personal Projects And eAssessments?",
      answer:
        "Yes. Year 5 students get full Personal Project support across topic selection, supervisor meeting preparation, process journal review, and final report drafting against the four criteria. eAssessment support covers on-screen exam practice, ePortfolio structuring for Arts, Design, and PHE, and timed mock papers ahead of May and November sessions.",
    },
    {
      question: "Can Students Try A Free Demo Class Before Enrolling In MYP Tuition?",
      answer:
        "Yes. Every new student is offered a free demo class with the matched MYP tutor before any enrolment commitment. The demo lets the student assess teaching style, ask subject-specific questions, and see how a real session runs. Parents typically use it to confirm fit before discussing a regular schedule.",
    },
    {
      question: "How Does Ignite's MYP Tutoring Support The Transition To IBDP?",
      answer:
        "Year 5 MYP support is built to feed directly into IBDP readiness. We focus on the ATL skills the IBDP demands (academic writing, source evaluation, time management across multi-week tasks), help students choose between Maths Standard and Extended at MYP 4, and align Year 5 subject work with the HL or SL choices students will lock in at the start of Year 11\\.",
    },
    {
      question: "When Should Students Start MYP Tutoring In Dubai?",
      answer:
        "Most Grade 8-10 students benefit from starting MYP tutoring in Year 3 or Year 4 to build criterion-based understanding before Year 5\\. Year 5 students often start in the summer before Grade 10 to prepare for eAssessment and the Personal Project. Students switching curricula into the MYP usually benefit from starting in the first term.",
    },
    {
      question: "How Many MYP Coaching Sessions Should A Student Attend Each Week?",
      answer:
        "Most MYP students benefit from 1 to 2 sessions per week per weak subject during the regular term. Year 5 students often increase to 2 to 3 sessions per week closer to mocks or May or November eAssessments, with added Personal Project supervision blocks. Frequency is reviewed every few weeks based on the student's pace.",
    },
    {
      question: "Are Online IB MYP Classes In Dubai Available For Grade 8-10 Students?",
      answer:
        "Yes. Online IB MYP classes are available across Year 3, Year 4, and Year 5, with live interactive sessions, real-time rubric annotation, and session recordings for review. Online suits MYP students with packed school and activity schedules. In-person at the DIFC and JLT centres remains available for students who prefer face-to-face sessions.",
    },
    {
      question: "What Should Parents Look For When Hiring An MYP Tutor In Dubai?",
      answer:
        "Look for genuine MYP curriculum knowledge (the four criteria, ATL skills, Personal Project, eAssessment format), subject specialisation at the right year level, transparent progress reporting against the rubric, and a teaching style your child responds to. A free demo class confirms fit before committing to a regular schedule.",
    },
  ];

  // --- NEW: Define the titles ---
  const desktopTitle = (
    <>
      Common Questions About Our<span className="highlight"> Ignite</span> Tutoring Programs
    </>
  );

  const mobileTitle = (
    <>
      Common Questions About Our<span className="highlight"> Ignite</span> Tutoring Programs
    </>
  );

  // --- NEW: Choose the title based on the mobile state ---
  const currentTitle = isMobile ? mobileTitle : desktopTitle;

  return (
    <div
      className=" d-flex justify-content-center align-items-center bg-white mx-auto fade-in-section"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{
        marginBottom: isMobile ? "0" : "0px",
        maxWidth: isMobile ? "95vw" : "90vw",
        backgroundImage: 'url("/assets/faqbg.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "3rem",

      }}
    >
      <div
        className="w-100 overflow-hidden fade-in-section"
        data-scroll
        data-scroll-class="is-inview"
        data-scroll-repeat
        style={{
          padding: isMobile ? "2rem 1rem" : "3rem 5rem",
          display: "flex",
          alignItems: "center", // vertical center
          minHeight: "60vh", // keep section height
        }}
      >
        <div className="row g-2 w-100 align-items-center">
          {/* Left Section */}
          <div className={`col-lg-6 d-flex flex-column justify-content-center ${isMobile ? 'text-center' : ''}`}>
            {/* FAQ Header */}
            <div className="testimonialHeader" style={{ marginBottom: isMobile ? "0px" : "20px" }}>
              <h2 className="SubHeading" style={{ fontSize: isHighDpi ? "28px" : isMobile ? "" : "28px" }}>FAQS
              </h2>
            </div>

            {/* Main Title */}
            <h3
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section text-uppercase"
              style={{
                animationDelay: "0.2s",
                color: "#19245E",
                fontWeight: 700,
                margin: isMobile ? "20px auto" : "0 0 20px 0",
                fontSize: isHighDpi ? "1.75rem" : isMobile ? "1.2rem" : "2rem"
              }}
            >
              {currentTitle}

            </h3>

            <p
            className="fade-in-section"
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat
              style={{
                color: "#64748b",
                maxWidth: isMobile ? "100%" : "28rem",
                fontSize: isHighDpi ? "16px" : isMobile ? "14px" : "20px",
                lineHeight: isMobile ? "1.5" : "1.2",
                margin: isMobile ? "0 auto" : "0",
                paddingLeft: isMobile ? "0.5rem" : "0",
                paddingRight: isMobile ? "0.5rem" : "0",
                marginBottom: isMobile ? "15px" : "20px"
              }}
            >
              Learn how Ignite helps MYP students strengthen skills & confidence for future grades.
            </p>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 d-flex flex-column gap-3 fade-in-section" data-scroll
            data-scroll-class="is-inview"
            data-scroll-repeat>
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border-bottom"
                style={{ borderColor: "#cbd5e1" }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-100 d-flex justify-content-between align-items-center text-start btn btn-link text-decoration-none p-0"
                  style={{
                    paddingTop: "1.5rem",
                    paddingBottom: "1.5rem",
                  }}
                >
                  <h3
                    className="fw-bold h5 lh-sm mb-0"
                    style={{
                      color: "#1e3a8a",
                      fontSize: isHighDpi ? "20px" : isMobile ? "1.1rem" : "25px",
                      lineHeight: "100%",
                      letterSpacing: "1%",
                      width: "90%"
                    }}
                  >
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <Minus
                      style={{
                        color: "#1e3a8a",
                        width: isHighDpi ? "18px" : isMobile ? "18px" : "22px",
                        height: isHighDpi ? "18px" : isMobile ? "18px" : "22px",
                      }}
                    />
                  ) : (
                    <Plus
                      style={{
                        color: "#1e3a8a",
                        width: isHighDpi ? "18px" : isMobile ? "18px" : "22px",
                        height: isHighDpi ? "18px" : isMobile ? "18px" : "22px",
                      }}
                    />
                  )}
                </button>
                <div
                    style={{
                      display: "grid",
                      gridTemplateRows: openIndex === index ? "1fr" : "0fr",
                      transition: "grid-template-rows 0.3s ease-in-out",
                      marginBottom: isMobile ? "10px" : "20px",
                    }}
                >
                    <div style={{ overflow: "hidden" }}>
                    <p
                    style={{
                      color: "#64748b",
                      paddingRight: "1.5rem",
                      fontSize: isHighDpi ? "16px" : isMobile ? "0.9rem" : "20px",
                      lineHeight: isMobile ? "1.4" : "1.2"
                    }}
                  >
                    {faq.answer}
                  </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-section.is-inview {
          opacity: 1;
          transform: translateY(0);
        }
          p{
          margin-block:1rem;
          }
         //          .SubHeading {
//   font-size: 30px;
//   font-weight: 600;
//   line-height: 1;
//   text-transform: uppercase;
//   background: linear-gradient(to left, var(--skyblue-color), var(--blue-color));
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   position: relative;
//   padding: 22px;
//   display: inline-flex;  /* ✅ ensures proper alignment */
//   align-items: center;   /* ✅ centers text with icons */
// }

// .SubHeading:before,
// .SubHeading:after {
//   content: "";
//   width: 18px;   /* ✅ unchanged */
//   height: 36px;  /* ✅ unchanged */
//   position: absolute;
//   top: 50%;                /* center vertically */
//   transform: translateY(-50%); /* exact middle */
//   background: url(/images/heading-icon.webp);
//   background-size: contain;
//   background-repeat: no-repeat;
// }

.SubHeading:before {
  left: 0;
}
.SubHeading:after {
  right: 0;
}

@media (max-width: 1024px) {
  .SubHeading {
    font-size: 24px;
    padding: 0 22px; /* keep icons same size */
  }
}
@media (max-width: 575px) {
  .SubHeading {
    font-size: 0.9rem;
    padding: 0 22px; /* keep icons same size */
  }
    p{
    margnin-block:auto;
    }
    .SubHeading:before,
.SubHeading:after {
  content: "";
  width: 18px;   /* ✅ unchanged */
  height: 24px;  /* ✅ unchanged */
  position: absolute;
  top: 50%;                /* center vertically */
  transform: translateY(-50%); /* exact middle */
  background: url(/images/heading-icon.webp);
  background-size: contain;
  background-repeat: no-repeat;
}

}

}`}</style>
    </div>
  );
};

export default FAQSection;