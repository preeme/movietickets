import React from 'react';
import './nav.css';

const Nav = () => (
  <div>
    <nav className="flex-nav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li className="right">
          <a href="/">Cart</a>
        </li>
        <li className="right">
          <a href="/signin">Log In/Sign Up</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
