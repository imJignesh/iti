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
      question: "What Changed In The Enhanced ACT And How Does It Affect Students In Dubai?",
      answer:
        "The Enhanced ACT, which became the standard format on national Saturday testing from September 2025, made the test shorter and the Science section optional. The composite score is now an average of just English, Math, and Reading on the 1 to 36 scale. The full test is around 2 hours without Science, or about 2 hours 40 minutes with Science included, and Math questions now have four answer choices rather than five. International ACT testing in the UAE moved to the Enhanced format alongside the September 2025 rollout, so any Dubai student sitting the ACT in 2026 will take the new version regardless of paper or online format.",
    },
    {
      question: "How Long Does It Take To Prepare For The ACT With A Tutor?",
      answer:
        "Most students need 8 to 16 weeks of structured ACT preparation to see meaningful score improvement. The exact timeline depends on three things: the gap between the student’s diagnostic score and target score, how much weekly time they can commit alongside school, and whether they are preparing for one test sitting or planning two attempts. Students with a 4 to 6 point gap typically need 10 to 12 weeks of consistent coaching with two sessions per week. Larger gaps or shorter weekly commitments push the timeline longer.",
    },
    {
      question: "What Is A Realistic ACT Score Improvement With Structured Coaching?",
      answer:
        "A realistic improvement range with structured coaching is 3 to 6 points on the composite over 8 to 12 weeks, depending on starting score and effort. Students starting in the high 20s and aiming for 32 plus tend to see slower gains because each additional point requires fewer wrong answers. Students starting below 24 often see faster gains in the first 4 to 6 weeks as foundational gaps close. We do not promise a guaranteed score because the actual outcome depends on student effort, test-day performance, and consistency. What we do promise is a structured plan that gives every student the best chance of hitting their personal target.",
    },
    {
      question: "Should Dubai Students Take The Optional ACT Science Section?",
      answer:
        "It depends on which universities are on the shortlist. Some universities still require or strongly recommend the Science section, including Marquette University, while many others, including Stanford, the University of Pennsylvania, and Penn State, have confirmed they will not require it. About 90 percent of universities tracked by [Compass Prep’s policy table](https://www.compassprep.com/new-act-policies/) have moved Science to optional. Our practical guidance for Dubai students is straightforward: if the shortlist includes any STEM-focused programme or a university with a stated Science requirement, take it. If the shortlist is liberal arts or business-focused and the student finds Science fatiguing, skipping it shortens the test and often improves performance on the three sections that count toward the composite.",
    },
    {
      question: "How Much Does ACT Tutoring In Dubai Typically Cost?",
      answer:
        "ACT tutoring fees in Dubai vary based on session format, hours per week, and tutor experience. One-on-one tutoring is generally priced at a higher hourly rate than small-group programmes because the tutor is dedicated to a single student. Group programmes spread the cost across a small cohort and tend to be more affordable per hour.",
    },
    {
      question: "Can ACT Prep Run Alongside IB Or A-Level Coursework?",
      answer:
        "Yes, and most of our ACT students at Ignite are doing exactly that. The key is sequencing. Heavier ACT hours work best during quieter terms when school assessments are not stacking up, and the load tapers in the weeks immediately before IB or A-Level mocks. Students typically commit 3 to 5 hours per week to ACT prep alongside school, with that figure rising slightly in the final 3 to 4 weeks before the test. The skills overlap also helps: A-Level English Literature students bring strong reading stamina, IB Math students bring quantitative fluency, and IBDP Science students often find the optional ACT Science section accessible without much extra prep.",
    },
    {
      question: "Is One-On-One Or Group ACT Coaching Better?",
      answer:
        "Neither is universally better. One-on-one coaching gives faster feedback and personalised pacing, which suits students with uneven section scores or tight timelines. Group coaching gives a structured weekly rhythm, peer comparison, and a more affordable per-hour cost, which suits students with more time and balanced section performance. A hybrid approach, where a student joins a group programme and adds private hours for their weakest section in the final 4 weeks, often produces the strongest results for the cost. The honest answer for any individual student comes from looking at their diagnostic results, their schedule, and their target score together.",
    },
    {
      question: "Where In Dubai Can I Take ACT Classes, DIFC, JLT, Or Online?",
      answer:
        "Ignite Training Institute offers ACT classes at two centres in Dubai. The DIFC location at Al Moosa Tower 1 on Sheikh Zayed Road is convenient for students near Emirates Towers Metro and the wider Downtown area. The JLT location at Tiffany Tower in Cluster W serves students from Dubai Marina, JBR, and the Greens. Both centres run the same programmes with the same tutors. We also offer fully online ACT classes for students based in Abu Dhabi, Sharjah, or other emirates. The online format uses live video sessions, shared digital whiteboards, and the same diagnostic and mock test workflow as in-person classes.",
    },
    {
      question: "Is The ACT Accepted By UK And UAE Universities, Or Only US Colleges?",
      answer:
        "The ACT is primarily a US university entrance test, and almost every US university accepts it as an alternative to the SAT. It is also accepted by a growing number of UK universities, particularly for applicants who are not following an A-Level or IB pathway. Cambridge, Oxford, and several Russell Group universities accept ACT scores from international applicants, often with subject-specific tests required alongside. In the UAE, the American University of Sharjah and several international branch campuses accept ACT scores. Students applying primarily to UK universities through the UCAS system usually do not need the ACT if they have strong A-Level or IB Diploma predicted grades, but it can strengthen applications to highly selective US programmes alongside their UK options.",
    },
    {
      question: "How Do I Start ACT Tutoring At Ignite Training Institute In Dubai?",
      answer:
        "The starting point is a [free ACT demo class](https://ignitetraininginstitute.com/join-free-demo-class) at Ignite Training Institute. The demo runs through a short diagnostic, a conversation about target score and timeline, and a walkthrough of how a personalised plan would look for the student. Parents are welcome to join. There is no obligation after the demo, and the conversation often makes it easier to decide whether ACT prep is the right priority right now or whether another path makes more sense for the student’s applications. To book, you can request a demo through the website or [speak to an academic advisor](https://ignitetraininginstitute.com/contact-us) directly. **\\----------------------------------------------------------------------------------------------------------------------------** **Schema** **1\\. FAQ** \\<script type=\"application/ld+json\"\\> { \"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": \\[ { \"@type\": \"Question\", \"name\": \"What Changed In The Enhanced ACT And How Does It Affect Students In Dubai?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"The Enhanced ACT, which became the standard format on national Saturday testing from September 2025, made the test shorter and the Science section optional. The composite score is now an average of just English, Math, and Reading on the 1 to 36 scale. The full test is around 2 hours without Science, or about 2 hours 40 minutes with Science included, and Math questions now have four answer choices rather than five. International ACT testing in the UAE moved to the Enhanced format alongside the September 2025 rollout, so any Dubai student sitting the ACT in 2026 will take the new version regardless of paper or online format.\" } }, { \"@type\": \"Question\", \"name\": \"How Long Does It Take To Prepare For The ACT With A Tutor?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Most students need 8 to 16 weeks of structured ACT preparation to see meaningful score improvement. The exact timeline depends on three things: the gap between the student’s diagnostic score and target score, how much weekly time they can commit alongside school, and whether they are preparing for one test sitting or planning two attempts. Students with a 4 to 6 point gap typically need 10 to 12 weeks of consistent coaching with two sessions per week. Larger gaps or shorter weekly commitments push the timeline longer.\" } }, { \"@type\": \"Question\", \"name\": \"What Is A Realistic ACT Score Improvement With Structured Coaching?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"A realistic improvement range with structured coaching is 3 to 6 points on the composite over 8 to 12 weeks, depending on starting score and effort. Students starting in the high 20s and aiming for 32 plus tend to see slower gains because each additional point requires fewer wrong answers. Students starting below 24 often see faster gains in the first 4 to 6 weeks as foundational gaps close. We do not promise a guaranteed score because the actual outcome depends on student effort, test-day performance, and consistency. What we do promise is a structured plan that gives every student the best chance of hitting their personal target.\" } }, { \"@type\": \"Question\", \"name\": \"Should Dubai Students Take The Optional ACT Science Section?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"It depends on which universities are on the shortlist. Some universities still require or strongly recommend the Science section, including Marquette University, while many others including Stanford, the University of Pennsylvania, and Penn State have confirmed they will not require it. About 90 percent of universities tracked by Compass Prep’s policy table have moved Science to optional. Our practical guidance for Dubai students is straightforward: if the shortlist includes any STEM-focused programme or a university with a stated Science requirement, take it. If the shortlist is liberal arts or business focused and the student finds Science fatiguing, skipping it shortens the test and often improves performance on the three sections that count toward the composite.\" } }, { \"@type\": \"Question\", \"name\": \"How Much Does ACT Tutoring In Dubai Typically Cost?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"ACT tutoring fees in Dubai vary based on session format, hours per week, and tutor experience. One-on-one tutoring is generally priced at a higher hourly rate than small-group programmes because the tutor is dedicated to a single student. Group programmes spread the cost across a small cohort and tend to be more affordable per hour. Most reputable centres in Dubai work on package pricing for 6 to 10 week programmes rather than open-ended hourly billing, which makes the total cost easier to plan for. We share specific pricing during the free demo call once we understand the student’s starting point and target.\" } }, { \"@type\": \"Question\", \"name\": \"Can ACT Prep Run Alongside IB Or A-Level Coursework?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Yes, and most of our ACT students at Ignite are doing exactly that. The key is sequencing. Heavier ACT hours work best during quieter terms when school assessments are not stacking up, and the load tapers in the weeks immediately before IB or A-Level mocks. Students typically commit 3 to 5 hours per week to ACT prep alongside school, with that figure rising slightly in the final 3 to 4 weeks before the test. The skills overlap also helps: A-Level English Literature students bring strong reading stamina, IB Math students bring quantitative fluency, and IBDP Science students often find the optional ACT Science section accessible without much extra prep.\" } }, { \"@type\": \"Question\", \"name\": \"Is One-On-One Or Group ACT Coaching Better?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Neither is universally better. One-on-one coaching gives faster feedback and personalised pacing, which suits students with uneven section scores or tight timelines. Group coaching gives a structured weekly rhythm, peer comparison, and a more affordable per-hour cost, which suits students with more time and balanced section performance. A hybrid approach, where a student joins a group programme and adds private hours for their weakest section in the final 4 weeks, often produces the strongest results for the cost. The honest answer for any individual student comes from looking at their diagnostic results, their schedule, and their target score together.\" } }, { \"@type\": \"Question\", \"name\": \"Where In Dubai Can I Take ACT Classes, DIFC, JLT, Or Online?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"Ignite Training Institute offers ACT classes at two centres in Dubai. The DIFC location at Al Moosa Tower 1 on Sheikh Zayed Road is convenient for students near Emirates Towers Metro and the wider Downtown area. The JLT location at Tiffany Tower in Cluster W serves students from Dubai Marina, JBR, and the Greens. Both centres run the same programmes with the same tutors. We also offer fully online ACT classes for students based in Abu Dhabi, Sharjah, or other emirates, as well as students whose school schedule makes commuting difficult. The online format uses live video sessions, shared digital whiteboards, and the same diagnostic and mock test workflow as in-person classes.\" } }, { \"@type\": \"Question\", \"name\": \"Is The ACT Accepted By UK And UAE Universities, Or Only US Colleges?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"The ACT is primarily a US university entrance test, and almost every US university accepts it as an alternative to the SAT. It is also accepted by a growing number of UK universities, particularly for applicants who are not following an A-Level or IB pathway. Cambridge, Oxford, and several Russell Group universities accept ACT scores from international applicants, often with subject-specific tests required alongside. In the UAE, the American University of Sharjah and several international branch campuses accept ACT scores. Students applying primarily to UK universities through the UCAS system usually do not need the ACT if they have strong A-Level or IB Diploma predicted grades, but it can strengthen applications to highly selective US programmes alongside their UK options.\" } }, { \"@type\": \"Question\", \"name\": \"How Do I Start ACT Tutoring At Ignite Training Institute In Dubai?\", \"acceptedAnswer\": { \"@type\": \"Answer\", \"text\": \"The starting point is a free ACT demo class at Ignite Training Institute. The demo runs through a short diagnostic, a conversation about target score and timeline, and a walkthrough of how a personalised plan would look for the student. Parents are welcome to join. There is no obligation after the demo, and the conversation often makes it easier to decide whether ACT prep is the right priority right now or whether another path makes more sense for the student’s applications. To book, you can request a demo through the website or speak to an academic advisor directly.\" } } \\] } \\</script\\> **2\\. Breadcrumb** \\<script type=\"application/ld+json\"\\> { \"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": \\[ { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://ignitetraininginstitute.com/\" }, { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"ACT Tutors In Dubai\", \"item\": \"https://ignitetraininginstitute.com/act-tutors-in-dubai\" } \\] } \\</script\\> **3\\. ORGANIZATION (EducationalOrganization)** \\<script type=\"application/ld+json\"\\> { \"@context\": \"https://schema.org\", \"@type\": \"EducationalOrganization\", \"@id\": \"https://ignitetraininginstitute.com/\", \"name\": \"Ignite Training Institute\", \"alternateName\": \"Ignite Training Institute \\- Tutors In Dubai\", \"url\": \"https://ignitetraininginstitute.com/\", \"logo\": { \"@type\": \"ImageObject\", \"url\": \"https://ignitetraininginstitute.com/images/logo.webp\" }, \"image\": \"https://ignitetraininginstitute.com/assets/act\\_bg\\_main.webp\", \"description\": \"Ignite Training Institute is a leading tutoring centre in Dubai offering expert ACT preparation alongside IGCSE, IB, A-Level, AP, and homeschooling support across major curriculums including Edexcel, Cambridge (CAIE), and Oxford AQA.\", \"foundingDate\": \"2014\", \"slogan\": \"Revolutionizing The Way Students Learn\", \"telephone\": \"+971568357374\", \"email\": \"hello@ignitetraininginstitute.com\", \"priceRange\": \"$\", \"address\": \\[ { \"@type\": \"PostalAddress\", \"streetAddress\": \"1503, Al Moosa Tower 1, Sheikh Zayed Road, Near Emirates Towers Metro (Sea Side)\", \"addressLocality\": \"Dubai\", \"addressRegion\": \"Dubai\", \"addressCountry\": \"AE\" }, { \"@type\": \"PostalAddress\", \"streetAddress\": \"Tiffany Tower, Level 11, Cluster W, Jumeirah Lake Towers\", \"addressLocality\": \"Dubai\", \"addressRegion\": \"Dubai\", \"addressCountry\": \"AE\" } \\], \"areaServed\": \\[ { \"@type\": \"City\", \"name\": \"Dubai\" }, { \"@type\": \"Country\", \"name\": \"United Arab Emirates\" } \\], \"contactPoint\": \\[ { \"@type\": \"ContactPoint\", \"telephone\": \"+971568357374\", \"contactType\": \"customer service\", \"email\": \"hello@ignitetraininginstitute.com\", \"areaServed\": \"AE\", \"availableLanguage\": \\[\"English\", \"Arabic\"\\] }, { \"@type\": \"ContactPoint\", \"telephone\": \"+971568357374\", \"contactType\": \"sales\", \"url\": \"https://wa.me/+971568357374\", \"contactOption\": \"TollFree\", \"availableLanguage\": \"English\" } \\], \"sameAs\": \\[ \"https://www.facebook.com/ignitetraininginstitute\", \"https://www.instagram.com/ignitetraininginstitute/\", \"https://www.linkedin.com/company/ignite-training-institute\" \\], \"knowsAbout\": \\[ \"ACT Preparation\", \"ACT Math Tutoring\", \"ACT English Tutoring\", \"ACT Reading Tutoring\", \"ACT Science Tutoring\", \"ACT Writing Tutoring\", \"Standardised Test Preparation\", \"IGCSE Tutoring\", \"A-Level Tutoring\", \"Advanced Placement\", \"IB Diploma Programme\", \"Homeschooling\" \\], \"hasCredential\": \\[ { \"@type\": \"EducationalOccupationalCredential\", \"credentialCategory\": \"Pearson Edexcel Approved Tuition Centre\" }, { \"@type\": \"EducationalOccupationalCredential\", \"credentialCategory\": \"Cambridge Assessment International Education\" }, { \"@type\": \"EducationalOccupationalCredential\", \"credentialCategory\": \"Oxford International AQA Examinations\" } \\] } \\</script\\> ![][image1] **4\\. COURSE \\+ REVIEWS \\+ AGGREGATE RATING** \\<script type=\"application/ld+json\"\\> { \"@context\": \"https://schema.org\", \"@type\": \"Course\", \"@id\": \"https://ignitetraininginstitute.com/act-tutors-in-dubai\", \"name\": \"ACT Tutoring in Dubai\", \"description\": \"Expert ACT preparation in Dubai with personalised tutoring across all ACT sections including English, Math, Reading, Science, and Writing. Programs include diagnostic testing, structured exam strategies, mock tests, and detailed feedback to help students achieve target scores.\", \"url\": \"https://ignitetraininginstitute.com/act-tutors-in-dubai\", \"image\": \"https://ignitetraininginstitute.com/assets/act\\_bg\\_main.webp\", \"educationalLevel\": \"Pre-University Standardised Test Preparation\", \"educationalCredentialAwarded\": \"ACT Score Improvement\", \"inLanguage\": \"en\", \"teaches\": \\[ \"ACT English\", \"ACT Math\", \"ACT Reading\", \"ACT Science\", \"ACT Writing\", \"ACT Maths I and II\", \"ACT Physics\", \"ACT Chemistry\", \"ACT Biology\", \"Time Management Strategies\", \"Exam-Style Question Practice\" \\], \"provider\": { \"@type\": \"EducationalOrganization\", \"@id\": \"https://ignitetraininginstitute.com/\", \"name\": \"Ignite Training Institute\", \"url\": \"https://ignitetraininginstitute.com/\" }, \"audience\": { \"@type\": \"EducationalAudience\", \"educationalRole\": \"student\", \"audienceType\": \"High school students preparing for the ACT standardised test\" }, \"hasCourseInstance\": \\[ { \"@type\": \"CourseInstance\", \"name\": \"Bespoke One-On-One Tutoring For ACT\", \"description\": \"A focused 6-week ACT program starting with a personalised diagnostic test, followed by tailored lessons in Math, English, and Science with flexible scheduling, mock exams, and exclusive in-house study materials.\", \"courseMode\": \\[\"Blended\", \"Onsite\", \"Online\"\\], \"courseWorkload\": \"P6W\" }, { \"@type\": \"CourseInstance\", \"name\": \"ACT Group Learning Program\", \"description\": \"A 10-week ACT group program: 6 weeks of subject foundation building followed by 4 weeks of intensive practice with ACT-style questions, mock exams, essay writing, and live review sessions.\", \"courseMode\": \\[\"Blended\", \"Onsite\", \"Online\"\\], \"courseWorkload\": \"P10W\" } \\], \"aggregateRating\": { \"@type\": \"AggregateRating\", \"ratingValue\": \"4.9\", \"bestRating\": \"5\", \"worstRating\": \"1\", \"ratingCount\": \"8\", \"reviewCount\": \"8\" }, \"review\": \\[ { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Nidhi Choudhury\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"We had a great experience with the instructor Flavy at Ignite. My child progressed amazingly under her guidance and achieved good grade in Chemistry. Thank you so much to her and Ahzeb and Ignite team for supporting us in this\\!\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Nicole Morgan\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"Sumit from Ignite went out of his way to arrange a tutor for my daughter on very short notice. The tutor was kind and competent and managed to quickly solve my daughter's doubt. Thank you\\! Highly recommend\\!\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Sara Kerr\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"Really good tutoring sessions conducted. I'm a student going there myself and I really enjoy my Economics sessions with my tutor (Nidhi) who really gives good resources and explains/condenses concepts really well. Lots of past paper practice and she's very good at essay planning as well. Overall, I really enjoy the sessions I've been receiving here.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Sushma Menon\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"I was referred to Ignite by a family member who had previously used their services and was highly satisfied. From the start, the coordinator, Mr. Ahzeb, demonstrated exceptional professionalism in his interactions with both parents and students. My daughter was initially struggling with economics, but under the guidance of Miss Harsha, the subject became much more approachable and understandable. Her teaching style made a significant difference in my daughter's confidence and performance. I would highly recommend this institute to anyone seeking additional academic support.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Rosie Seldon\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"The trainers were flexible and were able to help in difficult subjects like Physics. My son scored a 100/100 on one of his maths papers after working with the tutors. Great work.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Abdullah Al Noubani\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"Ignite provides high quality tutoring with knowledgeable tutors and provide beneficial resources.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Shweta Monga\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"They were happy to help regardless of my location. They also promptly responded to my request and set up a meeting on a short notice. It speaks a lot about their work ethics and I found them to be a credible institute.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } }, { \"@type\": \"Review\", \"author\": { \"@type\": \"Person\", \"name\": \"Alizah\" }, \"reviewRating\": { \"@type\": \"Rating\", \"ratingValue\": \"5\", \"bestRating\": \"5\", \"worstRating\": \"1\" }, \"reviewBody\": \"Been here for 3 years it was an amazing journey to be on academically and socially. Amazing vibe with the teachers.\", \"publisher\": { \"@type\": \"Organization\", \"name\": \"Google\" } } \\] } \\</script\\> ![][image2] [image1]: <data:image/png;base64,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> [image2]: <data:image/png;base64,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AoDbpCZo9fjVodZqIGgBwEhWBa0SfKoFcFvUBK0FG7Baw1aL10LQAoCR7BK0AOC2qA1aHrUBqtanELQAYCQELQDYDEELAMCHoAUAm9kStFpIv260qEchaAHASFYFreXL8L2+EF/zRtmb1mvynTMffi6QuFbQWkOvoPXZZ58BADTTHLR6BayEfjlWe54vWuu5PerePViCRsKutW/XOq97Rn315tba05rX93o5H4Bl5qC1vFE+fvz48sknn1wePXp0+fjjjwEAqmkOWomtgSuFnygEaU3D0y2xNfC0zid/6xzcLjMHrSVkffTRRxeEEFqj1UGrB7nQpL1c0PJqZ8cLOV5N8TxeLQdBC1qZNWgtn2Ytn2S9+eab+t6JEEJVag5aWz/JakUDVk2oavFuZUsYsbO5fTT45LwetX7dv3YOYOagtfy68P79+/reiRBCVWoOWgAAZ+LBBx9uDlr37t3T906EEKoSQQsApmZr0Fq+zErQQgitFUELAKaGoIUQGimCFgBMDUELITRSq4NWjy/F65fVdd1Cy6z3JW+vtpVlzz32BYB6CFoIoZFaHbR64v0tQQ1OpbVSG3DUp+sa0syaWQDYF4IWQmikhgWtJShZUs3zRUfP30rPcMQnWADH4whB68vf/frnIIRuS8OClocGJ+8TLvX0puXTqRYvAIzBBq233nrrSdB67bXXrhK0bMBSjqannnpKS58r19tL177mta+HbkeHClo59g5Y14BABnB9bND69NNPn/zndB48eLB70NJgFbFWSzDQcJDWWq9RbtarLYrqPZTbO9dT1XprfQi16rBBS4OVrgEAahgRtDRM5dgiGw6ic13bQBXVc7W0ttia+rzztNaareusXkfXnrd2bY8I9dZhgxYAQA+uHbQ0SEVY71p5gUHP7VqPXs079tivVEvn6tG+d0znW+cR2kMELQCYmiMGLfWuVRQUotBgA0YpmOT2U4+3X1K0T63X2zvq6X7JY88Vz4dQT60KWsu/odXj39FamOFXgrnvXuV6Sou3hZ779txrFDO8hlZu8TUnjha0It8aaTjQIGJlg4UXMHJH3c/zRMpdyztXj7d31CvNe37vHKGeWh20tLaW3D/voOst2AfNch6ttaezLehcdE3tlfq5nq7V6/Vz3mjOI7eXnmvferSnPqXk9WpeT88TOmP7ds4edVb3yfVyvpw3hzer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>",
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
        marginTop: isMobile ? "0" : "0",
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

              Everything About<span className="highlight"> ACT</span><br />Preparation With Ignite Tutors
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
              Discover how personalized ACT prep boosts your confidence & test-taking performance.
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