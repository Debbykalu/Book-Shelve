import { useContext } from "react";
import BookContext from "../Component/BookContext";

const useBookContext = () => {
    return useContext(BookContext);
}

export default useBookContext;