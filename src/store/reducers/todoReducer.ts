import { ActionType } from '../../types/ActionType';
import { ActionModel } from '../../types/ActionModel';
import { TodoItemType } from '../../components/todoList/TodoList';

export interface TodoState {
  todoList: TodoItemType[];
}

const initialState: TodoState = {
  todoList: null || [],
};

export default (state = initialState, { type, payload }: ActionModel): TodoState => {
  switch (type) {
    case ActionType.ADD_TODO:
      // state.todoList.push({ id: Date.now(), title: payload, completed: false });
      // const newTodo: TodoItemType = { id: Date.now(), title: payload, completed: false };
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id: Date.now(), title: payload, completed: false } as TodoItemType,
        ],
      };
    case ActionType.TOGGLE_TODO:
      // state.todoList = state.todoList.map((item) => {
      //   const temp = item;
      //   if (temp.id === payload) {
      //     temp.completed = !temp.completed;
      //   }
      //   return temp;
      // });
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          const temp = item;
          if (temp.id === payload) {
            temp.completed = !temp.completed;
          }
          return temp;
        }),
      };
    case ActionType.REMOVE_TODO:
      // state.todoList = state.todoList.filter((item) => item.id !== payload);
      return { ...state, todoList: state.todoList.filter((item) => item.id !== payload) };
    default:
      return state;
  }
};
