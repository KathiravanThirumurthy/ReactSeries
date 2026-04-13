import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

export default function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find(c => c.id === id);

  if (!course) return <h2>Invalid Course</h2>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Checkout</h2>
      <p>{course.name}</p>
      <p>₹{course.price}</p>

      <button onClick={() => navigate(-1)}>⬅ Back</button>

      <button onClick={() => navigate(`/success/${id}`)}>
        Pay Now
      </button>
    </div>
  );
}