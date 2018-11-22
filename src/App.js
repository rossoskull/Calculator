import React, { Component } from 'react'
import './App.css'
import Display from './components/Display/Display'
import Keypad from './components/Keypad/Keypad'
import fun from './eval'

class App extends Component {
  state = {
    txt: '0'
  }

  handleInput = c => {
    if ( c==='AC' ) {
      this.setState({txt: '0'})
    } else if ( c==='<' ) {
      let txt = this.state.txt;
      txt = txt.substring(0, txt.length-1);
      if ( txt.length === 0 ) txt = '0'
      this.setState({txt: txt})
    } else if ( c==='=') {
      if ( this.state.txt !== '0' ) {
        const value = fun(this.state.txt)
        this.setState({txt: value})
      }      
    } else {
      let txt = this.state.txt
      if ( txt === '0' || txt === 'Error' ) {
        txt = c
      } else {
        txt = txt + c
      }
      this.setState({txt: txt})
    }
  }

  handleKeyPress = e => {
    const keyChart = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '(', ')', '*', '%', '^', '+', '-', '/']

    const { key } = e
    console.log(key)
    if ( key === 'Escape' ) {
      this.handleInput('AC')
    } else if ( key === 'Enter' ) {
      this.handleInput('=')
    } else if ( key === 'Backspace' ) {
      this.handleInput('<')
    } else if ( keyChart.indexOf(key) + 1 ) {
      this.handleInput(key)
    } else {
      console.log('Invalid key.')
    }
  }

  componentDidMount() {
    document.getElementById('calc-body').focus()
  }

  render() {
    return (
        <div id='calc-body' onKeyDown={this.handleKeyPress} tabIndex="-1">
          <Display txt={this.state.txt}/>
          <Keypad handleInput={this.handleInput}/>
        </div>
    );
  }
}

export default App
