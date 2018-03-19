import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Home} />
    </React.Fragment>
  </Router>
);

export default App;
