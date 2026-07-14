export const getOurApproachData = (key) => {
  const config = {
    "a-level": {
      title: "How We Make A-Levels Learning Truly",
      highlightText: "Effective",
      items: [
        {
          heading: "TRAINING",
          text: "Engaging expert-led sessions to           build a solid academic base.",
        },
        {
          heading: "RESOURCES",
          text: "Extensive learning materials that\naid independent preparation.",
        },
        {
          heading: "TESTING",
          text: "Ongoing assessments & mocks           to fine-tune exam strategies.",
        },
      ],
    },
    igcse: {
      title: "How We Make IGCSE Learning Truly",
      highlightText: "Effective",
      items: [
        {
          heading: "TRAINING",
          text: "Dynamic lessons led by expert           tutors to reinforce key skills.",
        },
        {
          heading: "RESOURCES",
          text: "In-depth guides tailored for\neffective learning & revision.",
        },
        {
          heading: "TESTING",
          text: "Systematic testing to measure           improvement & exam confidence.",
        },
      ],
    },
    ibdp: {
      title: "How We Make IBDP Learning Truly",
      highlightText: "Effective",
      items: [
        {
          heading: "TRAINING",
          text: "Engaging sessions with experts to           strengthen core foundations.",
        },
        {
          heading: "RESOURCES",
          text: "Detailed study materials designed to\nupport self-paced learning.",
        },
        {
          heading: "TESTING",
          text: "Assessments & mocks to track progress           & refine exam strategies.",
        },
      ],
    },
    ibc: {
      title: "How We Make IB Learning Truly",
      highlightText: "Effective",
      items: [
        {
          heading: "TRAINING",
          text: "Interactive lessons led by experts           to build strong foundations.",
        },
        {
          heading: "RESOURCES",
          text: "Comprehensive study guides to\nsupport independent learning.",
        },
        {
          heading: "TESTING",
          text: "Regular tests & mocks to measure           growth & sharpen exam skills.",
        },
      ],
    },
    "ibc-copy": {
      title: "How We Make IB Learning Truly",
      highlightText: "Effective",
      items: [
        {
          heading: "TRAINING",
          text: "Interactive lessons led by experts           to build strong foundations.",
        },
        {
          heading: "RESOURCES",
          text: "Comprehensive study guides to\nsupport independent learning.",
        },
        {
          heading: "TESTING",
          text: "Regular tests & mocks to measure           growth & sharpen exam skills.",
        },
      ],
    },
    act: {
      title: "How We Make ACT Prep Truly",
      highlightText: "Effective",
      items: [
        {
          heading: "TRAINING",
          text: "Expert-led ACT sessions designed           to build clarity & confidence.",
        },
        {
          heading: "RESOURCES",
          text: "Targeted ACT study guides &\npractice materials for self-prep.",
        },
        {
          heading: "TESTING",
          text: "Regular mock tests to measure           progress & boost exam readiness.",
        },
      ],
    },
    ap: {
      title: "How We Make AP Learning Truly",
      highlightText: "Tailored Effective",
      items: [
        {
          heading: "TRAINING",
          text: "Expert-led classes to clarify           concepts & strengthen foundations.",
        },
        {
          heading: "RESOURCES",
          text: "Comprehensive guides that aid\neffective self-study & revision.",
        },
        {
          heading: "TESTING",
          text: "Regular mock exams to monitor           progress & refine exam skills.",
        },
      ],
    },
    bc: {
      title: "How We Make British Learning Truly",
      highlightText: "Effective",
      items: [
        {
          heading: "TRAINING",
          text: "Expert-led lessons for clear           concepts & robust, solid foundations.",
        },
        {
          heading: "RESOURCES",
          text: "Comprehensive guides & materials\nto empower self-learning.",
        },
        {
          heading: "TESTING",
          text: "Regular mock exams to monitor           growth & sharpen performance.",
        },
      ],
    },
    myp: {
      title: "How We Make IB MYP Learning Truly",
      highlightText: "Effective",
      items: [
        {
          heading: "TRAINING",
          text: "Expert sessions that simplify           concepts & strengthen foundations.",
        },
        {
          heading: "RESOURCES",
          text: "Well-structured guides to support\nindependent study & revision.",
        },
        {
          heading: "TESTING",
          text: "Systematic testing to monitor           progress & boost exam readiness.",
        },
      ],
    },
    aboutus: {
      title: "Not Just Better Grades, A Journey Of",
      highlightText: "Consistent Progress",
      items: [
        {
          heading: "TRAINING",
          text: "Expert-led sessions focused on           concept clarity & real learning.",
        },
        {
          heading: "RESOURCES",
          text: "Curriculum-aligned materials\ntailored for effective self-study.",
        },
        {
          heading: "TESTING",
          text: "Frequent assessments to track           progress & boost performance.",
        },
      ],
    },
  };

  return config[key];
};
