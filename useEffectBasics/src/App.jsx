import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
  document.title = `Count: ${count}`;
  }, [count]);
 const handleClick=()=>{
   setCount(count+1);
 }
  return (
    <>
       <p>{count}</p>
       <button onClick={handleClick}>Click</button>
       
    </>
  )
}

export default App
