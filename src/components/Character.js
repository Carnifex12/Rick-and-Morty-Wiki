import React from 'react';
import BackCard from './BackCard.js';
import { Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Character.css';

function Character(props) {
  const { filteredCharacter } = props;
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card className="my-card m-2">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    className="card-image"
                    src={filteredCharacter.image}
                    key={filteredCharacter.id}
                    alt={filteredCharacter.name}
                  />
                </div>
                <BackCard myCharacter={filteredCharacter} />
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}
export default Character;