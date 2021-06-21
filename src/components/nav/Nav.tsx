import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

export default function Nav(): React.ReactElement {
  return (
    <nav className="nav">
      <NavLink className="nav__link" to="/">
        Главная
      </NavLink>
      <NavLink className="nav__link" to="/news">
        Новости
      </NavLink>
    </nav>
  );
}
