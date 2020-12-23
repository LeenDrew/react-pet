import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import Nav from './Nav';

function Header(props) {
  const { isLoginned } = props;

  const logout = () => {
    localStorage.setItem('isLoginned', false);
    alert('Вы вышли. Перезагрузите страницу');
  };

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
            ? <button type="button" className="btn-logout btn btn-danger" onClick={logout}>Выйти</button>
            : <NavLink to="/login" type="button" className="btn-login btn btn-primary">Войти</NavLink>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  isLoginned: PropTypes.bool.isRequired,
};

export default Header;
