/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';

function Login(props) {
  const { pageTitle } = props;
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = () => {
    if (true) {
      setUserName(username);
      setPassword(password);
      console.log(username, password);
    } else {
      console.log('123');
    }
  };

  return (
    <div className="row login">
      <div className="col-12">
        <PageTitle pageTitle={pageTitle} />
      </div>
      <form className="login__form">
        <div className="mb-3">
          <label htmlFor="inputUsername" className="form-label">Логин</label>
          <input type="text" className="form-control" id="inputUsername" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Пароль</label>
          <input type="password" className="form-control" id="inputPassword" />
        </div>
        <button type="button" className="btn btn-primary" onClick={submitLogin}>Войти</button>
      </form>
    </div>
  );
}

Login.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Login;
