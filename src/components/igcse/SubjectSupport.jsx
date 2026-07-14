import SubjectSupport from "@/components/shared/SubjectSupport";
import { getSubjectSupportData } from "@/data/subjectSupportConfig";

export default function IgcseCourseCard() {
  const config = getSubjectSupportData("igcse");
  return <SubjectSupport config={config} />;
}
