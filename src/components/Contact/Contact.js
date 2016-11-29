import React, { Component } from 'react';
import { enterTransition } from '../../animations.js';
import ContactForm from './contactForm';

export default class Contact extends Component {
  componentDidMount() {
    enterTransition('.contact-me');
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="contact-me">
        <div className="heading">
          <h1>Contact me</h1>
        </div>

        <ContactForm/>
      </div>
    );
  }
}
