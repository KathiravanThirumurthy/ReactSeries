/*Lists & Events*/
function ProductList({ products, addToCart }) {
return (
<div>
<h2>Products</h2>
<ul>
{products.map((p) => (
<li key={p.id}>
{p.name} - ₹{p.price}
<button onClick={() => addToCart(p)}>Add</button>
</li>
))}
</ul>
</div>
);
}


export default ProductList;