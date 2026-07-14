export const getMarqueeData = (key) => {
  const config = {
    act: {
      items: [
        "EXPERT GUIDANCE",
        "GRADE IMPROVEMENT",
        "FREE STUDY RESOURCES",
        "CAREER ADVICE",
      ],
    },
    ap: {
      items: [
        "EXPERT GUIDANCE",
        "GRADE IMPROVEMENT",
        "FREE STUDY RESOURCES",
        "CAREER ADVICE",
      ],
    },
    testSeries: {
      items: [
        "EXPERT GUIDANCE",
        "GRADE IMPROVEMENT",
        "FREE STUDY RESOURCES",
        "CAREER ADVICE",
      ],
    },
    standard: {
      items: [
        "EXPERT GUIDANCE",
        "TAILORED STUDY RESOURCES",
        "PROGRESS TRACKING",
        "PROVEN REAL RESULTS",
        "GRADE IMPROVEMENT",
      ],
    },
    homeCopy: {
      items: [
        "WHERE GRADE IMPROVEMENT BEGINS",
        "WHERE GRADE IMPROVEMENT BEGINS",
        "WHERE GRADE IMPROVEMENT BEGINS",
        "WHERE GRADE IMPROVEMENT BEGINS",
        "WHERE GRADE IMPROVEMENT BEGINS",
      ],
    },
    freedemo: {
      items: [
        "EXPERT GUIDANCE",
        "FREE STUDY RESOURCES",
        "PROGRESS TRACKING",
        "REAL RESULTS",
        "GRADE IMPROVEMENT",
      ],
    },
  };

  return config[key] || config.standard;
};
