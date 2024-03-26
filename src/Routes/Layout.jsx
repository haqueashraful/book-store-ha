import { Outlet } from "react-router-dom";
import Nav from "../Navfooter/Nav";
import Footer from "../Navfooter/Footer";

const Layout = () => {
  return (
    <div>
      <div className=" lg:mx-28">
        <Nav />
        <div className=" my-14">
        <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
