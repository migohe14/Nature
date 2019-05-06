import React from 'react';
import './HomeStyles.css';
import { Description } from '../../components/Description/Description'

function HomePage() {
  if (typeof(Storage) !== "undefined") {
      localStorage.setItem("title", "This is a test");

      // Save Js object
      let myObject = { name: "Miguel", job: "frontend developer"};
      localStorage.setItem("user", JSON.stringify(myObject));

  } else {
    console.log("LocalStorage is undefined")
  }

  let test = localStorage.getItem("title");
  console.log(test)
  // localStorage.removeItem("title");

  let user: any = localStorage.getItem("user");
  console.log(JSON.parse(user))

  // remove all varibles in storage
  // localStorage.clear();

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
