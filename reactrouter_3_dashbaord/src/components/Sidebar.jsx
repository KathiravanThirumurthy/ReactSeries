import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#eee", padding: "10px" }}>
      <h3>Dashboard</h3>
      <Link to="/dashboard">Home</Link><br />
      <Link to="/dashboard/courses">Courses</Link><br />
      <Link to="/dashboard/profile">Profile</Link><br />
      <Link to="/dashboard/settings">Settings</Link>
    </div>
  );
}

export default Sidebar;