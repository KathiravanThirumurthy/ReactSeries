// components/Header.jsx
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>StudentApp</h2>

      <nav style={styles.nav}>
        <NavLink to="/" style={getLinkStyle}>Home</NavLink>
        <NavLink to="/dashboard" style={getLinkStyle}>Dashboard</NavLink>
        <NavLink to="/login" style={getLinkStyle}>Login</NavLink>
      </nav>
    </header>
  );
}

const getLinkStyle = ({ isActive }) => ({
  color: isActive ? "yellow" : "white",
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal"
});

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 20px",
    background: "#111",
    color: "#fff"
  },
  logo: {
    margin: 0
  },
  nav: {
    display: "flex",
    gap: "20px"
  }
};

export default Header;