import SubjectSyllabus from "@/components/shared/SubjectSyllabus";
import { getSubjectSyllabusData } from "@/data/subjectSyllabusConfig";

const subjectSyllabusData = getSubjectSyllabusData("physics-tutoring");

export default function PhysicsSubjectSyllabus() {
  return <SubjectSyllabus config={subjectSyllabusData} />;
}
