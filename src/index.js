import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {JSON.parse(localStorage.getItem('isLoginned'))
      ? null
      : localStorage.setItem('isLoginned', JSON.stringify(false))}
    {JSON.parse(localStorage.getItem('todoList'))
      ? null
      : localStorage.setItem('todoList', JSON.stringify([]))}
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
