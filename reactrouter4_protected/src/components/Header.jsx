// components/Header.jsx
import { Link } from "react-router-dom";

function Header({ isLoggedIn }) {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "10px", color: "#fff" }}>Home</Link>
      <Link to="/dashboard" style={{ marginRight: "10px", color: "#fff" }}>Dashboard</Link>
      <Link to="/login" style={{ color: "#fff" }}>Login</Link>

      <span style={{ float: "right" }}>
        {isLoggedIn ? "Logged In ✅" : "Logged Out ❌"}
      </span>
    </nav>
  );
}

export default Header;