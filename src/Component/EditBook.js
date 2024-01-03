import { useState } from "react";
const BookEdit = ({ book, onSubmit }) => {

  const [changeTitle, setChangeTitle] = useState(book.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book.id, changeTitle);
  };
  
  const handleChange = (e) => {
    setChangeTitle(e.target.value);
  };

  return (
    <div className="edit-title">
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={changeTitle} onChange={handleChange} />
        <button>Save</button>
      </form>
    </div>
  );
};
export default BookEdit;
