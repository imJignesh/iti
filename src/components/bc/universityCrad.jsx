import UniversityCrad from "@/components/shared/UniversityCrad";
import { getUniversityCradData } from "@/data/universityCradConfig";

export default function UniversityLogosCard() {
  const { logos } = getUniversityCradData();
  return <UniversityCrad logos={logos} />;
}
