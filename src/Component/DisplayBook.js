import { useState } from "react";
import BookEdit from "./EditBook";
const BookShow = ({ book, onDelete, onSave }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleSubmit = (id, changeTitle) => {
    setShowEdit(false);
    onSave(id, changeTitle);
  };

  const handleDelete = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  let titleContent = <h2>{book.title}</h2>;
  if (showEdit) {
    titleContent = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <div className="inputvalue-wrapper">
      <img 
        src={`https://picsum.photos/seed/${book.id}/200/300`}
      />
      <div className="title-value">{titleContent}</div>
      <div className="nameinput-valu">{book.name}</div>
      <div>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default BookShow;
