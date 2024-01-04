import { useState } from "react";
import useBookContext from "../CustomHooks/UseBookContext";


const BookCreate = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const {createBook} = useBookContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title, name);
    setName("");
    setTitle("");
  };
  return (
    <div className="container">
      <div className="moveto-bottom">
      <form onSubmit={handleSubmit}>
      <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Title"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Autor"
        />
       
        <button className="creat-button" type="submit">Add Book</button>
      </form>
      </div>
    </div>
  );
};

export default BookCreate;
