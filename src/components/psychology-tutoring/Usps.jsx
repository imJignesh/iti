import Usps from "@/components/shared/Usps";
import { getUspsData } from "@/data/uspsConfig";

const uspData = getUspsData("psychology-tutoring");

export default function PsychologyTutorsUsps() {
  return <Usps config={uspData} />;
}
