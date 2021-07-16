import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Character from './Character.js';


const Characters = (props) => {
  const { characters } = props;
  const { searchTerm } = props;
  const { loading } = props;

  const filteredCharacters = searchTerm
    ? characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : characters;

  return (
    <React.Fragment>
      <Container>
        <Row className="m-3 d-flex justify-content-center align-content-center">
          {!loading ? (
            filteredCharacters.map((filteredCharacter) => {
              return (
                <Character
                  key={filteredCharacter.id}
                  filteredCharacter={filteredCharacter}
                />
              );
            })
          ) : (
            <p>Loading ...</p>
          )}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Characters;