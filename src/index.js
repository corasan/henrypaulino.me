import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import NavBar from './components/Navigation/NavBar';
require('./styles/main.scss');

class Main extends Component {
  render() {
    return (
      <div className="app-container">
        {/* <NavBar/> */}
        <Home/>
      </div>
    );
  }
}

if (module.hot) module.hot.accept();
ReactDOM.render(<Main/>, document.getElementById('app'));
