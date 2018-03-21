import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from './Container.styles';

import ContextProblem from '../src/pages/3.Context/ContextProblem';
import ContextHalfSolution from '../src/pages/3.Context/ContextHalfSolution';
import ContextSolution from '../src/pages/3.Context/ContextSolution';

storiesOf('Context', module)
  .addDecorator(story =>
    <Container fullWidth>{story()}</Container>)
  .add('our problem', () =>
    <ContextProblem />)
  .add('our half solution', () =>
    <ContextHalfSolution />)
  .add('our full solution', () =>
    <ContextSolution />);
