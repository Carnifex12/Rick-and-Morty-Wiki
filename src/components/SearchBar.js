import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

const SearchBar = (props) => {
  const handleChange = (event) => {
    props.onchange(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="bg-gradient">
        <Container className="mb-3">
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h1 className="text-light mt-3">My Rick and Morty Wiki</h1>
              <InputGroup className="mb-3">
                <FormControl
                  className="m-3"
                  type="text"
                  placeholder="Search name"
                  onChange={handleChange}
                />
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;