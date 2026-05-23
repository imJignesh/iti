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
      question: "What Are The Major Changes In The 2026 AP Exams For Students In Dubai?",
      answer:
        "Most 2026 AP exams are now delivered through the Bluebook testing app, with 16 subjects fully digital and 12 in hybrid format (digital multiple-choice, paper free-response). Calculator-permitted exams use a built-in Desmos calculator inside Bluebook. AP English Language and Literature multiple-choice questions have moved from 5 answer choices to 4, matching other AP subjects. AP Biology and AP Computer Science A have updated frameworks for 2025-26. Exam content and the 1 to 5 scoring scale remain unchanged.",
    },
    {
      question: "How Many AP Subjects Should A Student Take In Dubai?",
      answer:
        "Most US universities expect 4 to 8 AP exams over a high school career, with highly selective universities looking for 8 plus across diverse subject areas. For Dubai students, the practical sweet spot is 3 to 5 APs concentrated in subjects aligned with the intended university major, taken alongside IB or A-Level coursework. Quality matters more than quantity: scoring 4 or 5 in 4 well-chosen APs is more useful than scattered 3s across 8\\. Our [how many AP classes to take guide](https://ignitetraininginstitute.com/blog/how-many-ap-classes-to-take) walks through the decision.",
    },
    {
      question: "What Is A Realistic AP Score Improvement With Tutoring?",
      answer:
        "A realistic range with structured AP tutoring is 1 to 2 score points on the 1 to 5 scale, depending on starting point and subject. Students starting at a 2 or 3 typically see the largest gains because foundational gaps close quickly. Students starting at 4 and aiming for 5 see slower gains because each mark requires near-perfect FRQ technique. Ignite does not guarantee specific scores since outcomes depend on student effort and consistency, but every student gets a structured plan designed for their personal target.",
    },
    {
      question: "When Do AP Exams Take Place And When Should AP Prep Start In Dubai?",
      answer:
        "AP exams run over two weeks in May each year. The 2026 window is May 4 to May 15, with a late-testing period of May 18 to May 22 for approved scheduling conflicts. AP preparation is most effective when it begins in August or September of the same academic year, giving 8 to 9 months of structured coaching. Students who join later can still benefit from an intensive 3 to 4 month programme between January and April, particularly if their school has already covered most of the syllabus.",
    },
    {
      question: "What’s The Difference Between Fully Digital And Hybrid AP Exams?",
      answer:
        "Fully digital AP exams complete both multiple-choice and free-response sections inside the Bluebook app on a school-managed device, with responses submitted automatically. Hybrid digital exams use Bluebook for multiple-choice but require handwritten free-response answers in a paper booklet collected at the end. Hybrid is used for subjects needing equations, graphs, or chemical structures, including AP Calculus AB and BC, AP Chemistry, AP Physics 1, 2, and C, AP Biology, and AP Statistics. Fully digital covers AP English Language and Literature, AP Psychology, AP Macroeconomics and Microeconomics, and AP Computer Science Principles.",
    },
    {
      question: "Can AP Tutoring Run Alongside IB Or A-Level Coursework In Dubai?",
      answer:
        "Yes, and a significant share of Ignite’s AP students are doing exactly that. AP exam dates in early May overlap with both [IBDP exams](https://ignitetraininginstitute.com/courses/ibdp-tutors-in-dubai) and A-Level papers, so prep load needs careful sequencing. Students typically commit 2 to 3 hours per week to AP coaching during the main year, rising in the final 6 to 8 weeks. Skill overlap helps: A-Level Maths supports AP Calculus, IB HL Sciences map onto AP Physics, Chemistry, and Biology, and IB English needs minimal extra prep for AP English. Our [IB vs AP comparison](https://ignitetraininginstitute.com/blog/ib-vs-ap-comparison) covers how the pathways interact.",
    },
    {
      question: "How Much Does AP Tutoring Cost In Dubai?",
      answer:
        "AP tutoring costs in Dubai vary based on session format, hours per week, and number of subjects. Group AP programmes spread tutor cost across a small cohort and tend to be more affordable per hour. One-on-one tutoring is priced higher because the tutor is dedicated to a single student. Most reputable AP institutes work on package pricing aligned with the August to May academic year rather than open-ended hourly billing, which makes the total cost easier to plan for. Specific pricing is shared during the free demo call.",
    },
    {
      question: "Are AP Scores Useful For UK And UAE Universities Or Only US Colleges?",
      answer:
        "AP scores are useful well beyond US universities. Cambridge and Oxford both accept APs from international applicants, typically requesting 5 plus scores at 5 alongside other qualifications, [per Cambridge’s international entry requirements](https://www.undergraduate.study.cam.ac.uk/international-students/international-entry-requirements). Many Russell Group universities accept APs as a primary qualification for non-A-Level applicants. In the UAE, the standard pathway remains high school grades plus IELTS or TOEFL, with APs supporting select branch campuses. APs strengthen US applications most directly and can earn college credit, [as our credit guide explains](https://ignitetraininginstitute.com/blog/do-ap-classes-count-as-college-credit).",
    },
    {
      question: "Where In Dubai Does Ignite Run AP Classes, DIFC, JLT, Or Online?",
      answer:
        "Ignite Training Institute runs AP classes at two centres in Dubai. The DIFC location at Al Moosa Tower 1 on Sheikh Zayed Road is convenient for students near Emirates Towers Metro and Downtown. The JLT location at Tiffany Tower in Cluster W serves students from Dubai Marina, JBR, and the Greens. Both centres run the same programmes with the same tutor team. Live online AP classes are also available for students across the UAE, using shared digital whiteboards and the same diagnostic and mock exam workflow as in-person sessions.",
    },
    {
      question: "Are AP Exams Accepted In The UAE And By Top Dubai Schools?",
      answer:
        "AP exams are administered at several authorised schools across Dubai. American-curriculum institutions including Dubai American Academy, GEMS Wellington Academy, American School of Dubai, Universal American School, and Dubai International Academy offer AP courses and exam administration. Some IB and British-curriculum schools also support students taking APs independently. Students at schools that do not offer APs can register as external candidates through participating schools. The UAE Ministry of Education does not require APs for local university entry, but they strengthen applications to US and selective UK universities, including Cambridge and Oxford.",
    },
    {
      question: "Which AP Subjects Are The Most Popular Among Dubai Students?",
      answer:
        "The most commonly taken AP subjects among Dubai students are AP Calculus AB and BC, AP Chemistry, AP Physics 1 and 2, AP Biology, AP Statistics, AP Computer Science A and Principles, AP Macroeconomics and Microeconomics, AP Psychology, and AP English Language and Literature. STEM-heavy combinations dominate because most Dubai AP students target US universities for engineering, computer science, business, or pre-med. Language APs (French, Spanish) are popular among heritage speakers. Our guides on the [easiest AP exams](https://ignitetraininginstitute.com/blog/easiest-ap-exams) and [whether AP exams are hard](https://ignitetraininginstitute.com/blog/are-ap-exams-hard) help with subject choice.",
    },
    {
      question: "How Do I Start AP Tutoring At Ignite Training Institute?",
      answer:
        "The starting point is a [free AP demo class](https://ignitetraininginstitute.com/join-free-demo-class). The demo runs through a short diagnostic, a conversation about target AP subjects and score goals, and a walkthrough of how a personalised plan would look across the August to May programme. Parents are welcome to join, and there is no obligation afterwards. To book, request a demo through the website or [speak to an academic advisor](https://ignitetraininginstitute.com/contact-us) directly. **Schema** **1\\. FAQ** \\<script type=\"application/ld+json\"\\> { \"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": \\[ { \"@type\": \"Question\", \"name\": \"What Are The Major Changes In The 2026 AP Exams For Students In Dubai?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Most 2026 AP exams are now delivered through the Bluebook testing app, with 16 subjects fully digital and 12 in hybrid format (digital multiple-choice, paper free-response). Calculator-permitted exams use a built-in Desmos calculator inside Bluebook. AP English Language and Literature multiple-choice questions have moved from 5 answer choices to 4, matching other AP subjects. AP Biology and AP Computer Science A have updated frameworks for 2025-26. Exam content and the 1 to 5 scoring scale remain unchanged.\" } }, { \"@type\": \"Question\", \"name\": \"How Many AP Subjects Should A Student Take In Dubai?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Most US universities expect 4 to 8 AP exams over a high school career, with highly selective universities looking for 8 plus across diverse subject areas. For Dubai students, the practical sweet spot is 3 to 5 APs concentrated in subjects aligned with the intended university major, taken alongside IB or A-Level coursework. Quality matters more than quantity: scoring 4 or 5 in 4 well-chosen APs is more useful than scattered 3s across 8\\. Our how many AP classes to take guide walks through the decision.\" } }, { \"@type\": \"Question\", \"name\": \"What Is A Realistic AP Score Improvement With Tutoring?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"A realistic range with structured AP tutoring is 1 to 2 score points on the 1 to 5 scale, depending on starting point and subject. Students starting at a 2 or 3 typically see the largest gains because foundational gaps close quickly. Students starting at 4 and aiming for 5 see slower gains because each mark requires near-perfect FRQ technique. Ignite does not guarantee specific scores since outcomes depend on student effort and consistency, but every student gets a structured plan designed for their personal target.\" } }, { \"@type\": \"Question\", \"name\": \"When Do AP Exams Take Place And When Should AP Prep Start In Dubai?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"AP exams run over two weeks in May each year. The 2026 window is May 4 to May 15, with a late-testing period of May 18 to May 22 for approved scheduling conflicts. AP preparation is most effective when it begins in August or September of the same academic year, giving 8 to 9 months of structured coaching. Students who join later can still benefit from an intensive 3 to 4 month programme between January and April, particularly if their school has already covered most of the syllabus.\" } }, { \"@type\": \"Question\", \"name\": \"What’s The Difference Between Fully Digital And Hybrid AP Exams?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Fully digital AP exams complete both multiple-choice and free-response sections inside the Bluebook app on a school-managed device, with responses submitted automatically. Hybrid digital exams use Bluebook for multiple-choice but require handwritten free-response answers in a paper booklet collected at the end. Hybrid is used for subjects needing equations, graphs, or chemical structures, including AP Calculus AB and BC, AP Chemistry, AP Physics 1, 2, and C, AP Biology, and AP Statistics. Fully digital covers AP English Language and Literature, AP Psychology, AP Macroeconomics and Microeconomics, and AP Computer Science Principles.\" } }, { \"@type\": \"Question\", \"name\": \"Can AP Tutoring Run Alongside IB Or A-Level Coursework In Dubai?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes, and a significant share of Ignite’s AP students are doing exactly that. AP exam dates in early May overlap with both IBDP exams and A-Level papers, so prep load needs careful sequencing. Students typically commit 2 to 3 hours per week to AP coaching during the main year, rising in the final 6 to 8 weeks. Skill overlap helps: A-Level Maths supports AP Calculus, IB HL Sciences map onto AP Physics, Chemistry, and Biology, and IB English needs minimal extra prep for AP English. Our IB vs AP comparison covers how the pathways interact.\" } }, { \"@type\": \"Question\", \"name\": \"How Much Does AP Tutoring Cost In Dubai?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"AP tutoring costs in Dubai vary based on session format, hours per week, and number of subjects. Group AP programmes spread tutor cost across a small cohort and tend to be more affordable per hour. One-on-one tutoring is priced higher because the tutor is dedicated to a single student. Most reputable AP institutes work on package pricing aligned with the August to May academic year rather than open-ended hourly billing, which makes the total cost easier to plan for. Specific pricing is shared during the free demo call.\" } }, { \"@type\": \"Question\", \"name\": \"Are AP Scores Useful For UK And UAE Universities Or Only US Colleges?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"AP scores are useful well beyond US universities. Cambridge and Oxford both accept APs from international applicants, typically requesting 5 plus scores at 5 alongside other qualifications, per Cambridge’s international entry requirements. Many Russell Group universities accept APs as a primary qualification for non-A-Level applicants. In the UAE, the standard pathway remains high school grades plus IELTS or TOEFL, with APs supporting select branch campuses. APs strengthen US applications most directly and can earn college credit.\" } }, { \"@type\": \"Question\", \"name\": \"Where In Dubai Does Ignite Run AP Classes, DIFC, JLT, Or Online?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Ignite Training Institute runs AP classes at two centres in Dubai. The DIFC location at Al Moosa Tower 1 on Sheikh Zayed Road is convenient for students near Emirates Towers Metro and Downtown. The JLT location at Tiffany Tower in Cluster W serves students from Dubai Marina, JBR, and the Greens. Both centres run the same programmes with the same tutor team. Live online AP classes are also available for students across the UAE, using shared digital whiteboards and the same diagnostic and mock exam workflow as in-person sessions.\" } }, { \"@type\": \"Question\", \"name\": \"Are AP Exams Accepted In The UAE And By Top Dubai Schools?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"AP exams are administered at several authorised schools across Dubai. American-curriculum institutions including Dubai American Academy, GEMS Wellington Academy, American School of Dubai, Universal American School, and Dubai International Academy offer AP courses and exam administration. Some IB and British-curriculum schools also support students taking APs independently. Students at schools that do not offer APs can register as external candidates through participating schools. The UAE Ministry of Education does not require APs for local university entry, but they strengthen applications to US and selective UK universities, including Cambridge and Oxford.\" } }, { \"@type\": \"Question\", \"name\": \"Which AP Subjects Are The Most Popular Among Dubai Students?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"The most commonly taken AP subjects among Dubai students are AP Calculus AB and BC, AP Chemistry, AP Physics 1 and 2, AP Biology, AP Statistics, AP Computer Science A and Principles, AP Macroeconomics and Microeconomics, AP Psychology, and AP English Language and Literature. STEM-heavy combinations dominate because most Dubai AP students target US universities for engineering, computer science, business, or pre-med. Language APs (French, Spanish) are popular among heritage speakers.\" } }, { \"@type\": \"Question\", \"name\": \"How Do I Start AP Tutoring At Ignite Training Institute?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"The starting point is a free AP demo class. The demo runs through a short diagnostic, a conversation about target AP subjects and score goals, and a walkthrough of how a personalised plan would look across the August to May programme. Parents are welcome to join, and there is no obligation afterwards. To book, request a demo through the website or speak to an academic advisor directly.\" } } \\] } \\</script\\> **2\\. Breadcrumb** \\<script type=\"application/ld+json\"\\> { \"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": \\[ { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://ignitetraininginstitute.com/\" }, { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Advanced Placements Tutors In Dubai\", \"item\": \"https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai\" } \\] } \\</script\\> **3\\. ORGANIZATION (EducationalOrganization)** \\<script type=\"application/ld+json\"\\> { \"@context\": \"https://schema.org\", \"@type\": \"EducationalOrganization\", \"@id\": \"https://ignitetraininginstitute.com/\", \"name\": \"Ignite Training Institute\", \"alternateName\": \"Ignite Training Institute \\- Tutors In Dubai\", \"url\": \"https://ignitetraininginstitute.com/\", \"logo\": { \"@type\": \"ImageObject\", \"url\": \"https://ignitetraininginstitute.com/images/logo.webp\" }, \"image\": \"https://ignitetraininginstitute.com/assets/ap\\_bg\\_main.webp\", \"description\": \"Ignite Training Institute is a leading tutoring centre in Dubai offering expert Advanced Placement (AP) tutoring alongside IGCSE, IB, A-Level, ACT, and homeschooling support across major curriculums including Edexcel, Cambridge (CAIE), and Oxford AQA.\", \"foundingDate\": \"2014\", \"slogan\": \"Revolutionizing The Way Students Learn\", \"telephone\": \"+971568357374\", \"email\": \"hello@ignitetraininginstitute.com\", \"priceRange\": \"$\", \"address\": \\[ { \"@type\": \"PostalAddress\", \"streetAddress\": \"1503, Al Moosa Tower 1, Sheikh Zayed Road, Near Emirates Towers Metro (Sea Side)\", \"addressLocality\": \"Dubai\", \"addressRegion\": \"Dubai\", \"addressCountry\": \"AE\" }, { \"@type\": \"PostalAddress\", \"streetAddress\": \"Tiffany Tower, Level 11, Cluster W, Jumeirah Lake Towers\", \"addressLocality\": \"Dubai\", \"addressRegion\": \"Dubai\", \"addressCountry\": \"AE\" } \\], \"areaServed\": \\[ { \"@type\": \"City\", \"name\": \"Dubai\" }, { \"@type\": \"Country\", \"name\": \"United Arab Emirates\" } \\], \"contactPoint\": \\[ { \"@type\": \"ContactPoint\", \"telephone\": \"+971568357374\", \"contactType\": \"customer service\", \"email\": \"hello@ignitetraininginstitute.com\", \"areaServed\": \"AE\", \"availableLanguage\": \\[\"English\", \"Arabic\"\\] }, { \"@type\": \"ContactPoint\", \"telephone\": \"+971568357374\", \"contactType\": \"sales\", \"url\": \"https://wa.me/+971568357374\", \"contactOption\": \"TollFree\", \"availableLanguage\": \"English\" } \\], \"sameAs\": \\[ \"https://www.facebook.com/ignitetraininginstitute\", \"https://www.instagram.com/ignitetraininginstitute/\", \"https://www.linkedin.com/company/ignite-training-institute\" \\], \"knowsAbout\": \\[ \"Advanced Placement (AP) Preparation\", \"AP Calculus AB and BC\", \"AP Physics\", \"AP Chemistry\", \"AP Biology\", \"AP English Language and Composition\", \"AP Macroeconomics and Microeconomics\", \"AP Psychology\", \"College Credit Programs\", \"IGCSE Tutoring\", \"A-Level Tutoring\", \"ACT Preparation\", \"IB Diploma Programme\", \"Homeschooling\" \\], \"hasCredential\": \\[ { \"@type\": \"EducationalOccupationalCredential\", \"credentialCategory\": \"Pearson Edexcel Approved Tuition Centre\" }, { \"@type\": \"EducationalOccupationalCredential\", \"credentialCategory\": \"Cambridge Assessment International Education\" }, { \"@type\": \"EducationalOccupationalCredential\", \"credentialCategory\": \"Oxford International AQA Examinations\" } \\] } \\</script\\> ![][image1] **4\\. COURSE \\+ REVIEWS \\+ AGGREGATE RATING** \\<script type=\"application/ld+json\"\\> { \"@context\": \"https://schema.org\", \"@type\": \"Course\", \"@id\": \"https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai\", \"name\": \"Advanced Placement (AP) Tutoring in Dubai\", \"description\": \"Expert AP tutoring in Dubai for Grade 11 and Grade 12 students preparing for College Board Advanced Placement exams. Programs cover Calculus, Physics, Chemistry, Biology, English, Economics, and more, with diagnostic testing, mock exams, and personalised feedback to support college credit success.\", \"url\": \"https://ignitetraininginstitute.com/advanced-placements-tutors-in-dubai\", \"image\": \"https://ignitetraininginstitute.com/assets/ap\\_bg\\_main.webp\", \"educationalLevel\": \"Pre-University (Grade 11 and Grade 12)\", \"educationalCredentialAwarded\": \"Advanced Placement (AP) Exam Scores and College Credit\", \"inLanguage\": \"en\", \"teaches\": \\[ \"AP Environmental Science\", \"AP Macroeconomics\", \"AP Microeconomics\", \"AP Psychology\", \"AP English Language and Composition\", \"AP French Language and Culture\", \"AP Spanish Language and Culture\", \"AP Calculus AB\", \"AP Calculus BC\", \"AP Statistics\", \"AP Physics 1 and 2: Algebra-Based\", \"AP Physics C: Electricity and Magnetism\", \"AP Physics C: Mechanics\", \"AP Chemistry\", \"AP Biology\" \\], \"provider\": { \"@type\": \"EducationalOrganization\", \"@id\": \"https://ignitetraininginstitute.com/\", \"name\": \"Ignite Training Institute\", \"url\": \"https://ignitetraininginstitute.com/\" }, \"audience\": { \"@type\": \"EducationalAudience\", \"educationalRole\": \"student\", \"audienceType\": \"Grade 11 and Grade 12 students preparing for AP exams\" }, \"hasCourseInstance\": \\[ { \"@type\": \"CourseInstance\", \"name\": \"AP Full Syllabus Preparation In Groups\", \"description\": \"A 9-month program from August to May with 70+ hours of in-depth training per chosen subject. Weekly structured classes aligned with the academic calendar, in-house resources, mock exam series, and personalised feedback. Ideal for students pursuing AP courses in school.\", \"courseMode\": \\[\"Blended\", \"Onsite\", \"Online\"\\], \"courseWorkload\": \"PT70H\" }, { \"@type\": \"CourseInstance\", \"name\": \"One-On-One Tutoring For Advanced Placements\", \"description\": \"Year-round AP-focused course built around each student's academic goals. Starts with a diagnostic test to assess strengths and gaps, followed by a fully customised learning plan with flexible scheduling, unit tests, and mock exams.\", \"courseMode\": \\[\"Blended\", \"Onsite\", \"Online\"\\] } \\], \"aggregateRating\": { \"@type\": \"AggregateRating\", \"ratingValue\": \"4.9\", \"bestRating\": \"5\", \"worstRating\": \"1\", \"ratingCount\": \"8\", \"reviewCount\": \"8\" }, \"review\": \\[ { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Nidhi Choudhury\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"We had a great experience with the instructor at Ignite. My child progressed amazingly under their guidance and achieved a good grade in Chemistry. Thank you so much to the Ignite team for supporting us in this\\!\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Nicole Morgan\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"Sumit from Ignite went out of his way to arrange a tutor for my daughter on very short notice. The tutor was kind and competent and managed to quickly solve my daughter's doubt. Thank you\\! Highly recommend\\!\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Sara Kerr\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"Really good tutoring sessions conducted. I'm a student going there myself and I really enjoy my Economics sessions with my tutor who gives good resources and explains/condenses concepts really well. Lots of past paper practice and very good at essay planning as well. Overall, I really enjoy the sessions I've been receiving here.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Sushma Menon\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"I was referred to Ignite by a family member who had previously used their services and was highly satisfied. From the start, the coordinator demonstrated exceptional professionalism in interactions with both parents and students. My daughter was initially struggling with economics, but under the guidance of the tutor, the subject became much more approachable and understandable. Their teaching style made a significant difference in my daughter's confidence and performance. I would highly recommend this institute to anyone seeking additional academic support.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Rosie Seldon\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"The trainers were flexible and were able to help in difficult subjects like Physics. My son scored a 100/100 on one of his maths papers after working with the tutors. Great work.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Abdullah Al Noubani\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"Ignite provides high quality tutoring with knowledgeable tutors and provide beneficial resources.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Shweta Monga\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"They were happy to help regardless of my location. They also promptly responded to my request and set up a meeting on a short notice. It speaks a lot about their work ethics and I found them to be a credible institute.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Alizah\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"Been here for 3 years it was an amazing journey to be on academically and socially. Amazing vibe with the teachers.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } } \\] } \\</script\\> ![][image2] [image1]: <data:image/png;base64,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> [image2]: <data:image/png;base64,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>",
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

              Answers To Your Questions <br />About<span className="highlight"> AP</span> Tutoring Programs
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
              Find out how Ignite prepares you for AP success through targeted, effective instruction.
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