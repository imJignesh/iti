import Usps from "@/components/shared/Usps";
import { getUspsData } from "@/data/uspsConfig";

const uspData = getUspsData("spanish-tutoring");

export default function SpanishTutorsUsps() {
  return <Usps config={uspData} />;
}
