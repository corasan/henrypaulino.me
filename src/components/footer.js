import React, { Component } from 'react';
import { Link } from 'react-router';
import { footerAnimation } from '../animations';

const iconPath = process.env.NODE_ENV === 'production' ? '/icons' : '../../dist/icons';

export class Icons extends Component {
  componentDidMount() {
    footerAnimation('#icons-group');
  }

  componentWillUnmount() {}

  render() {
    return (
      <div id="icons-group">
        <a target="_blank" href="https://www.behance.net/corasan360">
          <img src={`${iconPath}/Behance_2.png`} className="icon"/>
        </a>
        <a target="_blank" href="https://github.com/corasan">
          <img src={`${iconPath}/GitHub.png`} className="icon"/>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/henrypl95">
          <img src={`${iconPath}/LinkedIn.png`} className="icon"/>
        </a>
        <a target="_blank" href="https://twitter.com/henrypl95">
          <img src={`${iconPath}/Twitter.png`} className="icon"/>
        </a>
        <a target="_blank" href="https://henrypl95.wordpress.com/">
          <img src={`${iconPath}/WordPress-50.png`} className="icon"/>
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
