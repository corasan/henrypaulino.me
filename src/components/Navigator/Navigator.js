import React, { Component } from 'react';
import { connect } from 'react-redux';
import {renderHome} from '../../actions';
import routes from '../../routes';

@connect((store) => {
  return store
})

export default class Navigator extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li><a href="#" onClick={() => this.props.dispatch(renderHome(routes.home))}>About</a></li>
          <li><a href="#" onClick={() => this.props.dispatch(renderHome('projects'))}>Projects</a></li>
        </ul>
      </div>
    );
  }
}
