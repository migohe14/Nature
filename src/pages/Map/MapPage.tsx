import React from 'react';
import './MapStyles.css';
import { MapData } from '../../components/MapData/MapData';

function MapPage() {
    
  return (
    <main className="MapPage">
      <div className="map">
      <MapData />
      {/* <iframe src="https://www.google.com/maps/d/embed?mid=1PahpH6_mzzzFi6SZa3K8jnep7-I"></iframe> */}
      </div>
    </main>
  );
}

export default MapPage;
