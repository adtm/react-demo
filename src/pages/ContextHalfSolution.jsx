import React, { Component } from 'react';
import { Time, Location, SecretMessage } from './compound/components';
import { Card } from './compoundComponents/styles';


class Container extends Component {
  render() {
    const children = React.Children.map(this.props.children, (child) => {
      return (
        <Card>
          {React.cloneElement(child, {
            handleClick: () => window.alert('I was clicked!')
          })}
        </Card>);
    });

    return children;
  }
}

// BUT! - Add a div and you'll break it
class CompoundRework extends Component {
  render() {
    return (
      <Container>
        <Time />
        <Location />
        <SecretMessage />
      </Container>
    );
  }
}

export default CompoundRework;
