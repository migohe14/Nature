import React from 'react';
import './RegisterFormStyle.css';

export class RegisterForm extends React.Component<any, any> {
  render() {
    return (
      <form action="/my-handling-form-page" method="post">
        <div>
            <label>Name:</label>
            <input type="text" id="name" />
        </div>
        <div>
            <label>Last name:</label>
            <input type="text" id="lastname" />
        </div>
        <div>
            <label>E-mail:</label>
            <input type="email" id="mail" />
        </div>
        <div>
            <label>Message:</label>
            <textarea id="msg"></textarea>
        </div>
        
        <div className="button">
            <button type="submit">Send your message</button>
        </div>
    </form>
    );
  }
  
}
