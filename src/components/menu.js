import React from "react"
import {Link} from "gatsby"

export default () => (
  <div id="menu">
    <ul id="menuList">
    <li class="menuItem">
        <Link to="/about">About</Link>
      </li>
      <li class="menuItem">
        <Link to="/connext">Connext-js</Link>
      </li>
      <li class="menuItem">
        <Link to="/dirext">Dirext-js</Link>
      </li>
      <li class="menuItem">
        <Link to="/team">Team</Link>
      </li>
    </ul>
  </div>
);
