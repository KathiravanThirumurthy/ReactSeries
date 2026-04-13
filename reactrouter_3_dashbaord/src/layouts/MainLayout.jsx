// layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;