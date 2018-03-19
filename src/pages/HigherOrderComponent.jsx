import React, { Component } from 'react';
import styled from 'styled-components';
import CompoundComponents from './CompoundComponents';

const StyledCompoundComponents = styled(CompoundComponents)`
  color: ${props => props.color};
`;

const withRandomColorChange = Comp => {
  const calculateColor = () => {
    return (
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')'
    );
  };

  return class ChangingBackground extends React.Component {
    state = {
      width: 0
    };

    componentDidMount() {
      window.addEventListener('resize', ({ target }) => {
        this.setState({ width: target.innerWidth });
      });
    }

    componentWillUnmount() {
      window.removeEventListener('resize');
    }

    render() {
      const { width } = this.state;
      return <Comp color={calculateColor(width)} />;
    }
  };
};

class HigherOrderComponent extends Component {
  render() {
    const { color } = this.props;
    return (
      <div style={{ color: color }}>
        <CompoundComponents />
      </div>
    );
  }
}

export default withRandomColorChange(HigherOrderComponent);
