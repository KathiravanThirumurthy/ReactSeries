function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        width: "200px",
        borderRadius: "5px"
      }}
    >
      <h4>{product.name}</h4>
      <p>₹ {product.price}</p>

      <button onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
