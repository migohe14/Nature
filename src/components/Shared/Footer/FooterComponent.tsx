import React from 'react';
import './FooterStyle.css';

export class FooterComponent extends React.Component<any, any> {
  render() {
    let today = new Date();
    let year = today.getFullYear();
    return (
      <footer>
        <div>
          <p>© {year} Copyright: www.testreact.es</p>
        </div>
      </footer>
    );
  }
}
