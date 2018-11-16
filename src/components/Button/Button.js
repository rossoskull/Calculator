import React from 'react'
import './Button.css'

const Button = ({face, size, handleInput}) => {
    const classes = ['button-cont', size]
    return(
        <div onClick={() => {handleInput(face)}} className={classes.join(' ')}>
            {face}
        </div>
    )
}

export default Button