import React, { Component } from 'react';
import { ColorButton, TriggerButton } from '../../components/declarative/styles';

/**
 * Look at your own risk,
 * this is almost the same as:
 *

  $('#btn').click(function() {
   if ($(this).hasClass('blue')) {
     $(this).removeClass('blue');
     $(this).addClass('gray');
   } else {
     $(this).removeClass('gray');
     $(this).addClass('blue');
   }
  })

 * @extends Component
 */
class Imperative extends Component {
  state = {
    color: 'gray',
    userApproves: false
  };

  hasBlue = () => (this.state.color === 'blue');

  addBlue = () => this.setState({ color: 'blue' });

  addGrey = () => this.setState({ color: 'grey' });

  removeBlue = () => this.setState({ color: '' });

  removeGray = () => this.setState({ color: '' });

  userDoesNotApprove = () => this.setState({ userApproves: false });

  render() {
    const { userApproves } = this.state;
    return (
      <div>
        <TriggerButton
          onClick={() =>
            this.setState(prevState => ({
              userApproves: !prevState.userApproves
            }))
          }
        >
          Let{'\''}s switch it!
        </TriggerButton>

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
        <ColorButton style={{ background: this.state.color }}>
          {this.state.color}
        </ColorButton>

      </div>
    );
  }
}

export default Imperative;
