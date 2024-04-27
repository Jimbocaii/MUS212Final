// src/components/navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#villa-lobos">Villa-Lobos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#brazilian-choro">Brazilian Choro</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cuban-american">Cuban American</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#performances">Performances</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
