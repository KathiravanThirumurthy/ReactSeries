import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Mobile Phone", price: 15000 },
  { id: 2, name: "Laptop", price: 55000 },
  { id: 3, name: "Headphones", price: 2000 },
  { id: 4, name: "Desktop", price: 45000 }
];

function ProductList({ addToCart }) {
  return (
    <main style={{ padding: "20px" }}>
      <h2>Products</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </main>
  );
}

export default ProductList;
