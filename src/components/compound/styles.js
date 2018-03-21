import styled from 'styled-components';

const Container = styled.div`
  font-family: Graphik Meetup, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica, Arial, sans-serif;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: 0.875rem;
  line-height: 1.6;
  padding-top: 5px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  width: 300px;
  padding: 20px;
  max-height: 110px;
  min-height: 110px;
  margin: 40px;
`;

const TextContainer = styled.div`
  padding: 16px;
  padding-left: 30px;
`;

const Image = styled.img`
  display: flex;
  width: -webkit-fill-available;
  padding: 20px;
`;

const LocationContainer = styled.address`
  padding: 20px;
  font-style: normal;
  p {
    margin: 0;
    padding: 0;
  }
`;

const Address = styled.p`
  padding: 20px;
  color: rgba(46, 62, 72, 0.6);
`;

const TimeContainer = styled.div`
  padding: 20px;
  p {
    padding: 0;
    margin: 0;
    line-height: 1.5;
  }

  a {
    font-size: 12px;
    cursor: pointer;
    color: #00a2c7;
  }
`;

const TabElement = styled.span`
  padding: 20px;
  cursor: pointer;
`;

const SecretMessageText = styled.div`
  padding: 20px;
`;

export {
  Container,
  Card,
  TextContainer,
  Image,
  LocationContainer,
  Address,
  TimeContainer,
  TabElement,
  SecretMessageText
};
