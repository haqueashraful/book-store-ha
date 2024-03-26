import  { createContext, useState } from 'react';

// Create the context
const MyContext = createContext();

const Context = ({ children }) => {
    const [books, setBooks]=useState([])
//   const [value, setValue] = useState('Initial value');

  return (
    // Provide the context value to the children
    <MyContext.Provider value={{ books, setBooks }}>
      {children}
    </MyContext.Provider>
  );
};

export { Context, MyContext };
