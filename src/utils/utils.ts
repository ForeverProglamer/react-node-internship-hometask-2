const validNoteCategories = ['Task', 'Idea', 'Random Thought'];

const maxNameLength = 4;

const fieldIsRequired = (fieldName: string) => `${fieldName} is required field`;
const fieldMustBeLongerThan = (fieldName: string, value: number) =>
  `${fieldName} must be longer than ${value} characters`;

const isValidNoteCategory = (value: string): boolean =>
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

export default isValidNoteCategory;
