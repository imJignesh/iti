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
      question: "Which Biology Courses Do Ignite's Biology Tutors In Dubai Cover?",
      answer: "Ignite's Biology tutors in Dubai cover Cambridge IGCSE Biology (0610), GCSE Biology (AQA, OCR, Edexcel), Cambridge International AS and A-Level Biology (9700), UK A-Level Biology boards, IB Biology (SL and HL, plus MYP Sciences), and AP Biology from the College Board. Most students join us between Year 7 and Year 13, or Grades 11 to 12. Tutoring is matched to the exact board and level your school follows.",
    },
    {
      question: "What Modifications Were Made to the Updated IB Biology Syllabus (First Examinations 2025)?",
      answer: "The IB Biology course was significantly redesigned, with first exams in May 2025. Content is now organised around four themes (Unity and Diversity, Form and Function, Interaction and Interdependence, Continuity and Change) rather than numbered topics. Paper 3 has been removed, so students now sit only Paper 1 and Paper 2. The optional topics were folded into the core, and the Internal Assessment remains worth 20%.",
    },
    {
      question: "How Do Ignite's Tutors Support The IB Biology Internal Assessment?",
      answer: "The IB Biology Internal Assessment is an individual investigation worth 20% of the final grade, completed in around 10 hours of class time. Our tutors support students through choosing a focused research question, designing a valid method, processing data, and writing the analysis and evaluation against the IB criteria. The most common mark loss is a research question that's too broad, so we narrow it early before any data is collected.",
    },
    {
      question: "Are Private Biology Tutoring Sessions In Dubai Available Online Or In Person?",
      answer: "Both. We run in-centre sessions at our two Dubai locations (DIFC and JLT), plus one-to-one online sessions for students across the wider UAE or with packed schedules. Online sessions use the same tutors and lesson structure as in-centre ones, with screen-sharing for diagrams, data questions, and past paper review. Most students searching for a biology tutor near me use both formats across the year, switching to online during heavy exam weeks.",
    },
    {
      question: "Which Biology Topics Do Students Most Often Need Help With?",
      answer: "The topics students struggle with most are genetics and inheritance, cell biology and biochemistry, human physiology, and ecology. Genetics tends to cause problems because it combines abstract concepts with problem-solving, while physiology has a heavy volume of interlinked detail. There are also numerous requests for assistance with questions related to data analysis and graph interpretation, which now hold considerable importance in IB, IGCSE, A-Level, and AP examinations.",
    },
    {
      question: "How Soon Should A Student Start Biology Tutoring Before Their Board Exams?",
      answer: "For IGCSE and A-Level Biology, three to six months of weekly sessions before the May/June series is the sensible window. IB Diploma students benefit most from starting early in DP1, since the Internal Assessment investigation runs across the course. AP Biology students need at least four months before the May AP exam window. Earlier starts let us spread practical work, past papers, and data-question practice across the full preparation arc.",
    }
  ];

  return (
    <div
      className=" d-flex justify-content-center align-items-center bg-white mx-auto fade-in-section subject-faq"
      data-scroll
      data-scroll-class="is-inview"
      data-scroll-repeat
      style={{
        marginBottom: isMobile ? "0px" : "0",
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
          padding: isMobile ? "80px 10px" : "3rem 5rem",
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
                fontSize: isHighDpi ? "1.75rem" : isMobile ? "17px" : "2rem"
              }}
            >
              Everything You Need To Know About <br /> <span className="highlight"> Biology</span> Tutoring
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
              Here are some of the most common questions about our Biology tutoring services.            </p>
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
                  className="overflow-hidden"
                  style={{
                    marginBottom: isMobile ? "10px" : "20px",
                    transition: "all 0.3s ease-in-out",
                    maxHeight: openIndex === index ? "10rem" : "0",
                  }}
                >
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
    font-size: 20px;
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