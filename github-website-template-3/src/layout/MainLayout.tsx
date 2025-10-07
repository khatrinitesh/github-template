import { Outlet } from "react-router-dom";
import Footer from "./../components/footer/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="appLayout">
        <Navbar />
        <div className="mainContent h-dvh">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
