import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'

function App() {
  const [count, setCount] = useState(0)
  const fruits = ["Apple", "Banana", "Orange"];
  const products = [
{ id: 1, name: "Laptop", price: 50000 },
{ id: 2, name: "Mobile", price: 20000 }
];
  return (
    <>
      <ul>
      {fruits.map((fruit,index) => (
      <li key={index}>{fruit}</li>
      ))}
      </ul>

      <ul>
          {products.map((item) => (
          <li key={item.id}>
          {item.name} - ₹{item.price}
          </li>
          ))}
      </ul>

      {products.length === 0 ? (
      <p>No products available</p>
      ) : (
      <ul>
      {products.map((p) => (
      <li key={p.id}>{p.name}</li>
      ))}
      </ul>
      )}

      {products.map((p) => (
        <Product key={p.id} item={p} />
      ))}
    
    </>
  )
}

export default App
