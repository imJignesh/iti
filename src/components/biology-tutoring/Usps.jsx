import Usps from "@/components/shared/Usps";
import { getUspsData } from "@/data/uspsConfig";

const uspData = getUspsData("biology-tutoring");

export default function BiologyTutorsUsps() {
  return <Usps config={uspData} />;
}