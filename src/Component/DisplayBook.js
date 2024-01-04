import {  useState } from "react";
import BookEdit from "./EditBook";
import useBookContext from "../CustomHooks/UseBookContext";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);

  const { deleteBookById } = useBookContext();

  const handleSubmit = () => {
    setShowEdit(false);;
  };

  const handleDelete = () => {
    deleteBookById(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  let titleContent = <div><h2>{book.title}</h2> <p>{book.name}</p></div>;
  if (showEdit) {
    titleContent = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
   <div className="container-wrapper">
     <div className="inputvalue-wrapper">
      <img 
        src={`https://picsum.photos/seed/${book.id}/200/100`}
        alt="book"
      />
      <div className="title-value">{titleContent}</div>
      <div>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
   </div>
  );
};

export default BookShow;
