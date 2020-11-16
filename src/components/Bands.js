import React from 'react'
import Band from './Band'

const Bands = (props) => {
    return (
        <div>
            <ul>
                {props.bands.map(b => <Band key={b.id} band={b} deleteBand={props.deleteBand}/>)}
            </ul>
        </div>
    )
}

export default Bands

