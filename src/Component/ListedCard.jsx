import { Link } from "react-router-dom";

const ListedCard = ({ book }) => {
  const {
    bookid,
    bookName,
    author,
    publisher,
    category,
    review,
    tags,
    totalPages,
    yearOfPublishing,
    rating,
  } = book;
  return (
    <div className="flex w-full border-2 p-5 rounded-lg space-x-2 sm:space-x-4">
      <img
        className="flex-shrink-0 object-cover w-48 h-48 border-transparent rounded outline-none bg-gray-500"
        src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
        alt="Polaroid camera"
      />
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full space-x-2">
          <div className="space-y-1 pb-2">
            <h3 className="text-lg font-semibold leading-snug sm:pr-8">
              {bookName}
            </h3>
            <p className="text-sm text-gray-600">By: {author}</p>
          </div>
        </div>
        <div className=" flex justify-start items-center gap-8">
          <p className="flex gap-3">
            <span className="font-bold text-xl text-black">Tag: </span>
            {tags.map((tag, index) => (
              <span
                className="bg-green-50 rounded-full px-5 py-1 text-green-500 font-semibold"
                key={index}
              >
                #{tag}{" "}
              </span>
            ))}
          </p>

          <p>Year of Publishing: {yearOfPublishing}</p>
        </div>
        <div className=" flex justify-start items-center gap-8">
          <p>Publisher: {publisher}</p>
          <p>Pages: {totalPages}</p>
        </div>
        <div className="divider mt-2 mb-2"></div>
        <div className="flex justify-start items-center gap-8">
          <p className="bg-green-50 rounded-full px-5 py-1 text-green-500 font-semibold">
           Category: {category}
          </p>
          <p className="bg-yellow-50 rounded-full px-5 py-1 text-yellow-500 font-semibold">
           Ratings: {rating}
          </p>

          <div>
            <Link to={`/details/${bookid}`}><button  className="btn h-8 min-h-8 px-5 py-1 rounded-full bg-violet-400 text-white hover:bg-violet-500 ">View details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedCard;
