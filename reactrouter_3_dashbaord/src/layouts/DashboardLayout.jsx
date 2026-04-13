// layouts/DashboardLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{ padding: "20px", width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;