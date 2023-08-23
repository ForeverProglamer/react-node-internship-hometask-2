import { useDispatch } from 'react-redux';
import { Form, ListGroup } from 'react-bootstrap';

import ModalWindow from '../../layout/ModalWindow';

import { BaseNote } from '../../types/Note';

import { parseDates, timestampToDateString } from '../../utils/date';
import { validateFormData } from '../../utils/utils';
import { updateNote } from '../../redux/NoteActionCreators';
import {
  resetErrors,
  setErrors,
  setValue,
} from '../../redux/EditNoteFormActionCreators';
import useTypedSelector from '../../hooks/useTypedSelector';

type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

type HomeEditNoteModalProps = {
  show?: boolean;
  onClose: () => void;
};

const defaultProps = {
  show: false,
};

export default function HomeEditNoteModal({
  show = false,
  onClose,
}: HomeEditNoteModalProps) {
  const form = useTypedSelector((state) => state.editNoteForm);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<FormElement>) => {
    dispatch(setValue({ [event.target.name]: event.target.value }));
  };

  const handleEdit = () => {
    console.log('Save');

    const { name, category, content, createdAt } = form.values;
    const errors = validateFormData({ name, category });

    if (Object.values(errors).some((value) => value)) {
      dispatch(setErrors(errors));
      return;
    }

    const updatedNote = { name, category, content } as BaseNote;
    console.log({ name, category, content });
    dispatch(updateNote(createdAt, updatedNote));

    dispatch(resetErrors());
  };

  const dates = parseDates(form.values.content).map((date) => (
    <ListGroup.Item key={undefined}>{date}</ListGroup.Item>
  ));

  return (
    <ModalWindow
      title="Edit Note"
      show={show}
      onClose={onClose}
      actionTitle="Save"
      onAction={handleEdit}
    >
      <Form id="editNoteForm">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="editNoteName">Name:</Form.Label>
          <Form.Control
            type="text"
            id="editNoteName"
            name="name"
            value={form.values.name}
            onChange={handleChange}
          />
          <div className="text-danger" id="editNoteNameError">
            {form.errors.name}
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="editNoteCreatedAt">Created At:</Form.Label>
          <Form.Control
            type="text"
            id="editNoteCreatedAt"
            readOnly
            value={timestampToDateString(form.values.createdAt)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="editNoteCategory">Category:</Form.Label>
          <Form.Select
            id="editNoteCategory"
            aria-label="categorySelect"
            name="category"
            value={form.values.category}
            onChange={handleChange}
          >
            <option value="">Select category</option>
            <option value="Task">Task</option>
            <option value="Idea">Idea</option>
            <option value="Random Thought">Random Thought</option>
          </Form.Select>
          <div className="text-danger" id="editNoteCategoryError">
            {form.errors.category}
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="editNoteDates">Dates:</Form.Label>
          <ListGroup horizontal id="editNoteDates">
            {dates}
          </ListGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="editNoteContent">Content:</Form.Label>
          <Form.Control
            as="textarea"
            id="editNoteContent"
            rows={5}
            name="content"
            value={form.values.content}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </ModalWindow>
  );
}

HomeEditNoteModal.defaultProps = defaultProps;
