import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import AddProductForm from "./components/AddProductForm";


function App() {
const [cart, setCart] = useState([]);
const [products, setProducts] = useState([
{ id: 1, name: "Laptop", price: 50000 },
{ id: 2, name: "Mobile", price: 20000 }
]);


const addToCart = (product) => {
setCart([...cart, product]);
};


return (
<div>
<Header count={cart.length} />
<AddProductForm products={products} setProducts={setProducts} />
<ProductList products={products} addToCart={addToCart} />
<Cart cart={cart} />
</div>
);
}


export default App;