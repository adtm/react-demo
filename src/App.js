import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Declarative from './pages/Declarative';

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/declarative" component={Declarative} />
    </React.Fragment>
  </Router>
);

export default App;
