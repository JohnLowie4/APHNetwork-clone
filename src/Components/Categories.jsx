import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export default function Categories() {
  // let match = useRouteMatch();

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        <li>
          {/* <Link to={`${match.url}/computer-hardware`}>Computer Hardware</Link> */}
          Computer Hardware
        </li>
        <li>
          {/* <Link to={`${match.url}/computer-peripherals`}>Computer Peripherals</Link> */}
          Computer Peripherals
        </li>
        <li>
          {/* <Link to={`${match.url}/consumer-electronics`}>Consumer Electronics</Link> */}
          Consumer Electronics
        </li>
        <li>
          {/* <Link to={`${match.url}/video-games`}>Video Games</Link> */}
          Video Games
        </li>
      </ul>
    </div>
  )
}