import CurriculumTutors from "@/components/shared/CurriculumTutors";
import { getCurriculumTutorsData } from "@/data/curriculumTutorsConfig";

export default function IBCurriculumStages() {
  const config = getCurriculumTutorsData("private-tutors-dubai");
  return <CurriculumTutors config={config} />;
}
