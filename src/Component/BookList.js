import useBookContext from "../CustomHooks/UseBookContext";
import BookShow from "./DisplayBook";

const BooksList = () => {
  const {books} = useBookContext();
  const newBookListShow = books.map((book) => {
    return (
      <BookShow key={book.id} book={book} />
    );
  });
  return <div>{newBookListShow}</div>;
};

export default BooksList;
