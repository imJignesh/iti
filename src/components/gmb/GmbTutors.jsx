import Trainers from "@/components/shared/Trainers";

const trainersData = [
  {
    name: "SHWETHA",
    img: "/images/team/shwetha.webp",
    subtitle: "Biology",
    experience: "6+ YEARS",
    color: "green",
  },
  {
    name: "ASHWANI",
    img: "/images/team/ashwani.webp",
    subtitle: "Maths",
    experience: "7+ YEARS",
    color: "blue",
  },
  {
    name: "HARSHA",
    img: "/images/team/harsha.webp",
    subtitle: "Economics & Business",
    experience: "10+ YEARS",
    color: "green",
  },
];

export default function GmbTutors() {
  return (
    <Trainers
      trainers={trainersData}
      subHeading="OUR TUTORS"
      title={<>Experienced <span className="trainersHighlight">Tutors</span> for Your Success Journey</>}
    />
  );
}
