import React, { Component } from 'react';

class Band extends Component {
  onClick = () => {
    this.props.deleteBand(this.props.id)
  }

  render() {
    // console.log(this.props)
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.onClick}>
          Unlike
        </button>
      </div>
    );
  }
};

export default Band;
