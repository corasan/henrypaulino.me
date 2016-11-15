import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
require('./styles/main.scss');

class Main extends Component {
  render() {
    return (
      <div className="app-container">
        <Home/>
      </div>
    );
  }
}

module.hot.accept();
ReactDOM.render(<Main/>, document.getElementById('app'));
