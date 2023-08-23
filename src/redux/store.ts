import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import noteReducer from './noteReducer';

const store = createStore(
  combineReducers({
    notes: noteReducer,
  }),
  composeWithDevTools(),
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
