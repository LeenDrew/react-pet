import { combineReducers, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducer from './reducers/loginReducer';
import todoReducer from './reducers/todoReducer';

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: thunk,
// });

export const store = createStore(
  combineReducers({
    loginReducer,
    todoReducer,
  }),
  composeWithDevTools(),
);

export type RootState = ReturnType<typeof store.getState>;
