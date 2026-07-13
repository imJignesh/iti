import Usps from "@/components/shared/Usps";
import { getUspsData } from "@/data/uspsConfig";

const uspData = getUspsData("chemistry-tutoring");

export default function ChemistryTutorsUsps() {
  return <Usps config={uspData} />;
}
