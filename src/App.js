import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Categories from "./Components/Categories";
import Upcoming from "./Components/Upcoming";
import About from "./Components/About";
import logo from "./img/aph-logo.png";

export default function App() {
  const [state, setState] = useState(false);

  function handleClick() {
    setState(!state);
  }

  return (
    <Router>
      <div className="Navbar">
        <Link to="/" style={linkStyle}>
          <div className="navbar-logo-brand">
            <div className="navbar-logo">
              <img src={logo} alt="APH logo" />
            </div>
            <div className="navbar-brand">
              <div className="brand">APH Networks</div>
              <div className="moto">Since Forever</div>
            </div>
          </div>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className="fas fa-bars"></i>
        </div>
        <ul className={state ? "nav-routes active" : "nav-routes"}>
          <li>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/categories" style={linkStyle}>
              Categories
            </Link>
          </li>
          <li>
            <Link to="/upcoming" style={linkStyle}>
              Upcoming
            </Link>
          </li>
          <li>
            <Link to="/about" style={linkStyle}>
              About
            </Link>
          </li>
        </ul>

        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/upcoming">
            <Upcoming />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* Home path must be last in order to render other Links properly */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#fff",
};
