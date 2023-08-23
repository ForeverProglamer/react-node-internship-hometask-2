export enum EditNoteFormActionType {
  SET_VALUES = 'editNoteForm/setValues',
  SET_VALUE = 'editNoteForm/setValue',
  SET_ERRORS = 'editNoteForm/setErrors',
  RESET = 'editNoteForm/reset',
  RESET_VALUES = 'editNoteForm/resetValues',
  RESET_ERRORS = 'editNoteForm/resetErrors',
}

export type SetValuesAction = {
  type: EditNoteFormActionType.SET_VALUES;
  payload: {
    name: string;
    category: string;
    content: string;
    createdAt: number;
  };
};

export type NoteValue = {
  [key: string]: string;
};

export type SetValueAction = {
  type: EditNoteFormActionType.SET_VALUE;
  payload: NoteValue;
};

export type SetErrorsAction = {
  type: EditNoteFormActionType.SET_ERRORS;
  payload: {
    name: string;
    category: string;
  };
};

export type ResetAction = {
  type: EditNoteFormActionType.RESET;
};

export type ResetValuesAction = {
  type: EditNoteFormActionType.RESET_VALUES;
};

export type ResetErrorsAction = {
  type: EditNoteFormActionType.RESET_ERRORS;
};

export type EditNoteFormAction =
  | SetValuesAction
  | SetValueAction
  | SetErrorsAction
  | ResetAction
  | ResetValuesAction
  | ResetErrorsAction;

export type EditNoteFormState = {
  values: {
    name: string;
    category: string;
    content: string;
    createdAt: number;
  };
  errors: {
    name: string;
    category: string;
  };
};
