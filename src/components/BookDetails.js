import React, { useContext , useState, useEffect} from 'react';
import { BookContext } from '../contexts/BookContext';
import { Modal, Button} from 'react-bootstrap';



import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import EditBookForm from './EditBooksForm';
import BookDetailsInfo from './BookDetailsInfo';


const BookDetails = ({ book }) => {
  const [show, setShow] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
    
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleShowInfo = () => setShowInfo(true);
  const handleCloseInfo = () => setShowInfo(false);

  useEffect(() => {
      handleClose()
      handleCloseInfo()
  }, [book])

  const { removeBook } = useContext(BookContext);

  return (
    
    <li>
      
      <Row>
      <Col><div className="title">{book.title}</div></Col>
      <Col><button onClick={() => removeBook(book.id)} className=""> Remove </button></Col>
      <Col><button  onClick={handleShow}> Edit </button></Col>
      <Col><button onClick={() => handleShowInfo()} className=""> Info </button></Col>
      </Row>
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Book Info
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditBookForm book={book} />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
    </Modal>
    </>
    <>
    <Modal show={showInfo} onHide={handleCloseInfo}>
        <Modal.Header closeButton>
            <Modal.Title>
            Show Book Info
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <BookDetailsInfo book={book} />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
    </Modal>
    </>
    </li>
  );
}

export default BookDetails;