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
      const value = fun(this.state.txt)
      this.setState({txt: value})
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

  render() {
    return (
        <div id='calc-body'>
          <Display txt={this.state.txt}/>
          <Keypad handleInput={this.handleInput}/>
        </div>
    );
  }
}

export default App
