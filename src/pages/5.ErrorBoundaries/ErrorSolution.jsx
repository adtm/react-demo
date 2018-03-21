import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';

const ToUppercase = ({ name }) => <p>{name.toUpperCase()}</p>;

class ErrorSolution extends Component {
  state = {
    people: [
      { name: 'Mike' },
      { name: 'Robby' },
      { surname: 'Robby' }
    ]
  }

  render() {
    const { people } = this.state;
    return (
      <div>
        {people.map(person => {
          return (
            <ErrorBoundary info="name does not exist!">
              <ToUppercase name={person.name} />
            </ErrorBoundary>
          );
        })}
      </div>
    );
  }
}

export default ErrorSolution;
