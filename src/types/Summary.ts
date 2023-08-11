import { NoteCategory } from './Note';

export interface Summary {
  category: NoteCategory;
  count: number;
  [key: string]: string | number;
}
