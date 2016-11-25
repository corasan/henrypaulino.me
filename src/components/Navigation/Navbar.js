import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

export default class Navigator extends Component {
  componentDidMount() {
    TweenMax.from('.nav', 0.3, {opacity: 0, delay: 3});
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="nav">
        <ul>
          <li><Link activeClassName="active" to="about">About</Link></li>
          <li><Link activeClassName="active">Projects</Link></li>
        </ul>
      </div>
    );
  }
}
