import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import HenryPaulino from './components/app.js';
import NavBar from './components/Navigation/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

require('./styles/main.scss');

class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={HenryPaulino}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About}/>
          <Route path="contact" component={Contact}/>
        </Route>
      </Router>
    );
  }
}

if (module.hot) module.hot.accept();

render(<Root/>, document.getElementById('app'));
