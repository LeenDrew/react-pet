import { ActionType } from '../../types/ActionType';
import { ActionModel } from '../../types/ActionModel';

export function loginAction(): ActionModel {
  return {
    type: ActionType.LOGIN,
  };
}

export function logoutAction(): ActionModel {
  return {
    type: ActionType.LOGOUT,
  };
}
