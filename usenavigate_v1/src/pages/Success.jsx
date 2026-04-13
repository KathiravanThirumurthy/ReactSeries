import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

export default function Success() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find(c => c.id === id);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>🎉 Payment Successful!</h2>
      <p>Enrolled in: {course?.name}</p>

      <button onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
}