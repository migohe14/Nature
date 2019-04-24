import React from 'react';
import './AboutStyles.css';
import { ListUsers } from "../../components/ListUsers/ListUsers";
import { Offices } from "../../components/Offices/Offices";


function AboutPage() {
  return (
    <main className="AboutPage">
      <div>
      <ListUsers />
      </div>
      <div>
      <h2>Our Offices</h2>
      <Offices />
      </div>
    </main>
  );
}

export default AboutPage;
