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
      question: "What Is The Focus Of IBDP Tutoring At Ignite Training Institute?",
      answer:
        "Ignite's IBDP tutoring focuses on subject mastery across HL and SL, Internal Assessment guidance, Extended Essay supervision, TOK essay support, and Paper 1, Paper 2, and Paper 3 exam technique. Programmes are calibrated for both Year 1 and Year 2 students and aligned with May and November exam sessions.",
    },
    {
      question: "Do Ignite's IBDP Tutors Cover All Subjects Across HL And SL?",
      answer:
        "Yes. Ignite's IBDP tutors cover Maths AA, Maths AI, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, English Language and Literature, French Ab Initio and B, Spanish, and Psychology, at both HL and SL. HL coverage includes extension topics, option topics, and Paper 3 components.",
    },
    {
      question: "How Are Ignite's IBDP Tutoring Sessions Customised For Each Student?",
      answer:
        "Every new IBDP student starts with a diagnostic to map subject gaps and learning style. The tutor then builds a personalised plan around HL or SL choices, school pacing, target IB score, and university goals. The plan is reviewed every few weeks and adjusted as the student's predicted grade moves.",
    },
    {
      question: "Can Students Try A Free Demo Class Before Enrolling In IBDP Tuition?",
      answer:
        "Yes. Every new IBDP student is offered a free demo class with the matched tutor before any enrolment commitment. The demo lets the student assess teaching style, ask subject-specific questions, and see how a real IBDP session runs. Parents typically use it to confirm fit before discussing a regular schedule.",
    },
    {
      question: "How Does Ignite's IBDP Tutoring Support The Extended Essay, IA, And TOK?",
      answer:
        "Ignite tutors guide students through EE research question framing, supervisor meeting preparation, and final-draft polish. IA support covers topic selection and criterion-based drafting (typically Criteria A to E). For TOK, we work through prescribed essay titles, real-life-situation framing, and exhibition object selection with markscheme-aligned feedback.",
    },
    {
      question: "Can IBDP Tutoring Help Improve Predicted Grades And Final Diploma Scores?",
      answer:
        "Yes. Predicted grades are built from school mocks and IA scores submitted to UCAS by 14 January and US applications from November 1\\. Ignite's IBDP coaching focuses Year 2 work on the highest-leverage push to lift those grades before submission, then shifts to paper technique and timed practice for final exams.",
    },
    {
      question: "How Early Should Students Start IBDP Tutoring In Dubai?",
      answer:
        "Most students benefit from starting at the beginning of Year 1 (Grade 11\\) to build subject foundations, plan IA topics, and register the Extended Essay early. Year 2 students still gain from focused tutoring on predicted-grade improvement and paper technique, though the timeline is tighter once university applications open.",
    },
    {
      question: "Are Online IBDP Classes In Dubai Available For Year 1 And Year 2 Students?",
      answer:
        "Yes. Online IBDP classes are available across both Year 1 and Year 2, with live interactive sessions, real-time mark scheme annotation, and session recordings for review. Online suits Year 12 students particularly well because it returns 3 to 5 hours per week of commute time straight into revision during the heaviest workload year.",
    },
    {
      question: "How Many IBDP Coaching Sessions Per Week Does A Student Need?",
      answer:
        "Most IBDP students benefit from 1 to 2 sessions per week per weak subject during the regular term. Closer to school mocks or May or November final exams, students often increase to 3 sessions per week or add intensive revision blocks. Ignite reviews session frequency every few weeks based on the student's pace.",
    },
    {
      question: "What Should Parents Look For When Hiring An IBDP Tutor In Dubai?",
      answer:
        "Look for subject and level match (Maths AA HL is different from AI SL), genuine IBDP curriculum knowledge (IA criteria, EE supervision, TOK rubric), transparent progress reporting, and a teaching style your child responds to. Ask whether the tutor has taught your child's exact subject and level. A free demo class confirms fit.",
    },
  ];

  // --- NEW: Define the titles ---
  const desktopTitle = (
    <>

      Everything You Need To Know About <span className="highlight"> IBDP</span> Tutoring
    </>
  );

  const mobileTitle = (
    <>
      Everything You Need To Know About <span className="highlight"> IBDP</span> Tutoring
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
          padding: isMobile ? " 1rem" : "3rem 5rem",
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
              <span className="SubHeading" style={{ fontSize: isHighDpi ? "28px" : isMobile ? "" : "28px" }}>FAQS
              </span>
            </div>

            {/* Main Title */}
            <h2
              data-scroll
              data-scroll-class="is-inview"
              data-scroll-repeat="true"
              className="fade-in-section text-uppercase"
              style={{
                animationDelay: "0.2s",
                color: "#19245E",
                fontWeight: 700,
                margin: isMobile ? "20px auto" : "0 0 20px 0",
                fontSize: isHighDpi ? "1.75rem" : isMobile ? "20.4px" : "1.8rem"
              }}
            >
              {currentTitle}

            </h2>

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
                paddingLeft: isMobile ? "0" : "0",
                paddingRight: isMobile ? "0" : "0",
                marginBottom: isMobile ? "15px" : "20px"
              }}
            >
              Get answers on personalized IBDP study plans, exam prep, & subject support.
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
                  <span
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
                  </span>
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
    font-size: 15px;
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