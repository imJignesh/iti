import Trainers from "@/components/shared/Trainers";

const trainersData = [
  {
    name: "AARAV K.",
    img: "/images/team/tutor-placeholder-transparent-v2.png",
    subtitle: "IB Maths AA and AI, HL and SL",
    experience: "9+ YEARS",
    color: "blue",
  },
  {
    name: "SARA M.",
    img: "/images/team/tutor-placeholder-transparent-v2.png",
    subtitle: "IGCSE and A-Level Chemistry",
    experience: "7+ YEARS",
    color: "green",
  },
  {
    name: "DANIEL R.",
    img: "/images/team/tutor-placeholder-transparent-v2.png",
    subtitle: "A-Level Physics and Maths",
    experience: "11+ YEARS",
    color: "blue",
  },
];

export default function GmbTutors() {
  return <Trainers trainers={trainersData} />;
}
