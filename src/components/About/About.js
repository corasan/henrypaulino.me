import React, { Component } from 'react';

export default class About extends Component {
  componentDidMount() {
    TweenMax.from('.about-me', 1.5, {opacity: 0, x: 150});
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="about-me">
        <div className="heading">
          <h1>About me</h1>
        </div>

        <div className="about-me-content">
          <div className="column-one">
            <p><span className="highlighter">I'm a passionate Front End Developer </span>
            from Dominican Republic living in NYC; With a background in Ruby on Rails back end development, my strength lies
            in the front end and the vast world of JavaScript.</p>

            <p>I focus mainly on learning new technologies, libraries, and expanding my knowledge of JavaScript.
            I like to work in the <span className="highlighter">Node.js</span> environment and I love everything
            <span className="highlighter"> React.</span></p>
          </div>

          <div className="column-two">
            <p>I like to spend my free time coding, watching TV shows (The Office, forever my favorite), watching a movie,
            listening music, cooking, playing League of Legends, running, and hanging out with family.</p>

            <p>If you would like to know more about me, my projects, or my front end ninja skills, please feel free to send me
            an email at: <span className="highlighter">henrypl360@gmail.com</span>.</p>
          </div>
        </div>
      </div>
    );
  }
}
