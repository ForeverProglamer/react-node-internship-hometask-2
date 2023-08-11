import {
  ADD_NOTE,
  DELETE_NOTE,
  TOGGLE_ARCHIVE_NOTE,
  UPDATE_NOTE,
} from './actions';

import { NoteAction, NoteState } from '../types/Note';

const initialState: NoteState = {
  notes: [
    {
      name: 'Note 1',
      createdAt: '2023-08-05',
      category: 'Task',
      content: 'This is the content of Note 1.',
      archived: false,
    },
    {
      name: 'Note 2',
      createdAt: '2023-08-04',
      category: 'Idea',
      content: 'This is the content of Note 2.',
      archived: true,
    },
    {
      name: 'Note 3',
      createdAt: '2023-08-03',
      category: 'Random Thought',
      content:
        'This is the content of Note 3. This is the content of Note 3. This is the content of Note 3.',
      archived: false,
    },
    {
      name: 'Note 4',
      createdAt: '2023-08-02',
      category: 'Task',
      content: 'This is the content of Note 4.',
      archived: true,
    },
    {
      name: 'Note 5',
      createdAt: '2023-08-01',
      category: 'Idea',
      content: 'This is the content of Note 5.',
      archived: false,
    },
    {
      name: 'Note 6',
      createdAt: '2023-07-31',
      category: 'Random Thought',
      content: 'This is the content of Note 6.',
      archived: true,
    },
    {
      name: 'Note 7',
      createdAt: '2023-07-30',
      category: 'Task',
      content: 'This is the content of Note 7.',
      archived: false,
    },
  ],
};

export const reducer = (
  state: NoteState = initialState, // eslint-disable-line @typescript-eslint/default-param-last
  action: NoteAction,
): NoteState => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state };
    case UPDATE_NOTE:
      return { ...state };
    case DELETE_NOTE:
      return { ...state };
    case TOGGLE_ARCHIVE_NOTE:
      return { ...state };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof reducer>;
