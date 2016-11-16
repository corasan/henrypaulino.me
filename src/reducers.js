import { createStore } from 'redux';
import React, { Component } from 'react';
import Home from './components/Home/Home';
const init = {
  render: <Home/>
}

const store = (state=init, action) => {
  switch(action.type) {
    case 'RENDER_COMPONENT':
      return {
        ...state,
        render: action.component
      };
    default: return state;
  }
}

export default createStore(store);
