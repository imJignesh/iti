import TrainersShared from "@/components/shared/Trainers";
import { getTrainersData } from "@/data/trainersData";

const trainersData = getTrainersData("ibdp");

export default function Trainers() {
  return (
    <TrainersShared
      trainers={trainersData}
      subHeading="MEET OUR EXPERT IBDP TUTORS"
      title={
        <span className="trainersTitleInner">
          Experienced IBDP <span className="trainersHighlight">Tutors in Dubai</span><br />
          Who Make Every Subject Easier
        </span>
      }
    />
  );
}
