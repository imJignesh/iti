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
      question: "Which Levels And Curricula Does Ignite Support For Homeschooling In Dubai?",
      answer:
        "Ignite supports homeschooling and private candidate students across IGCSE (Years 10-11), A-Levels (Years 12-13), and AP (typically Years 11-12 or 12-13 in the US system). Subject coverage spans Maths, Sciences, English, Economics, Business Studies, Accounting, Computer Science, Languages, and Psychology across all three curricula.",
    },
    {
      question: "Is Ignite's Homeschooling Programme Fully Flexible With Individual Schedules?",
      answer:
        "Yes. Sessions are scheduled around the student's pace, academic goals, and daily calendar, with full flexibility on subject combinations and timing. Customised One-on-One programmes run weekday daytime sessions in a school-like format. Full Syllabus Group programmes follow a fixed 10-month September-to-June calendar with weekly cohort sessions for structure.",
    },
    {
      question: "Do Homeschooled Students Get Exam And Assessment Support At Ignite?",
      answer:
        "Yes. Students receive targeted exam preparation, past paper practice, board-specific mark-scheme work, and mock exams under timed conditions. Registration guidance for IGCSE, A-Level, and AP exam centre bookings is included, alongside support with deadlines, candidate registration codes, and any subject-specific practical components that affect board choice.",
    },
    {
      question: "Can Ignite Help With Selecting And Planning A Complete Homeschool Curriculum?",
      answer:
        "Yes. Academic advisors assist with curriculum planning across IGCSE, A-Levels, and AP, subject selection aligned to university targets, exam registration guidance for the relevant boards (CAIE, Pearson Edexcel, College Board), and personalised learning roadmaps that map subject pacing to the student's exam calendar.",
    },
    {
      question: "Can Students Try A Free Demo Class Before Enrolling In Homeschooling Tutoring?",
      answer:
        "Yes. Every new student is offered a free demo class with the matched homeschooling tutor before enrolment. The demo lets the student assess teaching style, ask exam-board-specific questions, and see how a real session runs. Parents typically use it to confirm fit before discussing a regular schedule.",
    },
    {
      question: "Is Private Candidacy Accepted By Universities In The UAE?",
      answer:
        "Yes. Private universities in the UAE generally accept private candidate qualifications, provided students hold recognised IGCSE, A-Level, or AP results that meet course entry requirements. UK and US universities also routinely accept private candidates, with applications going through UCAS for UK and the Common App for US universities.",
    },
    {
      question: "Can Homeschooled Students Sit IGCSE, A-Level, And AP Exams As Private Candidates In Dubai?",
      answer:
        "Yes. Homeschooled students register directly through approved exam centres in Dubai. The British Council and select international schools host CAIE and Edexcel exams. Specific test centres host AP. The exam paper, mark scheme, and grade are identical to what a school-registered student receives, and registration deadlines run several months before the sitting.",
    },
    {
      question: "Which Curriculum Is Best For Homeschooling In Dubai (IGCSE, A-Levels, Or AP)?",
      answer:
        "IGCSE works as the Year 10-11 foundation for most homeschooled students. A-Levels suit students targeting UK universities and want depth in 3-4 subjects. AP suits students targeting US universities and benefits from external College Board grading. Many homeschooled students combine routes, taking IGCSE first and then A-Levels or AP depending on university targets.",
    },
    {
      question: "Does Ignite Offer One-On-One And Small Group Homeschooling Sessions?",
      answer:
        "Yes. The Customised One-on-One Programme suits students who need fully individualised pacing, mid-year curriculum switches, or focused weak-subject support. The Full Syllabus Group Programme runs 3-6 students in small cohorts across a 10-month structured calendar. Both programmes are available online and in-person at the DIFC and JLT centres.",
    },
    {
      question: "How Much Does Homeschooling Cost In Dubai?",
      answer:
        "Homeschooling costs vary widely based on tutor hours, exam registrations, and any online curriculum providers used. Total costs are typically lower than private school fees (AED 25,000 to 100,000 per year for Years 10-13 at most British schools). Ignite provides upfront pricing per programme during the demo class so families can plan budgets accurately. **\\----------------------------------------------------------------------------------------------------------------------------** **Schema** **1\\. FAQ** \\<script type=\"application/ld+json\"\\> { \"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": \\[ { \"@type\": \"Question\", \"name\": \"Which Levels And Curricula Does Ignite Support For Homeschooling In Dubai?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Ignite supports homeschooling and private candidate students across IGCSE (Years 10-11), A-Levels (Years 12-13), and AP (typically Years 11-12 or 12-13 in the US system). Subject coverage spans Maths, Sciences, English, Economics, Business Studies, Accounting, Computer Science, Languages, and Psychology across all three curricula.\" } }, { \"@type\": \"Question\", \"name\": \"Is Ignite's Homeschooling Programme Fully Flexible With Individual Schedules?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes. Sessions are scheduled around the student's pace, academic goals, and daily calendar, with full flexibility on subject combinations and timing. Customised One-on-One programmes run weekday daytime sessions in a school-like format. Full Syllabus Group programmes follow a fixed 10-month September-to-June calendar with weekly cohort sessions for structure.\" } }, { \"@type\": \"Question\", \"name\": \"Do Homeschooled Students Get Exam And Assessment Support At Ignite?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes. Students receive targeted exam preparation, past paper practice, board-specific mark-scheme work, and mock exams under timed conditions. Registration guidance for IGCSE, A-Level, and AP exam centre bookings is included, alongside support with deadlines, candidate registration codes, and any subject-specific practical components that affect board choice.\" } }, { \"@type\": \"Question\", \"name\": \"Can Ignite Help With Selecting And Planning A Complete Homeschool Curriculum?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes. Academic advisors assist with curriculum planning across IGCSE, A-Levels, and AP, subject selection aligned to university targets, exam registration guidance for the relevant boards (CAIE, Pearson Edexcel, College Board), and personalised learning roadmaps that map subject pacing to the student's exam calendar.\" } }, { \"@type\": \"Question\", \"name\": \"Can Students Try A Free Demo Class Before Enrolling In Homeschooling Tutoring?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes. Every new student is offered a free demo class with the matched homeschooling tutor before enrolment. The demo lets the student assess teaching style, ask exam-board-specific questions, and see how a real session runs. Parents typically use it to confirm fit before discussing a regular schedule.\" } }, { \"@type\": \"Question\", \"name\": \"Is Private Candidacy Accepted By Universities In The UAE?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes. Private universities in the UAE generally accept private candidate qualifications, provided students hold recognised IGCSE, A-Level, or AP results that meet course entry requirements. UK and US universities also routinely accept private candidates, with applications going through UCAS for UK and the Common App for US universities.\" } }, { \"@type\": \"Question\", \"name\": \"Can Homeschooled Students Sit IGCSE, A-Level, And AP Exams As Private Candidates In Dubai?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes. Homeschooled students register directly through approved exam centres in Dubai. The British Council and select international schools host CAIE and Edexcel exams. Specific test centres host AP. The exam paper, mark scheme, and grade are identical to what a school-registered student receives, and registration deadlines run several months before the sitting.\" } }, { \"@type\": \"Question\", \"name\": \"Which Curriculum Is Best For Homeschooling In Dubai (IGCSE, A-Levels, Or AP)?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"IGCSE works as the Year 10-11 foundation for most homeschooled students. A-Levels suit students targeting UK universities and want depth in 3-4 subjects. AP suits students targeting US universities and benefits from external College Board grading. Many homeschooled students combine routes, taking IGCSE first and then A-Levels or AP depending on university targets.\" } }, { \"@type\": \"Question\", \"name\": \"Does Ignite Offer One-On-One And Small Group Homeschooling Sessions?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes. The Customised One-on-One Programme suits students who need fully individualised pacing, mid-year curriculum switches, or focused weak-subject support. The Full Syllabus Group Programme runs 3-6 students in small cohorts across a 10-month structured calendar. Both programmes are available online and in-person at the DIFC and JLT centres.\" } }, { \"@type\": \"Question\", \"name\": \"How Much Does Homeschooling Cost In Dubai?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Homeschooling costs vary widely based on tutor hours, exam registrations, and any online curriculum providers used. Total costs are typically lower than private school fees (AED 25,000 to 100,000 per year for Years 10-13 at most British schools). Ignite provides upfront pricing per programme during the demo class so families can plan budgets accurately.\" } } \\] } \\</script\\> **2\\. Breadcrumb** \\<script type=\"application/ld+json\"\\> { \"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": \\[ { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://ignitetraininginstitute.com/\" }, { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Courses\", \"item\": \"https://ignitetraininginstitute.com/courses/\" }, { \"@type\": \"ListItem\", \"position\": 3, \"name\": \"Homeschooling Tutors In Dubai\", \"item\": \"https://ignitetraininginstitute.com/courses/homeschooling-tutors-in-dubai\" } \\] } \\</script\\> **3\\. ORGANIZATION (EducationalOrganization)** \\<script type=\"application/ld+json\"\\> { \"@context\": \"https://schema.org\", \"@type\": \"EducationalOrganization\", \"@id\": \"https://ignitetraininginstitute.com/\", \"name\": \"Ignite Training Institute\", \"alternateName\": \"Ignite Training Institute \\- Tutors In Dubai\", \"url\": \"https://ignitetraininginstitute.com/\", \"logo\": { \"@type\": \"ImageObject\", \"url\": \"https://ignitetraininginstitute.com/images/logo.webp\" }, \"image\": \"https://ignitetraininginstitute.com/assets/homeschooling\\_bg\\_main.webp\", \"description\": \"Ignite Training Institute is a leading tutoring centre in Dubai offering expert homeschooling and private candidacy support across IGCSE, A-Levels, and AP, alongside IB, ACT, and other major curriculums.\", \"foundingDate\": \"2014\", \"slogan\": \"Revolutionizing The Way Students Learn\", \"telephone\": \"+971568357374\", \"email\": \"hello@ignitetraininginstitute.com\", \"priceRange\": \"$\", \"address\": \\[ { \"@type\": \"PostalAddress\", \"streetAddress\": \"1503, Al Moosa Tower 1, Sheikh Zayed Road, Near Emirates Towers Metro (Sea Side)\", \"addressLocality\": \"Dubai\", \"addressRegion\": \"Dubai\", \"addressCountry\": \"AE\" }, { \"@type\": \"PostalAddress\", \"streetAddress\": \"Tiffany Tower, Level 11, Cluster W, Jumeirah Lake Towers\", \"addressLocality\": \"Dubai\", \"addressRegion\": \"Dubai\", \"addressCountry\": \"AE\" } \\], \"areaServed\": \\[ { \"@type\": \"City\", \"name\": \"Dubai\" }, { \"@type\": \"Country\", \"name\": \"United Arab Emirates\" } \\], \"contactPoint\": \\[ { \"@type\": \"ContactPoint\", \"telephone\": \"+971568357374\", \"contactType\": \"customer service\", \"email\": \"hello@ignitetraininginstitute.com\", \"areaServed\": \"AE\", \"availableLanguage\": \\[\"English\", \"Arabic\"\\] }, { \"@type\": \"ContactPoint\", \"telephone\": \"+971568357374\", \"contactType\": \"sales\", \"url\": \"https://wa.me/+971568357374\", \"contactOption\": \"TollFree\", \"availableLanguage\": \"English\" } \\], \"sameAs\": \\[ \"https://www.facebook.com/ignitetraininginstitute\", \"https://www.instagram.com/ignitetraininginstitute/\", \"https://www.linkedin.com/company/ignite-training-institute\" \\], \"knowsAbout\": \\[ \"Homeschooling Support\", \"Private Candidacy\", \"IGCSE Tutoring\", \"A-Level Tutoring\", \"Advanced Placement\", \"IB Diploma Programme\", \"ACT Preparation\", \"Edexcel Curriculum\", \"Cambridge CAIE\", \"Oxford AQA\" \\], \"hasCredential\": \\[ { \"@type\": \"EducationalOccupationalCredential\", \"credentialCategory\": \"Pearson Edexcel Approved Tuition Centre\" }, { \"@type\": \"EducationalOccupationalCredential\", \"credentialCategory\": \"Cambridge Assessment International Education\" }, { \"@type\": \"EducationalOccupationalCredential\", \"credentialCategory\": \"Oxford International AQA Examinations\" } \\] } \\</script\\> ![][image1] **4\\. COURSE \\+ REVIEWS \\+ AGGREGATE RATING** \\<script type=\"application/ld+json\"\\> { \"@context\": \"https://schema.org\", \"@type\": \"Course\", \"@id\": \"https://ignitetraininginstitute.com/courses/homeschooling-tutors-in-dubai\", \"name\": \"Homeschooling and Private Candidacy Support in Dubai\", \"description\": \"Expert homeschooling and private candidacy tutoring in Dubai across IGCSE, A-Levels, and AP. Flexible, personalised academic support with structured exam prep, registration guidance, and one-on-one or small group programs for private candidates.\", \"url\": \"https://ignitetraininginstitute.com/courses/homeschooling-tutors-in-dubai\", \"image\": \"https://ignitetraininginstitute.com/assets/homeschooling\\_bg\\_main.webp\", \"educationalLevel\": \"Secondary and Pre-University Education\", \"educationalCredentialAwarded\": \"IGCSE, A-Level, and AP Qualifications\", \"inLanguage\": \"en\", \"teaches\": \\[ \"IGCSE Curriculum\", \"A-Level Curriculum\", \"Advanced Placement (AP) Curriculum\", \"Exam Registration Guidance\", \"Past Paper Practice\", \"Mock Exam Preparation\", \"Subject Selection and Curriculum Planning\" \\], \"provider\": { \"@type\": \"EducationalOrganization\", \"@id\": \"https://ignitetraininginstitute.com/\", \"name\": \"Ignite Training Institute\", \"url\": \"https://ignitetraininginstitute.com/\" }, \"audience\": { \"@type\": \"EducationalAudience\", \"educationalRole\": \"student\", \"audienceType\": \"Private candidates and homeschooled students preparing for IGCSE, A-Levels, and AP\" }, \"hasCourseInstance\": \\[ { \"@type\": \"CourseInstance\", \"name\": \"Customized One-On-One Training Program\", \"description\": \"A personalized course for private candidates with flexible weekday daytime classes, structured exam prep, unit tests, term-wise PTMs, and complete registration guidance for IGCSE, A-Levels, and AP.\", \"courseMode\": \\[\"Blended\", \"Onsite\", \"Online\"\\] }, { \"@type\": \"CourseInstance\", \"name\": \"Full Syllabus Group Training For Private Candidates\", \"description\": \"A structured 10-month program from September to June with 70+ hours of guided instruction per subject in small peer groups, covering the entire syllabus for IGCSE, A-Levels, and AP private candidates.\", \"courseMode\": \\[\"Blended\", \"Onsite\", \"Online\"\\], \"courseWorkload\": \"PT70H\" } \\], \"aggregateRating\": { \"@type\": \"AggregateRating\", \"ratingValue\": \"4.9\", \"bestRating\": \"5\", \"worstRating\": \"1\", \"ratingCount\": \"6\", \"reviewCount\": \"6\" }, \"review\": \\[ { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Melia\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"Ignite made my online schooling experience much more enjoyable. Everyone there are so lovely and fun, I truly felt comfortable in that space. The amount of support from everyone was wonderful and helped me thrive academically. There was no unnecessary pressure, they pushed me to do the best I could in a supportive way. I definitely recommend Ignite for homeschoolers / online students\\!\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Nicole Morgan\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"Sumit from Ignite went out of his way to arrange a tutor for my daughter on very short notice. The tutor was kind and competent and managed to quickly solve my daughter's doubt. Thank you\\! Highly recommend\\!\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Abdullah Al Noubani\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"Ignite provides high quality tutoring with knowledgeable tutors and provide beneficial resources.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Elham Abu Omar\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"Passionate teachers, supportive and flexible management.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Rayan\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"Homeschooling with Ignite gave me the structure and guidance I needed to stay focused. The tutors constantly checked on my progress and encouraged me to push my limits while still being very understanding. The sense of community they build makes you feel you're never alone in your studies. I can proudly say my academic journey has improved so much because of Ignite.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Lina\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"I took the private candidate route with Ignite, and it worked out perfectly. The flexible classes and constant support kept me motivated. It never felt like I was studying alone, and I felt fully prepared for my exams.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } } \\] } \\</script\\> ![][image2] [image1]: <data:image/png;base64,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> [image2]: <data:image/png;base64,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>",
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
                fontSize: isHighDpi ? "1.75rem" : isMobile ? "17px" : "2rem"
              }}
            >

              Common Questions About <span className="highlight"> Homeschooling & Private</span> Candidacy Support
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
              Learn how Ignite supports independent learners through flexible, structured homeschooling programs.
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