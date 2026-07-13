import SubjectSyllabus from "@/components/shared/SubjectSyllabus";
import { getSubjectSyllabusData } from "@/data/subjectSyllabusConfig";

const subjectSyllabusData = getSubjectSyllabusData("biology-tutoring");

export default function BiologySubjectSyllabus() {
  return <SubjectSyllabus config={subjectSyllabusData} />;
}
