import { Link } from "react-router-dom";
import workonit from "../assets/workonit.svg";
const WorkOnIt = () => {
  return (
    <div className=" flex-col justify-center items-center">
      <h1 className="text-black text-7xl text-center font-black">
        Under Consturction!!
      </h1>
      <img className=" w-96 mx-auto h-96" src={workonit} alt="" />
      <div className=" flex justify-center items-center">
        <Link
          to='/'
          className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">
           Back to Home
          </span>
          <span className="relative invisible">Back to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default WorkOnIt;
