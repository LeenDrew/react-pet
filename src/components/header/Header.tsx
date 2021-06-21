import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutAction } from '../../store/actions/loginActions';
import logo from '../../assets/img/logo.svg';
import { RootState } from '../../store/store';
import Nav from '../nav/Nav';
import './Header.scss';

export default function Header(): React.ReactElement {
  const dispatch = useDispatch();
  const isLoginned = useSelector((state: RootState) => state.loginReducer.isLoginned);

  return (
    <header className="header">
      <div className="header__container container">
        <NavLink className="logo-container" to="/">
          <img src={logo} alt="Реакт" className="logo" />
        </NavLink>
        <Nav />
        <div className="profile-container">
          <NavLink to="/profile">
            <img className="profile-logo" src="https://picsum.photos/50" alt="Профиль" />
          </NavLink>
          {isLoginned ? (
            <button
              type="button"
              className="btn-logout btn btn-danger"
              onClick={() => dispatch(logoutAction())}
            >
              Выйти
            </button>
          ) : (
            <NavLink to="/login" className="btn-login btn btn-primary">
              Войти
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}
