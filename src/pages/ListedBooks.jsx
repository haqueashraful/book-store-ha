import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className=" w-full">
      <div className=" w-full p-5 bg-gray-300 rounded-lg">
        <h1 className=" text-black font-bold text-5xl text-center">Books</h1>
      </div>
      <div className="flex items-center justify-center w-full  overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap  text-gray-800">
        <Link
        to='/listedbook'
          onClick={() => setTabIndex(0)}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
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
          className={`flex items-center flex-shrink-0 flex-auto px-5 py-3 space-x-2 ${
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
      </div>

      <Outlet/>
    </div>
  );
};

export default ListedBooks;
