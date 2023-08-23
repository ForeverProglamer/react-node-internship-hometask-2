import {
  EditNoteFormActionType,
  NoteValue,
  ResetAction,
  ResetErrorsAction,
  ResetValuesAction,
  SetErrorsAction,
  SetValueAction,
  SetValuesAction,
} from '../types/EditNoteForm';

type FormData = {
  name: string;
  category: string;
  content: string;
  createdAt: number;
};

type FormErrors = {
  name: string;
  category: string;
};

export const setValue = (value: NoteValue): SetValueAction => ({
  type: EditNoteFormActionType.SET_VALUE,
  payload: value,
});

export const setValues = ({
  name,
  category,
  content,
  createdAt,
}: FormData): SetValuesAction => ({
  type: EditNoteFormActionType.SET_VALUES,
  payload: {
    name,
    category,
    content,
    createdAt,
  },
});

export const setErrors = ({ name, category }: FormErrors): SetErrorsAction => ({
  type: EditNoteFormActionType.SET_ERRORS,
  payload: { name, category },
});

export const reset = (): ResetAction => ({
  type: EditNoteFormActionType.RESET,
});

export const resetValues = (): ResetValuesAction => ({
  type: EditNoteFormActionType.RESET_VALUES,
});

export const resetErrors = (): ResetErrorsAction => ({
  type: EditNoteFormActionType.RESET_ERRORS,
});
