// Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <Header />

        <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;