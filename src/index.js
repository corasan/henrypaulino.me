import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Container from './components/Container';
import Home from './components/Home/Home';
import Navigator from './components/Navigator/Navigator';
import store from './reducers';
require('./styles/main.scss');

class HenryPaulino extends Component {
  render() {
    return (
      <Container/>
    );
  }
}

if (module.hot) module.hot.accept();

render(
  <Provider store={store}>
    <HenryPaulino/>
  </Provider>,
  document.getElementById('app')
);
