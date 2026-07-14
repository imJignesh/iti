import SubjectSupport from "@/components/shared/SubjectSupport";
import { getSubjectSupportData } from "@/data/subjectSupportConfig";

export default function MypCourseCard() {
  const config = getSubjectSupportData("myp");
  return <SubjectSupport config={config} />;
}
