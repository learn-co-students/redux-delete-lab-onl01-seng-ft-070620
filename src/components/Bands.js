import React from 'react'
import Band from './Band'

const Bands = props => {
  return (
    <ul>
      {props.bands.map(band =>
        <Band band={band} key={band.id} deleteBand={props.deleteBand} />)}
    </ul>
  )
}

export default Bands
