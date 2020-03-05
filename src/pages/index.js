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
        <Link to="/about">
        <li className="menuItem">
          ABOUT
        </li>
        </Link>
        <Link to="/connext">
        <li className="menuItem">
          CONNEXT-JS
        </li>
        </Link>
        <Link to="/dirext">
        <li className="menuItem">
          DIREXT-JS
        </li>
        </Link>
        <Link to="/team">
        <li className="menuItem">
          TEAM
        </li>
        </Link>
      </ul>
    </div>
  </div>
);
