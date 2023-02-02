import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const addBook = (title, author) => {
    // axios post add book 
    const article = { title: 'React POST Request Example' };
    axios.post('http://localhost:8080/books', {
     "author": "John",
      "create_date": "2011-01-01 00:00:00",
      "delete_date": "2011-01-01 00:00:00",
      "isbn":"121231afaq",
      "page_number": "1",
      "plot" :"romance",
      "title": "testUno",
      "user_id": localStorage.getItem("user_id")
    })
      .then(response => {
        console.log(response.data);
        setBooks([...books, { title, author, id: uuid() }]);
      })
      .catch(function (error) {
        console.error(error);
      });
  
  };
  const removeBook = (id) => {

    axios.delete(`http://localhost:8080/delete/book/${id}`).then(response => {
      console.log(response.data);
      setBooks(books.filter(book => book.id !== id));
    })
    .catch(function (error) {
      console.error(error);
    }); 
    
  }

  const listBook = (id) => {
    axios.get('http://localhost:8080/books/' + id).then(function (response) {
      // handle success
      setBooks(response.data);
      console.log("use effect in boook context", response.data);
      console.log("books ", books);
    })
  }
  useEffect(() => {
    axios.get('http://localhost:8080/books/1').then(function (response) {
      // handle success
      setBooks(response.data);
      console.log("use effect in boook context", response.data);
      console.log("books ", books);
    })
  }, []);


  return (
    <BookContext.Provider value={{ books, addBook, removeBook, listBook }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;