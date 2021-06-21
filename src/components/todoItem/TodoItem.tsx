import React from 'react';
import { useDispatch } from 'react-redux';
import { TodoItemType } from '../todoList/TodoList';
import { toggleTodoAction, removeTodoAction } from '../../store/actions/todoActions';

type TodoItemProps = {
  todoItem: TodoItemType;
};

export default function TodoItem({ todoItem }: TodoItemProps): React.ReactElement {
  const dispatch = useDispatch();

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="list-group-item">
      <input
        className="form-check-input position-relative ml-0 mr-3"
        type="checkbox"
        checked={todoItem.completed}
        onChange={() => dispatch(toggleTodoAction(todoItem.id))}
      />
      <span style={{ textDecoration: todoItem.completed ? 'line-through' : '' }}>
        {todoItem.title}
      </span>
      <button
        type="button"
        className="close"
        aria-label="close"
        onClick={() => dispatch(removeTodoAction(todoItem.id))}
      >
        &times;
      </button>
    </label>
  );
}
