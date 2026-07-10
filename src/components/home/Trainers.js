import TrainersComponent from "@/components/shared/Trainers";
import { getTrainersData } from "@/data/trainersData";

export default function Trainers() {
  const trainers = getTrainersData("home");
  return <TrainersComponent trainers={trainers} />;
}
