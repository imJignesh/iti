import TrainersShared from "@/components/shared/Trainers";
import { getTrainersData } from "@/data/trainersData";

const trainersData = getTrainersData("myp");

export default function Trainers() {
  return <TrainersShared trainers={trainersData} />;
}
