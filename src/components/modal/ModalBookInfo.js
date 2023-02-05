import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import BookContextProvider from '../../contexts/BookContext'
import BookDetailsInfo from '../BookDetailsInfo'

// cheeck https://stackoverflow.com/questions/39913863/how-to-manually-trigger-click-event-in-reactjs
/*function ModalDialogInfo() {
  const [isShow, invokeModal] = React.useState(false)
  const initModal = () => {
    return invokeModal(!isShow)
  }
  
  return (
    <>
      <Button variant="success" onClick={initModal} >
        Add Book
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Fill book details below</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BookContextProvider>
            <BookDetailsInfo />
          </BookContextProvider>
        </Modal.Body>

      </Modal>
    </>
  )
}
export default ModalDialogInfo
*/

const LoginModal = (props) => {
  // const [loginModalShow, setLoginModalShow] = useState(props.showModal);

  console.log("PROPS in MODAL", props);
  return (
    <>
      <Modal
        show={props.show}
        cancel={props.close}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={props.close}>
          <Modal.Title>Book detailed Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BookContextProvider>
            <BookDetailsInfo />
          </BookContextProvider>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.close}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginModal;