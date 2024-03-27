import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MyContext } from "../Component/Context";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { handleSortChange } = useContext(MyContext);

  return (
    <div className=" w-full">
      <div className=" w-full p-5 bg-gray-300 rounded-lg">
        <h1 className=" text-violet-400 font-bold text-5xl text-center">Books</h1>
      </div>
      <div className="my-4 text-center">
        <select
          id="sort"
          className="px-4 py-2 rounded-lg bg-green-400 outline-none border-none text-2xl text-white hover:bg-green-500"
          onChange={handleSortChange}
        >
          <option className=" hover:bg-white hover:text-black " value="rating">Ratings</option>
          <option value="totalPages">Number of pages</option>
          <option value="yearOfPublishing">Publishing year</option>
        </select>
      </div>
      <div className="flex items-center justify-center my-10 w-full  overflow-x-auto overflow-y-hidden sm:justify-start  flex-nowrap  text-gray-800">
        <Link
          className={`flex items-center flex-shrink-0 hidden lg:block md:block  px-10 py-6 space-x-2 ${
            tabIndex === 5 ? "border border-b-0" : "border-b"
          } rounded-t-lg border-gray-600 text-gray-900`}
        ></Link>
        <Link
          onClick={() => setTabIndex(0)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 lg:px-5 md:px-5 px-3 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } rounded-t-lg border-gray-600 text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Read Books</span>
        </Link>
        <Link
          to="wishlist"
          onClick={() => setTabIndex(1)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0  lg:px-5 md:px-5 px-3 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg border-gray-600 text-gray-900`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Wishlist Books</span>
        </Link>
        <Link
          className={`flex items-center flex-auto hidden lg:block md:block flex-shrink-0  px-5 py-6 space-x-2 ${
            tabIndex === 5 ? "border border-b-0" : "border-b"
          } rounded-t-lg border-gray-600 text-gray-900`}
        ></Link>
      </div>
      <div className="my-10">
        <Outlet />
      </div>
    </div>
  );
};

export default ListedBooks;
