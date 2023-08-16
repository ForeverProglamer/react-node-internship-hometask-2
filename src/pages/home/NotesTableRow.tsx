import { useState } from 'react';
import { Button } from 'react-bootstrap';
import {
  faBoxArchive,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import EditNoteModal from './EditNoteModal';

import timestampToDateString from '../../utils/date';

import { Note } from '../../types/Note';

type NotesTableRowProps = {
  item: Note;
};

const defaultProps = {};

export default function NotesTableRow({ item }: NotesTableRowProps) {
  const [showEditNoteModal, setShowEditNoteModal] = useState(false);

  return (
    <tr>
      <td>{item.name}</td>
      <td>{timestampToDateString(item.createdAt)}</td>
      <td>{item.category}</td>
      <td className="text-truncate" style={{ maxWidth: '150px' }}>
        {item.content}
      </td>
      <td className="text-end">
        <div className="btn-group">
          <Button
            variant="dark"
            size="sm"
            aria-label="Edit"
            onClick={() => setShowEditNoteModal(true)}
          >
            <FontAwesomeIcon icon={faPenToSquare} size="lg" />
          </Button>
          <Button variant="dark" size="sm" aria-label="Archive">
            <FontAwesomeIcon icon={faBoxArchive} size="lg" />
          </Button>
          <Button variant="dark" size="sm" aria-label="Delete">
            <FontAwesomeIcon icon={faTrash} size="lg" />
          </Button>
          <EditNoteModal
            show={showEditNoteModal}
            onClose={() => setShowEditNoteModal(false)}
            noteId={item.createdAt}
          />
        </div>
      </td>
    </tr>
  );
}

NotesTableRow.defaultProps = defaultProps;
