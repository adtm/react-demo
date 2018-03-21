import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from './Container.styles';

import Imperative from '../src/pages/Imperative';
import Declarative from '../src/pages/Declarative';

storiesOf('React paradigm', module)
  .addDecorator(story =>
    <Container fullWidth>{story()}</Container>)
  .add('Imperative', () =>
    <Imperative />)
  .add('Declarative', () =>
    <Declarative />);
