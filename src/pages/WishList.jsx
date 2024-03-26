import ListedCard from "../Component/ListedCard";
import { getItem } from "../Utils/shared";

const WishList = () => {

    const books = getItem('wishes')
    console.log(books)
    return (
        <div>
                <h1>wishes listed</h1>
              {
                books.map(book =>   <ListedCard key={book.bookid} book={book}/>)
              }
        </div>
    );
};

export default WishList;