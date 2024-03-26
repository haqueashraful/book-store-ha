import { Outlet } from "react-router-dom";
import Nav from "../Navfooter/Nav";
import Footer from "../Navfooter/Footer";

const Layout = () => {
  return (
    <div>
      <div className=" lg:mx-28">
        <Nav />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
