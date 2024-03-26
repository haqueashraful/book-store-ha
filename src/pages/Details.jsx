import { useContext } from "react";
import {  useParams } from "react-router-dom";
import { MyContext } from "../Component/Context";
import { getItem, saveItem } from "../Utils/shared";

const Details = () => {

  const {books, setBooks} = useContext(MyContext)
  const { id } = useParams();
  console.log(books)
  const book = books.find((book) => book.bookid === parseInt(id));
  console.log(book);

  const addToReadList = ()=>{
    saveItem('readed', book)    
  }
  const addToWishList = ()=>{
    saveItem("wishes", book)
  }

  const {
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
    <div className="card card-side w-full bg-base-100 shadow-xl">
      <figure className=" w-1/2 bg-violet-50">
        <img
          className=" w-1/2"
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body w-1/2">
        <h1 className="card-title text-5xl font-bold text-black">{bookName}</h1>
        <p className=" text-xl font-medium py-4"> By: {author}</p>
        <div className=" border-y-2 border-slate-300">
          <p className="py-3 text-xl">{category}</p>
        </div>
        <p className="text-xl"><span className=" text-black font-bold">Review :</span> {review}</p>

        <p className="flex gap-3 py-6">
          <span className=" font-bold text-xl text-black">Tag: </span>
          {tags.map((tag, index) => (
            <span
              className=" bg-green-50 rounded-full px-5 py-1 text-green-500 font-semibold"
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
              {/* row 1 */}
              <tr>
                <td className=" pr-20 text-xl py-2">Number of Page:</td>
                <td className=" text-xl font-bold">{totalPages}</td>
              </tr>
              {/* row 2 */}
              <tr>
                <td className=" pr-20 text-xl py-2" >Publisher:</td>
                <td className=" text-xl font-bold">{publisher}</td>
              </tr>
              <tr>
                <td className=" pr-20 text-xl py-2" >Year of publishing:</td>
                <td className=" text-xl font-bold">{yearOfPublishing}</td>
              </tr>
              <tr>
                <td className=" pr-20 text-xl py-2" >Ratings:</td>
                <td className=" text-xl font-bold">{rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-actions">
          <button onClick={addToReadList} className="btn bg-transparent border-2 border-violet-400 rounded-xl hover:bg-violet-500 hover:text-white hover:border-none px-5">Read</button>
          <button onClick={addToWishList} className="btn bg-violet-500 text-white hover:border-2 hover:border-violet-400 hover:bg-transparent hover:text-black">WishList</button>
        </div>
      </div>
    </div>
  );
};

export default Details;