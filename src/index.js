import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/bootstrap.min.css';
import './assets/scss/app.scss';
import Header from './components/Header';
// import Main from './pages/Main';
import News from './pages/News';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className="main-container container">
      <News />
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root'),
);
