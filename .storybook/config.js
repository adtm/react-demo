import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Declarative.jsx');
  require('../stories/Compound.jsx');
  require('../stories/Context.jsx');
  require('../stories/HigherOrder.jsx');
  require('../stories/ErrorBoundaries.jsx');
  require('../stories/Profiling.jsx');
}

configure(loadStories, module);
