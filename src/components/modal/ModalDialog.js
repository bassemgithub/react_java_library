import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
import BookContextProvider from '../../contexts/BookContext'
import NewBookForm from '../AddBooksForm'
function ModalDialog() {
  const [isShow, invokeModal] = useState(false)
  const initModal = () => {
    return invokeModal(!isShow)
  }
  return (
    <>
      <Button variant="success" onClick={initModal}>
        Add Book
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Fill book details below</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <BookContextProvider>
          <NewBookForm />
          </BookContextProvider>
        </Modal.Body>
        {/* 
        <Modal.Footer>
          <Button variant="danger" onClick={initModal}>
            Close
          </Button>
          <Button variant="dark" onClick={initModal}>
            Store
          </Button>
        </Modal.Footer>
        */}
      </Modal>
    </>
  )
}
export default ModalDialog
