import { useState } from "react";
import BooksList from "./Component/BookList";
import BookCreate from "./Component/CreateBooks";
import './App.css'

const App = () => {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const editedUpdate = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(editedUpdate);
  };
  const createBook = (title) => {
    const newBookCreated = [
      ...books,
      { id: Math.round(Math.random() * 100), title },
    ];
    setBooks(newBookCreated);
  };
  const deleteBookById = (id) => {
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
