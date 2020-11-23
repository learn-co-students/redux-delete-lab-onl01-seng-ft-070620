import React, { Component } from "react";

class Band extends Component {
  render() {
    const { id, name } = this.props.band;
    return (
      <div>
        <span>
          <li>{name}</li>
          <button onClick={() => this.props.deleteBand(this.props.band.id)}>
            Delete Band
          </button>
        </span>
      </div>
    );
  }
}

export default Band;
