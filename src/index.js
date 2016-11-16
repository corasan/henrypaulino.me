import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import Home from './components/Home/Home';
import NavBar from './components/Navigation/NavBar';
require('./styles/main.scss');

class HenryPaulino extends Component {
  render() {
    return (
      <Container>
        <Home/>
      </Container>
    );
  }
}

if (module.hot) module.hot.accept();
ReactDOM.render(<HenryPaulino/>, document.getElementById('app'));
