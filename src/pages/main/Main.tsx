import React from 'react';
import TodoList from '../../components/todoList/TodoList';

export default function Main(): React.ReactElement {
  return (
    <div className="row main">
      <div className="col-12">
        <h1 className="page-title text-center">Главная</h1>
        <TodoList />
      </div>
    </div>
  );
}
