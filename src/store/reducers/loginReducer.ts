import { ActionType } from '../../types/ActionType';
import { ActionModel } from '../../types/ActionModel';

export interface LoginState {
  isLoginned: boolean;
}

const initialState: LoginState = {
  isLoginned: null || false,
};

export default (state = initialState, { type, payload }: ActionModel): LoginState => {
  switch (type) {
    case ActionType.LOGIN:
      return { ...state, isLoginned: true };
    case ActionType.LOGOUT:
      return { ...state, isLoginned: false };
    default:
      return state;
  }
};
