import React from 'react'

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