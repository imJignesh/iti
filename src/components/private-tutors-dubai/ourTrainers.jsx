import TrainersShared from "@/components/shared/Trainers";
import { getTrainersData } from "@/data/trainersData";

const trainersData = getTrainersData("private-tutors-dubai");

export default function Trainers() {
  return <TrainersShared trainers={trainersData} />;
}