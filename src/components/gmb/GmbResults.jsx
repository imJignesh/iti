import { useState } from "react";
import StandardisedTests from "@/components/homeCopy/Test";

const resultsData = [
  {
    number: "SAMPLE",
    title: "5 to 7",
    img: "/images/test-section1.webp",
    label: "IGCSE MATHS, YEAR 11",
    details: [
      "Grade 5 predicted in October, grade 7 achieved in the May series.",
      "Student R.S., JLT centre.",
    ],
    btn: "BOOK A FREE DEMO",
    link: "/join-free-demo-class",
  },
  {
    number: "SAMPLE",
    title: "5 to 6",
    img: "/images/test-section2.webp",
    label: "IB PHYSICS HL",
    details: [
      "Predicted 5 at the start of Year 13, final 6 in May.",
      "Student A.T., JLT centre.",
    ],
    btn: "BOOK A FREE DEMO",
    link: "/join-free-demo-class",
  },
  {
    number: "SAMPLE",
    title: "C to A",
    img: "/images/test-section3.webp",
    label: "A-LEVEL CHEMISTRY",
    details: [
      "Mock result C in January, A in the summer exam.",
      "Student M.H., JLT centre.",
    ],
    btn: "BOOK A FREE DEMO",
    link: "/join-free-demo-class",
  },
];

export default function GmbResults() {
  const [active, setActive] = useState(1);

  return (
    <StandardisedTests
      active={active}
      setActive={setActive}
      cards={resultsData}
      eyebrow="RESULTS"
      heading="Grade improvements at the"
      headingHighlight="JLT centre"
      description="Each result is shown with the family's consent, and names are replaced by initials and year group. Sample results are for layout only and will be replaced with verified results and written consent."
    />
  );
}
