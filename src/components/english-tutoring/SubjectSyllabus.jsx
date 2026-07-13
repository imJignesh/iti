import SubjectSyllabus from "@/components/shared/SubjectSyllabus";
import { getSubjectSyllabusData } from "@/data/subjectSyllabusConfig";

const subjectSyllabusData = getSubjectSyllabusData("english-tutoring");

export default function EnglishSubjectSyllabus() {
  return <SubjectSyllabus config={subjectSyllabusData} />;
}
