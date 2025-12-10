import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Student'
import Userprofile from './assets/Userprofile'
import Fruitlists from './Fruitlists'
import Studentlists from './Studentlists'
import Actionbutton from './Actionbutton'
import Actioninline from './Actioninline'
import Productlist from './Productlist'

function App() {
  const name="Kathiravan"
  const age="45"
  const person = {
  name: "Arun",
  city: "Chennai",
  age: 21
};
const fruits = ["Apple", "Banana", "Grapes"];
const students = [
  { id: 1, name: "Kavin", age: 20 },
  { id: 2, name: "Priya", age: 22 },
  { id: 3, name: "Arun", age: 21 }
];

const showMessage = () => {
  alert("Hello from Parent!");
};

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 800 }
];

const handleBuy = (pName) => {
  alert("You bought " + pName);
};


  return (
    <>
       <Student stuname={name} age={age}/>
       <Userprofile data={person}/>
       <Fruitlists items={fruits}/>
       <Studentlists data={students}/>
       <Actionbutton handleClick={showMessage}/>
       <Actioninline handleClick1={()=>alert("Inline Function!")}/>
       <Productlist items={products} onBuy={handleBuy} />
    </>
  )
}

export default App
