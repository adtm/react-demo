import React, { Component } from 'react';
import { ColorButton, TriggerButton } from '../../components/declarative/styles';


const ChangeButton = ({ handleClick, text }) => (
  <TriggerButton onClick={handleClick}>{text}</TriggerButton>
);

const Button = ({ color }) => (
  <ColorButton style={{ background: color }}>{color}</ColorButton>
);

class Declarative extends Component {
  state = {
    color: 'gray'
  };

  changeUserApproval = () =>
    this.setState(({ userApproves, color }) => ({
      userApproves: !userApproves,
      color: userApproves && color === 'blue' ? 'gray' : 'blue'
    }));

  render() {
    return (
      <div>
        <ChangeButton
          handleClick={this.changeUserApproval}
          text="Let's switch it!"
        />
        <Button color={this.state.color} />
      </div>
    );
  }
}

export default Declarative;
