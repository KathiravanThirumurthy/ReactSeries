import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/product/101">Product</Link>
    </nav>
  );
}

export default Header