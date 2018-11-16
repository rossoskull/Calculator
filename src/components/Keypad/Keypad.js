import React from 'react'
import Button from '../Button/Button'

const Keypad = ({handleInput}) => {
    return(
        <div id='keypad'>
        <div className='keypad-row'>
                <Button face='AC' size='b-3' handleInput={handleInput}/>
                <Button face='<' size='b-3' handleInput={handleInput} />
                <Button face='/' size='b-3' handleInput={handleInput} />
                <Button face='*' size='b-3' handleInput={handleInput} />
            </div>
            <div className='keypad-row'>
                <Button face='7' size='b-3' handleInput={handleInput} />
                <Button face='8' size='b-3' handleInput={handleInput} />
                <Button face='9' size='b-3' handleInput={handleInput} />
                <Button face='-' size='b-3' handleInput={handleInput} />
            </div>
            <div className='keypad-row'>
                <Button face='4' size='b-3' handleInput={handleInput} />
                <Button face='5' size='b-3' handleInput={handleInput} />
                <Button face='6' size='b-3' handleInput={handleInput} />
                <Button face='+' size='b-3' handleInput={handleInput} />
            </div>
            <div className='keypad-row'>
                <Button face='1' size='b-3' handleInput={handleInput} />
                <Button face='2' size='b-3' handleInput={handleInput} />
                <Button face='3' size='b-3' handleInput={handleInput} />
                <Button face='%' size='b-3' handleInput={handleInput} />
            </div>
            <div className='keypad-row'>
                <Button face='.' size='b-3' handleInput={handleInput} />
                <Button face='0' size='b-3' handleInput={handleInput} />
                <Button face='=' size='b-2' handleInput={handleInput} />
            </div>
        </div>
    )
}

export default Keypad