import React from 'react'
import './Display.css'

const Display = ({txt}) => {
    return(
        <div id='display'>
            <p id='txt'>
                {txt}
            </p>
        </div>
    )
}

export default Display