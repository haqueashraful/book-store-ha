import { Outlet } from "react-router-dom";
import Nav from "../Navfooter/Nav";
import Footer from "../Navfooter/Footer";

const Layout = () => {
  return (
    <div className=" font-[playfair]">
      <div className=" lg:mx-14 xl:mx-28 md:mx-12 mx-2 ">
        <Nav />
        <div className=" lg:my-14 md:my-8 my-4">
        <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
