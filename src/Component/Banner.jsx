import { Link } from "react-router-dom";
import cover from "../assets/cover.png";
const Banner = () => {
  return (
    <section className="bg-[#1313130D] rounded-xl">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center gap-10 p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Books to
            <span className="text-violet-400"> Freshen </span>up your bookshelf
          </h1>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
            to='/listedbook'
              rel="noopener noreferrer"
              href="#"
              className="btn  text-lg font-semibold rounded-lg bg-violet-400 hover:bg-violet-500 text-white"
            >
              View the list
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={cover}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 border border-dashed border-gray-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
