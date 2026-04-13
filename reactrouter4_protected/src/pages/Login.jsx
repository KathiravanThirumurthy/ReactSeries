// pages/Login.jsx
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true"); // persist login
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;