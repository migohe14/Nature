import React from 'react';
import './App.css';
import { HeaderComponent } from './components/Shared/Header/HeaderComponent';
import { FooterComponent } from './components/Shared/Footer/FooterComponent';

export class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <HeaderComponent />
        <FooterComponent />
      </div>
    );
  }
}

