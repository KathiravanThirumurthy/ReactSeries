import { useParams } from "react-router-dom";

export default function CourseDetail() {
  const { courseId } = useParams();

  return <h3>Course Detail: {courseId}</h3>;
}