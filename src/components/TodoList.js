import React, { useState, useEffect } from 'react';
import Alert from './Alert';
import TodoItem from './TodoItem';

function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')));
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  function changeAlertVisibility(value) {
    setIsAlertVisible(value);
  }

  function addTodo(value) {
    if (inputValue.trim().length) {
      setTodoList(todoList.concat([{ id: Date.now(), title: value, completed: false }]));
      changeAlertVisibility(true);
    }
    setInputValue('');
  }

  function removeTodo(id) {
    setTodoList(todoList.filter((item) => item.id !== id));
  }

  function toggleCompletedTodo(id) {
    setTodoList(
      todoList.map((item) => {
        const temp = item;
        if (temp.id === id) {
          temp.completed = !temp.completed;
        }
        return temp;
      }),
    );
  }

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="todo">
      <h2 className="todo__title text-center mb-3">TODO</h2>
      {isAlertVisible && (
        <Alert
          type="success"
          text="Задача была добавлена"
          hasCloseButton
          changeAlertVisibility={changeAlertVisibility}
        />
      )}
      <div className="row todo__form pl-3 pr-3">
        <form
          className="input-group"
          onSubmit={(e) => {
            e.preventDefault();
            addTodo(inputValue);
          }}
        >
          <input
            type="text"
            className="form-control"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="ml-3 btn btn-primary">
            Добавить
          </button>
        </form>
      </div>
      {!!todoList.length && <hr />}
      <div className="list-group">
        {!!todoList.length &&
          todoList.map((todoItem) => (
            <TodoItem
              todoItem={todoItem}
              removeTodo={removeTodo}
              toggleCompletedTodo={toggleCompletedTodo}
            />
          ))}
      </div>
      {!todoList.length && <Alert style={{ marginTop: '1rem' }} type="warning" text="Задач нет" />}
    </div>
  );
}

export default TodoList;
