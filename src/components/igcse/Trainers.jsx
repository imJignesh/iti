import TrainersShared from "@/components/shared/Trainers";
import { getTrainersData } from "@/data/trainersData";

const trainersData = getTrainersData("igcse");

export default function Trainers() {
  return <TrainersShared trainers={trainersData} />;
}
