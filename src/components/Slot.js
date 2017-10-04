import React, { Component } from 'react';

class Slot extends Component {

  defaultProps = {
    mode: 'trusted'
  }

  render() {
    return (
      <div data-lift-slot={this.props.id} data-lift-mode={this.props.mode}>
        {this.props.children}
      </div>
    );
  }
}

export default Slot;
