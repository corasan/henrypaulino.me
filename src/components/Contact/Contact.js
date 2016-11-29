import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-me">
        <div className="heading">
          <h1>Contact me</h1>
        </div>

        <div>
          <form action="mailto:henrypl360@gmail.com" method="post" enctype="text/plain" className="contact-form">
            <div className="column-input">
              <input type="text" name="name" placeholder="Name"/><br/>
              <input type="text" name="subject" placeholder="Subject"/><br/>
              <input type="email" name="email" placeholder="Email"/><br/>
            </div>

            <div className="column-textarea">
              <textarea type="text" name="message" rows="6" cols="50" placeholder="Message..."/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
