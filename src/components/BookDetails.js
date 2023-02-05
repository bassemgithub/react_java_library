import React, { useContext , useState, useEffect} from 'react';
import { BookContext } from '../contexts/BookContext';

import { Modal, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LoginModal from './modal/ModalBookInfo';
import EditBookForm from './EditBooksForm';


const BookDetails = ({ book }) => {
  console.log("book in book details:: ",  book);
  const [show, setShow] = useState(false);
    
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
      handleClose()
  }, [book])


  const { removeBook, bookInfos } = useContext(BookContext);
  const [showLogin, setShowLogin] = useState(false);
  const handleModalBookInfo = () =>{
    bookInfos(book.id);
    setShowLogin(true);

  }
  return (
    
    <li>
      
      <Row>
      <Col><div className="title">{book.title}</div></Col>
      <Col><button onClick={() => removeBook(book.id)} className=""> Remove </button></Col>
      <Col><button  onClick={handleShow}> Edit </button></Col>
      <Col><button onClick={() => handleModalBookInfo()} className=""> Info </button></Col>

      <LoginModal show={showLogin} close={() => setShowLogin(false)} />
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Employee
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditBookForm book={book} />
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
    
    </li>
  );
}

export default BookDetails;