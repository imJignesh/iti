export const getOurApproachData = (key) => {
  const config = {
    "a-level": {
      title: "How We Make A-Levels Learning Truly",
      highlightText: "Effective",
      items: [
        {
          heading: "TRAINING",
          text: "Engaging expert-led sessions to build a solid academic base.",
        },
        {
          heading: "RESOURCES",
          text: "Extensive learning materials that aid independent preparation.",
        },
        {
          heading: "TESTING",
          text: "Ongoing assessments & mocks to fine-tune exam strategies.",
        },
      ],
    },
    igcse: {
      title: "What Makes Our IGCSE Tutors in Dubai",
      highlightText: "Different",
      description: "Most students don't struggle because they're not clever enough. They struggle because nobody has shown them where they're losing marks. That's what we focus on.",
      items: [
        {
          heading: "TRAINING",
          text: "Every lesson follows your child’s exact exam board and syllabus.",
        },
        {
          heading: "RESOURCES",
          text: "Notes and worksheets matched to Cambridge, Edexcel or OxfordAQA specifications.",
        },
        {
          heading: "TESTING",
          text: "Timed topic tests and mock papers make exam day feel familiar.",
        },
      ],
    },
    ibdp: {
      title: "How We Support Your Child at Every",
      highlightText: "IBDP Step",
      items: [
        {
          heading: "TRAINING",
          text: "Learn from expert IBDP tutors in Dubai who make tough topics easy and build strong basics.",
        },
        {
          heading: "RESOURCES",
          text: "Simple notes and practice questions made for the IB, so you can study at your own pace.",
        },
        {
          heading: "TESTING",
          text: "Regular mock exams show your progress and help you fix weak areas before the real exam.",
        },
      ],
    },
    ibc: {
      title: "How We Make IB Learning Truly",
      highlightText: "Effective",
      items: [
        {
          heading: "TRAINING",
          text: "Interactive lessons led by experts to build strong foundations.",
        },
        {
          heading: "RESOURCES",
          text: "Comprehensive study guides to support independent learning.",
        },
        {
          heading: "TESTING",
          text: "Regular tests & mocks to measure growth & sharpen exam skills.",
        },
      ],
    },
    "ibc-copy": {
      title: "How We Make IB Learning Truly",
      highlightText: "Effective",
      items: [
        {
          heading: "TRAINING",
          text: "Interactive lessons led by experts to build strong foundations.",
        },
        {
          heading: "RESOURCES",
          text: "Comprehensive study guides to support independent learning.",
        },
        {
          heading: "TESTING",
          text: "Regular tests & mocks to measure growth & sharpen exam skills.",
        },
      ],
    },
    act: {
      title: "How We Make ACT Prep Truly",
      highlightText: "Effective",
      items: [
        {
          heading: "TRAINING",
          text: "Expert-led ACT sessions designed to build clarity & confidence.",
        },
        {
          heading: "RESOURCES",
          text: "Targeted ACT study guides & practice materials for self-prep.",
        },
        {
          heading: "TESTING",
          text: "Regular mock tests to measure progress & boost exam readiness.",
        },
      ],
    },
    ap: {
      title: "How We Make AP Learning Truly",
      highlightText: "Tailored Effective",
      items: [
        {
          heading: "TRAINING",
          text: "Expert-led classes to clarify concepts & strengthen foundations.",
        },
        {
          heading: "RESOURCES",
          text: "Comprehensive guides that aid effective self-study & revision.",
        },
        {
          heading: "TESTING",
          text: "Regular mock exams to monitor progress & refine exam skills.",
        },
      ],
    },
    bc: {
      title: "How We Make British Learning Truly",
      highlightText: "Effective",
      items: [
        {
          heading: "TRAINING",
          text: "Expert-led lessons for clear concepts & robust, solid foundations.",
        },
        {
          heading: "RESOURCES",
          text: "Comprehensive guides & materials to empower self-learning.",
        },
        {
          heading: "TESTING",
          text: "Regular mock exams to monitor growth & sharpen performance.",
        },
      ],
    },
    myp: {
      title: "What Makes Our IB MYP Tutors in Dubai",
      highlightText: "Different",
      items: [
        {
          heading: "TRAINING",
          text: "Expert sessions that explain difficult concepts and strengthen subject knowledge.",
        },
        {
          heading: "RESOURCES",
          text: "Study guides and worksheets to support independent learning and revision.",
        },
        {
          heading: "TESTING",
          text: "Regular assessments to check progress and prepare students for MYP examinations.",
        },
      ],
    },
    homeschooling: {
      title: "What Makes Our Homeschooling Tutors in Dubai",
      highlightText: "Different",
      items: [
        {
          heading: "TRAINING",
          text: "Structured, tutor-led sessions built around your child's IGCSE homeschooling or A-Level syllabus, not a generic grade level.",
        },
        {
          heading: "RESOURCES",
          text: "Comprehensive study materials matched to Cambridge (CAIE) and Pearson Edexcel specifications.",
        },
        {
          heading: "TESTING",
          text: "Regular assessments and mock exams to sharpen exam technique ahead of private candidate IGCSE sittings at British Council exam centres.",
        },
      ],
    },
    aboutus: {
      title: "Not Just Better Grades, A Journey Of",
      highlightText: "Consistent Progress",
      items: [
        {
          heading: "TRAINING",
          text: "Expert-led sessions focused on concept clarity & real learning.",
        },
        {
          heading: "RESOURCES",
          text: "Curriculum-aligned materials tailored for effective self-study.",
        },
        {
          heading: "TESTING",
          text: "Frequent assessments to track progress & boost performance.",
        },
      ],
    },
  };

  return config[key];
};
