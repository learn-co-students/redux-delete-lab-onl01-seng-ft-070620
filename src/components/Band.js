import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    debugger
    this.props.deleteBand(this.props.band.id)
  }

  render() {
    return(
      <li key={this.props.band.id}>
        {this.props.band.name}<button key={this.props.band.id} onClick={() => this.handleClick()}>DELETE</button>
      </li>
    );
  }
};

export default Band
