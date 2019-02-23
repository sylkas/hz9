import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/catalog">Catalog</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
