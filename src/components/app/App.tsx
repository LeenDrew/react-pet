import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './app.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Header from '../header/Header';
import Main from '../../pages/main/Main';
import News from '../../pages/news/News';
import Profile from '../../pages/profile/Profile';
import Login from '../../pages/login/Login';
import Footer from '../footer/Footer';

export default function App(): React.ReactElement {
  const isLoginned = useSelector((state: RootState) => state.loginReducer.isLoginned);

  return (
    <BrowserRouter>
      <Header />
      <div className="main-container container">
        <Switch>
          <Route exact path="/" render={() => <Main />} />
          <Route exact path="/news" render={() => <News />} />
          <Route
            exact
            path="/profile"
            render={() => (isLoginned ? <Profile /> : <Redirect to="/login" />)}
          />
          <Route
            exact
            path="/login"
            render={() => (!isLoginned ? <Login /> : <Redirect to="/profile" />)}
          />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
