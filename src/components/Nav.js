import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <NavLink
        className="nav__link"
        to="/"
      >
        Главная
      </NavLink>
      <NavLink
        className="nav__link"
        to="/news"
      >
        Новости
      </NavLink>
    </nav>
  );
}

export default Nav;
