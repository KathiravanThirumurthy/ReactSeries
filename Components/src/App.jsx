import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './Welcome'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <p>Component Description</p>
       <Header />
       <Welcome />
    </>
  )
}

export default App
