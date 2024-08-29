import { Outlet } from "react-router-dom";
import Navbar from "../partials/Navbar";
import Footer from "../partials/Footer";

const Layout = () => {
  return (
    <>
      <div className="swap-navbar">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
