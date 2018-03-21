import React from 'react';
import {
  LocationContainer,
  Address,
  TimeContainer,
  SecretMessageText
} from '../../pages/compoundComponents/styles';

const Time = ({ handleClick }) => (
  <TimeContainer onClick={handleClick}>
    <p>Thursday, March 22, 2018 </p>
    <p>6:00 PM to 9:00 PM </p>
    <a href="#!">Add to Calendar</a>
  </TimeContainer>
);

const Location = ({ handleClick }) => (
  <LocationContainer onClick={handleClick}>
    <p>Zenitech</p>
    <Address>Žalgirio g.90, Vilnius</Address>
  </LocationContainer>
);

const SecretMessage = ({ handleClick }) => <SecretMessageText onClick={handleClick}>You won! 🤩</SecretMessageText>;

export { Time, Location, SecretMessage };
