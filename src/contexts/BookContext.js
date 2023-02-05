import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [singlebook, setSingBook] = useState([]);
  const [bookDetails, setBookDetails] = useState([]);
  const [booleanModal, setBooleanModal] = useState(true);

  const addBook = (title, author, isbn, plot, pageNumber) => {
    // axios post add book 
    axios.post(`http://localhost:8080/books/${localStorage.getItem("user_id")}`, {
     "title":title,
      "author": author,
      "isbn": isbn,
      "plot" :plot,
      "pageNumber": pageNumber,
    })
      .then(response => {
        console.log("response.data");
        const book_id = response.data;
        //setBooks([...books, { title, author, id: uuid() }]);
        setBooks([...books, { title, author, id: book_id }]);
      })
      .catch(function (error) {
        console.error(error);
      });
  
  };

  const removeBook = (id) => {

    // delte book by it is id 
    //axios.delete(`http://localhost:8080/delete/book/${id}`).then(response => {

    //add book delete date 
    axios.patch(`http://localhost:8080/delete/book/${id}`).then(response => {
      setBooks(books.filter(book => book.id !== id));
    })
    .catch(function (error) {
      console.error(error);
    }); 
    
  }

  const bookInfos = (id) => {
    setBookDetails(true);
    axios.get(`http://localhost:8080/book/details/${id}`).then(response => {
      const details = response.data;
      setBookDetails(details);
      console.log("response.data after axios:: ", response.data);
      console.log("bookDetails after axios:: ", bookDetails);


    })
    .catch(function (error) {
      console.error(error);
    }); 
    
  }
    // list book by user id 
    const listBook = (user_id) => {
      axios.get('http://localhost:8080/books/' + user_id).then(function (response) {
        // handle success
        setBooks(response.data);
        console.log("use effect in boook context", response.data);
        console.log("books ", books);
      })
      .catch(function (error) {
        console.error(error);
      }); 
    }

    const updateBook = (id, updatedEBook) => {
      

      axios.put(`http://localhost:8080/book/edit/${id}`,updatedEBook).then(response => {
        setSingBook(books.map((book) => book.id === id ? updatedEBook : book))
      
      })
      .catch(function (error) {
        console.error(error);
      }); 
  }

  return (
   
    <BookContext.Provider value={{ books, bookDetails, booleanModal, singlebook, addBook, updateBook, removeBook, listBook, bookInfos }}>
       {console.log("bookDetails inside context :: ",bookDetails)}  
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;