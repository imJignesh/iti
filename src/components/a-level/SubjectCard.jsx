import SubjectCard from "@/components/shared/SubjectCard";
import { getSubjectCardData } from "@/data/subjectCardConfig";

export default function SubjectsCard() {
  const config = getSubjectCardData("a-level");
  return <SubjectCard config={config} />;
}
