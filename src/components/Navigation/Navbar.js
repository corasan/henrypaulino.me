import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigator extends Component {
  componentDidMount() {

  }
  
  render() {
    return (
      <div className="nav">
        <ul>
          <li><Link activeClassName="active">About</Link></li>
          <li><Link activeClassName="active">Projects</Link></li>
        </ul>
      </div>
    );
  }
}
