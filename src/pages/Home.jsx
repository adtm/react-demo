import React from 'react';
import { Background, Button, ButtonContainer } from './home/Home.styles';

const Home = () => (
  <Background>
    <ButtonContainer>
      <Button to="/declarative">Declarative Example</Button>
      <Button to="#!">WIP</Button>
      <Button to="#!">WIP</Button>
    </ButtonContainer>
  </Background>
);

export default Home;
