import React, { Component } from 'react';
import importedPeople from '../../components/profiling/people.json';
import { Button, Input, Table, Container } from '../../components/profiling/styles';

const Cell = ({ name, index }) => (
  <tr>
    <td>{index}</td>
    <td>{name}</td>
  </tr>
);

const Cells = ({ peopleList }) =>
  peopleList.map((person, i) => {
    return <Cell key={`${person}-${i}`} name={person} index={i + 1} />;
  });


//-----


class Profiling extends Component {
  state = {
    name: '',
    people: importedPeople
  };

  addPerson = () => {
    const { name } = this.state;
    this.setState(({ people }) => ({ people: people.concat(name), name: '' }));
  };

  render() {
    const { people, name } = this.state;
    return (
      <Container>
        <Input
          value={name}
          placeholder="Enter something! 🦆"
          onChange={event => this.setState({ name: event.target.value })}
        />
        <Button onClick={this.addPerson}>Add!</Button>
        <div>
          <Table>
            <thead>
              <tr>
                <th>Index</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <Cells peopleList={people} />
            </tbody>
          </Table>
        </div>
      </Container>
    );
  }
}

export default Profiling;
