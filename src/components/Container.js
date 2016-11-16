import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home/Home';
import NavBar from './Navigator/Navigator';
import store from '../reducers';

@connect((store) => {
  return {
    component: store.render
  }
})

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    }
  }

  render() {
    console.log(this.props.component);
    return (
      <div className="container">
        <NavBar/>

        <div>
          {this.props.component}
        </div>
      </div>
    )
  }
}
