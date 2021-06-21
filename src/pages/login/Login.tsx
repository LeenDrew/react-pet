import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../store/actions/loginActions';
import Alert from '../../components/alert/Alert';
import './Login.scss';

export default function Login(): React.ReactElement {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAlertVisible, setIsAlertVisible] = useState(false as boolean);

  const submitLoginHandler = (e: FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === '12345') {
      dispatch(loginAction());
      setUsername('');
      setPassword('');
      setIsAlertVisible(false);
    } else {
      setIsAlertVisible(true);
    }
  };

  return (
    <div className="row login">
      <div className="col-12">
        <h1 className="page-title text-center">Логин</h1>
      </div>
      <form className="login__form" onSubmit={(e) => submitLoginHandler(e)}>
        {isAlertVisible && (
          <Alert type="warning" text="Логин: admin, пароль: 12345" hasCloseButton={false} />
        )}
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
