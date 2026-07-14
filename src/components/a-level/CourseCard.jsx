import SubjectSupport from "@/components/shared/SubjectSupport";
import { getSubjectSupportData } from "@/data/subjectSupportConfig";

export default function ALevelCourseCard() {
  const config = getSubjectSupportData("a-level");
  return <SubjectSupport config={config} />;
}
