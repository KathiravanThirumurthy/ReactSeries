// App.jsx
import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ Restore login from localStorage
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // ✅ Logout logic
  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsLoggedIn(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header isLoggedIn={isLoggedIn} />
          <h1 style={{ textAlign: "center" }}>Home Page</h1>
        </>
      )
    },
    {
      path: "/login",
      element: <Login setIsLoggedIn={setIsLoggedIn} />
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute isLoggedIn={isLoggedIn}>
          <>
            <Header isLoggedIn={isLoggedIn} />
            <Dashboard handleLogout={handleLogout} />
          </>
        </ProtectedRoute>
      )
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;