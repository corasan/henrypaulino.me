import React, { Component } from 'react';
import NavBar from './Navigation/Navbar';
import { Icons, NameBrand } from './footer';

export default class App extends Component {
  componentDidMount() {
    TweenMax.from('.footer', 0.4, {opacity: 0, delay: 3});
  }

  render() {
    return (
      <div className="container">
        <NavBar/>

        <div className="content">
          {this.props.children}
        </div>

        <div className="footer">
          {this.props.location.pathname === '/' ? <Icons/> : <NameBrand/>}
        </div>
      </div>
    )
  }
}
