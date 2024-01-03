import BookShow from "./DisplayBook";

const BooksList = ({ books, onDelete, onSave }) => {
  const newBookListShow = books.map((book) => {
    return (
      <BookShow onSave={onSave} key={book.id} book={book} onDelete={onDelete} />
    );
  });
  return <div>{newBookListShow}</div>;
};

export default BooksList;
