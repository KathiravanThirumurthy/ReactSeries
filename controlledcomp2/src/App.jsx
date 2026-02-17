import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

   const handleSubmit = (e) => {
  e.preventDefault();
   console.log(formData);
  };

/*
const handleChange = (e) => {
  
setFormData({
...formData,
[e.target.name]: e.target.value
},console.log(formData));
};
*/

  return (
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
  );
}

export default App;