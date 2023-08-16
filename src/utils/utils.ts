const validNoteCategories = ['Task', 'Idea', 'Random Thought'];

const isValidNoteCategory = (value: string): boolean =>
  validNoteCategories.includes(value);

export default isValidNoteCategory;
