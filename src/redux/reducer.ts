import { NoteAction, NoteActionType, NoteState } from '../types/Note';

const initialState: NoteState = {
  notes: [
    {
      name: 'Project Kickoff',
      createdAt: 1678876800000,
      category: 'Task',
      content:
        'Prepare for the project kickoff meeting scheduled for 10/08/2023 and 12/08/2023. Share the project timeline and objectives.',
      archived: false,
    },
    {
      name: 'Brainstorming Session',
      createdAt: 1678862400000,
      category: 'Idea',
      content:
        'Conduct a brainstorming session for the app feature ideas on 11/08/2023 and 13/08/2023. Document creative concepts.',
      archived: true,
    },
    {
      name: 'Important Deadline',
      createdAt: 1678848000000,
      category: 'Task',
      content:
        'Submit the quarterly report by 16/08/2023. Ensure accuracy and completeness.',
      archived: false,
    },
    {
      name: 'Development Sprint',
      createdAt: 1678833600000,
      category: 'Task',
      content:
        'Start the development sprint on 10/08/2023 and complete by 14/08/2023. Test thoroughly before deployment.',
      archived: true,
    },
    {
      name: 'Innovation Workshop',
      createdAt: 1678790400000,
      category: 'Idea',
      content:
        'Plan an innovation workshop for the department on 15/08/2023 and 16/08/2023. Invite external experts for insights.',
      archived: false,
    },
    {
      name: 'Inspiring Quote',
      createdAt: 1678819200000,
      category: 'Random Thought',
      content:
        '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
      archived: true,
    },
    {
      name: 'Weekly Goals',
      createdAt: 1678804800000,
      category: 'Task',
      content:
        'Set achievable goals for the week ahead, including personal growth, exercise, and relaxation by 13/08/2023 and 17/08/2023.',
      archived: false,
    },
  ],
};

export const reducer = (
  state: NoteState = initialState, // eslint-disable-line @typescript-eslint/default-param-last
  action: NoteAction,
): NoteState => {
  switch (action.type) {
    case NoteActionType.ADD:
      return { ...state };
    case NoteActionType.UPDATE:
      return { ...state };
    case NoteActionType.DELETE:
      return { ...state };
    case NoteActionType.TOGGLE_ARCHIVE:
      return { ...state };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof reducer>;
