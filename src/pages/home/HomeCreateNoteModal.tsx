import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';

import ModalWindow from '../../layout/ModalWindow';
import { validateFormData } from '../../utils/utils';
import { addNote } from '../../redux/NoteActionCreators';
import { BaseNote } from '../../types/Note';

type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

type HomeCreateNoteModalProps = {
  show?: boolean;
  onClose: () => void;
};

const defaultProps = {
  show: false,
};

export default function HomeCreateNoteModal({
  show = false,
  onClose,
}: HomeCreateNoteModalProps) {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    name: '',
    category: '',
    content: '',
  });
  const [formErrors, setFormErrors] = useState({ name: '', category: '' });

  const handleChange = (event: React.ChangeEvent<FormElement>) => {
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const clearFormData = () => {
    setFormValues({ name: '', category: '', content: '' });
  };

  const clearErrors = () => {
    setFormErrors({ name: '', category: '' });
  };

  const handleCreate = () => {
    console.log('Create');
    const { name, category, content } = formValues;
    const errors = validateFormData({ name, category });

    if (Object.values(errors).some((value) => value)) {
      setFormErrors(errors);
      return;
    }

    const newNote = { name, category, content } as BaseNote;
    console.log(newNote);
    dispatch(addNote(newNote));

    clearFormData();
    clearErrors();
  };

  const handleClose = () => {
    clearErrors();
    onClose();
  };

  return (
    <ModalWindow
      title="Create Note"
      show={show}
      onClose={handleClose}
      actionTitle="Create"
      onAction={handleCreate}
    >
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="createNoteName">Name:</Form.Label>
          <Form.Control
            id="createNoteName"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            required
          />
          <div className="text-danger" id="create-note-name-error">
            {formErrors.name}
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="createNoteCategory">Category:</Form.Label>
          <Form.Select
            id="createNoteCategory"
            name="category"
            value={formValues.category}
            onChange={handleChange}
            aria-label="categorySelect"
            required
          >
            <option value="">Select category</option>
            <option value="Task">Task</option>
            <option value="Idea">Idea</option>
            <option value="Random Thought">Random Thought</option>
          </Form.Select>
          <div className="text-danger" id="create-note-category-error">
            {formErrors.category}
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="createNoteContent">Content:</Form.Label>
          <Form.Control
            id="createNoteContent"
            as="textarea"
            name="content"
            value={formValues.content}
            onChange={handleChange}
            rows={5}
            required
          />
        </Form.Group>
      </Form>
    </ModalWindow>
  );
}

HomeCreateNoteModal.defaultProps = defaultProps;
