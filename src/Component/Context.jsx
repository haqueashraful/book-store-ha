import { createContext, useState } from "react";

const MyContext = createContext();

const Context = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [sortBy, setSortBy] = useState("rating"); 

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <MyContext.Provider value={{ books, setBooks, handleSortChange, sortBy, setSortBy }}>
      {children}
    </MyContext.Provider>
  );
};

export { Context, MyContext };
