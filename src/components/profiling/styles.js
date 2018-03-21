import styled from 'styled-components';

const Button = styled.button`
  background: deepskyblue;
  color: white;
  padding: 10px 20px;
  border: 0;
  border-radius: 20px;
  outline: none;
  transition: 0.5s ease-in-out;

  &:hover {
    background: turquoise;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 0;
  border-radius: 20px;
  margin: 20px;
  outline: none;
`;

const Table = styled.table`
  background: #fff;
  color: #000;
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export { Button, Input, Table, Container };
