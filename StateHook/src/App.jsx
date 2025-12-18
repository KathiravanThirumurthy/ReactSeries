import React,{useState} from 'react'
import Gallery from './components/Gallery';


const App = () => {
const [counter,setCounter]=useState(0);
let count=0
const handleClick=()=>{
  count++;
   console.log(count);
   setCounter(counter+1);
}

  return (
    <div>
      <p>Count:{counter}</p>
      <button onClick={handleClick} >Counter</button>
      <Gallery />
     {/* <Gallery /> */} 
       
    </div>
  )
}

export default App