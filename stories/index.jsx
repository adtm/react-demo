import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Profiling from '../src/pages/Profiling';
import ProfilingFixed from '../src/pages/ProfilingFixed';
import HigherOrderComponent from '../src/pages/HigherOrderComponent';

import Imperative from '../src/pages/Imperative';
import Declarative from '../src/pages/Declarative';

import Context from '../src/pages/Context';
import ContextFixed from '../src/pages/ContextFixed';

import Compound from '../src/pages/Compound';
import CompoundFixed from '../src/pages/CompoundFixed';

const Container = styled.div`
  background: #f6f7f8;
  font-family: Graphik Meetup, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica, Arial, sans-serif;
  display: flex;
  height: ${props => (props.fullWidth ? '100vh' : 'auto')};
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: 0.875rem;
  line-height: 1.6;
  padding-top: 5px;
`;

storiesOf('Declarative vs Imperative', module)
  .add('Imperative', () => (
    <Container fullWidth>
      <Imperative />
    </Container>
  ))
  .add('Declarative', () => (
    <Container fullWidth>
      <Declarative />
    </Container>
  ));

storiesOf('Compound Components', module)
  .add('before rewrite', () => (
    <Container fullWidth>
      <Compound />
    </Container>
  ))
  .add('after rewrite', () => (
    <Container fullWidth>
      <CompoundFixed />
    </Container>
  ));

storiesOf('Context API', module)
  .add('breaking', () => (
    <Container fullWidth>
      <Context />
    </Container>
  ))
  .add('without breaking', () => (
    <Container fullWidth>
      <ContextFixed />
    </Container>
  ));

storiesOf('Higher Order Component', module).add('implementation', () => (
  <Container fullWidth>
    <HigherOrderComponent />
  </Container>
));

storiesOf('Profiling', module)
  .add('with leaking', () => (
    <Container>
      <Profiling />
    </Container>
  ))
  .add('without leaking', () => (
    <Container>
      <ProfilingFixed />
    </Container>
  ));
