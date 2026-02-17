import { useRef } from "react";

function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    console.log("Form Data:", formData);
  };

  return (
    <div>
      <h2>Register Form (Uncontrolled)</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" ref={nameRef} />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" ref={emailRef} />
        </div>

        <div>
          <label>Password:</label>
          <input type="password" ref={passwordRef} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;