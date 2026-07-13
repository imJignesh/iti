import Usps from "@/components/shared/Usps";
import { getUspsData } from "@/data/uspsConfig";

const uspData = getUspsData("maths-tutoring");

export default function MathsTutorsUsps() {
  return <Usps config={uspData} />;
}
