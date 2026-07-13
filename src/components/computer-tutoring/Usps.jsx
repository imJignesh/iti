import Usps from "@/components/shared/Usps";
import { getUspsData } from "@/data/uspsConfig";

const uspData = getUspsData("computer-tutoring");

export default function ComputerTutorsUsps() {
  return <Usps config={uspData} />;
}
