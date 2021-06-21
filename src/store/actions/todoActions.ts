import { ActionType } from '../../types/ActionType';
import { ActionModel } from '../../types/ActionModel';

export function addTodoAction(title: string): ActionModel {
  return {
    type: ActionType.ADD_TODO,
    payload: title,
  };
}

export function toggleTodoAction(id: number): ActionModel {
  return {
    type: ActionType.TOGGLE_TODO,
    payload: id,
  };
}

export function removeTodoAction(id: number): ActionModel {
  return {
    type: ActionType.REMOVE_TODO,
    payload: id,
  };
}
