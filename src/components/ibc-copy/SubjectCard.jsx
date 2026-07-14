import SubjectCard from "@/components/shared/SubjectCard";
import { getSubjectCardData } from "@/data/subjectCardConfig";

export default function SubjectsCard1() {
  const config = getSubjectCardData("ibc-copy");
  return <SubjectCard config={config} />;
}
