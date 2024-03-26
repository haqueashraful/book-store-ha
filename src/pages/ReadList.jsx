import { useContext } from "react";
import ListedCard from "../Component/ListedCard";
import { getItem } from "../Utils/shared";
import { MyContext } from "../Component/Context";

const ReadList = () => {
    const { sortBy } = useContext(MyContext);
    const books = getItem("readed");

    const sortedBooks = [...books].sort((a, b) => {
        if (a[sortBy] > b[sortBy]) {
            return -1;
        }
        if (a[sortBy] < b[sortBy]) {
            return 1;
        }
        return 0;
    });
    

    return (
        <div className="grid gap-5">
            {sortedBooks.map(book => (
                <ListedCard key={book.bookid} book={book} />
            ))}
        </div>
    );
};

export default ReadList;
