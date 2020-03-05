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
    <hr></hr>
    <div id="landingBreak"></div>
    <div id="menu">
      <ul id="menuList">
        <li className="menuItem">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="menuItem">
          <Link to="/connext">CONNEXT-JS</Link>
        </li>
        <li className="menuItem">
          <Link to="/dirext">DIREXT-JS</Link>
        </li>
        <li className="menuItem">
          <Link to="/team">TEAM</Link>
        </li>
      </ul>
    </div>
  </div>
);
