import { useState } from 'react';
import { Form } from 'react-bootstrap';

import ModalWindow from '../../layout/ModalWindow';
import isValidNoteCategory, { validateFormData } from '../../utils/utils';

type CreateNoteModalProps = {
  show?: boolean;
  onClose: () => void;
};

const defaultProps = {
  show: false,
};

export default function CreateNoteModal({
  show = false,
  onClose,
}: CreateNoteModalProps) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const [nameError, setNameError] = useState('');
  const [categoryError, setCategoryError] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const categoryValue = event.currentTarget.value;
    if (isValidNoteCategory(categoryValue)) setCategory(categoryValue);
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

  const handleCreate = () => {
    console.log('Create');
    const errors = validateFormData({ name, category });

    if (Object.values(errors).some((value) => value)) {
      setNameError(errors.name);
      setCategoryError(errors.category);
      return;
    }

    console.log({ name, category, content });
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
            value={name}
            onChange={handleNameChange}
            required
          />
          <div className="text-danger" id="create-note-name-error">
            {nameError}
          </div>
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
          <div className="text-danger" id="create-note-category-error">
            {categoryError}
          </div>
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
