export const subjectCardCarouselConfig = {
  "a-level": {
    title: "Tutoring That Makes Every A Levels Subject Clear",
    subjects: [
      "A-Level Pure Math",
      "A-Level Statistics",
      "A-Level Further Math",
      "A-Level Physics",
      "A-Level Chemistry",
      "A-Level Biology",
      "A-Level Computer Science",
      "AS Level EVM (Environmental Management)",
      "A-Level Business Studies",
      "A-Level Economics",
      "A-Level Accounting",
      "A-Level English Language & Literature",
      "A-Level French",
      "A-Level Spanish",
      "A-Level Psychology"
    ],
    altText: "a level tutors in dubai"
  },
  ibdp: {
    title: "Tutoring That Makes Every IBDP Subject Clear (HL & SL)",
    subjects: [
      "IB Math AA - Analysis & Approaches",
      "IB Math AI - Applications & Interpretations",
      "IB Physics",
      "IB Chemistry",
      "IB Biology",
      "IB Computer Science",
      "IB Business Management",
      "IB Economics",
      "IB English Language & Literature",
      "IB French Ab Initio & B",
      "IB Spanish Ab Initio & B",
      "IB Psychology"
    ],
    altText: "ibdp tutors in dubai"
  },
  igcse: {
    title: "Tutoring That Makes Every IGCSE Subject Clear",
    subjects: [
      "IGCSE Math (Core & Extended)",
      "IGCSE Further Math",
      "IGCSE Statistics",
      "IGCSE Physics",
      "IGCSE Chemistry",
      "IGCSE Biology",
      "IGCSE Computer Science & ICT",
      "IGCSE/GCSE Double Award Science",
      "IGCSE Combined Science",
      "IGCSE Environmental Management (EVM)",
      "IGCSE Business Studies",
      "IGCSE Economics",
      "IGCSE Accounting",
      "IGCSE English Language",
      "IGCSE English Literature",
      "IGCSE French",
      "IGCSE Spanish",
      "IGCSE Psychology"
    ],
    altText: "igcse tutors in dubai"
  },
  myp: {
    title: "Tutoring That Makes Every IB MYP Subject Clear",
    subjects: [
      "IB MYP Maths - Standard & Extended",
      "IB MYP Physics",
      "IB MYP Chemistry",
      "IB MYP Biology",
      "IB MYP Computer Science",
      "IB MYP Business Management",
      "IB MYP Economics",
      "IB MYP English Language & Literature",
      "IB MYP French"
    ],
    altText: "ib myp tutors in dubai"
  }
};

export const getSubjectCardCarouselData = (key) => subjectCardCarouselConfig[key] || subjectCardCarouselConfig.ibdp;
