import { Link, Outlet } from "react-router-dom";

export default function Courses() {
  return (
    <div>
      <h2>Courses</h2>
      
      <Link to="101">React Course</Link><br />
      <Link to="102">Node Course</Link>

      <Outlet />
    </div>
  );
}