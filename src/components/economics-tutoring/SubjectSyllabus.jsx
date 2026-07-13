import SubjectSyllabus from "@/components/shared/SubjectSyllabus";
import { getSubjectSyllabusData } from "@/data/subjectSyllabusConfig";

const subjectSyllabusData = getSubjectSyllabusData("economics-tutoring");

export default function EconomicsSubjectSyllabus() {
  return <SubjectSyllabus config={subjectSyllabusData} />;
}
