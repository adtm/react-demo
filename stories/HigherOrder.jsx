import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from './Container.styles';

import HigherOrderComponent from '../src/pages/4.HighOrder/HigherOrderComponent';

storiesOf('Higher Order', module)
  .addDecorator(story =>
    <Container fullWidth>{story()}</Container>)
  .add('implementation', () =>
    <HigherOrderComponent />);
