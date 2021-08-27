import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Home from "./Components/Home";
import Categories from "./Components/Categories";
import Upcoming from "./Components/Upcoming";
import About from "./Components/About";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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
          {/* Home path must be last in order to render everything else properly */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
