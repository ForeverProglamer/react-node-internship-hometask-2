import { Note } from '../types/Note';
import { Summary } from '../types/Summary';

const validNoteCategories = ['Task', 'Idea', 'Random Thought'];

const maxNameLength = 4;

const fieldIsRequired = (fieldName: string) => `${fieldName} is required field`;
const fieldMustBeLongerThan = (fieldName: string, value: number) =>
  `${fieldName} must be longer than ${value} characters`;

export const isValidNoteCategory = (value: string): boolean =>
  validNoteCategories.includes(value);

type FormData = {
  name: string;
  category: string;
};

type Errors = {
  name: string;
  category: string;
};

export const validateFormData = ({ name, category }: FormData): Errors => {
  const errors = { name: '', category: '' };

  if (!name) errors.name = fieldIsRequired('Name');

  if (!isValidNoteCategory(category))
    errors.category = fieldIsRequired('Category');

  if (name && name.length <= maxNameLength)
    errors.name = fieldMustBeLongerThan('Name', maxNameLength);

  return errors;
};

export const generateSummaries = (notes: Note[]): Summary[] => {
  const counters = Object.fromEntries(
    validNoteCategories.map((category) => [category, 0]),
  );

  notes.forEach((note) => {
    counters[note.category] += 1;
  });

  return Object.entries(counters).map(([category, count]) => ({
    category,
    count,
  })) as Summary[];
};
