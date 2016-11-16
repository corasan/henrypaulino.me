import React, { Component } from 'react';
import { connect } from 'react-redux';
import {renderHome} from '../../actions';
import NavList from './navList';

@connect((store) => {
  return store
})

export default class Navigator extends Component {
  render() {
    return (
      <div className="nav">
        <NavList dispatch={this.props.dispatch}/>
      </div>
    );
  }
}
