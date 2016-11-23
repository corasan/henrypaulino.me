import React, { Component } from 'react';
import NavBar from './Navigation/Navbar';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar/>

        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
