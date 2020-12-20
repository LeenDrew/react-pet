import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/scss/bootstrap.min.css';
import './assets/scss/app.scss';
import Header from './components/Header';
import Main from './pages/Main';
import News from './pages/News';
import Profile from './pages/Profile';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div className="main-container container">
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Main pageTitle="Главная" />}
          />
          <Route
            path="/news"
            render={() => <News pageTitle="Новости" />}
          />
          <Route
            path="/profile"
            render={() => <Profile pageTitle="Профиль" />}
          />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
