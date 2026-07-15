import SubjectCard from "@/components/shared/SubjectCard";
import { getSubjectCardData } from "@/data/subjectCardConfig";

export default function SubjectsCard1() {
  const config = getSubjectCardData("act");
  return <SubjectCard config={config} />;
}
