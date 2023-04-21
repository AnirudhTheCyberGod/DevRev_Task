import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();


const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("The holy war");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
  
    const fetchBooks = useCallback(async () => {
      setLoading(true);
      try {
        const response = await fetch(`${URL}${searchTerm}`);
        const data = await response.json();
        const { docs } = data;
  
        if (docs) {
          const totalItems = docs.length;
          const totalPages = Math.ceil(totalItems / itemsPerPage);
          const startIndex = (currentPage - 1) * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
          const newBooks = docs
            .slice(startIndex, endIndex)
            .map((bookSingle, index) => {
              const { key, author_name, cover_i, edition_count, first_publish_year, title } = bookSingle;
  
              return {
                id: key,
                author: author_name,
                cover_id: cover_i,
                edition_count: edition_count,
                first_publish_year: first_publish_year,
                title: title,
                position: index + 1 + startIndex,
              };
            });
  
          setBooks(newBooks);
  
          if (newBooks.length > 0) {
            setResultTitle(`Your Search Result for "${searchTerm}"`);
          } else {
            setResultTitle("No Result Found!");
          }
        } else {
          setBooks([]);
          setResultTitle("No Result Found!");
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }, [searchTerm, currentPage, itemsPerPage]);
  
    useEffect(() => {
      fetchBooks();
    }, [searchTerm, currentPage, itemsPerPage, fetchBooks]);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <AppContext.Provider
        value={{
          loading,
          books,
          setSearchTerm,
          resultTitle,
          setResultTitle,
          currentPage,
          itemsPerPage,
          handlePageChange,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  };
  
  export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
  export { AppContext, AppProvider };