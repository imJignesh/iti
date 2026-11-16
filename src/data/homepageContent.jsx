const faqEntries = [
  {
    question: "How much do tutors charge in Dubai?",
    answer: "Tutor rates in Dubai change a lot. The price depends on the subject, the grade, the curriculum and the tutor’s experience. Exam-year subjects like IBDP, A-Level and IGCSE usually cost more than lower grades. One-to-one classes also cost more than small-group classes. At Ignite, we share a clear quote after we understand your child’s needs. Call or WhatsApp us on +971 58 858 9958 to get one.",
  },
  {
    question: "Where can I find tuition in Dubai?",
    answer: "You can find tuition at tuition centres, through private tutors or on online platforms. A good centre gives you trained tutors, a clear study plan and regular progress checks in one place. Ignite has centres on Sheikh Zayed Road and in Jumeirah Lakes Towers. We also teach online for students anywhere in Dubai and the UAE.",
  },
  {
    question: "What are the tuition fees in Dubai?",
    answer: "There are two kinds of fees. School tuition fees are set by each school, so ask your school directly. Fees for extra classes at a tuition centre depend on the course, the number of sessions and the class type (one-to-one or small group). Ignite will explain all costs before you join, so there are no surprises. You can also try a free demo class first.",
  },
  {
    question: "Which is the best online tuition centre?",
    answer: "The best online tuition centre is the one that fits your child. Look for qualified tutors who know your curriculum, small classes, past paper practice and real progress reports. Ignite offers live online classes with experienced tutors for IGCSE, A-Level, IBDP, IB MYP and AP. We are rated 4.9 on Google. We suggest you book a free demo class and see how it feels.",
  },
  {
    question: "What is the difference between a tuition centre and a private tutor?",
    answer: "A private tutor is one person who teaches your child. A tuition centre is a team of tutors with shared resources, tests and a set plan. With a centre, you can change tutors or add subjects easily, and the quality stays steady. At Ignite, you can still choose one-to-one lessons if you want the focus of a private tutor, with the support of a full centre behind it. See our page on private tutors in Dubai to learn more.",
    renderAnswer: () => <>A private tutor is one person who teaches your child. A tuition centre is a team of tutors with shared resources, tests and a set plan. With a centre, you can change tutors or add subjects easily, and the quality stays steady. At Ignite, you can still choose one-to-one lessons if you want the focus of a private tutor, with the support of a full centre behind it. See our page on <a href="/private-tutors-in-dubai">private tutors in Dubai</a> to learn more.</>,
  },
  {
    question: "Which curricula and grades do you teach?",
    answer: "We teach students in Grades 6 to 13. Our courses cover IGCSE, A-Level, IBDP, IB MYP and AP. We also help with ACT, UCAT and homeschooling (private candidacy). Our tutors know the main exam boards, including Cambridge, Edexcel and AQA. You can read more on our pages for IGCSE tutors in Dubai, A Level tutors in Dubai, IBDP tutors in Dubai and IB MYP tutors in Dubai.",
    renderAnswer: () => <>We teach students in Grades 6 to 13. Our courses cover IGCSE, A-Level, IBDP, IB MYP and AP. We also help with ACT, UCAT and homeschooling (private candidacy). Our tutors know the main exam boards, including Cambridge, Edexcel and AQA. You can read more on our pages for <a href="/courses/igcse-tutors-in-dubai">IGCSE tutors in Dubai</a>, <a href="/courses/a-level-tutors-in-dubai">A Level tutors in Dubai</a>, <a href="/courses/ibdp-tutors-in-dubai">IBDP tutors in Dubai</a> and <a href="/courses/myp-tutors-in-dubai">IB MYP tutors in Dubai</a>.</>,
  },
  {
    question: "Is online or in-person tutoring better?",
    answer: "Both work well. It depends on how your child likes to learn. In-person classes suit students who focus better face to face. Online classes save travel time and fit busy school days. Ignite offers both, and you can switch if your needs change. Our tutors use the same plan and resources in both ways of learning.",
  },
  {
    question: "Do you have tuition centres near me?",
    answer: "If you live or work near Sheikh Zayed Road or Jumeirah Lakes Towers, our centres are close to you. Our Sheikh Zayed Road centre is at Al Moosa Tower 1, near Emirates Towers Metro. Our JLT centre is at Tiffany Tower, Level 11, Cluster W. If you live in another area, our online classes work from home.",
    renderAnswer: () => <>If you live or work near Sheikh Zayed Road or Jumeirah Lakes Towers, our centres are close to you. Our Sheikh Zayed Road centre is at Al Moosa Tower 1, near Emirates Towers Metro. Our <a href="/tutors-in-jlt-dubai">JLT centre</a> is at Tiffany Tower, Level 11, Cluster W. If you live in another area, our online classes work from home.</>,
  },
  {
    question: "Do you offer a free demo class?",
    answer: "Yes. You can book a free demo class before you decide. Your child meets a tutor, tries a short lesson and you can see if it is a good fit. There is no pressure to join. Book your free demo class.",
    renderAnswer: () => <>Yes. You can book a free demo class before you decide. Your child meets a tutor, tries a short lesson and you can see if it is a good fit. There is no pressure to join. <a href="/join-free-demo-class">Book your free demo class.</a></>,
  },
  {
    question: "What results can I expect from Ignite?",
    answer: "Every student is different, so we cannot promise exact grades. What we can share is our record. We have taught 2300+ students from the UAE, 89% of our students were accepted to top universities and our Google rating is 4.9. Many students tell us that their marks and confidence went up after joining. You can read their words in the reviews above.",
  },
];

export const homepageFaqs = faqEntries.map((faq) => ({
  question: faq.question,
  answer: faq.renderAnswer || faq.answer,
}));

export const homepageFaqSchema = {
  "@type": "FAQPage",
  "@id": "https://ignitetraininginstitute.com/#faq",
  mainEntity: faqEntries.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const services = [
  ["IGCSE tutors in Dubai", "/courses/igcse-tutors-in-dubai", "Our IGCSE tutors in Dubai teach students in Grades 9 to 11 across the main subjects, including Maths, English, Sciences, Business and Economics. Lessons follow the Cambridge, Edexcel or AQA syllabus your school uses, with one-to-one or small-group classes, online or in person at our IGCSE tuition centre in Dubai. Every student starts with a short diagnostic test, then follows a clear study plan with topic notes, past paper practice, mock exams and regular feedback. IGCSE online tuition is available for students anywhere in the UAE. Book a free demo class to meet an IGCSE tutor and see how the lessons work before you join."],
  ["A Level tutors in Dubai", "/courses/a-level-tutors-in-dubai", "Our A Level tutors in Dubai help students in Years 12 and 13 with AS and A Level tutoring in Dubai across Maths, Physics, Chemistry, Biology, Economics, Business, Computer Science and more. A Level tuition in Dubai follows the Cambridge, Edexcel or AQA specification your school uses, in one-to-one or small-group classes, online or in person at our Sheikh Zayed Road and JLT centres. Students get a diagnostic test, a clear study plan, topic notes, past paper practice, mock exams and regular feedback so they know where marks are being lost. Book a free demo class to meet your A Level tutor before you join."],
  ["IBDP tutors in Dubai", "/courses/ibdp-tutors-in-dubai", "Our IBDP tutors in Dubai give IB Diploma students expert help at both HL and SL, including Maths AA and AI, Physics, Chemistry, Biology, Economics, Business and languages. IB tutors in Dubai also guide students through the Internal Assessment, the Extended Essay and Theory of Knowledge, without ever writing the work for them. IB Diploma tutoring in Dubai is available one-to-one or in small groups of 3 to 6 students, online or in person at our Sheikh Zayed Road and JLT centres. Programmes include year-long support, a summer bridge course, spring revision and November resit preparation. Book a free demo class to meet your IB tutor first."],
  ["IB MYP tutors in Dubai", "/courses/myp-tutors-in-dubai", "Our MYP tutors in Dubai support students in Grades 6 to 10 with IB MYP tutoring in Dubai across Maths, Sciences, English and other subjects. An IB MYP tutor helps students understand the criteria, build strong study habits and prepare for MYP assessments, so the move to IGCSE or the IB Diploma feels smooth. MYP tutoring in Dubai is available one-to-one or in small groups, online or in person at our Sheikh Zayed Road and JLT centres. Students start with a short diagnostic test and follow a clear study plan with regular feedback. Book a free demo class to meet an MYP tutor first."],
  ["AP tutors in Dubai", "/advanced-placements-tutors-in-dubai", "Our AP tutors in Dubai help students prepare for College Board Advanced Placement exams with focused AP tutoring in Dubai across the AP subjects we offer. Lessons cover the course content, free-response practice, past paper questions and timed mock exams, so students know what to expect on exam day. AP prep in Dubai is available one-to-one or in small groups, online or in person at our Sheikh Zayed Road and JLT centres. Every student gets a clear study plan built around their school timetable. Book a free demo class to meet your AP tutor first."],
  ["Homeschooling tutors in Dubai", "/courses/homeschooling-tutors-in-dubai", "Our homeschooling tutors in Dubai support families who choose homeschooling in the UAE and need expert help for IGCSE and A Level private candidacy. We help students prepare to sit Cambridge and Edexcel exams as private candidates, with a clear study plan, subject tutoring, past paper practice and mock exams. Homeschooling in UAE works best with structure, so our tutors set regular targets and give honest feedback on progress. Classes run one-to-one or in small groups, online or in person at our Sheikh Zayed Road and JLT centres. Families can also ask about homeschooling in Dubai and private candidate IGCSE entry. Book a free demo class to talk it through with a tutor."],
  ["Private tutors in Dubai", "/private-tutors-in-dubai", "Looking for private tutors in Dubai? Ignite Training Institute offers one-to-one private tutoring in Dubai for IGCSE, A-Level, IBDP, IB MYP and AP, backed by the resources of a full tuition centre. Each student is matched with a tutor who has taught the exact subject and curriculum, and the lessons follow a clear study plan with past paper practice, mock exams and regular feedback. Private tutors near you can teach online, or in person at our Sheikh Zayed Road and Jumeirah Lakes Towers centres. If a student needs a new tutor or an extra subject, the centre makes the change easy. Book a free demo class to meet a private tutor first."],
  ["Tutors in JLT, Dubai", "/tutors-in-jlt-dubai", "Looking for tutors in JLT, Dubai? Our Jumeirah Lakes Towers centre at Tiffany Tower, Level 11, Cluster W offers one-to-one and small-group tutoring for IGCSE, A-Level, IBDP, IB MYP and AP. This JLT tuition centre serves families in Dubai Marina, JBR, The Greens and nearby communities, with experienced tutors, clear study plans, past paper practice and mock exams. Students can also join online if travelling is hard on a school day. Our tutors cover Cambridge, Edexcel and AQA, and every student gets regular feedback and progress checks. Book a free demo class at our JLT centre to meet a tutor before you decide to join."],
];

export const homepageServicesSchema = {
  "@type": "ItemList",
  "@id": "https://ignitetraininginstitute.com/#services",
  name: "Tutoring services at Ignite Training Institute",
  itemListElement: services.map(([name, path, description], index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name,
      url: `https://ignitetraininginstitute.com${path}`,
      description,
      serviceType: "Private tutoring",
      provider: { "@id": "https://ignitetraininginstitute.com/#organization" },
      areaServed: { "@type": "City", name: "Dubai" },
    },
  })),
};
