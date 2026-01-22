import { useState } from "react";
import StudentInput from "./StudentInput";
import StudentPreview from "./StudentPreview";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
function App() {
  // Shared state in parent
  const [message, setMessage] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>Sibling Communication Example</h1>

      <StudentInput setMessage={setMessage} />
      <StudentPreview message={message} />

      <h1>ECommerce</h1>
      <Header cartCount={cartCount} />
      <ProductList addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
