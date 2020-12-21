import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import Nav from './Nav';

function Header() {
  const isLoginned = useState(false);

  return (
    <header className="header">
      <div className="header__container container">
        <NavLink
          className="logo-container"
          to="/"
        >
          <img
            src={logo}
            alt="Реакт"
            className="logo"
          />
        </NavLink>
        <Nav />
        <div className="profile-container">
          <NavLink to="/profile">
            <img
              className="profile-logo"
              src="https://placehold.it/50x50"
              alt="Профиль"
            />
          </NavLink>
          {isLoginned
            ? <NavLink to="/login" type="button" className="btn-login btn btn-primary">Войти</NavLink>
            : <button type="button" className="btn-logout btn btn-danger">Выйти</button>}
        </div>
      </div>
    </header>
  );
}

export default Header;
