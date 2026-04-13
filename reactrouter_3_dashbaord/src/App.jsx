// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";

import DashboardHome from "./pages/dashboard/DashboardHome";
import Courses from "./pages/dashboard/Courses";
import CourseDetail from "./pages/dashboard/CourseDetail";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard", element: <DashboardHome /> },

      {
        path: "/dashboard/courses",
        element: <Courses />,
        children: [
          {
            path: ":courseId",
            element: <CourseDetail />
          }
        ]
      },

      { path: "/dashboard/profile", element: <Profile /> },
      { path: "/dashboard/settings", element: <Settings /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;