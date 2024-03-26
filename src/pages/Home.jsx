import Banner from "../Component/Banner";
import Cards from "../Component/Cards";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MyContext } from "../Component/Context";

const Home = () => {
    const {books, setBooks} = useContext(MyContext)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('book.json');
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 
    // console.log(books)
    return (
        <div>
            <Banner/>
            <div className=" lg:mt-20">
            <h1 className=" text-5xl text-black font-bold text-center pb-10">Books</h1>
                <Cards books={books}/>
            </div>
        </div>
    );
};

export default Home;