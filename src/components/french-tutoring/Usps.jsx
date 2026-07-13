import Usps from "@/components/shared/Usps";
import { getUspsData } from "@/data/uspsConfig";

const uspData = getUspsData("french-tutoring");

export default function FrenchTutorsUsps() {
  return <Usps config={uspData} />;
}
