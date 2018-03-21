import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from './Container.styles';

import Compound from '../src/pages/2.Compound/Compound';
import CompoundFixed from '../src/pages/2.Compound/CompoundFixed';

storiesOf('Compound', module)
  .addDecorator(story =>
    <Container fullWidth>{story()}</Container>)
  .add('before rewrite', () =>
    <Compound />)
  .add('after rewrite', () =>
    <CompoundFixed />);
