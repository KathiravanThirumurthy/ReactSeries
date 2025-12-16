A list means displaying multiple similar UI elements using data.
student list
product list
cart list
notifications
###
Basic eg :
const fruits = ["Apple", "Banana", "Orange"];
<ul>
{fruits.map((fruit) => (
<li>{fruit}</li>
))}
</ul>

###
Why map() and not for loop?
for(let i=0;i<fruits.length;i++){} - not allowed inside jsx
{fruits.map(...) } - correct 
JSX expects expressions, not statements

###
{fruits.map((fruit) => (
<li>{fruit}</li>
))} react warning - each child should have unique key

###
What is Key ?
A key is a unique identifier for each item in a list.
{fruits.map((fruit, index) => (
<li key={index}>{fruit}</li>
))}
Identify items uniquely
Update only changed elements
Improve performance

###
List of Object
const products = [
{ id: 1, name: "Laptop", price: 50000 },
{ id: 2, name: "Mobile", price: 20000 }
];
<ul>
{products.map((item) => (
<li key={item.id}>
{item.name} - ₹{item.price}
</li>
))}
</ul>

###
using index as key - when Allowed
key={index}
Avoid
Dynamic lists
Add / remove / reorder items
Acceptable
Static list
No changed accepted

###
Conditional Rendering with Lists
Empty State Eg:
{products.length === 0 ? (
<p>No products available</p>
) : (
<ul>
{products.map((p) => (
<li key={p.id}>{p.name}</li>
))}
</ul>
)}

###
Rendering components in Lists
function Product({ item }) {
return <li>{item.name}</li>;
}

{products.map((p) => (
<Product key={p.id} item={p} />
))}



