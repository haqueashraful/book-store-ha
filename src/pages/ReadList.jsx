import ListedCard from "../Component/ListedCard";
import { getItem } from "../Utils/shared";

const ReadList = () => {
    const books = getItem("readed")
    return (
        <div className=" grid gap-5">
            {
                books.map(book =>   <ListedCard key={book.bookid} book={book}/>)
              }
        </div>
    );
};

export default ReadList;