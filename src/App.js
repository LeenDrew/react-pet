import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './assets/scss/app.scss';
import Header from './components/Header';
import Main from './pages/Main';
import News from './pages/News';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Footer from './components/Footer';

function App() {
  const [isLoginned, setIsLoginned] = useState(JSON.parse(localStorage.getItem('isLoginned')));

  const changeIsLoginned = (value) => {
    localStorage.setItem('isLoginned', JSON.stringify(value));
    setIsLoginned(value);
  };

  return (
    <BrowserRouter>
      <Header isLoginned={isLoginned} changeIsLoginned={changeIsLoginned} />
      <div className="main-container container">
        <Switch>
          <Route path="/" exact render={() => <Main pageTitle="Главная" />} />
          <Route path="/news" render={() => <News pageTitle="Новости" />} />
          <Route
            path="/profile"
            render={() => (isLoginned ? <Profile pageTitle="Профиль" /> : <Redirect to="/login" />)}
          />
          <Route
            path="/login"
            render={() => <Login pageTitle="Вход" changeIsLoginned={changeIsLoginned} />}
          />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
