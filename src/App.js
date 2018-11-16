import React, { Component } from 'react'
import './App.css'
import Display from './components/Display/Display'
import Keypad from './components/Keypad/Keypad'

class App extends Component {
  state = {
    txt: '0'
  }
  render() {
    return (
        <div id='calc-body'>
          <Display txt={this.state.txt} />
          <Keypad />
        </div>
    );
  }
}

export default App
