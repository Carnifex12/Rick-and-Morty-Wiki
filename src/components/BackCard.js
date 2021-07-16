import React, { useState } from 'react';
import { Button, Modal, Row, Col, Image, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BackCard.css';

function BackCard(props) {
  const character = props.myCharacter;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <div className="flip-card-back d-flex flex-column justify-content-center">
        <h2>{character.name}</h2>
        <Button onClick={handleShow} variant="outline-info">
          Learn More
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-info text-white" closeButton>
          <Modal.Title className=" font-weight-bold ">
            {character.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <Row>
            <Col>
              <Image src={character.image} id={character.id} roundedCircle />
            </Col>
          </Row>

          <Row>
            <Col>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <span className="text-info font-weight-bold">Species:</span>{' '}
                  {character.species}
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="text-info font-weight-bold">Status:</span>{' '}
                  {character.status}
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="text-info font-weight-bold">Origin:</span>{' '}
                  {character.origin.name}
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="text-info font-weight-bold">Location:</span>{' '}
                  {character.location.name}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default BackCard;