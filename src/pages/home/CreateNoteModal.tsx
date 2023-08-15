import { useState } from 'react';
import { Form } from 'react-bootstrap';

import ModalWindow from '../../layout/ModalWindow';

type CreateNoteModalProps = {
  show?: boolean;
  onClose: () => void;
};

const defaultProps = {
  show: false,
};

export default function CreateNoteModal({
  show,
  onClose,
}: CreateNoteModalProps) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setCategory(event.currentTarget.value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setContent(event.currentTarget.value);
  };

  const handleCreate = () => {
    console.log('Create');
    console.log({ name, category, content });
  };

  return (
    <ModalWindow
      title="Create Note"
      show={show}
      onClose={onClose}
      actionTitle="Create"
      onAction={handleCreate}
    >
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="createNoteName">Name:</Form.Label>
          <Form.Control
            id="createNoteName"
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
          <div className="text-danger" id="create-note-name-error" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="createNoteCategory">Category:</Form.Label>
          <Form.Select
            id="createNoteCategory"
            value={category}
            onChange={handleCategoryChange}
            aria-label="categorySelect"
            required
          >
            <option value="Default">Select category</option>
            <option value="Task">Task</option>
            <option value="Idea">Idea</option>
            <option value="Random Thought">Random Thought</option>
          </Form.Select>
          <div className="text-danger" id="create-note-category-error" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="createNoteContent">Content:</Form.Label>
          <Form.Control
            id="createNoteContent"
            as="textarea"
            value={content}
            onChange={handleContentChange}
            rows={5}
            required
          />
        </Form.Group>
      </Form>
    </ModalWindow>
  );
}

CreateNoteModal.defaultProps = defaultProps;
