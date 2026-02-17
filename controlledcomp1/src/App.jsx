import { useState } from "react";

function App() {
  const [name, setName] = useState("");
 const handleChangeName=(e)=>
 {
   
   setName(e.target.value);
    console.log(name);
 }
  return (
    <div>
      <p>Typed: {name}</p>

      <input
        type="text"
        value={name}
       // onChange={(e) => setName(e.target.value)}
       onChange={handleChangeName}

      />
    </div>
  );
}

export default App;