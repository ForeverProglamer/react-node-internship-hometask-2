export type NoteCategory = 'Task' | 'Idea' | 'Random Thought';

export interface BaseNote {
  name: string;
  category: NoteCategory;
  content: string;
}

export interface Note extends BaseNote {
  createdAt: number;
  archived: boolean;
}

export interface Summary {
  category: NoteCategory;
  count: number;
}

export enum NoteActionType {
  ADD = 'notes/add',
  UPDATE = 'notes/update',
  TOGGLE_ARCHIVE = 'notes/toggleArchive',
  DELETE = 'notes/delete',
}

export type AddAction = {
  type: NoteActionType.ADD;
  payload: {
    note: BaseNote;
  };
};

export type UpdateAction = {
  type: NoteActionType.UPDATE;
  payload: {
    noteId: number;
    note: BaseNote;
  };
};

export type ToggleArchiveAction = {
  type: NoteActionType.TOGGLE_ARCHIVE;
  payload: {
    noteId: number;
  };
};

export type DeleteAction = {
  type: NoteActionType.DELETE;
  payload: {
    noteId: number;
  };
};

export type NoteAction =
  | AddAction
  | UpdateAction
  | ToggleArchiveAction
  | DeleteAction;

export type NoteState = Note[];
