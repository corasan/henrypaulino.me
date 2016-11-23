import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navigator extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li><Link>About</Link></li>
          <li><Link>Projects</Link></li>
        </ul>
      </div>
    );
  }
}
