import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("");
  const handleClick = () => {
console.log("Button clicked");
};
const greet = (name) => {
alert(`Hello ${name}`);
};
const handleClick1 = (event) => {
console.log(event.type);
};
const handleSubmit = (e) => {
e.preventDefault();
alert("Form Submitted");
};
  return (
    <>
    
      <button onClick={handleClick}>Click</button>
      <button onClick={() => console.log("Clicked")}>Click</button>
      <button onClick={() => greet("Student")}>Greet</button>
      <button onClick={handleClick1}>Click</button>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>Hello {name}</p>
    <form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
    </form>
    <input
  onFocus={() => console.log("Focused")}
  onBlur={() => console.log("Blurred")}
  />
    </>
  )
}

export default App
