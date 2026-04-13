import { useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

export default function Courses() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Courses</h2>

      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>₹{course.price}</p>

          <button onClick={() => navigate(`/course/${course.id}`)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}