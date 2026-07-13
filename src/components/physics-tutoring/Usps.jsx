import Usps from "@/components/shared/Usps";
import { getUspsData } from "@/data/uspsConfig";

const uspData = getUspsData("physics-tutoring");

export default function PhysicsTutorsUsps() {
  return <Usps config={uspData} />;
}
