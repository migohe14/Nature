import React from 'react';
import './HomeStyles.css';
import { Description } from '../../components/Description/Description'

function HomePage() {
  return (
    <main className="HomePage">
      <div>
        <div className="paralax">
        </div>
        <div className="title">
          <img src={require('../../assets/greenpeace.png')} alt="greenpeace"/>
        </div>
        <div>
          <Description />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
