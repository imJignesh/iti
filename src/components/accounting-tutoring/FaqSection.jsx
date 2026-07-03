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
      question: "Does The IB Diploma Offer A Standalone Accounting Course?",
      answer:
        "No, it does not. IB Group 3 (Individuals and Societies) has ten subjects, and Accounting is not one of them. Accounting content sits inside IB Business Management as Unit 3 (Finance and Accounts), covering final accounts, ratio analysis, cash flow, sources of finance, and investment appraisal. Many IB students still need tutoring on this material, which we provide as Business Management support rather than a separate IB Accounting course.",
    },
    {
      question: "Is There An AP Accounting Course?",
      answer:
        "There is no standalone AP Accounting course either. The closest fit is the new AP Business with Personal Finance, launching nationally for the 2026 to 2027 school year as part of AP Career Kickstart, which covers accounting as one of five core disciplines alongside entrepreneurship, marketing, finance, and management. Our AP tutors support students on the accounting content within that course, including financial statements and basic analysis.",
    },
    {
      question: "Do You Offer Online Accounting Tutoring As Well As In-Person?",
      answer:
        "Both. We run in-person sessions at our two Dubai centres (DIFC and JLT) and one-to-one online accounting tutoring for students across the wider UAE or with packed schedules. Online sessions use the same tutors and structure as in-centre ones, with screen-sharing for working through ledger entries, trial balances, and full statements line by line. Many students searching for an accounting tutor near me end up using both formats across the year.",
    },
    {
      question: "How Do Tutors Help With The Calculation-Heavy Parts Of Accounting?",
      answer:
        "Accounting marks are won on accuracy and presentation, not just final answers. Our tutors drill the double-entry logic first, since most calculation errors trace back to a misapplied debit or credit. We then build the format discipline that mark schemes reward: correct headings, dates, narrations, and balance carrying-forward. Past paper questions are marked against the actual board mark scheme so students see exactly where method marks are being lost.",
    },
    {
      question: "How Soon Before Exams Should A Student Start Accounting Tutoring?",
      answer:
        "For IGCSE and A-Level Accounting, three to six months of weekly sessions before the May/June series is the sensible window. Accounting is cumulative, so foundation gaps from earlier in the course quietly break later topics, which is why earlier starts work better. Students taking the IB Business Management Finance and Accounts unit benefit from starting at the beginning of DP1, since the material carries through to the Internal Assessment.",
    },
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
              Which Accounting Courses And Boards Do <br /> <span className="highlight"> Ignite's</span> Tutors Cover?
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
              Ignite's accounting tutors in Dubai cover Cambridge IGCSE Accounting (0452, and the 9-1 graded 0985), Edexcel International GCSE Accounting, Cambridge International AS and A-Level Accounting (9706), and Edexcel International A Level Accounting (WAC11 and WAC12). We also support IB Diploma students with the Finance and Accounts unit of Business Management, and accounting fundamentals within the new AP Business with Personal Finance course launching in 2026.
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