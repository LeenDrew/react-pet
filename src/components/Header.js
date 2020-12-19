import React from 'react';
import Nav from './Nav';
import logo from '../assets/img/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <a href="/" className="logo-container">
          <img src={logo} alt="" className="logo" />
        </a>
        <Nav />
        <div className="profile-container">
          <img src="https://placehold.it/50x50" alt="" className="profile-logo" />
          <button type="button" className="btn-login btn btn-primary">Войти</button>
          <button type="button" className="btn-logout btn btn-danger">Выйти</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
