import { useRef } from "react";

function App() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };

  return (
    <div>
      <h2>Uncontrolled Form (Single Ref)</h2>

      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;