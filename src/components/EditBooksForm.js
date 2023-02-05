import React , {useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext';

const  EditBookForm= ({book}) => {
    const id = book.id;
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [isbn, setISBN] = useState(book.isbn);
    const [plot, setPlot] = useState(book.plot);
    const [pageNumber, setPAgeNumber] = useState(book.pageNumber);
    const {updateBook} = useContext(BookContext);

    const updatedBook = {id, title, author, isbn, plot, pageNumber}
    
    const handleSubmit = (e) => {
        e.preventDefault();
        updateBook(id, updatedBook)
    }

    return (  
        <form  onSubmit={handleSubmit}>
            <input type="text" placeholder='book title' value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder='author' value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <input type="text" placeholder='ISBN code' value={isbn} onChange={(e) => setISBN(e.target.value)} required />
            <input type="text" placeholder='Plot' value={plot} onChange={(e) => setPlot(e.target.value)} required />
            <input type="text" placeholder='Completed page number' value={pageNumber} onChange={(e) => setPAgeNumber(e.target.value)} required />
            <input type="submit" value="Edit Book" />
        </form>
    );
}
 
export default EditBookForm;