import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find(c => c.id === id);

  if (!course) return <h2>Course Not Found</h2>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{course.name}</h2>
      <p>Price: ₹{course.price}</p>

      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <button onClick={() => navigate(`/checkout/${id}`)}>
        Enroll Now
      </button>
    </div>
  );
}