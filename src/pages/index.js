import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <div id="landing">
    <div id="ingridLanding">
      <img src="https://i.ibb.co/CmsvnRt/Ingrid-Grey.png" />
      {/* <img src="https://karandeepahluwalia.github.io/face.jpg" /> */}
    </div>
    <div id="menu">
      <ul id="menuList">
        <li className="menuItem">
          <Link to="/about">About</Link>
        </li>
        <li className="menuItem">
          <Link to="/connext">Connext-js</Link>
        </li>
        <li className="menuItem">
          <Link to="/dirext">Dirext-js</Link>
        </li>
        <li className="menuItem">
          <Link to="/team">Team</Link>
        </li>
      </ul>
    </div>
  </div>
);
