import React, { Component } from 'react';
import { Link } from 'react-router';
import { footerAnimation } from '../animations';

export class Icons extends Component {
  componentDidMount() {
    footerAnimation('#icons-group');
  }

  componentWillUnmount() {}

  render() {
    return (
      <div id="icons-group">
        <a target="_blank" href="https://www.behance.net/corasan360">
          <img src="https://s3.amazonaws.com/henrypaulino/icons/Behance_2.png" className="icon"/>
        </a>
        <a target="_blank" href="https://github.com/corasan">
          <img src="https://s3.amazonaws.com/henrypaulino/icons/GitHub.png" className="icon"/>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/henrypl95">
          <img src="https://s3.amazonaws.com/henrypaulino/icons/LinkedIn.png" className="icon"/>
        </a>
        <a target="_blank" href="https://twitter.com/henrypl95">
          <img src="https://s3.amazonaws.com/henrypaulino/icons/Twitter.png" className="icon"/>
        </a>
        <a target="_blank" href="https://henrypl95.wordpress.com/">
          <img src="https://s3.amazonaws.com/henrypaulino/icons/WordPress-50.png" className="icon"/>
        </a>
      </div>
    )
  }
}


export class NameBrand extends Component {
  componentDidMount() {
    footerAnimation('#name-brand');
  }

  componentWillUnmount() {}

  render() {
    return (
      <Link to="/" id="name-brand">Henry Paulino</Link>
    )
  }
}
