import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import LargeText from './largeText';

let int1 = 1;
let int0 = 0;

export default class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      active: true
    }
  }

  handleStates = function() {
    return this.setState({active: !this.state.active})
  }.bind(this)

  renderItems = function() {
    if(this.state.active){
      return[
        <Clock/>,
        Button(false, this.handleStates),
        LargeText('04/03')
      ]
    } else{
      return[
        Button(true, this.handleStates),
        <Picker/>
      ]
    }
  }.bind(this)

  render() {
    return (
      <div className="grid">
        <h1 className="grid_title">Birthday Countdown</h1>
        <div className="grid_skew-light-one"></div>
        <div className="grid_skew-dark-one"></div>

        {this.renderItems()}
      </div>
    );
  }
}
