import React, { useState } from 'react'

const Formhandling = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });


  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

 function handleSubmit(e) {
    e.preventDefault();
    console.log(formData); // send to server
  }

  return (
   <div>
        <h2>Live Preivew</h2>
        <p>{formData.name}</p>
        <p>{formData.email}</p>
        <p>{formData.course}</p>
        <form onSubmit={handleSubmit}>
      
      <input name="name" onChange={handleChange} />
      <input name="email" onChange={handleChange} />
      <select name="course" onChange={handleChange}>
        <option>React</option>
        <option>Unity</option>
      </select>
      <button type="submit">Apply</button>
    </form>
   </div>
       
   
  )
}

export default Formhandling