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
      question: "Which Levels And Year Groups Does Ignite's British Curriculum Tutoring Cover?",
      answer:
        "Ignite covers Year 8 to Year 13 across the British Curriculum, including Key Stage 3 (Year 8 and Year 9), IGCSE and GCSE (Year 10 and Year 11), and AS and A-Level (Year 12 and Year 13). Subject support spans core academic subjects and the wider option-subject range across all three exam boards.",
    },
    {
      question: "Does Ignite Tutor For All Three British Exam Boards (CAIE, Edexcel, Oxford AQA)?",
      answer:
        "Yes. Ignite's British Curriculum tutoring covers Cambridge Assessment International Education (CAIE), Pearson Edexcel, and Oxford International AQA. Tutors are matched to the student's specific board for each subject, with past paper practice and mark-scheme work tailored to that board's exact specification and grading.",
    },
    {
      question: "Is Ignite's British Curriculum Tutoring Available Online And In Person?",
      answer:
        "Both formats are available across Year 8 to Year 13\\. In-person sessions run from our DIFC and JLT centres in Dubai. Online sessions run live with interactive whiteboards, real-time mark-scheme annotation, and recordings for review. Many students switch between formats depending on the subject and the week.",
    },
    {
      question: "Can Students Try A Free Demo Class Before Enrolling?",
      answer:
        "Yes. Every new student is offered a free demo class with a matched British Curriculum tutor before any enrolment commitment. The demo lets the student assess teaching style, ask exam-board-specific questions, and see how a real session runs. Parents typically use it to confirm fit before discussing a regular schedule.",
    },
    {
      question: "How Are Ignite's British Curriculum Sessions Personalised, And How Is Progress Tracked?",
      answer:
        "Every new student starts with a diagnostic in their weak subject. The tutor maps current performance against the specific exam board's mark scheme, identifies the topic strands holding the grade back, and builds a lesson plan around closing those gaps. Progress is reviewed every few weeks through unit tests, mock papers, and termly reports.",
    },
    {
      question: "Do Ignite's Tutors Cover Both IGCSE/GCSE And A-Level Within The Same Programme?",
      answer:
        "Yes. The same British Curriculum framework runs from Year 10 IGCSE through to Year 13 A-Level, and Ignite's tutors are matched to the level the student is sitting. Students often work with the same subject tutor through both stages, which keeps continuity across IGCSE, AS, and A2.",
    },
    {
      question: "When Should Students Start British Curriculum Tutoring In Dubai?",
      answer:
        "Most students benefit from starting in Year 9 to build foundations before IGCSE begins, or in early Year 10 once the IGCSE syllabus is set. Year 12 students benefit from starting at the beginning of AS to build technique before predicted grades land. Year 8 students can start earlier if foundation gaps are present.",
    },
    {
      question: "Is Ignite Suitable For Students From British International Schools In Dubai?",
      answer:
        "Yes. Ignite's tutors regularly work with students from British international schools across Dubai, including those following CAIE, Edexcel, and Oxford AQA. Lessons align with the school's pacing and specification rather than running a parallel curriculum, and tutors track the unit the student is currently studying at school.",
    },
    {
      question: "Does Ignite Offer Year 9, Year 10, Year 11, Year 12, And Year 13 Tutoring?",
      answer:
        "Yes. Ignite offers tutoring across all five secondary year groups. Year 9 tutoring focuses on KS3 consolidation and IGCSE option-subject preparation. Year 10 and Year 11 cover the IGCSE/GCSE syllabus and exam prep. Year 12 and Year 13 cover AS and A-Level, with predicted-grade work in the autumn of Year 13 for UCAS applications.",
    },
    {
      question: "What Should Parents Look For When Hiring A British Curriculum Tutor In Dubai?",
      answer:
        "Look for exam-board-specific knowledge (CAIE Maths is structured differently from Edexcel), genuine subject and year-level match, transparent progress tracking against mark schemes, and a teaching style your child responds to. Ask whether the tutor has taught your child's exact board and year before. A free demo class confirms fit.",
    },
  ];



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

              Key Questions About <span className="highlight"> British Curriculum</span> Tutoring Programs
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
              Understand how our British Curriculum tutoring ensures conceptual clarity & exam success.
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