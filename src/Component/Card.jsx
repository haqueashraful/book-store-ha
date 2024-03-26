import { Link, useParams } from "react-router-dom";

const Card = ({ book }) => {
//   console.log(book);
  const { bookName, author, review, bookid } = book;

  const navigateToDetails = () => {
    // console.log(bookid);
  };
  return (
    <Link to={`/details/${bookid}`}>
      <div
        onClick={navigateToDetails}
        className="card w-full bg-base-100 shadow-xl border hover:border-2 hover:border-violet-500"
      >
        <figure className="px-5 pt-5">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{bookName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn bg-violet-400 text-white hover:bg-violet-500">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
