import {
  NoteActionType,
  AddAction,
  BaseNote,
  UpdateAction,
  ToggleArchiveAction,
  DeleteAction,
} from '../types/Note';

export const addNote = (note: BaseNote): AddAction => ({
  type: NoteActionType.ADD,
  payload: {
    note,
  },
});

export const updateNote = (noteId: number, note: BaseNote): UpdateAction => ({
  type: NoteActionType.UPDATE,
  payload: {
    noteId,
    note,
  },
});

export const toggleArchiveNote = (noteId: number): ToggleArchiveAction => ({
  type: NoteActionType.TOGGLE_ARCHIVE,
  payload: {
    noteId,
  },
});

export const deleteNote = (noteId: number): DeleteAction => ({
  type: NoteActionType.DELETE,
  payload: {
    noteId,
  },
});
