import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Time, Location, SecretMessage } from './compound/components';
import { Card } from './compoundComponents/styles';

class CardContainer extends Component {
  static contextTypes = {
    handleClick: PropTypes.func.isRequired
  }

  render() {
    const children = React.Children.map(this.props.children, (child) => {
      return (
        <Card>
          {React.cloneElement(child, {
            handleClick: this.context.handleClick
          })}
        </Card>);
    });

    return children;
  }
}

class Container extends Component {
  static childContextTypes = {
    handleClick: PropTypes.func.isRequired
  }

  getChildContext() {
    return {
      handleClick: () => window.alert('I was clicked!')
    };
  }

  render() {
    return this.props.children;
  }
}

class ContextSolution extends Component {
  render() {
    return (
      <Container>
        <div style={{ color: 'red' }}>
          <h3>Today's Info: </h3>
          <CardContainer>
            <Time />
            <Location />
            <SecretMessage />
          </CardContainer>
        </div>
      </Container>
    );
  }
}

export default ContextSolution;
