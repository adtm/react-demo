import React, { Component } from 'react';

const ApprovalButton = ({ handleClick, text }) => (
  <div onClick={handleClick}>{text}</div>
);

const Button = ({ color }) => (
  <button style={{ background: color }}>{color}</button>
);

class Declarative extends Component {
  state = {
    color: 'gray',
    userApproves: false
  };

  changeUserApproval = () =>
    this.setState(({ userApproves, color }) => ({
      userApproves: !userApproves,
      color: userApproves && color === 'blue' ? 'gray' : 'blue'
    }));

  render() {
    return (
      <div>
        <ApprovalButton
          handleClick={this.changeUserApproval}
          text="I approve button!"
        />
        <Button color={this.state.color} />
      </div>
    );
  }
}

export default Declarative;
