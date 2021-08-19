import React from "react";
import logo from '../img/aph-logo.png';

function NavBar() {
  return (
    <header className="Nav-bar">
      <img src={logo} className="Nav-logo"/>
      <a>APH Networks</a>
      <a>Since Forever</a>
    </header>
  );
}

export default NavBar;