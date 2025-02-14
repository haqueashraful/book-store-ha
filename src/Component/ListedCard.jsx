import { CiTimer } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FiUsers } from "react-icons/fi";
import { FaRegCopy } from "react-icons/fa6";
import PropTypes from 'prop-types'

const ListedCard = ({ book }) => {
  const {
    bookid,
    bookName,
    author,
    image,
    publisher,
    category,
    tags,
    totalPages,
    yearOfPublishing,
    rating,
  } = book;
  return (
    <div className="md:flex w-full border-2 p-5 rounded-lg space-x-2 sm:space-x-4">
      <img
        className="flex-shrink-0 object-cover lg:w-48 md:w-48  w-full border-transparent rounded outline-none bg-gray-500"
        src={image}
        alt={bookName}
      />
      <div className="lg:flex md:flex flex-col space-y-4 w-full">
        <div className="flex justify-between w-full space-x-2">
          <div className="space-y-1 pb-2">
            <h3 className="text-2xl font-semibold leading-snug sm:pr-8">
              {bookName}
            </h3>
            <p className="text-lg text-gray-600">By: {author}</p>
          </div>
        </div>
        <div className=" lg:flex md:flex justify-start items-center gap-8">
          <div className="lg:flex md:flex gap-3">
            <p className="font-bold lg:text-xl md:text-xl text-black">Tag: </p>
            <p className=" flex">
              {tags.map((tag, index) => (
                <span
                  className="bg-green-50 rounded-full px-5 py-1 text-green-500 md:font-semibold font-normal lg:font-semibold"
                  key={index}
                >
                  #{tag}
                </span>
              ))}
            </p>
          </div>

          <p className="flex items-center">
            <CiTimer className="mr-2" /> Year of Publishing: {yearOfPublishing}
          </p>
        </div>
        <div className=" lg:flex md:flex justify-start items-center gap-8">
          <p className="flex items-center">
            <FiUsers className="mr-2" />
            Publisher: {publisher}
          </p>
          <p className="flex items-center">
            <FaRegCopy className="mr-2" />
            Pages: {totalPages}
          </p>
        </div>
        <div className="divider mt-2 mb-2"></div>
        <div className=" md:flex space-y-3 md:space-y-0 static justify-start items-center gap-8">
          <p className="bg-green-50 rounded-full px-5 py-1 text-green-500 font-semibold">
            Category: {category}
          </p>
          <p className="bg-yellow-50 rounded-full px-5 py-1 text-yellow-500 font-semibold">
            Ratings: {rating}
          </p>

          <div className=" lg:w-1/2">
            <Link to={`/details/${bookid}`}>
              <button className="btn h-8 min-h-8 px-5 py-1 lg:w-auto md:w-auto w-full rounded-full bg-violet-400 text-white hover:bg-violet-500 ">
                View details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ListedCard.propTypes = {
  book: PropTypes.object,
}

export default ListedCard;
