import React from 'react'
import './Button.css'

const Button = ({face, size}) => {
    const classes = ['button-cont', size]
    return(
        <div className={classes.join(' ')}>
            {face}
        </div>
    )
}

export default Button