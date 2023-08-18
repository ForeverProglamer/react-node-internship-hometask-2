import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, ListGroup } from 'react-bootstrap';

import ModalWindow from '../../layout/ModalWindow';
import useTypedSelector from '../../hooks/useTypedSelector';

import { BaseNote, Note, NoteCategory } from '../../types/Note';

import { parseDates, timestampToDateString } from '../../utils/date';
import { isValidNoteCategory, validateFormData } from '../../utils/utils';
import { updateNote } from '../../redux/actions';

type EditNoteModalProps = {
  show?: boolean;
  onClose: () => void;
  noteId: number;
};

const defaultProps = {
  show: false,
};

export default function EditNoteModal({
  show = false,
  onClose,
  noteId,
}: EditNoteModalProps) {
  const note = useTypedSelector((state) =>
    state.notes.find((elem) => elem.createdAt === noteId),
  ) as Note;

  const dispatch = useDispatch();

  const [name, setName] = useState(note.name);
  const [category, setCategory] = useState(note.category);
  const [content, setContent] = useState(note.content);

  const [nameError, setNameError] = useState('');
  const [categoryError, setCategoryError] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const categoryValue = event.currentTarget.value;
    if (isValidNoteCategory(categoryValue))
      setCategory(categoryValue as NoteCategory);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setContent(event.currentTarget.value);
  };

  const clearErrors = () => {
    setNameError('');
    setCategoryError('');
  };

  const handleClose = () => {
    // if user don't save changes closing modal window, then
    // form values must be set to default
    setName(note.name);
    setCategory(note.category);
    setContent(note.content);
    clearErrors();

    onClose();
  };

  const handleEdit = () => {
    console.log('Save');

    const errors = validateFormData({ name, category });

    if (Object.values(errors).some((value) => value)) {
      setNameError(errors.name);
      setCategoryError(errors.category);
      return;
    }

    const updatedNote = { name, category, content } as BaseNote;
    console.log({ name, category, content });
    dispatch(updateNote(note.createdAt, updatedNote));

    clearErrors();
  };

  const dates = parseDates(note.content).map((date) => (
    <ListGroup.Item key={undefined}>{date}</ListGroup.Item>
  ));

  return (
    <ModalWindow
      title="Edit Note"
      show={show}
      onClose={handleClose}
      actionTitle="Save"
      onAction={handleEdit}
    >
      <Form id="editNoteForm">
        <Form.Group className="mb-3">
          <Form.Label htmlFor="editNoteName">Name:</Form.Label>
          <Form.Control
            type="text"
            id="editNoteName"
            value={name}
            onChange={handleNameChange}
          />
          <div className="text-danger" id="editNoteNameError">
            {nameError}
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="editNoteCreatedAt">Created At:</Form.Label>
          <Form.Control
            type="text"
            id="editNoteCreatedAt"
            readOnly
            value={timestampToDateString(note.createdAt)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="editNoteCategory">Category:</Form.Label>
          <Form.Select
            id="editNoteCategory"
            aria-label="categorySelect"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="">Select category</option>
            <option value="Task">Task</option>
            <option value="Idea">Idea</option>
            <option value="Random Thought">Random Thought</option>
          </Form.Select>
          <div className="text-danger" id="editNoteCategoryError">
            {categoryError}
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
            value={content}
            onChange={handleContentChange}
          />
        </Form.Group>
      </Form>
    </ModalWindow>
  );
}

EditNoteModal.defaultProps = defaultProps;
