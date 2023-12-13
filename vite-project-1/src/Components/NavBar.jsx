import React from "react";

function NavBar(props) {
  return (
    <nav className="nav">
      <div className="container">
        <a href="/" className="site-title">The Colin Portfolio</a>
        <ul>
          <li>
            <a href="Projects">Projects</a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;