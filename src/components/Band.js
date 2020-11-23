import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = (event) => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    return(
      <li>{this.props.name}
        <button onClick={this.handleOnClick}>DELETE</button>
      </li>
    );
  }
};

export default Band;
