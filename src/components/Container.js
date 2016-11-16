import React, { Component } from 'react';
import Home from './Home/Home';


export default class Container extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    )
  }
}
