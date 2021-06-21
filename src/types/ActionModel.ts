import { ActionType } from './ActionType';

export interface ActionModel {
  type: ActionType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}
