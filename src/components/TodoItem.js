import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todoItem, removeTodo, toggleCompletedTodo }) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="list-group-item">
      <input
        className="form-check-input position-relative ml-0 mr-3"
        type="checkbox"
        checked={todoItem.completed}
        onChange={() => toggleCompletedTodo(todoItem.id)}
      />
      <span style={todoItem.completed ? { textDecoration: 'line-through' } : null}>
        {todoItem.title}
      </span>
      <button
        type="button"
        className="close"
        aria-label="close"
        onClick={() => removeTodo(todoItem.id)}
      >
        &times;
      </button>
    </label>
  );
}

TodoItem.propTypes = {
  todoItem: PropTypes.shape({
    key: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleCompletedTodo: PropTypes.func.isRequired,
};

export default TodoItem;
