import React, { Component } from 'react';

export default class Home extends Component {
  componentDidMount() {
    TweenMax.from('.name-title', 2.5, {opacity: 0, y: -100});
    TweenMax.from('.subtitle', 3, {opacity: 0, delay: 2});
  }

  // componentWillUnmount() {}

  render() {
    return (
      <div className="home-container">
        <h1 className="name-title">Henry Paulino</h1><br></br>
        <h2 className="subtitle">I'm a Front End Developer and <br/>design enthusiast</h2>
      </div>
    )
  }
}
