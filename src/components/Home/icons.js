import React, { Component } from 'react';

export default class Icons extends Component {
  componentDidMount() {
    TweenMax.from('#icons', 0.4, {opacity: 0, delay: 3});
  }

  render() {
    return (
      <div id="icons">
        <img src="/icons/Behance_2.png" className="icon"/>
        <img src="/icons/GitHub.png" className="icon"/>
        <img src="/icons/LinkedIn.png" className="icon"/>
        <img src="/icons/Twitter.png" className="icon"/>
        <img src="/icons/WordPress.png" className="icon"/>
      </div>
    )
  }
}
