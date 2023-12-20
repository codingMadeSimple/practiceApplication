import React from "react";

function NavBar(props) {
  return (
    <nav className="nav">
      <div className="container">
        <a href="/" className="site-title">The Colin Portfolio</a>
        <ul>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/experience">Experience</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;