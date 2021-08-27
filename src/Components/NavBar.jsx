import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from '../img/aph-logo.png';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo-name">
          <a href=""><img src={logo} className="navbar-logo" alt="APH logo"/></a>
          <div className="navbar-name">
            <div className="brand"><a href="">APH Networks</a></div>
            <div className="moto">Since Forever</div>
          </div>
        </div>
        <div className="navbar-routes">
          <ul className="routes">
            <li><a href="">Home</a></li>
            <li><a href="">Categories</a></li>
            <li><a href="">Upcoming</a></li>
            <li><a href="">About</a></li>
          </ul>
        </div>

      </nav>
    )
  }
}

export default Navbar;