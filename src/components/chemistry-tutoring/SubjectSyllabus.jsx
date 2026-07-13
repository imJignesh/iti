import SubjectSyllabus from "@/components/shared/SubjectSyllabus";
import { getSubjectSyllabusData } from "@/data/subjectSyllabusConfig";

const subjectSyllabusData = getSubjectSyllabusData("chemistry-tutoring");

export default function ChemistrySubjectSyllabus() {
  return <SubjectSyllabus config={subjectSyllabusData} />;
}
