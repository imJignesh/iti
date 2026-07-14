import SubjectSupport from "@/components/shared/SubjectSupport";
import { getSubjectSupportData } from "@/data/subjectSupportConfig";

export default function IbdpCourseCard() {
  const config = getSubjectSupportData("ibdp");
  return <SubjectSupport config={config} />;
}
