export type NoteCategory = 'Task' | 'Idea' | 'Random Thought';

export interface BaseNote {
  name: string;
  category: NoteCategory;
  content: string;
  [key: string]: string | boolean;
}

export interface Note extends BaseNote {
  createdAt: string;
  archived: boolean;
}

export type NoteAction = {
  type: string;
  payload?: {
    index?: number;
    note?: Note;
  };
};

export type NoteState = {
  notes: Note[];
};
