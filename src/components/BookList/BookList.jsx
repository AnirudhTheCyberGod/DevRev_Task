import React from 'react';
import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

const BookList = () => {
  const {books, loading, resultTitle, currentPage, itemsPerPage, handlePageChange} = useGlobalContext();
  
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if(loading) return <Loading />;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentBooks = booksWithCovers.slice(firstIndex, lastIndex);

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            currentBooks.map((item, index) => {
              return (
                <Book key={index} {...item} />
              )
            })
          }
        </div>
        <div className="pagination">
          {booksWithCovers.length > itemsPerPage && (
            <div className="pagination-buttons">
              {currentPage > 1 && (
                <button className="prev-page-btn" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
              )}
              {booksWithCovers.length > lastIndex && (
                <button className="next-page-btn" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
              )}
            </div>
          )}
          <div className="page-number">
            <p>Page {currentPage} of {Math.ceil(booksWithCovers.length / itemsPerPage)}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookList;
