import TrainersShared from "@/components/shared/Trainers";
import { getTrainersData } from "@/data/trainersData";

const trainersData = getTrainersData("myp");

export default function Trainers() {
  return (
    <TrainersShared
      trainers={trainersData}
      subHeading="OUR TUTORS"
      title={<>Experienced MYP <span className="trainersHighlight">Tutors</span> for Every Subject</>}
    />
  );
}
