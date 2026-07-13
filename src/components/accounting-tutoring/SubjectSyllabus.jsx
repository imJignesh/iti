import SubjectSyllabus from "@/components/shared/SubjectSyllabus";
import { getSubjectSyllabusData } from "@/data/subjectSyllabusConfig";

const subjectSyllabusData = getSubjectSyllabusData("accounting-tutoring");

export default function AccountingSubjectSyllabus() {
  return <SubjectSyllabus config={subjectSyllabusData} />;
}
