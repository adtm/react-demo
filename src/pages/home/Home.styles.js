import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Background = styled.div`
  background: #c9d6ff;
  background: -webkit-linear-gradient(to right, #e2e2e2, #c9d6ff);
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);
  font-family: Helvetica;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Button = styled(Link)`
  background: #fff;
  border-radius: 20px;
  border: 0;
  color: #000;
  margin: 20px;
  padding: 10px;
  outline: none;
  text-decoration: none;
`;

export { Background, ButtonContainer, Button };
