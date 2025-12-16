import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './components/Child'

function App() {
  /* state with int */
  const [count, setCount] = useState(0)
  /* state with strings */
  const [name, setName] = useState("Guest");
  /* state with Objects */
  const [user, setUser] = useState({ name: "John", age: 20 });
 /* state with Array */
  const [items, setItems] = useState(["Apple"]);
  /* Toggle State ( Boolean) */
  const [show, setShow] = useState(true);
  return (
    <>
      <h2>Count : {count}</h2>
      <h2>Name : {name}</h2>
      <h2>Name : {user.name} - Age : {user.age}</h2>
      <h2>Fruits :{items}</h2>
      {show && <p>Hello!</p>}
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={() => setName("React Student")}>Change Name</button>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}> Increase Age</button>
      <button onClick={() => setItems([...items, "Orange"])}> Add Item</button>
      <Child count={count} />
      <button onClick={() => setShow(!show)}>Toggle</button>
    </>
  )
}

export default App
