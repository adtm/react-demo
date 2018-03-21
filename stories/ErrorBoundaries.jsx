import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from './Container.styles';

import ErrorProblem from '../src/pages/5.ErrorBoundaries/ErrorProblem';
import ErrorSolution from '../src/pages/5.ErrorBoundaries/ErrorSolution';

storiesOf('Error boundaries', module)
  .addDecorator(story =>
    <Container fullWidth>{story()}</Container>)
  .add('breaking all tree', () =>
    <ErrorProblem />)
  .add('preventing tree breaking', () =>
    <ErrorSolution />);
