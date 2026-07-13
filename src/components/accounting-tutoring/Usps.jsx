import Usps from "@/components/shared/Usps";
import { getUspsData } from "@/data/uspsConfig";

const uspData = getUspsData("accounting-tutoring");

export default function AccountingTutorsUsps() {
  return <Usps config={uspData} />;
}