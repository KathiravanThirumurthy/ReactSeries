import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

const router = createBrowserRouter([
  { path: "/", element: <Courses /> },
  { path: "/course/:id", element: <CourseDetail /> },
  { path: "/checkout/:id", element: <Checkout /> },
  { path: "/success/:id", element: <Success /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;