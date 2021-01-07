/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';

function Login({ pageTitle, login }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = () => {
    if (username === 'admin' && password === '12345') {
      login();
    } else {
      alert('username: admin, pass: 12345');
    }
  };

  return (
    <div className="row login">
      <div className="col-12">
        <PageTitle pageTitle={pageTitle} />
      </div>
      <form className="login__form">
        <div className="mb-3">
          <label htmlFor="inputUsername" className="form-label">
            Логин
          </label>
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={submitLogin}>
          Войти
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
};

export default Login;
