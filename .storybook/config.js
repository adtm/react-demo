import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Compound.jsx');
  require('../stories/Context.jsx');
  require('../stories/Declarative.jsx');
  require('../stories/HigherOrder.jsx');
  require('../stories/Profiling.jsx');
}

configure(loadStories, module);
