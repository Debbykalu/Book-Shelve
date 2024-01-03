import { useState } from "react";

const BookCreate = ({ handleCreate }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate(name, title);
    setName("");
    setTitle("");
  };
  return (
    <div className="container">
      <div className="moveto-bottom">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Book Title"
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Author"
        />
        <button className="creat-button" type="submit">Add Book</button>
      </form>
      </div>
    </div>
  );
};

export default BookCreate;
