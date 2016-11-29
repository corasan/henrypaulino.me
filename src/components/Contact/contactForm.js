import React, { Component } from 'react';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      subject: '',
      email: '',
      message: ''
    }
  }

  handleName = (e) => this.setState({name: e.target.value});

  handleSubject = (e) => this.setState({subject: e.targer.value});

  handleEmail = (e) => this.setState({email: e.target.value});

  handleMessage = (e) => this.setState({message: e.target.value});

  render() {
    return (
      <div>
        <form action="mailto:henrypl360@gmail.com" method="post" encType="text/plain">
          <div className="contact-form">
            <div className="column-input">
              <input type="text" name="name" placeholder="Name" onChange={this.handleName}
              value={this.state.name}/><br/>
              <input type="text" name="subject" placeholder="Subject" onChange={this.handleSubject}/><br/>
              <input type="email" name="email" placeholder="Email" onChange={this.handleEmail}
              value={this.state.email}/><br/>
            </div>

            <div className="column-textarea">
              <textarea type="text" name="message" rows="6" cols="50" placeholder="Message..."
              onChange={this.handleMessage} value={this.state.message}/><br/>
            </div>
          </div>

          <div style={{display: 'flex', justifyContent: 'right'}}>
            <button type="submit" className="submit-form">Send</button>
          </div>
        </form>
      </div>
    );
  }
}
