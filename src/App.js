import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import CompoundComponents from './rewrites/CompoundComponents';

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route path="/declarative" component={CompoundComponents} />
    </React.Fragment>
  </Router>
);

export default App;
