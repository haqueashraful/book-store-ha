import { Link, NavLink } from "react-router-dom";
import './Nav.css'
const Nav = () => {
  return (
    <div className="navbar bg-base-100 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink className="btn  bg-violet-400 text-xl text-white hover:bg-[#4e0ce8]" to="/">Home</NavLink>
            <NavLink className="btn  bg-violet-400 text-xl text-white hover:bg-[#4e0ce8]" to="/listedbook">Listed Book</NavLink>
            <NavLink className="btn  bg-violet-400 text-xl text-white hover:bg-[#4e0ce8]" to="/pagetoread">Pages to Read</NavLink>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-2xl text-violet-400 hover:bg-[#4e0ce8] hover:text-white">Book Store</Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-5">
          <NavLink className="btn  bg-violet-400 text-xl text-white hover:bg-[#4e0ce8]" to="/">Home</NavLink>
          <NavLink className="btn  bg-violet-400 text-xl text-white hover:bg-[#4e0ce8]" to="/listedbook">Listed Book</NavLink>
          <NavLink className="btn  bg-violet-400 text-xl text-white hover:bg-[#4e0ce8]" to="/pagetoread">Pages to Read</NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <Link to='/workonit' className="btn  bg-violet-400 text-xl text-white hover:bg-[#4e0ce8]">Sign in</Link>
        <Link to='/workonit' className="btn  bg-indigo-500 text-xl text-white hover:bg-[#4e0ce8] ">Sign up</Link>
      </div>
    </div>
  );
};

export default Nav;
