import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <div id="landing">
    <div id="ingridLanding">
      <img src="https://i.ibb.co/XjjVB8z/Ingrid-Big-BG.png" />
      {/* <img src="https://karandeepahluwalia.github.io/face.jpg" /> */}
    </div>
    <div id="landingGeist">
      GEIST
    </div>
    <div id="landingSS">
      SOFTWARE SOLUTIONS
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
