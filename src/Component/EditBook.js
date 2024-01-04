import { useState } from "react";
import useBookContext from "../CustomHooks/UseBookContext";
const BookEdit = ({ book, onSubmit }) => {

  const [changeTitle, setChangeTitle] = useState(book.title);
  const [changeName, setChangeName] = useState(book.name);

  const {editBookById} = useBookContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBookById(book.id, changeTitle, changeName)
  };

  const handleTitleChange = (e) => {
    setChangeTitle(e.target.value);
  };

  const handleNameChange = (e) => {
    setChangeName(e.target.value);
  };

  return (
    <div className="edit-title">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={changeTitle} onChange={handleTitleChange} />
        <input type="text" value={changeName} onChange={handleNameChange} />
        <button>Save</button>
      </form>
    </div>
  );
};
export default BookEdit;
