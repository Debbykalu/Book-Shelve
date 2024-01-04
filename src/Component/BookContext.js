import { useState, createContext, useEffect} from "react";
import axios from "axios";

const BookContext = createContext();

const BookProvider = ({children}) => {
    const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books")

    setBooks(response.data)
  }

  useEffect(() => {
    fetchBooks()
   },[])

  const editBookById = async (id, newTitle, newName) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`,{
      title: newTitle, name: newName
    });

    const editedUpdate = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data};
      }
      return book;
    });
    setBooks(editedUpdate);
  };
  const createBook = async (title, name) => {
    const response = await axios.post("http://localhost:3001/books", {
      title, name
    })
    const newBookCreated = [
      ...books,
      response.data
    ];
    setBooks(newBookCreated);
  };
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`)
    const newBookArray = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(newBookArray);
  };

  return(
    <BookContext.Provider value={{
        books,
        fetchBooks,
        editBookById,
        createBook,
        deleteBookById,
        }}>
        {children}
    </BookContext.Provider>
  )
}


export {BookProvider};

export default BookContext;