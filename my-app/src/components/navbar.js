import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <button className="navbar-toggler" type="button" onClick={handleNavCollapse} aria-expanded={!isNavCollapsed} aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/villa-lobos" activeClassName="active">Villa-Lobos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/brazilian-choro" activeClassName="active">Brazilian Choro</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cuban-american" activeClassName="active">Cuban American</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/performances" activeClassName="active">Performances</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
