import { useContext } from "react";
import Card from "./Card";
import { MyContext } from "./Context";

const Cards = () => {
    const {books} = useContext(MyContext)
    return (
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                books.map(book => <Card book={book} key={book.bookid} />)
            }
        </div>
    );
};

export default Cards;