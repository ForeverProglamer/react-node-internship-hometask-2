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
