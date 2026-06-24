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
      question: "Which A-Level And AS-Level Subjects Does Ignite Tutor For In Dubai?",
      answer:
        "Ignite covers Pure Math, Statistics, Further Math, Physics, Chemistry, Biology, Computer Science, Economics, Business Studies, Accounting, English Language and Literature, French, Spanish, Psychology, and AS Level EVM. Subjects are tutored at both AS and A2, matched to the student's specific exam board across CAIE, Pearson Edexcel, and Oxford AQA.",
    },
    {
      question: "Which Exam Boards Does Ignite Cover (Edexcel, CAIE, Oxford AQA)?",
      answer:
        "Ignite tutors across all three British A-Level exam boards: Cambridge International (CAIE), Pearson Edexcel (both IAL and GCE), and Oxford International AQA. Tutors are matched to the student's specific board for each subject, with past paper practice and mark scheme work tailored to that board's exact specification.",
    },
    {
      question: "Does Ignite Offer Both One-On-One And Small Group A-Level Tutoring?",
      answer:
        "Yes. One-on-One tutoring runs year-round for students who need fully individualised pacing or are pushing a weak subject up. Small Group sessions (3 to 6 students at the same year and exam board) run as 10-month structured programmes for AS Year 12 and A-Level Year 13 cohorts, including over 70 hours of expert tutoring.",
    },
    {
      question: "How Does Ignite Prepare Students For A-Level Exams And Past Papers?",
      answer:
        "Sessions work through past papers across Edexcel, CAIE, and Oxford AQA, with each question mapped to the mark scheme and command terms decoded. Students sit timed mock papers under exam conditions, receive detailed paper review feedback, and work through unit-wise worksheets calibrated to their specific board's specification.",
    },
    {
      question: "Can Students Try A Free Demo Class Before Enrolling?",
      answer:
        "Yes. Every new student is offered a free demo class with the matched A-Level tutor before any enrolment commitment. The demo lets the student assess teaching style, ask exam-board-specific questions, and see how a real session runs. Parents typically use it to confirm fit before discussing a regular schedule.",
    },
    {
      question: "When Should Students Start A-Level Tutoring In Dubai?",
      answer:
        "Year 11 students benefit from summer bridging support before Year 12 starts. Year 12 students ideally start in September or October at the beginning of AS. Year 13 students benefit from starting after autumn mocks when predicted grades land. The most common pattern is Year 12 students who join in October and stay through Year 13 finals.",
    },
    {
      question: "Is Ignite's AS-Level Tuition Available For Year 12 Students?",
      answer:
        "Yes. AS-Level tuition runs as a 10-month group programme from September to June for Year 12 students, with over 70 hours of expert tutoring, full AS syllabus coverage, unit-wise worksheets tailored to Edexcel, CAIE, or Oxford AQA, and a mock exam series under timed conditions before May finals.",
    },
    {
      question: "Are Ignite's A-Level Classes Available Online For UAE Students?",
      answer:
        "Yes. Online A-Level classes are available across Year 12 and Year 13 for students in Dubai, Abu Dhabi, Sharjah, Ajman, and the wider UAE. Sessions run live with interactive whiteboards, real-time mark-scheme annotation, and recordings for review. Online suits Year 13 students particularly well given the heavier workload year.",
    },
    {
      question: "Can A-Level Tutors At Ignite Help Students Aiming For Top Universities?",
      answer:
        "Yes. A-Level tutors work with students applying to Russell Group universities, Oxbridge, US Ivy League, and top UAE universities. Predicted grade improvement happens through structured AS work and Year 13 paper technique. UCAS predictions submit by 14 January (15 October for Oxbridge and medicine), so the work needs to land before those windows.",
    },
    {
      question: "What Should Parents Look For When Hiring An A-Level Tutor In Dubai?",
      answer:
        "Look for exam-board-specific knowledge (CAIE Maths and Edexcel IAL Maths use different syllabus codes), genuine subject and year-level match (AS-only tutoring is different from A2), transparent progress tracking against mark schemes, and a teaching style your child responds to. A free demo class confirms fit before committing.",
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

              All You Need To Know About<br /><span className="highlight"> A Levels</span> Tutoring
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
              Learn how our expert guidance helps students master subjects & excel in final exams.
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