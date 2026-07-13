import Usps from "@/components/shared/Usps";
import { getUspsData } from "@/data/uspsConfig";

const uspData = getUspsData("business-tutoring");

export default function BusinessTutorsUsps() {
  return <Usps config={uspData} />;
}
