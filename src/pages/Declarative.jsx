import React, { Component } from 'react';

/**
 * Look at your own risk
 * @extends Component
 */
class Declarative extends Component {
  state = {
    color: 'gray',
    userApproves: false
  };

  hasBlue = () => (this.state.color === 'blue' ? true : false);

  addBlue = () => this.setState({ color: 'blue' });

  addGrey = () => this.setState({ color: 'grey' });

  removeBlue = () => this.setState({ color: '' });

  removeGray = () => this.setState({ color: '' });

  userDoesNotApprove = () => this.setState({ userApproves: false });

  render() {
    const { userApproves } = this.state;
    return (
      <div>
        <button
          onClick={() =>
            this.setState(prevState => ({
              userApproves: !prevState.userApproves
            }))
          }>
          I approve button!
        </button>
        <p>
          {(() => {
            if (userApproves) {
              if (this.hasBlue()) {
                this.removeBlue();
                this.addGrey();
              } else {
                this.removeGray();
                this.addBlue();
              }
              this.userDoesNotApprove();
            }
          })()}
          <button style={{ background: this.state.color }}>
            Ma color is {this.state.color}
          </button>
        </p>
      </div>
    );
  }
}

export default Declarative;
