import  { createContext, useState } from 'react';

const MyContext = createContext();

const Context = ({ children }) => {
    const [books, setBooks]=useState([])
  return (
    <MyContext.Provider value={{ books, setBooks }}>
      {children}
    </MyContext.Provider>
  );
};

export { Context, MyContext };
