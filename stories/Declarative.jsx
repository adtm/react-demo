import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from './Container.styles';

import Imperative from '../src/pages/1.Paradigm/Imperative';
import Declarative from '../src/pages/1.Paradigm/Declarative';

storiesOf('React paradigm', module)
  .addDecorator(story =>
    <Container fullWidth>{story()}</Container>)
  .add('Imperative', () =>
    <Imperative />)
  .add('Declarative', () =>
    <Declarative />);
