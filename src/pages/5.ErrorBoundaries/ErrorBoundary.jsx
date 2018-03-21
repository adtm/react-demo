import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error) {
    this.setState({ hasError: true });
    console.log(error); // this would be a logging service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h4>Oh noo..</h4>
          <span>(It was.. {this.props.info})</span>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
