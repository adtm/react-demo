import styled from 'styled-components';

const Container = styled.div`
  background: #f6f7f8;
  font-size: 0.875rem;
  font-family: Graphik Meetup, -apple-system, BlinkMacSystemFont, Roboto;
  line-height: 1.6;
  height: ${({ fullWidth }) => (fullWidth ? '100vh' : 'auto')};
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  padding-top: 5px;
`;

export default Container;
