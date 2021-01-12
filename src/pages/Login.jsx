import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';
import Alert from '../components/Alert';

function Login({ pageTitle, changeIsLoginned }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  function submitLogin(e) {
    e.preventDefault();
    if (username === 'admin' && password === '12345') {
      changeIsLoginned(true);
      setUsername('');
      setPassword('');
      setIsAlertVisible(false);
    } else {
      setIsAlertVisible(true);
    }
  }

  return (
    <div className="row login">
      <div className="col-12">
        <PageTitle pageTitle={pageTitle} />
      </div>
      <form className="login__form" onSubmit={(e) => submitLogin(e)}>
        {isAlertVisible && <Alert text="Логин: admin, пароль: 12345" />}
        <div className="mb-3">
          <label htmlFor="inputUsername" className="form-label">
            Логин
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">
            Пароль
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Войти
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  changeIsLoginned: PropTypes.func.isRequired,
};

export default Login;
