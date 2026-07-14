// Subject Card data configuration for subject-support pages
// Each page has its own config object with data only (no structure/CSS)

export const subjectCardConfig = {
  bc: {
    title:
      'Tutoring That Makes Every <br /> <span class="highlight"> Subject </span>Clear',
    subjectRows: [
      ["Math (Core & Extended)"],
      ["Further Math", "Statistics"],
      ["Physics", "Chemistry", "Biology"],
      ["Computer Science & ICT", "IGCSE/GCSE Double Award Science"],
      ["Combined Science", "Environmental Management (EVM)"],
      ["Business Studies", "Economics", "Accounting"],
      ["English Language", "English Literature"],
      ["French", "Spanish"],
    ],
    titleTag: "h2",
    bubbleTag: "div",
    bubblePadding: "10px 55px",
    bubblePadding1199: "10px 30px",
    bubblePaddingMobile: "0.5rem 1rem",
    altText: "bg-shape",
  },
  ibc: {
    title:
      'Tutoring That Makes Every <br /> IB  <span class="highlight"> Subject </span> Clear (HL & SL)',
    subjectRows: [
      ["Physics", "Chemistry", "Biology"],
      ["Computer Science", "Economics"],
      ["Maths Analysis & Approaches (AA)", "Maths Applications & Interpretations (AI)"],
      ["English Language & Literature", "French Ab Initio & B"],
      ["Business Management"],
      ["Spanish", "Psychology"],
    ],
    titleTag: "h3",
    bubbleTag: "h3",
    altText: "ib tutor in dubai",
  },
  "ibc-copy": {
    title:
      'Tutoring That Makes Every <br /> IB  <span class="highlight"> Subject </span> Clear (HL & SL)',
    subjectRows: [
      ["Physics", "Chemistry", "Biology"],
      ["Computer Science", "Economics"],
      ["Maths Analysis & Approaches (AA)", "Maths Applications & Interpretations (AI)"],
      ["English Language & Literature", "French Ab Initio & B"],
      ["Business Management"],
      ["Spanish", "Psychology"],
    ],
    titleTag: "h3",
    bubbleTag: "h3",
    altText: "ib tutor in dubai",
  },
  freedemo: {
    titleVariant: "freedemo",
    subjectRows: [
      ["English", "French", "Spanish"],
      ["Computer Science", "Economics", "Biology"],
      ["Chemistry", "Physics", "Maths"],
      ["Business Studies", "Accounting", "Psychology"],
    ],
    titleTag: "h3",
    bubbleTag: "h3",
    altText: "ib tutor in dubai",
    subjectLinks: {
      English: "/english-tutor-in-dubai",
      French: "/french-tutor-in-dubai",
      Spanish: "/spanish-tutor-in-dubai",
      "Computer Science": "/computer-science-tutor-in-dubai",
      Economics: "/economics-tutor-in-dubai",
      Biology: "/biology-tutor-in-dubai",
      Chemistry: "/chemistry-tutor-in-dubai",
      Physics: "/physics-tutor-in-dubai",
      Maths: "/maths-tutor-in-dubai",
      "Business Studies": "/business-studies-tutor-in-dubai",
      Accounting: "/accounting-tutor-in-dubai",
      Psychology: "/psychology-tutor-in-dubai",
    },
  },
  "test-series": {
    subHeading: "Maximize Your Grades",
    title:
      'Core High-Difficulty <span class="highlight"> Subjects Covered </span>',
    description:
      "Comprehensive coverage designed to maximize your final exam performance with Ignite.",
    subjectRows: [
      ["Mathematics", "English Language"],
      ["English Literature", "Physics", "Chemistry"],
      ["Biology", "Economics", "Business Studies"],
      ["Accounting", "Computer Science"],
    ],
    titleTag: "h3",
    bubbleTag: "h3",
    altText: "ib tutor in dubai",
  },
};

export const getSubjectCardData = (key) => subjectCardConfig[key];
