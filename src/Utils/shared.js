import toast from "react-hot-toast";

export const getItem = (key) => {
  let items = [];
  const storedItem = localStorage.getItem(key);

  if (storedItem) {
    items = JSON.parse(storedItem);
  }

  return items;
};


export const saveItem = (key, item) => {
    let items = getItem(key); 
    
    if (!items) {
      items = [];
    }

    console.log(items)
    console.log(item)
    
    const isExist = items.find((b) => {
        console.log(item.bookid)
        console.log(b)
       return b.bookid === item.bookid
    });
  
    if (isExist) {
      return toast.error("Already added");
    } else{
        
    const updatedItems = [...items, item];
    
    localStorage.setItem(key, JSON.stringify(updatedItems));
    
    toast.success("Successfully added");
    }
  };
  
  
