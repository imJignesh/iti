import Usps from "@/components/shared/Usps";
import { getUspsData } from "@/data/uspsConfig";

const uspData = getUspsData("economics-tutoring");

export default function EconomicsTutorsUsps() {
  return <Usps config={uspData} />;
}
