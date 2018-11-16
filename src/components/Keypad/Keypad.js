import React from 'react'
import Button from '../Button/Button'

const Keypad = () => {
    return(
        <div id='keypad'>
        <div className='keypad-row'>
                <Button face='AC' size='b-3' />
                <Button face='<' size='b-3' />
                <Button face='/' size='b-3' />
                <Button face='*' size='b-3' />
            </div>
            <div className='keypad-row'>
                <Button face='7' size='b-3' />
                <Button face='8' size='b-3' />
                <Button face='9' size='b-3' />
                <Button face='-' size='b-3' />
            </div>
            <div className='keypad-row'>
                <Button face='4' size='b-3' />
                <Button face='5' size='b-3' />
                <Button face='6' size='b-3' />
                <Button face='+' size='b-3' />
            </div>
            <div className='keypad-row'>
                <Button face='1' size='b-3' />
                <Button face='2' size='b-3' />
                <Button face='3' size='b-3' />
                <Button face='%' size='b-3' />
            </div>
            <div className='keypad-row'>
                <Button face='.' size='b-3' />
                <Button face='0' size='b-3' />
                <Button face='=' size='b-2' />
            </div>
        </div>
    )
}

export default Keypad