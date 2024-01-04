import { useEffect, useState } from "react";
import BooksList from "./Component/BookList";
import BookCreate from "./Component/CreateBooks";
import './App.css'
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books")

    setBooks(response.data)
  }

  useEffect(() => {
    fetchBooks()
  }, [])
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
  return (
    <>
      <BooksList
        onSave={editBookById}
        books={books}
        onDelete={deleteBookById}
      />
      <BookCreate handleCreate={createBook} />
    </>
  );
};

export default App;
