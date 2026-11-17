import SubjectCard from "@/components/shared/SubjectCard";
import { getSubjectCardData } from "@/data/subjectCardConfig";

export default function SubjectsCard() {
  const config = getSubjectCardData("igcse");
  return <SubjectCard config={config} />;
}
