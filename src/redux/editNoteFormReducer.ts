import {
  EditNoteFormAction,
  EditNoteFormActionType,
  EditNoteFormState,
} from '../types/EditNoteForm';

const initialState: EditNoteFormState = {
  values: {
    name: '',
    category: '',
    content: '',
    createdAt: 0,
  },
  errors: {
    name: '',
    category: '',
  },
};

const editNoteFormReducer = (
  state: EditNoteFormState = initialState, // eslint-disable-line @typescript-eslint/default-param-last
  action: EditNoteFormAction,
): EditNoteFormState => {
  switch (action.type) {
    case EditNoteFormActionType.SET_VALUES:
      return { ...state, values: { ...state.values, ...action.payload } };
    case EditNoteFormActionType.SET_VALUE:
      return { ...state, values: { ...state.values, ...action.payload } };
    case EditNoteFormActionType.SET_ERRORS:
      return { ...state, errors: { ...state.errors, ...action.payload } };
    case EditNoteFormActionType.RESET:
      return { ...initialState };
    case EditNoteFormActionType.RESET_VALUES:
      return { ...state, values: { ...initialState.values } };
    case EditNoteFormActionType.RESET_ERRORS:
      return { ...state, errors: { ...initialState.errors } };
    default:
      return { ...state };
  }
};

export default editNoteFormReducer;
