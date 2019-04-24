import React from 'react';
import './DescriptionStyle.css';

export class Description extends React.Component<any, any> {
  render() {
    return (
        <div className="description">
            <div className="sun"><img src={require('../../assets/sun.png')} alt="sun"/></div>
            <div>
                <h2>Sun</h2>
                <p>Renewable energy is cheap, sustainable, and already making our planet more green and peaceful.</p>
            </div>
            <div className="water"><img src={require('../../assets/water.png')} alt="water"/></div>
            <div>
                <h2>Water</h2>
                <p>We need a world where oceans and forests are protected and are allowed to flourish. We need a new story to emerge, one that places the entire Earth’s ability to thrive above the greed of a few.</p>
            </div>
            <div className="leaf"><img src={require('../../assets/leaf.png')} alt="leaf"/></div>
            <div>
                <h2>Nature</h2>
                <p>Focusing on great global forests and oceans we aim to preserve, protect and restore the most valuable ecosystems for the climate and for biodiversity.</p>
            </div>
        </div>
    );
  }
}
