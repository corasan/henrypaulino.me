import React, { Component } from 'react';
import NavBar from './Navigation/Navbar';
import Icons from './Home/icons';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar/>

        <div className="content">
          {this.props.children}
        </div>

        <Icons/>
      </div>
    )
  }
}
