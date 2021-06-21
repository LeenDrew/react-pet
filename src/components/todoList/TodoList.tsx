import React, { useState, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../alert/Alert';
import TodoItem from '../todoItem/TodoItem';
import './TodoList.scss';
import { addTodoAction } from '../../store/actions/todoActions';
import { RootState } from '../../store/store';

export type TodoItemType = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodoList(): React.ReactElement {
  const dispatch = useDispatch();

  const todoList = useSelector((state: RootState) => state.todoReducer.todoList);
  const [inputValue, setInputValue] = useState('' as string);

  // save to localStorage
  // useEffect(() => {
  //   return () => setTodoList(todoList);
  // }, []);

  const addTodoHandler = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim().length) {
      dispatch(addTodoAction(inputValue));
    }
    setInputValue('');
  };

  return (
    <div className="todo">
      <h2 className="todo__title text-center mb-3">TODO</h2>
      <div className="row todo__form pl-3 pr-3">
        <form className="input-group" onSubmit={(e) => addTodoHandler(e)}>
          <input
            type="text"
            className="form-control"
            placeholder="Введите задачу..."
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
          todoList.map((todoItem: TodoItemType) => (
            <TodoItem key={todoItem.id} todoItem={todoItem} />
          ))}
      </div>
      {!todoList.length && <Alert type="warning" text="Задач пока нет." hasCloseButton={false} />}
    </div>
  );
}
