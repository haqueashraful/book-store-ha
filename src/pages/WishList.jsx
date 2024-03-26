import ListedCard from "../Component/ListedCard";
import { getItem } from "../Utils/shared";

const WishList = () => {

    const books = getItem('wishes')
    console.log(books)
    return (
        <div className=" grid gap-5"pro>
              {
                books.map(book =>   <ListedCard key={book.bookid} book={book}/>)
              }
        </div>
    );
};

export default WishList;