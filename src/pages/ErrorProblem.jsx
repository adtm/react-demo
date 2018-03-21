import React, { Component } from 'react';

const ToUppercase = ({ name }) => <p>{name.toUpperCase()}</p>;

class ErrorProblem extends Component {
  state = {
    people: [
      { name: 'Mike' },
      { name: 'Robby' }
      // { surname: 'Robby' }
    ]
  }

  render() {
    const { people } = this.state;
    return (
      <div>
        {people.map(person => {
          return <ToUppercase name={person.name} />;
        })}
      </div>
    );
  }
}

export default ErrorProblem;
