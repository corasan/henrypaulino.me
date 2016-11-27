import React, { Component } from 'react';
const iconPath = process.env.NODE_ENV === 'production' ? '/icons' : '../../dist/icons';

export class Icons extends Component {
  componentDidMount() {
    TweenMax.from('#icons', 0.4, {opacity: 0, delay: 3});
  }

  componentWillUnmount() {}

  render() {
    return (
      <div id="icons">
        <img src={`${iconPath}/Behance_2.png`} className="icon"/>
        <img src={`${iconPath}/GitHub.png`} className="icon"/>
        <img src={`${iconPath}/LinkedIn.png`} className="icon"/>
        <img src={`${iconPath}/Twitter.png`} className="icon"/>
        <img src={`${iconPath}/WordPress.png`} className="icon"/>
      </div>
    )
  }
}


export class NameBrand extends Component {
  render() {
    return (
      <div className="name-brand">
        <span>Henry Paulino</span>
      </div>
    )
  }
}
