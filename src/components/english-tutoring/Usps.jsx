import Usps from "@/components/shared/Usps";
import { getUspsData } from "@/data/uspsConfig";

const uspData = getUspsData("english-tutoring");

export default function EnglishTutorsUsps() {
  return <Usps config={uspData} />;
}
