import SubjectSupport from "@/components/shared/SubjectSupport";
import { getSubjectSupportData } from "@/data/subjectSupportConfig";

export default function HomeSchoolingCourseCard() {
  const config = getSubjectSupportData("homeSchooling");
  return <SubjectSupport config={config} />;
}
