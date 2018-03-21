import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from './Container.styles';

import ContextProblem from '../src/pages/ContextProblem';
import ContextHalfSolution from '../src/pages/ContextHalfSolution';
import ContextSolution from '../src/pages/ContextSolution';

storiesOf('Context', module)
  .addDecorator(story =>
    <Container fullWidth>{story()}</Container>)
  .add('our problem', () =>
    <ContextProblem />)
  .add('our half solution', () =>
    <ContextHalfSolution />)
  .add('our full solution', () =>
    <ContextSolution />);
