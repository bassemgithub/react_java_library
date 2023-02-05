import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';



import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const   BookDetailsInfo = ({ book }) => {
  const { bookDetails } = useContext(BookContext);
  console.log("bookDetails inside book detailsInfo ::: ", book)
  return (
    <ul key= {bookDetails.id}>
      <li> 
        <Row>
        <Col><div ><span>Title : </span></div></Col>
        <Col><div >{bookDetails.title}</div></Col>
        </Row>
      </li>
      <li> 
        <Row>
        <Col><div ><span>Author : </span></div></Col>
        <Col><div >{bookDetails.author}</div></Col>
        </Row>
      </li>
      <li> 
        <Row>
        <Col><div ><span>ISBN : </span></div></Col>
        <Col><div >{bookDetails.isbn}</div></Col>
        </Row>
      </li>

      <li> 
        <Row>
        <Col><div ><span>Plot : </span></div></Col>
        <Col><div >{bookDetails.plot}</div></Col>
        </Row>
      </li>

      <li> 
        <Row>
        <Col><div ><span>Readed Page : </span></div></Col>
        <Col><div >{bookDetails.pageNumber}</div></Col>
        </Row>
      </li>
      <li> 
        <Row>
        <Col><div ><span>Created Date : </span></div></Col>
        <Col><div >{bookDetails.createDate}</div></Col>
        </Row>
      </li>
    </ul>
  );
}

export default BookDetailsInfo;