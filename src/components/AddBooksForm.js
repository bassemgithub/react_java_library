import React , {useContext, useState} from 'react';
import { BookContext } from '../contexts/BookContext';
import { Modal, Button } from 'react-bootstrap'

const  NewBookForm= () => {
    const {addBook} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [isbn, setISBN] = useState('');
    const [plot, setPlot] = useState('');
    const [pageNumber, setPAgeNumber] = useState('');

    const [show, setShow] = useState(false); 
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(title, author, isbn, plot, pageNumber);
        setTitle('');
        setAuthor('');
        setISBN('');
        setPlot('');
        setPAgeNumber('');
    }

    return (  
        <>
        <Button variant="secondary" onClick={handleShow}>
        Add Book
      </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Book Info
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form  onSubmit={handleSubmit}>
            <input type="text" placeholder='book title' value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder='author' value={author} onChange={(e) => setAuthor(e.target.value)} required />
            <input type="text" placeholder='ISBN code' value={isbn} onChange={(e) => setISBN(e.target.value)} required />
            <input type="text" placeholder='Plot' value={plot} onChange={(e) => setPlot(e.target.value)} required />
            <input type="text" placeholder='Completed page number' value={pageNumber} onChange={(e) => setPAgeNumber(e.target.value)} required />
            <input type="submit" className="btn-secondary" value="Submit" />
        </form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
    </Modal>


        </>


    );
}
 
export default NewBookForm;