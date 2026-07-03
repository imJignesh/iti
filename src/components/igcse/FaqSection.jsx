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
      question: "Which IGCSE Subjects Does Ignite Tutor For In Dubai?",
      answer:
        "Ignite covers IGCSE Maths (Core and Extended), Further Maths, Statistics, Physics, Chemistry, Biology, Computer Science and ICT, Double Award Science, Economics, Business Studies, Accounting, English Language, English Literature, French, Spanish, and Psychology. GCSE equivalents are also supported. Each subject is matched to the student's specific board across CAIE, Pearson Edexcel, or Oxford AQA.",
    },
    {
      question: "Which Exam Boards Does Ignite Cover (Edexcel, CAIE, Oxford AQA)?",
      answer:
        "Ignite tutors across all three IGCSE exam boards: Cambridge International (CAIE), Pearson Edexcel International, and Oxford International AQA. Tutors are matched to the student's specific board for each subject, with past paper practice, mark-scheme work, and unit-wise worksheets tailored to that board's exact syllabus code and specification.",
    },
    {
      question: "Does Ignite Offer Both One-On-One And Small Group IGCSE Tutoring?",
      answer:
        "Yes. Bespoke One-to-One Tutoring runs year-round for students who need individualised pacing across Years 8 to 10\\. Small Group programmes (3 to 6 students) include the IGCSE Year 10 Group and the IGCSE Finals Prep Group for Year 11 students writing May/June finals, with a structured 10-month syllabus coverage.",
    },
    {
      question: "How Does Ignite Prepare Students For IGCSE Exams And Past Papers?",
      answer:
        "Sessions work through past papers across Edexcel, CAIE, and Oxford AQA based on the student's specific board. Each question is mapped to the official mark scheme, command terms are decoded, and students sit timed mock papers under exam conditions. Detailed paper review sessions follow each mock so students see exactly where marks were lost.",
    },
    {
      question: "Can Students Try A Free Demo Class Before Enrolling In IGCSE Tuition?",
      answer:
        "Yes. Every new student is offered a free demo class with the matched IGCSE tutor before any enrolment commitment. The demo lets the student assess teaching style, ask exam-board-specific questions, and see how a real session runs. Parents typically use it to confirm fit before discussing a regular schedule.",
    },
    {
      question: "When Should Students Start IGCSE Tutoring In Dubai?",
      answer:
        "Year 9 students benefit from starting at the IGCSE option-choice point. Year 10 students ideally start in September at the beginning of the two-year syllabus, the most common entry point at Ignite. Year 11 students benefit from starting after autumn mocks. Year 8 students with curriculum-switch gaps should start earlier.",
    },
    {
      question: "Are Online IGCSE Classes Available In Dubai And Abu Dhabi?",
      answer:
        "Yes. Online IGCSE classes are available across Years 8 to 11 for students in Dubai, Abu Dhabi, Sharjah, Ajman, and the wider UAE. Sessions run live with interactive whiteboards, real-time mark-scheme annotation, and recordings for review. Year 11 students particularly benefit from online learning to save commute time during the heaviest workload year.",
    },
    {
      question: "Do Ignite's IGCSE Tutors Help With Coursework And Practical Assessments?",
      answer:
        "Yes. Tutors guide students through IGCSE Sciences practical assessments (Paper 6 for CAIE), coursework components in subjects like English and Languages, and project-based assessments. Work is structured against the official mark scheme to align with exam board criteria while building genuine subject understanding rather than surface compliance.",
    },
    {
      question: "How Many IGCSE Coaching Sessions Per Week Does A Student Usually Need?",
      answer:
        "Most IGCSE students benefit from 1 to 2 sessions per week per weak subject during the regular term. Year 11 students often increase to 2 to 3 sessions per week closer to mocks or May/June finals, with added past paper blocks. Frequency is reviewed every few weeks based on the student's pace.",
    },
    {
      question: "What Should Parents Look For When Hiring An IGCSE Tutor In Dubai?",
      answer:
        "Look for exam-board-specific knowledge (CAIE 0580 Maths is structured differently from Edexcel 4MA1), genuine subject and year-level match, transparent progress tracking against mark schemes, and a teaching style your child responds to. Ask whether the tutor has taught your child's exact board before. A free demo class confirms fit. **\\-------------------------------------------------------------------------------------------------------------------------------** **Schema** **1\\. FAQ** \\<script type=\"application/ld+json\"\\> { \"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": \\[ { \"@type\": \"Question\", \"name\": \"Which IGCSE Subjects Does Ignite Tutor For In Dubai?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Ignite covers IGCSE Maths (Core and Extended), Further Maths, Statistics, Physics, Chemistry, Biology, Computer Science and ICT, Double Award Science, Economics, Business Studies, Accounting, English Language, English Literature, French, Spanish, and Psychology. GCSE equivalents are also supported. Each subject is matched to the student's specific board across CAIE, Pearson Edexcel, or Oxford AQA.\" } }, { \"@type\": \"Question\", \"name\": \"Which Exam Boards Does Ignite Cover (Edexcel, CAIE, Oxford AQA)?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Ignite tutors across all three IGCSE exam boards: Cambridge International (CAIE), Pearson Edexcel International, and Oxford International AQA. Tutors are matched to the student's specific board for each subject, with past paper practice, mark-scheme work, and unit-wise worksheets tailored to that board's exact syllabus code and specification.\" } }, { \"@type\": \"Question\", \"name\": \"Does Ignite Offer Both One-On-One And Small Group IGCSE Tutoring?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes. Bespoke One-to-One Tutoring runs year-round for students who need individualised pacing across Years 8 to 10\\. Small Group programmes (3 to 6 students) include the IGCSE Year 10 Group and the IGCSE Finals Prep Group for Year 11 students writing May/June finals, with a structured 10-month syllabus coverage.\" } }, { \"@type\": \"Question\", \"name\": \"How Does Ignite Prepare Students For IGCSE Exams And Past Papers?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Sessions work through past papers across Edexcel, CAIE, and Oxford AQA based on the student's specific board. Each question is mapped to the official mark scheme, command terms are decoded, and students sit timed mock papers under exam conditions. Detailed paper review sessions follow each mock so students see exactly where marks were lost.\" } }, { \"@type\": \"Question\", \"name\": \"Can Students Try A Free Demo Class Before Enrolling In IGCSE Tuition?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes. Every new student is offered a free demo class with the matched IGCSE tutor before any enrolment commitment. The demo lets the student assess teaching style, ask exam-board-specific questions, and see how a real session runs. Parents typically use it to confirm fit before discussing a regular schedule.\" } }, { \"@type\": \"Question\", \"name\": \"When Should Students Start IGCSE Tutoring In Dubai?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Year 9 students benefit from starting at the IGCSE option-choice point. Year 10 students ideally start in September at the beginning of the two-year syllabus, the most common entry point at Ignite. Year 11 students benefit from starting after autumn mocks. Year 8 students with curriculum-switch gaps should start earlier.\" } }, { \"@type\": \"Question\", \"name\": \"Are Online IGCSE Classes Available In Dubai And Abu Dhabi?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes. Online IGCSE classes are available across Years 8 to 11 for students in Dubai, Abu Dhabi, Sharjah, Ajman, and the wider UAE. Sessions run live with interactive whiteboards, real-time mark-scheme annotation, and recordings for review. Year 11 students particularly benefit from online learning to save commute time during the heaviest workload year.\" } }, { \"@type\": \"Question\", \"name\": \"Do Ignite's IGCSE Tutors Help With Coursework And Practical Assessments?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes. Tutors guide students through IGCSE Sciences practical assessments (Paper 6 for CAIE), coursework components in subjects like English and Languages, and project-based assessments. Work is structured against the official mark scheme to align with exam board criteria while building genuine subject understanding rather than surface compliance.\" } }, { \"@type\": \"Question\", \"name\": \"How Many IGCSE Coaching Sessions Per Week Does A Student Usually Need?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Most IGCSE students benefit from 1 to 2 sessions per week per weak subject during the regular term. Year 11 students often increase to 2 to 3 sessions per week closer to mocks or May/June finals, with added past paper blocks. Frequency is reviewed every few weeks based on the student's pace.\" } }, { \"@type\": \"Question\", \"name\": \"What Should Parents Look For When Hiring An IGCSE Tutor In Dubai?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Look for exam-board-specific knowledge (CAIE 0580 Maths is structured differently from Edexcel 4MA1), genuine subject and year-level match, transparent progress tracking against mark schemes, and a teaching style your child responds to. Ask whether the tutor has taught your child's exact board before. A free demo class confirms fit.\" } } \\] } \\</script\\> **2\\. Breadcrumb** \\<script type=\"application/ld+json\"\\> { \"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": \\[ { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://ignitetraininginstitute.com/\" }, { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Courses\", \"item\": \"https://ignitetraininginstitute.com/courses/\" }, { \"@type\": \"ListItem\", \"position\": 3, \"name\": \"IGCSE Tutors In Dubai\", \"item\": \"https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai\" } \\] } \\</script\\> **3\\. ORGANIZATION (EducationalOrganization)** \\<script type=\"application/ld+json\"\\> { \"@context\": \"https://schema.org\", \"@type\": \"EducationalOrganization\", \"@id\": \"https://ignitetraininginstitute.com/\", \"name\": \"Ignite Training Institute\", \"alternateName\": \"Ignite Training Institute \\- Tutors In Dubai\", \"url\": \"https://ignitetraininginstitute.com/\", \"logo\": { \"@type\": \"ImageObject\", \"url\": \"https://ignitetraininginstitute.com/images/logo.webp\" }, \"image\": \"https://ignitetraininginstitute.com/assets/igcse.webp\", \"description\": \"Ignite Training Institute is a leading tutoring centre in Dubai offering expert IGCSE, IB, A-Level, AP, ACT, and homeschooling support across major curriculums including Edexcel, Cambridge (CAIE), and Oxford AQA.\", \"foundingDate\": \"2014\", \"slogan\": \"Revolutionizing The Way Students Learn\", \"telephone\": \"+971568357374\", \"email\": \"hello@ignitetraininginstitute.com\", \"priceRange\": \"$\", \"address\": \\[ { \"@type\": \"PostalAddress\", \"streetAddress\": \"1503, Al Moosa Tower 1, Sheikh Zayed Road, Near Emirates Towers Metro (Sea Side)\", \"addressLocality\": \"Dubai\", \"addressRegion\": \"Dubai\", \"addressCountry\": \"AE\" }, { \"@type\": \"PostalAddress\", \"streetAddress\": \"Tiffany Tower, Level 11, Cluster W, Jumeirah Lake Towers\", \"addressLocality\": \"Dubai\", \"addressRegion\": \"Dubai\", \"addressCountry\": \"AE\" } \\], \"areaServed\": \\[ { \"@type\": \"City\", \"name\": \"Dubai\" }, { \"@type\": \"Country\", \"name\": \"United Arab Emirates\" } \\], \"contactPoint\": \\[ { \"@type\": \"ContactPoint\", \"telephone\": \"+971568357374\", \"contactType\": \"customer service\", \"email\": \"hello@ignitetraininginstitute.com\", \"areaServed\": \"AE\", \"availableLanguage\": \\[\"English\", \"Arabic\"\\] }, { \"@type\": \"ContactPoint\", \"telephone\": \"+971568357374\", \"contactType\": \"sales\", \"url\": \"https://wa.me/+971568357374\", \"contactOption\": \"TollFree\", \"availableLanguage\": \"English\" } \\], \"sameAs\": \\[ \"https://www.facebook.com/ignitetraininginstitute\", \"https://www.instagram.com/ignitetraininginstitute/\", \"https://www.linkedin.com/company/ignite-training-institute\" \\], \"knowsAbout\": \\[ \"IGCSE Tutoring\", \"GCSE Tutoring\", \"IB Diploma Programme\", \"IB MYP\", \"A-Level Tutoring\", \"Advanced Placement\", \"ACT Preparation\", \"Edexcel Curriculum\", \"Cambridge CAIE\", \"Oxford AQA\", \"Homeschooling\" \\], \"hasCredential\": \\[ { \"@type\": \"EducationalOccupationalCredential\", \"credentialCategory\": \"Pearson Edexcel Approved Tuition Centre\" }, { \"@type\": \"EducationalOccupationalCredential\", \"credentialCategory\": \"Cambridge Assessment International Education\" }, { \"@type\": \"EducationalOccupationalCredential\", \"credentialCategory\": \"Oxford International AQA Examinations\" } \\] } \\</script\\> ![][image1] **4\\. COURSE \\+ REVIEWS \\+ AGGREGATE RATING** \\<script type=\"application/ld+json\"\\> { \"@context\": \"https://schema.org\", \"@type\": \"Course\", \"@id\": \"https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai\", \"name\": \"IGCSE Tutoring in Dubai\", \"description\": \"Expert IGCSE tutoring in Dubai across core and extended curriculum subjects. Personalised mentorship for Year 10 and Year 11 students preparing for Edexcel, Cambridge (CAIE), and Oxford AQA examinations.\", \"url\": \"https://ignitetraininginstitute.com/courses/igcse-tutors-in-dubai\", \"image\": \"https://ignitetraininginstitute.com/assets/igcse.webp\", \"educationalLevel\": \"Secondary Education (Year 10 and Year 11)\", \"educationalCredentialAwarded\": \"IGCSE / GCSE Qualification\", \"inLanguage\": \"en\", \"teaches\": \\[ \"IGCSE Mathematics\", \"IGCSE Sciences (Physics, Chemistry, Biology)\", \"IGCSE English Language and Literature\", \"IGCSE Business Studies\", \"IGCSE Economics\", \"IGCSE Accounting\", \"IGCSE Computer Science and ICT\" \\], \"provider\": { \"@type\": \"EducationalOrganization\", \"@id\": \"https://ignitetraininginstitute.com/\", \"name\": \"Ignite Training Institute\", \"url\": \"https://ignitetraininginstitute.com/\" }, \"audience\": { \"@type\": \"EducationalAudience\", \"educationalRole\": \"student\", \"audienceType\": \"Year 10 and Year 11 IGCSE students\" }, \"hasCourseInstance\": \\[ { \"@type\": \"CourseInstance\", \"name\": \"IGCSE / GCSE Finals Prep In Groups\", \"description\": \"A 10-month program from September to June with 80+ hours of expert-led tutoring for Year 11 students writing finals in May.\", \"courseMode\": \\[\"Blended\", \"Onsite\", \"Online\"\\], \"courseWorkload\": \"PT80H\" }, { \"@type\": \"CourseInstance\", \"name\": \"Bespoke One-To-One IGCSE Tutoring\", \"description\": \"Year-round IGCSE tutoring built around individual learning objectives with diagnostic assessment and flexible scheduling.\", \"courseMode\": \\[\"Blended\", \"Onsite\", \"Online\"\\] }, { \"@type\": \"CourseInstance\", \"name\": \"IGCSE / GCSE Year 10 Groups\", \"description\": \"A structured 10-month program for Year 10 students with 70+ hours of focused tutoring across all IGCSE subjects.\", \"courseMode\": \\[\"Blended\", \"Onsite\", \"Online\"\\], \"courseWorkload\": \"PT70H\" } \\], \"aggregateRating\": { \"@type\": \"AggregateRating\", \"ratingValue\": \"4.9\", \"bestRating\": \"5\", \"worstRating\": \"1\", \"ratingCount\": \"6\", \"reviewCount\": \"6\" }, \"review\": \\[ { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Zeynep Inan\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"I have been taking lessons at Ignite Training Institute for around three years. I have taken lessons for IGCSE science and math which has helped me achieve top grades. I have also taken lessons for IB math, biology, and Spanish. With the help of my trainers, I was able to achieve a good predicted and final exam grade which allowed me get offers from top universities in the UK such as UCL and University of Edinburgh.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Hassan Ali\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"This is the best tuition center in Dubai. Went from getting 5-6s in the start of my GCSEs to getting 8-9s in my actual GCSE exams. This place helped me a lot and has very good tutors as well.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Sushma Menon\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"I was referred to Ignite by a family member who had previously used their services and was highly satisfied. From the start, the coordinator, Mr. Ahzeb, demonstrated exceptional professionalism in his interactions with both parents and students. My daughter was initially struggling with economics, but under the guidance of Miss Harsha, the subject became much more approachable and understandable. Her teaching style made a significant difference in my daughter's confidence and performance. I would highly recommend this institute to anyone seeking additional academic support.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Ben Dunatov\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"Great tutoring service\\! Perfect for struggling GCSE students.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Rosie Seldon\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"The trainers were flexible and were able to help in difficult subjects like Physics. My son scored a 100/100 on one of his maths papers after working with the tutors. Great work.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Riyad Bouarissa\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"The business teacher deserves special recognition for outstanding instruction and genuine concern for my success. The sessions imparted comprehensive knowledge and equipped me with essential skills for my exams. Without such exceptional teaching, the overall value of the institute would have been compromised. While the management and other aspects of the institute are satisfactory, it is the teaching that truly made a significant impact on my learning experience.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } } \\] } \\</script\\> ![][image2] [image1]: <data:image/png;base64,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> [image2]: <data:image/png;base64,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>",
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

              Frequently Asked Questions About<span className="highlight"> IGCSE</span> Tutoring Support
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
              Discover how Ignite’s expert tutors guide you toward better grades & deeper understanding.
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