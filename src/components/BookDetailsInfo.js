import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const   BookDetailsInfo = ({ book }) => {
  return (
    <ul key= {book.id}>
      <li> 
        <Row>
        <Col><div ><span>Title : </span></div></Col>
        <Col><div >{book.title}</div></Col>
        </Row>
      </li>
      <li> 
        <Row>
        <Col><div ><span>Author : </span></div></Col>
        <Col><div >{book.author}</div></Col>
        </Row>
      </li>
      <li> 
        <Row>
        <Col><div ><span>ISBN : </span></div></Col>
        <Col><div >{book.isbn}</div></Col>
        </Row>
      </li>

      <li> 
        <Row>
        <Col><div ><span>Plot : </span></div></Col>
        <Col><div >{book.plot}</div></Col>
        </Row>
      </li>

      <li> 
        <Row>
        <Col><div ><span>Readed Page : </span></div></Col>
        <Col><div >{book.pageNumber}</div></Col>
        </Row>
      </li>
      <li> 
        <Row>
        <Col><div ><span>Created Date : </span></div></Col>
        <Col><div >{book.createDate}</div></Col>
        </Row>
      </li>
    </ul>
  );
}

export default BookDetailsInfo;