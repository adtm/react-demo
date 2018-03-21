import React, { Component } from 'react';
import { Time, Location, SecretMessage } from './compound/components';

class CompoundRework extends Component {
  render() {
    return (
      [
        <Time />,
        <Location />,
        <SecretMessage />
      ]
    );
  }
}

export default CompoundRework;
