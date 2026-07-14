import SubjectSupport from "@/components/shared/SubjectSupport";
import { getSubjectSupportData } from "@/data/subjectSupportConfig";

export default function ActCourseCard() {
  const config = getSubjectSupportData("act");
  return <SubjectSupport config={config} />;
}
