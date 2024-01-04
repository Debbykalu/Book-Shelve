import { useState } from "react";
import BookEdit from "./EditBook";
const BookShow = ({ book, onDelete, onSave }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleSubmit = (id, changeTitle, changeName) => {
    setShowEdit(false);
    onSave(id, changeTitle, changeName);
  };

  const handleDelete = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  let titleContent = <div><h2>{book.title}</h2> <p>{book.name}</p></div>;
  if (showEdit) {
    titleContent = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="inputvalue-wrapper">
      <img 
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt="book"
      />
      <div className="title-value">{titleContent}</div>
      <div>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default BookShow;
