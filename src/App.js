import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './assets/scss/bootstrap.min.css';
import './assets/scss/app.scss';
import Header from './components/Header';
import Main from './pages/Main';
import News from './pages/News';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Footer from './components/Footer';

function App() {
  const parseBool = (value) => {
    if (value === 'true') {
      return true;
    }
    return false;
  };

  const [isLoginned, setIsLoginned] = useState(parseBool(localStorage.getItem('isLoginned')));

  const login = () => {
    localStorage.setItem('isLoginned', 'true');
    setIsLoginned(true);
  };

  const logout = () => {
    localStorage.setItem('isLoginned', 'false');
    setIsLoginned(false);
  };

  return (
    <BrowserRouter>
      <Header isLoginned={isLoginned} logout={logout} />
      <div className="main-container container">
        <Switch>
          <Route path="/" exact render={() => <Main pageTitle="Главная" />} />
          <Route path="/news" render={() => <News pageTitle="Новости" />} />
          <Route
            path="/profile"
            render={() => (isLoginned ? <Profile pageTitle="Профиль" /> : <Redirect to="/login" />)}
          />
          <Route path="/login" render={() => <Login pageTitle="Вход" login={login} />} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
