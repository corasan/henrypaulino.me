import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('./styles/main.scss');

class Main extends Component {
  render() {
    return (
      <h1 id="test">Henry Paulino</h1>
    );
  }
}

module.hot.accept();
ReactDOM.render(<Main/>, document.getElementById('app'));
