import {
  AddAction,
  DeleteAction,
  NoteAction,
  NoteActionType,
  NoteState,
  ToggleArchiveAction,
  UpdateAction,
} from '../types/Note';

const initialState: NoteState = {
  notes: [
    {
      name: 'Project Kickoff',
      createdAt: 1678876800000,
      category: 'Task',
      content:
        'Prepare for the project kickoff meeting scheduled for 10/08/2023 and 12/08/2023. Share the project timeline and objectives.',
      archived: false,
    },
    {
      name: 'Brainstorming Session',
      createdAt: 1678862400000,
      category: 'Idea',
      content:
        'Conduct a brainstorming session for the app feature ideas on 11/08/2023 and 13/08/2023. Document creative concepts.',
      archived: true,
    },
    {
      name: 'Important Deadline',
      createdAt: 1678848000000,
      category: 'Task',
      content:
        'Submit the quarterly report by 16/08/2023. Ensure accuracy and completeness.',
      archived: false,
    },
    {
      name: 'Development Sprint',
      createdAt: 1678833600000,
      category: 'Task',
      content:
        'Start the development sprint on 10/08/2023 and complete by 14/08/2023. Test thoroughly before deployment.',
      archived: true,
    },
    {
      name: 'Innovation Workshop',
      createdAt: 1678790400000,
      category: 'Idea',
      content:
        'Plan an innovation workshop for the department on 15/08/2023 and 16/08/2023. Invite external experts for insights.',
      archived: false,
    },
    {
      name: 'Inspiring Quote',
      createdAt: 1678819200000,
      category: 'Random Thought',
      content:
        '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
      archived: true,
    },
    {
      name: 'Weekly Goals',
      createdAt: 1678804800000,
      category: 'Task',
      content:
        'Set achievable goals for the week ahead, including personal growth, exercise, and relaxation by 13/08/2023 and 17/08/2023.',
      archived: false,
    },
  ],
};

const addNote = (state: NoteState, action: AddAction): NoteState => ({
  ...state,
  notes: state.notes.concat({
    ...action.payload.note,
    createdAt: Date.now(),
    archived: false,
  }),
});

const updateNote = (state: NoteState, action: UpdateAction): NoteState => {
  const index = state.notes.findIndex(
    (note) => note.createdAt === action.payload.noteId,
  );
  const updated = { ...state.notes[index], ...action.payload.note };

  return {
    ...state,
    notes: state.notes
      .slice(0, index)
      .concat(updated, state.notes.slice(index + 1)),
  };
};

const toggleArchiveNote = (
  state: NoteState,
  action: ToggleArchiveAction,
): NoteState => {
  const newNotes = [...state.notes];
  const index = state.notes.findIndex(
    (note) => note.createdAt === action.payload.noteId,
  );
  newNotes[index] = {
    ...state.notes[index],
    archived: !state.notes[index].archived,
  };

  return { ...state, notes: newNotes };
};

const deleteNote = (state: NoteState, action: DeleteAction): NoteState => {
  const index = state.notes.findIndex(
    (note) => note.createdAt === action.payload.noteId,
  );
  return {
    ...state,
    notes: state.notes.slice(0, index).concat(state.notes.slice(index + 1)),
  };
};

export const reducer = (
  state: NoteState = initialState, // eslint-disable-line @typescript-eslint/default-param-last
  action: NoteAction,
): NoteState => {
  switch (action.type) {
    case NoteActionType.ADD:
      return addNote(state, action);
    case NoteActionType.UPDATE:
      return updateNote(state, action);
    case NoteActionType.DELETE:
      return deleteNote(state, action);
    case NoteActionType.TOGGLE_ARCHIVE:
      return toggleArchiveNote(state, action);
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof reducer>;
