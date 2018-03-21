import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from './Container.styles';

import Context from '../src/pages/Context';
import ContextFixed from '../src/pages/ContextFixed';

storiesOf('Context', module)
  .addDecorator(story =>
    <Container fullWidth>{story()}</Container>)
  .add('with breaking', () =>
    <Context />)
  .add('without breaking', () =>
    <ContextFixed />);
