import React, { Component } from 'react';

export default class Band extends Component {
  render() {
    return(
      <li>
        {this.props.band.name}
        <button onClick={() => this.props.deleteBand(this.props.band.id)}>
          Delete
        </button>
      </li>
    )
  }

}
