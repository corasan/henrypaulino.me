import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

export default class Navigator extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li><Link activeClassName="active" className="hover-link">About</Link></li>
          <li><Link activeClassName="active" className="hover-link">Projects</Link></li>
        </ul>
      </div>
    );
  }
}
