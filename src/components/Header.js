import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import Nav from './Nav';
import Button from './Button';

function Header() {
  const isLoginned = useState(false);
  let btn = useState();
  if (isLoginned) {
    btn = <Button classes="btn-login btn btn-primary" text="Войти" />;
  } else {
    btn = <Button classes="btn-logout btn btn-danger" text="Выйти" />;
  }

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
          {btn}
        </div>
      </div>
    </header>
  );
}

export default Header;
