import React from 'react';
import classnames from "classnames";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from "../../../pages/Home/HomePage";
import AboutPage from "../../../pages/About/AboutPage";
import MapPage from "../../../pages/Map/MapPage";
import ContactPage from "../../../pages/Contact/ContactPage";
import './HeaderStyle.css';

export class HeaderComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }
  
  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };
  render() {
    return (
      <Router>
      <header>
        <div className={classnames("navbar", {
          "navbar--hidden": !this.state.visible
        })}>
          {/* <div>
            <div className="tree"><img src={require('../../../assets/tree.png')} alt="tree"/></div>
          </div>
          <hr></hr> */}
          <nav>
            <ul>
            <li>
             <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/map">Map</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            </ul>
            <div className="nav-right">
            <ul>
              <li>
              <Link to="/"><img className="img-user" src={require('../../../assets/user.png')} alt="user"/></Link>
              </li>
            </ul>
          </div>
          </nav>
      
        </div>
      </header>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/map" component={MapPage} />
      <Route path="/contact" component={ContactPage} />
    </Router>
    );
  } 
}
