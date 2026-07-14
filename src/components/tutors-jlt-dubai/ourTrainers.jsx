import TrainersShared from "@/components/shared/Trainers";
import { getTrainersData } from "@/data/trainersData";

const trainersData = getTrainersData("tutors-jlt-dubai");

export default function Trainers() {
  return <TrainersShared trainers={trainersData} />;
}