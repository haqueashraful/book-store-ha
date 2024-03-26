import toast from "react-hot-toast";

export const getItem = (name) => {
  let items = [];
  const storedItem = localStorage.getItem(name);

  if (storedItem) {
    items = JSON.parse(storedItem);
  }

  return items;
};

export const saveItem = (name, item) => {
  let items = getItem(name);
  const isExist = items.find((b) => b.bookId === item.bookId);

  if (isExist) {
    return toast.error("Already added");
  } else {
    items.push(item);
    localStorage.setItem(name, JSON.stringify(items));
    toast.success("Successfully added");
  }
};
