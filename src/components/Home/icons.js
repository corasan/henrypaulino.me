import React, { Component } from 'react';

export default class Icons extends Component {
  componentDidMount() {
    TweenMax.from('#icons', 0.4, {opacity: 0, delay: 3});
  }

  render() {
    return (
      <div id="icons">
        <img src="../../../dist/icons/Behance_2.png" className="icon"/>
        <img src="../../../dist/icons/GitHub.png" className="icon"/>
        <img src="../../../dist/icons/LinkedIn.png" className="icon"/>
        <img src="../../../dist/icons/Twitter.png" className="icon"/>
        <img src="../../../dist/icons/WordPress.png" className="icon"/>
      </div>
    )
  }
}
