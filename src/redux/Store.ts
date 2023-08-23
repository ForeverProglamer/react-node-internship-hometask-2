import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import noteReducer from './noteReducer';
import editNoteFormReducer from './editNoteFormReducer';

const Store = createStore(
  combineReducers({
    notes: noteReducer,
    editNoteForm: editNoteFormReducer,
  }),
  composeWithDevTools(),
);

export type RootState = ReturnType<typeof Store.getState>;

export default Store;
