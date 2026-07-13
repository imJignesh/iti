import SubjectSyllabus from "@/components/shared/SubjectSyllabus";
import { getSubjectSyllabusData } from "@/data/subjectSyllabusConfig";

const subjectSyllabusData = getSubjectSyllabusData("spanish-tutoring");

export default function SpanishSubjectSyllabus() {
  return <SubjectSyllabus config={subjectSyllabusData} />;
}
