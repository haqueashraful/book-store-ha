import { useParams } from "react-router-dom";
import { getItem, saveItem } from "../Utils/shared";
import toast from "react-hot-toast";

const Details = () => {
  const books = getItem('books')
  const { id } = useParams();
  const book = books[0]?.find((book) => book.bookid === parseInt(id));


  if (!book) {
    return <div>Book not found...</div>; 
  }

  const addToReadList = () => {
    const readedList = getItem("readed") || [];
    const exist = readedList.find((b) => b.bookid === book.bookid);
    if (exist) {
      toast.error("Already Readed");
    } else {
      toast.success("Complete Readed")
      saveItem('readed', book);
    }
  };

  const addToWishList = () => {
    const readedList = getItem("readed") || [];
    const exist = readedList.find((b) => b.bookid === book.bookid);
    if (exist) {
      toast.error("Already readed");
    } else {
      saveItem("wishes", book);
      toast.success("successFully Added")
    }
  };

  const {
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

  return (
    <div className="card card-side w-full bg-base-100 shadow-xl">
      <figure className="w-1/2 bg-violet-50">
        <img
          className="w-1/2"
          src={image}
          alt={bookName}
        />
      </figure>
      <div className="card-body w-1/2">
        <h1 className="card-title text-5xl font-bold text-black">{bookName}</h1>
        <p className="text-xl font-medium py-4"> By: {author}</p>
        <div className="border-y-2 border-slate-300">
          <p className="py-3 text-xl">{category}</p>
        </div>
        <p className="text-xl">
          <span className="text-black font-bold">Review :</span> {review}
        </p>
        <p className="flex gap-3 py-6">
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
        <hr />
        <div className="overflow-x-auto">
          <table className="">
            <tbody>
              <tr>
                <td className="pr-20 text-xl py-2">Number of Page:</td>
                <td className="text-xl font-bold">{totalPages}</td>
              </tr>
              <tr>
                <td className="pr-20 text-xl py-2">Publisher:</td>
                <td className="text-xl font-bold">{publisher}</td>
              </tr>
              <tr>
                <td className="pr-20 text-xl py-2">Year of publishing:</td>
                <td className="text-xl font-bold">{yearOfPublishing}</td>
              </tr>
              <tr>
                <td className="pr-20 text-xl py-2">Ratings:</td>
                <td className="text-xl font-bold">{rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-actions">
          <button onClick={addToReadList} className="btn bg-transparent border-2 border-violet-400 rounded-xl hover:bg-violet-500 hover:text-white hover:border-none px-5">
            Read
          </button>
          <button onClick={addToWishList} className="btn bg-violet-500 text-white hover:border-2 hover:border-violet-400 hover:bg-transparent hover:text-black">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
