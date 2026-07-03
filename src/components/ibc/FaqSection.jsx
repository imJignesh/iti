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
      question: "Which IB Subjects Do Ignite's IB Tutors In Dubai Cover At SL And HL?",
      answer:
        "Ignite's IB tutors in Dubai cover Maths AA, Maths AI, Physics, Chemistry, Biology, Economics, Business Management, Computer Science, English Language and Literature, French Ab Initio and B, Spanish, and Psychology. All subjects are supported at both Standard Level and Higher Level, including HL extension topics and Paper 3 components where applicable.",
    },
    {
      question: "Is Ignite's IB Tutoring Aligned With The Latest IB Curriculum And Assessment Criteria?",
      answer:
        "Yes. Ignite's IB tutoring follows the current IB syllabus documents and assessment criteria for each subject, including the latest IA rubrics, Extended Essay supervision guidelines, and TOK essay prescribed titles. Tutors update their teaching materials with each IB curriculum revision so students are prepared for the exact paper they will sit.",
    },
    {
      question: "How Does Ignite's IB Tutoring Support Internal Assessments, The Extended Essay, And TOK?",
      answer:
        "Tutors guide students through IA topic selection, criteria-based drafting (Criteria A to E depending on subject), and final polish before submission. Extended Essay support covers research question framing, supervisor meeting preparation, and 4,000-word structuring. For TOK, students work through essay prompts and exhibition object selection with markscheme-aligned feedback.",
    },
    {
      question: "Can Students Try A Free Demo Class Before Enrolling In IB Tuition At Ignite?",
      answer:
        "Yes. Every new student is offered a free demo class with the matched IB tutor before any enrolment commitment. The demo lets students assess teaching style, ask subject-specific questions, and see how a real session runs. Parents typically use it to confirm fit before discussing a regular schedule.",
    },
    {
      question: "Does Ignite Offer One-On-One IB Tutoring Or Small Group Tutoring (SGT) In Dubai?",
      answer:
        "Both formats are available. One-on-one IB tutoring suits students who need fully individualised pacing or are working on weak HL subjects close to exams. Small Group Tutoring (SGT) runs with 2 to 4 students at similar levels and works well for Economics, Business Management, and English Lit where group discussion adds value.",
    },
    {
      question: "Is Online IB Tutoring Available For Students Outside Dubai Or In Other Emirates?",
      answer:
        "Yes. Online IB tutoring is available for students in Abu Dhabi, Sharjah, Ajman, and across the wider UAE, as well as international IB students in different time zones. Sessions run live with interactive whiteboards, real-time mark scheme annotation, and session recordings so students can review the lesson later.",
    },
    {
      question: "How Early Should Students Start IB Tuition In Dubai?",
      answer:
        "Most students benefit from starting IB tuition in Dubai at MYP Year 4 (Grade 9\\) or the start of DP Year 1 (Grade 11). MYP Year 4 helps with subject selection and rubric-based learning. DP Year 1 prevents the second-term IA workload pile-up. Students switching curricula often start earlier.",
    },
    {
      question: "How Many IB Coaching Sessions Per Week Does A Student Usually Need?",
      answer:
        "Most IB students benefit from 1 to 2 sessions per week per weak subject during the regular term. Closer to mock exams or the May or November sittings, students often increase to 3 sessions per week or add intensive revision blocks. Frequency is reviewed every few weeks based on the student's pace.",
    },
    {
      question: "Are Ignite's IB Classes Suitable For Students Transferring Mid-Year Or Switching From CBSE, IGCSE, Or A-Levels?",
      answer:
        "Yes. Mid-year transfers and curriculum-switch students are common at Ignite, especially from CBSE, ICSE, IGCSE, and A-Level backgrounds. We run a diagnostic in the first session to map gaps against the IB syllabus, then build an accelerated catch-up plan that prioritises the highest-weight topics and IB-specific skills like criterion-based assessment.",
    },
    {
      question: "What Should Parents Look For When Hiring An IB Tutor In Dubai?",
      answer:
        "Look for subject and level match (Maths AA HL is different from AI SL), genuine IB curriculum knowledge, transparent progress reporting, and a teaching style your child responds to. Ask whether the tutor has taught your child’s exact subject and level before. A free demo class helps confirm fit before committing.",
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
              Your Questions About IB Tutoring  <br /> <span className="highlight"> Answered</span> Clearly

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
              Explore how Ignite’s IB tutors simplify complex concepts & boost academic performance.
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