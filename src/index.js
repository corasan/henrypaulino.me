import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Main extends Component {
  render() {
    return (
      <h1>Henry Paulino</h1>
    );
  }
}

module.hot.accept();
ReactDOM.render(<Main/>, document.getElementById('app'));
