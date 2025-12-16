import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Login() {
    return <h2>Login Page</h2>;
}
function Dashboard() {
    return <h2>Dashboard</h2>;
}
function CartItems()
{
    return <h2>Cartitems</h2>;
}

function App() {
  const [count, setCount] = useState(0)
  const cart=["Laptop"];
  const isLoggedIn = true;
  const show = true;
  return (
    <>
      
    <h1>{isLoggedIn ? "Welcome" : "Please Login"}</h1>
    {show && <p>Hello!</p>}
    {isLoggedIn ? <Dashboard /> : <Login />}
          {cart.length === 0 ? (
      <p>Your cart is empty</p>
      ) : (
      <CartItems />
      )}
    </>
  )
}

export default App
