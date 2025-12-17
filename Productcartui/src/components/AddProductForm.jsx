/*Forms + State*/
import { useState } from "react";


function AddProductForm({ products, setProducts }) {
const [formData, setFormData] = useState({
name: "",
price: ""
});


const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};


const handleSubmit = (e) => {
e.preventDefault();
setProducts([
...products,
{ id: Date.now(), ...formData }
]);
setFormData({ name: "", price: "" });
};


return (
<form onSubmit={handleSubmit}>
<input name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" />
<input name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
<button>Add Product</button>
</form>
);
}


export default AddProductForm;