import { Link, useParams } from "react-router-dom";
import { CiStar } from "react-icons/ci";

const Card = ({ book }) => {
  //   console.log(book);
  const {
    bookid,
    bookName,
    author,
    publisher,
    category,
    image,
    review,
    tags,
    totalPages,
    yearOfPublishing,
    rating,
  } = book;

  const navigateToDetails = () => {
    // console.log(bookid);
  };
  return (
    <Link to={`/details/${bookid}`}>
      <div
        onClick={navigateToDetails}
        className="card w-full bg-base-100 shadow-xl border hover:border-2 hover:border-violet-500"
      >
        <figure className="px-5 pt-5 rounded-lg">
          <img
            src={image}
            alt={bookName}
            className="rounded-xl w-96 h-96"
          />
        </figure>
        <div className="card-body space-y-5">
          <div className=" space-x-5">
            {tags.map((tag, index) => (
              <span
                className="bg-green-50 rounded-full lg:px-5 px-1 py-1 text-green-500 font-semibold"
                key={index}
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className=" space-y-3">
            <h2 className="card-title text-2xl font-bold">{bookName}</h2>
            <p className=" text-lg font-medium ">By: {author}</p>
          </div>
          <div className="border-b-2 border-dashed"></div>
          <div className=" flex justify-between items-center ">
            <p className=" text-xl">{category}</p>
            <p className=" justify-end flex gap-5 items-center text-xl text-left">
              {rating}
              <CiStar />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
