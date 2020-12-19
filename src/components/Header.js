import React, { useState } from 'react';
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
        <a href="/" className="logo-container">
          <img src={logo} alt="" className="logo" />
        </a>
        <Nav />
        <div className="profile-container">
          <img src="https://placehold.it/50x50" alt="" className="profile-logo" />
          {btn}
        </div>
      </div>
    </header>
  );
}

export default Header;
