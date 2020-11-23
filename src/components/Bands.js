import React, { Component } from 'react';
import Band from './Band'


class Bands extends Component {


  render() {
    return(
      <ul>
        {this.props.bands.map(band => {
            return <Band name={band.name} id={band.id} deleteBand={this.props.deleteBand}/>
        })}
      </ul>
    );
  }
};

export default Bands;