What is Routing? (Beginner)
Simple Definition
Routing means showing different components based on URL.
npm install react-router-dom
Links Prevents page reload

Nested Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> }
    ]
  }
]);

Layout.jsx
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>Header</h1>
      <Outlet />
    </div>
  );
}