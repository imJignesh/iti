export const curriculumTutorsConfig = {
  tutors: {
    subheading: "WHAT CURRICULUM & STANDARDISED TESTS WE OFFER?",
    titleMobileBreak: true,
    titleBreakPattern: "Curriculum-Based Learning &", // Will split here
  },
  "private-tutors-dubai": {
    subheading: "CURRICULA & STANDARDISED TESTS WE OFFER",
    titleMobileBreak: true,
    titleBreakPattern: "Curriculum-Based Learning &",
  },
  "tutors-jlt-dubai": {
    subheading: "CURRICULA & STANDARDISED TESTS WE OFFER",
    titleMobileBreak: true,
    titleBreakPattern: "Curriculum-Based Learning &",
  },
};

export const getCurriculumTutorsData = (pageKey) => curriculumTutorsConfig[pageKey];
