import Banner from "../Component/Banner";
import Cards from "../Component/Cards";
import { useContext, useEffect } from "react";
import axios from "axios";
import { MyContext } from "../Component/Context";
import { saveItem } from "../Utils/shared";

const Home = () => {
    const { setBooks } = useContext(MyContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('book.json');
                setBooks(response.data);
                saveItem('books', response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 
    return (
        <div>
            <Banner/>
            <div className="lg:mt-20">
                <h1 className="text-5xl text-black font-bold text-center pb-10">Books</h1>
                <Cards/>
            </div>
        </div>
    );
};

export default Home;
