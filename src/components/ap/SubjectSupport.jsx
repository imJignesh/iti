import SubjectSupport from "@/components/shared/SubjectSupport";
import { getSubjectSupportData } from "@/data/subjectSupportConfig";

export default function ApCourseCard() {
  const config = getSubjectSupportData("ap");
  return <SubjectSupport config={config} />;
}
