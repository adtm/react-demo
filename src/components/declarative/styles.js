import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  border-radius: 20px;
  padding: 10px;
  color: white;
  outline: none;
  transition: .3s ease-in-out;

  &:hover {
    background: teal;
  }
`;

const TriggerButton = Button.extend`
  background: burlywood;
`;

const ColorButton = Button.extend`
  padding: 40px;
  margin: 20px;
  font-size: 20px;
`;

export {
  ColorButton,
  TriggerButton
};
