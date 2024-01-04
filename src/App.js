import React from "react";
import BooksList from "./Component/BookList";
import BookCreate from "./Component/CreateBooks";
import './App.css'

const App = () => {

   
  return (
    <div className="app">
    <h2>Creat aBook</h2>
      <BooksList />
      <BookCreate  />
    </div>
  );
};

export default App;
