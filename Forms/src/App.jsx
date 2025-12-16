import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [name, setName] = useState("");
  const handleSubmit = (e) => {
  e.preventDefault();
  console.log(name);
  };
  const [formData, setFormData] = useState({
email: "",
password: ""
});
const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
},console.log(formData));
};

  return (
    <>
    <p>{name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />

  <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
  </form>
 <input name="email" onChange={handleChange} />
 <input name="password" onChange={handleChange} />

    </>
  )
}

export default App
