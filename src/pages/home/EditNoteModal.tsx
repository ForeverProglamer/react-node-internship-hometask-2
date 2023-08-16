import { useState } from 'react';
import { Form, ListGroup } from 'react-bootstrap';

import ModalWindow from '../../layout/ModalWindow';
import useTypedSelector from '../../hooks/useTypedSelector';

import { NoteCategory } from '../../types/Note';

import timestampToDateString from '../../utils/date';
import { isValidNoteCategory } from '../../utils/utils';

type EditNoteModalProps = {
  show?: boolean;
  onClose: () => void;
  noteId?: number;
};

const defaultProps = {
  show: false,
  noteId: undefined,
};

export default function EditNoteModal({
  show = false,
  onClose,
  noteId = undefined,
}: EditNoteModalProps) {
  const note = useTypedSelector((state) =>
    state.notes.find((elem) => elem.createdAt === noteId),
  );

  const [name, setName] = useState(note?.name);
  const [category, setCategory] = useState(note?.category);
  const [content, setContent] = useState(note?.content);

  // TODO dates attribute must be dynamically computed while rendering note
  const dates = [];

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

  const handleClose = () => {
    // if user don't save changes closing modal window, then
    // form values must be set to default
    setName(note?.name);
    setCategory(note?.category);
    setContent(note?.content);

    onClose();
  };

  const handleEdit = () => {
    console.log('Save');
    console.log({ name, category, content });
  };

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
          <div className="text-danger" id="editNoteNameError" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="editNoteCreatedAt">Created At:</Form.Label>
          <Form.Control
            type="text"
            id="editNoteCreatedAt"
            readOnly
            value={timestampToDateString(note?.createdAt as number)}
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
          <div className="text-danger" id="editNoteCategoryError" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="editNoteDates">Dates:</Form.Label>
          <ListGroup horizontal id="editNoteDates" />
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
