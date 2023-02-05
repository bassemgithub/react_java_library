import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetailsInfo from './BookDetailsInfo';

const BookListInfo = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => {
          return ( <BookDetailsInfo book={book} key={book.id} /> );
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Please add your books .</div>
  );
}

export default BookListInfo;