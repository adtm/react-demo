import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/normalize.css/normalize.css';
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

ReactDOM.render(<div>Storybook!</div>, document.getElementById('root'));
registerServiceWorker();
