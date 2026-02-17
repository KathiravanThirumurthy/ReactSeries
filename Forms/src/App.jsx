import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [name, setName] = useState("");


  const handleSubmit = (e) => {
  e.preventDefault();
  //console.log(name);
  console.log(formData);
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

const handleNameChange = (event) => {
    setName(event.target.value);
  };
/*

const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData(prev => ({
    ...prev,
    [name]: value
  },console.log(formData)));
};

*/
  return (
    <>
    <div>
      
      <p>{name}</p>

      <input
        type="text"
        value={name}
         // onChange={(e) => setName(e.target.value)}
        onChange={handleNameChange}
      />
    </div>
  
    

  <form onSubmit={handleSubmit}>
        <input
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
  </form>


    </>
  )
}

export default App
