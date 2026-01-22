import Cart from "./Cart";

function Header({ cartCount }) {
  return (
    <header
      style={{
        padding: "15px",
        background: "#222",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <h2>MyShop</h2>

      <nav>
        <a href="#" style={linkStyle}>Home</a>
        <a href="#" style={linkStyle}>Products</a>
        <a href="#" style={linkStyle}>About</a>
      </nav>

      <Cart cartCount={cartCount} />
    </header>
  );
}

const linkStyle = {
  color: "#fff",
  marginRight: "15px",
  textDecoration: "none"
};

export default Header;
