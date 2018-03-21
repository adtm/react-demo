import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from './Container.styles';

import Profiling from '../src/pages/Profiling';
import ProfilingFixed from '../src/pages/ProfilingFixed';

storiesOf('Profiling', module)
  .addDecorator(story =>
    <Container>{story()}</Container>)
  .add('with leaking', () =>
    <Profiling />)
  .add('without leaking', () =>
    <ProfilingFixed />);
