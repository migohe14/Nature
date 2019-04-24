import React from 'react';
import './OfficesStyle.css';

export class Offices extends React.Component<any, any> {
  render() {
    var offices = [
        {country: "France", zone: "UE", img: require("../../assets/europe.jpg")},
        {country: "EEUU", zone: "America", img: require("../../assets/america.jpg")},
        {country: "Pekin", zone: "Asia", img: require("../../assets/asia.jpg")},
      ]
    return (
        <div className="CardProfile row">
            {offices.map((item, index) => {
              return <div className="card" key={index} >
              <img src={item.img} alt="country"/>
              <div className="container">
                <h4><b>{item.country}</b></h4> 
                <p>{item.zone}</p> 
              </div>
            </div>
            })}
      </div>
    );
  }
}
