import React, { Component } from 'react';
import NavBar from './Navigation/Navbar';
import { Icons, NameBrand } from './footer';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar/>

        <div className="content">
          {this.props.children}
        </div>

        {this.props.location.pathname === '/' ? <Icons/> : <NameBrand/>}
      </div>
    )
  }
}
