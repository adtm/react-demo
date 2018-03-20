import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import HigherOrderComponent from './pages/HigherOrderComponent.jsx';

const Container = styled.div`
  background: #f6f7f8;
  font-family: Graphik Meetup, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: 0.875rem;
  line-height: 1.6;
  padding-top: 5px;
`;

const Component = () => (
  <Container>
    <HigherOrderComponent />
  </Container>
);

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/declarative" component={Component} />
    </React.Fragment>
  </Router>
);

export default App;
