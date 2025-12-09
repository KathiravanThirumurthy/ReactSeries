import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name = "Kathir";
  const age = 30;
  const product = "React Basics Class";

  const isLoggedIn = false;
  const element = <h1>{isLoggedIn ? 'Welcome back!' : 'Please sign in.'}</h1>;

  const messages = ['Message 1', 'Message 2'];
  /*
  const msg = (
  <div>
      {messages.length > 0 && <p>You have {messages.length} messages.</p>}
  </div>
  );*/
const numbers = [1, 2, 3, 4, 5];
  return (
    <>
    <div>
            <h1>Welcome to JSX Basics</h1>
            <p>This is our first React+JSX example 🚀</p>

            {/* Displaying variables */}
            <h3>Student Name: {name}</h3>
            <p>Age: {age}</p>

            {/* Inline Expression */}
            <p>2 + 2 = {2 + 2}</p>

            {/* JavaScript expression inside JSX */}
            <p>Uppercase Name: {name.toUpperCase()}</p>

            {/* Using template strings */}
            <p>Today’s Lesson: {`Learning ${product}`}</p>
            <h2 style={{ color: "green" }}>Practicing JSX</h2>

            {/* Conditional rednering*/}
            <p>{element}</p>
           
            <div>
              {messages.length > 0 && (
                <p>You have {messages.length} messages.</p>
              )}
            </div>

            {/* List rednering*/}
            <ul>
            {numbers.map((number) => (
              <li key={number}>{number}</li>
            ))}
          </ul>



    </div>
    </>
  )
}

export default App
